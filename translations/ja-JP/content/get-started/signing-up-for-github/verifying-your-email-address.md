---
title: メールアドレスを検証する
intro: 'プライマリメールアドレスを検証することでセキュリティが強化され、パスワードを忘れた場合、{% data variables.product.prodname_dotcom %} スタッフによる支援がさらに充実し、{% data variables.product.prodname_dotcom %} のその他の機能にアクセスできるようになります。'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 75c455907ab0cc89f1ba8b30d6fa1d37f2d9798f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125805'
---
## メール検証について

新しいアカウントにサインアップした後、または新しいメールアドレスを追加するときに、メールアドレスを検証できます。 メールアドレスが配信不能またはバウンスしている場合、そのメールアドレスは未検証になります。

メールアドレスを検証しなければ、次のことができません:
  - リポジトリを作成またはフォークすること
  - Issue またはプルリクエストを作成すること
  - Issue、プルリクエスト、あるいはコメントにコメントする
  - {% data variables.product.prodname_oauth_app %} アプリケーションを承認すること
  - 個人アクセストークンを生成すること
  - メール通知を受け取る
  - リポジトリに Star を付けること
  - カードの追加を含めて、プロジェクトボードを作成、更新すること
  - Gist を作成すること
  - {% data variables.product.prodname_actions %} を作成または利用すること
  - {% data variables.product.prodname_sponsors %} で開発者をスポンサーする

{% warning %}

**警告**:

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## メールアドレスを検証する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. メールアドレスの下にある **[確認メールの再送信]** をクリックします。
  ![[確認メールの再送信]](/assets/images/help/settings/email-verify-button.png) リンク
4. {% data variables.product.prodname_dotcom %} からリンクが記載された電子メールが送信されます。 そのリンクをクリックすると、{% data variables.product.prodname_dotcom %} ダッシュボードに移動して確認バナーが表示されます。
  ![メールが検証されたことを知らせるバナー](/assets/images/help/settings/email-verification-confirmation-banner.png)

## メール検証のトラブルシューティング

### 検証メールを送信できない

{% data reusables.user-settings.no-verification-disposable-emails %}

### 検証用リンクをクリックした後のエラーページ

検証用リンクは、24 時間で期限が切れます。 24 時間以内にメールを検証しなかった場合、新たなメール検証用リンクをリクエストできます。 詳細については、「[メール アドレスを検証する](/articles/verifying-your-email-address)」を参照してください。

検証メールのリンクを 24 時間以内にクリックし、エラーページが表示された場合は、{% data variables.product.product_location %} で正しいアカウントにサインインしているか確認してください。

1. {% data variables.product.product_location %} の個人アカウントの {% data variables.product.signout_link %}。
2. ブラウザを閉じて再起動します。
3. {% data variables.product.product_location %} の個人アカウントの {% data variables.product.signin_link %}。
4. 弊社が送ったメール上の検証リンクをクリックします。

## 参考資料

- [プライマリメールアドレスの変更](/articles/changing-your-primary-email-address)
