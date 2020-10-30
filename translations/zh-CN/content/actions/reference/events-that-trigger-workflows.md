---
title: 触发工作流程的事件
intro: '您可以配置工作流程在 {% data variables.product.product_name %} 上发生特定活动时运行、在预定的时间运行，或者在 {% data variables.product.product_name %} 外部的事件发生时运行。'
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

### 关于工作流程事件

您可以配置工作流程在 web 挂钩事件从 {% data variables.product.product_name %} 上的活动创建时运行。 工作流程可以使用多个 web 挂钩事件来触发工作流程运行。 更多信息请参阅“[web 挂钩](/webhooks)”。 有关 `on` 语法的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#on)”。

以下步骤将触发工作流程运行：

1. 仓库中发生事件，生成的事件 web 挂钩具有关联的提交 SHA 和 Git ref。
1. 在仓库的 `.github/workflow` 目录中关联的提交 SHA 或 Git ref 处搜索工作流程文件。 工作流程文件必须存在于该提交 SHA 或 Git ref 中才会被考虑。

  例如，如果事件发生在特定仓库分支上，则工作流程文件必须存在于该分支的仓库中。
1. 检查该提交 SHA 和 Git ref 的工作流程文件， 并且对其 `on:` 值与触发事件匹配的任何工作流程触发新的工作流程。

  工作流程在触发事件的相同提交 SHA 和 Git ref 上的仓库代码中运行。 当工作流程运行时，{% data variables.product.product_name %} 会在运行器环境中设置 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF`（Git 引用）环境变量。 更多信息请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

{% note %}

**注意：**无法使用 `GITHUB_TOKEN` 触发新的工作流程。 更多信息请参阅“[使用个人访问令牌触发新的工作流程](#triggering-new-workflows-using-a-personal-access-token)”。

{% endnote %}

{% data reusables.github-actions.actions-on-examples %}

### Web 挂钩事件

您可以将工作流程配置为在 GitHub 上创建 web 挂钩事件时运行。 某些事件有多种触发事件的活动类型。 如果有多种活动类型触发事件，则可以指定哪些活动类型将触发工作流程运行。

#### `check_run`

在发生 `check_run` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[检查运行](/v3/checks/runs/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                       | 活动类型                                                                                         | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在检查运行为 `rerequested` 或 `requested_action` 时运行工作流程。

```yaml
on:
  check_run:
    types: [rerequested, requested_action]
```

#### `check_suite`

在发生 `check_suite` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[检查套件](/v3/checks/suites/)”。

{% data reusables.github-actions.branch-requirement %}

{% note %}

**注意：**为防止递归工作流程，如果检查套件是由 {% data variables.product.prodname_actions %} 创建的，则此事件不会触发工作流程。

{% endnote %}

| Web 挂钩事件有效负载                                           | 活动类型                                                                       | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ------------ | ------------ |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在检查套件为 `rerequested` 或 `completed` 时运行工作流程。

```yaml
on:
  check_suite:
    types: [rerequested, completed]
```

#### `create`

每当有人创建分支或标记（触发 `create` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[创建引用](/v3/git/refs/#create-a-reference)”。

| Web 挂钩事件有效负载                                 | 活动类型 | `GITHUB_SHA`   | `GITHUB_REF` |
| -------------------------------------------- | ---- | -------------- | ------------ |
| [`create`](/webhooks/event-payloads/#create) | n/a  | 创建的分支或标记上的最新提交 | 创建的分支或标记     |

例如，您可以在发生 `create` 事件时运行工作流程。

```yaml
on:
  create
```

#### `delete`

每当有人删除分支或标记（触发 `delete` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[删除引用](/v3/git/refs/#delete-a-reference)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------- | ---- | ------------ | ------------ |
| [`delete`](/webhooks/event-payloads/#delete) | n/a  | 默认分支上的最新提交   | 默认分支         |

例如，您可以在发生 `delete` 事件时运行工作流程。

```yaml
on:
  delete
```

#### `deployment`

每当有人创建部署（触发 `deployment` 事件）时运行您的工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关 REST API 的信息，请参阅“[部署](/v3/repos/deployments/)”。

| Web 挂钩事件有效负载                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`     |
| ---------------------------------------------------- | ---- | ------------ | ---------------- |
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a  | 要部署的提交       | 要部署的分支或标记（提交时为空） |

例如，您可以在发生 `deployment` 事件时运行工作流程。

```yaml
on:
  deployment
```

#### `deployment_status`

每当第三方提供部署状态（触发 `deployment_status` 事件）时运行您的工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关 REST API 的信息，请参阅“[创建部署状态](/v3/repos/deployments/#create-a-deployment-status)”。

| Web 挂钩事件有效负载                                                       | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`     |
| ------------------------------------------------------------------ | ---- | ------------ | ---------------- |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a  | 要部署的提交       | 要部署的分支或标记（提交时为空） |

例如，您可以在发生 `deployment_status` 事件时运行工作流程。

```yaml
on:
  deployment_status
```

#### `复刻`

每当有人复刻仓库（触发 `fork` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[创建复刻](/v3/repos/forks/#create-a-fork)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                           | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------- | ---- | ------------ | ------------ |
| [`复刻`](/webhooks/event-payloads/#fork) | n/a  | 默认分支上的最新提交   | 默认分支         |

例如，您可以在发生 `fork` 事件时运行工作流程。

```yaml
on:
  fork
```

#### `gollum`

当有人创建或更新 Wiki 页面时（触发 `gollum` 事件）运行您的工作流程。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------- | ---- | ------------ | ------------ |
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a  | 默认分支上的最新提交   | 默认分支         |

例如，您可以在发生 `gollum` 事件时运行工作流程。

```yaml
on:
  gollum
```

#### `issue_comment`

在发生 `issue_comment` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[议题评论](/v3/issues/comments/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                               | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| [`issue_comment`](/v3/activity/event_types/#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在议题评论为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### `issues`

在发生 `issues` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[议题](/v3/issues)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                 | 活动类型                                                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`issues`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在议题为 `opened`、`edited` 或 `milestoned` 时运行工作流程。

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `标签`

在发生 `label` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[标签](/v3/issues/labels/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                            | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------------------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| [`标签`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在标签为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  label:
    types: [created, deleted]
```

#### `里程碑`

在发生 `milestone` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[里程碑](/v3/issues/milestones/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                 | 活动类型                                                                                                        | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`里程碑`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在里程碑为 `opened` 或 `deleted` 时运行工作流程。

```yaml
on:
  milestone:
    types: [opened, deleted]
```

#### `page_build`

在有人推送到启用 {% data variables.product.product_name %} Pages 的分支（触发 `page_build` 事件）的任何时间运行您的工作流程。 有关 REST API 的信息，请参阅“[页面](/v3/repos/pages/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------------- | ---- | ------------ | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a  | 默认分支上的最新提交   | n/a          |

例如，您可以在发生 `page_build` 事件时运行工作流程。

```yaml
on:
  page_build
```

#### `project`

在发生 `project` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目](/v3/projects/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                   | 活动类型                                                                                                                                | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`project`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在项目为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  project:
    types: [created, deleted]
```

#### `project_card`

在发生 `project_card` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目卡](/v3/projects/cards)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                             | 活动类型                                                                                                           | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在项目卡为 `opened` 或 `deleted` 时运行工作流程。

```yaml
on:
  project_card:
    types: [opened, deleted]
```

#### `project_column`

在发生 `project_column` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目列](/v3/projects/columns)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                                 | 活动类型                                                                        | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------ | ------------ |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在项目列为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  project_column:
    types: [created, deleted]
```

#### `public`

每当有人将私有仓库公开（触发 `public` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[编辑仓库](/v3/repos/#edit)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------- | ---- | ------------ | ------------ |
| [`public`](/webhooks/event-payloads/#public) | n/a  | 默认分支上的最新提交   | 默认分支         |

例如，您可以在发生 `public` 事件时运行工作流程。

```yaml
on:
  public
```

#### `pull_request`

在发生 `pull_request` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[拉取请求](/v3/pulls)”。

{% note %}

**注**默认情况下，工作流程仅在 `pull_request` 的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 要让更多活动类型触发工作流程，请使用 `types` 关键词。

{% endnote %}

| Web 挂钩事件有效负载                                             | 活动类型                                                                                                                                                                                                                                                                                                                                                 | `GITHUB_SHA`            | `GITHUB_REF`                        |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

您可以使用 `types` 关键词扩展或限制默认活动类型。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

例如，您可以在拉取请求为 `assigned`、`opened`、`synchronize` 或 `reopened` 时运行工作流程。

```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review`

在发生 `pull_request_review` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[拉取请求审查](/v3/pulls/reviews)”。

| Web 挂钩事件有效负载                                                           | 活动类型                                                       | `GITHUB_SHA`            | `GITHUB_REF`                        |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------- | ----------------------------------- |
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在拉取请求审查为 `edited` 或 `dismissed` 时运行工作流程。

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_review_comment`

每当拉取请求统一差异的评论被修改（触发 `pull_request_review_comment` 事件）时运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %} 有关 REST API 的信息，请参阅“[审查评论](/v3/pulls/comments)”。

| Web 挂钩事件有效负载                                                                           | 活动类型                                                   | `GITHUB_SHA`            | `GITHUB_REF`                        |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------- | ----------------------------------- |
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | `GITHUB_REF` 分支上的最新合并提交 | PR 合并分支 `refs/pull/:prNumber/merge` |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在拉取请求审查评论为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

#### `pull_request_target`

此事件类似于 `pull_request`，只不过它在拉取请求的基础仓库的上下文中运行，而不是在合并提交中运行。 这意味着您可以更安全地将您的密码提供给由拉取请求触发的工作流程，因为只有在基础仓库的提交中定义的工作流程才会运行。 例如，此事件允许您根据事件有效负载的内容创建工作流程来标识和评论拉取请求。

| Web 挂钩事件有效负载                                             | 活动类型                                                                                                                                                                                                                                                                                                                                                 | `GITHUB_SHA`   | `GITHUB_REF` |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | PR 基分支上的最后一次提交 | PR 基础分支      |

默认情况下，工作流程仅在 `pull_request_target` 的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 要让更多活动类型触发工作流程，请使用 `types` 关键词。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

例如，您可以在拉取请求为 `assigned`、`opened`、`synchronize` 或 `reopened` 时运行工作流程。

```yaml
on: pull_request_target
    types: [assigned, opened, synchronize, reopened]
```

#### `推送`

{% note %}

**注：**适用于 GitHub Actions 的 web 挂钩有效负载在 `commit` 对象中不包括 `added`、`removed` 和 `modified` 属性。 您可以使用 REST API 检索完整的提交对象。 更多信息请参阅“[获取单个提交](/v3/repos/commits/#get-a-single-commit)”。

{% endnote %}

有人向仓库分支推送（触发 `push` 事件）时运行您的工作流程。

| Web 挂钩事件有效负载                           | 活动类型 | `GITHUB_SHA`           | `GITHUB_REF` |
| -------------------------------------- | ---- | ---------------------- | ------------ |
| [`推送`](/webhooks/event-payloads/#push) | n/a  | 推送的提交，除非删除分支（当它是默认分支时） | 更新的引用        |

例如，您可以在发生 `push` 事件时运行工作流程。

```yaml
on:
  push
```

#### `registry_package`

只要软件包为 `published` or `updated`，即运行工作流程。 更多信息请参阅“[使用 {% data variables.product.prodname_registry %} 管理包](/github/managing-packages-with-github-packages)”。

| Web 挂钩事件有效负载                                            | 活动类型                                | `GITHUB_SHA`                    | `GITHUB_REF` |
| ------------------------------------------------------- | ----------------------------------- | ------------------------------- | ------------ |
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | Commit of the published package | 已发布软件包的分支或标签 |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在软件包为 `published` 时运行工作流程。

```yaml
on:
  registry_package:
    types: [published]
```

#### `发行版`

{% note %}

**注意：**对草稿发行版不触发 `release` 事件。

{% endnote %}

在发生 `release` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[发行版](/v3/repos/releases/)”。

| Web 挂钩事件有效负载                               | 活动类型                                                                                                                                                                                                                                      | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`发行版`](/webhooks/event-payloads/#release) | - `published`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released`{% endif %} | 标记的发行版中的最新提交 | 发行版标记        |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在版本发布为 `published` 时运行工作流程。

```yaml
on:
  release:
    types: [published]
```

#### `状态`

在 Git 提交的状态发生变化（触发 `status` 事件）的任何时间运行您的工作流程。 有关 REST API 的信息，请参阅“[状态](/v3/repos/statuses/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                             | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------- | ---- | ------------ | ------------ |
| [`状态`](/webhooks/event-payloads/#status) | n/a  | 默认分支上的最新提交   | n/a          |

例如，您可以在发生 `status` 事件时运行工作流程。

```yaml
on:
  status
```

#### `查看`

在发生 `watch` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[星标](/v3/activity/starring/)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                            | 活动类型        | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------------------------- | ----------- | ------------ | ------------ |
| [`查看`](/webhooks/event-payloads/#watch) | - `started` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在某人为仓库加星标时（即触发关注事件的 `started` 活动类型）运行工作流程。

```yaml
on:
  watch:
    types: [started]
```

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

如果需要从此事件中筛选分支，可以使用 `branches` 或 `branches-ignore`。

在此示例中，工作流程配置为在单独的“运行测试”工作流程完成后运行。

```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```

### 安排的事件

`schedule` 事件允许您在计划的时间触发工作流程。

#### `schedule`

| Web 挂钩事件有效负载 | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`                                                                                                                                                                                                                     |
| ------------ | ---- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a          | n/a  | 默认分支上的最新提交   | 默认分支 | 安排的工作流程设置为运行。 预定的工作流程使用 [POSIX 计划任务语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)。 更多信息请参阅“[通过事件触发工作流程](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)”。 |

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
| *   | 任意值    | `* * * * *` 在每天的每分钟运行。                                       |
| ,   | 值列表分隔符 | `2,10 4,5 * * *` 在每天第 4 和第 5 小时的第 2 和第 10 分钟运行。              |
| -   | 值的范围   | `0 4-6 * * *` 在第 4、5、6 小时的第 0 分钟运行。                          |
| /   | 步骤值    | `20/15 * * * *` 从第 20 分钟到第 59 分钟每隔 15 分钟运行（第 20、35 和 50 分钟）。 |

{% note %}

**注：** {% data variables.product.prodname_actions %} 不支持非标准语法 `@yearly`、`@monthly`、`@weekly`、`@daily`、`@hourly` 和 `@reboot`。

{% endnote %}

您可以使用 [crontab guru](https://crontab.guru/) 帮助生成计划任务语法并确认它在何时运行。 为帮助您开始，我们还提供了一系列 [crontab guru 示例](https://crontab.guru/examples.html)。

### 手动事件

您可以手动触发工作流程运行。 要触发仓库中的特定工作流程，请使用 `workflow_dispatch` 事件。 要触发仓库中的多个工作流程并创建自定义事件和事件类型，请使用 `repository_dispatch` 事件。

#### `workflow_dispatch`

| Web 挂钩事件有效负载                                                     | 活动类型 | `GITHUB_SHA`          | `GITHUB_REF` |
| ---------------------------------------------------------------- | ---- | --------------------- | ------------ |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a  | `GITHUB_REF` 分支上的最新提交 | 收到了分发的分支     |

您可以使用 {% data variables.product.product_name %} API 以及从 {% data variables.product.product_name %} 手动触发工作流程运行。 要使用 REST API 触发自定义 `workflow_dispatch` web 挂钩事件，您必须发送 `POST` 请求到 {% data variables.product.prodname_dotcom %} API 端点，并提供 `ref` 和任何必要的 `inputs`。 更多信息请参阅“[创建工作流程调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”REST API 端点。

 当您在 {% data variables.product.prodname_dotcom %} 上触发事件时，可以在 {% data variables.product.prodname_dotcom %} 上直接提供 `ref` 和任何 `inputs`。 更多信息请参阅“[配置工作流程](/actions/configuring-and-managing-workflows/configuring-a-workflow#manually-running-a-workflow)。

#### `repository_dispatch`

| Web 挂钩事件有效负载                                                         | 活动类型 | `GITHUB_SHA`          | `GITHUB_REF` |
| -------------------------------------------------------------------- | ---- | --------------------- | ------------ |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a  | `GITHUB_REF` 分支上的最新提交 | 收到了分发的分支     |

{% data reusables.github-actions.branch-requirement %}

当您想要触发在 {% data variables.product.product_name %} 外发生的活动的工作流程时，可以使用 {% data variables.product.prodname_dotcom %} API 触发名为 [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) 的 web 挂钩事件。 有关详细信息，请参阅"[创建存储库调度事件](/v3/repos/#create-a-repository-dispatch-event)。

要触发自定义 `repository_dispatch` web 挂钩事件，必须将 `POST` 请求发送到 {% data variables.product.product_name %} API 端点，并提供 `event_type` 名称来描述活动类型。 要触发工作流程运行，还必须配置工作流程使用 `repository_dispatch` 事件。

##### 示例

默认情况下，所有 `event_types` 都会触发工作流程运行。 您可以限制工作流程在 `repository_dispatch` web 挂钩有效负载中发送特定 `event_type` 值时运行。 创建仓库调度事件时定义在 `repository_dispatch` 有效负载中发送的事件类型。

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

### 使用个人访问令牌触发新工作流程

{% data reusables.github-actions.actions-do-not-trigger-workflows %} 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

如果要从工作流程运行触发工作流程，您可以使用个人访问令牌触发事件。 您需要创建个人访问令牌并将其存储为密码。 为了最大限度地降低 {% data variables.product.prodname_actions %} 使用成本，请确保不要创建递归或意外的工作流程。 更多信息请参阅“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。
