---
title: サブスクリプションを管理する
intro: '通知を効率的に管理するにあたって、サブスクライブ解除するにはいくつかの方法があります。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

To help you understand your subscriptions and decide whether to unsubscribe, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

{% note %}

**Note:** Instead of unsubscribing, you have the option to ignore a repository. リポジトリを無視した場合、通知は届きません。 あなたが @メンションされても通知されなくなるため、リポジトリを無視することはおすすめしません。 {% if currentVersion == "free-pro-team@latest" %}If you're experiencing abuse and want to ignore a repository, please [contact support](/contact) so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### サブスクライブ解除の方法を選択する

To unwatch (or unsubscribe from) repositories quickly, go to the "Watched repositories" page, where you can see all repositories you're watching. For more information, see "[Unwatch a repository](#unwatch-a-repository)."

To unsubscribe from multiple notifications at the same time, you can unsubscribe using your inbox or on the subscriptions page. Both of these options offer more context about your subscriptions than the "Watched repositories" page.

#### インボックスからサブスクライブ解除する利点

When you unsubscribe from notifications in your inbox, you have several other triaging options and can filter your notifications by custom filters and discussion types. 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。

#### サブスクリプションページからサブスクライブ解除する利点

When you unsubscribe from notifications on the subscriptions page, you can see more of the notifications you're subscribed to and sort them by "Most recently subscribed" or "Least recently subscribed".

The subscriptions page shows you all of the notifications that you're currently subscribed to, including notifications that you have marked as **Done** in your inbox.

You can only filter your subscriptions by repository and the reason you're receiving the notification.

### インボックスの通知からサブスクライブ解除する

When you unsubscribe from notifications in your inbox, they will automatically disappear from your inbox.

{% data reusables.notifications.access_notifications %}
1. 通知インボックスから、サブスクライブ解除する通知を選択します。
2. Use the **selected** {% octicon "triangle-down" aria-label="The down triangle icon" %} drop-down to click **Unsubscribe.** ![メインインボックスからの [Unsubcribe] オプション](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### サブスクリプションページで通知をサブスクライブ解除する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Subscriptions**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. サブスクライブ解除する通知を選択します。 右上にある [**Unsubscribe**] をクリックします。 ![サブスクリプションページ](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### リポジトリの Watch 解除

When you unwatch a repository, you unsubscribe from future updates from that repository unless you participate in a conversation or are @mentioned.

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Watched repositories**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Watch しているリポジトリのページで、Watchしているリポジトリを評価した後、次のいずれかを選択します。
    - リポジトリの Watch 解除
    - リポジトリのリリースのみを Watch
    - リポジトリのすべての通知を無視
