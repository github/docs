---
title: Azure App Service への Python のデプロイ
intro: 継続的デプロイ (CD) ワークフローの一部として、Python プロジェクトを Azure App Service にデプロイできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Python
  - Azure App Service
ms.openlocfilehash: c9f1bc719068a250aaabfbb8dcb3581335dabdb1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409460'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、{% data variables.product.prodname_actions %} を使用して、Python プロジェクトを作成し、[Azure App Service](https://azure.microsoft.com/services/app-service/) にデプロイする方法について説明します。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %} と「[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」 (Azure での OpenID Connect の構成)。

{% endnote %}

{% endif %}

## 前提条件

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

{% data reusables.actions.create-azure-app-plan %}

1. Web アプリを作成する。

   たとえば、Azure CLI を使用すると、Python ランタイムを持つ Azure App Service Web アプリを作成することができます。

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   上のコマンドで、パラメーターを独自の値に置き換えます。`MY_WEBAPP_NAME` は、その Web アプリの新しい名前です。

{% data reusables.actions.create-azure-publish-profile %}

1. `SCM_DO_BUILD_DURING_DEPLOYMENT` という名前のアプリ設定を追加し、値を `1` に設定します。

5. 必要に応じて、デプロイ環境を構成します。 {% data reusables.actions.about-environments %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

次のワークフローの例では、`main` ブランチへのプッシュがある場合に、Python プロジェクトを作成し、Azure App Service にデプロイする方法のデモを行います。

ワークフロー `env` キーの `AZURE_WEBAPP_NAME` は、必ず作成した Web アプリの名前に設定してください。 `3.8` 以外の Python のバージョンを使用する場合、`PYTHON_VERSION` は、使用するバージョンに変更します。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy Python app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  PYTHON_VERSION: '3.8'               # set this to the Python version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Python version
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ env.PYTHON_VERSION }}{% endraw %}

      - name: Create and start virtual environment
        run: |
          python -m venv venv
          source venv/bin/activate
      
      - name: Set up dependency caching for faster installs
        uses: {% data reusables.actions.action-cache %}
        with:
          path: ~/.cache/pip
          key: {% raw %}${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-pip-{% endraw %}

      - name: Install dependencies
        run: pip install -r requirements.txt

      # Optional: Add a step to run tests here (PyTest, Django test suites, etc.)

      - name: Upload artifact for deployment jobs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: python-app
          path: |
            .
            !venv/
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
          name: python-app
          path: .

      - name: 'Deploy to Azure Web App'
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
```

## その他のリソース

以下のリソースも役に立つでしょう。

* もともとのスターター ワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows` リポジトリの [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml) を参照してください。
* Web アプリのデプロイに使用されるアクションは、Azure の公式な [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) アクションです。
* Azure にデプロイする GitHub アクション ワークフローの例が他にも必要であれば、[actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) リポジトリを参照してください。
