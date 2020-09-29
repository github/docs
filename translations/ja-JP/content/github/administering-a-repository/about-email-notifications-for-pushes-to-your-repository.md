---
title: リポジトリへのプッシュに対するメール通知について
intro: 誰かがリポジトリにプッシュしたときに、特定のメールアドレスにメール通知を自動的に送信するように設定できます。
permissions: リポジトリの管理者権限を持つユーザは、リポジトリへのプッシュのためのメール通知を有効にできます。
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository/
  - /articles/receiving-email-notifications-for-pushes-to-a-repository/
  - /articles/about-email-notifications-for-pushes-to-your-repository/
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion != "free-pro-team@latest" %}{% data reusables.notifications.outbound_email_tip %}{% endif %}

リポジトリへのプッシュに対する各メール通知は、新しいコミットとそれらのコミットだけを含む diff へのリンクのリストを含みます。 このメール通知には以下が含まれます:

- コミットが行われたリポジトリの名前
- コミットが行われたブランチ
- {% data variables.product.product_name %} 内での diff へのリンクを含むコミットの SHA1
- コミットの作者
- コミットが作成された日付
- コミットの一部として変更されたファイル群
- コミットメッセージ

リポジトリへのプッシュに対して受け取るメール通知はフィルタリングできます。 詳細は、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}「[メール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications)」を参照してください。 プッシュのメール通知を無効にすることもできます。 詳しい情報については、「[通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}」を参照してください。

### リポジトリへのプッシュに対するメール通知の有効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-notifications %}
5. 最大で 2 個まで、通知の送信先にしたいメールアドレスを空白で区切って入力します。 2 つを超える数のアカウントにメールを送信させたい場合は、メールアドレスの 1 つをグループメールアドレスにしてください。 ![メールアドレスのテキストボックス](/assets/images/help/settings/email_services_addresses.png)
6. 自分のサーバーを運用している場合は、**Secret** トークンでメールの整合性を検証できます。 このトークンは `Approved` ヘッダとしてメールとともに送信されます。 `Approved`ヘッダが、あなたが送信したトークンにマッチすれば、そのメールが {% data variables.product.product_name %} からのものであると信頼できます。 ![メールのシークレットテキストボックス](/assets/images/help/settings/email_services_token.png)
7. [**Send from author**] (作者から送信) を選択して、コミッターのメールアドレスを使ってメールを配信することもできます。 そうしない場合、メールの送信元は {% data variables.notifications.no_reply_address %}となります。 ![メール作成者のチェックボックス](/assets/images/help/settings/email_services_author.png)
8. **Save settings（設定の保存）**をクリックしてください。 ![設定保存のボタン](/assets/images/help/settings/save_notification_settings.png)

### 参考リンク
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- 「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」
{% else %}
- 「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」
- 「[通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)」
- 「[メール通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)」
- 「[Web 通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)」{% endif %}
