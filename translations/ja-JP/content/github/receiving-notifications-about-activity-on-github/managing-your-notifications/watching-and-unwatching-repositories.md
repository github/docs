---
title: リポジトリの Watch と Watch 解除
intro: リポジトリを Watch して、新しく作成されたプルリクエストおよび Issue 関する通知を受け取ることができます。 特定のリポジトリの通知を受け取る必要がなくなった場合は、そのリポジトリの Watch を解除できます。
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories
---
{% data reusables.notifications.auto-watch %}詳細は「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」を参照してください。

リポジトリ内のリリースを Watch および Watch 解除することもできます。 詳細は「[リポジトリのリリースの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)」を参照してください。

### プッシュアクセス権を持っているすべてのリポジトリを Watch する

{% data reusables.notifications.access_watching %}
2. [**Watching**] をクリックします。 ![Watch しているリポジトリのリスト](/assets/images/help/notifications/notifications-watching-tab.png)
3. ページの右側にある [**Automatically watch**] を選択します。 ![Watch するリポジトリを自動的に設定するためのチェックボックス](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### 単一リポジトリを Watch する

{% data reusables.repositories.navigate-to-repo %}
2. 右上隅にある [Watch] ドロップダウンメニューから、[**Watching**] をクリックします。 ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications/watch-repository.png)

### プッシュアクセス権を持っているすべてのリポジトリを Watch 解除する

{% data reusables.notifications.access_watching %}
2. [**Watching**] をクリックします。 ![Watch しているリポジトリのリスト](/assets/images/help/notifications/notifications-watching-tab.png)
3. ページの右側にある [**Automatically watch**] の選択を解除します。 ![Watch するリポジトリを自動的に設定するためのチェックボックス](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### 単一リポジトリの Watch を解除する

{% data reusables.repositories.navigate-to-repo %}
2. 右上隅にある [Watch] ドロップダウンメニューから、[**Unwatch**] をクリックします。 ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**メモ:** リポジトリを無視することもできます。 リポジトリを無視した場合、通知は届きません。 あなたが @メンションされても通知されなくなるため、リポジトリを無視することはおすすめしません。 {% if currentVersion == "free-pro-team@latest" %}If you experiencing abuse and want to ignore a repository, please contact {% data variables.contact.contact_support %} so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### 参考リンク

- 「[通知のサブスクライブとサブスクライブ解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)」
- 「[Watch しているリポジトリのリスト](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)」
