---
title: 認可リクエストエラーのトラブルシューティング
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### アプリケーションのサスペンド

設定した OAuth Appが (不正利用の報告、スパム、APIの誤用により) サスペンドされた場合、GitHubは以下のパラメータを使用して、エラーを手短に説明する、登録されたコールバックURLにリダイレクトします。

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

サスペンドされたアプリケーションに関する問題を解決するには、{% data variables.contact.contact_support %} までご連絡ください。

### リダイレクトURIの不一致

指定した`redirect_uri`がアプリケーションで登録したものと一致しない場合、GitHubは以下のパラメータを使用して、エラーを手短に説明する、登録されたコールバックURLにリダイレクトします。

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

このエラーを修正するには、登録したものと一致する`redirect_uri`を指定するか、アプリケーションで登録されているデフォルトのURIを使用するためパラメータを省略します。

#### アクセス拒否

If the ユーザがアプリケーションへのアクセスを拒否している場合、GitHubは以下のパラメータを使用して、エラーを手短に説明する、登録されたコールバックURLにリダイレクトします。

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

このような場合、あなたにできることは何もありません。ユーザには、あなたのアプリケーションを使用しない自由があります。 ユーザはウインドウを閉じるかブラウザで戻ることが多いため、このエラーをあなたが見ることはないかもしれません。
