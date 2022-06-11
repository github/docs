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

## 关于触发工作流程的事件

工作流程触发器是导致工作流程运行的事件。 有关如何使用工作流程触发器的详细信息，请参阅“[触发工作流程](/actions/using-workflows/triggering-a-workflow)”。

## 可用事件

某些事件具有多种活动类型。 对于这些事件，您可以指定将触发工作流程运行的活动类型。 有关每个活动类型的含义的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads)”。 请注意，并非所有 web 挂钩事件都会触发工作流程。

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| Web 挂钩事件有效负载                                                                                                            | 活动类型                                                   | `GITHUB_SHA` | `GITHUB_REF` |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ | ------------ |
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在工作流程存储库中的分支保护规则发生更改时运行工作流程。 有关分支保护规则的更多信息，请参阅“[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”。 有关分支保护规则 API 的信息，请参阅 GraphQL API 文档中的“[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)”或 REST API 文档中的“[分支](/rest/reference/branches)”。

例如，您可以在分支保护规则为 `created` 或 `deleted` 时运行工作流程。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在发生与检查运行相关的活动时运行工作流程。 检查运行是检查套件中的单个测试。 有关信息，请参阅“[检查 API 入门](/rest/guides/getting-started-with-the-checks-api)”。 有关检查运行 API 的信息，请参阅 GraphQL API 文档中的“[CheckRun](/graphql/reference/objects#checkrun)”或 REST API 文档中的“[检查](/rest/reference/checks#runs)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)”。 尽管仅支持 `started` 活动类型，但如果将来添加更多活动类型，则指定活动类型将使您的工作流程保持特定。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意：**为防止递归工作流程，如果检查套件是由 {% data variables.product.prodname_actions %} 创建的，则此事件不会触发工作流程。

{% endnote %}

在发生检查套件活动时运行工作流程。 检查套件是为特定提交创建的检查运行的集合。 检查套件汇总了套件中检查运行的状态和结论。 有关信息，请参阅“[检查 API 入门](/rest/guides/getting-started-with-the-checks-api)”。 有关检查套件 API 的信息，请参阅 GraphQL API 文档中的“[CheckSuite](/graphql/reference/objects#checksuite)”或 REST API 文档中的“[检查](/rest/reference/checks#suites)”。

例如，您可以在检查套件为 `completed` 时运行工作流程。

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

**注意**：一次创建三个以上的标记时，不会创建事件。

{% endnote %}

当有人在工作流程的存储库中创建 Git 引用（Git 分支或标记）时运行工作流程。 有关用于创建 Git 引用的 API 的信息，请参阅 GraphQL API 文档中的“[createRef](/graphql/reference/mutations#createref)”或 REST API 文档中的“[创建引用](/rest/reference/git#create-a-reference)”。

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

**注意**：一次删除三个以上的标记时，不会创建事件。

{% endnote %}

当有人删除工作流程存储库中的 Git 引用（Git 分支或标记）时运行工作流程。 有关删除 Git 引用的 API 的信息，请参阅 GraphQL API 文档中的“[deleteRef](/graphql/reference/mutations#deleteref)”或 REST API 文档中的“[删除引用](/rest/reference/git#delete-a-reference)”。

例如，您可以在发生 `delete` 事件时运行工作流程。

```yaml
on:
  delete
```

### `deployment`

| Web 挂钩事件有效负载                                                                                     | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`                 |
| ------------------------------------------------------------------------------------------------ | ---- | ------------ | ---------------------------- |
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | n/a  | 要部署的提交       | 要部署的分支或标记（如果使用提交 SHA 创建，则为空） |

当有人在工作流程的存储库中创建部署时运行工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关用于创建部署的 API 的信息，请参阅 GraphQL API 文档中的“[创建部署](/graphql/reference/mutations#createdeployment)”或 REST API 文档中的“[部署](/rest/reference/repos#deployments)”。

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

**注意：**当部署状态的状态设置为 `inactive` 时，不会触发工作流程运行。

{% endnote %}

在第三方提供部署状态时运行工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关用于创建部署状态的 API 的信息，请参阅 GraphQL API 文档中的“[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)”或 REST API 文档中的“[创建部署状态](/rest/reference/deployments#create-a-deployment-status)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

在创建或修改工作流程存储库中的讨论时运行工作流程。 对于与讨论评论相关的活动，请使用 [`discussion_comment`](#discussion_comment) 事件。 有关讨论的更多信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。 有关 GraphQL API 的信息，请参阅“[讨论](/graphql/reference/objects#discussion)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

在创建或修改工作流程存储库中讨论的评论时运行工作流程。 对于与讨论相关的活动，而不是对讨论的评论，请使用 [`discussion`](#discussion) 事件。 有关讨论的更多信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。 有关 GraphQL API 的信息，请参阅“[讨论](/graphql/reference/objects#discussion)”。

例如，您可以在讨论评论为 `created` 或 `deleted` 时运行工作流程。

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

当有人复刻存储库时运行工作流程。 有关 REST API 的信息，请参阅“[创建复刻](/rest/reference/repos#create-a-fork)”。

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

在有人创建或更新 Wiki 页面时运行工作流程。 更多信息请参阅“[关于 wiki](/communities/documenting-your-project-with-wikis/about-wikis)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在创建、编辑或删除议题或拉取请求评论时运行工作流程。 有关议题评论 API 的信息，请参阅 GraphQL API 文档中的“[IssueComment](/graphql/reference/objects#issuecomment)”或 REST API 文档中的“[议题评论](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)”。

例如，您可以在议题或拉取请求评论为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issue_comment` 仅用于议题或拉取请求

`issue_comment` 事件在评论问题和拉取请求时发生。 您可以在条件中使用 `github.event.issue.pull_request` 属性，根据触发对象是议题还是拉取请求，执行不同的操作。

例如，仅当 `issue_comment` 事件源自拉取请求时，此工作流程才会运行 `pr_commented` 作业。 仅当 `issue_comment` 事件源自某个议题时，它才会运行 `issue_commented` 作业。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在创建或修改工作流程存储库中的议题时运行工作流程。 对于与议题中的评论相关的活动，请使用 [`issue_comment`](#issue_comment) 事件。 有关议题的更多信息，请参阅“[关于议题](/issues/tracking-your-work-with-issues/about-issues)”。 有关议题 API 的信息，请参阅 GraphQL API 文档中的“[Issue](/graphql/reference/objects#issue)”或 REST API 文档中的“[议题](/rest/reference/issues)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在创建或修改工作流程存储库中的标签时运行工作流程。 有关标签的更多信息，请参阅“[管理标签](/issues/using-labels-and-milestones-to-track-work/managing-labels)”。 有关标签 API 的信息，请参阅 GraphQL API 文档中的“[标签](/graphql/reference/objects#label)”或 REST API 文档中的“[标签](/rest/reference/issues#labels)”。

如果要在议题、拉取请求或讨论中添加或删除标签时运行工作流程，请对 [`issues`](#issues)、[`pull_request`](#pull_request)、[`pull_request_target`](#pull_request_target) 或 [`discussion`](#discussion) 事件使用 `labeled` 或 `unlabeled` 活动类型。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在创建或修改工作流程存储库中的里程碑时运行工作流程。 有关里程碑的更多信息，请参阅“[关于里程碑](/issues/using-labels-and-milestones-to-track-work/about-milestones)”。 有关里程碑 API 的信息，请参阅 GraphQL API 文档中的“[里程碑](/graphql/reference/objects#milestone)”或 REST API 文档中的“[里程碑](/rest/reference/issues#milestones)”。

如果要在里程碑中添加或删除议题时运行工作流程，请改为对 [`issues`](#issues) 事件使用 `milestoned` 或 `demilestoned` 活动类型。

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

当有人推送到作为 {% data variables.product.prodname_pages %} 的发布源的分支时，如果为存储库启用了 {% data variables.product.prodname_pages %} ，则运行工作流程。 有关 {% data variables.product.prodname_pages %} 发布源的详细信息，请参阅“[为 GitHub Pages 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)”。 有关 REST API 的信息，请参阅“[页面](/rest/reference/repos#pages)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} `edited` 活动类型是指编辑项目板（而不是项目板上的列或卡片）的时间。 有关每种活动类型的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意**：此事件仅对工作流存储库拥有的项目发生，对于组织拥有或用户拥有的项目，或者对于其他存储库拥有的项目，不会发生此事件。

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**注意**：此事件对项目（测试版）不会发生。 更多信息请参阅“[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)”。

{% endnote %}
{% endif %}

在创建或修改项目板时运行工作流程。 对于与项目板中的卡片或列相关的活动，请改用 [`project_card`](#project_card) 或 [`project_column`](#project_column) 事件。 有关项目板的更多信息，请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。 有关项目板 API 的信息，请参阅 GraphQL API 文档中的“[项目](/graphql/reference/objects#project)”或 REST API 文档中的“[项目](/rest/reference/projects)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意**：此事件仅对工作流存储库拥有的项目发生，对于组织拥有或用户拥有的项目，或者对于其他存储库拥有的项目，不会发生此事件。

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**注意**：此事件对项目（测试版）不会发生。 更多信息请参阅“[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)”。

{% endnote %}
{% endif %}

在创建或修改项目板上的卡片时运行工作流程。 对于与项目板或项目板中的列相关的活动，请改用 [`project`](#project) 或 [`project_column`](#project_column) 事件。 有关项目板的更多信息，请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。 有关项目卡 API 的信息，请参阅 GraphQL API 文档中的“[ProjectCard](/graphql/reference/objects#projectcard)”或 REST API 文档中的“[项目卡](/rest/reference/projects#cards)”。

例如，您可以在项目卡为 `created` 或 `deleted` 时运行工作流程。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意**：此事件仅对工作流存储库拥有的项目发生，对于组织拥有或用户拥有的项目，或者对于其他存储库拥有的项目，不会发生此事件。

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

**注意**：此事件对项目（测试版）不会发生。 更多信息请参阅“[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)”。

{% endnote %}
{% endif %}

在创建或修改项目板上的列时运行工作流程。 对于与项目板或项目板中的卡相关的活动，请改用 [`project`](#project) 或 [`project_card`](#project_card) 事件。 有关项目板的更多信息，请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。 有关项目列 API 的信息，请参阅 GraphQL API 文档中的“[项目列](/graphql/reference/objects#projectcolumn)”或 REST API 文档中的“[项目列](/rest/reference/projects#columns)”。

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

当工作流程的存储库从私有变为公共时运行工作流程。 有关 REST API 的信息，请参阅“[编辑仓库](/rest/reference/repos#edit)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)”。 默认情况下，工作流程仅在 `pull_request` 事件的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 您可以使用 `types` 关键字指定不同的活动类型。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

{% endnote %}

{% note %}

**注意：** 默认情况下，只有 `opened`、`synchronize` 和 `reopened` 活动类型才会触发在 `pull_request` 事件上运行的工作流程。 要按不同的活动类型触发工作流，请使用 `types` 关键字。

{% endnote %}

{% note %}

**注意：**如果拉取请求具有合并冲突，工作流程将不会在 `pull_request` 活动上运行。 必须先解决合并冲突。

相反，具有 `pull_request_target` 事件的工作流程将运行，即使拉取请求存在合并冲突也是如此。 在使用 `pull_request_target` 触发器之前，您应该了解安全风险。 更多信息请参阅 [`pull_request_target`](#pull_request_target)。

{% endnote %}

在工作流程存储库中发生有关拉取请求的活动时运行工作流程。 例如，如果未指定任何活动类型，则工作流程将在打开或重新打开拉取请求时运行，或者在更新拉取请求的头部分支时运行。 对于与拉取请求审阅、拉取请求审阅评论或拉取请求评论相关的活动，请改用 [`pull_request_review`](#pull_request_review)、[`pull_request_review_comment`](#pull_request_review_comment)或 [`issue_comment`](#issue_comment) 事件。 有关拉取请求 API 的信息，请参阅 GraphQL API 文档中的“[PullRequest](/graphql/reference/objects#pullrequest)”或 REST API 文档中的“[拉取请求](/rest/reference/pulls)”。

请注意，此事件 `GITHUB_SHA` 是拉取请求合并分支的最后一个合并提交。 如果要获取最后一次提交到拉取请求的头部分支的提交 ID，请改用 `github.event.pull_request.head.sha`。

例如，您可以在打开或重新打开拉取请求时运行工作流程。

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

您可以使用事件上下文进一步控制工作流程中作业的运行时间。 例如，此工作流程将在对请求审查拉取请求时运行，但 `specific_review_requested` 作业仅在请求 `octo-team` 审查时运行。

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

#### 基于拉取请求的头部分支或基本分支运行工作流程

您可以使用 `branches` 或 `branches-ignore` 筛选器，将工作流配置为仅针对特定分支的拉取请求运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”。

例如，当有人打开面向名称以 `releases/` 开头的分支的拉取请求时，此工作流程将运行：

```yaml
on:
  pull_request:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当在名称以 `releases/`开头的分支上打开包含 JavaScript (`.js`) 文件更改的拉取请求时，才会运行以下工作流程：

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

要基于拉取请求的头部分支名称（而不是拉取请求的基本分支名称）运行作业，请在条件中使用 `github.head_ref` 上下文。 例如，每当打开拉取请求时，此工作流程都会运行，但仅当拉取请求的头部是名称以 `releases/` 开头的分支时，才会执行 `run_if` 作业：

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

#### 根据拉取请求中更改的文件运行工作流程

您还可以将工作流程配置为在拉取请求更改特定文件时运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

例如，当拉取请求包含对 JavaScript 文件 (`.js`) 的更改时，此工作流程将运行：

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当在名称以 `releases/`开头的分支上打开包含 JavaScript (`.js`) 文件更改的拉取请求时，才会运行以下工作流程：

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

#### 在拉取请求合并时运行工作流程

当拉取请求合并时，拉取请求将自动关闭。 要在拉取请求合并时运行工作流程，请使用 `pull_request` `closed` 事件类型以及检查事件的 `merged` 值的条件。 例如，每当拉取请求关闭时，将运行以下工作流程。 仅当拉取请求也合并时， `if_merged` 作业才会运行。

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

### `pull_request_comment`（使用 `issue_comment`）

要在创建、编辑或删除对拉取请求（而不是拉取请求的差异）的评论时运行工作流程，请使用 [`issue_comment`](#issue_comment) 事件。 对于与拉取请求审核或拉取请求审核评论相关的活动，请使用 [`pull_request_review`](#pull_request_review) 或 [`pull_request_review_comment`](#pull_request_review_comment) 事件。

### `pull_request_review`

| Web 挂钩事件有效负载                                                                                                       | 活动类型                                                       | `GITHUB_SHA`            | `GITHUB_REF`                        |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ----------------------- | ----------------------------------- |
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% note %}

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

在提交、编辑或关闭拉取请求审阅时运行工作流程。 拉取请求审查是除正文评论和状态之外的一组拉取请求审查评论。 对于与拉取请求审查评论或拉取请求评论相关的活动，请改用 [`pull_request_review_comment`](#pull_request_review_comment) 或 [`issue_comment`](#issue_comment) 事件。 有关拉取请求审查 API 的信息，请参阅 GraphQL API 文档中的“[PullRequestReview](/graphql/reference/objects#pullrequest)”或 REST API 文档中的“[拉取请求审查](/rest/reference/pulls#reviews)”。

例如，您可以在拉取请求审查为 `edited` 或 `dismissed` 时运行工作流程。

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### 在批准拉取请求时运行工作流程

要在拉取请求获得批准时运行工作流程，可以使用 `submitted` 类型的 `pull_request_review` 事件触发工作流程，然后使用 `github.event.review.state` 属性检查审查状态。 例如，每当提交拉取请求审查时，此工作流程都将运行，但`approved` 作业仅当提交的审查是批准审查时才会运行：

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

在修改拉取请求审查评论时运行工作流程。 拉取请求审查评论是对拉取请求差异的评论。 对于与拉取请求评论或拉取请求评论相关的活动，请改用 [`pull_request_review`](#pull_request_review) 或 [`issue_comment`](#issue_comment) 事件。 有关拉取请求审查评论 API 的信息，请参阅 GraphQL API 文档中的“[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)”或 REST API 文档中的“[审查评论](/rest/reference/pulls#comments)”。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)”。 默认情况下，工作流程仅在 `pull_request_target` 的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 要让更多活动类型触发工作流程，请使用 `types` 关键词。 您可以使用 `types` 关键字指定不同的活动类型。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

{% endnote %}

{% note %}

**注意：** 默认情况下，只有 `opened`、`synchronize` 和 `reopened` 活动类型才会触发在 `pull_request` 事件上运行的工作流程。 要按不同的活动类型触发工作流，请使用 `types` 关键字。

{% endnote %}

在工作流程存储库中发生有关拉取请求的活动时运行工作流程。 例如，如果未指定任何活动类型，则工作流程将在打开或重新打开拉取请求时运行，或者在更新拉取请求的头部分支时运行。

此事件在拉取请求基础的上下文中运行，而不是像 `pull_request` 事件一样在合并提交的上下文中运行。 这样可以防止从拉取请求的头部执行不安全的代码，以免更改您的仓库或窃取您在工作流程中使用的任何机密。 此事件允许您的工作流程对来自复刻的拉取请求执行标记或评论等操作。 如果需要从拉取请求构建或运行代码，请避免使用此事件。

{% warning %}

**警告：** 对于由 `pull_request_target` 事件触发的工作流程，除非指定了 `permissions` 密钥并且工作流程可以访问机密，否则将向 `GITHUB_TOKEN` 授予读/写存储库权限， 即使它是从复刻触发的。 虽然工作流程在拉取请求的基础上下文中运行，但您应该确保不在此事件中检出、生成或运行来自拉取请求的不受信任代码。 此外，任何缓存都与基本分支共享相同的作用域。 为帮助防止缓存中毒，如果缓存内容可能已更改，则不应保存缓存。 更多信息请参阅 GitHub 安全实验室网站上的“[保持 GitHub Actions 和工作流程安全：阻止 pwn 请求](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)”。

{% endwarning %}

例如，您可以在拉取请求为 `assigned`、`opened`、`synchronize` 或 `reopened` 时运行工作流程。

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### 基于拉取请求的头部分支或基本分支运行工作流程

您可以使用 `branches` 或 `branches-ignore` 筛选器，将工作流配置为仅针对特定分支的拉取请求运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”。

例如，当有人打开面向名称以 `releases/` 开头的分支的拉取请求时，此工作流程将运行：

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:    
      - 'releases/**'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当在名称以 `releases/`开头的分支上打开包含 JavaScript (`.js`) 文件更改的拉取请求时，才会运行以下工作流程：

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

要基于拉取请求的头部分支名称（而不是拉取请求的基本分支名称）运行作业，请在条件中使用 `github.head_ref` 上下文。 例如，每当打开拉取请求时，此工作流程都会运行，但仅当拉取请求的头部是名称以 `releases/` 开头的分支时，才会执行 `run_if` 作业：

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

#### 根据拉取请求中更改的文件运行工作流程

您可以使用 `paths` 或 `paths-ignore` 筛选器来配置工作流程，以便在拉取请求更改特定文件时运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

例如，当拉取请求包含对 JavaScript 文件 (`.js`) 的更改时，此工作流程将运行：

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当在名称以 `releases/`开头的分支上打开包含 JavaScript (`.js`) 文件更改的拉取请求时，才会运行以下工作流程：

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

#### 在拉取请求合并时运行工作流程

当拉取请求合并时，拉取请求将自动关闭。 要在拉取请求合并时运行工作流程，请使用 `pull_request_target` `closed` 事件类型以及检查事件的 `merged` 值的条件。 例如，每当拉取请求关闭时，将运行以下工作流程。 仅当拉取请求也合并时， `if_merged` 作业才会运行。

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

### `推送`

| Web 挂钩事件有效负载                                                                       | 活动类型 | `GITHUB_SHA`           | `GITHUB_REF` |
| ---------------------------------------------------------------------------------- | ---- | ---------------------- | ------------ |
| [`推送`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | n/a  | 推送的提交，除非删除分支（当它是默认分支时） | 更新的引用        |

{% note %}

**注：**适用于 GitHub Actions 的 web 挂钩有效负载在 `commit` 对象中不包括 `added`、`removed` 和 `modified` 属性。 您可以使用 API 检索完整的提交对象。 有关信息，请参阅 GraphQL API 文档中的“[提交](/graphql/reference/objects#commit)”或 REST API 文档中的“[获取提交](/rest/reference/commits#get-a-commit)”。

{% endnote %}

{% note %}

**注意**：一次推送三个以上的标记时，不会创建事件。

{% endnote %}

在推送提交或标记时运行工作流程。

例如，您可以在发生 `push` 事件时运行工作流程。

```yaml
on:
  push
```

#### 仅在推送到特定分支时运行工作流程

您可以使用 `branches` 或 `branches-ignore` 筛选器，将工作流程配置为仅在推送特定分支时运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”。

例如，当有人推送到 `main` 分支或以 `releases/` 开头的分支时，此工作流程将运行。

```yaml
on:
  push:
    branches:    
      - 'main'
      - 'releases/**'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当向名称以 `releases/`开头的分支发出包含 JavaScript (`.js`) 文件更改的推送时，才会运行以下工作流程：

```yaml
on:
  push:
    branches:    
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### 仅在发生特定标记的推送时运行工作流程

您可以使用 `tags` 或 `tags-ignore` 筛选器，将工作流程配置为仅在特定标记或推送时运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”。

例如，当有人推送以 `v1.` 开头的标记时，此工作流程将运行。

```yaml
on:
  push:
    tags:        
      - v1.**
```

#### 仅当推送影响特定文件时才运行工作流程

可以使用 `paths` 或 `paths-ignore` 筛选器配置工作流程在推送到特定文件时运行。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

例如，当有人将更改推送到 JavaScript 文件 (`.js`)时，此工作流程将运行：

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**注意：**{% data reusables.actions.branch-paths-filter %} 例如，仅当向名称以 `releases/`开头的分支发出包含 JavaScript (`.js`) 文件更改的推送时，才会运行以下工作流程：

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

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

当存储库中发生与 {% data variables.product.prodname_registry %} 相关的活动时运行工作流程。 更多信息请参阅“[{% data variables.product.prodname_registry %} 文档](/packages)”。

例如，您可以在软件包为 `published` 时运行工作流程。

```yaml
on:
  registry_package:
    types: [published]
```

### `发行版`

| Web 挂钩事件有效负载                                                                           | 活动类型                                                                                                                                                            | `GITHUB_SHA` | `GITHUB_REF`                           |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| [`发行版`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | 标记的发行版中的最新提交 | 发行版 `refs/tags/<tag_name>` 的标记引用 |

{% note %}

**注意**：{% data reusables.developer-site.multiple_activity_types %} 有关每种活动类型的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**注意**：对于草稿发行版的 `created`、`edited` 或 `deleted` 活动类型，不会触发工作流程。 当您通过 {% data variables.product.product_name %} 浏览器 UI 创建版本时，您的版本可能会自动另存为草稿。

{% endnote %}

{% note %}

**注意：**`prereleased` 类型不会触发从草稿版本预发布，但 `published` 类型会触发。 如果您希望工作流程在稳定*和*预发布时运行，请订阅 `published` 而不是 `released` 和 `prereleased`。

{% endnote %}

在存储库中发生发布活动时运行工作流程。 有关发行版 API 的信息，请参阅 GraphQL API 文档中的“[发行版](/graphql/reference/objects#release)”或 REST API 文档中的“[发行版](/rest/reference/releases)”。

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

当您请求创建 `repository_dispatch` 事件时，必须指定 `event_type` 以描述活动类型。 默认情况下，所有 `repository_dispatch`  活动类型都会触发工作流程运行。 您可以使用 `types` 关键字来限制工作流程在 `repository_dispatch` web 挂钩负载中发送特定 `event_type` 值时运行。

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**注意：** `event_type` 值限制为 100 个字符。

{% endnote %}

通过 `client_payload` 参数发送的任何数据都将在工作流程中的 `github.event` 上下文中提供。 例如，如果在创建存储库调度事件时发送此请求正文：

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

则您可以在如下工作流程中访问有效负载：

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

| 运算符 | 描述     | 示例                                                           |
| --- | ------ | ------------------------------------------------------------ |
| *   | 任意值    | `15 * * *` 每天每小时的每个第 15 分钟运行。                                |
| ,   | 值列表分隔符 | `2,10 4,5 * * *` 在每天第 4 和第 5 小时的第 2 和第 10 分钟运行。              |
| -   | 值的范围   | `30 4-6 * * *` 在第 4、5 和 6 小时的第 30 分钟运行。                      |
| /   | 步骤值    | `20/15 * * * *` 从第 20 分钟到第 59 分钟每隔 15 分钟运行（第 20、35 和 50 分钟）。 |

{% note %}

**注：** {% data variables.product.prodname_actions %} 不支持非标准语法 `@yearly`、`@monthly`、`@weekly`、`@daily`、`@hourly` 和 `@reboot`。

{% endnote %}

您可以使用 [crontab guru](https://crontab.guru/) 帮助生成计划任务语法并确认它在何时运行。 为帮助您开始，我们还提供了一系列 [crontab guru 示例](https://crontab.guru/examples.html)。

计划工作流程的通知将发送给最后修改工作流程文件中的 cron 语法的用户。 更多信息请参阅“[工作流程运行通知](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)”。

### `状态`

| Web 挂钩事件有效负载                                                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------------------------------ | ---- | ------------ | ------------ |
| [`状态`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | n/a  | 默认分支上的最新提交   | n/a          |

{% data reusables.actions.branch-requirement %}

在 Git 提交状态更改时运行工作流程。 例如，提交可标记为 `error`、`failure`、`pending` 或 `success`。 如果要提供有关状态更改的更多详细信息，则可能需要使用 [`check_run`](#check_run) 事件。 有关提交状态 API 的信息，请参阅 GraphQL API 文档中的“[状态](/graphql/reference/objects#statue)”或 REST API 文档中的“[状态](/rest/reference/commits#commit-statuses)”。

例如，您可以在发生 `status` 事件时运行工作流程。

```yaml
on:
  status
```

如果要基于新的提交状态在工作流程中运行作业，可以使用 `github.event.state` 上下文。 例如，以下工作流程在提交状态更改时触发，但仅当新的提交状态为 `error` 或 `failure` 时， `if_error_or_failure` 作业才会运行。

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

**注意**：{% data reusables.developer-site.multiple_activity_types %}尽管仅支持 `started` 活动类型，但如果将来添加更多活动类型，则指定活动类型将使您的工作流程保持特定。 有关每种活动类型的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

在工作流程的存储库加星标时运行工作流程。 有关拉取请求 API 的信息，请参阅 GraphQL API 文档中的“[addStar](/graphql/reference/mutations#addstar)”或 REST API 文档中的“[标星](/rest/reference/activity#starring)”。

例如，您可以在某人为仓库加星标时（即关注事件的 `started` 活动类型）运行工作流程。

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| Web 挂钩事件有效负载 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------ | ---- | ------------ | ------------ |
| 与调用方工作流程相同   | n/a  | 与调用方工作流程相同   | 与调用方工作流程相同   |

`workflow_call` 用于指示一个工作流程可以由另一个工作流程调用。 当使用 `workflow_call` 事件触发工作流程时，被调用工作流程中的事件负载与调用工作流程中的事件负载相同。 更多信息请参阅“[重用工作流程](/actions/learn-github-actions/reusing-workflows)”。

以下示例仅在从另一个工作流程调用时运行工作流程：

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| Web 挂钩事件有效负载                                                                                                 | 活动类型 | `GITHUB_SHA`          | `GITHUB_REF` |
| ------------------------------------------------------------------------------------------------------------ | ---- | --------------------- | ------------ |
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | n/a  | `GITHUB_REF` 分支上的最新提交 | 收到了分发的分支     |

要手动触发工作流程，请使用 `workflow_dispatch` 事件。 您可以使用 {% data variables.product.product_name %} API、{% data variables.product.prodname_cli %}或 {% data variables.product.product_name %} 浏览器界面手动触发工作流程运行。 更多信息请参阅“[手动配置工作流程](/actions/managing-workflow-runs/manually-running-a-workflow)。

```yaml
on: workflow_dispatch
```

#### 提供输入

您可以直接在工作流程中配置事件的自定义输入属性、默认输入值和必要输入。 触发事件时，可以提供 `ref` 和任何 `inputs`。 When the workflow runs, you can access the input values in the {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} context. 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
此示例定义了称为 `logLevel`、`tags` 和 `environment` 的输入。 在运行工作流程时，可以将这些输入的值传递给工作流程。 This workflow then prints the values to the log, using the {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags`, and  `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags`, and  `github.event.inputs.environment`{% endif %} context properties.

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

如果从浏览器运行此工作流程，则必须在工作流程运行之前手动输入所需输入的值。

![输入工作流程的输入](/assets/images/help/images/workflow-dispatch-inputs.png)

还可以在从脚本运行工作流程时传递输入，或者使用 {% data variables.product.prodname_cli %}。 例如：

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

更多信息请参阅“[手动运行工作流程](/actions/managing-workflow-runs/manually-running-a-workflow)”中的 {% data variables.product.prodname_cli %} 信息。

{% else %}
This example defines the `name` and `home` inputs and prints them using the {% ifversion actions-unified-inputs %}`inputs.name` and `inputs.home`{% else %}`github.event.inputs.name` and `github.event.inputs.home`{% endif %} contexts. 如果未提供 `home` ，则打印默认值“The Octoverse”。

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
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| Web 挂钩事件有效负载                                                                                         | 活动类型                                  | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------ | ------------ |
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | 默认分支上的最新提交   | 默认分支         |

{% note %}

**注意**：{% data reusables.developer-site.multiple_activity_types %} 重新运行工作流程时，不会发生 `requested` 活动类型。 有关每种活动类型的详细信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)”。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注意：** 不能使用 `workflow_run` 将超过三级的工作流程链接在一起。 例如，如果尝试触发五个工作流程（名称为 `B` 至 `F`）在初始工作流程 `A` 运行后按顺序运行（即：`A` → `B` → `C` → `D` → `E` → `F`），则工作流程 `E` 和 `F` 不会运行。

{% endnote %}

此事件在请求或完成工作流程运行时发生。 它允许您基于另一个工作流程的执行或完成来执行工作流程。 由 `workflow_run` 事件启动的工作流程能够访问密钥和写入令牌，即使以前的工作流程不能访问也一样。 这在以前的工作流程有意未获权限的情况下很有用，但您需要在以后的工作流程中采取特权行动。

在此示例中，工作流程配置为在单独的“运行测试”工作流程完成后运行。

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

如果为 `workflow_run` 事件指定了多个 `workflows` ，则只需运行其中一个工作流程。 例如，具有以下触发器的工作流程将在 "Staging" 工作流程或 "Lab" 工作流程完成时运行。

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### 基于另一个工作流程的结果运行工作流程

无论上一个工作流程的结果如何，工作流程运行都会被触发。 如果要基于触发工作流程的结果运行作业或步骤，则可以使用带有 `github.event.workflow_run.conclusion` 属性的条件。 例如，每当名为 "Build" 的工作流程完成时，此工作流程就会运行，但 `on-success` 作业仅在 "Build" 工作流程成功时才会运行，而 `on-failure` 作业仅在 "Build" 工作流程失败时才会运行：

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

#### 将工作流限于基于分支的运行

您可以使用 `branches` 或 `branches-ignore` 筛选器来指定触发工作流程必须在哪些分支上运行才能触发您的工作流程。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)”。 例如，仅当名为 `Build` 的工作流程在名为 ` <0>Canary` 的分支上运行时，具有以下触发器的工作流程才会运行。

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### 使用触发工作流程中的数据

您可以访问与触发工作流程的工作流程对应的 [`workflow_run` 事件有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)。 例如，如果触发工作流程生成构件，则使用 `workflow_run` 事件触发的工作流程可以访问这些构件。

以下工作流程将数据作为构件上传。 （在此简化的示例中，数据是拉取请求编号。）

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

当上述工作流程的运行完成时，它将触发以下工作流程的运行。 以下工作流程使用 `github.event.workflow_run` 上下文和 {% data variables.product.product_name %} REST API 下载由上述工作流程上传的构件，解压缩下载的构件，并对其编号作为构件上传的拉取请求进行评论。

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
