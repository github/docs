---
title: Events that trigger workflows
intro: 'You can configure your workflows to run when specific activity on {% data variables.product.product_name %} happens, at a scheduled time, or when an event outside of {% data variables.product.product_name %} occurs.'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configuring workflow events

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

### Scheduled events

The `schedule` event allows you to trigger a workflow at a scheduled time.

#### `расписание`

| Webhook event payload | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`                                                                                                                                                                                                                                                                                                                           |
| --------------------- | -------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                   | n/a            | Last commit on default branch | Default branch | When the scheduled workflow is set to run. A scheduled workflow uses [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). For more information, see "[Triggering a workflow with events](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)." |

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

| Operator | Description          | Пример                                                                                             |
| -------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| *        | Any value            | `* * * * *` runs every minute of every day.                                                        |
| ,        | Value list separator | `2,10 4,5 * * *` runs at minute 2 and 10 of the 4th and 5th hour of every day.                     |
| -        | Range of values      | `0 4-6 * * *` runs at minute 0 of the 4th, 5th, and 6th hour.                                      |
| /        | Step values          | `20/15 * * * *` runs every 15 minutes starting from minute 20 through 59 (minutes 20, 35, and 50). |

{% note %}

**Note:** {% data variables.product.prodname_actions %} does not support the non-standard syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly`, and `@reboot`.

{% endnote %}

You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

### Manual events

You can manually trigger workflow runs. To trigger specific workflows in a repository, use the `workflow_dispatch` event. To trigger more than one workflow in a repository and create custom events and event types, use the `repository_dispatch` event.

#### `workflow_dispatch`

| Webhook event payload                                            | Activity types | `GITHUB_SHA`                           | `GITHUB_REF`                  |
| ---------------------------------------------------------------- | -------------- | -------------------------------------- | ----------------------------- |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a            | Last commit on the `GITHUB_REF` branch | Branch that received dispatch |

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. When the workflow runs, you can access the input values in the `github.event.inputs` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

You can manually trigger a workflow run using the {% data variables.product.product_name %} API and from {% data variables.product.product_name %}. For more information, see "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

 When you trigger the event on {% data variables.product.prodname_dotcom %}, you can provide the `ref` and any `inputs` directly on {% data variables.product.prodname_dotcom %}. For more information, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

 To trigger the custom `workflow_dispatch` webhook event using the REST API, you must send a `POST` request to a {% data variables.product.prodname_dotcom %} API endpoint and provide the `ref` and any required `inputs`. For more information, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)" REST API endpoint.

##### Пример

To use the `workflow_dispatch` event, you need to include it as a trigger in your GitHub Actions workflow file. The example below only runs the workflow when it's manually triggered:

```yaml
on: workflow_dispatch
```

##### Example workflow configuration

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

#### `repository_dispatch`

| Webhook event payload                                                | Activity types | `GITHUB_SHA`                           | `GITHUB_REF`                  |
| -------------------------------------------------------------------- | -------------- | -------------------------------------- | ----------------------------- |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a            | Last commit on the `GITHUB_REF` branch | Branch that received dispatch |

{% data reusables.github-actions.branch-requirement %}

You can use the {% data variables.product.product_name %} API to trigger a webhook event called [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) when you want to trigger a workflow for activity that happens outside of {% data variables.product.prodname_dotcom %}. For more information, see "[Create a repository dispatch event](/v3/repos/#create-a-repository-dispatch-event)."

To trigger the custom `repository_dispatch` webhook event, you must send a `POST` request to a {% data variables.product.product_name %} API endpoint and provide an `event_type` name to describe the activity type. To trigger a workflow run, you must also configure your workflow to use the `repository_dispatch` event.

##### Пример

By default, all `event_types` trigger a workflow to run. You can limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload. You define the event types sent in the `repository_dispatch` payload when you create the repository dispatch event.

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

### Webhook events

You can configure your workflow to run when webhook events are created on {% data variables.product.product_name %}. Some events have more than one activity type that triggers the event. If more than one activity type triggers the event, you can specify which activity types will trigger the workflow to run. For more information, see "[Webhooks](/webhooks)."

#### `check_run`

Runs your workflow anytime the `check_run` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check runs](/v3/checks/runs/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                              | Activity types                                                                               | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a check run has been `rerequested` or `requested_action`.

```yaml
on:
  check_run:
    types: [rerequested, requested_action]
```

#### `check_suite`

Runs your workflow anytime the `check_suite` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Check suites](/v3/checks/suites/)."

{% data reusables.github-actions.branch-requirement %}

{% note %}

**Note:** To prevent recursive workflows, this event does not trigger workflows if the check suite was created by {% data variables.product.prodname_actions %}.

{% endnote %}

| Webhook event payload                                  | Activity types                                                             | `GITHUB_SHA`                  | `GITHUB_REF`   |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a check suite has been `rerequested` or `completed`.

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

#### `create`

Runs your workflow anytime someone creates a branch or tag, which triggers the `create` event. For information about the REST API, see "[Create a reference](/v3/git/refs/#create-a-reference)."

| Webhook event payload                        | Activity types | `GITHUB_SHA`                             | `GITHUB_REF`          |
| -------------------------------------------- | -------------- | ---------------------------------------- | --------------------- |
| [`create`](/webhooks/event-payloads/#create) | n/a            | Last commit on the created branch or tag | Branch or tag created |

For example, you can run a workflow when the `create` event occurs.

```yaml
on:
  create
```

#### `delete - Удалить`

Runs your workflow anytime someone deletes a branch or tag, which triggers the `delete` event. For information about the REST API, see "[Delete a reference](/v3/git/refs/#delete-a-reference)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                  | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| ------------------------------------------------------ | -------------- | ----------------------------- | -------------- |
| [`delete - Удалить`](/webhooks/event-payloads/#delete) | n/a            | Last commit on default branch | Default branch |

For example, you can run a workflow when the `delete` event occurs.

```yaml
on:
  delete
```

#### `deployment`

Runs your workflow anytime someone creates a deployment, which triggers the `deployment` event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "[Deployments](/v3/repos/deployments/)."

| Webhook event payload                                | Activity types | `GITHUB_SHA`          | `GITHUB_REF`                                   |
| ---------------------------------------------------- | -------------- | --------------------- | ---------------------------------------------- |
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a            | Commit to be deployed | Branch or tag to be deployed (empty if commit) |

For example, you can run a workflow when the `deployment` event occurs.

```yaml
on:
  deployment
```

#### `deployment_status`

Runs your workflow anytime a third party provides a deployment status, which triggers the `deployment_status` event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "[Create a deployment status](/v3/repos/deployments/#create-a-deployment-status)."

| Webhook event payload                                              | Activity types | `GITHUB_SHA`          | `GITHUB_REF`                                   |
| ------------------------------------------------------------------ | -------------- | --------------------- | ---------------------------------------------- |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a            | Commit to be deployed | Branch or tag to be deployed (empty if commit) |

For example, you can run a workflow when the `deployment_status` event occurs.

```yaml
on:
  deployment_status
```

#### `ветвление`

Runs your workflow anytime when someone forks a repository, which triggers the `fork` event. For information about the REST API, see "[Create a fork](/v3/repos/forks/#create-a-fork)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                         | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| --------------------------------------------- | -------------- | ----------------------------- | -------------- |
| [`ветвление`](/webhooks/event-payloads/#fork) | n/a            | Last commit on default branch | Default branch |

For example, you can run a workflow when the `fork` event occurs.

```yaml
on:
  fork
```

#### `gollum`

Runs your workflow when someone creates or updates a Wiki page, which triggers the `gollum` event.

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                        | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------- | -------------- | ----------------------------- | -------------- |
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a            | Last commit on default branch | Default branch |

For example, you can run a workflow when the `gollum` event occurs.

```yaml
on:
  gollum
```

#### `issue_comment`

Runs your workflow anytime the `issue_comment` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issue comments](/v3/issues/comments/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                     | Activity types                                                    | `GITHUB_SHA`                  | `GITHUB_REF`   |
| --------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------- | -------------- |
| [`issue_comment`](/rest/reference/activity#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

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

  issue-commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
```
{% endraw %}

#### `issues`

Runs your workflow anytime the `issues` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Issues](/v3/issues)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                        | Activity types                                                                                                                                                                                                                                                                                                                                                         | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`issues`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when an issue has been `opened`, `edited`, or `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `метка`

Runs your workflow anytime the `label` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see  "[Labels](/v3/issues/labels/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                      | Activity types                                                    | `GITHUB_SHA`                  | `GITHUB_REF`   |
| ------------------------------------------ | ----------------------------------------------------------------- | ----------------------------- | -------------- |
| [`метка`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a label has been `created` or `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

#### `контрольная точка`

Runs your workflow anytime the `milestone` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Milestones](/v3/issues/milestones/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                      | Activity types                                                                                              | `GITHUB_SHA`                  | `GITHUB_REF`   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`контрольная точка`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a milestone has been `opened` or `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

#### `page_build`

Runs your workflow anytime someone pushes to a {% data variables.product.product_name %} Pages-enabled branch, which triggers the `page_build` event. For information about the REST API, see "[Edit repositories](/v3/repos/#edit)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                | Activity types | `GITHUB_SHA`                  | `GITHUB_REF` |
| ---------------------------------------------------- | -------------- | ----------------------------- | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a            | Last commit on default branch | n/a          |

For example, you can run a workflow when the `page_build` event occurs.

```yaml
on:
  page_build
```

#### `проект`

Runs your workflow anytime the `project` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Projects](/v3/projects/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                         | Activity types                                                                                                                      | `GITHUB_SHA`                  | `GITHUB_REF`   |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`проект`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project has been `created` or `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

#### `project_card`

Runs your workflow anytime the `project_card` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project cards](/v3/projects/cards)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                    | Activity types                                                                                                 | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project card has been `opened` or `deleted`.

```yaml
on:
  project_card:
    types: [opened, deleted]
```

#### `project_column`

Runs your workflow anytime the `project_column` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Project columns](/v3/projects/columns)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                                        | Activity types                                                              | `GITHUB_SHA`                  | `GITHUB_REF`   |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | ----------------------------- | -------------- |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a project column has been `created` or `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

#### `public`

Runs your workflow anytime someone makes a private repository public, which triggers the `public` event. For information about the REST API, see "[Edit repositories](/v3/repos/#edit)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                        | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------- | -------------- | ----------------------------- | -------------- |
| [`public`](/webhooks/event-payloads/#public) | n/a            | Last commit on default branch | Default branch |

For example, you can run a workflow when the `public` event occurs.

```yaml
on:
  public
```

#### `pull_request`

Runs your workflow anytime the `pull_request` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull requests](/v3/pulls)."

{% note %}

**Note:** By default, a workflow only runs when a `pull_request`'s activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows for more activity types, use the `types` keyword.

{% endnote %}

| Webhook event payload                                    | Activity types                                                                                                                                                                                                                                                                                                                                       | `GITHUB_SHA`                                 | `GITHUB_REF`                                |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

You extend or limit the default activity types using the `types` keyword. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)."

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review`

Runs your workflow anytime the `pull_request_review` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Pull request reviews](/v3/pulls/reviews)."

| Webhook event payload                                                  | Activity types                                             | `GITHUB_SHA`                                 | `GITHUB_REF`                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a pull request review has been `edited` or `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review_comment`

Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the `pull_request_review_comment` event. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see [Review comments](/v3/pulls/comments).

| Webhook event payload                                                                  | Activity types                                         | `GITHUB_SHA`                                 | `GITHUB_REF`                                |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- | ------------------------------------------- |
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a pull request review comment has been `created` or `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_target`

This event is similar to `pull_request`, except that it runs in the context of the base repository of the pull request, rather than in the merge commit. This means that you can more safely make your secrets available to the workflows triggered by the pull request, because only workflows defined in the commit on the base repository are run. For example, this event allows you to create workflows that label and comment on pull requests, based on the contents of the event payload.

| Webhook event payload                                    | Activity types                                                                                                                                                                                                                                                                                                                                       | `GITHUB_SHA`                      | `GITHUB_REF`   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | Last commit on the PR base branch | PR base branch |

By default, a workflow only runs when a `pull_request_target`'s activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows for more activity types, use the `types` keyword. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#onevent_nametypes)."

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on: pull_request_target
    types: [assigned, opened, synchronize, reopened]
```

#### `отправка`

{% note %}

**Note:** The webhook payload available to GitHub Actions does not include the `added`, `removed`, and `modified` attributes in the `commit` object. You can retrieve the full commit object using the REST API. For more information, see "[Get a single commit](/v3/repos/commits/#get-a-single-commit)"".

{% endnote %}

Runs your workflow when someone pushes to a repository branch, which triggers the `push` event.

| Webhook event payload                        | Activity types | `GITHUB_SHA`                                                           | `GITHUB_REF` |
| -------------------------------------------- | -------------- | ---------------------------------------------------------------------- | ------------ |
| [`отправка`](/webhooks/event-payloads/#push) | n/a            | Commit pushed, unless deleting a branch (when it's the default branch) | Updated ref  |

For example, you can run a workflow when the `push` event occurs.

```yaml
on:
  push
```

#### `registry_package`

Runs your workflow anytime a package is `published` or `updated`. For more information, see "[Managing packages with {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)."

| Webhook event payload                                   | Activity types                      | `GITHUB_SHA`                    | `GITHUB_REF`                           |
| ------------------------------------------------------- | ----------------------------------- | ------------------------------- | -------------------------------------- |
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | Commit of the published package | Branch or tag of the published package |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a package has been `published`.

```yaml
on:
  registry_package:
    types: [published]
```

#### `версия`

{% note %}

**Note:** The `release` event is not triggered for draft releases.

{% endnote %}

Runs your workflow anytime the `release` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Releases](/v3/repos/releases/)."

| Webhook event payload                         | Activity types                                                                                                                                                  | `GITHUB_SHA`                      | `GITHUB_REF`   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| [`версия`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Last commit in the tagged release | Tag of release |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when a release has been `published`.

```yaml
on:
  release:
    types: [published]
```

#### `состояние`

Runs your workflow anytime the status of a Git commit changes, which triggers the `status` event. For information about the REST API, see [Statuses](/v3/repos/statuses/).

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                           | Activity types | `GITHUB_SHA`                  | `GITHUB_REF` |
| ----------------------------------------------- | -------------- | ----------------------------- | ------------ |
| [`состояние`](/webhooks/event-payloads/#status) | n/a            | Last commit on default branch | n/a          |

For example, you can run a workflow when the `status` event occurs.

```yaml
on:
  status
```

#### `слежение`

Runs your workflow anytime the `watch` event occurs. {% data reusables.developer-site.multiple_activity_types %} For information about the REST API, see "[Starring](/v3/activity/starring/)."

{% data reusables.github-actions.branch-requirement %}

| Webhook event payload                         | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| --------------------------------------------- | -------------- | ----------------------------- | -------------- |
| [`слежение`](/webhooks/event-payloads/#watch) | - `started`    | Last commit on default branch | Default branch |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

For example, you can run a workflow when someone stars a repository, which is the `started` activity type that triggers the watch event.

```yaml
on:
  watch:
    types: [started]
```

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

| Webhook event payload                                    | Activity types | `GITHUB_SHA`                  | `GITHUB_REF`   |
| -------------------------------------------------------- | -------------- | ----------------------------- | -------------- |
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - n/a          | Last commit on default branch | Default branch |

If you need to filter branches from this event, you can use `branches` or `branches-ignore`.

In this example, a workflow is configured to run after the separate “Run Tests” workflow completes.

```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```

### Triggering new workflows using a personal access token

{% data reusables.github-actions.actions-do-not-trigger-workflows %} For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."

If you would like to trigger a workflow from a workflow run, you can trigger the event using a personal access token. You'll need to create a personal access token and store it as a secret. To minimize your {% data variables.product.prodname_actions %} usage costs, ensure that you don't create recursive or unintended workflow runs. For more information, see "[Creating and storing encrypted secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)."
