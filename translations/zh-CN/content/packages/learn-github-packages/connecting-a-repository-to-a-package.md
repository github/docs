---
title: 将仓库连接到包
intro: '可以将存储库连接到 {% data variables.product.product_location %} 上的容器映像。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: 087775df9862c3b2a88dd555d9f571066fef8759
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130328'
---
通过将仓库连接到包，包登录页面将显示来自仓库的信息和链接，例如 README。

## 在 {% data variables.product.prodname_dotcom %} 上将仓库连接到用户拥有的包

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## 在 {% data variables.product.prodname_dotcom %} 上将仓库连接到组织拥有的包

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## 使用命令行将仓库连接到容器映像

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. 在 Dockerfile 中，添加此行，将 {% ifversion ghes %}`HOSTNAME`、{% endif %}`OWNER` 和 `REPO` 替换为详细信息：

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 例如，如果你是拥有 `my-repo` 的用户 `monalisa`，且 {% data variables.product.product_location %} 主机名为 `github.companyname.com`，则会将此行添加到 Dockerfile：
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 有关详细信息，请参阅 Docker 官方文档中的“[标签](https://docs.docker.com/engine/reference/builder/#label)”和 `opencontainers/image-spec` 存储库中的“[预定义的注释键](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys)”。

2. 构建容器映像。 此示例从当前目录中的 Dockerfile 生成映像，并分配映像名称 `hello_docker`。

  ```shell
  $ docker build -t hello_docker .
  ```
3. （可选）查看您想要标记的 Docker 映像的详细信息。
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. 使用所需的映像名称和托管目标标记 Docker 映像。
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  例如：
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. 如果尚未向 {% data variables.product.prodname_container_registry %} 验证，请验证。 有关详细信息，请参阅“[对 {% data variables.product.prodname_container_registry %} 进行身份验证](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry)”。
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. 推送容器映像到 {% data variables.product.prodname_container_registry %}。
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  例如：
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
