---
title: Deploying .NET to Azure App Service
intro: You can deploy your .NET project to Azure App Service as part of your continuous deployment (CD) workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

This guide explains how to use {% data variables.product.prodname_actions %} to build and deploy a .NET project to [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## 必要な環境

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

{% data reusables.actions.create-azure-app-plan %}

2. Webアプリケーションの作成

   For example, you can use the Azure CLI to create an Azure App Service web app with a .NET runtime:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "DOTNET|5.0"
   ```

   上のコマンドで、パラメータは自分の値で置き換えてください。`MY_WEBAPP_NAME`はWebアプリケーションの新しい名前です。

{% data reusables.actions.create-azure-publish-profile %}

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

The following example workflow demonstrates how to build and deploy a .NET project to Azure App Service when there is a push to the `main` branch.

ワークフローの`env`キー中の`AZURE_WEBAPP_NAME`を、作成したWebアプリケーションの名前に設定してください。 If the path to your project is not the repository root, change `AZURE_WEBAPP_PACKAGE_PATH`.  If you use a version of .NET other than `5`, change `DOTNET_VERSION`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

## 追加リソース

以下のリソースも役に立つでしょう。

* オリジナルのスターターワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows`リポジトリ中の[`azure-webapps-dotnet-core.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-dotnet-core.yml)を参照してください。
* Webアプリケーションのデプロイに使われたアクションは、公式のAzure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy)アクションです。
* For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
