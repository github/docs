---
title: クラウド プロバイダーでの OpenID Connect の構成
shortTitle: OpenID Connect in cloud providers
intro: ワークフロー内で OpenID Connect を使用して、クラウド プロバイダーでの認証を行います。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90dfa54e71fc602243ddb0d51b190fb8530727e4
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135495'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) を使用すると、{% data variables.product.prodname_actions %} ワークフローでは、有効期間の長い {% data variables.product.prodname_dotcom %} シークレットとして資格情報を格納しなくても、クラウド プロバイダー内のリソースにアクセスできます。

OIDC を使用するには、まず、{% data variables.product.prodname_dotcom %} の OIDC をフェデレーション ID として信頼するようにクラウド プロバイダーを構成してから、トークンを使用して認証するようにワークフローを更新する必要があります。

## 前提条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## {% data variables.product.prodname_actions %} ワークフローを更新する

OIDC のワークフローを更新するには、YAML に 2 つの変更を行う必要があります。
1. トークンのアクセス許可設定を追加します。
2. クラウド プロバイダーの公式アクションを使用して、OIDC トークン (JWT) をクラウド アクセス トークンと交換します。

クラウド プロバイダーでまだ公式アクションを提供していない場合は、ワークフローを更新して手動でこれらの手順を実行できます。

### アクセス許可設定の追加

 {% data reusables.actions.oidc-permissions-token %}

### 公式アクションの使用

クラウド プロバイダーが、{% data variables.product.prodname_actions %} で OIDC を使用するための公式アクションを作成している場合は、OIDC トークンをアクセス トークンと簡単に交換できます。 その後、クラウド リソースにアクセスするときにこのトークンを使用するようにワークフローを更新できます。

## カスタム アクションの使用

クラウド プロバイダーに公式アクションがない場合、またはカスタム スクリプトを作成する場合は、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーから JSON Web トークン (JWT) を手動で要求できます。

公式アクションを使用していない場合、{% data variables.product.prodname_dotcom %} では Actions コア ツールキットを使用することをお勧めします。 または、次の環境変数を使用して、`ACTIONS_RUNTIME_TOKEN`、`ACTIONS_ID_TOKEN_REQUEST_URL` トークンを取得できます。

このアプローチを使用してワークフローを更新するには、YAML に 3 つの変更を加える必要があります。

1. トークンのアクセス許可設定を追加します。
2. OIDC トークンを要求するコードを、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーに追加します。
3. OIDC トークンをクラウド プロバイダーで交換してアクセス トークンを取得するコードを追加します。

### Actions コア ツールキットを使用した JWT の要求

次の例では、`core` ツールキットで `actions/github-script` を使用して、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーから JWT を要求する方法を示します。 詳しくは、「[アクション ツールキットのパッケージの追加](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)」をご覧ください。

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()
          coredemo.setOutput('id_token', id_token)
```

### 環境変数を使用した JWT の要求

次の例では、環境変数を使用して JSON Web トークンを要求する方法を示します。

デプロイ ジョブでは、`core` ツールキットで `actions/github-script` を使用して、トークン設定を定義する必要があります。 詳しくは、「[アクション ツールキットのパッケージの追加](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages)」をご覧ください。

次に例を示します。

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

その後、{% data variables.product.prodname_dotcom %} OIDC プロバイダーから JWT を取得するために `curl` を使用できます。 次に例を示します。

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer {% raw %} ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} {% endraw %} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
{%- ifversion actions-save-state-set-output-envs %}
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
{%- else %}
        echo "::set-output name=idToken::${IDTOKEN}"
{%- endif %}
      id: tokenid
```

### クラウド プロバイダーからのアクセス トークンの取得

アクセス トークンを取得するには、OIDC JSON Web トークンをクラウド プロバイダーに提示する必要があります。

デプロイごとに、ワークフローでは、OIDC トークンをフェッチしてクラウド プロバイダーに提示するクラウド ログイン アクション (またはカスタム スクリプト) を使用する必要があります。 その後、クラウド プロバイダーではトークン内の要求を検証します。成功した場合は、そのジョブ実行でのみ使用できるクラウド アクセス トークンが提供されます。 提供されたアクセス トークンは、ジョブ内の後続のアクションでクラウドに接続し、そのリソースにデプロイするために使用できます。

OIDC トークンをアクセス トークンと交換する手順は、クラウド プロバイダーごとに異なります。

### クラウド プロバイダー内のリソースへのアクセス

アクセス トークンを取得したら、特定のクラウド アクションまたはスクリプトを使用して、クラウド プロバイダーに対する認証を行い、そのリソースにデプロイできます。 これらの手順は、クラウド プロバイダーごとに異なる場合があります。
さらに、このアクセス トークンの既定の有効期限は、クラウドごとに異なる場合があり、クラウド プロバイダー側で構成できます。
