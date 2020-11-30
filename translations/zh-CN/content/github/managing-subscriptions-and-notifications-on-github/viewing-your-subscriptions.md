---
title: 查看订阅
intro: '为了解通知来自何处以及通知量，建议定期查看订阅和关注的仓库。'
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
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

接收 {% data variables.product.product_name %} 上长期活动的订阅通知。 有很多原因可能导致您订阅对话。 更多信息请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)”。

我们建议将审核订阅和取消订阅作为健康通知工作流程的一部分。 有关取消订阅选项的更多信息，请参阅“[管理订阅](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)”。

### 诊断收到太多通知的原因

当收件箱中要管理的通知过多时，请考虑您是否订阅过多，或者如何更改通知设置以减少订阅数量和接收的通知类型。 例如，您可以考虑禁用在加入团队或仓库时自动关注所有仓库和所有团队讨论的设置。

![自动关注](/assets/images/help/notifications-v2/automatic-watching-example.png)

更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)”。

To see an overview of your repository subscriptions, see "[Reviewing repositories that you're watching](#reviewing-repositories-that-youre-watching)." Many people forget about repositories that they've chosen to watch in the past. From the "Watched repositories" page you can quickly unwatch repositories. For more information on ways to unsubscribe, see "[Managing subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip:** You can select the types of event to be notified of by using the **Custom** option of the **Watch/Unwatch** dropdown list in your [watching page](https://github.com/watching) or on any repository page on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

{% endtip %}
{% endif %}

许多人忘记了他们过去选择关注的仓库。 从“Watched repositories（已关注仓库）”页面，您可以快速取消关注仓库。 For more information on ways to unsubscribe, see "[Unwatch recommendations](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" on {% data variables.product.prodname_blog %} and "[Managing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)." You can also create a triage worflow to help with the notifications you receive. For guidance on triage workflows, see "[Customizing a workflow for triaging your notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)."

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
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![已关注的通知页面](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![已关注的通知页面](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** Instead of watching a repository, consider only receiving notifications {% if currentVersion == "free-pro-team@latest" %}when there are updates to issues, pull requests, releases or discussions (if enabled for the repository), or any combination of these options,{% else %}for releases in a repository,{% endif %} or completely unwatching a repository.

  取消关注仓库后，当您被@提及或参与帖子时仍然会收到通知。 When you configure to receive notifications for certain event types, you're only notified when there are updates to these event types in the repository, you're participating in a thread, or you or a team you're on is @mentioned.

  {% endtip %}

### 配置单个仓库的关注设置

您可以选择关注还是取消关注单个仓库。 You can also choose to only be notified of {% if currentVersion == "free-pro-team@latest" %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
2. 在右上角，单击“Watch（关注）”下拉菜单选择关注选项。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![仓库下拉菜单中的关注选项](/assets/images/help/notifications-v2/watch-repository-options.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
   ![仓库下拉菜单中的关注选项](/assets/images/help/notifications-v2/watch-repository-options-custom.png)
{% data reusables.notifications-v2.custom-notifications-beta %}
The **Custom** option allows you to further customize notifications so that you're only notified when specific events happen in the repository, in addition to participating and @mentions.

   ![Custom watch options in a drop-down menu for a repository](/assets/images/help/notifications-v2/watch-repository-options-custom2.png)

If you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

{% endif %}
