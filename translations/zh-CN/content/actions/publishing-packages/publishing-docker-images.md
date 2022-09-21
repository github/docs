---
title: 发布 Docker 映像
intro: '您可以将 Docker 映像发布到注册表，例如 Docker Hub 或 {% data variables.product.prodname_registry %}，作为持续集成 (CI) 工作流程的一部分。'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410289'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何创建执行 Docker 构建的工作流程，然后将 Docker 映像发布到 Docker Hub 或 {% data variables.product.prodname_registry %}。 通过单个工作流程，您可以将映像发布到单一注册表或多个注册表。

{% note %}

注意：如果你想推送到另一个第三方 Docker 注册表，“[将映像发布到 {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)”部分中的示例可以用作一个很好的模板。

{% endnote %}

## 先决条件

建议基本了解工作流程配置选项和如何创建工作流程文件。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)。”

您可能还发现基本了解以下内容是有帮助的：

- [加密的机密](/actions/reference/encrypted-secrets)
- [工作流中的身份验证](/actions/reference/authentication-in-a-workflow){% ifversion fpt or ghec %}
- [使用 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry){% else %}
- [使用 Docker 注册表](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry){% endif %}

## 关于映像配置

本指南假定您对存储在 {% data variables.product.prodname_dotcom %} 仓库的 Docker 映像有完整的定义。 例如，存储库必须包含一个 Dockerfile，以及执行 Docker 构建以创建映像所需的任何其他文件。

在本指南中，我们将使用 Docker `build-push-action` 操作来构建 Docker 映像并将其推送到一个或多个 Docker 注册表。 有关详细信息，请参阅 [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)。

{% data reusables.actions.enterprise-marketplace-actions %}

## 将映像发布到 Docker Hub

{% data reusables.actions.release-trigger-workflow %}

在下面的示例工作流中，我们使用 Docker `login-action` 和 `build-push-action` 操作来构建 Docker 映像，如果构建成功，则将构建的映像推送到 Docker Hub。

要推送到 Docker Hub，您需要有一个 Docker Hub 帐户，并创建一个 Docker Hub 仓库。 有关详细信息，请参阅 Docker 文档中的“[将 Docker 容器映像推送到 Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)”。

Docker Hub 所需的 `login-action` 选项是：
* `username` 和 `password`：这是 Docker Hub 用户名和密码。 我们建议将 Docker Hub 用户名和密码存储为机密，使它们不会公开在工作流程文件中。 有关详细信息，请参阅“[创建和使用已加密的机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)。”

Docker Hub 所需的 `metadata-action` 选项是：
* `images`：你正在构建/推送到 Docker Hub 的 Docker 映像的命名空间和名称。

Docker Hub 所需的 `build-push-action` 选项是：
* `tags`：你的新映像的标签，格式为 `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`。 您可以如下所示设置单个标记，或在列表中指定多个标记。
* `push`：如果设置为 `true`，则映像将推送到注册表（如果成功构建）。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

上述工作流签出 {% data variables.product.prodname_dotcom %} 存储库，使用 `login-action` 登录注册表，然后使用 `build-push-action` 操作：基于存储库的 `Dockerfile` 构建 Docker 映像；将映像推送到 Docker Hub，并向映像应用标签。

## 发布映像到 {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

在下面的示例工作流中，我们使用 Docker `login-action`{% ifversion fpt or ghec %}、`metadata-action`、{% endif %}和 `build-push-action` 操作来构建 Docker 映像，如果构建成功，则将构建的映像推送到 {% data variables.product.prodname_registry %}。

{% data variables.product.prodname_registry %} 所需的 `login-action` 选项是：
* `registry`：必须设置为 {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}。
* `username`：你可以使用 {% raw %}`${{ github.actor }}` {% endraw %} 上下文自动使用触发工作流运行的用户的用户名。 有关详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts#github-context)。”
* `password`：可以使用自动生成 `GITHUB_TOKEN` 的密码机密。 有关详细信息，请参阅“[使用 GITHUB_TOKEN 进行身份验证](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)。”

{% ifversion fpt or ghec %} {% data variables.product.prodname_registry %} 所需的 `metadata-action` 选项是：
* `images`：正在构建的 Docker 映像的命名空间和名称。
{% endif %}

{% data variables.product.prodname_registry %} 所需的 `build-push-action` 选项是：{% ifversion fpt or ghec %}
* `context`：将构建的上下文定义为位于指定路径中的文件集。{% endif %}
* `push`：如果设置为 `true`，则映像将推送到注册表（如果成功构建）。{% ifversion fpt or ghec %}
* `tags` 和 `labels`：它们由 `metadata-action` 的输出填充。{% else %}
* `tags`：必须采用格式 {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION` 设置。 
  
   例如，对于存储在 `https://HOSTNAME/octo-org/octo-repo` 的 {% data variables.product.prodname_ghe_server %} 上的名为 `octo-image` 的映像，`tags` 选项应设置为 `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`。
  
   例如，对于存储在 `http://github.com/octo-org/octo-repo` 的 {% data variables.product.prodname_dotcom %} 上的名为 `octo-image` 的映像，`tags` 选项应设置为 `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}。 您可以如下所示设置单个标记，或在列表中指定多个标记。{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

上述工作流程通过推送到“发行版”分支触发。 它签出 GitHub 存储库，并使用 `login-action` 登录到 {% data variables.product.prodname_container_registry %}。 然后，它将提取 Docker 映像的标签和标记。 最后，它使用 `build-push-action` 操作构建映像并将其发布到 {% data variables.product.prodname_container_registry %}。

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

上述工作流签出 {% data variables.product.product_name %} 存储库，使用 `login-action` 登录注册表，然后使用 `build-push-action` 操作：基于存储库的 `Dockerfile` 构建 Docker 映像；将映像推送到 Docker 注册表，并将提交 SHA 和发布版本应用为映像标签。
{% endif %}

## 发布映像到 Docker Hub 和 {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

在单个工作流中，你可以通过对每个注册表使用 `login-action` 和 `build-push-action` 操作将 Docker 映像发布到多个注册表。

以下示例工作流使用上述部分（“[将映像发布到 Docker Hub](#publishing-images-to-docker-hub)”和“[将映像发布到 {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)”）中的步骤创建推送到两个注册表的单个工作流。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}
      
      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

上述工作流签出 {% data variables.product.product_name %} 存储库，使用 `login-action` 两次以登录到两个注册表，并使用 `metadata-action` 操作生成标记和标签。
然后 `build-push-action` 操作构建 Docker 映像并将其推送到 Docker Hub 和 {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Docker 注册表{% endif %}。
