---
title: 新的生产力
date: 2025-04-01 22:19:37
tags:
  - Mac
categories:
  - 工具
---

自进入2025年后，用了五年多的16寸MacBookPo（2019款 32G+512）就 很突然的开始出现各种自动重启、频繁死机状态，很影响心态。期间打Apple售后线上排查过、也拿去市里最大的 Apple 店线下排查过，售后人员给出的结论是硬件有问题需要更换，考虑是 Inter老芯片加上已有些年限，再花几千维修费，着实有些不值，权衡利弊之后， 最终在3月12日线上买一台新的14寸的MacBookPro（M4 Pro + 48G+512, 14+20）,在国补-2000，教育补贴-1650的加持下，性价比自认为还是相当 OK 的。 一直想写下来记录一下，奈何三月工作太忙，一直拖到今天才有时间，接下来介绍一下新设备到手后的一些常用设置和常用软件的安装。



## 装机设置

### 默认配置修改

```bash
# 禁止 “Are you sure you want to open this application?” 提示
defaults write com.apple.LaunchServices LSQuarantine -bool false

# 禁止磁盘映像验证
defaults write com.apple.frameworks.diskimages skip-verify -bool true
defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

# 桌面隐藏外部磁盘和可移动介质
defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false
defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false

# 显示所有扩展名和隐藏文件
defaults write -g AppleShowAllExtensions -bool true
defaults write com.apple.finder AppleShowAllFiles -bool true

# 禁用修改扩展名时的警告
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

# 显示底部地址栏
defaults write com.apple.finder ShowPathbar -bool true

# 禁止创建 .DS_Store 文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```



### 允许打开任何来源的应用

```bash
sudo spctl --master-disable
```

- 然后去『`系统设置 > 安全性与隐私 > 安全性 > 任何来源`』打开



### 提示 已损坏/无法确认开发者身份

开启【任何来源】后，还有部分软件在安装后会提示【已损坏】或【无法确认开发者身份】，需要使用`xattr`命令

```bash
sudo xattr -dr com.apple.quarantine /Applications/[应用名称].app
```

- 当不知道如何找到应用名称时，打开一个终端和访达中的应用程序，将需要执行的软件拖到终端就可以知道软件的全路径，接着拷贝最后的名称即可。

### 终端Git中文乱码

```bash
git config --global core.quotepath false
```



## 装机必备软件

> 做为一个开发者必备的装机软件

### Xcode Command Line Tools

```bash
# 安装 Xcode Command Line Tools
xcode-select --install

# 删除 Xcode Command Line Tools
sudo rm -rf /Library/Developer/CommandLineTools
```



### [Homebrew](https://brew.sh/)

- Mac的软件包管理工具，用于安装/卸载/管理各种软件，包括命令行工具、库和应用程序等
- [Gitihub地址](https://github.com/Homebrew/brew)

```bash
# 官方源安装
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 国内源完整版安装
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 极速安装（update 功能需要命令修复）
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```

- 安装参考链接：
  - [Homebrew 国内安装脚本](https://gitee.com/cunkai/HomebrewCN)
  - [Homebrew 安装教程](https://github.com/ineo6/homebrew-install)

- brew 常用命令

```bash
# 更新 Homebrew
brew update

# 安装指定的软件包
brew install <package>

# 卸载指定的软件包
brew uninstall <package>

# 搜索可用的软件包，并显示匹配的结果
brew search <query>

# 列出已安装的软件包
brew list

# 查看可以升级的软件包
brew outdated

# 升级所有软件包到最新版本
brew upgrade
# 升级指定的软件包到最新版本
brew upgrade <package>

# 查看指定软件包的信息，包括版本号、安装路径、依赖关系等
brew info <package>

# 清理 Homebrew 临时文件和旧版本的软件包
brew cleanup
# 查看可以清理的 Homebrew 临时文件和旧版本的软件包
brew cleanup -n
```



### [iTerm2](https://iterm2.com/)

- 系统内置终端替代品
- [安装说明](https://formulae.brew.sh/cask/iterm2)

```bash
brew install --cask iterm2
```

- 配色方案参考链接
  - [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
  - [iTerm2-Material-Design](https://github.com/MartinSeeler/iterm2-material-design)
- 修改默认shell为zsh

```bash
# 查看所有的 shell
cat /etc/shells

# 查看当前窗口使用的 shell
echo $SHELL

# 查看系统用户默认的 shell
cat /etc/passwd | grep sh

# 切换系统默认 shell
chsh -s /bin/zsh
```

- 常用快捷键

| **操作**      | **含义**               |
| ------------- | ---------------------- |
| ⌘ + N         | 新建窗口               |
| ⌘ + T         | 新建 Tab               |
| ⌘ + W         | 关闭 Tab / 窗口        |
| ⌘ + ←         | 切换到上一个 Tab       |
| ⌘ + →         | 切换到下一个 Tab       |
| ⌘ + 数字      | 快速切换 Tab           |
| ⌘ + D         | 垂直分屏               |
| ⌘ + Shift + D | 水平分屏               |
| ⌘ + Enter     | 切换全屏               |
| ⌘ + F         | 查找                   |
| ⌘ + /         | 查看光标的位置         |
| Ctrl + P      | 上一条命令             |
| Ctrl + R      | 搜索命令历史           |
| Ctrl + L      | 清屏                   |
| Ctrl + U      | 清除当前行             |
| Ctrl + W      | 删除光标前面的一个单词 |
| Ctrl + K      | 删除光标后面的所有字符 |
| Ctrl + A      | 移动光标到行首         |
| Ctrl + E      | 移动光标到行尾         |

### [mas-cli](https://github.com/mas-cli/mas)

- Mac App Store命令行工具
- [brew 安装](https://formulae.brew.sh/formula/mas)

```bash
brew install mas
```

- 常用命令

```bash
# 搜索应用程序
mas search [query]

# 列出已经安装的应用程序
mas list

# 通过应用程序的 ID 进行安装，可以从 search 命令或者应用程序网页中获取
mas install [app-id]

# 升级已经安装的应用程序
mas upgrade

# 列出有更新可用的应用程序
mas outdated
```

### [duti](https://github.com/moretension/duti)

- 设置默认应用程序的命令行工具
- [brew 安装](https://formulae.brew.sh/formula/duti)

```bash
brew install duti
```

- 常用命令

```
# 查看指定文件类型的默认应用程序
duti -x txt

# 更改文件类型的默认应用程序
duti -s com.apple.TextEdit .txt all
```



## 科学上网

- [wmsxwd](https://wmsxwd-1.men/#/register?code=FbDoq18e)
- [星辰大海](https://www.52xcjs.xyz/)
- [一元机场](https://xn--4gq62f52gdss.ink/#/register?code=DjMX1sMm)
