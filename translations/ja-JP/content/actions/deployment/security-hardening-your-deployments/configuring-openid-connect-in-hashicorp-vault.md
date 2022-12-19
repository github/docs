---
title: HashiCorp Vault での OpenID Connect の構成
shortTitle: OpenID Connect in HashiCorp Vault
intro: ワークフロー内で OpenID Connect を使用して HashiCorp Vault で認証します。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106630'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

OpenID Connect (OIDC) を使うと、{% data variables.product.prodname_actions %} ワークフローが HashiCorp Vault で認証し、シークレットを取得できます。

このガイドでは、HashiCorp Vault が {% data variables.product.prodname_dotcom %} の OIDC をフェデレーション ID として信頼するように構成する方法の概要について説明します。また、この構成を [hashicorp/vault-action](https://github.com/hashicorp/vault-action) アクションで使って HashiCorp Vault からシークレットを取得する方法を示します。

## 前提条件

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## HashiCorp Vault への ID プロバイダーの追加

HashiCorp Vault と共に OIDC を使うには、{% data variables.product.prodname_dotcom %} OIDC プロバイダーの信頼構成を追加する必要があります。 詳細については、HashiCorp Vault の[ドキュメント](https://www.vaultproject.io/docs/auth/jwt)を参照してください。

認証に JSON Web トークン (JWT) を受け入れるように Vault サーバーを構成します。

1. JWT `auth` メソッドを有効にし、`write` を使用して Vault に構成を適用します。 
  `oidc_discovery_url` および `bound_issuer` パラメーターの場合は、{% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %} を使います。 これらのパラメーターを使用すると、Vault サーバーは認証プロセス中に受信した JSON Web トークン (JWT) を確認できます。

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. ワークフローがシークレットの取得に使用する特定のパスへのアクセスのみを許可するポリシーを構成します。 詳細なポリシーについては、HashiCorp Vault の [「ポリシー」のドキュメント](https://www.vaultproject.io/docs/concepts/policies)を参照してください。

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. 異なるポリシーをグループ化するようにロールを構成します。 認証が成功した場合、これらのポリシーは結果の Vault アクセス トークンにアタッチされます。

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` によって、結果のアクセス トークンの有効性が定義されます。
- `bound_claims` パラメーターがセキュリティ要件に対して定義されており、少なくとも 1 つの条件があることを確認します。 必要に応じて、`bound_subject` だけでなく、`bound_audiences` パラメーターも設定できます。
- 受信した JWT ペイロード内の任意の要求を確認するために、`bound_claims` パラメーターには一連の要求とその必須の値が含まれています。 上記の例では、ロールは、`user-or-org-name` アカウントによって所有される `repo-name` リポジトリからの受信認証要求を受け取ります。
- {% data variables.product.prodname_dotcom %} の OIDC プロバイダーでサポートされている使用可能なすべての要求を確認するには、「[クラウドを使った OIDC 信頼の構成](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)」を参照してください。

詳細については、HashiCorp Vault の[ドキュメント](https://www.vaultproject.io/docs/auth/jwt)を参照してください。

## {% data variables.product.prodname_actions %} ワークフローを更新する

OIDC のワークフローを更新するには、YAML に 2 つの変更を行う必要があります。
1. トークンのアクセス許可設定を追加します。
2. この [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) アクションを使って、OIDC トークン (JWT) をクラウド アクセス トークンと交換します。


Vault のシークレットにアクセスできるようにワークフローに OIDC 統合を追加するには、次のコード変更を追加する必要があります。

- {% data variables.product.prodname_dotcom %} OIDC プロバイダーからトークンをフェッチするアクセス許可を付与します。
  - ワークフローには、`id-token` の値が `write` に設定された `permissions:` 設定が必要です。 これにより、ワークフロー内のすべてのジョブから OIDC トークンをフェッチすることができます。
- {% data variables.product.prodname_dotcom %} OIDC プロバイダーに JWT を要求し、それを HashiCorp Vault に提示してアクセス トークンを受け取ります。
  - [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) アクションを使って、JWT をフェッチし、Vault からアクセス トークンを受け取ることができます。または、[Actions ツールキット](https://github.com/actions/toolkit/)を使ってジョブのトークンをフェッチすることもできます。

この例は、HashiCorp Vault からシークレットを要求するために、公式のアクションと共に OIDC を使う方法を示しています。

### アクセス許可設定の追加

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**注**:

`permissions` キーを使用すると、すべての未指定のアクセス許可が "アクセスなし" に設定されます。ただし、メタデータ スコープは例外であり、常に "読み取り" アクセス権を取得します。  その結果、`contents: read` のような他のアクセス許可を追加することが必要になる場合があります。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。

{% endnote %}

### アクセス トークンの要求

`hashicorp/vault-action` アクションは、{% data variables.product.prodname_dotcom %} OIDC プロバイダーから JWT を受け取り、HashiCorp Vault インスタンスにアクセス トークンを要求し、シークレットを取得します。 詳しくは、HashiCorp Vault の GitHub Action の[ドキュメント](https://github.com/hashicorp/vault-action)を参照してください。

この例では、HashiCorp Vault にシークレットを要求するジョブを作成する方法を示しています。

- `<Vault URL>`: これを HashiCorp Vault の URL に置き換えます。
- `<Vault Namespace>`: これを HashiCorp Vault で設定した名前空間に置き換えます。 (例: `admin`)。
- `<Role name>`: これを HashiCorp Vault の信頼関係で設定したロールに置き換えます。
- `<Secret-Path>`: これを HashiCorp Vault から取得するシークレットのパスに置き換えます。 たとえば、「`secret/data/production/ci npmToken`」のように入力します。

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**注**:

- Vault サーバーにパブリック ネットワークからアクセスできない場合は、他の使用可能な Vault の[認証方法](https://www.vaultproject.io/docs/auth)でセルフホステッド ランナーを使用することを検討してください。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。
- `<Vault Namespace>` は、Vault Enterprise (HCP Vault を含む) デプロイに対して設定する必要があります。 詳しくは、[Vault 名前空間](https://www.vaultproject.io/docs/enterprise/namespaces)に関するページを参照してください。

{% endnote %}

### アクセス トークンの取り消し

既定で、Vault サーバーでは TTL の有効期限が切れたときにアクセス トークンを自動的に取り消します。そのため、アクセス トークンを手動で取り消す必要はありません。 ただし、ジョブが完了または失敗した直後にアクセス トークンを取り消す場合は、[Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) を使用して発行されたトークンを手動で取り消すことができます。

1. `exportToken` オプションを `true` (既定値: `false`) に設定します。 これにより、発行された Vault アクセス トークンが環境変数としてエクスポートされます: `VAULT_TOKEN`。
2. [トークンの取り消し (自己)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) Vault API を呼び出してアクセス トークンを取り消すステップを追加します。

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
