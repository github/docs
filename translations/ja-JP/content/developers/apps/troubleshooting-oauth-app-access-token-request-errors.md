---
title: OAuth Appアクセストークンのリクエストエラーのトラブルシューティング
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - oauth apps
---

{% note %}

**注釈:** この例ではJSONのレスポンスのみ示しています。

{% endnote %}

### 不正なクライアント認識情報

渡した client\_id や client\_secret が正しくない場合は、以下のエラーレスポンスを受け取ります。

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

このエラーを解決するには、{% data variables.product.prodname_oauth_app %} の正しい認証情報を持っているかを確認します。 `client_id` と `client_secret` が間違っていないか、また {% data variables.product.product_name %} に正しく渡されているかを再確認してください。

### リダイレクトURIの不一致

指定した `redirect_uri` が {% data variables.product.prodname_oauth_app %} で登録したものと一致しない場合、次のエラーメッセージが表示されます。

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

このエラーを修正するには、登録したものと一致する`redirect_uri`を指定するか、アプリケーションで登録されているデフォルトのURIを使用するためパラメータを省略します。

### 不正な検証コード

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

渡した検証コードが間違っている、有効期限切れ、または最初の認可リクエストで受け取ったものと一致しない場合、このエラーを受信します。

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

この問題を解決するには、[OAuth Appの認可](/apps/building-oauth-apps/authorizing-oauth-apps/)のプロセスを再び開始し、新しいコードを取得します。
