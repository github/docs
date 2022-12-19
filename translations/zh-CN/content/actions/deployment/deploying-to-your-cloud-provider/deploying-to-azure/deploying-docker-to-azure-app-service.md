---
title: 将 Docker 部署到 Azure App Service
intro: 作为持续部署 (CD) 工作流程的一部分，您可以将 Docker 容器部署到 Azure App Service。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Docker
  - Azure App Service
ms.openlocfilehash: bfae92b757e4d3224efc1e94f1f4377a4183e4d2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410353'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建 Docker 容器并将其部署到 [Azure 应用服务](https://azure.microsoft.com/services/app-service/)。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

注意：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 先决条件

在创建 {% data variables.product.prodname_actions %} 工作流程之前，首先需要完成以下设置步骤：

{% data reusables.actions.create-azure-app-plan %}

1. 创建 Web 应用。

   例如，可以使用 Azure CLI 创建 Azure App Service web app：

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --deployment-container-image-name nginx:latest
   ```

   在上面的命令中，将参数替换为你自己的值，其中 `MY_WEBAPP_NAME` 是 Web 应用的新名称。

{% data reusables.actions.create-azure-publish-profile %}

1. 设置 web app 的注册表凭据。

   使用 `repo` 和 `read:packages` 范围创建个人访问令牌。 有关详细信息，请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

   将 `DOCKER_REGISTRY_SERVER_URL` 设置为 `https://ghcr.io`，将 `DOCKER_REGISTRY_SERVER_USERNAME` 设置为拥有存储库的 GitHub 用户名或组织，并将 `DOCKER_REGISTRY_SERVER_PASSWORD` 设置为你的个人访问令牌。 这将提供 Web 应用凭据，以便在工作流程将新构建的映像推送到注册表后，它可以拉取容器映像。 可以使用以下 Azure CLI 命令执行此操作：

   ```shell
    az webapp config appsettings set \
        --name MY_WEBAPP_NAME \
        --resource-group MY_RESOURCE_GROUP \
        --settings DOCKER_REGISTRY_SERVER_URL=https://ghcr.io DOCKER_REGISTRY_SERVER_USERNAME=MY_REPOSITORY_OWNER DOCKER_REGISTRY_SERVER_PASSWORD=MY_PERSONAL_ACCESS_TOKEN
```

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流演示如何在推送到 `main` 分支时构建 Docker 容器并将其部署到 Azure 应用服务。

确保在工作流 `env` 中将 `AZURE_WEBAPP_NAME` 密钥设置为创建的 Web 应用的名称。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy a container to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name

on:
  push:
    branches:
      - main

permissions:
  contents: 'read'
  packages: 'write'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to GitHub container registry
        uses: docker/login-action@v1.10.0
        with:
          registry: ghcr.io
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Build and push container image to registry
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
          file: ./Dockerfile

  deploy:
    runs-on: ubuntu-latest

    needs: build

    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          images: 'ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}'
```

## 其他资源

以下资源也可能有用：

* 对于原始初学者工作流，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 存储库中的 [`azure-container-webapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-container-webapp.yml)。
* 用于部署 Web 应用的操作是官方 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
