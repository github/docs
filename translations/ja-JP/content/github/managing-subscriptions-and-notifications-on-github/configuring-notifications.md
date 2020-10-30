---
title: 通知を設定する
intro: '通知を受信する {% data variables.product.product_name %} のアクティビティのタイプと、これらの更新の配信方法を選択します。'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### 通知配信オプション

You have three basic options for notification delivery:
  - the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}
  - {% data variables.product.product_name %}{% endif %} のインボックスと同期する {% data variables.product.prodname_mobile %} の通知インボックス
  - an email client that uses a verified email address, which can also sync with the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see "[Choosing your notification settings](#choosing-your-notification-settings)."
{% endif %}

{% data reusables.notifications-v2.tip-for-syncing-email-and-your-inbox-on-github %}

#### 通知インボックスの利点

The notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %} includes triaging options designed specifically for your {% data variables.product.product_name %} notifications flow, including options to:
  - 複数の通知を一括でトリアージする。
  - 完了した通知を**完了**としてマークし、インボックスから削除する。 **完了**としてマークされたすべての通知を表示するには、`is:done` クエリを使用します。
  - 後で確認するために通知を保存する。 保存した通知にはインボックスでフラグが付けられ、無期限に保持されます。 保存した通知をすべて表示するには、`is:saved` クエリを使用します。
  - サブスクライブ解除して、インボックスから通知を削除する。
  - 通知が、通知インボックスから {% data variables.product.product_name %} で発生する Issue、プルリクエスト、または Team ディスカッションをプレビューする。
  - インボックスから `reasons` ラベルが付いた通知を受信する最新の理由の1つを確認する。
  - カスタムフィルタを作成して、必要なときにさまざまな通知にフォーカスする。
  - インボックスの通知をリポジトリまたは日付別にグループ化して、コンテキストの切り替えを減らし、概要をすばやく確認する。

{% if currentVersion == "free-pro-team@latest" %}
In addition, the notifications inbox on
{% data variables.product.prodname_mobile %} allows you to triage notifications in dark mode and receive push notifications for direct mentions. For more information, see "[Enabling push notifications with GitHub for mobile](#enabling-push-notifications-with-github-for-mobile)" or "[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)."
{% endif %}

#### 通知にメールクライアントを使用する利点

One benefit of using an email client is that all of your notifications can be kept indefinitely depending on your email client's storage capacity. Your inbox notifications are only kept for 5 months unless you've marked them as **Saved**. **Saved** notifications are kept indefinitely. インボックスの保持ポリシーの詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)」を参照してください。

Sending notifications to your email client also allows you to customize your inbox according to your email client's settings, which can include custom or color-coded labels.

Email notifications also allow flexibility with the types of notifications you receive and allow you to choose different email addresses for updates. For example, you can send certain notifications for a repository to a  verified personal email address. For more information, about your email customization options, see "[Customizing your email notifications](#customizing-your-email-notifications)."

### 参加と Watch 対象の通知について

When you watch a repository, you're subscribing to updates for activity in that repository. Similarly, when you watch a specific team's discussions, you're subscribing to all conversation updates on that team's page. To see repositories that you're watching, see [https://github.com/watching](https://github.com/watching). 詳しい情報については「[GitHub上でのサブスクリプションと通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

Anytime you comment in a conversation or when someone @mentions your username, you are _participating_ in a conversation. By default, you are automatically subscribed to a conversation when you participate in it. You can unsubscribe from a conversation you've participated in manually by clicking **Unsubscribe** on the issue or pull request or through the **Unsubscribe** option in the notifications inbox.

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}.

![Participating and watching notifications options](/assets/images/help/notifications-v2/participating-and-watching-options.png)

例:
  - 通知をメールに送信しない場合は、[**Email**] をオフにして、参加と Watch 対象の通知を行います。
  - 会話に参加したときにメールで通知を受信する場合は、[Participating] の下の [**Email**] を選択します。

If you do not enable watching or participating notifications for web{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}, then your notifications inbox will not have any updates.

### メール通知をカスタマイズする

メール通知を有効化すると、{% data variables.product.product_name %} はコンテンツを HTML とプレーンテキストの両方で含むマルチパートのメールとして通知を送信します。 メール通知のコンテンツには、{% data variables.product.product_name %} のオリジナルのコンテンツに含まれる Markdown、@メンション、絵文字、ハッシュリンクなどがすべて含まれます。 メールでテキストだけを見たいなら、プレーンテキストのコピーだけを表示するようにメールクライアントを設定できます。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

Gmailを使っているなら、通知メールの横にあるボタンをクリックして、通知を生成したオリジナルのIssueあるいはプルリクエストにアクセスできます。

![Gmailのボタン](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Choose a default email address where you want to send updates for conversations you're participating in or watching. You can also specify which activity on {% data variables.product.product_name %} you want to receive updates for using your default email address. For example, choose whether you want updates to your default email from:
  - Issue やプルリクエストへのコメント。
  - プルリクエストのレビュー.
  - プルリクエストのプッシュ。
  - Issue やプルリクエストのオープン、コメント、クローズなどの、自分自身の操作による更新。

Depending on the organization that owns the repository, you can also send notifications to different email addresses for specific repositories. For example, you can send notifications for a specific public repository to a verified personal email address. Your organization may require the email address to be verified for a specific domain. 詳しい情報については、「[Organization のメール通知の送信先を選択する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)」を参照してください。

{% data reusables.notifications-v2.email-notification-caveats %}

### メール通知のフィルタリング

{% data variables.product.product_name %} が送信する各メール通知には、ヘッダ情報が含まれています。 各メールのヘッダ情報には一貫性があるので、それを使ってメールクライアントですべての {% data variables.product.product_name %} 通知あるいは特定の種類の {% data variables.product.product_name %} 通知をフィルタリングしたりフォワードしたりできます。

If you believe you're receiving notifications that don't belong to you, examine the `X-GitHub-Recipient` and `X-GitHub-Recipient-Address` headers. These headers show who the intended recipient is. Depending on your email setup, you may receive notifications intended for another user.

{% data variables.product.product_name %} からのメール通知には、以下のヘッダ情報が含まれています:

| ヘッダ                      | 情報                                                                                                                                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` アドレス              | This address will always be {% if currentVersion == "free-pro-team@latest" %}'`notifications@github.com`'{% else %}'the no-reply email address configured by your site administrator'{% endif %}.                                                                 |
| `To` フィールド               | このフィールドは、直接スレッドに接続します。 メールに返信すると、会話に新しいコメントを追加することになります。                                                                                                                                                                                                          |
| `Cc` アドレス                | あなたが会話をサブスクライブしていれば、{% data variables.product.product_name %}はあなたに `Cc` します。 2番目の`Cc`メールアドレスは、通知の理由にマッチします。 これらの通知理由に対するサフィックスは{% data variables.notifications.cc_address %}です。 通知の理由には以下のようなものがあります。 <ul><li>`assign`: 受信者はIssueあるいはプルリクエストに割り当てられました。</li><li>`author`: 受信者はIssueあるいはプルリクエストの作者です。</li><li>`comment`: 受信者はIssueあるいはプルリクエストにコメントしました。</li><li>`manual`: 手作業でサブスクライブした Issue あるいはプルリクエストが更新されました。</li><li>`mention`: 受信者は Issue あるいはプルリクエストにメンションされました。</li><li>`push`: 受信者がサブスクライブしているプルリクエストに誰かがコミットしました。</li><li>`review_requested`: 受信者あるいは受信者がメンバーになっている Team にプルリクエストのレビューがリクエストされました。</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} は、受信者がセキュリティのアラートを受け取るリポジトリに脆弱性を検出しました。</li><li>`state_change`: 受信者がサブスクライブしている Issue あるいはプルリクエストがクローズもしくはオープンされました。</li><li>`subscribed`: 受信者が Watch しているリポジトリに更新がありました。</li><li>`team_mention`: 受信者が属している Team が Issue あるいはプルリクエストでメンションされました。</li><li>`your_activity`: 受信者が Issue あるいはプルリクエストをオープン、コメントあるいはクローズしました。</li></ul>                                    |
| `mailing list` フィールド     | このフィールドはリポジトリの名前とそのオーナーを特定します。 このアドレスのフォーマットは常に`<repository name>.<repository owner>.{% data variables.command_line.backticks %}`となります。 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity`フィールド | {% data reusables.repositories.security-alerts-x-github-severity %} 考えられる重大度レベルは次のとおりです。<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 |{% endif %}

### 通知設定を選択する

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 通知設定ページで、次の場合の通知の受信方法を選択します。
    - Watch しているリポジトリや Team ディスカッション、または参加している会話に更新がある場合。 詳しい情報については、「[参加と Watch 対象の通知について](#about-participating-and-watching-notifications)」を参照してください。
    - 新しいリポジトリにアクセスするか、新しい Team に参加した場合。 For more information, see "[Automatic watching](#automatic-watching)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - リポジトリに新しい{% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %}セキュリティアラート{% endif %}があります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} 通知オプション](#github-dependabot-alerts-notification-options)」を参照してください。 {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - リポジトリに新しいセキュリティアラートがある場合。 There are new security alerts in your repository. {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - {% data variables.product.prodname_actions %} で設定されたリポジトリにワークフロー実行の更新がある場合。 詳しい情報については、「[{% data variables.product.prodname_actions %} 通知オプション](#github-actions-notification-options)」を参照してください。{% endif %}

### 自動 Watch

By default, anytime you gain access to a new repository, you will automatically begin watching that repository. Anytime you join a new team, you will automatically be subscribed to updates and receive notifications when that team is @mentioned. If you don't want to automatically be subscribed, you can unselect the automatic watching options.

  ![Automatic watching options](/assets/images/help/notifications-v2/automatic-watching-options.png)

If "Automatically watch repositories" is disabled, then you will not automatically watch your own repositories. You must navigate to your repository page and choose the watch option.

### Organization のメール通知の送信先を選択する

Organization に所属している場合、Organization のアクティビティに関する通知の送信先にするメールアカウントを指定できます。 たとえば、職場の Organization に所属している場合、通知を個人のアドレスではなく、職場のアドレスに送信する方が良いでしょう。

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Default notification email] で、通知の送信先にするメールアドレスを選択します。   
   ![デフォルトの通知メールアドレスのドロップダウン](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. [**Save**] をクリックします。

#### Organization ごとにメールの送信先を設定する

If you are a member of more than one organization, you can configure each one to send notifications to any of{% if currentVersion == "free-pro-team@latest" %} your verified email addresses{% else %} the email addressed you've added to your {% data variables.product.product_name %} account{% endif %}. {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Custom routing] で、一覧から Organization の名前を見つけます。   
   ![Organization とメールアドレスの一覧](/assets/images/help/notifications/notifications_org_emails.png)
4. 変更したいアドレスの隣にある [**Edit**] をクリックします。 ![Organization のメールアドレスの編集](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. 検証済みメールアドレスのうち 1 つを選択し、[**Save**] をクリックします。    
   ![Organization ごとのメールアドレス切り替え](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot_alerts %} の通知オプション
{% else %}
### Security alert options
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

For more information about the notification delivery methods available to you, and advice on optimizing your notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### {% data variables.product.prodname_actions %} の通知オプション

Choose how you want to receive workflow run updates for repositories that you are watching that are set up with {% data variables.product.prodname_actions %}. You can also choose to only receive notifications for failed workflow runs.

  ![{% data variables.product.prodname_dependabot_short %} アラートオプション](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### {% data variables.product.prodname_mobile %} でプッシュ通知を有効にする

{% data variables.product.prodname_mobile %} をインストールすると、自動的に Web 通知が有効になります。 You can then enable push notifications for direct mentions within the app.

You can only receive notifications for pushes to repositories on {% data variables.product.prodname_mobile %} at this time.

#### {% data variables.product.prodname_ios %} でプッシュ通知を有効にする

1. [Home] の上にあるプロフィール画像をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。 ![GitHub iOS 版の設定アイコン](/assets/images/help/mobile/ios-settings-icon.png)
3. 通知設定を更新するには、[**Push notifications**] をタップします。
4. 直接メンションのプッシュ通知をオンにするには、[**Direct Mentions**] の切り替えを使用します。

#### {% data variables.product.prodname_android %} でプッシュ通知を有効にする

1. [Home] の上にあるプロフィール画像をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。 ![GitHub Android 版の設定アイコン](/assets/images/help/mobile/android-settings-icon.png)
3. 直接メンションのプッシュ通知をオンにするには、[**Direct mentions**] の切り替えを使用します。
{% endif %}
