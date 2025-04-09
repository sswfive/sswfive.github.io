---
title: 关于MlFlow的实践总结
date: 2025-04-09 14:03:56
tags: 
  - Mlflow
categories: 
  - ModelOps
---

> 基于 Mlflow 进行业务开发已有几个月了，一直忙于开发，没有时间去总结，近期找了个时间好好梳理总结了，故记录下来了。

## MLflow中的一些概念

### 功能特性

MlFlow（[项目地址](https://github.com/mlflow/mlflow)、[官方文档](https://mlflow.org/)）是一个开源的机器学习模型管理平台，由 Databricks团队开发，可用于解决机器学习领域中的实验管理、模型管理、模型部署以及协作中的关键问题，当前项目 star数已超过20k，社区还是比较活跃的。

目前有六大核心组件，可按需应用到不同的场景中：

- [Experiment Tracking](https://mlflow.org/docs/latest/tracking.html)：一组 API，用于记录 ML 实验中的模型、参数和结果，并使用交互式 UI 进行比较。
- [Model Packaging](https://mlflow.org/docs/latest/models.html) ：打包模型及其元数据（如依赖项版本）的标准格式，确保可靠的部署和强大的可重复性。
- [Model Registry](https://mlflow.org/docs/latest/model-registry.html) ：一个集中的模型存储、一组 API 和 UI，用于协作管理 MLflow 模型的整个生命周期。
- [Serving](https://mlflow.org/docs/latest/deployment/index.html) ：用于在 Docker、Kubernetes、Azure ML 和 AWS SageMaker 等平台上进行无缝模型部署以进行批量和实时评分的工具。
- [Evaluation](https://mlflow.org/docs/latest/model-evaluation/index.html) ：一套自动化模型评估工具，与实验跟踪无缝集成，以记录模型性能并直观地比较多个模型的结果。
- [Observability](https://mlflow.org/docs/latest/llms/tracing/index.html)：跟踪与各种 GenAI 库和 Python SDK 的集成以进行手动检测，提供更流畅的调试体验并支持在线监控。

### 模型格式规范

![image-20250409155156761](../../../images/03-mlflow.png)



## 基于生产可用的部署方式

本部署采用 Mlflow+PostgreSQL+MinIO 的部署架构, 说明： PostgreSQL和 MinIO的部署不在此文章赘述，默认这两服务是正常可用状态。

### 虚拟环境方式

> 默认 conda 命令是可用的

#### 创建工作目录

```Bash
# 创建MLflow部署目录
mkdir -p /opt/mlflow-deploy
cd /opt/mlflow-deploy

# 创建日志目录
mkdir -p /var/log/mlflow
```

#### 创建并配置Conda环境

```Bash
# 创建Python 3.11的Conda环境
conda create -n mlflowpy311envpro python=3.11 -y

# 激活环境
conda activate mlflowpy311envpro

# 安装MLflow 2.18和相关依赖
pip install mlflow psycopg2-binary boto3 -i https://pypi.tuna.tsinghua.edu.cn/simple/ 
```

#### 配置环境变量

```bash
cat > /opt/mlflow-production/mlflow.env << 'EOL'
# MinIO配置
export MLFLOW_S3_ENDPOINT_URL=http://192.168.10.117:9966
export AWS_ACCESS_KEY_ID=minio@2025
export AWS_SECRET_ACCESS_KEY=minio@admin
export MLFLOW_S3_IGNORE_TLS=true

# 分片上传优化配置
export MLFLOW_ENABLE_MULTIPART_UPLOAD=true
export MLFLOW_MULTIPART_UPLOAD_CHUNK_SIZE=26214400  # 25MB
export MLFLOW_MAX_PARALLELISM=16                   # 并行上传线程数
export MLFLOW_S3_MAX_THREADS=16                     # S3客户端线程池大小
export MLFLOW_S3_MAX_CONNECTION_POOL_SIZE=100       # 连接池大小
export MLFLOW_S3_CONNECT_TIMEOUT=60                 # 连接超时(秒)
export MLFLOW_S3_READ_TIMEOUT=300                   # 读取超时(秒)
export MLFLOW_ARTIFACT_UPLOAD_TIMEOUT=7200         # 制品上传超时时间(秒)

# 数据库配置
export MLFLOW_BACKEND_STORE_URI=postgresql://root:postgre2025@192.168.10.117:30438/mlflow   # 此数据库需要手动先创建好，待启动 mlflow 时会自动初始化数据库表。

# Artifact存储配置
export MLFLOW_ARTIFACT_ROOT=s3://mlflowhub   #此 Bucket需要手动在MinIO的 Dashboard中创建

# 服务器配置
export MLFLOW_HOST=0.0.0.0
export MLFLOW_PORT=8968
EOL

# 设置权限
chmod 600 /opt/mlflow-deploy/mlflow.env
```

#### 创建启动脚本

```bash
cat > /opt/mlflow-deploy/start_mlflow.sh << 'EOL'
#!/bin/bash
# 加载环境变量
source /opt/mlflow-deploy/mlflow.env

# 激活Conda环境
source /root/miniconda3/bin/activate mlflowpy311envpro

# 设置Python缓冲区
export PYTHONUNBUFFERED=1

# 为boto3设置配置
export S3_USE_SIGV4=True
export AWS_S3_ADDRESSING_STYLE=virtual

# 启动MLflow服务
mlflow server \
  --backend-store-uri ${MLFLOW_BACKEND_STORE_URI} \
  --default-artifact-root ${MLFLOW_ARTIFACT_ROOT} \
  --host ${MLFLOW_HOST} \
  --port ${MLFLOW_PORT} \
  --artifacts-destination ${MLFLOW_ARTIFACT_ROOT} \
  --serve-artifacts \
  --workers 8 \
  > /var/log/mlflow/mlflow.log 2>&1
EOL

# 设置权限
chmod +x /opt/mlflow-deploy/start_mlflow.sh
```

#### 启动服务

- 下列两种启动方式，选择一种即可，生产部署建议采用systemd的方式启动

##### 使用Systemd服务

- 创建systemd服务

```javascript
cat > /etc/systemd/system/mlflow.service << 'EOL'
[Unit]
Description=MLflow Tracking Server
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/mlflow-production
ExecStart=/bin/bash -c 'source /root/miniconda3/bin/activate mlflowpy311envpro && mlflow server --backend-store-uri postgresql://root:postgre2025@192.168.10.117:30438/mlflow --default-artifact-root s3://mlflowhub --host 0.0.0.0 --port 8968 --artifacts-destination s3://mlflowhub --serve-artifacts'
Environment="MLFLOW_S3_ENDPOINT_URL=http://192.168.10.117:9966"
Environment="AWS_ACCESS_KEY_ID=minio@2025"
Environment="AWS_SECRET_ACCESS_KEY=minio@admin"
Environment="MLFLOW_S3_IGNORE_TLS=true"
Environment="MLFLOW_ENABLE_MULTIPART_UPLOAD=true"
Environment="MLFLOW_MULTIPART_UPLOAD_CHUNK_SIZE=26214400"
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOL

# 重新加载systemd配置
systemctl daemon-reload
```

- 启动MLflow服务

```Bash
# 启动服务
systemctl start mlflow

# 设置开机自启
systemctl enable mlflow

# 检查服务状态
systemctl status mlflow
```

- mlflow日志查看

```Bash
# 查看最新日志
tail -f /var/log/mlflow/mlflow.log

# 查看错误信息
grep "ERROR" /var/log/mlflow/mlflow.log

# 重启服务
systemctl restart mlflow
```

##### 使用nohup服务

改写启动脚本，在启动命令前后加上`nohup &`即可

```bash 
cat > /opt/mlflow-deploy/start_mlflow.sh << 'EOL'
#!/bin/bash
# 加载环境变量
source /opt/mlflow-deploy/mlflow.env

# 激活Conda环境
source /root/miniconda3/bin/activate mlflowpy311envpro

# 设置Python缓冲区
export PYTHONUNBUFFERED=1

# 为boto3设置配置
export S3_USE_SIGV4=True
export AWS_S3_ADDRESSING_STYLE=virtual

# 启动MLflow服务 
# ###############修改此处###########################
nohup mlflow server \
  --backend-store-uri ${MLFLOW_BACKEND_STORE_URI} \
  --default-artifact-root ${MLFLOW_ARTIFACT_ROOT} \
  --host ${MLFLOW_HOST} \
  --port ${MLFLOW_PORT} \
  --artifacts-destination ${MLFLOW_ARTIFACT_ROOT} \
  --serve-artifacts \
  --workers 8 \
  > /var/log/mlflow/mlflow.log 2>&1 &
EOL

# 设置权限
chmod +x /opt/mlflow-deploy/start_mlflow.sh
```



### Docker-compose方式

#### 环境要求

- Docker 和 Docker Compose
- 确保 8968 端口未被占用
- 确保 MinIO 服务已启动并可访问
- 确保 PostgreSQL 数据库已创建

#### 创建docker-compose.yml

```yaml
version: '3.3'

services:
  mlflow:
    build: .
    container_name: mlflow-server
    restart: always
    ports:
      - "${MLFLOW_HOST_PORT:-8968}:${MLFLOW_PORT:-5000}"
    volumes:
      - ${MLFLOW_DATA_DIR:-./mlruns}:/mlflow/mlruns
    environment:
      - TZ=${TZ:-Asia/Shanghai}
      - PYTHONUNBUFFERED=${PYTHONUNBUFFERED:-1}
      - GUNICORN_CMD_ARGS=${GUNICORN_CMD_ARGS}
      # MLflow 基础配置
      - MLFLOW_TRACKING_URI=${MLFLOW_TRACKING_URI}
      # PostgreSQL 配置
      - MLFLOW_BACKEND_STORE_URI=${MLFLOW_BACKEND_STORE_URI}
      # MinIO 配置
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
      - MLFLOW_S3_ENDPOINT_URL=${MLFLOW_S3_ENDPOINT_URL}
      - MLFLOW_DEFAULT_ARTIFACT_ROOT=${MLFLOW_DEFAULT_ARTIFACT_ROOT}
      # SSL 配置
      - MLFLOW_S3_IGNORE_TLS=${MLFLOW_S3_IGNORE_TLS}
      # 大文件上传配置
      - MLFLOW_ENABLE_PROXY_MULTIPART_UPLOAD=${MLFLOW_ENABLE_PROXY_MULTIPART_UPLOAD}
      - MLFLOW_MULTIPART_UPLOAD_MINIMUM_FILE_SIZE=${MLFLOW_MULTIPART_UPLOAD_MINIMUM_FILE_SIZE}
      - MLFLOW_MULTIPART_UPLOAD_CHUNK_SIZE=${MLFLOW_MULTIPART_UPLOAD_CHUNK_SIZE}
    command: mlflow server --host ${MLFLOW_HOST:-0.0.0.0} --port ${MLFLOW_PORT:-5000}
    networks:
      - mlflow-network

networks:
  mlflow-network:
    driver: bridge
```

#### 创建Dockerfile

```dockerfile
FROM ghcr.io/mlflow/mlflow:v2.20.3

# 设置工作目录
WORKDIR /mlflow

# 复制依赖文件
COPY requirements.txt /mlflow/requirements.txt

# 设置阿里云镜像源并安装依赖
RUN pip install --no-cache-dir -i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com -r requirements.txt

# 复制配置文件
COPY .env /mlflow/.env

# 设置环境变量
ENV PYTHONUNBUFFERED=1
ENV GUNICORN_CMD_ARGS="--timeout 120 --workers 4 --threads 2"

# 暴露端口
EXPOSE 5000

# 启动命令
CMD ["mlflow", "server", "--host", "0.0.0.0", "--port", "5000"]
```

#### 创建requirements.txt

```
psycopg2-binary==2.9.9
boto3==1.34.34
```

#### 创建.env

```
# 容器配置
MLFLOW_HOST_PORT=8968
MLFLOW_DATA_DIR=./mlruns
TZ=Asia/Shanghai

# MLflow 基础配置
PYTHONUNBUFFERED=1
GUNICORN_CMD_ARGS="--timeout 120 --workers 4 --threads 2"
MLFLOW_TRACKING_URI=http://192.168.3.117:8968

# PostgreSQL 配置
MLFLOW_BACKEND_STORE_URI=postgresql://root:postgre2025@192.168.3.117:30438/mlflow

# MinIO 配置 - 使用 MLflow 需要的环境变量名
AWS_ACCESS_KEY_ID=H0B1O3rSjic9uvEt  
AWS_SECRET_ACCESS_KEY=sKY9teJFLByLDjs3Ux4jw65koq3b7ihl
MLFLOW_S3_ENDPOINT_URL=http://192.168.2.117:9966
MLFLOW_DEFAULT_ARTIFACT_ROOT=s3://mlflowhub/

# 禁用 SSL 验证
MLFLOW_S3_IGNORE_TLS=true

# 大文件上传配置
MLFLOW_ENABLE_PROXY_MULTIPART_UPLOAD=true
MLFLOW_MULTIPART_UPLOAD_MINIMUM_FILE_SIZE=104857600
MLFLOW_MULTIPART_UPLOAD_CHUNK_SIZE=26214400

# 服务器配置
MLFLOW_HOST=0.0.0.0
MLFLOW_PORT=5000
MLFLOW_WORKERS=4
```

#### 启动服务

```bash
docker-compose up -d
```

#### 验证服务

```bash
# 检查容器状态
docker-compose ps

# 检查日志
docker-compose logs -f
```

7. 访问 MLflow UI:
   - 打开浏览器访问: http://192.16.3.117:9868

#### FAQ

2. 初始化数据库:

   > 正常情况下，只要在PostgreSQL中创建好mlflow数据库后，在启动服务时会自动初始化数据库表，但在实践中确实也遇到了 没有自动初始化的情况，所以提供下列方法

```bash
# 使用环境变量连接数据库
docker-compose run --rm mlflow mlflow db upgrade -U ${MLFLOW_BACKEND_STORE_URI}

# 或者在本地安装 mlflow 后执行
pip install mlflow
mlflow db upgrade -U postgresql://root:postgre2025@192.168.3.117:30438/mlflow
```

5. 
