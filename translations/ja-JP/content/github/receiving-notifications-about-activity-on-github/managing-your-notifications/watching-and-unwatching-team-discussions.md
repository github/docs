---
title: Team ディスカッションの Watch と Watch 解除
intro: Team ディスカッションの通知を受け取るためにチームを Watch できます。 Team ディスカッションに関する通知を受け取りたくない場合は、Team の Watch を解除できます。
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions
---
デフォルトでは、自分がメンバーになっている Team ディスカッションの通知が自動的に送信されます。 既存の Team ディスカッションについて特定の通知を受け取りたくない場合は、その Team を Watch 解除する必要があります。 特定の Team ディスカッションの投稿をサブスクライブ解除またはサブスクライブすることもできます。 詳細は「[Team ディスカッションについて](/articles/about-team-discussions)」および「[会話のサブスクライブとサブスクライブ解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)」を参照してください。

新しい Team のメンバーになったときに Team ディスカッションを自動的には Watch したくない場合は、自動 Watch 設定を更新できます。

### 参加する新しい Team のすべての Team ディスカッションを Watch する

参加する新しい Team の Team ディスカッションをすべて自動的に Watch するには、自動 Watch 対象の通知設定を設定します。

{% note %}

**メモ:** デフォルトでは、この設定は [**Automatically watching teams**] に設定されています。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %}[**Automatically watch teams**] を選択します。
![Team を自動的に Watch するためのチェックボックス](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### 単一Team ディスカッションを Watch する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %}[**Watch**] をクリックして、通知オプションを開きます。 次に、[**Watching**] をクリックします。
![特定の Team のドロップダウンメニューの Watch オプション](/assets/images/help/notifications/specific-team-watch-options.png)

### 参加するすべての新しい Team の Team ディスカッションを Watch 解除する

Team に参加するときに Team ディスカッション通知を自動的に受信したくない場合は、通知設定を変更して、参加するすべての新しい Team を Watch 解除できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %}[**Automatically watch teams**] を選択解除します。
![デフォルトで選択されているチームの自動 Watch 設定](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### 単一 Team ディスカッションを Watch 解除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %}[**Unwatch**] をクリックして、通知オプションを開きます。 次に、[**Not watching**] をクリックします。
![特定の Team のドロップダウンメニューの Watch オプション](/assets/images/help/notifications/specific-team-unwatch.png)

{% note %}

**メモ:** Team の通知を無視することもできます。 Team を無視した場合、通知は届きません。 あなたが @メンションされても通知されなくなるため、Team を無視することはおすすめしません。

{% endnote %}

### 参考リンク

- 「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」
- "[Team ディスカッションについて](/articles/about-team-discussions)"
- [Team について](/articles/about-teams)
