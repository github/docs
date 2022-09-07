---
title: 将 .NET 部署到 Azure App Service
intro: 作为持续部署 (CD) 工作流程的一部分，您可以将 .NET 项目部署到 Azure App Service。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
ms.openlocfilehash: cb71e0016157d7d1fdd366819840ea90d104e8dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410033'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建 .NET 项目并将其部署到 [Azure 应用服务](https://azure.microsoft.com/services/app-service/)。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

注意：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 先决条件

在创建 {% data variables.product.prodname_actions %} 工作流程之前，首先需要完成以下设置步骤：

{% data reusables.actions.create-azure-app-plan %}

2. 创建 Web 应用。

   例如，可以使用 Azure CLI 创建具有 .NET 运行时的 Azure App Service Web 应用：

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "DOTNET|5.0"
   ```

   在上面的命令中，将参数替换为你自己的值，其中 `MY_WEBAPP_NAME` 是 Web 应用的新名称。

{% data reusables.actions.create-azure-publish-profile %}

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流演示如何在推送到 `main` 分支时构建 .NET 项目并将其部署到 Azure 应用服务。

确保在工作流 `env` 中将 `AZURE_WEBAPP_NAME` 密钥设置为创建的 Web 应用的名称。 如果项目的路径不是存储库根路径，请更改 `AZURE_WEBAPP_PACKAGE_PATH`。  如果使用 `5` 以外的 .NET 版本，请更改 `DOTNET_VERSION`。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy ASP.Net Core app to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  DOTNET_VERSION: '5'                 # set this to the .NET Core version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up .NET Core
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ env.DOTNET_VERSION }}{% endraw %}

      - name: Set up dependency caching for faster builds
        uses: {% data reusables.actions.action-cache %}
        with:
          path: ~/.nuget/packages
          key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-nuget-{% endraw %}

      - name: Build with dotnet
        run: dotnet build --configuration Release

      - name: dotnet publish
        run: dotnet publish -c Release -o {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: .net-app
          path: {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

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
          name: .net-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## 其他资源

以下资源也可能有用：

* 对于原始初学者工作流，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 存储库中的 [`azure-webapps-dotnet-core.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-dotnet-core.yml)。
* 用于部署 Web 应用的操作是官方 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
