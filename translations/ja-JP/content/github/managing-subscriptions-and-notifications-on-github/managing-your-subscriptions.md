---
title: サブスクリプションを管理する
intro: '通知を効率的に管理するにあたって、サブスクライブ解除するにはいくつかの方法があります。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

サブスクリプションを理解し、サブスクライブ解除するかどうかを決めるため、「[サブスクリプションを表示する](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)」を参照してください。

{% note %}

**注釈:** サブスクライブ解除する代わりに、リポジトリを無視するオプションがあります。 リポジトリを無視した場合、通知は届きません。 あなたが @メンションされても通知されなくなるため、リポジトリを無視することはおすすめしません。 {% if currentVersion == "free-pro-team@latest" %}不正使用の発生により、リポジトリを無視する場合は、{% data variables.contact.contact_support %} 問い合わせてサポートを受けてください。 {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### サブスクライブ解除の方法を選択する

リポジトリの Watch をすばやく Watch 解除 (またはサブスクライブ解除) するには、[Watched repositories] ページに移動します。このページでは、Watch しているすべてのリポジトリを確認できます。 詳しい情報については、「[リポジトリを Watch 解除する](#unwatch-a-repository)」を参照してください。

複数の通知のサブスクライブ解除を同時に行うには、インボックスまたはプランページを使用します。 これらのオプションはどちらも、[Watched repositories] ページよりもサブスクリプションに関するより多くのコンテキストを提供しています。

#### インボックスからサブスクライブ解除する利点

インボックスの通知をサブスクライブ解除する場合、他にも複数のトリアージオプションがあり、カスタムフィルタとディスカッションタイプで通知をフィルタ処理できます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。

#### サブスクリプションページからサブスクライブ解除する利点

プランページで通知のサブスクライブを解除すると、サブスクライブしている通知がさらに表示され、[Most recently subscribed] または [Least recently subscribed] で並べ替えることができます。

プランページには、インボックスで [**Done**] としてマークした通知を含む、現在サブスクライブしているすべての通知が表示されます。

サブスクリプションは、リポジトリと通知を受信する理由でのみフィルタできます。

### インボックスの通知からサブスクライブ解除する

インボックスの通知をサブスクライブ解除すると、通知は自動的にインボックスから削除されます。

{% data reusables.notifications.access_notifications %}
1. 通知インボックスから、サブスクライブ解除する通知を選択します。
2. **選択した** {% octicon "triangle-down" aria-label="The down triangle icon" %} ドロップダウンを使用して、[**Unsubscribe**] をクリックします。 ![メインインボックスの [Unsubcribe] オプション](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### サブスクリプションページで通知をサブスクライブ解除する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Subscriptions**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. サブスクライブ解除する通知を選択します。 右上にある [**Unsubscribe**] をクリックします。 ![サブスクリプションページ](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### リポジトリの Watch 解除

リポジトリを Watch 解除すると、会話に参加したり@メンションされたりしない限り、そのリポジトリからの今後の更新をサブスクライブ解除します。

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Watched repositories**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Watch しているリポジトリのページで、Watchしているリポジトリを評価した後、次のいずれかを選択します。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
    - リポジトリの Watch 解除
    - リポジトリのリリースのみを Watch
    - リポジトリのすべての通知を無視
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
    - リポジトリの Watch 解除
    - リポジトリのすべての通知を無視
    - 通知を受け取るイベントの種類をカスタマイズ (Issue、プルリクエスト、リリース、ディスカッションが有効の場合)
{% endif %}
