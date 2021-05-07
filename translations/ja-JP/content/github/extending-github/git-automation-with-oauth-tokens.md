---
title: OAuth トークンを使用した Git の自動化
redirect_from:
  - /articles/git-over-https-using-oauth-token/
  - /articles/git-over-http-using-oauth-token/
  - /articles/git-automation-with-oauth-tokens
intro: 'OAuthトークンを使用して、自動化されたスクリプトを介して {% data variables.product.product_name %} を操作できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### ステップ 1: OAuth トークンを取得する

アプリケーション設定ページで個人アクセストークンを作成します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**参考:**
- 個人アクセストークンを作成する前に、メールアドレスを確認する必要があります。 詳細は「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。
- {% data reusables.user_settings.review_oauth_tokens_tip %}
{% else %}
**ヒント:** {% data reusables.user_settings.review_oauth_tokens_tip %}
{% endif %}

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### ステップ 2: リポジトリをクローンする

{% data reusables.command_line.providing-token-as-password %}

これらのプロンプトを回避するには、Git パスワードキャッシュを使用できます。 詳しい情報については、「[Git に GitHub 認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。

{% warning %}

**警告**: トークンには読み取り/書き込みアクセス権限があるため、パスワードのように慎重に扱う必要があります。 リモートをクローンまたは追加する際にクローン URL にトークンを入力すると、Git によって _.git/config_ ファイルにプレーンテキストで書き込まれます。これはセキュリティ上のリスクとなります。

{% endwarning %}

### 参考リンク

- 「[OAuth App を認証する](/developers/apps/authorizing-oauth-apps)」
