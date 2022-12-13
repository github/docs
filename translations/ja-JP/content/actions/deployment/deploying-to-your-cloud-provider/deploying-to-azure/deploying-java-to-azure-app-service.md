---
title: Azure App Service への Java のデプロイ
intro: 継続的デプロイ (CD) ワークフローの一部として、Java プロジェクトを Azure App Service にデプロイできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Java
  - Azure App Service
ms.openlocfilehash: ede24c0173cfe0493ad529b2f5d8a03f97ade7b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410100'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、{% data variables.product.prodname_actions %} を使用して、Java プロジェクトを作成し、[Azure App Service](https://azure.microsoft.com/services/app-service/) にデプロイする方法について説明します。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %} と「[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」 (Azure での OpenID Connect の構成)。

{% endnote %}

{% endif %}

## 前提条件

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

{% data reusables.actions.create-azure-app-plan %}

1. Web アプリを作成する。

   たとえば、Azure CLI を使用すると、Java ランタイムを持つ Azure App Service Web アプリを作成することができます。

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "JAVA|11-java11"
   ```

   上のコマンドで、パラメーターを独自の値に置き換えます。`MY_WEBAPP_NAME` は、その Web アプリの新しい名前です。

{% data reusables.actions.create-azure-publish-profile %}

1. 必要に応じて、デプロイ環境を構成します。 {% data reusables.actions.about-environments %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

次のワークフローの例では、`main` ブランチへのプッシュがある場合に、Java プロジェクトを作成し、Azure App Service にデプロイする方法のデモを行います。

ワークフロー `env` キーの `AZURE_WEBAPP_NAME` は、必ず作成した Web アプリの名前に設定してください。 `11` 以外の Java バージョンを使用する場合、`JAVA_VERSION` は、使用するバージョンに変更します。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy JAR app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  JAVA_VERSION: '11'                  # set this to the Java version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Java version
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: {% raw %}${{ env.JAVA_VERSION }}{% endraw %}
          cache: 'maven'

      - name: Build with Maven
        run: mvn clean install

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: java-app
          path: '{% raw %}${{ github.workspace }}{% endraw %}/target/*.jar'

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
          name: java-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: '*.jar'
```

## その他のリソース

以下のリソースも役に立つでしょう。

* もともとのスターター ワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows` リポジトリの [`azure-webapps-java-jar.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-java-jar.yml) を参照してください。
* Web アプリのデプロイに使用されるアクションは、Azure の公式な [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) アクションです。
* Azure にデプロイする GitHub アクション ワークフローの例が他にも必要であれば、[actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) リポジトリを参照してください。
