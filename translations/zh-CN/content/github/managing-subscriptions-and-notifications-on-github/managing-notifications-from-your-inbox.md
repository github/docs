---
title: 从收件箱管理通知
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### 关于收件箱

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”。
{% endif %}

要访问通知收件箱，请在任意页面的右上角单击 {% octicon "bell" aria-label="The notifications bell" %}。

  ![表示任何未读消息的通知](/assets/images/help/notifications/notifications_general_existence_indicator.png)

收件箱显示您尚未取消订阅或标记为**完成**的所有通知。您可以使用过滤器自定义收件箱，使之最适合您的工作流程，查看所有通知或只查看未读通知，对通知分组通知以获取快速概览。

  ![收件箱视图](/assets/images/help/notifications-v2/inbox-view.png)

默认情况下，您的收件箱将显示已读和未读通知。 如果只想查看未读通知，请单击 **Unread（未读）**或使用 `is:unread` 查询。

  ![未读收件箱视图](/assets/images/help/notifications-v2/unread-inbox-view.png)

### 分类选项

有多个选项可对收件箱中的通知进行分类。

| 分类选项 | 描述                                                                                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 保存   | 保存通知供以后查看。 要保存通知，在通知右侧单击 {% octicon "bookmark" aria-label="The bookmark icon" %}。 <br> <br> 保存的通知无限期保存，可单击侧边栏中的 **Saved（已保存）** 或通过 `is:saved` 查询查看。 如果您保存的通知超过5个月并且变成未保存，通知将在一天内从收件箱消失。 |
| 已完成  | 将通知标记为已完成，并从收件箱中删除通知。 您可以单击侧边栏中的 **Done（完成）**或通过 `is:done` 查询来看到所有已完成的通知。 标记为 **Done（完成）**的通知将保存 5 个月。                                                                                              |
| 取消订阅 | 自动从收件箱中删除通知并退订对话，仅当您被@提及、您所在的团队被@提及或者请求您进行审查时才会收到通知。                                                                                                                                                |
| 读取   | 将通知标记为已读。 要在收件箱中只查看已读通知，可使用 `is:read` 查询。 此查询不包含标记为 **Done（完成）**的通知。                                                                                                                                |
| 未读   | 将通知标记为未读。 要在收件箱中只查看未读通知，可使用 `is:unread` 查询。                                                                                                                                                         |

要查看可用的键盘快捷键，请参阅“[键盘快捷键](/github/getting-started-with-github/keyboard-shortcuts#notifications)”。

在选择分类选项之前，您可以先预览通知的详细信息并进行调查。 更多信息请参阅“[对单个通知进行分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)”。

### 同时对多种通知分类

要一次对多种通知分类，请选择相关通知并使用 {% octicon "kebab-horizontal" aria-label="The edit icon" %} 下拉列表以选择分类选项。

![带有分类选项和选定通知的下拉菜单](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### 默认通知过滤器

默认情况下，收件箱中有针对您被分配任务、参与帖子、请求审查拉取请求的过滤器，或者针对您的用户名被直接 @提及或您所属团队被 @提及的过滤器。

  ![默认自定义过滤器](/assets/images/help/notifications-v2/default-filters.png)

### 使用自定义过滤器自定义收件箱

您可以添加最多 15 个自定义过滤器。

{% data reusables.notifications.access_notifications %}
2. 若要打开过滤器设置，在左侧边栏的“Filters（过滤器）”旁边，单击 {% octicon "gear" aria-label="The Gear icon" %}。

  {% tip %}

  **提示：**您可以通过在收件箱视图中创建查询并单击**Save（保存）**快速预览过滤器收件箱结果， 这将打开自定义过滤器设置。

  {% endtip %}

3. 为过滤器和过滤器查询添加名称。 例如，如果只想看特定仓库的通知，可以使用查询 `repo:octocat/open-source-project-name reason:participating` 创建一个过滤器。 您也可以用原生表情键盘添加表情符号。 有关受支持的搜索查询的列表，请参阅“[支持的自定义过滤器查询](#supported-queries-for-custom-filters)”。

  ![自定义过滤器示例](/assets/images/help/notifications-v2/custom-filter-example.png)

4. 单击 **Create（创建）**。

### 自定义过滤器限制

自定义过滤器当前不支持：
  - 收件箱中的全文搜索，包括搜索拉取请求或议题标题。
  - 区分 `is:issue`、`is:pr` 及 `is:pull-request` 查询过滤器。 这些查询将返回议题和拉取请求。
  - 创建超过 15 个自定义过滤器。
  - 更改默认过滤器或其顺序。

### 支持的自定义过滤器查询

您可以使用三种类型的过滤器：
  - 使用 `repo:` 按仓库过滤
  - 使用 `is:` 按讨论类型过滤
  - 使用 `reason:` 按通知原因过滤

要添加 `repo:` 过滤器，您必须在查询中包含仓库的所有者。 例如，`repo:atom/atom` 表示 Atom 组织拥有的 Atom 仓库。

#### 支持的 `reason:` 查询

要根据收到更新的原因过滤通知，您可以使用 `reason:` 查询。 例如，要查看当您（或您所属团队）被请求审查拉取请求时的通知，请使用 `reason:review-requested`。 更多信息请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)”。

| 查询                        | 描述                                     |
| ------------------------- | -------------------------------------- |
| `reason:assign`           | 分配给您的议题或拉取请求有更新时。                      |
| `reason:author`           | 当您打开拉取请求或议题并且有更新或新评论时。                 |
| `reason:comment`          | 当您评论了议题、拉取请求或团队讨论时。                    |
| `reason:participating`    | 当您评论了议题、拉取请求或团队讨论或者被@提及时。              |
| `reason:invitation`       | 当您被邀请加入团队、组织或仓库时。                      |
| `reason:manual`           | 当您在尚未订阅的议题或拉取请求上单击 **Subscribe（订阅）**时。 |
| `reason:mention`          | 您被直接@提及。                               |
| `reason:review-requested` | 有人请求您或您所在的团队审查拉取请求。                    |
| `reason:security-alert`   | 为仓库发出安全警报时。                            |
| `reason:state-change`     | 当拉取请求或议题的状态改变时。 例如，议题已关闭或拉取请求合并时。      |
| `reason:team-mention`     | 您所在的团队被@提及时。                           |
| `reason:ci-activity`      | 当仓库有 CI 更新时，例如新的工作流程运行状态。              |

#### 支持的 `is:` 查询

要在 {% data variables.product.product_name %} 上过滤特定活动的通知，您可以使用 `is` 查询。 For example, to only see repository invitation updates, use `is:repository-invitation`, and to only see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %} security{% endif %} alerts, use `is:repository-vulnerability-alert`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:team-discussion`

For information about reducing noise from notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."

您还可以使用 `is:` 查询来描述如何对通知进行分类。

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`
