---
title: メールアドレスを検証する
intro: 'プライマリメールアドレスを検証することでセキュリティが強化され、パスワードを忘れた場合、{% data variables.product.prodname_dotcom %} スタッフによる支援がさらに充実し、{% data variables.product.prodname_dotcom %} のその他の機能にアクセスできるようになります。'
redirect_from:
  - /articles/troubleshooting-email-verification/
  - /articles/setting-up-email-verification/
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
versions:
  free-pro-team: '*'
topics:
  - Accounts
---

### メール検証について

新しいアカウントにサインアップした後、または新しいメールアドレスを追加するときに、メールアドレスを検証できます。 メールアドレスが配信不能またはバウンスしている場合、そのメールアドレスは未検証になります。

メールアドレスを検証しなければ、次のことができません:
  - リポジトリを作成またはフォークすること
  - Issue またはプルリクエストを作成すること
  - Issue、プルリクエスト、あるいはコメントにコメントする
  - {% data variables.product.prodname_oauth_app %} アプリケーションを承認すること
  - 個人アクセストークンを生成すること
  - メール通知を受け取ること
  - リポジトリに Star を付けること
  - カードの追加を含めて、プロジェクトボードを作成、更新すること
  - Gist を作成すること
  - {% data variables.product.prodname_actions %} を作成または利用すること
  - {% data variables.product.prodname_sponsors %} で開発者をスポンサーする

{% warning %}

**警告**:

- {% data reusables.user_settings.no-verification-disposable-emails %}
- {% data reusables.user_settings.verify-org-approved-email-domain %}

{% endwarning %}

### メールアドレスを検証する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
1. メールアドレスの下にある [**Resend verification email**] をクリックします。 ![[Resend verification email] リンク](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} からリンクが記載された電子メールが送信されます。 そのリンクをクリックすると、{% data variables.product.prodname_dotcom %} ダッシュボードに移動して確認バナーが表示されます。 ![メールが検証されたことを知らせるバナー](/assets/images/help/settings/email-verification-confirmation-banner.png)

### メール検証のトラブルシューティング

#### 検証メールを送信できない

{% data reusables.user_settings.no-verification-disposable-emails %}

#### 検証用リンクをクリックした後のエラーページ

検証用リンクは、24 時間で期限が切れます。 24 時間以内にメールを検証しなかった場合、新たなメール検証用リンクをリクエストできます。 詳細は「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。

検証メールのリンクを 24 時間以内にクリックし、エラーページが表示された場合は、正しい {% data variables.product.prodname_dotcom %} アカウントにサインインしているか確認してください。

1. 個人 {% data variables.product.prodname_dotcom %} アカウントの {% data variables.product.signout_link %}
2. ブラウザを閉じて再起動します。
3. 個人 {% data variables.product.prodname_dotcom %} アカウントへの {% data variables.product.signin_link %}
4. 弊社が送ったメール上の検証リンクをクリックします。

### 参考リンク

- 「[プライマリメールアドレスを変更する](/articles/changing-your-primary-email-address)」
