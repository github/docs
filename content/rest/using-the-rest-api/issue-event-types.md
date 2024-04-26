---
title: Issue event types
intro: 'For the REST APIs for issue events and timeline events, learn about each event type, the triggering action on {% data variables.product.prodname_dotcom %}, and each event''s unique properties.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
  - /developers/webhooks-and-events/events/issue-event-types
  - /webhooks-and-events/events/issue-event-types
  - /rest/overview/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Events
---
Issue events are triggered by activity in issues and pull requests and are available in the REST API for [Issue events](/rest/issues/events) and [Timeline events](/rest/issues/timeline). Each event type specifies whether the event is available in the REST API for issue events or timeline events.

GitHub's REST API considers every pull request to be an issue, but not every issue is a pull request. For this reason, the Issue Events and Timeline Events endpoints may return both issues and pull requests in the response. Pull requests have a `pull_request` property in the `issue` object. Because pull requests are issues, issue and pull request numbers do not overlap in a repository. For example, if you open your first issue in a repository, the number will be 1. If you then open a pull request, the number will be 2. Each event type specifies if the event occurs in pull request, issues, or both.

## Issue event object common properties

Issue events all have the same object structure, except events that are only available in the REST API for timeline events. Some events also include additional properties that provide more context about the event resources. Refer to the specific event for details about any properties that differ from this object format.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

The issue or pull request was added to a {% data variables.projects.projects_v1_board %}. {% data reusables.projects.disabled-projects %}

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for added_to_project

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## assigned

The issue or pull request was assigned to a user.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for assigned

{% data reusables.issue-events.issue-event-common-properties %}
`assignee` | `object` | The person assigned to this issue.
`assigner` | `object` | The person who performed the assignment for this issue. This field is available in the REST API for issue events but not the REST API for timeline events.

## automatic_base_change_failed

GitHub unsuccessfully attempted to automatically change the base branch of the pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

### Properties for automatic_base_change_failed

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub successfully attempted to automatically change the base branch of the pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

### Properties for automatic_base_change_succeeded

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

The base reference branch of the pull request changed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

### Properties for base_ref_changed

{% data reusables.issue-events.issue-event-common-properties %}

## closed

The issue or pull request was closed. When the `commit_id` is present, it identifies the commit that closed the issue using "closes / fixes" syntax. For more information about the syntax, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for closed

{% data reusables.issue-events.issue-event-common-properties %}

## commented

A comment was added to the issue or pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for commented

{% data reusables.issue-events.timeline_events_object_properties %}

Name | Type | Description
-----|------|--------------
`url` | `string` | The REST API URL to retrieve the issue comment.
`html_url` | `string` | The HTML URL of the issue comment.
`issue_url` | `string` | The HTML URL of the issue.
`id` | `integer` | The unique identifier of the event.
`node_id` | `string` | The [Global Node ID](/graphql/guides/using-global-node-ids) of the event.
`user` | `object` | The person who commented on the issue.
`created_at` | `string` | The timestamp indicating when the comment was added.
`updated_at` | `string` | The timestamp indicating when the comment was updated or created, if the comment is never updated.
`author_association` | `string` | The permissions the user has in the issue's repository. For example, the value would be `"OWNER"` if the owner of repository created a comment.
`body` | `string` | The comment body text.
`event` | `string` | The event value is `"commented"`.
`actor` | `object` | The person who generated the event.

## committed

A commit was added to the pull request's `HEAD` branch.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for committed

{% data reusables.issue-events.timeline_events_object_properties %}

Name | Type | Description
-----|------|--------------
`sha` | `string` | The SHA of the commit in the pull request.
`node_id` | `string` | The [Global Node ID](/graphql/guides/using-global-node-ids) of the event.
`url` | `string` | The REST API URL to retrieve the commit.
`html_url` | `string` | The HTML URL of the commit.
`author` | `object` | The person who authored the commit.
`committer` | `object` | The person who committed the commit on behalf of the author.
`tree` | `object` | The Git tree of the commit.
`message` | `string` | The commit message.
`parents` | `array of objects` | A list of parent commits.
`verification` | `object` | The result of verifying the commit's signature. For more information, see "[AUTOTITLE](/rest/git/commits#get-a-commit)."
`event` | `string` | The event value is `"committed"`.

## connected

The issue or pull request was linked to another issue or pull request. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)".

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for connected

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

The pull request was converted to draft mode.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for convert_to_draft

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

The issue was created by converting a note in a {% data variables.projects.projects_v1_board %} to an issue. {% data reusables.projects.disabled-projects %}

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for converted_note_to_issue

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## converted_to_discussion

The issue was closed and converted to a discussion.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %}|

{% endrowheaders %}

### Properties for converted_to_discussion

{% data reusables.issue-events.issue-event-common-properties %}

## cross-referenced

The issue or pull request was referenced from another issue or pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for cross-referenced

{% data reusables.issue-events.timeline_events_object_properties %}

Name | Type | Description
-----|------|--------------
`actor` | `object` | The person who generated the event.
`created_at` | `string` | The timestamp indicating when the cross-reference was added.
`updated_at` | `string` | The timestamp indicating when the cross-reference was updated or created, if the cross-reference is never updated.
`source` | `object` | The issue or pull request that added a cross-reference.
`source[type]` | `string` | This value will always be `"issue"` because pull requests are of type issue. Only cross-reference events triggered by issues or pull requests are returned in the REST API for timeline events. To determine if the issue that triggered the event is a pull request, you can check if the `source[issue][pull_request]` object exists.
`source[issue]` | `object` | The `issue` object that added the cross-reference.
`event` | `string` | The event value is `"cross-referenced"`.

## demilestoned

The issue or pull request was removed from a milestone.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for demilestoned

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | The milestone object.
`milestone[title]` | `string` | The title of the milestone.

## deployed

The pull request was deployed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for deployed

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

The pull request deployment environment was changed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

### Properties for deployment_environment_changed

{% data reusables.issue-events.issue-event-common-properties %}

## disconnected

The issue or pull request was unlinked from another issue or pull request. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)".

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for disconnected

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

The pull request's `HEAD` branch was deleted.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for head_ref_deleted

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

The pull request's `HEAD` branch was restored to the last known commit.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

## head_ref_force_pushed

The pull request's HEAD branch was force pushed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for head_ref_force_pushed

{% data reusables.issue-events.issue-event-common-properties %}

## labeled

A label was added to the issue or pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for labeled

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

## locked

The issue or pull request was locked.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for locked

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | The reason an issue or pull request conversation was locked, if one was provided.

## mentioned

The `actor` was `@mentioned` in an issue or pull request body.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for mentioned

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

A user with write permissions marked an issue as a duplicate of another issue, or a pull request as a duplicate of another pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for marked_as_duplicate

{% data reusables.issue-events.issue-event-common-properties %}

## merged

The pull request was merged. The `commit_id` attribute is the SHA1 of the `HEAD` commit that was merged. The `commit_repository` is always the same as the main repository.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for merged

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

The issue or pull request was added to a milestone.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for milestoned

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | The milestone object.
`milestone[title]` | `string` | The title of the milestone.

## moved_columns_in_project

The issue or pull request was moved between columns in a {% data variables.projects.projects_v1_board %}. {% data reusables.projects.disabled-projects %}

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for moved_columns_in_project

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}
`previous_column_name` | `string` | The name of the column the issue was moved from.

## pinned

The issue was pinned.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for pinned

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

A draft pull request was marked as ready for review.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for ready_for_review

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

The issue was referenced from a commit message. The `commit_id` attribute is the commit SHA1 of where that happened and the commit_repository is where that commit was pushed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for referenced

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

The issue or pull request was removed from a {% data variables.projects.projects_v1_board %}. {% data reusables.projects.disabled-projects %}

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for removed_from_project

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

## renamed

The issue or pull request title was changed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for renamed

{% data reusables.issue-events.issue-event-common-properties %}
`rename` | `object` | The name details.
`rename[from]` | `string` | The previous name.
`rename[to]` | `string` | The new name.

## reopened

The issue or pull request was reopened.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for reopened

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

The pull request review was dismissed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for review_dismissed

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-dismissed-properties %}

## review_requested

A pull request review was requested.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for review_requested

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

## review_request_removed

A pull request review request was removed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for review_request_removed

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

## reviewed

The pull request was reviewed.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Pull requests| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for reviewed

{% data reusables.issue-events.timeline_events_object_properties %}

Name | Type | Description
-----|------|--------------
`id` | `integer` | The unique identifier of the event.
`node_id` | `string` | The [Global Node ID](/graphql/guides/using-global-node-ids) of the event.
`user` | `object` | The person who commented on the issue.
`body` | `string` | The review summary text.
`commit_id` | `string` | The SHA of the latest commit in the pull request at the time of the review.
`submitted_at` | `string` | The timestamp indicating when the review was submitted.
`state` | `string` | The state of the submitted review. Can be one of: `commented`, `changes_requested`, `approved` or `dismissed`.
`html_url` | `string` | The HTML URL of the review.
`pull_request_url` | `string` | The REST API URL to retrieve the pull request.
`author_association` | `string` | The permissions the user has in the issue's repository. For example, the value would be `"OWNER"` if the owner of repository created a comment.
`_links` | `object` | The `html_url` and `pull_request_url`.
`event` | `string` | The event value is `"reviewed"`.

## subscribed

Someone subscribed to receive notifications for an issue or pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for subscribed

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

The issue was transferred to another repository.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for transferred

{% data reusables.issue-events.issue-event-common-properties %}

## unassigned

A user was unassigned from the issue.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unassigned

{% data reusables.issue-events.issue-event-common-properties %}
`assignee` | `object` | The person unassigned from this issue.
`assigner` | `object` | The person who performed the unassignment for this issue. This field is available in the REST API for issue events but not the REST API for timeline events.

## unlabeled

A label was removed from the issue.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unlabeled

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

## unlocked

The issue was unlocked.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unlocked

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | The reason an issue or pull request conversation was locked, if one was provided.

## unmarked_as_duplicate

An issue that a user had previously marked as a duplicate of another issue is no longer considered a duplicate, or a pull request that a user had previously marked as a duplicate of another pull request is no longer considered a duplicate.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unmarked_as_duplicate

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

The issue was unpinned.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unpinned

{% data reusables.issue-events.issue-event-common-properties %}

## unsubscribed

Someone unsubscribed from receiving notifications for an issue or pull request.

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for unsubscribed

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}

## user_blocked

An organization owner blocked a user from the organization. This was done [through one of the blocked user's comments on the issue](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

This event is available for the following issue types.

{% rowheaders %}

|  | REST API for issue events | REST API for timeline events |
|---|---|---|
|Issues| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
|Pull requests| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Properties for user_blocked

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
