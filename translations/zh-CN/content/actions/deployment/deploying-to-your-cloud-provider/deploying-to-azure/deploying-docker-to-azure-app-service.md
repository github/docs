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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建并部署 Docker 容器到 [Azure App Service](https://azure.microsoft.com/services/app-service/)。

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**注意**：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 基本要求

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

   在上面的命令中，将参数替换为您自己的值，其中 `MY_WEBAPP_NAME` 是 Web 应用的新名称。

{% data reusables.actions.create-azure-publish-profile %}

1. 设置 web app 的注册表凭据。

   创建具有 `repo` 和 `read:packages` 作用域的个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

   将 `DOCKER_REGISTRY_SERVER_URL` 设置为 `https://ghcr.io`，将 `DOCKER_REGISTRY_SERVER_USERNAME` 设置为拥有该存储库的 GitHub 用户名或组织，将 `DOCKER_REGISTRY_SERVER_PASSWORD` 设置为上面的个人访问令牌。 这将提供 Web 应用凭据，以便在工作流程将新构建的映像推送到注册表后，它可以拉取容器映像。 可以使用以下 Azure CLI 命令执行此操作：

   ```shell
    az webapp config appsettings set \
        --name MY_WEBAPP_NAME \
        --resource-group MY_RESOURCE_GROUP \
        --settings DOCKER_REGISTRY_SERVER_URL=https://ghcr.io DOCKER_REGISTRY_SERVER_USERNAME=MY_REPOSITORY_OWNER DOCKER_REGISTRY_SERVER_PASSWORD=MY_PERSONAL_ACCESS_TOKEN
```

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流演程示在推送到 `main` 分支时，如何构建 Docker 容器并将其部署到 Azure App Service。

确保在工作流程 `env` 中将 `AZURE_WEBAPP_NAME` 密钥设置为您创建的 web 应用程序名称。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

* 有关原始入门工作流程，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 仓库中的 [`azure-container-webapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-container-webapp.yml)。
* 用于部署 Web 应用的操作是正式的 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流程的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
