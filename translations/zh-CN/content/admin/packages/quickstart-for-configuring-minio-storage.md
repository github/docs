---
title: 配置 MinIO 存储快速入门
intro: '设置 MinIO 作为存储提供商以在企业上使用 {% data variables.product.prodname_registry %}。'
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

在 {% data variables.product.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，您必须准备第三方存储解决方案。

MinIO 在企业上提供对象存储并支持 S3 API 和 {% data variables.product.prodname_registry %}。

This quickstart shows you how to set up MinIO using Docker for use with {% data variables.product.prodname_registry %} but you have other options for managing MinIO besides Docker. For more information about MinIO, see the official [MinIO docs](https://docs.min.io/).

### 1. Choose a MinIO mode for your needs

| MinIO mode                                      | Optimized for                  | Storage infrastructure required      |
| ----------------------------------------------- | ------------------------------ | ------------------------------------ |
| Standalone MinIO (on a single host)             | Fast setup                     | 不适用                                  |
| MinIO as a NAS gateway                          | NAS (Network-attached storage) | NAS devices                          |
| Clustered MinIO (also called Distributed MinIO) | Data security                  | Storage servers running in a cluster |

For more information about your options, see the official [MinIO docs](https://docs.min.io/).

### 2. Install, run, and sign in to MinIO

1. Set up your preferred environment variables for MinIO.

    These examples use `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Install MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    更多信息请参阅官方的“[MinIO 快速入门指南](https://docs.min.io/docs/minio-quickstart-guide)”。

3. 使用您的 MinIO 访问密钥登录 MinIO。

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endmac %}

    您可以使用环境变量访问 MinIO 密钥：

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. 在您选择的模式下运行 MinIO。

   * 在单一主机上使用 Docker 运行 MinIO：

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     更多信息请参阅“[MinIO Docker 快速入门指南](https://docs.min.io/docs/minio-docker-quickstart-guide.html)”。

   * 使用 Docker 作为 NAS 网关运行 MinIO：

     This setup is useful for deployments where there is already a NAS you want to use as the backup storage for {% data variables.product.prodname_registry %}.

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

     For more information, see "[MinIO Gateway for NAS](https://docs.min.io/docs/minio-gateway-for-nas.html)."

   * Run MinIO using Docker as a cluster. This MinIO deployment uses several hosts and MinIO's erasure coding for the strongest data protection. To run MinIO in a cluster mode, see the "[Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

### 3. Create your MinIO bucket for {% data variables.product.prodname_registry %}

1. Install the MinIO client.

    ```shell
    $ docker pull minio/mc
    ```

2. Create a bucket with a host URL that {% data variables.product.prodname_ghe_server %} can access.

   * Local deployments example:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     This example can be used for MinIO standalone or MinIO as a NAS gateway.

   * Clustered deployments example:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```


### 后续步骤

To finish configuring storage for {% data variables.product.prodname_registry %}, you'll need to copy the MinIO storage URL:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

For the next steps, see "[Configuring third-party storage for packages](/admin/packages/configuring-third-party-storage-for-packages)."