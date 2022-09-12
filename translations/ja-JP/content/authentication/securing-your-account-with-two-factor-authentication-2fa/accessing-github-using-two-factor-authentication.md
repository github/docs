---
title: 2 要素認証を利用した GitHub へのアクセス
intro: '2FA を有効にすると、{% data variables.product.product_name %} にサインインするときに、2FA 認証コードとパスワードを入力するように求められます。'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 244cc4b45165cbc327729fd6d1c5ac519a6a6d7a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088314'
---
2 要素認証を有効にすると、ブラウザから {% data variables.product.product_name %} にアクセスするときに認証コードを入力する必要があります。 API やコマンドラインなどの他の方法を使用して {% data variables.product.product_name %} にアクセスする場合は、別の形式の認証を使用する必要があります。 詳細については、「[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)」を参照してください。

## Web サイトへのサインインの際に 2FA コードを提供

パスワードを使用して {% data variables.product.product_name %} にサインインした後、{% ifversion fpt or ghec %} テキスト メッセージまたは {% endif %} TOTP アプリケーションから、認証コードを入力するよう求められます。

{% data variables.product.product_name %}が 2FA 認証コードを再度求めるのは、ログアウトした場合、新しいデバイスを使う場合、またはセッションが期限切れになった場合のみです。

### TOTP アプリケーションでのコード生成

スマートフォン上の TOTP アプリケーションを使用して 2 要素認証をセットアップすることにした場合は、いつでも {% data variables.product.product_name %}のための認証コードを生成できます。 多くの場合、アプリケーションを起動するだけで新しいコードが生成されます。 個別の手順についてはアプリケーションのドキュメンテーションを参照してください。

2 要素認証を設定した後にモバイルアプリケーションを削除した場合、アカウントにアクセスする際にリカバリコードを入力しなければなりません。 詳細については、「[2 要素認証資格情報を失った場合のアカウントの復旧](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)」を参照してください。

{% ifversion fpt or ghec %}

### テキストメッセージの受信

テキストメッセージで 2 要素認証をセットアップする場合、{% data variables.product.product_name %}は認証コードが記されたテキストメッセージを送信します。

### {% data variables.product.prodname_mobile %} を使用した検証

{% data variables.product.prodname_mobile %} にインストールしてサインインしている場合は、2 要素認証に対して {% data variables.product.prodname_mobile %} で認証することを選択できます。

1. ユーザー名とパスワードを使用して、ブラウザーで {% data variables.product.product_name %} にサインインします。
2. アカウントにセキュリティ キーを追加した場合は、まず、セキュリティ キーを挿入して使用するように求められます。 セキュリティ キーの使用をスキップするには、 **[{% data variables.product.prodname_mobile %} で認証]** をクリックします。
  ![[{% data variables.product.prodname_mobile %} で認証] が強調表示された {% data variables.product.product_name %} に対する 2 要素認証チャレンジ](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} によって、サインインの試行を確認するためのプッシュ通知が送信されます。 プッシュ通知を開くか、{% data variables.product.prodname_mobile %} アプリを開くと、このサインイン試行の承認または拒否を求めるプロンプトが表示されます。
  {% note %}

  **注意**: このプロンプトでは、サインインするブラウザー内に表示される 2 桁の番号を入力することが必要になる場合があります。

  {% endnote %}

  ![2 桁の入力を必要とする {% data variables.product.prodname_mobile %} での 2 要素認証チャレンジ](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - {% data variables.product.prodname_mobile %} を使用してログイン試行を承認すると、ブラウザーは自動的にサインイン試行を完了します。
    - サインイン試行を拒否すると、認証が終了できなくなります。 詳細については、「[アカウントとデータを安全に保つ](/authentication/keeping-your-account-and-data-secure)」を参照してください。

{% endif %}

## コマンドラインでの 2 要素認証の使用

2FA を有効にすると、パスワードを使用してコマンド ラインの {% data variables.product.product_name %} にアクセスできなくなります。 代わりに、Git Credential Manager、個人用アクセス トークン、または SSH キーを使用します。

### Git Credential Manager を使用したコマンド ラインでの認証

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) は、Windows、macOS、Linux で実行されるセキュリティで保護された Git 資格情報ヘルパーです。 Git 資格情報ヘルパーの詳細については、Pro Git ブックで「[繰り返しの回避](https://git-scm.com/docs/gitcredentials#_avoiding_repetition)」を参照してください。

セットアップ手順は、コンピューターのオペレーティング システムによって異なります。 詳細については、GitCredentialManager/git-credential-manager リポジトリの「[ダウンロードとインストール](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install)」を参照してください。

### HTTPS を利用したコマンドラインでの認証

2FA を有効化した後は、コマンドライン上で HTTPS の URL を使って {% data variables.product.product_name %}の認証を受けるために、パスワードとして使うための個人アクセストークンを作成しなければなりません。

コマンドラインでユーザ名とパスワードを求められたら、{% data variables.product.product_name %}のユーザ名と個人アクセストークンを入力してください。 コマンドラインプロンプトがパスワードを要求する際には、個人アクセストークンを入力すべきだということを示しません。

詳細については、「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

### SSH を利用したコマンドラインでの認証

2 要素認証を有効化しても、コマンドライン上で SSH URL を使って {% data variables.product.product_name %} の認証を受けるやり方は変わりません。 SSH キーの設定と使用の詳細については、「[{% data variables.product.prodname_dotcom %} に SSH で接続する](/articles/connecting-to-github-with-ssh/)」を参照してください。

## Subversion を使ったリポジトリへのアクセスでの 2 要素認証の利用

SubVersion を介してリポジトリにアクセスする際には、パスワードを入力する代わりに個人アクセストークンを提供しなければなりません。 詳細については、「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

## トラブルシューティング

2 要素認証のクレデンシャルを利用できなくなった場合、アカウントに再びアクセスするためには、リカバリコードを使用するか、その他のリカバリ方法 (セットアップ済みである場合) を使用できます。 詳細については、「[2 要素認証資格情報を失った場合のアカウントの復旧](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)」を参照してください。

認証が何度も失敗するようであれば、スマートフォンのクロックをモバイルプロバイダと同期してみてください。 多くの場合、タイムゾーンを指定するのではなく、スマートフォンのクロックの「自動設定」オプションをオンにすることになります。

## 参考資料

- "[2 要素認証について](/articles/about-two-factor-authentication)"
- "[2 要素認証を設定する](/articles/configuring-two-factor-authentication)"
- "[2 要素認証復旧方法を設定する](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[2 要素認証資格情報を失った場合のアカウントの復旧](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
