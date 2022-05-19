---
title: 将 Node.js 部署到 Azure App Service
intro: 作为持续部署 (CD) 工作流程的一部分，您可以将 Node.js 部署到 Azure App Service。
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Node
  - JavaScript
  - Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建、测试并部署 Node.js 项目到 [Azure App Service](https://azure.microsoft.com/services/app-service/)。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注意**：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 基本要求

在创建 {% data variables.product.prodname_actions %} 工作流程之前，首先需要完成以下设置步骤：

{% data reusables.actions.create-azure-app-plan %}

2. 创建 Web 应用。

   例如，可以使用 Azure CLI 创建具有 Node.js 运行时的 Azure App Service Web 应用：

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   在上面的命令中，将参数替换为您自己的值，其中 `MY_WEBAPP_NAME` 是 Web 应用的新名称。

{% data reusables.actions.create-azure-publish-profile %}

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流演程示在推送到 `main` 分支时，如何构建、测试 Node.js 项目并将其部署到 Azure App Service。

确保在工作流程 `env` 中将 `AZURE_WEBAPP_NAME` 密钥设置为您创建的 web 应用程序名称。 如果项目的路径不是存储库根目录，请将 `AZURE_WEBAPP_PACKAGE_PATH` 更改为您的项目路径。 如果使用的 Node.js 版本不是 `10.x`，请将 `NODE_VERSION` 更改为您使用的版本。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  push:
    branches:
      - main

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '14.x'                # set this to the node version to use

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-checkout %}

    - name: Set up Node.js
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        cache: 'npm'

    - name: npm install, build, and test
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
    - name: Upload artifact for deployment job
      uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: node-app
        path: .

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
    - name: Download artifact from build job
      uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: node-app

    - name: 'Deploy to Azure WebApp'
      id: deploy-to-webapp 
      uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
      with:
        app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
        publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
        package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## 其他资源

以下资源也可能有用：

* 有关原始入门工作流程，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 仓库中的 [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml)。
* 用于部署 Web 应用的操作是正式的 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流程的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
* The "[Create a Node.js web app in Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)" quickstart in the Azure web app documentation demonstrates using {% data variables.product.prodname_vscode %} with the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
