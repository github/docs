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
  github-ae: '*'
topics:
  - notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### 通知配信オプション

次の場所で、{% data variables.product.product_name %} のアクティビティに関する通知を受け取ることができます。

  - {% data variables.product.product_name %} Web インターフェースの通知インボックス{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
  - {% data variables.product.product_name %}{% endif %} のインボックスと同期する {% data variables.product.prodname_mobile %} の通知インボックス
  - {% data variables.product.product_name %}{{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} および {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスとも同期し、認証済みメールアドレスを使用するメールクライアント

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} 詳しい情報については、「[通知設定を選択する](#choosing-your-notification-settings)」を参照してください。
{% endif %}

{% data reusables.notifications.shared_state %}

#### 通知インボックスの利点

{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} および {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスには、次のオプションを含む、{% data variables.product.product_name %} 通知フロー用に特別に設計されたトリアージオプションが含まれています。
  - 複数の通知を一括でトリアージする。
  - 完了した通知を**完了**としてマークし、インボックスから削除する。 **完了**としてマークされたすべての通知を表示するには、`is:done` クエリを使用します。
  - 後で確認するために通知を保存する。 保存した通知にはインボックスでフラグが付けられ、無期限に保持されます。 保存した通知をすべて表示するには、`is:saved` クエリを使用します。
  - サブスクライブ解除して、インボックスから通知を削除する。
  - 通知が、通知インボックスから {% data variables.product.product_name %} で発生する Issue、プルリクエスト、または Team ディスカッションをプレビューする。
  - インボックスから `reasons` ラベルが付いた通知を受信する最新の理由の1つを確認する。
  - カスタムフィルタを作成して、必要なときにさまざまな通知にフォーカスする。
  - インボックスの通知をリポジトリまたは日付別にグループ化して、コンテキストの切り替えを減らし、概要をすばやく確認する。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
さらに、次を使用して、モバイルデバイスで通知を受信してトリアージすることができます。
{% data variables.product.prodname_mobile %}. 詳しい情報については、「[GitHub for mobile を使用して通知設定を管理する](#managing-your-notification-settings-with-github-for-mobile)」または「[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)」を参照してください。
{% endif %}

#### 通知にメールクライアントを使用する利点

メールクライアントを使用する利点の 1 つは、メールクライアントのストレージ容量に応じて、すべての通知を無期限に保持できることです。 インボックスの通知は、**保存済**としてマークしていない限り、5 か月間だけ保持されます。 **保存済**の通知は、無期限に保持されます。 インボックスの保持ポリシーの詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)」を参照してください。

メールクライアントに通知を送信すると、メールクライアントの設定に従ってインボックスをカスタマイズすることもできます。これには、カスタムラベルまたは色分けされたラベルを含めることができます。

メール通知では、受信する各種通知に柔軟に対応し、更新用にさまざまなメールアドレスを選択できます。 たとえば、リポジトリの特定の通知を検証済みの個人のメールアドレスに送信できます。 メールのカスタマイズオプションの詳細については、「[メール通知をカスタマイズする](#customizing-your-email-notifications)」を参照してください。

### 参加と Watch 対象の通知について

リポジトリの Watch 時は、そのリポジトリでのアクティビティの更新をサブスクライブしています。 同様に、特定の Team のディスカッションの Watch 時は、その Team のページですべての会話の更新をサブスクライブしていることになります。 詳しい情報については[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)を参照してください。

監視しているリポジトリを表示するには、[Watch ページ](https://github.com/watching)にアクセスします。 詳しい情報については「[GitHub上でのサブスクリプションと通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
#### 通知を設定する
{% endif %}
リポジトリの通知は、リポジトリページまたは Watch ページで設定できます。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} リポジトリ内のリリースの通知のみを受信するか、リポジトリのすべての通知を無視するかを選択できます。{% endif %}{% if currentVersion == "free-pro-team@latest" %}

#### カスタム通知について
{% data reusables.notifications-v2.custom-notifications-beta %}
リポジトリの通知をカスタマイズできます。たとえば、リポジトリ内で複数のタイプのイベント (Issue、プルリクエスト、リリース、ディスカッション) の更新が発生した場合にのみ通知を受け取るか、リポジトリのすべての通知を無視するかを選択できます。
{% endif %} For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

#### 会話への参加
会話にコメントしたり、あなたのユーザ名が @メンションされたりすると、会話に_参加_することになります。 デフォルトでは、会話に参加すると、会話に自動的にサブスクライブされます。 手動で参加した会話をサブスクライブ解除するには、Issue またはプルリクエストで [**Unsubscribe**] をクリックするか、通知インボックスの [**Unsubscribe**] オプションを使用します。

Watch 中または参加中の会話について、メールまたは {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} と {% data variables.product.prodname_mobile %}{% endif %} の通知インボックスで通知を受け取るかどうかを選択できます。

![参加および Watch 対象の通知オプション](/assets/images/help/notifications-v2/participating-and-watching-options.png)

例:
  - 通知をメールに送信しない場合は、[**Email**] をオフにして、参加と Watch 対象の通知を行います。
  - 会話に参加したときにメールで通知を受信する場合は、[Participating] の下の [**Email**] を選択します。

Web{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} およびモバイル{% endif %} の Watch 通知または参加通知を有効にしない場合、通知インボックスは更新されません。

### メール通知をカスタマイズする

メール通知を有効化すると、{% data variables.product.product_name %} はコンテンツを HTML とプレーンテキストの両方で含むマルチパートのメールとして通知を送信します。 メール通知のコンテンツには、{% data variables.product.product_name %} のオリジナルのコンテンツに含まれる Markdown、@メンション、絵文字、ハッシュリンクなどがすべて含まれます。 メールでテキストだけを見たいなら、プレーンテキストのコピーだけを表示するようにメールクライアントを設定できます。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

Gmailを使っているなら、通知メールの横にあるボタンをクリックして、通知を生成したオリジナルのIssueあるいはプルリクエストにアクセスできます。

![Gmailのボタン](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

参加中または Watch 中の会話の更新を送信するデフォルトのメールアドレスを選択します。 また、デフォルトのメールアドレスを使用するための更新を受信する {% data variables.product.product_name %} のアクティビティを指定することもできます。 たとえば、デフォルトのメールを次の場所から更新するかどうかを選択します。
  - Issue やプルリクエストへのコメント。
  - プルリクエストのレビュー.
  - プルリクエストのプッシュ。
  - Issue やプルリクエストのオープン、コメント、クローズなどの、自分自身の操作による更新。

リポジトリを所有する Organization に応じて、さまざまなメールアドレスに通知を送信することもできます。 Organization では、特定のドメインのメールアドレスを検証する必要がある場合があります。 詳しい情報については、「[Organization のメール通知の送信先を選択する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)」を参照してください。

特定のリポジトリの通知をメールアドレスに送信することもできます。 詳しい情報については、「[リポジトリへのプッシュに対するメール通知について](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)」を参照してください。

{% data reusables.notifications-v2.email-notification-caveats %}

### メール通知のフィルタリング

{% data variables.product.product_name %} が送信する各メール通知には、ヘッダ情報が含まれています。 各メールのヘッダ情報には一貫性があるので、それを使ってメールクライアントですべての {% data variables.product.product_name %} 通知あるいは特定の種類の {% data variables.product.product_name %} 通知をフィルタリングしたりフォワードしたりできます。

自分向けではない通知を受信していると思われる場合は、`X-GitHub-Recipient` および `X-GitHub-Recipient-Address` ヘッダを調べてください。 これらのヘッダは、対象の受信者を示しています。 メールの設定によっては、別のユーザ向けの通知を受け取る場合があります。

{% data variables.product.product_name %} からのメール通知には、以下のヘッダ情報が含まれています:

| ヘッダ                      | 情報                                                                                                                                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` アドレス              | このアドレスは常に{% if currentVersion == "free-pro-team@latest" %}「` notifications@github.com`」{% else %}「サイト管理者が設定した no-reply メールアドレス」{% endif %}になります。                                                                                                                  |
| `To` フィールド               | このフィールドはスレッドに直接接続します。 {% if currentVersion != "github-ae@latest" %}メールに返信すると、会話に新しいコメントが追加されます。{% endif %}
| `Cc` アドレス                | あなたが会話をサブスクライブしていれば、{% data variables.product.product_name %}はあなたに `Cc` します。 2番目の`Cc`メールアドレスは、通知の理由にマッチします。 これらの通知理由に対するサフィックスは{% data variables.notifications.cc_address %}です。 通知の理由には以下のようなものがあります。 <ul><li>`assign`: 受信者はIssueあるいはプルリクエストに割り当てられました。</li><li>`author`: 受信者はIssueあるいはプルリクエストの作者です。</li>{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}<li>`ci_activity`: A {% data variables.product.prodname_actions %} workflow run that you triggered was completed.</li>{% endif %}<li>`comment`: 受信者はIssueあるいはプルリクエストにコメントしました。</li><li>`manual`: 手作業でサブスクライブした Issue あるいはプルリクエストが更新されました。</li><li>`mention`: 受信者は Issue あるいはプルリクエストにメンションされました。</li><li>`push`: 受信者がサブスクライブしているプルリクエストに誰かがコミットしました。</li><li>`review_requested`: 受信者あるいは受信者がメンバーになっている Team にプルリクエストのレビューがリクエストされました。</li>{% if currentVersion != "github-ae@latest" %}<li>`security_alert`: {% data variables.product.prodname_dotcom %} は、受信者がセキュリティのアラートを受け取るリポジトリに脆弱性を検出しました。</li>{% endif %}<li>`state_change`: 受信者がサブスクライブしている Issue あるいはプルリクエストがクローズもしくはオープンされました。</li><li>`subscribed`: 受信者が Watch しているリポジトリに更新がありました。</li><li>`team_mention`: 受信者が属している Team が Issue あるいはプルリクエストでメンションされました。</li><li>`your_activity`: 受信者が Issue あるいはプルリクエストをオープン、コメントあるいはクローズしました。</li></ul>                                    |
| `mailing list` フィールド     | このフィールドはリポジトリの名前とそのオーナーを特定します。 このアドレスのフォーマットは常に`<repository name>.<repository owner>.{% data variables.command_line.backticks %}`となります。 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
| `X-GitHub-Severity`フィールド | {% data reusables.repositories.security-alerts-x-github-severity %} 考えられる重大度レベルは次のとおりです。<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。 
{% endif %}

### 通知設定を選択する

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 通知設定ページで、次の場合の通知の受信方法を選択します。
    - Watch しているリポジトリや Team ディスカッション、または参加している会話に更新がある場合。 詳しい情報については、「[参加と Watch 対象の通知について](#about-participating-and-watching-notifications)」を参照してください。
    - 新しいリポジトリにアクセスするか、新しい Team に参加した場合。 詳しい情報については、「[自動 Watch](#automatic-watching)」を参照してください。"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - リポジトリに新しい{% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %}セキュリティアラート{% endif %}があります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} 通知オプション](#dependabot-alerts-notification-options)」を参照してください。 {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - リポジトリに新しいセキュリティアラートがある場合。 There are new security alerts in your repository. {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - {% data variables.product.prodname_actions %} で設定されたリポジトリにワークフロー実行の更新がある場合。 詳しい情報については、「[{% data variables.product.prodname_actions %} 通知オプション](#github-actions-notification-options)」を参照してください。{% endif %}

### 自動 Watch

デフォルトでは、新しいリポジトリにアクセスすると、そのリポジトリの Watch が自動的に開始されます。 新しいチームに参加するたびに、更新が自動的にサブスクライブされ、その Team が@メンションされたときに通知を受け取ります。 自動でサブスクライブしない場合は、自動 Watch オプションの選択を解除できます。

  ![自動 Watch オプション](/assets/images/help/notifications-v2/automatic-watching-options.png)

「リポジトリを自動的に Watch する」が無効になっている場合、自分のリポジトリを自動的に Watch することはありません。 リポジトリページに移動して、Watch オプションを選択する必要があります。

### 個々のリポジトリの Watch 設定を行う

リポジトリごとに Watch するどうかを選択できます。 また、Issue、プルリクエスト、ディスカッション (リポジトリで有効になっている場合)、{% endif %}新しいリリースなどの {% if currentVersion == "free-pro-team@latest" %} 特定のイベントタイプのみを通知するか、個々のリポジトリを完全に無視するかを選択できます。

{% data reusables.repositories.navigate-to-repo %}
2. 右上隅の [Watch] ドロップダウンメニューをクリックして、Watch オプションを選択します。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
   ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom.png)
{% data reusables.notifications-v2.custom-notifications-beta %}
[**Custom**] オプションを使用すると、通知をさらにカスタマイズして、参加や @メンション に加えて、リポトリで特定のイベントが発生したときにのみ通知されるようにすることができます。

   ![リポジトリのドロップダウンメニューのカスタム Watch オプション](/assets/images/help/notifications-v2/watch-repository-options-custom2.png)

[Issue] を選択すると、リポジトリ内のすべての Issue (このオプションを選択する前からあった Issue を含む) の更新について通知され、サブスクライブされます。 このリポジトリのプルリクエストで @メンションされている場合は、その通知も受信し、Issue についての通知に加えて、その特定のプルリクエストの更新をサブスクライブします。

{% endif %}

### Organization のメール通知の送信先を選択する

Organization に所属している場合、Organization のアクティビティに関する通知の送信先にするメールアカウントを指定できます。 たとえば、職場の Organization に所属している場合、通知を個人のアドレスではなく、職場のアドレスに送信する方が良いでしょう。

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Default notification email] で、通知の送信先にするメールアドレスを選択します。   
   ![デフォルトの通知メールアドレスのドロップダウン](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. [**Save**] をクリックします。

#### Organization ごとにメールの送信先を設定する

複数の Organization のメンバーである場合は、検証済みのメールアドレス {% else %} {% data variables.product.product_name %}アカウント{% endif %}に追加したメールアドレスのいずれかに通知を送信するように各 Organization を設定できます。 {% if currentVersion == "free-pro-team@latest" %} 詳しい情報については、「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. [Custom routing] で、一覧から Organization の名前を見つけます。   
   ![Organization とメールアドレスの一覧](/assets/images/help/notifications/notifications_org_emails.png)
4. 変更したいアドレスの隣にある [**Edit**] をクリックします。 ![Organization のメールアドレスの編集](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. 検証済みメールアドレスのうち 1 つを選択し、[**Save**] をクリックします。    
   ![Organization ごとのメールアドレス切り替え](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion != "github-ae@latest" %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot_alerts %} の通知オプション
{% else %}
### Security alert options
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}
利用可能な通知の配信方法の詳細、および次の通知を最適化するためのアドバイスについては

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %} セキュリティアラート{% endif %}からの通知を減らす方法については、「[脆弱性のある依存関係の通知を設定する](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_actions %} の通知オプション

{% data variables.product.prodname_actions %} で設定されている、Watch しているリポジトリのワークフロー実行更新を受信する方法を選択します。 失敗したワークフローの実行に関する通知のみを受信するように選択することもできます。

  ![{% data variables.product.prodname_dependabot_short %} アラートオプション](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
### {% data variables.product.prodname_mobile %} で通知設定を管理する

{% data variables.product.prodname_mobile %} をインストールすると、自動的に Web 通知が有効になります。 アプリケーション内で、次のイベントのプッシュ通知を有効にできます。
- ダイレクトメンション
- Issue またはプルリクエストへの割り当て
- プルリクエストのレビューをリクエスト
- デプロイメントの承認をリクエスト

{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュール設定することもできます。

{% data reusables.mobile.push-notifications-on-ghes %}

#### {% data variables.product.prodname_ios %} で通知設定を管理する

1. 下部のメニューで、[**Profile**] をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. 通知設定を更新するには、[**Notifications**] をタップしてから、トグルを使用して、好みの種類のプッシュ通知を有効または無効にします。
4. オプションで、{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュールするには、[**Working Hours**] をタップし、[**Custom working hours**] トグルを使用して、プッシュ通知を受信するタイミングを選択します。

#### {% data variables.product.prodname_android %} で通知設定を管理する

1. 下部のメニューで、[**Profile**] をタップします。
2. 設定を表示するには、{% octicon "gear" aria-label="The Gear icon" %} をタップします。
3. To update your notification settings, tap **Configure Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
4. オプションで、{% data variables.product.prodname_mobile %} がモバイルデバイスにプッシュ通知を送信するタイミングをスケジュールするには、[**Working Hours**] をタップし、[**Custom working hours**] トグルを使用して、プッシュ通知を受信するタイミングを選択します。

### {% data variables.product.prodname_mobile %} を使用して個々のリポジトリの Watch 設定をする

リポジトリごとに Watch するどうかを選択できます。 また、Issue、プルリクエスト、ディスカッション (リポジトリで有効になっている場合)、{% endif %}新しいリリースなどの {% if currentVersion == "free-pro-team@latest" %} 特定のイベントタイプのみを通知するか、個々のリポジトリを完全に無視するかを選択できます。

1. {% data variables.product.prodname_mobile %}で、リポジトリのメインページにアクセスしてください。
2. [**Watch**] をタップします。 ![{% data variables.product.prodname_mobile %} の Watch ボタン](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. 通知を受け取るアクティビティを選択するには、目的の Watch 設定をタップします。 ![{% data variables.product.prodname_mobile %} の Watch 設定ドロップダウンメニュー](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
