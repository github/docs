---
title: 2 要素認証を利用した GitHub へのアクセス
intro: '2FA を有効にすると、{% data variables.product.product_name %} にサインインするときに、2FA 認証コードとパスワードを入力するように求められます。'
redirect_from:
  - /articles/providing-your-2fa-security-code/
  - /articles/providing-your-2fa-authentication-code/
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc/
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---
2 要素認証を有効にすると、ブラウザから {% data variables.product.product_name %} にアクセスするときに認証コードを入力する必要があります。 API やコマンドラインなどの他の方法を使用して {% data variables.product.product_name %} にアクセスする場合は、別の形式の認証を使用する必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)」を参照してください。

### Web サイトへのサインインの際に 2FA コードを提供

パスワードを使用して {% data variables.product.product_name %} にサインインすると、{% if currentVersion == "free-pro-team@latest" %} テキストメッセージまたは{% endif %} TOTP アプリから認証コードを入力するように求められます。

{% data variables.product.product_name %}が 2FA 認証コードを再度求めるのは、ログアウトした場合、新しいデバイスを使う場合、またはセッションが期限切れになった場合のみです。

#### TOTP アプリケーションでのコード生成

スマートフォン上の TOTP アプリケーションを使用して 2 要素認証をセットアップすることにした場合は、いつでも {% data variables.product.product_name %}のための認証コードを生成できます。 多くの場合、アプリケーションを起動するだけで新しいコードが生成されます。 個別の手順についてはアプリケーションのドキュメンテーションを参照してください。

2 要素認証を設定した後にモバイルアプリケーションを削除した場合、アカウントにアクセスする際にリカバリコードを入力しなければなりません。 詳しい情報については[2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

#### テキストメッセージの受信

テキストメッセージで 2 要素認証をセットアップする場合、{% data variables.product.product_name %}は認証コードが記されたテキストメッセージを送信します。

{% endif %}

### コマンドラインでの 2 要素認証の使用

2 要素認証を有効化した後は、{% data variables.product.product_name %} にコマンドラインからアクセスする際に、パスワードの代わりに個人アクセストークンまたは SSH キーを使わなければなりません。

#### HTTPS を利用したコマンドラインでの認証

2FA を有効化した後は、コマンドライン上で HTTPS の URL を使って {% data variables.product.product_name %}の認証を受けるために、パスワードとして使うための個人アクセストークンを作成しなければなりません。

コマンドラインでユーザ名とパスワードを求められたら、{% data variables.product.product_name %}のユーザ名と個人アクセストークンを入力してください。 コマンドラインプロンプトがパスワードを要求する際には、個人アクセストークンを入力すべきだということを示しません。

詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

#### SSH を利用したコマンドラインでの認証

2 要素認証を有効化しても、コマンドライン上で SSH URL を使って {% data variables.product.product_name %} の認証を受けるやり方は変わりません。 SSH キーのセットアップと利用に関する詳しい情報については、「[{% data variables.product.prodname_dotcom %} に SSH で接続する](/articles/connecting-to-github-with-ssh/)」を参照してください。

### Subversion を使ったリポジトリへのアクセスでの 2 要素認証の利用

SubVersion を介してリポジトリにアクセスする際には、パスワードを入力する代わりに個人アクセストークンを提供しなければなりません。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

### トラブルシューティング

2 要素認証のクレデンシャルを利用できなくなった場合、アカウントに再びアクセスするためには、リカバリコードを使用するか、その他のリカバリ方法 (セットアップ済みである場合) を使用できます。 詳しい情報については[2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

認証が何度も失敗するようであれば、スマートフォンのクロックをモバイルプロバイダと同期してみてください。 多くの場合、タイムゾーンを指定するのではなく、スマートフォンのクロックの「自動設定」オプションをオンにすることになります。

### 参考リンク

- [2 要素認証について](/articles/about-two-factor-authentication)
- [2 要素認証の設定](/articles/configuring-two-factor-authentication)
- [2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)
- [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
