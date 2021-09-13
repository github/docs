---
title: Events that trigger workflows
intro: 'You can configure your workflows to run when specific activity on {% data variables.product.product_name %} happens, at a scheduled time, or when an event outside of {% data variables.product.product_name %} occurs.'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Events that trigger workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Configuring workflow events

You can configure workflows to run for one or more events using the `on` workflow syntax. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#on)."

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**Note:** You cannot trigger new workflow runs using the `GITHUB_TOKEN`. For more information, see "[Triggering new workflows using a personal access token](#triggering-new-workflows-using-a-personal-access-token)."

{% endnote %}

The following steps occur to trigger a workflow run:

1. An event occurs on your repository, and the resulting event has an associated commit SHA and Git ref.
2. The `.github/workflows` directory in your repository is searched for workflow files at the associated commit SHA or Git ref. The workflow files must be present in that commit SHA or Git ref to be considered.

  For example, if the event occurred on a particular repository branch, then the workflow files must be present in the repository on that branch.
1. The workflow files for that commit SHA and Git ref are inspected, and a new workflow run is triggered for any workflows that have `on:` values that match the triggering event.

  The workflow runs on your repository's code at the same commit SHA and Git ref that triggered the event. When a workflow runs, {% data variables.product.product_name %} sets the `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) environment variables in the runner environment. For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)."

## Scheduled events

The `schedule` event allows you to trigger a workflow at a scheduled time.

{% data reusables.actions.schedule-delay %}

### `schedule`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| n/a | n/a | Last commit on default branch | Default branch | When the scheduled workflow is set to run. A scheduled workflow uses [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). For more information, see "[Triggering a workflow with events](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)." |

{% data reusables.repositories.actions-scheduled-workflow-example %}

Cron syntax has five fields separated by a space, and each field represents a unit of time.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```

You can use these operators in any of the five fields:

| Operator | Description | Example |
| -------- | ----------- | ------- |
| * | Any value | `* * * * *` runs every minute of every day. |
| , | Value list separator | `2,10 4,5 * * *` runs at minute 2 and 10 of the 4th and 5th hour of every day. |
| - | Range of values | `0 4-6 * * *` runs at minute 0 of the 4th, 5th, and 6th hour. |
| / | Step values | `20/15 * * * *` runs every 15 minutes starting from minute 20 through 59 (minutes 20, 35, and 50). |

{% note %}

**Note:** {% data variables.product.prodname_actions %} does not support the non-standard syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly`, and `@reboot`.

{% endnote %}

You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. For more information, please see "[Notifications for workflow runs](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)."

## Manual events

You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event. To trigger more than one workflow in a repository and create custom events and event types, use the `repository_dispatch` event. 

### `workflow_dispatch`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a | Last commit on the `GITHUB_REF` branch | Branch that received dispatch |

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. When the workflow runs, you can access the input values in the `github.event.inputs` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

You can manually trigger a workflow run using the {% data variables.product.product_name %} API and from {% data variables.product.product_name %}. For more information, see "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

 When you trigger the event on {% data variables.product.prodname_dotcom %}, you can provide the `ref` and any `inputs` directly on {% data variables.product.prodname_dotcom %}. For more information, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

 To trigger the custom `workflow_dispatch` webhook event using the REST API, you must send a `POST` request to a {% data variables.product.prodname_dotcom %} API endpoint and provide the `ref` and any required `inputs`. For more information, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)" REST API endpoint.

#### Example

To use the `workflow_dispatch` event, you need to include it as a trigger in your GitHub Actions workflow file. The example below only runs the workflow when it's manually triggered:

```yaml
on: workflow_dispatch
```

#### Example workflow configuration

This example defines the `name` and `home` inputs and prints them using the `github.event.inputs.name` and `github.event.inputs.home` contexts. If a `home` isn't provided, the default value 'The Octoverse' is printed.

{% raw %}
```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Hello ${{ github.event.inputs.name }}!"
          echo "- in ${{ github.event.inputs.home }}!"
```
{% endraw %}

### `repository_dispatch`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a | Last commit on default branch | Default branch |

{% data reusables.github-actions.branch-requirement %}

You can use the {% data variables.product.product_name %} API to trigger a webhook event called [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) when you want to trigger a workflow for activity that happens outside of {% data variables.product.prodname_dotcom %}. For more information, see "[Create a repository dispatch event](/rest/reference/repos#create-a-repository-dispatch-event)."

To trigger the custom `repository_dispatch` webhook event, you must send a `POST` request to a {% data variables.product.product_name %} API endpoint and provide an `event_type` name to describe the activity type. To trigger a workflow run, you must also configure your workflow to use the `repository_dispatch` event.

#### Example

By default, all `event_types` trigger a workflow to run. You can limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload. You define the event types sent in the `repository_dispatch` payload when you create the repository dispatch event.

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

## Webhook events

You can configure your workflow to run when webhook events are generated on {% data variables.product.product_name %}. Some events have more than one activity type that triggers the event. If more than one activity type triggers the event, you can specify which activity types will trigger the workflow to run. For more information, see "[Webhooks](/webhooks)."

Not all webhook events trigger workflows. For the complete list of available webhook events and their payloads, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

### `check_run`

Runs your workflow anytime the `check_run` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check runs](/rest/reference/checks#runs)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a check run has been `rerequested` or `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

Runs your workflow anytime the `check_suite` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check suites](/rest/reference/checks#suites)."

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note:** To prevent recursive workflows, this event does not trigger workflows if the check suite was created by {% data variables.product.prodname_actions %}.

{% endnote %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a check suite has been `rerequested` or `completed`.

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

### `create`

Runs your workflow anytime someone creates a branch or tag, which triggers the `create` event. For information about the REST API, see "[Create a reference](/rest/reference/git#create-a-reference)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/webhooks/event-payloads/#create) | n/a | Last commit on the created branch or tag | Branch or tag created |

For example, you can run a workflow when the `create` event occurs.

```yaml
on:
  create
```

### `delete`

Runs your workflow anytime someone deletes a branch or tag, which triggers the `delete` event. For information about the REST API, see "[Delete a reference](/rest/reference/git#delete-a-reference)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/webhooks/event-payloads/#delete) | n/a | Last commit on default branch | Default branch |

For example, you can run a workflow when the `delete` event occurs.

```yaml
on:
  delete
```

### `deployment`

Runs your workflow anytime someone creates a deployment, which triggers the `deployment` event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "[Deployments](/rest/reference/repos#deployments)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a | Commit to be deployed | Branch or tag to be deployed (empty if commit)|

For example, you can run a workflow when the `deployment` event occurs.

```yaml
on:
  deployment
```

### `deployment_status`

Runs your workflow anytime a third party provides a deployment status, which triggers the `deployment_status` event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "[Create a deployment status](/rest/reference/repos#create-a-deployment-status)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a | Commit to be deployed | Branch or tag to be deployed (empty if commit)|

For example, you can run a workflow when the `deployment_status` event occurs.

```yaml
on:
  deployment_status
```

{% note %}

**Note:** When a deployment status's state is set to `inactive`, a webhook event will not be created.

{% endnote %}

{% ifversion fpt %}
### `discussion`

Runs your workflow anytime the `discussion` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the GraphQL API, see "[Discussions](/graphql/guides/using-the-graphql-api-for-discussions)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/webhooks/event-payloads/#discussion) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a discussion has been `opened`, `edited`, or `answered`.

```yaml
on:
  discussion:
    types: [opened, edited, answered]
```

### `discussion_comment`

Runs your workflow anytime the `discussion_comment` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the GraphQL API, see "[Discussions](/graphql/guides/using-the-graphql-api-for-discussions)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when an issue comment has been `created` or `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```
{% endif %}

### `fork`

Runs your workflow anytime when someone forks a repository, which triggers the `fork` event. For information about the REST API, see "[Create a fork](/rest/reference/repos#create-a-fork)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/webhooks/event-payloads/#fork) | n/a | Last commit on default branch |  Default branch |

For example, you can run a workflow when the `fork` event occurs.

```yaml
on:
  fork
```

### `gollum`

Runs your workflow when someone creates or updates a Wiki page, which triggers the `gollum` event.

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a | Last commit on default branch |  Default branch |

For example, you can run a workflow when the `gollum` event occurs.

```yaml
on:
  gollum
```

### `issue_comment`

Runs your workflow anytime the `issue_comment` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issue comments](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when an issue comment has been `created` or `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

The `issue_comment` event occurs for comments on both issues and pull requests. To determine whether the `issue_comment` event was triggered from an issue or pull request, you can check the event payload for the `issue.pull_request` property and use it as a condition to skip a job.

For example, you can choose to run the `pr_commented` job when comment events occur in a pull request, and the `issue_commented` job when comment events occur in an issue.

{% raw %}
```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on PR #${{ github.event.issue.number }}"

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
```
{% endraw %}

### `issues`

Runs your workflow anytime the `issues` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issues](/rest/reference/issues)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when an issue has been `opened`, `edited`, or `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

Runs your workflow anytime the `label` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see  "[Labels](/rest/reference/issues#labels)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a label has been `created` or `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

### `milestone`

Runs your workflow anytime the `milestone` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Milestones](/rest/reference/issues#milestones)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a milestone has been `opened` or `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

Runs your workflow anytime someone pushes to a {% data variables.product.product_name %} Pages-enabled branch, which triggers the `page_build` event. For information about the REST API, see "[Pages](/rest/reference/repos#pages)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a | Last commit on default branch | n/a |

For example, you can run a workflow when the `page_build` event occurs.

```yaml
on:
  page_build
```

### `project`

Runs your workflow anytime the `project` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Projects](/rest/reference/projects)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project has been `created` or `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

Runs your workflow anytime the `project_card` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project cards](/rest/reference/projects#cards)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project card has been `opened` or `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

Runs your workflow anytime the `project_column` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project columns](/rest/reference/projects#columns)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project column has been `created` or `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

Runs your workflow anytime someone makes a private repository public, which triggers the `public` event. For information about the REST API, see "[Edit repositories](/rest/reference/repos#edit)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/webhooks/event-payloads/#public) | n/a | Last commit on default branch |  Default branch |

For example, you can run a workflow when the `public` event occurs.

```yaml
on:
  public
```

### `pull_request`

Runs your workflow anytime the `pull_request` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull requests](/rest/reference/pulls)."

{% note %}

**Notes:** 
- By default, a workflow only runs when a `pull_request`'s activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows for more activity types, use the `types` keyword.
- Workflows will not run on `pull_request` activity if the pull request has a merge conflict. The merge conflict must be resolved first.

{% endnote %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed`{% ifversion fpt or ghes > 3.0 or ghae %} <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled`{% endif %} | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

You extend or limit the default activity types using the `types` keyword. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)."

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review`

Runs your workflow anytime the `pull_request_review` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull request reviews](/rest/reference/pulls#reviews)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a pull request review has been `edited` or `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the `pull_request_review_comment` event. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see [Review comments](/rest/reference/pulls#comments).

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a pull request review comment has been `created` or `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

{% ifversion fpt or ghes > 2.22 or ghae %}

### `pull_request_target`

This event runs in the context of the base of the pull request, rather than in the merge commit as the `pull_request` event does.  This prevents executing unsafe workflow code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows you to do things like create workflows that label and comment on pull requests based on the contents of the event payload.

{% warning %}

**Warning:** The `pull_request_target` event is granted a read/write repository token and can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Additionally, any caches share the same scope as the base branch, and to help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. For more information, see "[Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" on the GitHub Security Lab website.

{% endwarning %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_target`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed`{% ifversion fpt or ghes > 3.0 or ghae %} <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled`{% endif %} | Last commit on the PR base branch | PR base branch |

By default, a workflow only runs when a `pull_request_target`'s activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows for more activity types, use the `types` keyword. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)."

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

{% endif %}

### `push`

{% note %}

**Note:** The webhook payload available to GitHub Actions does not include the `added`, `removed`, and `modified` attributes in the `commit` object. You can retrieve the full commit object using the REST API. For more information, see "[Get a commit](/rest/reference/repos#get-a-commit)".

{% endnote %}

Runs your workflow when someone pushes to a repository branch, which triggers the `push` event.

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/webhooks/event-payloads/#push) | n/a | Commit pushed, unless deleting a branch (when it's the default branch) | Updated ref |

For example, you can run a workflow when the `push` event occurs.

```yaml
on:
  push
```

### `registry_package`

Runs your workflow anytime a package is `published` or `updated`. For more information, see "[Managing packages with {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | Commit of the published package | Branch or tag of the published package |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a package has been `published`.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

{% note %}

**Note:** The `release` event is not triggered for draft releases.

{% endnote %}

Runs your workflow anytime the `release` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Releases](/rest/reference/repos#releases)."

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Last commit in the tagged release | Tag of release |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a release has been `published`.

```yaml
on:
  release:
    types: [published]
```

{% note %}

**Note:** The `prereleased` type will not trigger for pre-releases published from draft releases, but the `published` type will trigger. If you want a workflow to run when stable *and* pre-releases publish, subscribe to `published` instead of `released` and `prereleased`.

{% endnote %}

### `status`

Runs your workflow anytime the status of a Git commit changes, which triggers the `status` event. For information about the REST API, see [Statuses](/rest/reference/repos#statuses).

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/webhooks/event-payloads/#status) | n/a | Last commit on default branch | n/a |

For example, you can run a workflow when the `status` event occurs.

```yaml
on:
  status
```

### `watch`

Runs your workflow anytime the `watch` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Starring](/rest/reference/activity#starring)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/webhooks/event-payloads/#watch) | - `started` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when someone stars a repository, which is the `started` activity type that triggers the watch event.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 2.22 or ghae %}

### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - `completed`<br/>- `requested` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

If you need to filter branches from this event, you can use `branches` or `branches-ignore`.

In this example, a workflow is configured to run after the separate "Run Tests" workflow completes.

```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```

{% endif %}

To run a workflow job conditionally based on the result of the previous workflow run, you can use the [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) or [`jobs.<job_id>.steps[*].if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) conditional combined with the `conclusion` of the previous run. For example:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      ...
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      ...
```

## Triggering new workflows using a personal access token

{% data reusables.github-actions.actions-do-not-trigger-workflows %} For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."

If you would like to trigger a workflow from a workflow run, you can trigger the event using a personal access token. You'll need to create a personal access token and store it as a secret. To minimize your {% data variables.product.prodname_actions %} usage costs, ensure that you don't create recursive or unintended workflow runs. For more information on storing a personal access token as a secret, see "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."
