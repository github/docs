---
title: 触发工作流程的事件
intro: '您可以配置工作流程在 {% data variables.product.product_name %} 上发生特定活动时运行、在预定的时间运行，或者在 {% data variables.product.product_name %} 外部的事件发生时运行。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 触发工作流程的事件
---

## About events that trigger workflows

Workflow triggers are events that cause a workflow to run. For more information about how to use workflow triggers, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow)."

## Available events

Some events have multiple activity types. For these events, you can specify which activity types will trigger a workflow run. For more information about what each activity type means, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)." Note that not all webhook events trigger workflows.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4968  %}
### `branch_protection_rule`

| Web 挂钩事件有效负载                                                                                                            | 活动类型                                                   | `GITHUB_SHA` | `GITHUB_REF` |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ | ------------ |
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when branch protection rules in the workflow repository are changed. 有关分支保护规则的更多信息，请参阅“[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。 For information about the branch protection rule APIs, see "[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)" in the GraphQL API documentation or "[Branches](/rest/reference/branches)" in the REST API documentation.

For example, you can run a workflow when a branch protection rule has been `created` or `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| Web 挂钩事件有效负载                                                                                   | 活动类型                                                                                        | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when activity related to a check run occurs. 检查运行是检查套件中的单个测试。 For information, see "[Getting started with the Checks API](/rest/guides/getting-started-with-the-checks-api)." For information about the check run APIs, see "[CheckRun](/graphql/reference/objects#checkrun)" in the GraphQL API documentation or "[Checks](/rest/reference/checks#runs)" in the REST API documentation.

例如，您可以在检查运行为 `rerequested` 或 `completed` 时运行工作流程。

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| Web 挂钩事件有效负载                                                                                       | 活动类型          | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------------------------------------------------- | ------------- | ------------ | ------------ |
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)." Although only the `started` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意：**为防止递归工作流程，如果检查套件是由 {% data variables.product.prodname_actions %} 创建的，则此事件不会触发工作流程。

{% endnote %}

Runs your workflow when check suite activity occurs. A check suite is a collection of the check runs created for a specific commit. Check suites summarize the status and conclusion of the check runs that are in the suite. For information, see "[Getting started with the Checks API](/rest/guides/getting-started-with-the-checks-api)." For information about the check suite APIs, see "[CheckSuite](/graphql/reference/objects#checksuite)" in the GraphQL API documentation or "[Checks](/rest/reference/checks#suites)" in the REST API documentation.

For example, you can run a workflow when a check suite has been `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| Web 挂钩事件有效负载                                                                             | 活动类型 | `GITHUB_SHA`   | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ---- | -------------- | ------------ |
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | n/a  | 创建的分支或标记上的最新提交 | 创建的分支或标记     |

{% note %}

**Note**: An event will not be created when you create more than three tags at once.

{% endnote %}

Runs your workflow when someone creates a Git reference (Git branch or tag) in the workflow's repository. For information about the APIs to create a Git reference, see "[createRef](/graphql/reference/mutations#createref)" in the GraphQL API documentation or "[Create a reference](/rest/reference/git#create-a-reference)" in the REST API documentation.

例如，您可以在发生 `create` 事件时运行工作流程。

```yaml
on:
  create
```

### `delete`

| Web 挂钩事件有效负载                                                                             | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | n/a  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: An event will not be created when you delete more than three tags at once.

{% endnote %}

Runs your workflow when someone deletes a Git reference (Git branch or tag) in the workflow's repository. For information about the APIs to delete a Git reference, see "[deleteRef](/graphql/reference/mutations#deleteref)" in the GraphQL API documentation or "[Delete a reference](/rest/reference/git#delete-a-reference)" in the REST API documentation.

例如，您可以在发生 `delete` 事件时运行工作流程。

```yaml
on:
  delete
```

### `deployment`

| Web 挂钩事件有效负载                                                                                     | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`                                                      |
| ------------------------------------------------------------------------------------------------ | ---- | ------------ | ----------------------------------------------------------------- |
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | n/a  | 要部署的提交       | Branch or tag to be deployed (empty if created with a commit SHA) |

Runs your workflow when someone creates a deployment in the workflow's repository. 使用提交 SHA 创建的部署可能没有 Git 引用。 For information about the APIs to create a deployment, see "[createDeployment](/graphql/reference/mutations#createdeployment)" in the GraphQL API documentation or "[Deployments](/rest/reference/repos#deployments)" in the REST API documentation.

例如，您可以在发生 `deployment` 事件时运行工作流程。

```yaml
on:
  deployment
```

### `deployment_status`

| Web 挂钩事件有效负载                                                                                                   | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`     |
| -------------------------------------------------------------------------------------------------------------- | ---- | ------------ | ---------------- |
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | n/a  | 要部署的提交       | 要部署的分支或标记（提交时为空） |

{% note %}

**Note:** When a deployment status's state is set to `inactive`, a workflow run will not be triggered.

{% endnote %}

Runs your workflow when a third party provides a deployment status. 使用提交 SHA 创建的部署可能没有 Git 引用。 For information about the APIs to create a deployment status, see "[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)" in the GraphQL API documentation or "[Create a deployment status](/rest/reference/deployments#create-a-deployment-status)" in the REST API documentation.

例如，您可以在发生 `deployment_status` 事件时运行工作流程。

```yaml
on:
  deployment_status
```

{% ifversion fpt or ghec %}
### `讨论`

| Web 挂钩事件有效负载                                                                             | 活动类型                                                                                                                                                                                                                                                                                                    | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`讨论`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a discussion in the workflow's repository is created or modified. For activity related to comments on a discussion, use the [`discussion_comment`](#discussion_comment) event. For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[Discussion](/graphql/reference/objects#discussion)."

例如，您可以在讨论为 `created`、`edited` 或 `answered` 时运行工作流程。

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| Web 挂钩事件有效负载                                                                                           | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------ | ------------ |
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a comment on a discussion in the workflow's repository is created or modified. For activity related to a discussion as opposed to comments on the discussion, use the [`discussion`](#discussion) event. For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[Discussion](/graphql/reference/objects#discussion)."

For example, you can run a workflow when a discussion comment has been `created` or `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `复刻`

| Web 挂钩事件有效负载                                                                       | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [`复刻`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | n/a  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone forks a repository. 有关 REST API 的信息，请参阅“[创建复刻](/rest/reference/repos#create-a-fork)”。

例如，您可以在发生 `fork` 事件时运行工作流程。

```yaml
on:
  fork
```

### `gollum`

| Web 挂钩事件有效负载                                                                             | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | n/a  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone creates or updates a Wiki page. 更多信息请参阅“[关于 wiki](/communities/documenting-your-project-with-wikis/about-wikis)”。

例如，您可以在发生 `gollum` 事件时运行工作流程。

```yaml
on:
  gollum
```

### `issue_comment`

| Web 挂钩事件有效负载                                                                                 | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when an issue or pull request comment is created, edited, or deleted. For information about the issue comment APIs, see "[IssueComment](/graphql/reference/objects#issuecomment)" in the GraphQL API documentation or "[Issue comments](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)" in the REST API documentation.

For example, you can run a workflow when an issue or pull request comment has been `created` or `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` on issues only or pull requests only

`issue_comment` 事件在评论问题和拉取请求时发生。 You can use the `github.event.issue.pull_request` property in a conditional to take different action depending on whether the triggering object was an issue or pull request.

For example, this workflow will run the `pr_commented` job only if the `issue_comment` event originated from a pull request. It will run the `issue_commented` job only if the `issue_comment` event originated from an issue.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `议题`

| Web 挂钩事件有效负载                                                                         | 活动类型                                                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`议题`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when an issue in the workflow's repository is created or modified. For activity related to comments in an issue, use the [`issue_comment`](#issue_comment) event. 有关议题的更多信息，请参阅“[关于议题](/issues/tracking-your-work-with-issues/about-issues)”。 For information about the issue APIs, see "[Issue](/graphql/reference/objects#issue)" in the GraphQL API documentation or "[Issues](/rest/reference/issues)" in the REST API documentation.

例如，您可以在议题为 `opened`、`edited` 或 `milestoned` 时运行工作流程。

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `标签`

| Web 挂钩事件有效负载                                                                        | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| [`标签`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when a label in your workflow's repository is created or modified. For more information about labels, see "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)." For information about the label APIs, see "[Label](/graphql/reference/objects#label)" in the GraphQL API documentation or "[Labels](/rest/reference/issues#labels)" in the REST API documentation.

If you want to run your workflow when a label is added to or removed from an issue, pull request, or discussion, use the `labeled` or `unlabeled` activity types for the [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target), or [`discussion`](#discussion) events instead.

例如，您可以在标签为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  label:
    types: [created, deleted]
```

### `里程碑`

| Web 挂钩事件有效负载                                                                             | 活动类型                                                                                                        | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`里程碑`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when a milestone in the workflow's repository is created or modified. For more information about milestones, see "[About milestones](/issues/using-labels-and-milestones-to-track-work/about-milestones)." For information about the milestone APIs, see "[Milestone](/graphql/reference/objects#milestone)" in the GraphQL API documentation or "[Milestones](/rest/reference/issues#milestones)" in the REST API documentation.

If you want to run your workflow when an issue is added to or removed from a milestone, use the `milestoned` or `demilestoned` activity types for the [`issues`](#issues) event instead.

例如，您可以在里程碑为 `opened` 或 `deleted` 时运行工作流程。

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| Web 挂钩事件有效负载                                                                                     | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------ | ---- | ------------ | ------------ |
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | n/a  | 默认分支上的最新提交   | n/a          |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone pushes to a branch that is the publishing source for {% data variables.product.prodname_pages %}, if {% data variables.product.prodname_pages %} is enabled for the repository. For more information about {% data variables.product.prodname_pages %} publishing sources, see "[Configuring a publishing source for your GitHub Pages site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)." 有关 REST API 的信息，请参阅“[页面](/rest/reference/repos#pages)”。

例如，您可以在发生 `page_build` 事件时运行工作流程。

```yaml
on:
  page_build
```

### `project`

| Web 挂钩事件有效负载                                                                               | 活动类型                                                                                                          | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `edited` activity type refers to when a project board, not a column or card on the project board, is edited. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Runs your workflow when a project board is created or modified. For activity related to cards or columns in a project board, use the [`project_card`](#project_card) or [`project_column`](#project_column) events instead. For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project board APIs, see "[Project](/graphql/reference/objects#project)" in the GraphQL API documentation or "[Projects](/rest/reference/projects)" in the REST API documentation.

例如，您可以在项目为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| Web 挂钩事件有效负载                                                                                         | 活动类型                                                                                                           | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Runs your workflow when a card on a project board is created or modified. For activity related to project boards or columns in a project board, use the [`project`](#project) or [`project_column`](#project_column) event instead. For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project card APIs, see "[ProjectCard](/graphql/reference/objects#projectcard)" in the GraphQL API documentation or "[Project cards](/rest/reference/projects#cards)" in the REST API documentation.

For example, you can run a workflow when a project card has been `created` or `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| Web 挂钩事件有效负载                                                                                             | 活动类型                                                                        | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------ | ------------ |
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for projects (beta). For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

{% endnote %}
{% endif %}

Runs your workflow when a column on a project board is created or modified. For activity related to project boards or cards in a project board, use the [`project`](#project) or [`project_card`](#project_card) event instead. For more information about project boards, see "[About project boards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project column APIs, see "[Project Column](/graphql/reference/objects#projectcolumn)" in the GraphQL API documentation or "[Project columns](/rest/reference/projects#columns)" in the REST API documentation.

例如，您可以在项目列为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| Web 挂钩事件有效负载                                                                             | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | n/a  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.actions.branch-requirement %}

Runs your workflow when your workflow's repository changes from private to public. 有关 REST API 的信息，请参阅“[编辑仓库](/rest/reference/repos#edit)”。

例如，您可以在发生 `public` 事件时运行工作流程。

```yaml
on:
  public
```

### `pull_request`

| Web 挂钩事件有效负载                                                                                         | 活动类型                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `GITHUB_SHA`            | `GITHUB_REF`                        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------- |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)." By default, a workflow only runs when a `pull_request` event's activity type is `opened`, `synchronize`, or `reopened`. You can specify different activity types using the `types` keyword. 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

{% endnote %}

{% note %}

**Note:** By default, only the `opened`, `synchronize`, and `reopened` activity types trigger workflows that run on the `pull_request` event. To trigger workflows by different activity types, use the `types` keyword.

{% endnote %}

{% note %}

**Note:** Workflows will not run on `pull_request` activity if the pull request has a merge conflict. 必须先解决合并冲突。

Conversely, workflows with the `pull_request_target` event will run even if the pull request has a merge conflict. Before using the `pull_request_target` trigger, you should be aware of the security risks. For more information, see [`pull_request_target`](#pull_request_target).

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated. For activity related to pull request reviews, pull request review comments, or pull request comments, use the [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment), or [`issue_comment`](#issue_comment) events instead. For information about the pull request APIs, see "[PullRequest](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull requests](/rest/reference/pulls)" in the REST API documentation.

Note that `GITHUB_SHA` for this event is the last merge commit of the pull request merge branch. If you want to get the commit ID for the last commit to the head branch of the pull request, use `github.event.pull_request.head.sha` instead.

For example, you can run a workflow when a pull request has been opened or reopened.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

You can use the event context to further control when jobs in your workflow will run. For example, this workflow will run when a review is requested on a pull request, but the `specific_review_requested` job will only run when a review by `octo-team` is requested.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### Running your workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”。

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Running your workflow based on files changed in a pull request

You can also configure your workflow to run when a pull request changes specific files. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Running your workflow when a pull request merges

When a pull request merges, the pull request is automatically closed. To run a workflow when a pull request merges, use the `pull_request` `closed` event type along with a conditional that checks the `merged` value of the event. For example, the following workflow will run whenever a pull request closes. The `if_merged` job will only run if the pull request was also merged.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (use `issue_comment`)

To run your workflow when a comment on a pull request (not on a pull request's diff) is created, edited, or deleted, use the [`issue_comment`](#issue_comment) event. For activity related to pull request reviews or pull request review comments, use the [`pull_request_review`](#pull_request_review) or [`pull_request_review_comment`](#pull_request_review_comment) events.

### `pull_request_review`

| Web 挂钩事件有效负载                                                                                                       | 活动类型                                                       | `GITHUB_SHA`            | `GITHUB_REF`                        |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ----------------------- | ----------------------------------- |
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review is submitted, edited, or dismissed. A pull request review is a group of pull request review comments in addition to a body comment and a state. For activity related to pull request review comments or pull request comments, use the [`pull_request_review_comment`](#pull_request_review_comment) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review APIs, see "[PullRequestReview](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[Pull request reviews](/rest/reference/pulls#reviews)" in the REST API documentation.

例如，您可以在拉取请求审查为 `edited` 或 `dismissed` 时运行工作流程。

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### Running a workflow when a pull request is approved

To run your workflow when a pull request has been approved, you can trigger your workflow with the `submitted` type of `pull_request_review` event, then check the review state with the `github.event.review.state` property. For example, this workflow will run whenever a pull request review is submitted, but the `approved` job will only run if the submitted review is an approving review:

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| Web 挂钩事件有效负载                                                                                                                       | 活动类型                                                   | `GITHUB_SHA`            | `GITHUB_REF`                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------- | ----------------------------------- |
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review comment is modified. A pull request review comment is a comment on a pull request's diff. For activity related to pull request reviews or pull request comments, use the [`pull_request_review`](#pull_request_review) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review comment APIs, see "[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)" in the GraphQL API documentation or "[Review comments](/rest/reference/pulls#comments)" in the REST API documentation.

例如，您可以在拉取请求审查评论为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| Web 挂钩事件有效负载                                                                                         | 活动类型                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `GITHUB_SHA`   | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | PR 基分支上的最后一次提交 | PR 基础分支      |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)." 默认情况下，工作流程仅在 `pull_request_target` 的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 要让更多活动类型触发工作流程，请使用 `types` 关键词。 You can specify different activity types using the `types` keyword. 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

{% endnote %}

{% note %}

**Note:** By default, only the `opened`, `synchronize`, and `reopened` activity types trigger workflows that run on the `pull_request` event. To trigger workflows by different activity types, use the `types` keyword.

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.

This event runs in the context of the base of the pull request, rather than in the context of the merge commit, as the `pull_request` event does. This prevents execution of unsafe code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows your workflow to do things like label or comment on pull requests from forks. Avoid using this event if you need to build or run code from the pull request.

{% warning %}

**Warning:** For workflows that are triggered by the `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write repository permission unless the `permissions` key is specified and the workflow can access secrets, even when it is triggered from a fork. 虽然工作流程在拉取请求的基础上下文中运行，但您应该确保不在此事件中检出、生成或运行来自拉取请求的不受信任代码。 Additionally, any caches share the same scope as the base branch. To help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. 更多信息请参阅 GitHub 安全实验室网站上的“[保持 GitHub Actions 和工作流程安全：阻止 pwn 请求](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)”。

{% endwarning %}

例如，您可以在拉取请求为 `assigned`、`opened`、`synchronize` 或 `reopened` 时运行工作流程。

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### Running your workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”。

For example, this workflow will run when someone opens a pull request that targets a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

To run a job based on the pull request's head branch name (as opposed to the pull request's base branch name), use the `github.head_ref` context in a conditional. For example, this workflow will run whenever a pull request is opened, but the `run_if` job will only execute if the head of the pull request is a branch whose name starts with `releases/`:

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### Running your workflow based on files changed in a pull request

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a pull request changes specific files. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

For example, this workflow will run when a pull request includes a change to a JavaScript file (`.js`):

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a pull request that includes a change to a JavaScript (`.js`) file is opened on a branch whose name starts with `releases/`:

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Running your workflow when a pull request merges

When a pull request merges, the pull request is automatically closed. To run a workflow when a pull request merges, use the `pull_request_target` `closed` event type along with a conditional that checks the `merged` value of the event. For example, the following workflow will run whenever a pull request closes. The `if_merged` job will only run if the pull request was also merged.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request_target.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `推送`

| Web 挂钩事件有效负载                                                                       | 活动类型 | `GITHUB_SHA`           | `GITHUB_REF` |
| ---------------------------------------------------------------------------------- | ---- | ---------------------- | ------------ |
| [`推送`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a  | 推送的提交，除非删除分支（当它是默认分支时） | 更新的引用        |

{% note %}

**注：**适用于 GitHub Actions 的 web 挂钩有效负载在 `commit` 对象中不包括 `added`、`removed` 和 `modified` 属性。 You can retrieve the full commit object using the API. For information, see "[Commit](/graphql/reference/objects#commit)" in the GraphQL API documentation or "[Get a commit](/rest/reference/commits#get-a-commit)" in the REST API documentation.

{% endnote %}

{% note %}

**Note**: An event will not be created when you push more than three tags at once.

{% endnote %}

Runs your workflow when you push a commit or tag.

例如，您可以在发生 `push` 事件时运行工作流程。

```yaml
on:
  push
```

#### Running your workflow only when a push to specific branches occurs

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run when specific branches are pushed. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”。

For example, this workflow will run when someone pushes to `main` or to a branch that starts with `releases/`.

```yaml
on:
  push:
    branches:    
      - 'main'
      - 'releases/**'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### Running your workflow only when a push of specific tags occurs

You can use the `tags` or `tags-ignore` filter to configure your workflow to only run when specific tags or are pushed. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”。

For example, this workflow will run when someone pushes a tag that starts with `v1.`.

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### Running your workflow only when a push affects specific files

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a push to specific files occurs. 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

For example, this workflow will run when someone pushes a change to a JavaScript file (`.js`):

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Note:** {% data reusables.actions.branch-paths-filter %} For example, the following workflow will only run when a push that includes a change to a JavaScript (`.js`) file is made to a branch whose name starts with `releases/`:

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| Web 挂钩事件有效负载                                                                                        | 活动类型                                | `GITHUB_SHA`                    | `GITHUB_REF` |
| --------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------- | ------------ |
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | Commit of the published package | 已发布软件包的分支或标签 |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when activity related to {% data variables.product.prodname_registry %} occurs in your repository. 更多信息请参阅“[{% data variables.product.prodname_registry %} 文档](/packages)”。

例如，您可以在软件包为 `published` 时运行工作流程。

```yaml
on:
  registry_package:
    types: [published]
```

### `发行版`

| Web 挂钩事件有效负载                                                                           | 活动类型                                                                                                                                                            | `GITHUB_SHA` | `GITHUB_REF`                                    |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------- |
| [`发行版`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | 标记的发行版中的最新提交 | Tag ref of release `refs/tags/<tag_name>` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Note:** Workflows are not triggered for the `created`, `edited`, or `deleted` activity types for draft releases. When you create your release through the {% data variables.product.product_name %} browser UI, your release may automatically be saved as a draft.

{% endnote %}

{% note %}

**注意：**`prereleased` 类型不会触发从草稿版本预发布，但 `published` 类型会触发。 如果您希望工作流程在稳定*和*预发布时运行，请订阅 `published` 而不是 `released` 和 `prereleased`。

{% endnote %}

Runs your workflow when release activity in your repository occurs. For information about the release APIs, see "[Release](/graphql/reference/objects#release)" in the GraphQL API documentation or "[Releases](/rest/reference/repos#releases)" in the REST API documentation.

例如，您可以在版本发布为 `published` 时运行工作流程。

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| Web 挂钩事件有效负载                                                                                                     | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | 自定义  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.actions.branch-requirement %}

当您想要触发在 {% data variables.product.product_name %} 外发生的活动的工作流程时，可以使用 {% data variables.product.product_name %} API 触发名为 [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) 的 web 挂钩事件。 更多信息请参阅“[创建仓库调度事件](/rest/reference/repos#create-a-repository-dispatch-event)”。

When you make a request to create a `repository_dispatch` event, you must specify an `event_type` to describe the activity type. By default, all `repository_dispatch`  activity types trigger a workflow to run. You can use the `types` keyword to limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

Any data that you send through the `client_payload` parameter will be available in the `github.event` context in your workflow. For example, if you send this request body when you create a repository dispatch event:

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

then you can access the payload in a workflow like this:

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `计划`

| Web 挂钩事件有效负载 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`                                                                                                                                                                                                                     |
| ------------ | ---- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a          | n/a  | 默认分支上的最新提交   | 默认分支 | 安排的工作流程设置为运行。 预定的工作流程使用 [POSIX 计划任务语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)。 更多信息请参阅“[通过事件触发工作流程](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)”。 |

{% data reusables.actions.schedule-delay %}

`schedule` 事件允许您在计划的时间触发工作流程。

{% data reusables.repositories.actions-scheduled-workflow-example %}

计划任务语法有五个字段，中间用空格分隔，每个字段代表一个时间单位。

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

您可在这五个字段中使用以下运算符：

| 运算符 | 描述     | 示例                                                               |
| --- | ------ | ---------------------------------------------------------------- |
| *   | 任意值    | `15 * * * *` runs at every minute 15 of every hour of every day. |
| ,   | 值列表分隔符 | `2,10 4,5 * * *` 在每天第 4 和第 5 小时的第 2 和第 10 分钟运行。                  |
| -   | 值的范围   | `30 4-6 * * *` runs at minute 30 of the 4th, 5th, and 6th hour.  |
| /   | 步骤值    | `20/15 * * * *` 从第 20 分钟到第 59 分钟每隔 15 分钟运行（第 20、35 和 50 分钟）。     |

{% note %}

**注：** {% data variables.product.prodname_actions %} 不支持非标准语法 `@yearly`、`@monthly`、`@weekly`、`@daily`、`@hourly` 和 `@reboot`。

{% endnote %}

您可以使用 [crontab guru](https://crontab.guru/) 帮助生成计划任务语法并确认它在何时运行。 为帮助您开始，我们还提供了一系列 [crontab guru 示例](https://crontab.guru/examples.html)。

计划工作流程的通知将发送给最后修改工作流程文件中的 cron 语法的用户。 For more information, see "[Notifications for workflow runs](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)."

### `状态`

| Web 挂钩事件有效负载                                                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------ | ---- | ------------ | ------------ |
| [`状态`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a  | 默认分支上的最新提交   | n/a          |

{% data reusables.actions.branch-requirement %}

Runs your workflow when the status of a Git commit changes. For example, commits can be marked as `error`, `failure`, `pending`, or `success`. If you want to provide more details about the status change, you may want to use the [`check_run`](#check_run) event. For information about the commit status APIs, see "[Status](/graphql/reference/objects#statue)" in the GraphQL API documentation or "[Statuses](/rest/reference/commits#commit-statuses)" in the REST API documentation.

例如，您可以在发生 `status` 事件时运行工作流程。

```yaml
on:
  status
```

If you want to run a job in your workflow based on the new commit state, you can use the `github.event.state` context. For example, the following workflow triggers when a commit status changes, but the `if_error_or_failure` job only runs if the new commit state is `error` or `failure`.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `查看`

| Web 挂钩事件有效负载                                                                        | 活动类型        | `GITHUB_SHA` | `GITHUB_REF` |
| ----------------------------------------------------------------------------------- | ----------- | ------------ | ------------ |
| [`查看`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} Although only the `started` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when the workflow's repository is starred. For information about the pull request APIs, see "[addStar](/graphql/reference/mutations#addstar)" in the GraphQL API documentation or "[Starring](/rest/reference/activity#starring)" in the REST API documentation.

For example, you can run a workflow when someone stars a repository, which is the `started` activity type for a watch event.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Web 挂钩事件有效负载                | 活动类型 | `GITHUB_SHA`                | `GITHUB_REF`                |
| --------------------------- | ---- | --------------------------- | --------------------------- |
| Same as the caller workflow | n/a  | Same as the caller workflow | Same as the caller workflow |

`workflow_call` is used to indicate that a workflow can be called by another workflow. When a workflow is triggered with the `workflow_call` event, the event payload in the called workflow is the same event payload from the calling workflow. For more information see, "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

The example below only runs the workflow when it's called from another workflow:

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Web 挂钩事件有效负载                                                                                                 | 活动类型 | `GITHUB_SHA`          | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------------------ | ---- | --------------------- | ------------ |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a  | `GITHUB_REF` 分支上的最新提交 | 收到了分发的分支     |

To manually trigger a workflow, use the `workflow_dispatch` event. You can manually trigger a workflow run using the {% data variables.product.product_name %} API, {% data variables.product.prodname_cli %}, or {% data variables.product.product_name %} browser interface. 更多信息请参阅“[手动配置工作流程](/actions/managing-workflow-runs/manually-running-a-workflow)。

```yaml
on: workflow_dispatch
```

#### Providing inputs

您可以直接在工作流程中配置事件的自定义输入属性、默认输入值和必要输入。 When you trigger the event, you can provide the `ref` and any `inputs`. 当工作流程运行时，您可以访问 `github.event.inputs` 上下文中的输入值。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
This example defines inputs called `logLevel`, `tags`, and `environment`. You pass values for these inputs to the workflow when you run it. This workflow then prints the values to the log, using the `github.event.inputs.logLevel`, `github.event.inputs.tags`, and  `github.event.inputs.environment` context properties.

{% raw %}
```yaml
on: 
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'     
        required: true
        default: 'warning' 
        type: choice
        options:
        - info
        - warning
        - debug 
      tags:
        description: 'Test scenario tags'
        required: false 
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true 

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: ${{ github.event.inputs.logLevel }}
          TAGS: ${{ github.event.inputs.tags }}
          ENVIRONMENT: ${{ github.event.inputs.environment }}
```
{% endraw %}

If you run this workflow from a browser you must enter values for the required inputs manually before the workflow will run.

![Entering inputs for a workflow](/assets/images/help/images/workflow-dispatch-inputs.png)

You can also pass inputs when you run a workflow from a script, or by using {% data variables.product.prodname_cli %}. 例如：

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

For more information, see the {% data variables.product.prodname_cli %} information in "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

{% else %}
此示例定义了 `name` 和 `home` 输入，并使用 `github.event.inputs.name` 和 `github.event.inputs.home` 上下文打印。 如果未提供 `home` ，则打印默认值“The Octoverse”。

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
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% raw %}${{ github.event.inputs.name }}{% endraw %}
          HOME: {% raw %}${{ github.event.inputs.home }}{% endraw %}
```
{% endif %}

### `workflow_run`

| Web 挂钩事件有效负载                                                                                         | 活动类型                                  | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------ | ------------ |
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `requested` activity type does no occur when a workflow is re-run. For information about each activity type, see "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note:** You can't use `workflow_run` to chain together more than three levels of workflows. For example, if you attempt to trigger five workflows (named `B` to `F`) to run sequentially after an initial workflow `A` has run (that is: `A` → `B` → `C` → `D` → `E` → `F`), workflows `E` and `F` will not be run.

{% endnote %}

This event occurs when a workflow run is requested or completed. It allows you to execute a workflow based on execution or completion of another workflow. 由 `workflow_run` 事件启动的工作流程能够访问密钥和写入令牌，即使以前的工作流程不能访问也一样。 这在以前的工作流程有意未获权限的情况下很有用，但您需要在以后的工作流程中采取特权行动。

在此示例中，工作流程配置为在单独的“运行测试”工作流程完成后运行。

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

If you specify multiple `workflows` for the `workflow_run` event, only one of the workflows needs to run. For example, a workflow with the following trigger will run whenever the "Staging" workflow or the "Lab" workflow completes.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### Running a workflow based on the conclusion of another workflow

A workflow run is triggered regardless of the conclusion of the previous workflow. If you want to run a job or step based on the result of the triggering workflow, you can use a conditional with the `github.event.workflow_run.conclusion` property. For example, this workflow will run whenever a workflow named "Build" completes, but the `on-success` job will only run if the "Build" workflow succeeded, and the `on-failure` job will only run if the "Build" workflow failed:

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### Limiting your workflow to run based on branches

You can use the `branches` or `branches-ignore` filter to specify what branches the triggering workflow must run on in order to trigger your workflow. For more information, see "[Workflow syntax for GitHub Actions](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)." For example, a workflow with the following trigger will only run when the workflow named `Build` runs on a branch named `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### Using data from the triggering workflow

You can access the [`workflow_run` event payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) that corresponds to the workflow that triggered your workflow. For example, if your triggering workflow generates artifacts, a workflow triggered with the `workflow_run` event can access these artifacts.

The following workflow uploads data as an artifact. (In this simplified example, the data is the pull request number.)

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:        
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: actions/upload-artifact@v3
        with:
          name: pr_number
          path: pr/
```

When a run of the above workflow completes, it triggers a run of the following workflow. The following workflow uses the `github.event.workflow_run` context and the {% data variables.product.product_name %} REST API to download the artifact that was uploaded by the above workflow, unzips the downloaded artifact, and comments on the pull request whose number was uploaded as an artifact.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: actions/github-script@v5
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: actions/github-script@v5
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
