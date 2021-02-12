---
title: '　ユーザからサーバーへのアクセストークンの更新'
intro: '定期的なトークンのローテーションを強制し、侵害されたトークンの影響を抑えるために、ユーザアクセストークンの期限を利用するように{% data variables.product.prodname_github_app %}を設定できます。'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---


{% data reusables.pre-release-program.expiring-user-access-tokens-beta %}


### ユーザアクセストークンの期限切れについて

定期的なトークンのローテーションを強制し、侵害されたトークンの影響を抑えるために、ユーザアクセストークンの期限を利用するように{% data variables.product.prodname_github_app %}を設定できます。 ユーザからサーバーへのリクエストの発行に関する詳しい情報については、「[GitHub Appのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

期限切れになるユーザトークンは、8時間で期限切れになります。 新しいユーザからサーバーへのアクセストークンを受信すると、レスポンスにはリフレッシュトークンも含まれます。このリフレッシュトークンは、新しいユーザトークン及びリフレッシュトークンと交換できます。 リフレッシュトークンは、6ヶ月間有効です。

### リフレッシュトークンでのユーザトークンの更新

期限切れになるユーザからサーバーへのアクセストークンを更新するには、`refresh_token`を新しいアクセストークン及び`refresh_token`と交換できます。

  `POST https://github.com/login/oauth/access_token`

このコールバックリクエストは、新しいアクセストークンと新しいリフレッシュトークンを送信してきます。  このコールバックリクエストは、一時的な`code`をアクセストークンと交換するために使うOAuthのリクエストに似ています。 詳しい情報については「[GitHub Appsのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)」及び「[認証の基本](/rest/guides/basics-of-authentication#providing-a-callback)」を参照してください。

#### パラメータ

| 名前              | 種類       | 説明                                                                                                               |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `refresh_token` | `string` | **必須。** {% data variables.product.prodname_github_app %}のオーナーが期限切れするトークンを有効化し、新しいユーザアクセストークンを発行したときに生成されるトークン。 |
| `grant_type`    | `string` | **必須。** 値は`refresh_token`でなければならない（OAuthの仕様で必須）。                                                                 |
| `client_id`     | `string` | **必須。** {% data variables.product.prodname_github_app %}のクライアントID。                                             |
| `client_secret` | `string` | **必須。**{% data variables.product.prodname_github_app %}のクライアントシークレット。                                          |

#### レスポンス

```json
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": "28800",
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
### 既存のGitHub Appに対する期限切れするユーザトークンの設定。

期限切れするユーザからサーバーへの認可トークンの有効化や無効化は、{% data variables.product.prodname_github_app %}設定から行えます。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. 選択した{% data variables.product.prodname_github_app %}の隣の**Edit（編集）**をクリックしてください。 ![GitHub Appを編集する設定](/assets/images/github-apps/edit-test-app.png)
5. 左のサイドバーで、**Beta Features（ベータの機能）**をクリックしてください。 ![ベータ機能のメニューオプション](/assets/images/github-apps/beta-features-option.png)
6. 「User-to-server token expiration（ユーザからサーバーへのトークンの有効期限）」の隣の**Opt-in（オプトイン）**もしくは**Opt-out（オプトアウト）**をクリックしてください。 この設定が適用されるまで、数秒かかることがあります。

### 新しいGitHub Appでの期限切れになるトークンのオプトアウト

新しい{% data variables.product.prodname_github_app %}を作成する際には、デフォルトでそのアプリケーションは期限切れになるユーザからサーバーへのアクセストークンを使用します。

アプリケーションに期限切れにならないユーザからサーバーへのアクセストークンを使わせたい場合には、アプリケーションの設定ページで"Expire user authorization tokens（ユーザ認可トークンの期限切れ）"を選択を解除できます。

![GitHub App のセットアップ中に期限付きユーザトークンをオプトインするオプション](/assets/images/github-apps/expire-user-tokens-selection.png)

ユーザからサーバーへの認可トークンを使用する既存の{% data variables.product.prodname_github_app %}は、アプリケーションのオーナーが期限になるユーザトークンをアプリケーションに対して有効化した場合にのみ、この新しいフローの影響を受けます。

既存の{% data variables.product.prodname_github_app %}に対して期限切れになるユーザトークンを有効化するためには、8時間で期限切れになる新しいユーザトークンを再発行するためにOAuthフローを通じてユーザを送信し、リフレッシュトークンを使って新しいアクセストークンとリフレッシュトークンを取得するためのリクエストを発行する必要があります。 詳しい情報については「[GitHub Appのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。
