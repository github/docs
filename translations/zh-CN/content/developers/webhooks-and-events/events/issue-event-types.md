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
---

议题事件由议题和拉取请求中的活动触发，可用于[议题事件 API](/rest/reference/issues#events) 和[时间表事件 API](/rest/reference/issues#timeline)。 每个事件类型指定事件是否可用于议题事件或时间表事件 API。

GitHub 的 REST API 认为每个拉取请求都是一个议题，但并非每个议题都是拉取请求。 因此，议题事件和时间表事件端点可能在响应中同时返回议题和拉取请求。 拉取请求在 `issue` 对象中具有 `pull_request` 属性。 因为拉取请求也是议题，因此议题和拉取请求编号在仓库中不会重叠。 例如，如果您在仓库中打开了您的第一个议题，则编号将为 1。 如果您随后打开了一个拉取请求，则编号将为 2。 每个事件类型指定事件是否发生在拉取请求和/或议题中。

## 议题事件对象公共属性

议题事件都具有相同的对象结构，但仅在时间表事件 API 中可用的事件除外。 某些事件还包括可提供有关事件资源更多上下文的其他属性。 有关不同于此对象格式的任何属性的详细信息，请参阅特定事件。

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

议题或拉取请求已添加到项目板。 {% data reusables.projects.disabled-projects %}

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## 已分配

议题或拉取请求已分配给用户。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub 尝试自动更改拉取请求的基本分支未成功。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |           |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub 尝试自动更改拉取请求的基本分支已成功。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |           |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

拉取请求的基本引用分支已更改。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |           |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## closed

议题或拉取请求已关闭。 当 `commit_id` 存在时，它使用 "closes / fixes" 语法来标识关闭议题的提交。 有关该语法的更多信息请参阅“[将拉取请求链接到议题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)”。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已评论

已将评论添加到议题或拉取请求中。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |          |   **X**   |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称                   | 类型    | 描述                                                   |
| -------------------- | ----- | ---------------------------------------------------- |
| `url`                | `字符串` | 用于检索议题评论的 REST API URL。                              |
| `html_url`           | `字符串` | 议题评论的 HTML URL。                                      |
| `issue_url`          | `字符串` | 议题的 HTML URL。                                        |
| `id`                 | `整数`  | 事件的唯一标识符。                                            |
| `node_id`            | `字符串` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。 |
| `用户`                 | `对象`  | 对议题发表评论的人。                                           |
| `created_at`         | `字符串` | 指示评论添加时间的时间戳。                                        |
| `updated_at`         | `字符串` | 指示评论更新或创建（如果从未更新）时间的时间戳。                             |
| `author_association` | `字符串` | 用户在议题仓库中拥有的权限。 如果仓库的所有者创建了评论，则该值将为 `"OWNER"`。        |
| `正文`                 | `字符串` | 评论正文文本。                                              |
| `event`              | `字符串` | 事件值为 `"commented"`。                                  |
| `actor`              | `对象`  | 生成事件的人。                                              |

## committed

提交已添加到拉取请求的 `HEAD` 分支。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |          |   **X**   |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称         | 类型     | 描述                                                              |
| ---------- | ------ | --------------------------------------------------------------- |
| `sha`      | `字符串`  | 拉取请求中提交的 SHA。                                                   |
| `node_id`  | `字符串`  | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。            |
| `url`      | `字符串`  | 用于检索提交的 REST API URL。                                           |
| `html_url` | `字符串`  | 提交的 HTML URL。                                                   |
| `作者`       | `对象`   | 编写提交的人。                                                         |
| `提交者`      | `对象`   | 代表作者进行提交的人。                                                     |
| `树`        | `对象`   | 提交的 Git 树。                                                      |
| `message`  | `字符串`  | 提交消息.                                                           |
| `父项`       | `对象数组` | 父提交的列表。                                                         |
| `验证`       | `对象`   | 验证提交签名的结果。 更多信息请参阅“[签名验证对象](/rest/reference/git#get-a-commit)”。 |
| `event`    | `字符串`  | 事件值为 `"committed"`。                                             |

## connected

议题或拉取请求已链接到另一个议题或拉取请求。 更多信息请参阅“[将拉取请求链接到议题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

拉取请求已转换为草稿模式。

### 可用性

| 议题类型                      | 议题事件 API | 时间表事件 API |
|:------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

此议题是通过将项目板中的注释转换为议题而产生的。 {% data reusables.projects.disabled-projects %}

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## cross-referenced

议题或拉取请求引用自另一个议题或拉取请求。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |          |   **X**   |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称              | 类型    | 描述                                                                                                                           |
| --------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| `actor`         | `对象`  | 生成事件的人。                                                                                                                      |
| `created_at`    | `字符串` | 指示交叉引用添加时间的时间戳。                                                                                                              |
| `updated_at`    | `字符串` | 指示交叉引用更新或创建（如果从未更新）时间的时间戳。                                                                                                   |
| `source`        | `对象`  | 添加交叉引用的议题或拉取请求。                                                                                                              |
| `source[type]`  | `字符串` | 此值将始终为 `"issue"`，因为拉取请求是议题类型。 在时间表事件 API 中仅返回由议题或拉取请求触发的交叉引用事件。 要确定触发事件的议题是否为拉取请求，您可以检查 `source[issue][pull_request` 对象是否存在。 |
| `source[issue]` | `对象`  | 添加交叉引用的 `issue` 对象。                                                                                                          |
| `event`         | `字符串` | 事件值为 `"cross-referenced"`。                                                                                                   |

## demilestoned

议题或拉取请求已从里程碑中删除。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | 里程碑对象。 `milestone[title]` | `string` | 里程碑的标题。

## deployed

拉取请求已部署。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

拉取请求部署环境已更改。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |           |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## disconnected

议题或拉取请求与另一个议题或拉取请求取消链接。 更多信息请参阅“[将拉取请求链接到议题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

拉取请求的 `HEAD` 分支已删除。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

拉取请求的 `HEAD` 分支已还原到上次已知提交。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

## head_ref_force_pushed

拉取请求的 HEAD 分支已强制推送。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## labeled

标签已添加到议题或拉取请求。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

## locked

议题或拉取请求已锁定。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | 议题或拉取请求对话被锁定的原因（如果有）。

## 已提及

`actor` 在议题或拉取请求正文中被 `@mentioned`。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

具有写入权限的用户将议题标记为另一个议题的重复项，或将拉取请求标记为另一个拉取请求的重复项。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## merged

拉取请求已合并。 `commit_id` 属性是已合并 `HEAD` 提交的 SHA1。 `commit_repository` 始终与主仓库相同。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

议题或拉取请求已添加到里程碑。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | 里程碑对象。 `milestone[title]` | `string` | 里程碑的标题。

## moved_columns_in_project

议题或拉取请求已在项目板的各列之间移动。 {% data reusables.projects.disabled-projects %}

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}
`previous_column_name` | `string` | 从中移动议题的列的名称。

## 已固定

该议题已被置顶。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

草稿拉取请求已标记为可供审阅。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

议题引用自提交消息。 `commit_id` 属性是发生位置的提交 SHA1，commit_repository 提交被推送的地方。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

议题或拉取请求已从项目板中删除。 {% data reusables.projects.disabled-projects %}

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## renamed

议题或拉取请求标题已更改。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
`rename` | `object` | 名称详细信息。 `rename[from]` | `string` | 以前的名称。 `rename[to]` | `string` | 新名称。

## reopened

问题或拉取请求已重新打开。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

拉取请求审查被忽略。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-dismissed-properties %}

## review_requested

已请求拉取请求审查。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

## review_request_removed

拉取请求审查被删除。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

## reviewed

已审查拉取请求。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>拉取请求</li></ul> |          |   **X**   |

### 事件对象属性

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称                   | 类型    | 描述                                                               |
| -------------------- | ----- | ---------------------------------------------------------------- |
| `id`                 | `整数`  | 事件的唯一标识符。                                                        |
| `node_id`            | `字符串` | 事件的[全局节点 ID](/graphql/guides/using-global-node-ids)。             |
| `用户`                 | `对象`  | 对议题发表评论的人。                                                       |
| `正文`                 | `字符串` | 审查摘要文本。                                                          |
| `commit_id`          | `字符串` | 审查时拉取请求中最新提交的 SHA。                                               |
| `submitted_at`       | `字符串` | 指示审查提交时间的时间戳。                                                    |
| `state`              | `字符串` | 已提交审查的状态。 可以是以下项之一：`commented`、`changes_requested` 或 `approved`。 |
| `html_url`           | `字符串` | 审查的 HTML URL。                                                    |
| `pull_request_url`   | `字符串` | 用于检索拉取请求的 REST API URL。                                          |
| `author_association` | `字符串` | 用户在议题仓库中拥有的权限。 如果仓库的所有者创建了评论，则该值将为 `"OWNER"`。                    |
| `_links`             | `对象`  | `html_url` 和 `pull_request_url`。                                 |
| `event`              | `字符串` | 事件值为 `"reviewed"`。                                               |

## subscribed

有人订阅了接收议题或拉取请求的通知。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

议题已转移到另一个仓库。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## unassigned

已从议题中取消分配用户。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

## unlabeled

已从议题中删除标签。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

## unlocked

议题已解锁。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | 议题或拉取请求对话被锁定的原因（如果有）。

## unmarked_as_duplicate

先前被用户标记为另一个议题的重复项的议题不再被视为重复项，或者先前被用户标记为另一个拉取请求的重复项的拉取请求不再被视为重复项。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

议题被取消置顶。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

## 已取消订阅

有人取消订阅了接收议题或拉取请求的通知。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |          |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

组织所有者阻止了用户访问组织。 其方法是[阻止用户对议题发表评论](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment)。

### 可用性

| 议题类型                       | 议题事件 API | 时间表事件 API |
|:-------------------------- |:--------:|:---------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |  **X**   |   **X**   |

### 事件对象属性

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
