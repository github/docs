---
title: 管理订阅
intro: 为帮助您有效地管理通知，提供了多种取消订阅的方法。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

To help you understand your subscriptions and decide whether to unsubscribe, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

{% note %}

**Note:** Instead of unsubscribing, you have the option to ignore a repository. 如果忽略仓库，将不会收到任何通知。 我们不建议忽略仓库，因为这样您被@提及时将不会收到通知。 {% if currentVersion == "free-pro-team@latest" %}If you're experiencing abuse and want to ignore a repository, please [contact support](/contact) so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### 选择如何取消订阅

To unwatch (or unsubscribe from) repositories quickly, go to the "Watched repositories" page, where you can see all repositories you're watching. For more information, see "[Unwatch a repository](#unwatch-a-repository)."

To unsubscribe from multiple notifications at the same time, you can unsubscribe using your inbox or on the subscriptions page. Both of these options offer more context about your subscriptions than the "Watched repositories" page.

#### 从收件箱中取消订阅的优点

When you unsubscribe from notifications in your inbox, you have several other triaging options and can filter your notifications by custom filters and discussion types. 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。

#### 从订阅页面取消订阅的优点

When you unsubscribe from notifications on the subscriptions page, you can see more of the notifications you're subscribed to and sort them by "Most recently subscribed" or "Least recently subscribed".

The subscriptions page shows you all of the notifications that you're currently subscribed to, including notifications that you have marked as **Done** in your inbox.

You can only filter your subscriptions by repository and the reason you're receiving the notification.

### 在收件箱中取消订阅通知

When you unsubscribe from notifications in your inbox, they will automatically disappear from your inbox.

{% data reusables.notifications.access_notifications %}
1. 从通知收件箱中选择您想要取消订阅的通知。
2. 使用 **selected（已选择）** {% octicon "triangle-down" aria-label="The down triangle icon" %} 下拉列表单击 **Unsubscribe（取消订阅）**。 ![主收件箱中的取消订阅选项](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### 从订阅页面取消订阅通知

{% data reusables.notifications.access_notifications %}
1. 在左侧边栏中的仓库列表下，使用“Manage notifications（管理通知）”下拉按钮单击 **Subscriptions（订阅）**。 ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 选择要取消订阅的通知。 在右上角单击 **Unsubscribe（取消订阅）**。 ![订阅页面](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### 取消关注仓库

When you unwatch a repository, you unsubscribe from future updates from that repository unless you participate in a conversation or are @mentioned.

{% data reusables.notifications.access_notifications %}
1. 在左侧边栏中的仓库列表下，使用“Manage notifications（管理通知）”下拉按钮单击 **Watched repositories（已关注的仓库）**。 ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. 在关注的仓库页面上，评估您关注的仓库后，选择是否：
    - 取消关注仓库
    - 只关注某仓库的发行版
    - 忽略某仓库的所有通知
