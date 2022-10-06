---
title: 从收件箱管理通知
intro: '使用收件箱快速分类并在电子邮件{% ifversion fpt or ghes or ghec %}与手机{% endif %}之间同步你的通知。'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: 83aa9ce53f68636e299c3a83fe8d06dd189d5d6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060456'
---
## 关于收件箱

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”。
{% endif %}

要访问通知收件箱，请在任意页面的右上角单击 {% octicon "bell" aria-label="The notifications bell" %}。

  ![表示任何未读消息的通知](/assets/images/help/notifications/notifications_general_existence_indicator.png)

收件箱将显示所有尚未取消订阅或标记为“完成”的通知。 可按最适合工作流的方式自定义收件箱，方法包括使用筛选器、查看所有通知或只查看未读通知以及对通知进行分组便于快速了解。

  ![收件箱视图](/assets/images/help/notifications-v2/inbox-view.png)

默认情况下，您的收件箱将显示已读和未读通知。 要仅查看未读通知，可单击“未读”或使用 `is:unread` 查询。

  ![未读收件箱视图](/assets/images/help/notifications-v2/unread-inbox-view.png)

## 分类选项

有多个选项可对收件箱中的通知进行分类。

| 分类选项 | 说明 |
|-----------------|-------------|
| 保存            | 保存通知供以后查看。 要保存通知，请在通知右侧单击 {% octicon "bookmark" aria-label="The bookmark icon" %}。 <br> <br> 已保存的通知将无限期保存，可单击边栏中的“已保存”或通过 `is:saved` 查询进行查看。 如果您保存的通知超过5个月并且变成未保存，通知将在一天内从收件箱消失。 |
| 完成            | 将通知标记为已完成，并从收件箱中删除通知。 可单击边栏中的“完成”或通过 `is:done` 查询查看所有已完成的通知。 标记为“完成”的通知将保存 5 个月。
| 取消订阅     | 自动从收件箱中删除通知并让你通过对话取消订阅，仅当 @mentioned你、@mentioned你所属团队或者请求你审查时才会收到通知。
| 读取            | 将通知标记为已读。 要在收件箱中只查看已读通知，可使用 `is:read` 查询。 此查询不包括标记为“完成”的通知。
| Unread          | 将通知标记为未读。 要在收件箱中只查看未读通知，可使用 `is:unread` 查询。 |

若要查看可用的键盘快捷方式，请参阅“[键盘快捷方式](/github/getting-started-with-github/keyboard-shortcuts#notifications)”。

在选择分类选项之前，您可以先预览通知的详细信息并进行调查。 有关详细信息，请参阅“[对单个通知进行分类](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)”。

## 同时对多种通知分类

要一次对多种通知分类，请选择相关通知并使用 {% octicon "kebab-horizontal" aria-label="The edit icon" %} 下拉列表选择分类选项。

![带有分类选项和选定通知的下拉菜单](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## 默认通知过滤器

默认情况下，收件箱中有针对分配给你的任务、参与的帖子、请求审查拉取请求的筛选器，或者针对直接 @mentioned你的用户名或 @mentioned你所属团队的筛选器。

  ![默认自定义过滤器](/assets/images/help/notifications-v2/default-filters.png)

## 使用自定义过滤器自定义收件箱

您可以添加最多 15 个自定义过滤器。

{% data reusables.notifications.access_notifications %}
2. 若要打开筛选器设置，在左侧边栏的“筛选器”旁边，单击 {% octicon "gear" aria-label="The Gear icon" %}。

  {% tip %}

  提示：可通过在收件箱视图中创建查询并单击“保存”快速预览筛选器的收件箱结果，这将打开自定义筛选器设置 。

  {% endtip %}

3. 为过滤器和过滤器查询添加名称。 例如，若要仅查看特定存储库的通知，可以使用查询 `repo:octocat/open-source-project-name reason:participating` 创建筛选器。 您也可以用原生表情键盘添加表情符号。 有关支持的搜索查询的列表，请参阅“[支持的自定义筛选器查询](#supported-queries-for-custom-filters)”。

  ![自定义过滤器示例](/assets/images/help/notifications-v2/custom-filter-example.png)

4. 单击“创建”。

## 自定义过滤器限制

自定义过滤器当前不支持：
  - 收件箱中的全文搜索，包括搜索拉取请求或议题标题。
  - 区分 `is:issue`、`is:pr` 和 `is:pull-request` 查询筛选器。 这些查询将返回议题和拉取请求。
  - 创建超过 15 个自定义过滤器。
  - 更改默认过滤器或其顺序。
  - 使用 `NOT` 或 `-QUALIFIER` 搜索[排除项](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results)。

## 支持的自定义过滤器查询

以下是您可以使用的过滤器类型：
  - 使用 `repo:` 按存储库筛选
  - 使用 `is:` 按讨论类型筛选
  - 使用 `reason:`{% ifversion fpt or ghec %} 按通知原因筛选
  - 使用 `author:` 按通知作者筛选
  - 使用 `org:`{% endif %} 按组织筛选

### 支持的 `repo:` 查询

要添加 `repo:` 筛选器，必须在查询中包含存储库的所有者：`repo:owner/repository`。 所有者是拥有触发通知的 {% data variables.product.prodname_dotcom %} 资产的组织或用户。 例如，`repo:octo-org/octo-repo` 将会显示在 octo-org 组织内的 octo-repo 存储库中触发的通知。

### 支持的 `is:` 查询

要在 {% data variables.product.product_location %} 上筛选特定活动的通知，可使用 `is` 查询。 例如，若仅查看存储库邀请更新，请使用 `is:repository-invitation`{% ifversion not ghae %}，若仅查看 {% data variables.product.prodname_dependabot_alerts %}，请使用 `is:repository-vulnerability-alert`{% endif %}。

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

有关减少 {% data variables.product.prodname_dependabot_alerts %} 通知干扰的信息，请参阅“[配置 {% data variables.product.prodname_dependabot_alerts %} 的通知](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”。

还可使用 `is:` 查询来描述如何对通知进行分类。

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### 支持的 `reason:` 查询

要根据收到更新的原因筛选通知，可使用 `reason:` 查询。 例如，要查看请求你（或所属团队）审查拉取请求时的通知，请使用 `reason:review-requested`。 有关详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)”。

| 查询 | 说明 |
|-----------------|-------------|
| `reason:assign` | 分配给您的议题或拉取请求有更新时。
| `reason:author` | 当您打开拉取请求或议题并且有更新或新评论时。
| `reason:comment`| 当您评论了议题、拉取请求或团队讨论时。
| `reason:participating` | 当你在问题、拉取请求或团队讨论中发表了评论或者 @mentioned 你时。
| `reason:invitation` | 当您被邀请加入团队、组织或仓库时。
| `reason:manual` | 当你在尚未订阅的问题或拉取请求上单击“订阅”时。
| `reason:mention` | 直接 @mentioned你时。
| `reason:review-requested` | 有人请求您或您所在的团队审查拉取请求。
| `reason:security-alert` | 为仓库发出安全警报时。
| `reason:state-change`  | 当拉取请求或议题的状态改变时。 例如，议题已关闭或拉取请求合并时。
| `reason:team-mention` | @mentioned你所属团队时。
| `reason:ci-activity` | 当仓库有 CI 更新时，例如新的工作流程运行状态。

{% ifversion fpt or ghec %}
### 支持的 `author:` 查询

要按用户筛选通知，可使用 `author:` 查询。 作者是指与通知相关的线程（议题、拉取请求、Gist、讨论等）的原作者。 例如，要查看与 Octocat 用户创建的帖子相关的通知，可使用 `author:octocat`。

### 支持的 `org:` 查询

要按组织筛选通知，可使用 `org` 查询。 您需要在查询中指定的组织是与您在 {% data variables.product.prodname_dotcom %} 上收到的通知相关之仓库所属的组织。 如果您属于多个组织，并且想要查看特定组织的通知，则此查询很有用。

例如，要查看来自 octo-org 组织的通知，可使用 `org:octo-org`。 

{% endif %}

## {% data variables.product.prodname_dependabot %} 自定义过滤器

{% ifversion fpt or ghec or ghes > 3.2 %} 如果使用 {% data variables.product.prodname_dependabot %} 来保持依赖项更新，可使用并保存这些自定义筛选器：
- `is:repository_vulnerability_alert`，显示 {% data variables.product.prodname_dependabot_alerts %} 的通知。
- `reason:security_alert`，显示 {% data variables.product.prodname_dependabot_alerts %} 的通知和安全更新拉取请求。
- `author:app/dependabot`，显示 {% data variables.product.prodname_dependabot %} 生成的通知。 这包括 {% data variables.product.prodname_dependabot_alerts %}、安全更新拉取请求和版本更新拉取请求。

有关 {% data variables.product.prodname_dependabot %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。
{% endif %}

{% ifversion ghes < 3.3 or ghae %}

如果使用 {% data variables.product.prodname_dependabot %} 来告知不安全的依赖项，则可以使用并保存这些自定义筛选器来显示 {% data variables.product.prodname_dependabot_alerts %} 的通知：
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

有关 {% data variables.product.prodname_dependabot %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
{% endif %}

