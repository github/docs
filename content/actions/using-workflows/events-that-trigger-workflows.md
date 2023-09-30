---
title: Events that trigger workflows
intro: 'You can configure your workflows to run when specific activity on {% data variables.product.product_name %} happens, at a scheduled time, or when an event outside of {% data variables.product.product_name %} occurs.'
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
shortTitle: Events that trigger workflows
---

## About events that trigger workflows

Workflow triggers are events that cause a workflow to run. For more information about how to use workflow triggers, see "[AUTOTITLE](/actions/using-workflows/triggering-a-workflow)."

Some events have multiple activity types. For these events, you can specify which activity types will trigger a workflow run. For more information about what each activity type means, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

{% note %}

**Note:** Not all webhook events trigger workflows.

{% endnote %}

## `branch_protection_rule`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when branch protection rules in the workflow repository are changed. For more information about branch protection rules, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)." For information about the branch protection rule APIs, see "[AUTOTITLE](/graphql/reference/objects#branchprotectionrule)" in the GraphQL API documentation or "[AUTOTITLE](/rest/branches)" in the REST API documentation.

For example, you can run a workflow when a branch protection rule has been `created` or `deleted`:

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

## `check_run`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when activity related to a check run occurs. A check run is an individual test that is part of a check suite. For information, see "[AUTOTITLE](/rest/guides/using-the-rest-api-to-interact-with-checks)." For information about the check run APIs, see "[AUTOTITLE](/graphql/reference/objects#checkrun)" in the GraphQL API documentation or "[AUTOTITLE](/rest/checks#runs)" in the REST API documentation.

For example, you can run a workflow when a check run has been `rerequested` or `completed`.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

## `check_suite`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite) | - `completed` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)." Although only the `completed` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note:** To prevent recursive workflows, this event does not trigger workflows if the check suite was created by {% data variables.product.prodname_actions %}.

{% endnote %}

Runs your workflow when check suite activity occurs. A check suite is a collection of the check runs created for a specific commit. Check suites summarize the status and conclusion of the check runs that are in the suite. For information, see "[AUTOTITLE](/rest/guides/using-the-rest-api-to-interact-with-checks)." For information about the check suite APIs, see "[AUTOTITLE](/graphql/reference/objects#checksuite)" in the GraphQL API documentation or "[AUTOTITLE](/rest/checks#suites)" in the REST API documentation.

For example, you can run a workflow when a check suite has been `completed`.

```yaml
on:
  check_suite:
    types: [completed]
```

## `create`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/webhooks-and-events/webhooks/webhook-events-and-payloads#create) | Not applicable | Last commit on the created branch or tag | Branch or tag created |

{% note %}

**Note**: An event will not be created when you create more than three tags at once.

{% endnote %}

Runs your workflow when someone creates a Git reference (Git branch or tag) in the workflow's repository. For information about the APIs to create a Git reference, see "[AUTOTITLE](/graphql/reference/mutations#createref)" in the GraphQL API documentation or "[AUTOTITLE](/rest/git#create-a-reference)" in the REST API documentation.

For example, you can run a workflow when the `create` event occurs.

```yaml
on:
  create
```

## `delete`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/webhooks-and-events/webhooks/webhook-events-and-payloads#delete) | Not applicable | Last commit on default branch | Default branch |

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: An event will not be created when you delete more than three tags at once.

{% endnote %}

Runs your workflow when someone deletes a Git reference (Git branch or tag) in the workflow's repository. For information about the APIs to delete a Git reference, see "[AUTOTITLE](/graphql/reference/mutations#deleteref)" in the GraphQL API documentation or "[AUTOTITLE](/rest/git#delete-a-reference)" in the REST API documentation.

For example, you can run a workflow when the `delete` event occurs.

```yaml
on:
  delete
```

## `deployment`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment) | Not applicable | Commit to be deployed | Branch or tag to be deployed (empty if created with a commit SHA)|

Runs your workflow when someone creates a deployment in the workflow's repository. Deployments created with a commit SHA may not have a Git ref. For information about the APIs to create a deployment, see "[AUTOTITLE](/graphql/reference/mutations#createdeployment)" in the GraphQL API documentation or "[AUTOTITLE](/rest/repos#deployments)" in the REST API documentation.

For example, you can run a workflow when the `deployment` event occurs.

```yaml
on:
  deployment
```

## `deployment_status`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment_status) | Not applicable | Commit to be deployed | Branch or tag to be deployed (empty if commit)|

{% note %}

**Note:** When a deployment status's state is set to `inactive`, a workflow run will not be triggered.

{% endnote %}

Runs your workflow when a third party provides a deployment status. Deployments created with a commit SHA may not have a Git ref. For information about the APIs to create a deployment status, see "[AUTOTITLE](/graphql/reference/mutations#createdeploymentstatus)" in the GraphQL API documentation or "[AUTOTITLE](/rest/deployments#create-a-deployment-status)" in the REST API documentation.

For example, you can run a workflow when the `deployment_status` event occurs.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}

## `discussion`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a discussion in the workflow's repository is created or modified. For activity related to comments on a discussion, use the [`discussion_comment`](#discussion_comment) event. For more information about discussions, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[AUTOTITLE](/graphql/reference/objects#discussion)."

For example, you can run a workflow when a discussion has been `created`, `edited`, or `answered`.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

## `discussion_comment`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

Runs your workflow when a comment on a discussion in the workflow's repository is created or modified. For activity related to a discussion as opposed to comments on the discussion, use the [`discussion`](#discussion) event. For more information about discussions, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)." For information about the GraphQL API, see "[AUTOTITLE](/graphql/reference/objects#discussion)."

For example, you can run a workflow when a discussion comment has been `created` or `deleted`.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

## `fork`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/webhooks-and-events/webhooks/webhook-events-and-payloads#fork) | Not applicable | Last commit on default branch |  Default branch |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone forks a repository. For information about the REST API, see "[AUTOTITLE](/rest/repos#create-a-fork)."

For example, you can run a workflow when the `fork` event occurs.

```yaml
on:
  fork
```

## `gollum`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/webhooks-and-events/webhooks/webhook-events-and-payloads#gollum) | Not applicable | Last commit on default branch |  Default branch |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone creates or updates a Wiki page. For more information, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/about-wikis)."

For example, you can run a workflow when the `gollum` event occurs.

```yaml
on:
  gollum
```

## `issue_comment`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when an issue or pull request comment is created, edited, or deleted. For information about the issue comment APIs, see "[AUTOTITLE](/graphql/reference/objects#issuecomment)" in the GraphQL API documentation or "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)" in the REST API documentation.

For example, you can run a workflow when an issue or pull request comment has been `created` or `deleted`.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

### `issue_comment` on issues only or pull requests only

The `issue_comment` event occurs for comments on both issues and pull requests. You can use the `github.event.issue.pull_request` property in a conditional to take different action depending on whether the triggering object was an issue or pull request.

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

## `issues`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/webhooks-and-events/webhooks/webhook-events-and-payloads#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when an issue in the workflow's repository is created or modified. For activity related to comments in an issue, use the [`issue_comment`](#issue_comment) event. For more information about issues, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)." For information about the issue APIs, see "[AUTOTITLE](/graphql/reference/objects#issue)" in the GraphQL API documentation or "[AUTOTITLE](/rest/issues)" in the REST API documentation.

For example, you can run a workflow when an issue has been `opened`, `edited`, or `milestoned`.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

## `label`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/webhooks-and-events/webhooks/webhook-events-and-payloads#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#label)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when a label in your workflow's repository is created or modified. For more information about labels, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)." For information about the label APIs, see "[AUTOTITLE](/graphql/reference/objects#label)" in the GraphQL API documentation or "[AUTOTITLE](/rest/issues#labels)" in the REST API documentation.

If you want to run your workflow when a label is added to or removed from an issue, pull request, or discussion, use the `labeled` or `unlabeled` activity types for the [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target), or [`discussion`](#discussion) events instead.

For example, you can run a workflow when a label has been `created` or `deleted`.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion merge-queue  %}

## `merge_group`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group) | `checks_requested` | SHA of the merge group | Ref of the merge group |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} Although only the `checks_requested` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request is added to a merge queue, which adds the pull request to a merge group. For more information see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)".

For example, you can run a workflow when the `checks_requested` activity has occurred.

```yaml
on:
  merge_group:
    types: [checks_requested]
```

{% endif %}

## `milestone`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when a milestone in the workflow's repository is created or modified. For more information about milestones, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones)." For information about the milestone APIs, see "[AUTOTITLE](/graphql/reference/objects#milestone)" in the GraphQL API documentation or "[AUTOTITLE](/rest/issues#milestones)" in the REST API documentation.

If you want to run your workflow when an issue is added to or removed from a milestone, use the `milestoned` or `demilestoned` activity types for the [`issues`](#issues) event instead.

For example, you can run a workflow when a milestone has been `opened` or `deleted`.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

## `page_build`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/webhooks-and-events/webhooks/webhook-events-and-payloads#page_build) | Not applicable | Last commit on default branch | Not applicable |

{% data reusables.actions.branch-requirement %}

Runs your workflow when someone pushes to a branch that is the publishing source for {% data variables.product.prodname_pages %}, if {% data variables.product.prodname_pages %} is enabled for the repository. For more information about {% data variables.product.prodname_pages %} publishing sources, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)." For information about the REST API, see "[AUTOTITLE](/rest/repos#pages)."

For example, you can run a workflow when the `page_build` event occurs.

```yaml
on:
  page_build
```

## `project`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/webhooks-and-events/webhooks/webhook-events-and-payloads#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `edited` activity type refers to when a project board, not a column or card on the project board, is edited. For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#project)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event only occurs for {% data variables.product.prodname_projects_v1 %}.

{% endnote %}
{% endif %}

Runs your workflow when a project board is created or modified. For activity related to cards or columns in a project board, use the [`project_card`](#project_card) or [`project_column`](#project_column) events instead. For more information about project boards, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project board APIs, see "[AUTOTITLE](/graphql/reference/objects#project)" in the GraphQL API documentation or "[AUTOTITLE](/rest/projects)" in the REST API documentation.

For example, you can run a workflow when a project has been `created` or `deleted`.

```yaml
on:
  project:
    types: [created, deleted]
```

## `project_card`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event only occurs for {% data variables.product.prodname_projects_v1 %}.

{% endnote %}
{% endif %}

Runs your workflow when a card on a project board is created or modified. For activity related to project boards or columns in a project board, use the [`project`](#project) or [`project_column`](#project_column) event instead. For more information about project boards, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project card APIs, see "[AUTOTITLE](/graphql/reference/objects#projectcard)" in the GraphQL API documentation or "[AUTOTITLE](/rest/projects#cards)" in the REST API documentation.

For example, you can run a workflow when a project card has been `created` or `deleted`.

```yaml
on:
  project_card:
    types: [created, deleted]
```

## `project_column`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: This event only occurs for projects owned by the workflow's repository, not for organization-owned or user-owned projects or for projects owned by another repository.

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event only occurs for {% data variables.product.prodname_projects_v1 %}.

{% endnote %}
{% endif %}

Runs your workflow when a column on a project board is created or modified. For activity related to project boards or cards in a project board, use the [`project`](#project) or [`project_card`](#project_card) event instead. For more information about project boards, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)." For information about the project column APIs, see "[AUTOTITLE](/graphql/reference/objects#projectcolumn)" in the GraphQL API documentation or "[AUTOTITLE](/rest/projects#columns)" in the REST API documentation.

For example, you can run a workflow when a project column has been `created` or `deleted`.

```yaml
on:
  project_column:
    types: [created, deleted]
```

## `public`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/webhooks-and-events/webhooks/webhook-events-and-payloads#public) | Not applicable | Last commit on default branch |  Default branch |

{% data reusables.actions.branch-requirement %}

Runs your workflow when your workflow's repository changes from private to public. For information about the REST API, see "[AUTOTITLE](/rest/repos#edit)."

For example, you can run a workflow when the `public` event occurs.

```yaml
on:
  public
```

## `pull_request`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)." By default, a workflow only runs when a `pull_request` event's activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows by different activity types, use the `types` keyword. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onevent_nametypes)."

{% endnote %}

{% note %}

**Note:** Workflows will not run on `pull_request` activity if the pull request has a merge conflict. The merge conflict must be resolved first.

Conversely, workflows with the `pull_request_target` event will run even if the pull request has a merge conflict. Before using the `pull_request_target` trigger, you should be aware of the security risks. For more information, see [`pull_request_target`](#pull_request_target).

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated. For activity related to pull request reviews, pull request review comments, or pull request comments, use the [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment), or [`issue_comment`](#issue_comment) events instead. For information about the pull request APIs, see "[AUTOTITLE](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[AUTOTITLE](/rest/pulls)" in the REST API documentation.

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

### Running your `pull_request` workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

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

### Running your `pull_request` workflow based on files changed in a pull request

You can also configure your workflow to run when a pull request changes specific files. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

### Running your `pull_request` workflow when a pull request merges

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

## `pull_request_comment` (use `issue_comment`)

To run your workflow when a comment on a pull request (not on a pull request's diff) is created, edited, or deleted, use the [`issue_comment`](#issue_comment) event. For activity related to pull request reviews or pull request review comments, use the [`pull_request_review`](#pull_request_review) or [`pull_request_review_comment`](#pull_request_review_comment) events.

## `pull_request_review`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review is submitted, edited, or dismissed. A pull request review is a group of pull request review comments in addition to a body comment and a state. For activity related to pull request review comments or pull request comments, use the [`pull_request_review_comment`](#pull_request_review_comment) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review APIs, see "[AUTOTITLE](/graphql/reference/objects#pullrequest)" in the GraphQL API documentation or "[AUTOTITLE](/rest/pulls#reviews)" in the REST API documentation.

For example, you can run a workflow when a pull request review has been `edited` or `dismissed`.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

### Running a workflow when a pull request is approved

To run your workflow when a pull request has been approved, you can trigger your workflow with the `submitted` type of `pull_request_review` event, then check the review state with the `github.event.review.state` property. For example, this workflow will run whenever a pull request review is submitted, but the `approved` job will only run if the submitted review is an approving review:

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'APPROVED'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

## `pull_request_review_comment`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| Last merge commit on the `GITHUB_REF` branch | PR merge branch `refs/pull/:prNumber/merge` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

Runs your workflow when a pull request review comment is modified. A pull request review comment is a comment on a pull request's diff. For activity related to pull request reviews or pull request comments, use the [`pull_request_review`](#pull_request_review) or [`issue_comment`](#issue_comment) events instead. For information about the pull request review comment APIs, see "[AUTOTITLE](/graphql/reference/objects#pullrequestreviewcomment)" in the GraphQL API documentation or "[AUTOTITLE](/rest/pulls#comments)" in the REST API documentation.

For example, you can run a workflow when a pull request review comment has been `created` or `deleted`.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

## `pull_request_target`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | Last commit on the PR base branch | PR base branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)." By default, a workflow only runs when a `pull_request_target` event's activity type is `opened`, `synchronize`, or `reopened`. To trigger workflows by different activity types, use the `types` keyword. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onevent_nametypes)."

{% endnote %}

Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.

This event runs in the context of the base of the pull request, rather than in the context of the merge commit, as the `pull_request` event does. This prevents execution of unsafe code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows your workflow to do things like label or comment on pull requests from forks. Avoid using this event if you need to build or run code from the pull request.

To ensure repository security, branches with names that match certain patterns (such as those which look similar to SHAs) may not trigger workflows with the `pull_request_target` event.

{% warning %}

**Warning:** For workflows that are triggered by the `pull_request_target` event, the `GITHUB_TOKEN` is granted read/write repository permission unless the `permissions` key is specified and the workflow can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Additionally, any caches share the same scope as the base branch. To help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. For more information, see "[Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)" on the GitHub Security Lab website.

{% endwarning %}

For example, you can run a workflow when a pull request has been `assigned`, `opened`, `synchronize`, or `reopened`.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

### Running your `pull_request_target` workflow based on the head or base branch of a pull request

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run on pull requests that target specific branches. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)."

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
  pull_request_target:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

### Running your `pull_request_target` workflow based on files changed in a pull request

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a pull request changes specific files. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

### Running your `pull_request_target` workflow when a pull request merges

When a pull request merges, the pull request is automatically closed. To run a workflow when a pull request merges, use the `pull_request_target` `closed` event type along with a conditional that checks the `merged` value of the event. For example, the following workflow will run whenever a pull request closes. The `if_merged` job will only run if the pull request was also merged.

```yaml
on:
  pull_request_target:
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

## `push`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/webhooks-and-events/webhooks/webhook-events-and-payloads#push) | Not applicable | When you delete a branch, the SHA in the workflow run (and its associated refs) reverts to the default branch of the repository. | Updated ref |

{% note %}

**Note:** The webhook payload available to GitHub Actions does not include the `added`, `removed`, and `modified` attributes in the `commit` object. You can retrieve the full commit object using the API. For information, see "[AUTOTITLE](/graphql/reference/objects#commit)" in the GraphQL API documentation or "[AUTOTITLE](/rest/commits#get-a-commit)" in the REST API documentation.

{% endnote %}

{% note %}

**Note**: An event will not be created when you push more than three tags at once.

{% endnote %}

Runs your workflow when you push a commit or tag, or when you create a repository from a template.

For example, you can run a workflow when the `push` event occurs.

```yaml
on:
  push
```

{% note %}

**Note**: When a `push` webhook event triggers a workflow run, the Actions UI's "pushed by" field shows the account of the pusher and not the author or committer. However, if the changes are pushed to a repository using SSH authentication with a deploy key, then the "pushed by" field will be the repository admin who verified the deploy key when it was added it to a repository.

{% endnote %}

### Running your workflow only when a push to specific branches occurs

You can use the `branches` or `branches-ignore` filter to configure your workflow to only run when specific branches are pushed. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

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

### Running your workflow only when a push of specific tags occurs

You can use the `tags` or `tags-ignore` filter to configure your workflow to only run when specific tags are pushed. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)."

For example, this workflow will run when someone pushes a tag that starts with `v1.`.

```yaml
on:
  push:
    tags:
      - v1.**
```

### Running your workflow only when a push affects specific files

You can use the `paths` or `paths-ignore` filter to configure your workflow to run when a push to specific files occurs. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

## `registry_package`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/webhooks-and-events/webhooks/webhook-events-and-payloads#package) | - `published`<br/>- `updated` | Commit of the published package | Branch or tag of the published package |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note**: When pushing multi-architecture container images, this event occurs once per manifest, so you might observe your workflow triggering multiple times. To mitigate this, and only run your workflow job for the event that contains the actual image tag information, use a conditional:

{% raw %}

```yaml
jobs:
    job_name:
        if: ${{ github.event.registry_package.package_version.container_metadata.tag.name != '' }}
```

{% endraw %}

{% endnote %}

Runs your workflow when activity related to {% data variables.product.prodname_registry %} occurs in your repository. For more information, see "[{% data variables.product.prodname_registry %} Documentation](/packages)."

For example, you can run a workflow when a new package version has been `published`.

```yaml
on:
  registry_package:
    types: [published]
```

## `release`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/webhooks-and-events/webhooks/webhook-events-and-payloads#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | Last commit in the tagged release | Tag ref of release `refs/tags/<tag_name>` |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#release)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**Note:** Workflows are not triggered for the `created`, `edited`, or `deleted` activity types for draft releases. When you create your release through the {% data variables.product.product_name %} browser UI, your release may automatically be saved as a draft.

{% endnote %}

{% note %}

**Note:** The `prereleased` type will not trigger for pre-releases published from draft releases, but the `published` type will trigger. If you want a workflow to run when stable _and_ pre-releases publish, subscribe to `published` instead of `released` and `prereleased`.

{% endnote %}

Runs your workflow when release activity in your repository occurs. For information about the release APIs, see "[AUTOTITLE](/graphql/reference/objects#release)" in the GraphQL API documentation or "[AUTOTITLE](/rest/releases)" in the REST API documentation.

For example, you can run a workflow when a release has been `published`.

```yaml
on:
  release:
    types: [published]
```

## `repository_dispatch`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_dispatch) | Custom | Last commit on default branch | Default branch |

{% data reusables.actions.branch-requirement %}

You can use the {% data variables.product.product_name %} API to trigger a webhook event called [`repository_dispatch`](/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_dispatch) when you want to trigger a workflow for activity that happens outside of {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/rest/repos#create-a-repository-dispatch-event)."

When you make a request to create a `repository_dispatch` event, you must specify an `event_type` to describe the activity type. By default, all `repository_dispatch`  activity types trigger a workflow to run. You can use the `types` keyword to limit your workflow to run when a specific `event_type` value is sent in the `repository_dispatch` webhook payload.

```yaml
on:
  repository_dispatch:
    types: [test_result]
```

{% note %}

**Note:** The `event_type` value is limited to 100 characters.

{% endnote %}

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

{% note %}

**Notes**:

- The maximum number of top-level properties in `client_payload` is 10.
- The payload can contain a maximum of 65,535 characters.

{% endnote %}

## `schedule`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| Not applicable | Not applicable | Last commit on default branch | Default branch | When the scheduled workflow is set to run. A scheduled workflow uses [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). For more information, see "[AUTOTITLE](/actions/using-workflows#triggering-a-workflow-with-events)." |

{% data reusables.actions.schedule-delay %}

The `schedule` event allows you to trigger a workflow at a scheduled time.

{% data reusables.repositories.actions-scheduled-workflow-example %}

Cron syntax has five fields separated by a space, and each field represents a unit of time.

```text
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
| * | Any value | `15 * * * *` runs at every minute 15 of every hour of every day. |
| , | Value list separator | `2,10 4,5 * * *` runs at minute 2 and 10 of the 4th and 5th hour of every day. |
| - | Range of values | `30 4-6 * * *` runs at minute 30 of the 4th, 5th, and 6th hour. |
| / | Step values | `20/15 * * * *` runs every 15 minutes starting from minute 20 through 59 (minutes 20, 35, and 50). |

{% note %}

**Note:** {% data variables.product.prodname_actions %} does not support the non-standard syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly`, and `@reboot`.

{% endnote %}

You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)."

## `status`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/webhooks-and-events/webhooks/webhook-events-and-payloads#status) | Not applicable | Last commit on default branch | Not applicable |

{% data reusables.actions.branch-requirement %}

Runs your workflow when the status of a Git commit changes. For example, commits can be marked as `error`, `failure`, `pending`, or `success`. If you want to provide more details about the status change, you may want to use the [`check_run`](#check_run) event. For information about the commit status APIs, see "[AUTOTITLE](/graphql/reference/objects#status)" in the GraphQL API documentation or "[AUTOTITLE](/rest/commits#commit-statuses)" in the REST API documentation.

For example, you can run a workflow when the `status` event occurs.

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

## `watch`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/webhooks-and-events/webhooks/webhook-events-and-payloads#watch) | - `started` | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} Although only the `started` activity type is supported, specifying the activity type will keep your workflow specific if more activity types are added in the future. For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

Runs your workflow when the workflow's repository is starred. For information about the pull request APIs, see "[AUTOTITLE](/graphql/reference/mutations#addstar)" in the GraphQL API documentation or "[AUTOTITLE](/rest/activity#starring)" in the REST API documentation.

For example, you can run a workflow when someone stars a repository, which is the `started` activity type for a watch event.

```yaml
on:
  watch:
    types: [started]
```

## `workflow_call`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| Same as the caller workflow | Not applicable | Same as the caller workflow | Same as the caller workflow |

`workflow_call` is used to indicate that a workflow can be called by another workflow. When a workflow is triggered with the `workflow_call` event, the event payload in the called workflow is the same event payload from the calling workflow. For more information see, "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

The example below only runs the workflow when it's called from another workflow:

```yaml
on: workflow_call
```

## `workflow_dispatch`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_dispatch) | Not applicable | Last commit on the `GITHUB_REF` branch or tag | Branch or tag that received dispatch |

{% data reusables.actions.branch-requirement %}

To enable a workflow to be triggered manually, you need to configure the `workflow_dispatch` event. You can manually trigger a workflow run using the {% data variables.product.product_name %} API, {% data variables.product.prodname_cli %}, or {% data variables.product.product_name %} browser interface. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/manually-running-a-workflow)."

```yaml
on: workflow_dispatch
```

### Providing inputs

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. When you trigger the event, you can provide the `ref` and any `inputs`. When the workflow runs, you can access the input values in the {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts)."

{% data reusables.actions.inputs-vs-github-event-inputs %}

This example defines inputs called `logLevel`, `tags`, and `environment`. You pass values for these inputs to the workflow when you run it. This workflow then prints the values to the log, using the {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags`, and  `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags`, and  `github.event.inputs.environment`{% endif %} context properties.

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
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

If you run this workflow from a browser you must enter values for the required inputs manually before the workflow will run.

![Screenshot of a list of workflow runs. A dropdown menu, labeled "Run workflow" and expanded to show input fields, is outlined in dark orange.](/assets/images/help/actions/workflow-dispatch-inputs.png)

You can also pass inputs when you run a workflow from a script, or by using {% data variables.product.prodname_cli %}. For example:

```shell
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

For more information, see the {% data variables.product.prodname_cli %} information in "[AUTOTITLE](/actions/managing-workflow-runs/manually-running-a-workflow)."

## `workflow_run`

| Webhook event payload | Activity types | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) | - `completed`<br/>- `requested`{% ifversion actions-workflow-run-in-progress %}<br/>- `in_progress`{% endif %} | Last commit on default branch | Default branch |

{% note %}

**Note**: {% data reusables.developer-site.multiple_activity_types %} The `requested` activity type does not occur when a workflow is re-run. For information about each activity type, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)." {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**Note:** You can't use `workflow_run` to chain together more than three levels of workflows. For example, if you attempt to trigger five workflows (named `B` to `F`) to run sequentially after an initial workflow `A` has run (that is: `A` → `B` → `C` → `D` → `E` → `F`), workflows `E` and `F` will not be run.

{% endnote %}

This event occurs when a workflow run is requested or completed. It allows you to execute a workflow based on execution or completion of another workflow. The workflow started by the `workflow_run` event is able to access secrets and write tokens, even if the previous workflow was not. This is useful in cases where the previous workflow is intentionally not privileged, but you need to take a privileged action in a later workflow.

In this example, a workflow is configured to run after the separate "Run Tests" workflow completes.

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

### Running a workflow based on the conclusion of another workflow

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

### Limiting your workflow to run based on branches

You can use the `branches` or `branches-ignore` filter to specify what branches the triggering workflow must run on in order to trigger your workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)." For example, a workflow with the following trigger will only run when the workflow named `Build` runs on a branch named `canary`.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

### Using data from the triggering workflow

You can access the [`workflow_run` event payload](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run) that corresponds to the workflow that triggered your workflow. For example, if your triggering workflow generates artifacts, a workflow triggered with the `workflow_run` event can access these artifacts.

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
      - uses: {% data reusables.actions.action-upload-artifact %}
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
        uses: {% data reusables.actions.action-github-script %}
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
        uses: {% data reusables.actions.action-github-script %}
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
