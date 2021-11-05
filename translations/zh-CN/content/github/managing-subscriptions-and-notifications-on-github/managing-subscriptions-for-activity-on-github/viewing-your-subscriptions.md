---
title: 查看订阅
intro: 为了解通知来自何处以及通知量，建议定期查看订阅和关注的仓库。
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

接收 {% data variables.product.product_name %} 上长期活动的订阅通知。 有很多原因可能导致您订阅对话。 更多信息请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)”。

我们建议将审核订阅和取消订阅作为健康通知工作流程的一部分。 有关取消订阅选项的更多信息，请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

### 诊断收到太多通知的原因

当收件箱中要管理的通知过多时，请考虑您是否订阅过多，或者如何更改通知设置以减少订阅数量和接收的通知类型。 例如，您可以考虑禁用在加入团队或仓库时自动关注所有仓库和所有团队讨论的设置。

![自动关注](/assets/images/help/notifications-v2/automatic-watching-example.png)

更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)”。

To see an overview of your repository subscriptions, see "[Reviewing repositories that you're watching](#reviewing-repositories-that-youre-watching)." Many people forget about repositories that they've chosen to watch in the past. From the "Watched repositories" page you can quickly unwatch repositories. For more information on ways to unsubscribe, see "[Managing subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."
{% if currentVersion == "free-pro-team@latest" or  currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
{% tip %}

**提示：**您可以在[关注页面](https://github.com/watching)或 {% data variables.product.product_name %} 上的任何仓库页面，使用 **Watch/Unwatch（关注/取消关注）**下拉列表中的 **Custom（自定义）**选项选择要通知的事件类型。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”。

{% endtip %}
{% endif %}

许多人忘记了他们过去选择关注的仓库。 从“Watched repositories（已关注仓库）”页面，您可以快速取消关注仓库。 有关取消订阅的方式的更多信息，请参阅 {% data variables.product.prodname_blog %} 上的“[取消关注建议](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)”和“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。 您也可以创建分类工作流程来帮助整理收到的通知。 有关分类工作流程的指导，请参阅“[自定义对通知分类的工作流程](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)”。

### 查看所有订阅

{% data reusables.notifications.access_notifications %}
1. 在左侧边栏中您接收其通知的仓库列表下，使用“Manage notifications（管理通知）”下拉按钮单击 **Subscriptions（订阅）**。 ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. 使用过滤器和排序来缩小订阅列表，并开始取消订阅您不想再接收其通知的对话。

  ![订阅页面](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**提示：**
- 要查看您可能忘记了的订阅，请按“least recently subscribed（最近最少订阅）”进行排序。

- 要查看您仍然可以接收其通知的仓库列表，请查看“filter by repository（按仓库过滤）”下拉菜单中的仓库列表。

{% endtip %}

### 查看您目前关注的仓库

1. 在左侧边栏中的仓库列表下，使用“Manage notifications（管理通知）”下拉菜单单击 **Watched repositories（已关注的仓库）**。 ![管理通知下拉菜单选项](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. 评估您正在关注的仓库，确定它们更新是否仍然相关和有用。 关注某仓库后，您将收到该仓库所有对话的通知。
{% if currentVersion == "github-ae@latest" or currentVersion ver_lt "enterprise-server@3.1" %}
  ![已关注的通知页面](/assets/images/help/notifications-v2/watched-notifications.png)
{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
  ![已关注的通知页面](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **提示：**不关注仓库，而是考虑仅{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}当 {% data reusables.notifications-v2.custom-notification-types %}（如果已对仓库启用）或这些选项的任何组合有更新、{% else %}仓库中有发布{% endif %}或完全取消关注仓库时才接收通知。

  取消关注仓库后，当您被@提及或参与帖子时仍然会收到通知。 当您配置接收某些事件类型的通知时，仅在仓库中有这些事件类型的更新、您参与了线程或者您或您所在团队被 @提及时才收到通知。

  {% endtip %}
