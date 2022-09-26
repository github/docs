---
title: 议题事件类型
intro: '对于议题事件 API 和时间表 API，了解每个事件类型、{% data variables.product.prodname_dotcom %} 上的触发操作以及每个事件的唯一属性。'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875988'
---
问题事件由问题和拉取请求中的活动触发，在[问题事件 API](/rest/reference/issues#events) 和[时间线事件 API](/rest/reference/issues#timeline) 中可用。 每个事件类型指定事件是否可用于议题事件或时间表事件 API。

GitHub 的 REST API 认为每个拉取请求都是一个议题，但并非每个议题都是拉取请求。 因此，议题事件和时间表事件端点可能在响应中同时返回议题和拉取请求。 拉取请求在 `issue` 对象中有一个 `pull_request` 属性。 因为拉取请求也是议题，因此议题和拉取请求编号在仓库中不会重叠。 例如，如果您在仓库中打开了您的第一个议题，则编号将为 1。 如果您随后打开了一个拉取请求，则编号将为 2。 每个事件类型指定事件是否发生在拉取请求和/或议题中。

## 议题事件对象公共属性

议题事件都具有相同的对象结构，但仅在时间表事件 API 中可用的事件除外。 某些事件还包括可提供有关事件资源更多上下文的其他属性。 有关不同于此对象格式的任何属性的详细信息，请参阅特定事件。

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

议题或拉取请求已添加到项目板。 {% data reusables.projects.disabled-projects %}

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## 已分配

议题或拉取请求已分配给用户。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X**  |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub 尝试自动更改拉取请求的基本分支未成功。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** |  |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub 尝试自动更改拉取请求的基本分支已成功。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

拉取请求的基本引用分支已更改。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已关闭

议题或拉取请求已关闭。 `commit_id` 存在时，它会使用“closes/fixes”语法标识关闭问题的提交。 有关语法的详细信息，请参阅“[将拉取请求链接到问题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)”。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已评论

已将评论添加到议题或拉取请求中。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> |  | **X** |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

名称 | 类型 | 说明
-----|------|--------------
`url` | `string` | 用于检索议题评论的 REST API URL。
`html_url` | `string` | 议题评论的 HTML URL。
`issue_url` | `string` | 议题的 HTML URL。
`id` | `integer` | 事件的唯一标识符。
`node_id` | `string` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。
`user` | `object` | 对议题发表评论的人。
`created_at` | `string` | 指示评论添加时间的时间戳。
`updated_at` | `string` | 指示评论更新或创建（如果从未更新）时间的时间戳。
`author_association` | `string` | 用户在议题仓库中拥有的权限。 例如，如果存储库的所有者创建了注释，该值将为 `"OWNER"`。
`body` | `string` | 评论正文文本。
`event` | `string` | 事件值为 `"commented"`。
`actor` | `object` | 生成事件的人。

## 提交

已将提交添加到拉取请求的 `HEAD` 分支。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> |  | **X** |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

名称 | 类型 | 说明
-----|------|--------------
`sha` | `string` | 拉取请求中提交的 SHA。
`node_id` | `string` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。
`url` | `string` | 用于检索提交的 REST API URL。
`html_url` | `string` | 提交的 HTML URL。
`author` | `object` | 编写提交的人。
`committer` | `object` | 代表作者进行提交的人。
`tree` | `object` | 提交的 Git 树。
`message` | `string` | 提交消息。
`parents` | `array of objects` | 父提交的列表。
`verification` | `object` | 验证提交签名的结果。 有关详细信息，请参阅“[签名验证对象](/rest/reference/git#get-a-commit)”。
`event` | `string` | 事件值为 `"committed"`。

## 已连接

议题或拉取请求已链接到另一个议题或拉取请求。 有关详细信息，请参阅“[将拉取请求链接到问题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

拉取请求已转换为草稿模式。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

此议题是通过将项目板中的注释转换为议题而产生的。 {% data reusables.projects.disabled-projects %}

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## cross-referenced

议题或拉取请求引用自另一个议题或拉取请求。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> |  | **X** |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

名称 | 类型 | 说明
-----|------|--------------
`actor` | `object` | 生成事件的人。
`created_at` | `string` | 指示交叉引用添加时间的时间戳。
`updated_at` | `string` | 指示交叉引用更新或创建（如果从未更新）时间的时间戳。
`source` | `object` | 添加交叉引用的议题或拉取请求。
`source[type]` | `string` | 该值始终为 `"issue"`，因为拉取请求属于类型问题。 在时间表事件 API 中仅返回由议题或拉取请求触发的交叉引用事件。 若要确定触发事件的问题是否为拉取请求，可以检查 `source[issue][pull_request]` 对象是否存在。
`source[issue]` | `object` | 添加交叉引用的 `issue` 对象。
`event` | `string` | 事件值为 `"cross-referenced"`。

## demilestoned

议题或拉取请求已从里程碑中删除。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | 里程碑对象。
`milestone[title]` | `string` | 里程碑的标题。

## deployed

拉取请求已部署。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

拉取请求部署环境已更改。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** |  |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已断开连接

议题或拉取请求与另一个议题或拉取请求取消链接。 有关详细信息，请参阅“[将拉取请求链接到问题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

拉取请求的 `HEAD` 分支已删除。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

拉取请求的 `HEAD` 分支已还原为上一个已知提交。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

## head_ref_force_pushed

拉取请求的 HEAD 分支已强制推送。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已标记

标签已添加到议题或拉取请求。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## locked

议题或拉取请求已锁定。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | 锁定问题或拉取请求对话的原因（如果已提供）。

## mentioned

在问题或拉取请求正文中，`actor` 是 `@mentioned`。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

具有写入权限的用户将议题标记为另一个议题的重复项，或将拉取请求标记为另一个拉取请求的重复项。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 合并

拉取请求已合并。 `commit_id` 属性是已合并的 `HEAD` 提交的 SHA1。 `commit_repository` 始终与主存储库相同。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

议题或拉取请求已添加到里程碑。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | 里程碑对象。
`milestone[title]` | `string` | 里程碑的标题。

## moved_columns_in_project

议题或拉取请求已在项目板的各列之间移动。 {% data reusables.projects.disabled-projects %}

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | 从中移动问题的列的名称。

## pinned

该议题已被置顶。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

草稿拉取请求已标记为可供审阅。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

议题引用自提交消息。 `commit_id` 属性是提交位置的 SHA1，commit_repository 是推送提交的位置。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

议题或拉取请求已从项目板中删除。 {% data reusables.projects.disabled-projects %}

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renamed

议题或拉取请求标题已更改。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | 名称详细信息。
`rename[from]` | `string` | 之前的名称。
`rename[to]` | `string` | 新名称。

## 已重新打开

问题或拉取请求已重新打开。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

拉取请求审查被忽略。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

已请求拉取请求审查。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

拉取请求审查被删除。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## reviewed

已审查拉取请求。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>拉取请求</li></ul> |  | **X** |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

名称 | 类型 | 说明
-----|------|--------------
`id` | `integer` | 事件的唯一标识符。
`node_id` | `string` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。
`user` | `object` | 对议题发表评论的人。
`body` | `string` | 审查摘要文本。
`commit_id` | `string` | 审查时拉取请求中最新提交的 SHA。
`submitted_at` | `string` | 指示审查提交时间的时间戳。
`state` | `string` | 已提交审查的状态。 可以是下述之一：`commented`、`changes_requested` 或 `approved`。
`html_url` | `string` | 审查的 HTML URL。
`pull_request_url` | `string` | 用于检索拉取请求的 REST API URL。
`author_association` | `string` | 用户在议题仓库中拥有的权限。 例如，如果存储库的所有者创建了注释，该值将为 `"OWNER"`。
`_links` | `object` | `html_url` 和 `pull_request_url`。
`event` | `string` | 事件值为 `"reviewed"`。

## subscribed

有人订阅了接收议题或拉取请求的通知。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

议题已转移到另一个仓库。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 未分配

已从议题中取消分配用户。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## unlabeled

已从议题中删除标签。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## 未锁定

议题已解锁。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | 锁定问题或拉取请求对话的原因（如果已提供）。

## unmarked_as_duplicate

先前被用户标记为另一个议题的重复项的议题不再被视为重复项，或者先前被用户标记为另一个拉取请求的重复项的拉取请求不再被视为重复项。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

议题被取消置顶。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已取消订阅

有人取消订阅了接收议题或拉取请求的通知。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> |  | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

组织所有者阻止了用户访问组织。 这是[通过被阻止的用户对该问题的注释之一](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment)完成的。

### 可用性

|问题类型 | 议题事件 API | 时间表事件 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>问题</li><li>拉取请求</li></ul> | **X** | **X** |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
