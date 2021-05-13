---
title: 发布 Docker 映像
intro: '您可以将 Docker 映像发布到注册表，例如 Docker Hub 或 {% data variables.product.prodname_registry %}，作为持续集成 (CI) 工作流程的一部分。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 简介

本指南介绍如何创建执行 Docker 构建的工作流程，然后将 Docker 映像发布到 Docker Hub 或 {% data variables.product.prodname_registry %}。 通过单个工作流程，您可以将映像发布到单一注册表或多个注册表。

{% note %}

**注意：**如果要推送到另一个第三方 Docker 注册表，则“[发布映像到 {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)”部分可作为一个很好的模板。

{% endnote %}

### 基本要求

建议基本了解工作流程配置选项和如何创建工作流程文件。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

您可能还发现基本了解以下内容是有帮助的：

- [加密的密码](/actions/reference/encrypted-secrets)"
- "[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow)"
- "[配置 Docker 用于 {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)"

### 关于映像配置

本指南假定您对存储在 {% data variables.product.prodname_dotcom %} 仓库的 Docker 映像有完整的定义。 例如，仓库必须包含 _Dockerfile_ 以及执行 Docker 构建所需的任何其他文件才可创建映像。

在本指南中，我们将使用 Docker `build-push-action` 操作来构建 Docker 映像并将其推送到一个或多个 Docker 注册表。 更多信息请参阅 [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images)。

{% data reusables.actions.enterprise-marketplace-actions %}

### 将映像发布到 Docker Hub

{% data reusables.github-actions.release-trigger-workflow %}

在下面的示例工作流程中，我们使用 Docker `build-push-action` 操作构建 Docker 映像，如果构建成功，则将构建映像推送到 Docker Hub。

要推送到 Docker Hub，您需要有一个 Docker Hub 帐户，并创建一个 Docker Hub 仓库。 更多信息请参阅 Docker 文档中的“[将 Docker 容器映像推送到 Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)”。

Docker Hub 需要的 `build-push-action` 选项包括：

* `username` 和 `password`：这是您的 Docker Hub 用户名和密码。 我们建议将 Docker Hub 用户名和密码存储为机密，使它们不会公开在工作流程文件中。 更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
* `repository`：`DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY` 格式的 Docker Hub 仓库。

{% raw %}
```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### 发布映像到 {% data variables.product.prodname_registry %}

{% data reusables.github-actions.release-trigger-workflow %}

在下面的示例工作流程中，我们使用 Docker `build-push-action` 操作构建 Docker 映像，如果构建成功，则将构建映像推送到 {% data variables.product.prodname_registry %}。

{% data variables.product.prodname_registry %} 需要的 `build-push-action` 选项包括：

* `username`：您可以使用 {% raw %}`${{ github.actor }}`{% endraw %} 上下文自动使用触发工作流程运行的用户的用户名。 更多信息请参阅“[GitHub Actions 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。
* `password`：您可以使用自动生成的 `GITHUB_TOKEN` 密码作为密码。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。
* `registry`：必须设置为 `docker.pkg.github.com`。
* `repository`：必须以 `OWNER/REPOSITORY/IMAGE_NAME` 格式设置。 例如，对于 `http://github.com/octo-org/octo-repo` 上名为 `octo-image` stored on {% data variables.product.prodname_dotcom %} 的映像，`repository` 选项应设置为 `octo-org/octo-repo/octo-image`。

{% raw %}
```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### 发布映像到 Docker Hub 和 {% data variables.product.prodname_registry %}

在单一工作流程中，您可以对每个注册表使用 `build-push-action` 操作，以将 Docker 映像发布到多个注册表。

下面的示例工作流程使用前面章节中的 `build-push-action` 步骤（“[发布映像到 Docker Hub](#publishing-images-to-docker-hub)”和“[发布映像到 {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)”）来创建同时推送到两个注册表的单一工作流程。

{% raw %}
```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

上面的工作流程检出 {% data variables.product.prodname_dotcom %} 仓库，并且使用两次 `build-push-action` 操作构建并推送 Docker 映像到 Docker Hub 和 {% data variables.product.prodname_registry %}。 对于这两个步骤， 它设置 `build-pow-action` 选项 [`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref) 自动使用工作流程事件的 Git 引用标记构建的 Docker 映像。 此工作流程在发布 {% data variables.product.prodname_dotcom %} 版本时触发，因此对两个注册表的引用将是该版本的 Git 标记。
