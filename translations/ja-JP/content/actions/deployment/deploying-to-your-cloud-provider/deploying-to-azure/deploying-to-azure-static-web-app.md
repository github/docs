---
title: Azure 静的 Web アプリへのデプロイ
intro: 継続的デプロイ (CD) ワークフローの一部として、Web アプリを Azure Static Web App にデプロイできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
ms.openlocfilehash: 3e5b9a90e91e237fbd1b5679624ed3cdb3865856
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410548'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## はじめに

このガイドでは、{% data variables.product.prodname_actions %} を使用して、Web アプリをビルドし、[Azure 静的 Web アプリ](https://azure.microsoft.com/services/app-service/static/)にデプロイする方法について説明します。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %} と「[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」 (Azure での OpenID Connect の構成)。

{% endnote %}

{% endif %}

## 前提条件

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

1. デプロイ ソースの [Other]\(その他) オプションを使用して、Azure 静的 Web アプリを作成します。 詳細については、Azure ドキュメントの「[クイックスタート: Azure portal で最初の静的サイトを構築する](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)」を参照してください。 

2. 静的 Web アプリのデプロイ トークンの値を使用して、`AZURE_STATIC_WEB_APPS_API_TOKEN` という名前のシークレットを作成します。 デプロイ トークンの検索方法の詳細については、Azure ドキュメントの「[Azure Static Web Apps のデプロイ トークンをリセットする](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)」を参照してください。

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

次のワークフローの例では、`main` ブランチへのプッシュがある場合、または `main` がターゲットとして設定されている pull request が開いているか、同期しているか、再び開いている場合に、Azure 静的 Web アプリをビルドして、デプロイする方法のデモを行います。 また、`main` がターゲットとして設定されている pull request が閉じている場合は、対応する実稼働前デプロイが、ワーフクローによって破棄されます。

ワークフロー `env` キーで、次の値を変更します。
- `APP_LOCATION` をクライアント コードの場所に
- `API_LOCATION` を API ソース コードの場所に。 `API_LOCATION` が関連していない場合は、変数およびそれが使用されている行を削除することができます。
- `APP_ARTIFACT_LOCATION` をクライアント コードのビルド出力の場所に

これらの値の詳細については、Azure ドキュメントの「[Azure Static Web Apps のビルド構成](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)」を参照してください。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  APP_ARTIFACT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          repo_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          action: "upload"
          app_location: {% raw %}${{ env.APP_LOCATION }}{% endraw %}
          api_location: {% raw %}${{ env.API_LOCATION }}{% endraw %}
          app_artifact_location: {% raw %}${{ env.APP_ARTIFACT_LOCATION }}{% endraw %}

  close:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close
    steps:
      - name: Close
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          action: "close"
```

## その他のリソース

以下のリソースも役に立つでしょう。

* もともとのスターター ワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows` リポジトリの [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) を参照してください。
* Web アプリのデプロイに使用されるアクションは、Azure の公式な [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) アクションです。
* Azure にデプロイする GitHub アクション ワークフローの例が他にも必要であれば、[actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) リポジトリを参照してください。
