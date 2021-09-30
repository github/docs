---
title: リポジトリへのプッシュに対するメール通知について
intro: 誰かがリポジトリにプッシュしたときに、特定のメールアドレスにメール通知を自動的に送信するように設定できます。
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository/
  - /articles/receiving-email-notifications-for-pushes-to-a-repository/
  - /articles/about-email-notifications-for-pushes-to-your-repository/
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
---

{% data reusables.notifications.outbound_email_tip %}

リポジトリへのプッシュに対する各メール通知は、新しいコミットとそれらのコミットだけを含む diff へのリンクのリストを含みます。 このメール通知には以下が含まれます:

- コミットが行われたリポジトリの名前
- コミットが行われたブランチ
- {% data variables.product.product_name %} 内での diff へのリンクを含むコミットの SHA1
- コミットの作者
- コミットが作成された日付
- コミットの一部として変更されたファイル群
- コミットメッセージ

リポジトリへのプッシュに対して受け取るメール通知はフィルタリングできます。 詳細は、{% ifversion fpt or ghae or ghes %}「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}「[メール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications)」を参照してください。 プッシュのメール通知を無効にすることもできます。 詳しい情報については、「[通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}」を参照してください。

## リポジトリへのプッシュに対するメール通知の有効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-notifications %}
5. 最大で 2 個まで、通知の送信先にしたいメールアドレスを空白で区切って入力します。 2 つを超える数のアカウントにメールを送信させたい場合は、メールアドレスの 1 つをグループメールアドレスにしてください。 ![メールアドレスのテキストボックス](/assets/images/help/settings/email_services_addresses.png)
1. 自分のサーバーを運用している場合は、**Approved ヘッダ**を介してメールの整合性を確認できます。 **Approved ヘッダ**は、このフィールドに入力するトークンまたはシークレットであり、メールで送信されます。 メールが `Approved` ヘッダが、送信したトークンにマッチする場合、そのメールが {% data variables.product.product_name %} からのものであると信頼できます。 ![Approved ヘッダのテキストボックスをメールで送信](/assets/images/help/settings/email_services_approved_header.png)
7. [**Setup notifications**] をクリックします。 ![設定通知ボタン](/assets/images/help/settings/setup_notifications_settings.png)

## 参考リンク
{% ifversion fpt or ghae or ghes %}
- 「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」
{% else %}
- 「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」
- [通知の配信方法を選択する](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)
- 「[メール通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)」
- 「[Web 通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)」{% endif %}
