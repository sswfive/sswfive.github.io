---
title: 通过SMTP实现邮件推送服务
date: 2025-04-23 01:17:06
tags: 
  - 邮件推送
  - python工程实践
categories: 
  - 技术实践
---

最近有一个需要在 W平台开发一个邮件群发推送的功能需求，经过调研，大概有如下几种选型方案:

- 开源项目

  - [message-pusher](https://github.com/songquanpeng/message-pusher): 一款基于Go开发的消息推送服务，开箱即用，支持多种消息推送方式（包括：邮件消息、QQ、企企微应用号、企微群机器人、飞书机器人以及群组消息等），支持 Markdown,可通过 Docker 进行本地部署，也提供了官方部署站。

  - [Austin](https://github.com/ZhongFuCheng3y/austin): 一款基于 Java开发的消息推送平台，支持推送下发邮件、短信、微信服务号、微信小程序、企微、钉钉等消息类型，其核心特点就是统一的接口发送各种类型的消息，对消息生命周期全链路追踪，很适合私有化部署的场景。

- 第三方服务：

  - [阿里云的邮件推送服务](https://dm.console.aliyun.com/?spm=5176.12818093_47.console-base_search-panel.dvisited_directmail.3be92cc9OCSf1s#/directmail/Home/cn-hangzhou)（其他云厂商类似）
    - 免费额度：每个用户有2000封免费额度（每天200封）
    - 购买资源包：1w封半年包19.98元、5w 封半年包90元，[这里](https://common-buy.aliyun.com/?spm=5176.2020520150.101.d11.6b587528XxRASu&&commodityCode=dmbag#/buy)购买资源包
  - [SendGrid](https://sendgrid.com/)
    - 官方宣称：开始免费（有60天的免费使用权，且每天支持100封），然后按需付费。看[价格表](https://sendgrid.com/en-us/pricing)收费还是挺贵的，并没有进行使用体验过。

经过综合评估，本着价格合适、开发便捷、服务稳定可靠的选型原则，最终决定采用阿里云的邮件推送服务，下文将介绍基于阿里云的邮件推送服务实现群发功能。

## 主要流程

### 1. 准备（购买）域名

因为在创建发信域名时需要一个域名（该域名可无需备案），若当前没有域名，可点击[域名注册](https://wanwang.aliyun.com/domain?spm=5176.29677750.J_XmGx2FZCDAeIy2ZCWL7sW.66.4ff1154avWUX7l&scm=20140722.S_product@@%E4%BA%91%E4%BA%A7%E5%93%81@@999997._.RL_yuming-LOC_topbar~UND~product-OR_ser-PAR1_213e378817453385135946383eb684-V_4-RE_productNew-P0_0-P1_0)进行域名购买，购买完成后，需要进行认证，认证通过后方可使用，在阿里云的域名控制台中可查看已经购买的域名，同时需要确认域名状态为正常。

### 2. 创建发信域名

进入邮件推送控制台，在邮件设置中找到发信域名并新建域名，在新建域名可填写主域名，也可以填写二级域名（推荐），创建完成后，点击配置进入配置页面，根据发信配置中内容，需要去域名控制台域名解析添加记录，如下图操作。

![image-20250423004854853](/images/00-other-email.png)

参照上图配置完成后，回到邮件推送控制台的域名管理页中，点击验证，验证通过后列表页面的状态更新为验证通过。

### 3. 创建发信地址

接着点击发信地址页面，新建发信地址，需要填写发信域名（PS:填写第二步创建的域名）、账号（PS:此处我填写的是域名名称）、回信地址非必填、发信类型有两种批量邮件和触发邮件，根据我的需求我选择批量邮件类型，点击确认即可。创建完成后，发信地址列表会有一条记录，接着设置 STMP密码，记住此密码，在第四步中需要使用到。

再点击邮件标签，新建邮件标签，填写一个标签名称即可（PS：此名称回展示在邮件的发件人栏）。

至此，配置工作基本完成。

### 4. 使用 STMP 服务进行邮件发送

在阿里云的邮件推送服务中，支持以 API、SDK以及 STMP 三种方式进行调用。下文代码实现中基于 STMP+Python3进行实现，官网文档 Demo 链接参考：[SMTP 之 Python3.6 及以上调用示例](https://help.aliyun.com/zh/direct-mail/smtp-python3-6?spm=a2c4g.11186623.help-menu-29412.d_9_3.17f53bfcqhm765)



## 代码实现

- `pip install dotenv`

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import smtplib
import email
import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.header import Header
from email.utils import formataddr, make_msgid, formatdate
from typing import Union, List, Dict, Any, Tuple
from pathlib import Path
from dotenv import load_dotenv

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('AliyunEmailSender')

# 加载环境变量
load_dotenv()


class EmailConfig:
    """邮件配置类，用于存储SMTP服务器相关配置"""
    
    def __init__(
        self,
        username: str | None = None,
        password: str | None = None,
        smtp_host: str = 'smtpdm.aliyun.com',
        smtp_port: int = 80,
        from_alias: str | None = None,
        reply_to: str | None = None,
        use_ssl: bool | None = None,
        debug_level: int = 0
    ) -> None:
        """
        初始化邮件配置
        
        Args:
            username: SMTP用户名
            password: SMTP密码
            smtp_host: SMTP服务器地址
            smtp_port: SMTP服务器端口
            from_alias: 发件人显示名称
            reply_to: 回复地址
            use_ssl: 是否使用SSL连接，若为None则根据端口自动判断
            debug_level: SMTP调试级别 (0-无调试, 1-调试)
        """
        self.username = username or os.getenv('MAIL_USERNAME')
        self.password = password or os.getenv('MAIL_PASSWORD')
        self.smtp_host = smtp_host or os.getenv('MAIL_SMTP_HOST', 'smtpdm.aliyun.com')
        
        # 处理端口号
        if smtp_port is not None:
            self.smtp_port = smtp_port
        else:
            env_port = os.getenv('MAIL_SMTP_PORT')
            self.smtp_port = int(env_port) if env_port else 80
            
        self.from_alias = from_alias or os.getenv('MAIL_FROM_ALIAS')
        self.reply_to = reply_to or os.getenv('MAIL_REPLY_TO')
        
        # 自动判断是否使用SSL
        if use_ssl is None:
            self.use_ssl = self.smtp_port == 465
        else:
            self.use_ssl = use_ssl
            
        self.debug_level = debug_level
        
        # 验证配置
        self.validate()
        
    def validate(self) -> None:
        """验证配置的有效性"""
        if not all([self.username, self.password]):
            raise ValueError("SMTP配置错误: 用户名和密码不能为空")
        
        if not self.smtp_host:
            raise ValueError("SMTP配置错误: SMTP服务器地址不能为空")


class EmailContent:
    """邮件内容类，用于构建邮件内容"""
    
    def __init__(
        self,
        subject: str,
        html_body: str | None = None,
        text_body: str | None = None,
        attachments: list[Union[str, Path, Tuple[str, bytes, str]]] | None = None
    ) -> None:
        """
        初始化邮件内容
        
        Args:
            subject: 邮件主题
            html_body: HTML格式的邮件内容
            text_body: 纯文本格式的邮件内容
            attachments: 附件列表，可以是文件路径、Path对象或(文件名,数据,MIME类型)元组
        """
        self.subject = subject
        self.html_body = html_body
        self.text_body = text_body
        self.attachments = attachments or []
        
        # 验证内容
        self.validate()
        
    def validate(self) -> None:
        """验证邮件内容的有效性"""
        if not self.html_body and not self.text_body:
            raise ValueError("邮件内容错误: HTML和纯文本内容不能同时为空")


class SMTPEmailSender:
    """阿里云SMTP邮件服务封装类"""
    
    def __init__(self, config: EmailConfig | None = None) -> None:
        """
        初始化邮件发送器
        
        Args:
            config: 邮件配置，如果为None则使用环境变量创建默认配置
        """
        self.config = config or EmailConfig()
    
    def create_message(
        self,
        content: EmailContent,
        to_addresses: Union[str, List[str]],
        cc_addresses: Union[str, List[str]] | None = None,
        bcc_addresses: Union[str, List[str]] | None = None,
        extra_headers: Dict[str, str] | None = None
    ) -> MIMEMultipart:
        """
        创建邮件消息对象
        
        Args:
            content: 邮件内容
            to_addresses: 收件人地址
            cc_addresses: 抄送地址
            bcc_addresses: 密送地址
            extra_headers: 额外的邮件头部
            
        Returns:
            MIMEMultipart: 创建的邮件对象
        """
        # 处理收件人列表
        to_list = to_addresses.split(',') if isinstance(to_addresses, str) else to_addresses
        cc_list = cc_addresses.split(',') if isinstance(cc_addresses, str) and cc_addresses else []
        bcc_list = bcc_addresses.split(',') if isinstance(bcc_addresses, str) and bcc_addresses else []
        
        # 创建复合邮件
        msg = MIMEMultipart('alternative')
        msg['Subject'] = Header(content.subject)
        msg['From'] = formataddr([self.config.from_alias, self.config.username]) if self.config.from_alias else self.config.username
        msg['To'] = ','.join(to_list)
        
        if cc_list:
            msg['Cc'] = ','.join(cc_list)
        
        if self.config.reply_to:
            msg['Reply-to'] = self.config.reply_to
            
        # 添加消息ID和日期
        msg['Message-id'] = make_msgid()
        msg['Date'] = formatdate()
        
        # 添加额外头部
        if extra_headers:
            for key, value in extra_headers.items():
                msg[key] = value
        
        # 添加邮件内容
        if content.text_body:
            text_part = MIMEText(content.text_body, _subtype='plain', _charset='UTF-8')
            msg.attach(text_part)
            
        if content.html_body:
            html_part = MIMEText(content.html_body, _subtype='html', _charset='UTF-8')
            msg.attach(html_part)
        
        # 添加附件
        for attachment in content.attachments:
            self._add_attachment(msg, attachment)
            
        return msg
    
    def _add_attachment(
        self, 
        msg: MIMEMultipart, 
        attachment: Union[str, Path, Tuple[str, bytes, str]]
    ) -> None:
        """
        添加附件到邮件
        
        Args:
            msg: 邮件对象
            attachment: 附件，可以是文件路径、Path对象或(文件名,数据,MIME类型)元组
        """
        try:
            if isinstance(attachment, (str, Path)):
                # 文件路径
                path = Path(attachment)
                filename = path.name
                
                with open(path, 'rb') as f:
                    data = f.read()
                
                mimetype = 'application/octet-stream'
            else:
                # (文件名,数据,MIME类型)元组
                filename, data, mimetype = attachment
                
            part = MIMEApplication(data, Name=filename)
            part['Content-Disposition'] = f'attachment; filename="{filename}"'
            part['Content-Type'] = f'{mimetype}; name="{filename}"'
            msg.attach(part)
            
        except Exception as e:
            logger.error(f"添加附件失败: {str(e)}")
    
    def send(
        self,
        content: EmailContent,
        to_addresses: Union[str, List[str]],
        cc_addresses: Union[str, List[str]] | None = None,
        bcc_addresses: Union[str, List[str]] | None = None,
        extra_headers: Dict[str, str] | None = None
    ) -> bool:
        """
        发送邮件
        
        Args:
            content: 邮件内容
            to_addresses: 收件人地址，可以是字符串(逗号分隔)或列表
            cc_addresses: 抄送地址，可以是字符串(逗号分隔)或列表(可选)
            bcc_addresses: 密送地址，可以是字符串(逗号分隔)或列表(可选)
            extra_headers: 额外的邮件头部(可选)
            
        Returns:
            bool: 发送是否成功
        """
        # 处理收件人列表
        to_list = to_addresses.split(',') if isinstance(to_addresses, str) else to_addresses
        cc_list = cc_addresses.split(',') if isinstance(cc_addresses, str) and cc_addresses else []
        bcc_list = bcc_addresses.split(',') if isinstance(bcc_addresses, str) and bcc_addresses else []
        
        # 所有接收方
        receivers = to_list + cc_list + bcc_list
        
        # 创建邮件
        msg = self.create_message(content, to_addresses, cc_addresses, bcc_addresses, extra_headers)
        
        # 发送邮件
        try:
            # 创建SMTP客户端
            if self.config.use_ssl:
                client = smtplib.SMTP_SSL(self.config.smtp_host, self.config.smtp_port)
            else:
                client = smtplib.SMTP(self.config.smtp_host, self.config.smtp_port)
            
            # 设置调试级别
            if self.config.debug_level > 0:
                client.set_debuglevel(self.config.debug_level)
                
            try:
                # 登录
                client.login(self.config.username, self.config.password)
                
                # 发送邮件
                client.sendmail(self.config.username, receivers, msg.as_string())
                logger.info(f"邮件已成功发送至 {len(receivers)} 个收件人")
                return True
                
            except smtplib.SMTPException as e:
                logger.error(f"SMTP错误: {str(e)}")
                return False
                
            finally:
                # 确保关闭连接
                client.quit()
                
        except Exception as e:
            logger.error(f"邮件发送失败: {str(e)}")
            return False
    
    def send_email(
        self, 
        to_addresses: Union[str, List[str]], 
        subject: str, 
        html_body: str | None = None, 
        text_body: str | None = None, 
        cc_addresses: Union[str, List[str]] | None = None, 
        bcc_addresses: Union[str, List[str]] | None = None,
        attachments: list[Union[str, Path, Tuple[str, bytes, str]]] | None = None,
        extra_headers: Dict[str, str] | None = None
    ) -> bool:
        """
        兼容旧版API的发送邮件方法
        
        Args:
            to_addresses: 收件人地址，可以是字符串(逗号分隔)或列表
            subject: 邮件主题
            html_body: HTML格式的邮件内容(可选，但html_body和text_body至少需要一个)
            text_body: 纯文本格式的邮件内容(可选，但html_body和text_body至少需要一个)
            cc_addresses: 抄送地址，可以是字符串(逗号分隔)或列表(可选)
            bcc_addresses: 密送地址，可以是字符串(逗号分隔)或列表(可选)
            attachments: 附件列表(可选)
            extra_headers: 额外的邮件头部(可选)
            
        Returns:
            bool: 发送是否成功
        """
        try:
            # 构建邮件内容
            content = EmailContent(
                subject=subject,
                html_body=html_body,
                text_body=text_body,
                attachments=attachments
            )
            
            # 发送邮件
            return self.send(
                content=content,
                to_addresses=to_addresses,
                cc_addresses=cc_addresses,
                bcc_addresses=bcc_addresses,
                extra_headers=extra_headers
            )
            
        except ValueError as e:
            logger.error(f"邮件参数错误: {str(e)}")
            return False
        except Exception as e:
            logger.error(f"邮件发送失败: {str(e)}")
            return False


def main() -> None:
    """示例用法"""
    try:
        # 初始化邮件发送器 - 使用环境变量
        email_sender = SMTPEmailSender()
        
        # 收件人列表
        recipients = "129xxx1@qq.com,sxxx@163.com"
        
        # 邮件内容
        subject = "测试邮件 - 阿里云SMTP邮件服务"
        html_content = """
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { padding: 20px; max-width: 600px; margin: 0 auto; }
                .header { color: #333; }
                .content { line-height: 1.6; }
                .footer { margin-top: 30px; font-size: 12px; color: #999; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="header">这是一封测试邮件</h1>
                <div class="content">
                    <p>这是通过阿里云SMTP邮件服务发送的测试邮件。</p>
                    <p>如果您收到这封邮件，说明邮件发送功能正常工作。</p>
                </div>
                <div class="footer">
                    此邮件为系统自动发送，请勿回复。
                </div>
            </div>
        </body>
        </html>
        """
        text_content = "这是一封测试邮件。这是通过阿里云SMTP邮件服务发送的测试邮件。如果您收到这封邮件，说明邮件发送功能正常工作。\n\n此邮件为系统自动发送，请勿回复。"
        
        # 1. 使用兼容旧版API发送
        logger.info("正在发送测试邮件(方法1)...")
        success = email_sender.send_email(
            to_addresses=recipients,
            subject=subject,
            html_body=html_content,
            text_body=text_content
        )
        
        if success:
            logger.info("邮件发送成功!")
        else:
            logger.error("邮件发送失败!")
            
        # 2. 使用新API发送（更灵活）
        logger.info("正在发送测试邮件(方法2)...")
        email_content = EmailContent(
            subject=subject,
            html_body=html_content,
            text_body=text_content
        )
        
        success = email_sender.send(
            content=email_content,
            to_addresses=recipients
        )
        
        if success:
            logger.info("邮件发送成功!")
        else:
            logger.error("邮件发送失败!")
        
    except Exception as e:
        logger.exception(f"发生异常: {str(e)}")
        
    # 示例：使用自定义配置
    try:
        # 自定义配置
        custom_config = EmailConfig(
            username="custom@example.com",
            password="password123",
            smtp_host="smtp.example.com",
            smtp_port=587,
            from_alias="自定义发件人",
            use_ssl=False
        )
        
        # 仅作示例，不实际发送
        logger.info("使用自定义配置创建发送器示例")
        _ = SMTPEmailSender(config=custom_config)
        
    except Exception as e:
        logger.exception(f"自定义配置示例异常: {str(e)}")


if __name__ == "__main__":
    main() 
```

- `.env`

```bash
# 阿里云SMTP邮件服务配置
MAIL_USERNAME=your_mail_account@example.com  # 发信地址
MAIL_PASSWORD=your_smtp_password  # SMTP密码
MAIL_FROM_ALIAS=Your Name  # 发信人名称
MAIL_REPLY_TO=your_reply_address@example.com  # 回信地址(可选)
MAIL_SMTP_HOST=smtpdm.aliyun.com  # SMTP服务器
MAIL_SMTP_PORT=80  # SMTP端口(80或25为非SSL端口，465为SSL端口)
```

