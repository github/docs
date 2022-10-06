---
title: ユーザからサーバーへのアクセストークンの更新
intro: '定期的なトークンのローテーションを強制し、侵害されたトークンの影響を抑えるために、ユーザアクセストークンの期限を利用するように{% data variables.product.prodname_github_app %}を設定できます。'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064411'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## ユーザアクセストークンの期限切れについて

定期的なトークンのローテーションを強制し、侵害されたトークンの影響を抑えるために、ユーザアクセストークンの期限を利用するように{% data variables.product.prodname_github_app %}を設定できます。 ユーザーからサーバーへの要求に関して詳しくは、「[GitHub App のユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

期限切れになるユーザトークンは、8時間で期限切れになります。 新しいユーザからサーバーへのアクセストークンを受信すると、レスポンスにはリフレッシュトークンも含まれます。このリフレッシュトークンは、新しいユーザトークン及びリフレッシュトークンと交換できます。 リフレッシュトークンは、6ヶ月間有効です。 

## リフレッシュトークンでのユーザトークンの更新

ユーザーからサーバーへのアクセストークンが期限切れのときに更新するには、`refresh_token` との交換で新しいアクセストークンと `refresh_token` を取得できます。

  `POST https://github.com/login/oauth/access_token`

このコールバックリクエストは、新しいアクセストークンと新しいリフレッシュトークンを送信してきます。  このコールバック要求は、一時的な `code` との交換でアクセストークンを取得するための OAuth 要求に似ています。 詳しくは、「[GitHub アプリのユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)」と「[認証の基本](/rest/guides/basics-of-authentication#providing-a-callback)」を参照してください。

### パラメーター

名前 | 型 | 説明
-----|------|------------
`refresh_token` | `string` | **必須。** {% data variables.product.prodname_github_app %} のオーナーが期限切れのトークンを有効にし、新しいユーザーアクセス トークンを発行したときに生成されるトークン。
`grant_type` | `string` | **必須。** 値は `refresh_token` である必要があります (OAuth 仕様で必須)。
`client_id` | `string` | **必須。** {% data variables.product.prodname_github_app %} のクライアント ID。
`client_secret` | `string`   | **必須。** {% data variables.product.prodname_github_app %} のクライアントシークレット。

### [応答]

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## 既存のGitHub Appに対する期限切れするユーザトークンの設定。

期限切れするユーザからサーバーへの認可トークンの有効化や無効化は、{% data variables.product.prodname_github_app %}設定から行えます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 選んだ {% data variables.product.prodname_github_app %} の横にある **[編集]** をクリックします。
  ![GitHub App を編集する設定](/assets/images/github-apps/edit-test-app.png)
5. 左側のサイドバーで、 **[オプション機能]** をクリックします。
   ![[オプション機能] タブ](/assets/images/github-apps/optional-features-option.png) 
6. [ユーザーからサーバーへのトークンの期限切れ] の横にある **[オプトイン]** または **[オプトアウト]** をクリックします。この設定が適用されるまで、数秒かかることがあります。

## 新しいGitHub Appでの期限切れになるトークンのオプトアウト

新しい{% data variables.product.prodname_github_app %}を作成する際には、デフォルトでそのアプリケーションは期限切れになるユーザからサーバーへのアクセストークンを使用します。

アプリケーションに期限切れにならないユーザからサーバーへのアクセストークンを使わせたい場合には、アプリケーションの設定ページで"Expire user authorization tokens（ユーザ認可トークンの期限切れ）"を選択を解除できます。

![GitHub App のセットアップ中に期限付きユーザトークンをオプトインするオプション](/assets/images/github-apps/expire-user-tokens-selection.png)

ユーザからサーバーへの認可トークンを使用する既存の{% data variables.product.prodname_github_apps %}は、アプリケーションのオーナーが期限になるユーザトークンをアプリケーションに対して有効化した場合にのみ、この新しいフローの影響を受けます。

既存の{% data variables.product.prodname_github_apps %}に対して期限設定付きのユーザトークンを有効化するためには、8時間で期限切れになる新しいユーザトークンを再発行するためにOAuthフローを通じてユーザを送信し、リフレッシュトークンを使って新しいアクセストークンとリフレッシュトークンを取得するためのリクエストを発行する必要があります。 詳細については、「[GitHub アプリのユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

## 参考資料

- [{% data variables.product.prodname_dotcom %} の認証について](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)

