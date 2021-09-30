---
title: Azure App Serviceへのデプロイ
intro: 継続的デプロイメント（CD）ワークフローの一部として、Azure App Serviceへのデプロイを行えます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Azure App Service
shortTitle: Deploy to Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## はじめに

このガイドでは、アプリケーションをビルド、テスト、[Azure App Service](https://azure.microsoft.com/en-us/services/app-service/)へデプロイするための{% data variables.product.prodname_actions %}の使い方を説明します。

Azure App Serviceではいくつかの言語でWebアプリケーションを動作させることができますが、このガイドでは既存のNode.jsプロジェクトをデプロイする方法を示します。

## 必要な環境

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

1. Azure App Serviceプランの作成

   たとえば、Azure CLIを使って新しいApp Serviceのプランを作成できます。

   ```bash{:copy}
   az appservice plan create \
       --resource-group MY_RESOURCE_GROUP \
       --name MY_APP_SERVICE_PLAN \
       --is-linux
   ```

   上のコマンドで、`MY_RESOURCE_GROUP`はすでに存在するAzure Resource Groupに、`MY_APP_SERVICE_PLAN`はApp Serviceプランの新しい名前に置き換えてください。

   [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/)の使いからに関する詳しい情報については、Azureのドキュメンテーションを参照してください。

   * 認証については「[Sign in with Azure CLI](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli)を参照してください。
   * 新しいリソースグループを作成しなければならない場合は、「[az group](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az_group_create)」を参照してください。

2. Webアプリケーションの作成

   たとえば、Azure CLIを使ってnodeのランタイムを持つAzure App Service Webアプリケーションを作成できます。

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "node|10.14"
   ```

   上のコマンドで、パラメータは自分の値で置き換えてください。`MY_WEBAPP_NAME`はWebアプリケーションの新しい名前です。

3. Azure公開プロフィールを設定して、`AZURE_WEBAPP_PUBLISH_PROFILE`シークレットを作成してください。

   公開されたプロフィールを使って、Azureのデプロイ資格情報を生成してください。 詳しい情報については、Azureのドキュメンテーションの「[デプロイ資格情報を生成する](https://docs.microsoft.com/ja-jp/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)」を参照してください。

   {% data variables.product.prodname_dotcom %}リポジトリで、公開されたプロフィールの内容を含む`AZURE_WEBAPP_PUBLISH_PROFILE`という名前のシークレットを生成してください。 シークレットの作成に関する詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

以下の例のワークフローは、Node.jsのプロジェクトをビルド、テストし、Azure App Serviceへデプロイする方法を示します。

ワークフローの`env`キー中の`AZURE_WEBAPP_NAME`を、作成したWebアプリケーションの名前に設定してください。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  release:
    types: [created]

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '10.x'                # set this to the node version to use

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        uses: actions/setup-node@v2
        with:
          node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}

      - name: npm install, build, and test
        run: |
          # Build and test the project, then
          # deploy to Azure Web App.
          npm install
          npm run build --if-present
          npm run test --if-present

      - name: 'Deploy to Azure WebApp'
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## 追加リソース

以下のリソースも役に立つでしょう。

* For the original starter workflow, see [`azure.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure.yml) in the {% data variables.product.prodname_actions %} `starter-workflows` repository.
* Webアプリケーションのデプロイに使われたアクションは、公式のAzure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy)アクションです。
* Azure web appドキュメンテーション中の「[Azure で Node.js Web アプリを作成する](https://docs.microsoft.com/ja-jp/azure/app-service/quickstart-nodejs)」クイックスタートは、[Azure App Serviceエクステンション](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)とともにVS Codeを利用する方法を示しています。
