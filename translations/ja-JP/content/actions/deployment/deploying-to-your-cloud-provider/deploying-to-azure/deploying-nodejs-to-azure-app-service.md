---
title: Deploying Node.js to Azure App Service
intro: You can deploy your Node.js project to Azure App Service as part of your continuous deployment (CD) workflows.
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


## はじめに

This guide explains how to use {% data variables.product.prodname_actions %} to build, test, and deploy a Node.js project to [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## 必要な環境

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

{% data reusables.actions.create-azure-app-plan %}

2. Webアプリケーションの作成

   For example, you can use the Azure CLI to create an Azure App Service web app with a Node.js runtime:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   上のコマンドで、パラメータは自分の値で置き換えてください。`MY_WEBAPP_NAME`はWebアプリケーションの新しい名前です。

{% data reusables.actions.create-azure-publish-profile %}

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}
{% endif %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

The following example workflow demonstrates how to build, test, and deploy the Node.js project to Azure App Service when there is a push to the `main` branch.

ワークフローの`env`キー中の`AZURE_WEBAPP_NAME`を、作成したWebアプリケーションの名前に設定してください。 If the path to your project is not the repository root, change `AZURE_WEBAPP_PACKAGE_PATH`  to your project path. If you use a version of Node.js other than `10.x`, change `NODE_VERSION` to the version that you use.

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
    - uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        cache: 'npm'

    - name: npm install, build, and test
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
    - name: Upload artifact for deployment job
      uses: actions/upload-artifact@v2
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
      uses: actions/download-artifact@v2
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

## 追加リソース

以下のリソースも役に立つでしょう。

* For the original starter workflow, see [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) in the {% data variables.product.prodname_actions %} `starter-workflows` repository.
* Webアプリケーションのデプロイに使われたアクションは、公式のAzure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy)アクションです。
* For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
* The "[Create a Node.js web app in Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)" quickstart in the Azure web app documentation demonstrates using VS Code with the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
