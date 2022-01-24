---
title: 管理订阅
intro: 为帮助您有效地管理通知，提供了多种取消订阅的方法。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: 管理您的订阅
---

为帮助您了解您的订阅和决定是否取消订阅，请参阅“[查看您的订阅](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)”。

{% note %}

**注：**您可以选择忽略仓库，而不取消订阅。 如果忽略仓库，将不会收到任何通知。 我们不建议忽略仓库，因为这样您被@提及时将不会收到通知。 {% ifversion fpt or ghec %}如果您遇到滥用并且想忽略某个仓库，请联系 {% data variables.contact.contact_support %} 获取帮助。 {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## 选择如何取消订阅

To unwatch (or unsubscribe from) repositories quickly, navigate to [github.com/watching](https://github.com/watching) to see all the repositories you're following. For more information, see "[Unwatching repositories](#unwatching-repositories)."

要同时取消订阅多个通知，您可以使用收件箱或订阅页面上取消订阅。 相比“Watched repositories（已关注仓库）”页面，这两个选项可提供有关您的订阅的更多上下文。

### 从收件箱中取消订阅的优点

在收件箱中取消订阅通知时，您还有其他一些分类选项，并且可以按自定义过滤器和讨论类型来过滤通知。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。

### 从订阅页面取消订阅的优点

在订阅页面上取消订阅通知时，您可以查看更多已订阅的通知，并且可以按“最多最近订阅”或“最少最近订阅”对它们进行排序。

订阅页面显示您当前已订阅的所有通知，包括在收件箱中标记为 **Done（完成）**的通知。

您只能按仓库和接收通知的原因过滤订阅。

## 在收件箱中取消订阅通知

当您取消订阅收件箱中的通知时，它们将自动从您的收件箱中消失。

{% data reusables.notifications.access_notifications %}
1. 从通知收件箱中选择您想要取消订阅的通知。
2. 单击 **Unsubscribe（取消订阅）**。 ![主收件箱中的取消订阅选项](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## 从订阅页面取消订阅通知

{% data reusables.notifications.access_notifications %}
1. 在左侧边栏中的仓库列表下，使用“Manage notifications（管理通知）”下拉按钮单击 **Subscriptions（订阅）**。 ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 选择要取消订阅的通知。 在右上角单击 **Unsubscribe（取消订阅）**。 ![订阅页面](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Unwatching repositories

当您取消关注某个仓库时，您将取消订阅该仓库的未来更新，除非您参与对话或被 @提及。

{% data reusables.notifications.access_notifications %}
1. 在左侧边栏中的仓库列表下，使用“Manage notifications（管理通知）”下拉按钮单击 **Watched repositories（已关注的仓库）**。

  ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 在关注的仓库页面上，评估您关注的仓库后，选择是否：
   {%- ifversion fpt or ghes > 3.0 or ghae or ghec %}
   - 取消关注仓库
   - 忽略某仓库的所有通知
   - If enabled, customize the types of event you receive notifications for ({% data reusables.notifications-v2.custom-notification-types %})
   {%- else %}
   - 取消关注仓库
   - 只关注某仓库的发行版
   - 忽略某仓库的所有通知
   {%- endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Optionally, to unsubscribe from all repositories owned by a given user or organization, select the **Unwatch all** dropdown and click the organization whose repositories you'd like to unsubscribe from. The button to unwatch all repositories is only available if you are watching all activity or custom notifications on over 10 repositories.

   ![Screenshot of the Unwatch All button.](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Click **Unwatch** to confirm that you want to unwatch the repositories owned by the selected user or organization, or click **Cancel** to cancel.

   ![Screenshot of the unwatch all confirmation dialogue.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
