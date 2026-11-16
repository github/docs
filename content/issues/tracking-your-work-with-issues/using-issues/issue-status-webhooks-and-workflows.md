---
title: Issue status webhooks and workflows
shortTitle: Status webhooks and workflows
intro: 'Use webhooks and {% data variables.product.prodname_actions %} workflows to respond when the status of an issue changes.'
versions:
  feature: issue-status-webhooks
contentType: reference
category:
  - Triage and organize issues
---

> [!NOTE]
> {% data reusables.issues.issue-statuses-preview %}

## About status change events

When the status of an issue changes, {% data variables.product.github %} sends an `issues` webhook event with the `status_changed` action. Payloads for every `issues` action also include the current status of the issue in `issue.status`. You can use these events to keep other tools in sync with your issues, or to run a {% data variables.product.prodname_actions %} workflow when an issue reaches a particular status.

Statuses are only included for issues in repositories that use issue statuses. For other issues, payloads don't include `issue.status`, and {% data variables.product.github %} doesn't send `status_changed`.

For the full payload schema, see [AUTOTITLE](/webhooks/webhook-events-and-payloads?actionType=status_changed#issues).

## Status objects

Webhook payloads describe each status with an object that has three properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | Integer | The identifier of the status. |
| `name` | String | The display name of the status, such as `In progress`. The name can change. |
| `category` | String | The category of the status, such as `backlog`, `planned`, `started`, `completed`, `not_planned`, or `duplicate`. More categories may be added in the future. |

More than one status can belong to the same category. For example, In progress and In review both belong to the `started` category. To match one status in your code or workflow, use its `id`. To match every status in a category, use its `category`. Don't match on `name`.

`issue.status` is `null` when the issue doesn't have a status. For example, an issue that was created before statuses were available in its repository has no status until someone sets one, or until the issue is closed or reopened.

## The `status_changed` payload

In addition to `issue`, `repository`, `sender`, and the other properties that every `issues` payload includes, a `status_changed` payload includes the following properties. For this action, `sender` is the person or app that changed the status.

| Property | Description |
| -------- | ----------- |
| `status` | The status the issue changed to. |
| `changes.status.from` | The status the issue had before the change, or `null` if it didn't have one. |
| `changes.state.from` | The previous `state` of the issue, `open` or `closed`. Only included when the status change also closed or reopened the issue. |
| `changes.state_reason.from` | The previous `state_reason` of the issue. Only included when the status change also changed the state reason, for example by closing or reopening the issue, or by changing why it's closed. It's `null` when the issue didn't have a state reason, for example the first time it's closed. |

### Captured values and the current issue

The `status` and `changes` properties describe the change at the time it was saved. The `issue` property, including `issue.status`, describes the issue when the delivery was built, the same as for every other `issues` action. If the issue changes again before then, `issue.status` can differ from `status`. For example, if someone moves an issue from In progress to In review and then quickly to Done, the delivery for the first change can have an `issue.status` of Done.

To find out what a particular change did, use `status` and `changes`. A delayed, retried, or redelivered payload can be stale, so `issue.status` might not be the issue's latest status. For more information, see [Delivery](#delivery), later in this article.

## When `status_changed` is sent

{% data variables.product.github %} sends `status_changed` every time the status of an issue changes, including changes that {% data variables.product.github %} makes when an issue is created, closed, or reopened.

* **Setting a status**: Someone chooses a different status for an issue.
* **Creating an issue**: A new issue gets the Backlog status, unless the person creating it chooses another status. `changes.status.from` is `null`. {% data variables.product.github %} sends `opened` as well as `status_changed`.
* **Setting a first status**: An existing issue without a status gets one. `changes.status.from` is `null`.
* **Closing or reopening an issue**: Closing an issue as completed sets the Done status, closing it as not planned sets Not planned, and closing it as a duplicate sets Duplicate. Reopening an issue without choosing a status sets Backlog. {% data variables.product.github %} sends `closed` or `reopened` as well as `status_changed`.
* **Linking a pull request**: Linking an open pull request to an open issue that has no status, or that has the Backlog or Todo status, moves the issue to In progress. `sender` is the person or app that linked the pull request. If they can't choose a status for the issue, the status doesn't change.

{% data variables.product.github %} doesn't send `status_changed` in these cases:

* The status doesn't change, for example when someone chooses the status that the issue already has.
* The issue is transferred to another repository. The new issue keeps its status, which the `transferred` payload includes in `changes.new_issue.status`.

### Status changes that close or reopen an issue

Statuses in the `completed`, `not_planned`, and `duplicate` categories are for closed issues. Choosing one of these statuses for an open issue closes the issue, and choosing a status in any other category for a closed issue reopens it.

When a status change closes or reopens an issue, {% data variables.product.github %} sends two deliveries: `status_changed`, and `closed` or `reopened`. The two deliveries can arrive in either order.

Changing a closed issue to a status with a different close reason, for example from Done to Not planned, sends `status_changed` with `changes.state_reason` but without `changes.state`. {% data variables.product.github %} also sends another `closed` delivery with the new `state_reason`.

If your integration handles `status_changed` as well as `closed` or `reopened`, make sure it can handle the same change being reported by both deliveries.

## Delivery

{% data variables.product.github %} delivers `status_changed` in the same way as other webhook events. Delivery is best effort. {% data variables.product.github %} doesn't guarantee that each change is delivered exactly once, or that deliveries arrive in the order in which the changes happened.

* **Failed deliveries**: A delivery can fail, for example if your server is unavailable. {% data variables.product.github %} doesn't automatically redeliver failed deliveries, but you can redeliver them. For more information, see [AUTOTITLE](/webhooks/using-webhooks/handling-failed-webhook-deliveries).
* **Repeated deliveries**: You can receive the same delivery more than once, for example when it's redelivered. A redelivery has the same `X-GitHub-Delivery` header as the original delivery, so you can use the header to skip deliveries that you've already processed.
* **Order**: Deliveries can arrive out of order, and delayed, retried, or redelivered payloads can be stale, including `issue.status`. Don't use the order in which deliveries arrive to determine the latest status of an issue.

To get the latest status of an issue, fetch the issue with the REST API. For more information, see [AUTOTITLE](/rest/issues/issues#get-an-issue). In repositories owned by an organization, the response includes `status` for any authenticated request, including requests authenticated as a {% data variables.product.prodname_github_app %} installation and requests that use `GITHUB_TOKEN` in a workflow. During the {% data variables.release-phases.preview %}, in repositories owned by a personal account, the response includes `status` only when the request is made on behalf of a user who has access to the preview. If the response doesn't include `status`, use the status from deliveries with care, because a delivery that arrives later can carry an older status.

## Who can change a status

People with triage access or higher to a repository can choose the status of its issues. Additional permission rules apply to custom roles, apps, workflows, and personal accounts:

* **Custom repository roles**: In repositories owned by an organization, people with a custom role that inherits the Triage, Write, or Maintain role can choose statuses. People with a custom role that inherits the Read role can't choose statuses, even if the role can set issue types.
* **Apps and workflows**: In repositories owned by an organization, {% data variables.product.prodname_github_apps %} with write access for the "Issues" repository permission can also choose statuses, including workflows that use `GITHUB_TOKEN` with the `issues: write` permission.
* **Personal accounts**: During the {% data variables.release-phases.preview %}, in repositories owned by a personal account, only people who have access to the preview can choose statuses.

Choosing a status that closes or reopens an issue also requires permission to close or reopen the issue. Changing why a closed issue is closed, for example from Done to Not planned, requires permission to both close and reopen it.

People who can't choose a status can still change it by closing or reopening an issue. For example, the author of an issue can close and reopen it with read access to the repository, which sets the default status for the new state. These changes also send `status_changed`, and `sender` is the person who closed or reopened the issue.

## Running a workflow when a status changes

To run a {% data variables.product.prodname_actions %} workflow when the status of an issue changes, use the `status_changed` activity type of the `issues` event. The workflow runs whenever an issue's status changes. In the workflow, the following properties of the `github.event` context describe the change.

* `github.event.status` contains the status the issue changed to.
* `github.event.changes.status.from` contains the previous status, or `null` if the issue didn't have one.
* `github.event.issue.status` contains the status of the issue when the payload was built. Payloads for every `issues` activity type include this property.

> [!IMPORTANT]
> {% data reusables.issues.status-changed-workflows-without-types %}

{% data reusables.issues.status-changed-editor-validation %}

For example workflows that match a status by its ID and every status in a category, see [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues).

## Example payloads

The following excerpts show the properties of `status_changed` payloads that describe the change. Full payloads also include the complete `issue`, `repository`, and `sender` objects, and other properties.

### Creating an issue

When someone creates an issue without choosing a status, the issue gets the Backlog status. `changes.status.from` is `null`, and `changes` doesn't include `state` or `state_reason`.

```json
{
  "action": "status_changed",
  "issue": {
    "number": 1347,
    "state": "open",
    "state_reason": null,
    "status": {
      "id": 2,
      "name": "Backlog",
      "category": "backlog"
    }
  },
  "status": {
    "id": 2,
    "name": "Backlog",
    "category": "backlog"
  },
  "changes": {
    "status": {
      "from": null
    }
  }
}
```

### Changing to a status in the same category

Moving an issue from In progress to In review doesn't change its state or its category, so `changes` only includes `status`.

```json
{
  "action": "status_changed",
  "issue": {
    "number": 1347,
    "state": "open",
    "state_reason": null,
    "status": {
      "id": 8,
      "name": "In review",
      "category": "started"
    }
  },
  "status": {
    "id": 8,
    "name": "In review",
    "category": "started"
  },
  "changes": {
    "status": {
      "from": {
        "id": 4,
        "name": "In progress",
        "category": "started"
      }
    }
  }
}
```

### Closing an issue by changing its status

Moving an issue from In review to Done closes the issue. `changes.state.from` is `open`, and `changes.state_reason.from` is `null` because the issue didn't have a state reason before. {% data variables.product.github %} also sends a `closed` delivery for this change.

```json
{
  "action": "status_changed",
  "issue": {
    "number": 1347,
    "state": "closed",
    "state_reason": "completed",
    "status": {
      "id": 5,
      "name": "Done",
      "category": "completed"
    }
  },
  "status": {
    "id": 5,
    "name": "Done",
    "category": "completed"
  },
  "changes": {
    "status": {
      "from": {
        "id": 8,
        "name": "In review",
        "category": "started"
      }
    },
    "state": {
      "from": "open"
    },
    "state_reason": {
      "from": null
    }
  }
}
```
