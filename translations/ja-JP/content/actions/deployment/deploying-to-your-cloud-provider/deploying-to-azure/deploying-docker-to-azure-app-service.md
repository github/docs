---
title: Azure App Service に Docker をデプロイする
intro: 継続的デプロイ (CD) ワークフローの一部として、Docker コンテナーを Azure App Service にデプロイできます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410356'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、{% data variables.product.prodname_actions %} を使用し、Docker コンテナーをビルドして [Azure App Service](https://azure.microsoft.com/services/app-service/) にデプロイする方法について説明します。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %} と「[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」 (Azure での OpenID Connect の構成)。

{% endnote %}

{% endif %}

## 前提条件

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

{% data reusables.actions.create-azure-app-plan %}

1. Web アプリを作成する。

   たとえば、Azure CLI を使用して Azure App Service Web アプリを作成できます。

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --deployment-container-image-name nginx:latest
   ```

   上のコマンドで、パラメータは自分の値で置き換えてください。`MY_WEBAPP_NAME` は Web アプリの新しい名前です。

{% data reusables.actions.create-azure-publish-profile %}

1. Web アプリのレジストリ資格情報を設定します。

   `repo` および `read:packages` スコープで個人のアクセス トークンを作成します。 詳細については、[個人アクセス トークンの作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)に関する記事を参照してください。

   `DOCKER_REGISTRY_SERVER_URL` を `https://ghcr.io` に、`DOCKER_REGISTRY_SERVER_USERNAME` を GitHub ユーザー名またはリポジトリ所有組織に、`DOCKER_REGISTRY_SERVER_PASSWORD` を上記の個人アクセス トークンに設定します。 これにより、Web アプリに資格情報が与えられるため、新しくビルドされたイメージがレジストリにワークフローによってプッシュされた後、コンテナー イメージをプルできるようになります。 これを行うには、次の Azure CLI コマンドを使います。

   ```shell
    az webapp config appsettings set \
        --name MY_WEBAPP_NAME \
        --resource-group MY_RESOURCE_GROUP \
        --settings DOCKER_REGISTRY_SERVER_URL=https://ghcr.io DOCKER_REGISTRY_SERVER_USERNAME=MY_REPOSITORY_OWNER DOCKER_REGISTRY_SERVER_PASSWORD=MY_PERSONAL_ACCESS_TOKEN
```

5. 任意で、デプロイ環境を構成します。 {% data reusables.actions.about-environments %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

次のサンプル ワークフローからは、`main` ブランチへのプッシュがあるとき、Docker コンテナーをビルドし、Azure App Service にデプロイする方法がわかります。

ワークフロー `env` キーの `AZURE_WEBAPP_NAME` は、作成した Web アプリの名前に必ず設定してください。

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

## その他のリソース

以下のリソースも役に立つでしょう。

* もともとのスターター ワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows` リポジトリの [`azure-container-webapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-container-webapp.yml) を参照してください。
* Web アプリのデプロイに使用されるアクションは、Azure の公式な [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) アクションです。
* Azure にデプロイする GitHub アクション ワークフローの例が他にも必要であれば、[actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) リポジトリを参照してください。
