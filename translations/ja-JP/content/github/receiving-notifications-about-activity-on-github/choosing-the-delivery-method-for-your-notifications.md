---
title: 通知の配信方法を選択する
intro: '通知を受け取る場所を、{% data variables.product.product_location %}にするか、メールクライアントにするかを選択できます。'
versions:
  enterprise-server: <2.21
---

個人アカウントの通知メールは、デフォルトの通知用メールアドレスに自動的に送信されます。

{% data reusables.notifications.outbound_email_tip %}

### リポジトリのアクティビティに関する通知の配信方法を選択する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. 参加または Watch しているリポジトリの通知を受信する方法を、チェックボックスで選択して設定します:
    - [**Email**] を選択すると、デフォルトの通知用メールアドレスにメールが送信されます。
    - [**Web**] を選択すると、{% data variables.product.product_location %}で通知にアクセスできます。 ![通知方法の設定](/assets/images/help/settings/ent-notifications-settings.png)
4. 参加または Watch している会話について [**Email**] を選択した場合、どの情報を受信するか、[Notification email] セクションにあるチェックボックスで選んでください:
    - [**Comments on Issues and Pull Requests**] を選択すると、Issue またはプルリクエストの [Conversation] タブでコメントがあった時にメールを受信します。
    - [**Pull request reviews**] を選択すると、プルリクエストの [Files changed] タブでコメントがあった時にメールを受信します。
    - [**Pull request pushes**] を選択すると、サブスクライブしているプルリクエストにコミットが追加された時にメールを受信します。
    - [**Include your own updates**] を選択すると、Issue またはプルリクエストをオープン、クローズするか、あなたがその Issue またはプルリクエストでコメントした時にメールを受信します。 ![メール通知オプションの設定](/assets/images/help/settings/email_notification_settings.png)

### 脆弱性のある依存関係に対するセキュリティアラートの通知方法を選択する

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. [Security alerts] で、{% data variables.product.product_name %} があなたのリポジトリ内で脆弱な依存関係を検出した時の通知の受信方法を設定します。 ![セキュリティアラートの通知を設定するオプション](/assets/images/help/settings/vulnerability-alerts-options.png)
    - [**UI alerts**] を選択すると、{% data variables.product.product_name %}のインターフェースにバナーが表示されます。
    - [**Command Line**] を選択すると、脆弱性のあるリポジトリにブッシュしたとき、コールバックとして警告が表示されます。
    - [**Web**] を選択すると、{% data variables.product.product_location %}で通知にアクセスできます。
    - [**Email each time a vulnerability is found**] を選択すると、デフォルトの通知用メールアドレスにメールが送信されます。
    - [**Email a digest summary of vulnerabilities**] を選択すると、最大で 10 個のリポジトリのセキュリティアラートをまとめたダイジェストメールが送信されます。 ドロップダウンメニューで、ダイジェストメールの受信周期を毎日にするか毎週にするかを選択してください。

### 参考リンク

- 「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」
- 「[メール通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)」
- 「[Web 通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)」
- [リポジトリの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)
- [メールプリファレンスを管理する](/articles/managing-email-preferences)
