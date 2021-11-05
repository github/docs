---
title: 通知を設定する
intro: '通知を受信する {% data variables.product.prodname_dotcom %} のアクティビティのタイプと、これらの更新の配信方法を選択します。'
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
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
---

{% ifversion ghes %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

## 通知配信オプション

次の場所で、{% data variables.product.product_location %} のアクティビティに関する通知を受け取ることができます。

  - {% data variables.product.product_location %} Web インターフェースの通知インボックス{% ifversion fpt or ghes or ghec %}
  - {% data variables.product.product_location %}{% endif %} のインボックスと同期する {% data variables.product.prodname_mobile %} の通知インボックス
  - {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} および {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスとも同期し、認証済みメールアドレスを使用するメールクライアント

{% ifversion fpt or ghes or ghec %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} 詳しい情報については、「[通知設定を選択する](#choosing-your-notification-settings)」を参照してください。
{% endif %}

{% data reusables.notifications.shared_state %}

### 通知インボックスの利点

{% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} および {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスには、{% data variables.product.prodname_dotcom %} 通知フロー用に特別に設計されたトリアージオプションが含まれています。
  - 複数の通知を一括でトリアージする。
  - 完了した通知を**完了**としてマークし、インボックスから削除する。 **完了**としてマークされたすべての通知を表示するには、`is:done` クエリを使用します。
  - 後で確認するために通知を保存する。 保存した通知にはインボックスでフラグが付けられ、無期限に保持されます。 保存した通知をすべて表示するには、`is:saved` クエリを使用します。
  - サブスクライブ解除して、インボックスから通知を削除する。
  - 通知が、通知インボックスから {% data variables.product.product_location %} で発生する Issue、プルリクエスト、または Team ディスカッションをプレビューする。
  - インボックスから `reasons` ラベルが付いた通知を受信する最新の理由の1つを確認する。
  - カスタムフィルタを作成して、必要なときにさまざまな通知にフォーカスする。
  - インボックスの通知をリポジトリまたは日付別にグループ化して、コンテキストの切り替えを減らし、概要をすばやく確認する。

{% ifversion fpt or ghes or ghec %}
In addition, you can receive and triage notifications on your mobile device with {% data variables.product.prodname_mobile %}. 詳しい情報については、「[GitHub for mobile を使用して通知設定を管理する](#managing-your-notification-settings-with-github-for-mobile)」または「[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)」を参照してください。
{% endif %}

### 通知にメールクライアントを使用する利点

メールクライアントを使用する利点の 1 つは、メールクライアントのストレージ容量に応じて、すべての通知を無期限に保持できることです。 Your inbox notifications are only kept for 5 months on {% data variables.product.prodname_dotcom %} unless you've marked them as **Saved**. **保存済**の通知は、無期限に保持されます。 インボックスの保持ポリシーの詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)」を参照してください。

メールクライアントに通知を送信すると、メールクライアントの設定に従ってインボックスをカスタマイズすることもできます。これには、カスタムラベルまたは色分けされたラベルを含めることができます。

メール通知では、受信する各種通知に柔軟に対応し、更新用にさまざまなメールアドレスを選択できます。 たとえば、リポジトリの特定の通知を検証済みの個人のメールアドレスに送信できます。 メールのカスタマイズオプションの詳細については、「[メール通知をカスタマイズする](#customizing-your-email-notifications)」を参照してください。

## 参加と Watch 対象の通知について

リポジトリの Watch 時は、そのリポジトリでのアクティビティの更新をサブスクライブしています。 同様に、特定の Team のディスカッションの Watch 時は、その Team のページですべての会話の更新をサブスクライブしていることになります。 詳しい情報については[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)を参照してください。

監視しているリポジトリを表示するには、[Watch ページ](https://github.com/watching)にアクセスします。 詳しい情報については「[GitHub上でのサブスクリプションと通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

{% ifversion ghae or ghes < 3.1 %}
### 通知を設定する
{% endif %}
You can configure notifications for a repository on the repository page, or on your watching page.{% ifversion ghes < 3.1 %} You can choose to only receive notifications for releases in a repository, or ignore all notifications for a repository.{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}

### カスタム通知について
You can customize notifications for a repository. For example, you can choose to only be notified when updates to one or more types of events ({% data reusables.notifications-v2.custom-notification-types %}) happen within a repository, or ignore all notifications for a repository.
{% endif %} For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

### 会話への参加
会話にコメントしたり、あなたのユーザ名が @メンションされたりすると、会話に_参加_することになります。 デフォルトでは、会話に参加すると、会話に自動的にサブスクライブされます。 手動で参加した会話をサブスクライブ解除するには、Issue またはプルリクエストで [**Unsubscribe**] をクリックするか、通知インボックスの [**Unsubscribe**] オプションを使用します。

Watch 中または参加中の会話について、メールまたは {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} と {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスで通知を受け取るかどうかを選択できます。

![参加および Watch 対象の通知オプション](/assets/images/help/notifications-v2/participating-and-watching-options.png)

例:
  - 通知をメールに送信しない場合は、[**Email**] をオフにして、参加と Watch 対象の通知を行います。
  - 会話に参加したときにメールで通知を受信する場合は、[Participating] の下の [**Email**] を選択します。

Web{% ifversion fpt or ghes or ghec %} およびモバイル{% endif %}の Watch 通知または参加通知を有効にしない場合、通知インボックスは更新されません。

## メール通知をカスタマイズする

メール通知を有効化すると、{% data variables.product.product_location %} はコンテンツを HTML とプレーンテキストの両方で含むマルチパートのメールとして通知を送信します。 メール通知のコンテンツには、{% data variables.product.product_location %} のオリジナルのコンテンツに含まれる Markdown、@メンション、絵文字、ハッシュリンクなどがすべて含まれます。 メールでテキストだけを見たいなら、プレーンテキストのコピーだけを表示するようにメールクライアントを設定できます。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Gmailを使っているなら、通知メールの横にあるボタンをクリックして、通知を生成したオリジナルのIssueあるいはプルリクエストにアクセスできます。

![Gmailのボタン](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

参加中または Watch 中の会話の更新を送信するデフォルトのメールアドレスを選択します。 また、デフォルトのメールアドレスを使用するための更新を受信する {% data variables.product.product_location %} のアクティビティを指定することもできます。 たとえば、デフォルトのメールを次の場所から更新するかどうかを選択します。
  - Issue やプルリクエストへのコメント。
  - プルリクエストのレビュー.
  - プルリクエストのプッシュ。
  - Issue やプルリクエストのオープン、コメント、クローズなどの、自分自身の操作による更新。

リポジトリを所有する Organization に応じて、さまざまなメールアドレスに通知を送信することもできます。 Organization では、特定のドメインのメールアドレスを検証する必要がある場合があります。 詳しい情報については、「[Organization のメール通知の送信先を選択する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)」を参照してください。

特定のリポジトリの通知をメールアドレスに送信することもできます。 詳しい情報については、「[リポジトリへのプッシュに対するメール通知について](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)」を参照してください。

{% data reusables.notifications-v2.email-notification-caveats %}

## メール通知のフィルタリング

{% data variables.product.product_location %} が送信する各メール通知には、ヘッダ情報が含まれています。 各メールのヘッダ情報には一貫性があるので、それを使ってメールクライアントですべての {% data variables.product.prodname_dotcom %} 通知あるいは特定の種類の {% data variables.product.prodname_dotcom %} 通知をフィルタリングしたりフォワードしたりできます。

自分向けではない通知を受信していると思われる場合は、`X-GitHub-Recipient` および `X-GitHub-Recipient-Address` ヘッダを調べてください。 これらのヘッダは、対象の受信者を示しています。 メールの設定によっては、別のユーザ向けの通知を受け取る場合があります。

{% data variables.product.product_location %} からのメール通知には、以下のヘッダ情報が含まれています:

| ヘッダ                      | 情報                                                                                                                                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` アドレス              | このアドレスは常に、{% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'サイトの管理者が設定した no-reply メールアドレス'{% endif %}になります。                                                                                                                                       |
| `To` フィールド               | このフィールドはスレッドに直接接続します。 {% ifversion not ghae %}メールに返信すると、会話に新しいコメントが追加されます。{% endif %}
| `Cc` アドレス                | あなたが会話をサブスクライブしていれば、{% data variables.product.product_name %}はあなたに `Cc` します。 2番目の`Cc`メールアドレスは、通知の理由にマッチします。 これらの通知理由に対するサフィックスは{% data variables.notifications.cc_address %}です。 通知の理由には以下のようなものがあります。 <ul><li>`assign`: 受信者はIssueあるいはプルリクエストに割り当てられました。</li><li>`author`: 受信者はIssueあるいはプルリクエストの作者です。</li><li>`ci_activity`: A {% data variables.product.prodname_actions %} workflow run that you triggered was completed.</li><li>`comment`: 受信者はIssueあるいはプルリクエストにコメントしました。</li><li>`manual`: 手作業でサブスクライブした Issue あるいはプルリクエストが更新されました。</li><li>`mention`: 受信者は Issue あるいはプルリクエストにメンションされました。</li><li>`push`: 受信者がサブスクライブしているプルリクエストに誰かがコミットしました。</li><li>`review_requested`: 受信者あるいは受信者がメンバーになっている Team にプルリクエストのレビューがリクエストされました。</li>{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}<li>`security_alert`: {% data variables.product.prodname_dotcom %} は、受信者がセキュリティのアラートを受け取るリポジトリに脆弱性を検出しました。</li>{% endif %}<li>`state_change`: 受信者がサブスクライブしている Issue あるいはプルリクエストがクローズもしくはオープンされました。</li><li>`subscribed`: 受信者が Watch しているリポジトリに更新がありました。</li><li>`team_mention`: 受信者が属している Team が Issue あるいはプルリクエストでメンションされました。</li><li>`your_activity`: 受信者が Issue あるいはプルリクエストをオープン、コメントあるいはクローズしました。</li></ul>                                    |
| `mailing list` フィールド     | このフィールドはリポジトリの名前とそのオーナーを特定します。 このアドレスのフォーマットは常に`<repository name>.<repository owner>.{% data variables.command_line.backticks %}`となります。 |{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
| `X-GitHub-Severity`フィールド | {% data reusables.repositories.security-alerts-x-github-severity %} 考えられる重大度レベルは次のとおりです。<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 
{% endif %}

## 通知設定を選択する

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 通知設定ページで、次の場合の通知の受信方法を選択します。
    - Watch しているリポジトリや Team ディスカッション、または参加している会話に更新がある場合。 詳しい情報については、「[参加と Watch 対象の通知について](#about-participating-and-watching-notifications)」を参照してください。
    - 新しいリポジトリにアクセスするか、新しい Team に参加した場合。 詳しい情報については、「[自動 Watch](#automatic-watching)」を参照してください。"{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
    - リポジトリに新しい{% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %}セキュリティアラート{% endif %}があります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} 通知オプション](#dependabot-alerts-notification-options)」を参照してください。 {% endif %} {% ifversion fpt or ghec %}
    - {% data variables.product.prodname_actions %} で設定されたリポジトリにワークフロー実行の更新がある場合。 詳しい情報については、「[{% data variables.product.prodname_actions %} 通知オプション](#github-actions-notification-options)」を参照してください。{% endif %}

## 自動 Watch

デフォルトでは、新しいリポジトリにアクセスすると、そのリポジトリの Watch が自動的に開始されます。 新しいチームに参加するたびに、更新が自動的にサブスクライブされ、その Team が@メンションされたときに通知を受け取ります。 自動でサブスクライブしない場合は、自動 Watch オプションの選択を解除できます。

  ![自動 Watch オプション](/assets/images/help/notifications-v2/automatic-watching-options.png)

「リポジトリを自動的に Watch する」が無効になっている場合、自分のリポジトリを自動的に Watch することはありません。 リポジトリページに移動して、Watch オプションを選択する必要があります。

## 個々のリポジトリの Watch 設定を行う

リポジトリごとに Watch するどうかを選択できます。 You can also choose to only be notified of {% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}certain event types such as {% data reusables.notifications-v2.custom-notification-types %} (if enabled for the repository) {% else %}new releases{% endif %}, or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
2. In the upper-right corner, select the "Watch" drop-down menu to click a watch option.
{% ifversion fpt or ghes > 3.0 or ghae-issue-4910 or ghec %}
   ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   [**Custom**] オプションを使用すると、通知をさらにカスタマイズして、参加や @メンション に加えて、リポトリで特定のイベントが発生したときにのみ通知されるようにすることができます。
{% else %}
     ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %}
{% ifversion fpt or ghes > 3.0 or ghae-issue-4910 or ghec %}
   ![リポジトリのドロップダウンメニューのカスタム Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) [Issue] を選択すると、リポジトリ内のすべての Issue (このオプションを選択する前からあった Issue を含む) の更新について通知され、サブスクライブされます。 このリポジトリのプルリクエストで @メンションされている場合は、その通知も受信し、Issue についての通知に加えて、その特定のプルリクエストの更新をサブスクライブします。
{% endif %}

## Organization のメール通知の送信先を選択する

Organization に所属している場合、Organization のアクティビティに関する通知の送信先にするメールアカウントを指定できます。 たとえば、職場の Organization に所属している場合、通知を個人のアドレスではなく、職場のアドレスに送信する方が良いでしょう。

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Default notification email] で、通知の送信先にするメールアドレスを選択します。   
   ![デフォルトの通知メールアドレスのドロップダウン](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. [**Save**] をクリックします。

### Organization ごとにメールの送信先を設定する

If you are a member of more than one organization, you can configure each one to send notifications to any of{% ifversion fpt or ghec %} your verified email addresses{% else %} the email addresses for your account{% endif %}. {% ifversion fpt or ghec %}詳しい情報については、「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Custom routing] で、一覧から Organization の名前を見つけます。   
   ![Organization とメールアドレスの一覧](/assets/images/help/notifications/notifications_org_emails.png)
4. 変更したいアドレスの隣にある [**Edit**] をクリックします。 ![Organization のメールアドレスの編集](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. 検証済みメールアドレスのうち 1 つを選択し、[**Save**] をクリックします。    
   ![Organization ごとのメールアドレス切り替え](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## {% data variables.product.prodname_dependabot_alerts %} の通知オプション

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

For more information about the notification delivery methods available to you, and advice on optimizing your notifications for {% ifversion fpt or ghes or ghec %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %} の通知オプション

{% data variables.product.prodname_actions %} で設定されている、Watch しているリポジトリのワークフロー実行更新を受信する方法を選択します。 失敗したワークフローの実行に関する通知のみを受信するように選択することもできます。

  ![Notification options for {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_mobile %} で通知設定を管理する

{% data variables.product.prodname_mobile %} をインストールすると、自動的に Web 通知が有効になります。 アプリケーション内で、次のイベントのプッシュ通知を有効にできます。
- ダイレクトメンション
- Issue またはプルリクエストへの割り当て
- プルリクエストのレビューをリクエスト
- デプロイメントの承認をリクエスト

{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュール設定することもできます。

{% data reusables.mobile.push-notifications-on-ghes %}

### {% data variables.product.prodname_ios %} で通知設定を管理する

1. 下部のメニューで、[**Profile**] をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. 通知設定を更新するには、[**Notifications**] をタップしてから、トグルを使用して、好みの種類のプッシュ通知を有効または無効にします。
4. オプションで、{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュールするには、[**Working Hours**] をタップし、[**Custom working hours**] トグルを使用して、プッシュ通知を受信するタイミングを選択します。

### {% data variables.product.prodname_android %} で通知設定を管理する

1. 下部のメニューで、[**Profile**] をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. To update your notification settings, tap **Configure Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
4. オプションで、{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュールするには、[**Working Hours**] をタップし、[**Custom working hours**] トグルを使用して、プッシュ通知を受信するタイミングを選択します。

## {% data variables.product.prodname_mobile %} を使用して個々のリポジトリの Watch 設定をする

リポジトリごとに Watch するどうかを選択できます。 また、Issue、プルリクエスト、ディスカッション (リポジトリで有効になっている場合)、{% endif %}新しいリリースなどの {% ifversion fpt or ghec %} 特定のイベントタイプのみを通知するか、個々のリポジトリを完全に無視するかを選択できます。

1. {% data variables.product.prodname_mobile %}で、リポジトリのメインページにアクセスしてください。
2. [**Watch**] をタップします。 ![{% data variables.product.prodname_mobile %} の Watch ボタン](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. 通知を受け取るアクティビティを選択するには、目的の Watch 設定をタップします。 ![{% data variables.product.prodname_mobile %} の Watch 設定ドロップダウンメニュー](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
