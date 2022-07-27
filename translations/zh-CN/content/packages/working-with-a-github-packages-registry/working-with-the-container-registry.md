---
title: 使用容器注册表
intro: '您可以在 {% data variables.product.prodname_container_registry %} 中存储和管理 Docker 和 OCI 映像，该管理器使用包命名空间 `https://{% data reusables.package_registry.container-registry-hostname %}`。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## 关于 {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

To use the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, your site administrator must first configure {% data variables.product.prodname_registry %} for your instance **and** enable subdomain isolation. 更多信息请参阅“[企业的 GitHub Packages 使用入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”和“[启用子域隔离](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)”。

{% endif %}

## 关于 {% data variables.product.prodname_container_registry %} 支持

{% data variables.product.prodname_container_registry %} 目前支持以下容器映像格式：

* [Docker 映像清单 V2，架构 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) 规格](https://github.com/opencontainers/image-spec)

在安装或发布 Docker 映像时，{% data variables.product.prodname_container_registry %} 支持外部层，如 Windows 映像。

## 向 {% data variables.product.prodname_container_registry %} 验证

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% ifversion ghes %}请确保将下面示例中的 `HOSTNAME` 替换为 {% data variables.product.product_location_enterprise %} 主机名或 IP 地址。{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## 推送容器映像

此示例推送最新版本的 `IMAGE_NAME`。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

此示例推送 `2.5` 版的映像。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

首次发布包时，默认可见性是私有的。 要更改可见性或设置访问权限，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。

## 拉取容器映像

### 通过摘要拉取

为了确保始终使用相同的映像，您可以通过 `digest` SHA 值指定要拉取的准确容器映像版本。

1. 要查找摘要 SHA 值，请使用 `docker inspect` 或 `docker pull`，并复制 `Digest:` 后的 SHA 值
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. 按需要在本地删除映像。
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. 拉取图像名称后有 `@YOUR_SHA_VALUE` 的容器映像。
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### 按名称拉取

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### 按名称和版本拉取

显示按名称和 `1.14.1` 版本标记拉取映像的 Docker CLI 示例：
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### 按名称和最新版本拉取

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## 构建容器映像

此示例构建 `hello_docker` 映像：
  ```shell
  $ docker build -t hello_docker .
  ```

## 标记容器映像

1. 找到要标记的 Docker 映像的 ID。
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. 使用映像 ID 以及所需的映像名称和托管目标标记 Docker 映像。
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
