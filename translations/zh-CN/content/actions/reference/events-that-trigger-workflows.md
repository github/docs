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
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 配置工作流程事件

您可以使用 `on` 工作流程语法配置工作流程为一个或多个事件运行。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#on)”。

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**注意：**无法使用 `GITHUB_TOKEN` 触发新的工作流程。 更多信息请参阅“[使用个人访问令牌触发新的工作流程](#triggering-new-workflows-using-a-personal-access-token)”。

{% endnote %}

以下步骤将触发工作流程运行：

1. 仓库中发生事件，生成的事件具有关联的提交 SHA 和 Git ref。
2. 在仓库的 `.github/workflow` 目录中关联的提交 SHA 或 Git ref 处搜索工作流程文件。 工作流程文件必须存在于该提交 SHA 或 Git ref 中才会被考虑。

  例如，如果事件发生在特定仓库分支上，则工作流程文件必须存在于该分支的仓库中。
1. 检查该提交 SHA 和 Git ref 的工作流程文件， 并且对其 `on:` 值与触发事件匹配的任何工作流程触发新的工作流程。

  工作流程在触发事件的相同提交 SHA 和 Git ref 上的仓库代码中运行。 当工作流程运行时，{% data variables.product.product_name %} 会在运行器环境中设置 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF`（Git 引用）环境变量。 更多信息请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

### 安排的事件

`schedule` 事件允许您在计划的时间触发工作流程。

{% data reusables.actions.schedule-delay %}

#### `计划`

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

计划工作流程的通知将发送给最后修改工作流程文件中的 cron 语法的用户。 更多信息请参阅“[工作流程运行通知](/actions/guides/about-continuous-integration#notifications-for-workflow-runs)”。

### 手动事件

您可以手动触发工作流程运行。 要触发仓库中的特定工作流程，请使用 `workflow_dispatch` 事件。 要触发仓库中的多个工作流程并创建自定义事件和事件类型，请使用 `repository_dispatch` 事件。

#### `workflow_dispatch`

| Web 挂钩事件有效负载                                                     | 活动类型 | `GITHUB_SHA`          | `GITHUB_REF` |
| ---------------------------------------------------------------- | ---- | --------------------- | ------------ |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a  | `GITHUB_REF` 分支上的最新提交 | 收到了分发的分支     |

您可以直接在工作流程中配置事件的自定义输入属性、默认输入值和必要输入。 当工作流程运行时，您可以访问 `github.event.inputs` 上下文中的输入值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

您可以使用 {% data variables.product.product_name %} API 以及从 {% data variables.product.product_name %} 手动触发工作流程运行。 更多信息请参阅“[手动配置工作流程](/actions/managing-workflow-runs/manually-running-a-workflow)。

 当您在 {% data variables.product.prodname_dotcom %} 上触发事件时，可以在 {% data variables.product.prodname_dotcom %} 上直接提供 `ref` 和任何 `inputs`。 更多信息请参阅“[对操作使用输入和输出](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)”。

 要使用 REST API 触发自定义 `workflow_dispatch` web 挂钩事件，您必须发送 `POST` 请求到 {% data variables.product.prodname_dotcom %} API 端点，并提供 `ref` 和任何必要的 `inputs`。 更多信息请参阅“[创建工作流程调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”REST API 端点。

##### 示例

要使用 `Workflow_paid` 事件，您需要将其作为触发器包含在您的 GitHub Actions 工作流程文件中。 下面的示例仅在手动触发时运行工作流程：

```yaml
on: workflow_dispatch
```

##### 示例工作流程配置

此示例定义了 `name` 和 `home` 输入，并使用 `github.event.inputs.name` 和 `github.event.inputs.home` 上下文打印。 如果未提供 `home` ，则打印默认值“The Octoverse”。

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

| Web 挂钩事件有效负载                                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------------------- | ---- | ------------ | ------------ |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a  | 默认分支上的最新提交   | 默认分支         |

{% data reusables.github-actions.branch-requirement %}

当您想要触发在 {% data variables.product.product_name %} 外发生的活动的工作流程时，可以使用 {% data variables.product.prodname_dotcom %} API 触发名为 [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) 的 web 挂钩事件。 更多信息请参阅“[创建仓库调度事件](/rest/reference/repos#create-a-repository-dispatch-event)”。

要触发自定义 `repository_dispatch` web 挂钩事件，必须将 `POST` 请求发送到 {% data variables.product.product_name %} API 端点，并提供 `event_type` 名称来描述活动类型。 要触发工作流程运行，还必须配置工作流程使用 `repository_dispatch` 事件。

##### 示例

默认情况下，所有 `event_types` 都会触发工作流程运行。 您可以限制工作流程在 `repository_dispatch` web 挂钩有效负载中发送特定 `event_type` 值时运行。 创建仓库调度事件时定义在 `repository_dispatch` 有效负载中发送的事件类型。

```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```

### Web 挂钩事件

您可以将工作流程配置为在 {% data variables.product.product_name %} 上生成 web 挂钩事件时运行。 某些事件有多种触发事件的活动类型。 如果有多种活动类型触发事件，则可以指定哪些活动类型将触发工作流程运行。 更多信息请参阅“[web 挂钩](/webhooks)”。

并非所有 web 挂钩事件都触发工作流程。 要了解可用 web 挂钩事件及其有效负载的完整列表，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads)”。

#### `check_run`

在发生 `check_run` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[检查运行](/rest/reference/checks#runs)”。

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

在发生 `check_suite` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[检查套件](/rest/reference/checks#suites)”。

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

每当有人创建分支或标记（触发 `create` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[创建引用](/rest/reference/git#create-a-reference)”。

| Web 挂钩事件有效负载                                 | 活动类型 | `GITHUB_SHA`   | `GITHUB_REF` |
| -------------------------------------------- | ---- | -------------- | ------------ |
| [`create`](/webhooks/event-payloads/#create) | n/a  | 创建的分支或标记上的最新提交 | 创建的分支或标记     |

例如，您可以在发生 `create` 事件时运行工作流程。

```yaml
on:
  create
```

#### `delete`

每当有人删除分支或标记（触发 `delete` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[删除引用](/rest/reference/git#delete-a-reference)”。

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

每当有人创建部署（触发 `deployment` 事件）时运行您的工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关 REST API 的信息，请参阅“[部署](/rest/reference/repos#deployments)”。

| Web 挂钩事件有效负载                                         | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`     |
| ---------------------------------------------------- | ---- | ------------ | ---------------- |
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a  | 要部署的提交       | 要部署的分支或标记（提交时为空） |

例如，您可以在发生 `deployment` 事件时运行工作流程。

```yaml
on:
  deployment
```

#### `deployment_status`

每当第三方提供部署状态（触发 `deployment_status` 事件）时运行您的工作流程。 使用提交 SHA 创建的部署可能没有 Git 引用。 有关 REST API 的信息，请参阅“[创建部署状态](/rest/reference/repos#create-a-deployment-status)”。

| Web 挂钩事件有效负载                                                       | 活动类型 | `GITHUB_SHA` | `GITHUB_REF`     |
| ------------------------------------------------------------------ | ---- | ------------ | ---------------- |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a  | 要部署的提交       | 要部署的分支或标记（提交时为空） |

例如，您可以在发生 `deployment_status` 事件时运行工作流程。

```yaml
on:
  deployment_status
```

{% note %}

**注意：** 当部署状态设置为 `inactive` 时，不会创建 web 挂钩事件。

{% endnote %}

#### `复刻`

每当有人复刻仓库（触发 `fork` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[创建复刻](/rest/reference/repos#create-a-fork)”。

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

在发生 `issue_comment` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[议题评论](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                                                                 | 活动类型                                                              | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在议题评论为 `created` 或 `deleted` 时运行工作流程。

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

`issue_comment` 事件在评论问题和拉取请求时发生。 要确定 `issue_comment` 事件是否从议题或拉取请求触发，可以检查 `issue.pull_request` 属性的事件有效负载，并使用它作为跳过作业的条件。

例如，您可以选择在拉取请求中发生评论事件时运行 `pr_commented` 作业，在议题中发生评论事件时运行 `issue_commented` 作业。

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

#### `议题`

在发生 `issues` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[议题](/rest/reference/issues)”。

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                             | 活动类型                                                                                                                                                                                                                                                                                                                                                                   | `GITHUB_SHA` | `GITHUB_REF` |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`议题`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在议题为 `opened`、`edited` 或 `milestoned` 时运行工作流程。

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

#### `标签`

在发生 `label` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[标签](/rest/reference/issues#labels)”。

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

在发生 `milestone` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[里程碑](/rest/reference/issues#milestones)”。

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

在有人推送到启用 {% data variables.product.product_name %} Pages 的分支（触发 `page_build` 事件）的任何时间运行您的工作流程。 有关 REST API 的信息，请参阅“[页面](/rest/reference/repos#pages)”。

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

在发生 `project` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目](/rest/reference/projects)”。

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

在发生 `project_card` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目卡](/rest/reference/projects#cards)”。

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

在发生 `project_column` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[项目列](/rest/reference/projects#columns)”。

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

每当有人将私有仓库公开（触发 `public` 事件）时运行您的工作流程。 有关 REST API 的信息，请参阅“[编辑仓库](/rest/reference/repos#edit)”。

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

在发生 `pull_request` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[拉取请求](/rest/reference/pulls)”。

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

在发生 `pull_request_review` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[拉取请求审查](/rest/reference/pulls#reviews)”。

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

每当拉取请求统一差异的评论被修改（触发 `pull_request_review_comment` 事件）时运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %} 有关 REST API 的信息，请参阅“[审查评论](/rest/reference/pulls#comments)”。

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `pull_request_target`

此事件在拉取请求基础的上下文中运行，而不是像 `pull_request` 事件一样在合并提交中运行。  这样可以防止从拉取请求的头部执行不安全的工作流程代码，以免更改您的仓库或窃取您在工作流程中使用的任何机密。 此事件允许您根据事件有效负载的内容创建工作流程来标识和评论拉取请求，等等。

{% warning %}

**警告：** `pull_request_target` 事件被授予读/写仓库令牌，可以访问机密，即使从复刻触发时。 虽然工作流程在拉取请求的基础上下文中运行，但您应该确保不在此事件中检出、生成或运行来自拉取请求的不受信任代码。 此外，任何缓存共享与基本分支相同的范围，并且为了帮助防止缓存中毒，如果缓存内容可能已更改，则不应保存缓存。 更多信息请参阅 GitHub 安全实验室网站上的“[保持 GitHub Actions 和工作流程安全：阻止 pwn 请求](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)”。

{% endwarning %}

| Web 挂钩事件有效负载                                                    | 活动类型                                                                                                                                                                                                                                                                                                                                                 | `GITHUB_SHA`   | `GITHUB_REF` |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ |
| [`pull_request_target`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | PR 基分支上的最后一次提交 | PR 基础分支      |

默认情况下，工作流程仅在 `pull_request_target` 的活动类型为 `opened`、`synchronize` 或 `reopened` 时运行。 要让更多活动类型触发工作流程，请使用 `types` 关键词。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”。

例如，您可以在拉取请求为 `assigned`、`opened`、`synchronize` 或 `reopened` 时运行工作流程。

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

{% endif %}

#### `推送`

{% note %}

**注：**适用于 GitHub Actions 的 web 挂钩有效负载在 `commit` 对象中不包括 `added`、`removed` 和 `modified` 属性。 您可以使用 REST API 检索完整的提交对象。 更多信息请参阅“[获取提交](/rest/reference/repos#get-a-commit)”。

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

在发生 `release` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[发行版](/rest/reference/repos#releases)”。

| Web 挂钩事件有效负载                               | 活动类型                                                                                                                                                            | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| [`发行版`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | 标记的发行版中的最新提交 | 发行版标记        |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

例如，您可以在版本发布为 `published` 时运行工作流程。

```yaml
on:
  release:
    types: [published]
```

#### `状态`

在 Git 提交的状态发生变化（触发 `status` 事件）的任何时间运行您的工作流程。 有关 REST API 的信息，请参阅“[状态](/rest/reference/repos#statuses)”。

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

在发生 `watch` 事件的任何时间运行您的工作流程。 {% data reusables.developer-site.multiple_activity_types %}有关 REST API 的信息，请参阅“[星标](/rest/reference/activity#starring)”。

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

{% data reusables.github-actions.branch-requirement %}

| Web 挂钩事件有效负载                                             | 活动类型                                  | `GITHUB_SHA` | `GITHUB_REF` |
| -------------------------------------------------------- | ------------------------------------- | ------------ | ------------ |
| [`workflow_run`](/webhooks/event-payloads/#workflow_run) | - `completed`<br/>- `requested` | 默认分支上的最新提交   | 默认分支         |

{% data reusables.developer-site.limit_workflow_to_activity_types %}

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

{% endif %}

要根据上次工作流程运行的结果有条件地运行工作流程作业，您可以使用 [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) 或 [`jobs.<job_id>.steps[*].if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) 有条件地结合上次运行的`结论`。 例如：

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

### 使用个人访问令牌触发新工作流程

{% data reusables.github-actions.actions-do-not-trigger-workflows %} 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

如果要从工作流程运行触发工作流程，您可以使用个人访问令牌触发事件。 您需要创建个人访问令牌并将其存储为密码。 为了最大限度地降低 {% data variables.product.prodname_actions %} 使用成本，请确保不要创建递归或意外的工作流程。 有关存储个人访问令牌的更多信息，请参阅“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。
