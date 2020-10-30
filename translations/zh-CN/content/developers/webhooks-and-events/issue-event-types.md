---
title: Issue event types
intro: 'For the Issues Events API and Timeline API, learn about each event type, the triggering action on {% data variables.product.prodname_dotcom %}, and each event''s unique properties.'
redirect_from:
  - /v3/issues/issue-event-types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


Issue events are triggered by activity in issues and pull requests and are available in the [Issue Events API](/v3/issues/events) and the [Timeline Events API](/v3/issues/timeline). Each event type specifies whether the event is available in the Issue Events or Timeline Events APIs.


GitHub's REST API considers every pull request to be an issue, but not every issue is a pull request. For this reason, the Issue Events and Timeline Events endpoints may return both issues and pull requests in the response. Pull requests have a `pull_request` property in the `issue` object. Because pull requests are issues, issue and pull request numbers do not overlap in a repository. For example, if you open your first issue in a repository, the number will be 1. If you then open a pull request, the number will be 2. Each event type specifies if the event occurs in pull request, issues, or both.

### Issue event object common properties

Issue events all have the same object structure, except events that are only available in the Timeline Events API. Some events also include additional properties that provide more context about the event resources. Refer to the specific event to for details about any properties that differ from this object format.

{% data reusables.issue-events.issue-event-common-properties %}

### added_to_project

The issue or pull request was added to a project board. {% data reusables.projects.disabled-projects %}

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### 已分配

The issue or pull request was assigned to a user.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### automatic_base_change_failed

GitHub unsuccessfully attempted to automatically change the base branch of the pull request.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |                     |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### automatic_base_change_succeeded

GitHub successfully attempted to automatically change the base branch of the pull request.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |                     |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### base_ref_changed

The base reference branch of the pull request changed.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |                     |

 ### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### closed

The issue or pull request was closed. When the `commit_id` is present, it identifies the commit that closed the issue using "closes / fixes" syntax. For more information about the syntax, see "[Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### 已评论

A comment was added to the issue or pull request.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |                  |        **X**        |

#### Event object properties

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称                   | 类型    | 描述                                                                                                                                              |
| -------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                | `字符串` | The REST API URL to retrieve the issue comment.                                                                                                 |
| `html_url`           | `字符串` | The HTML URL of the issue comment.                                                                                                              |
| `issue_url`          | `字符串` | The HTML URL of the issue.                                                                                                                      |
| `id`                 | `整数`  | The unique identifier of the event.                                                                                                             |
| `node_id`            | `字符串` | The [Global Node ID](/v4/guides/using-global-node-ids) of the event.                                                                            |
| `用户`                 | `对象`  | The person who commented on the issue.                                                                                                          |
| `created_at`         | `字符串` | The timestamp indicating when the comment was added.                                                                                            |
| `updated_at`         | `字符串` | The timestamp indicating when the comment was updated or created, if the comment is never updated.                                              |
| `author_association` | `字符串` | The permissions the user has in the issue's repository. For example, the value would be `"OWNER"` if the owner of repository created a comment. |
| `正文`                 | `字符串` | The comment body text.                                                                                                                          |
| `event`              | `字符串` | The event value is `"commented"`.                                                                                                               |
| `actor`              | `对象`  | The person who generated the event.                                                                                                             |

### committed

A commit was added to the pull request's `HEAD` branch.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |                  |        **X**        |

#### Event object properties

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称            | 类型                 | 描述                                                                                                                                                           |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sha`         | `字符串`              | The SHA of the commit in the pull request.                                                                                                                   |
| `node_id`     | `字符串`              | The [Global Node ID](/v4/guides/using-global-node-ids) of the event.                                                                                         |
| `url`         | `字符串`              | The REST API URL to retrieve the commit.                                                                                                                     |
| `html_url`    | `字符串`              | The HTML URL of the commit.                                                                                                                                  |
| `作者`          | `对象`               | The person who authored the commit.                                                                                                                          |
| `提交者`         | `对象`               | The person who committed the commit on behalf of the author.                                                                                                 |
| `树`           | `对象`               | The Git tree of the commit.                                                                                                                                  |
| `message`     | `字符串`              | 提交消息.                                                                                                                                                        |
| `父项`          | `array of objects` | A list of parent commits.                                                                                                                                    |
| `verfication` | `对象`               | The result of verifying the commit's signature. For more information, see "[Signature verification object](/v3/git/commits/#signature-verification-object)." |
| `event`       | `字符串`              | The event value is `"committed"`.                                                                                                                            |

### connected

The issue or pull request was linked to another issue or pull request. For more information, see "[Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### convert_to_draft

The pull request was converted to draft mode.

#### 可用性

| Issue type                | Issue events API | Timeline events API |
|:------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### converted_note_to_issue

The issue was created by converting a note in a project board to an issue. {% data reusables.projects.disabled-projects %}

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### cross-referenced

The issue or pull request was referenced from another issue or pull request.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |                  |        **X**        |

#### Event object properties

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称              | 类型    | 描述                                                                                                                                                                                                                                                                                                                            |
| --------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor`         | `对象`  | The person who generated the event.                                                                                                                                                                                                                                                                                           |
| `created_at`    | `字符串` | The timestamp indicating when the cross-reference was added.                                                                                                                                                                                                                                                                  |
| `updated_at`    | `字符串` | The timestamp indicating when the cross-refererence was updated or created, if the cross-reference is never updated.                                                                                                                                                                                                          |
| `source`        | `对象`  | The issue or pull request that added a cross-reference.                                                                                                                                                                                                                                                                       |
| `source[type]`  | `字符串` | This value will always be `"issue"` because pull requests are of type issue. Only cross-reference events triggered by issues or pull requests are returned in the Timeline Events API. To determine if the issue that triggered the event is a pull request, you can check if the `source[issue][pull_request` object exists. |
| `source[issue]` | `对象`  | The `issue` object that added the cross-reference.                                                                                                                                                                                                                                                                            |
| `event`         | `字符串` | The event value is `"cross-referenced"`.                                                                                                                                                                                                                                                                                      |

### demilestoned

The issue or pull request was removed from a milestone.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | The milestone object. `milestone[title]` | `string` | The title of the milestone.

### deployed

The pull request was deployed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### deployment_environment_changed

The pull request deployment environment was changed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |                     |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### disconnected

The issue or pull request was unlinked from another issue or pull request. For more information, see "[Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_deleted

The pull request's `HEAD` branch was deleted.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_restored

The pull request's `HEAD` branch was restored to the last known commit.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### labeled

A label was added to the issue or pull request.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### locked

The issue or pull request was locked.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | The reason an issue or pull request conversation was locked, if one was provided.

### 已提及

The `actor` was `@mentioned` in an issue or pull request body.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### marked_as_duplicate

A user with write permissions marked an issue as a duplicate of another issue, or a pull request as a duplicate of another pull request.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### merged

The pull request was merged. The `commit_id` attribute is the SHA1 of the `HEAD` commit that was merged. The `commit_repository` is always the same as the main repository.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |                     |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### milestoned

The issue or pull request was added to a milestone.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | The milestone object. `milestone[title]` | `string` | The title of the milestone.

### moved_columns_in_project

The issue or pull request was moved between columns in a project board. {% data reusables.projects.disabled-projects %}

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}
`previous_column_name` | `string` | The name of the column the issue was moved from.

### 已固定

The issue was pinned.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### ready_for_review

A pull request was created that is not in draft mode.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### referenced

The issue was referenced from a commit message. The `commit_id` attribute is the commit SHA1 of where that happened and the commit_repository is where that commit was pushed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### removed_from_project

The issue or pull request was removed from a project board. {% data reusables.projects.disabled-projects %}

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### renamed

The issue or pull request title was changed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
`rename` | `object` | The name details. `rename[from]` | `string` | The previous name. `rename[to]` | `string` | The new name.

### reopened

The issue or pull request was reopened.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### review_dismissed

The pull request review was dismissed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-dismissed-properties %}

### review_requested

A pull request review was requested.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### review_request_removed

A pull request review request was removed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### reviewed

The pull request was reviewed.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>拉取请求</li></ul> |                  |        **X**        |

#### Event object properties

{% data reusables.issue-events.timeline_events_object_properties %}

| 名称                   | 类型    | 描述                                                                                                                                              |
| -------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `整数`  | The unique identifier of the event.                                                                                                             |
| `node_id`            | `字符串` | The [Global Node ID](/v4/guides/using-global-node-ids) of the event.                                                                            |
| `用户`                 | `对象`  | The person who commented on the issue.                                                                                                          |
| `正文`                 | `字符串` | The review summary text.                                                                                                                        |
| `commit_id`          | `字符串` | The SHA of the latest commit in the pull request at the time of the review.                                                                     |
| `submitted_at`       | `字符串` | The timestamp indicating when the review was submitted.                                                                                         |
| `state`              | `字符串` | The state of the submitted review. Can be one of: `commented`, `changes_requested`, or `approved`.                                              |
| `html_url`           | `字符串` | The HTML URL of the review.                                                                                                                     |
| `pull_request_url`   | `字符串` | The REST API URL to retrieve the pull request.                                                                                                  |
| `author_association` | `字符串` | The permissions the user has in the issue's repository. For example, the value would be `"OWNER"` if the owner of repository created a comment. |
| `_links`             | `对象`  | The `html_url` and `pull_request_url`.                                                                                                          |
| `event`              | `字符串` | The event value is `"reviewed"`.                                                                                                                |

### subscribed

Someone subscribed to receive notifications for an issue or pull request.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### transferred

The issue was transferred to another repository.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### unassigned

A user was unassigned from the issue.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### unlabeled

A label was removed from the issue.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### unlocked

The issue was unlocked.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | The reason an issue or pull request conversation was locked, if one was provided.

### unmarked_as_duplicate

An issue that a user had previously marked as a duplicate of another issue is no longer considered a duplicate, or a pull request that a user had previously marked as a duplicate of another pull request is no longer considered a duplicate.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### unpinned

The issue was unpinned.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

### 已取消订阅

Someone unsubscribed from receiving notifications for an issue or pull request.

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |                  |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

{% if currentVersion == "free-pro-team@latest" %}
### user_blocked

An organization owner blocked a user from the organization. This was done [through one of the blocked user's comments on the issue](/articles/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

#### 可用性

| Issue type                 | Issue events API | Timeline events API |
|:-------------------------- |:----------------:|:-------------------:|
| <ul><li>议题</li><li>拉取请求</li></ul> |      **X**       |        **X**        |

#### Event object properties

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
