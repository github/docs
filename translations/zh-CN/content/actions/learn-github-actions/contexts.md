---
title: 上下文
shortTitle: Contexts
intro: 您可以在工作流程和操作中访问上下文信息。
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191932'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于上下文

上下文是一种访问工作流程运行、运行器环境、作业及步骤相关信息的方式。 每个上下文都是一个包含属性的对象，属性可以是字符串或其他对象。

{% data reusables.actions.context-contents %} 例如，`matrix` 上下文仅针对[矩阵](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)中的作业填充。

您可以使用表达式语法访问上下文。 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| 上下文名称 | 类型 | 说明 |
|---------------|------|-------------|
| `github` | `object` | 工作流程运行的相关信息。 有关更多信息，请参阅 [`github` 上下文](#github-context)。 |
| `env` | `object` | 包含工作流程、作业或步骤中设置的环境变量。 有关更多信息，请参阅 [`env` 上下文](#env-context)。 |
| `job` | `object` | 有关当前运行的作业的信息。 有关更多信息，请参阅 [`job` 上下文](#job-context)。 |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | 仅适用于可重用工作流，包含可重用工作流中的作业输出。 有关更多信息，请参阅 [`jobs` 上下文](#jobs-context)。 |{% endif %} | `steps` | `object` | 有关当前作业中已运行的步骤的信息。 有关更多信息，请参阅 [`steps` 上下文](#steps-context)。 | | `runner` | `object` | 有关运行当前作业的运行器的信息。 有关更多信息，请参阅 [`runner` 上下文](#runner-context)。 | | `secrets` | `object` | 包含可用于工作流运行的机密的名称和值。 有关更多信息，请参阅 [`secrets` 上下文](#secrets-context)。 | | `strategy` | `object` | 有关当前作业的矩阵执行策略的信息。 有关更多信息，请参阅 [`strategy` 上下文](#strategy-context)。 | | `matrix` | `object` | 包含在工作流中定义的应用于当前作业的矩阵属性。 有关更多信息，请参阅 [`matrix` 上下文](#matrix-context)。 | | `needs` | `object` | 包含定义为当前作业依赖项的所有作业的输出。 有关更多信息，请参阅 [`needs` 上下文](#needs-context)。 | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | 包含可重用{% ifversion actions-unified-inputs %}或手动触发的{% endif %}工作流的输入。 有关更多信息，请参阅 [`inputs` 上下文](#inputs-context)。 |{% endif %}

作为表达式的一部分，您可以使用以下两种语法之一访问上下文信息。

- 索引语法：`github['sha']`
- 属性取消引用语法：`github.sha`

若要使用属性取消引用语法，属性名称必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

如果尝试取消引用不存在的属性，则计算结果为空字符串。

### 确定何时使用上下文

{% data reusables.actions.using-context-or-environment-variables %}

### 上下文可用性

在整个工作流程运行过程中，提供不同的上下文。 例如，`secrets` 上下文只能在作业中的某些位置使用。

此外，某些功能只能在某些地方使用。 例如，`hashFiles` 函数在任何地方都不可用。

下表列出了工作流程中每一个上下文和特殊函数可以使用的地方。 除非下面列出，否则可以在任何地方使用函数。

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| 工作流程键 | 上下文 | 特殊函数 |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| 路径 | 上下文 | 特殊函数 |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### 示例：将上下文信息打印到日志

您可以将上下文的内容打印到日志中进行调试。 需要使用 [`toJSON` 函数 ](/actions/learn-github-actions/expressions#tojson) 才能将 JSON 对象优质打印到日志。

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## `github` 上下文

`github` 上下文包含有关工作流运行和触发运行的事件的信息。 还可以读取环境变量中的大多数 `github` 上下文数据。 有关环境变量的详细信息，请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `github` | `object` | 工作流程中任何作业或步骤期间可用的顶层上下文。 此对象包含下面列出的所有属性。 |
| `github.action` | `string` | 正在运行的操作的名称，或步骤的 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)。 在当前步骤运行脚本（无 `id`）时，{% data variables.product.prodname_dotcom %} 删除特殊字符并使用名称 `__run`。 如果在同一作业中多次使用相同的操作，则名称将包含一个前面跟序号和下划线的后缀。 例如，运行的第一个脚本名称 `__run`，则第二个脚本将命名为 `__run_2`。 同样，`actions/checkout` 的第二次调用将为 `actionscheckout2`。 |
| `github.action_path` | `string` | 操作所在的路径。 此属性仅在复合操作中受支持。 您可以使用此路径访问与操作位于同一存储库中的文件。 |
| `github.action_ref` | `string` | 对于执行操作的步骤，这是正在执行的操作的引用。 例如，`v2`。 |
| `github.action_repository` | `string` | 对于执行操作的步骤，这是操作的所有者和存储库名称。 例如，`actions/checkout`。 |
| `github.action_status` | `string` | 对于复合操作，这是复合操作的当前结果。 |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}触发初始工作流运行的用户的用户名。 如果工作流运行是重新运行，则此值可能与 `github.triggering_actor` 不同。 即使启动重新运行的参与者 (`github.triggering_actor`) 具有不同的权限，任何工作流重新运行都将使用 `github.actor` 的权限。{% else %}启动工作流运行的用户的用户名。{% endif %} |
| `github.api_url` | `string` | {% data variables.product.prodname_dotcom %} REST API 的 URL。 |
| `github.base_ref` | `string` | 工作流运行中拉取请求的 `base_ref` 或目标分支。 仅当触发工作流运行的事件是 `pull_request` 或 `pull_request_target` 时，才可使用此属性。 |
| `github.env` | `string` | 运行器上从工作流程命令到设置环境变量的文件路径。 此文件对于当前步骤是唯一的，并且是作业中每个步骤的不同文件。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流命令](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)”。 |
| `github.event` | `object` | 完整事件 web 挂钩有效负载。 您可以使用上下文访问事件的个别属性。 此对象与触发工作流运行的事件的 web 挂钩有效负载相同，并且对于每个事件都是不同的。 每个 {% data variables.product.prodname_actions %} 事件的 Webhook 在“[触发工作流的事件](/articles/events-that-trigger-workflows/)”中链接。 例如，对于由 [`push` 事件](/actions/using-workflows/events-that-trigger-workflows#push)触发的工作流运行，此对象包含[推送 webhook 有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)的内容。 |
| `github.event_name` | `string` | 触发工作流程运行的事件的名称。 |
| `github.event_path` | `string` | 运行器上包含完整事件 web 挂钩负载的文件的路径。 |
| `github.graphql_url` | `string` | {% data variables.product.prodname_dotcom %} GraphQL API 的 URL。 |
| `github.head_ref` | `string` | 工作流程运行中拉取请求的 `head_ref` 或来源分支。 仅当触发工作流运行的事件是 `pull_request` 或 `pull_request_target` 时，才可使用此属性。 |
| `github.job` | `string` | 当前作业的 [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。 <br /> 注意：此上下文属性是由 Actions 运行程序设置的，仅在作业的执行 `steps` 中可用。 否则，此属性的值将为 `null`。 |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | 运行器上到通过工作流命令设置系统 `PATH` 变量的文件的路径。 此文件对于当前步骤是唯一的，并且是作业中每个步骤的不同文件。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流命令](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)”。 | | `github.repository` | `string` | 所有者和存储库名称。 例如，`Codertocat/Hello-World`。 | | `github.repository_owner` | `string` | 存储库所有者的名称。 例如，`Codertocat`。 | | `github.repositoryUrl` | `string` |存储库的 Git URL。 例如，`git://github.com/codertocat/hello-world.git`。 | | `github.retention_days` | `string` | 工作流运行日志和项目保留的天数。 | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | 存储库中特定工作流运行的每次尝试的唯一编号。 对于工作流程运行的第一次尝试，此数字从 1 开始，并随着每次重新运行而递增。 | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | 工作流中使用的机密的来源。 可能的值为 `None`、`Actions`、`Dependabot` 或 `Codespaces`。 | {%- endif %} | `github.server_url` | `string` | GitHub 服务器的 URL。 例如：`https://github.com`。 | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | 用于代表存储库中安装的 GitHub 应用程序进行身份验证的令牌。 在功能上，这与 `GITHUB_TOKEN` 机密等效。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。  <br /> 注意：此上下文属性是由 Actions 运行程序设置的，仅在作业的执行 `steps` 中可用。 否则，此属性的值将为 `null`。 |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | 启动工作流运行的用户的用户名。 如果工作流运行是重新运行，则此值可能与 `github.actor` 不同。 即使启动重新运行的参与者 (`github.triggering_actor`) 具有不同的权限，任何工作流重新运行都将使用 `github.actor` 的权限。 |{% endif %} | `github.workflow` | `string` | 工作流的名称。 如果工作流程文件未指定 `name`，则此属性的值是存储库中工作流程文件的完整路径。 | | `github.workspace` | `string` | 运行器上步骤的默认工作目录，以及使用 [`checkout`](https://github.com/actions/checkout) 操作时存储库的默认位置。 |

### `github` 上下文的示例内容

以下示例上下文来自 `push` 事件触发的工作流运行。 此示例中的 `event` 对象已被截断，因为它与 [`push` webhook 有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)的内容相同。

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### `github` 上下文的示例用法

此示例工作流仅当工作流运行由 `pull_request` 事件触发时才使用 `github.event_name` 上下文运行作业。

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## `env` 上下文

`env` 上下文包含已在工作流、作业或步骤中设置的环境变量。 有关在工作流中设置环境变量的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)”。

`env` 上下文语法支持在工作流文件中使用环境变量的值。 可以在非 `id` 和 `uses` 键的步骤中，在任何键的值中使用 `env` 上下文。 有关 step 语法的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。

如果您想要在运行器中使用环境变量的值，请使用运行器操作系统的正常方法来读取环境变量。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `env` | `object` | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的属性。 |
| `env.<env_name>` | `string` | 特定环境变量的值。 |

### `env` 上下文的示例内容

`env` 上下文的内容是环境变量名称与其值的映射。 上下文的内容可能会根据工作流运行中的使用位置而更改。

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### `env` 上下文的示例用法

此示例工作流演示如何在工作流、作业和步骤级别配置 `env` 上下文，以及如何在步骤中使用上下文。

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## `job` 上下文

`job` 上下文包含当前正在运行的作业相关信息。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `job` | `object` | 此上下文针对工作流程运行中的每项作业而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `job.container` | `object` | 作业的容器相关信息。 有关容器的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。 |
| `job.container.id` | `string` | 容器的 ID。 |
| `job.container.network` | `string` | 容器网络的 ID。 运行程序创建作业中所有容器使用的网络。 |
| `job.services` | `object` | 为作业创建的服务容器。 有关服务容器的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)”。 |
| `job.services.<service_id>.id` | `string` | 服务容器的 ID。 |
| `job.services.<service_id>.network` | `string` | 服务容器网络的 ID。 运行程序创建作业中所有容器使用的网络。 |
| `job.services.<service_id>.ports` | `object` | 服务容器显露的端口。 |
| `job.status` | `string` | 作业的当前状态。 可能的值为 `success`、`failure` 或 `cancelled`。 |

### `job` 上下文的示例内容

此示例 `job` 上下文使用具有映射端口的 PostgreSQL 服务容器。 如果作业中没有容器或服务容器，则 `job` 上下文仅包含 `status` 属性。

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### `job` 上下文的示例用法

此示例工作流程配置 PostgreSQL 服务容器，并自动将服务容器中的端口 5432 映射到主机上随机选择的可用端口。 `job` 上下文用于访问在主机上分配的端口号。

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## `jobs` 上下文

`jobs` 上下文仅在可重用工作流中可用，并且只能用于设置可重用工作流的输出。 有关详细信息，请参阅“[重用工作流](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)”。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `jobs` | `object` | 这仅在可重用工作流中使用，并且只能用于设置可重用工作流的输出。 此对象包含下面列出的所有属性。
| `jobs.<job_id>.result` | `string` | 可重用工作流中作业的结果。 可能的值为 `success`、`failure`、`cancelled` 或 `skipped`。 |
| `jobs.<job_id>.outputs` | `object` | 可重用工作流中作业的输出集。 |
| `jobs.<job_id>.outputs.<output_name>` | `string` | 可重用工作流中作业的特定输出值。 |

### `jobs` 上下文的示例内容

此示例 `jobs` 上下文包含可重用工作流运行中作业的结果和输出。

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### `jobs` 上下文的示例用法

此示例可重用工作流使用 `jobs` 上下文设置可重用工作流的输出。 请注意输出如何从步骤流向作业，然后流向 `workflow_call` 触发器。 有关详细信息，请参阅“[重用工作流](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)”。

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

{% endif %}

## `steps` 上下文

`steps` 上下文包含有关当前作业中已指定 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) 且已运行的步骤的信息。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `steps` | `object` | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `steps.<step_id>.outputs` | `object` | 为步骤定义的输出集。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”。 |
| `steps.<step_id>.conclusion` | `string` | 应用 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 后完成的步骤的结果。 可能的值为 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 是 `failure`，但最终 `conclusion` 是 `success`。 |
| `steps.<step_id>.outcome` | `string` | 应用 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 前完成的步骤的结果。 可能的值为 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 是 `failure`，但最终 `conclusion` 是 `success`。 |
| `steps.<step_id>.outputs.<output_name>` | `string` | 特定输出的值。 |

### `steps` 上下文的示例内容

此示例 `steps` 上下文显示已指定 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) 的前两个步骤。 第一步的 `id` 名为 `checkout`，第二步是 `generate_number`。 `generate_number` 步骤的输出名为 `random_number`。

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### `steps` 上下文的示例用法

此示例工作流在一个步骤中生成一个随机数作为输出，后面的步骤使用 `steps` 上下文来读取该输出的值。

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## `runner` 上下文

`runner` 上下文包含正在执行当前作业的运行器相关信息。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `runner` | `object` | 此上下文针对工作流程运行中的每项作业而改变。 此对象包含下面列出的所有属性。 |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} 故意未记录 `runner.workspace` 属性。 与 `github.workspace` 相比，这是一个早期的 Actions 属性，现在与用户无关。 它为兼容性而保留。
| `runner.workspace` | `string` | | {%- endcomment %}

### `runner` 上下文的示例内容

以下示例上下文来自 Linux {% data variables.product.prodname_dotcom %} 托管的运行器。

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### `runner` 上下文的示例用法

此示例工作流使用 `runner` 上下文来设置临时目录的路径以写入日志，如果工作流失败，它将这些日志上传为项目。

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## `secrets` 上下文

`secrets` 上下文包含可用于工作流运行的机密的名称和值。 出于安全原因，上下文 `secrets` 不适用于复合操作。 如果要将机密传递给复合操作，则需要将其作为输入显式传递。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

`GITHUB_TOKEN` 是为每个工作流运行自动创建的机密，始终包含在 `secrets` 上下文中。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。

{% data reusables.actions.secrets-redaction-warning %}

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `secrets` | `object` | 对于工作流程运行中的每个作业，此上下文都是相同的。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `secrets.GITHUB_TOKEN` | `string` | 为每个工作流程运行自动创建的令牌。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 |
| `secrets.<secret_name>` | `string` | 特定机密的值。 |

### `secrets` 上下文的示例内容

`secrets` 上下文的以下示例内容显示自动 `GITHUB_TOKEN`，以及可用于工作流运行的两个其他机密。

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### `secrets` 上下文的示例用法

{% data reusables.actions.github_token-input-example %}

## `strategy` 上下文

对于具有矩阵的工作流，`strategy` 上下文包含有关当前作业的矩阵执行策略的信息。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `strategy` | `object` | 此上下文针对工作流程运行中的每项作业而改变。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `strategy.fail-fast` | `boolean` | 如果为 `true`，当矩阵中的任何作业失败时，则取消所有正在进行的作业。 有关详细信息，请参阅 [{% data variables.product.prodname_actions %} 的工作流语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)。 |
| `strategy.job-index` | `number` | 矩阵中当前作业的索引。 注意：此数字是从零开始的数字。 矩阵中的第一个作业索引为 `0`。 |
| `strategy.job-total` | `number` | 矩阵中的作业总数。 注意：此数字不是从零开始的数字。  例如，对于具有四个作业的矩阵，`job-total` 的值为 `4`。 |
| `strategy.max-parallel` | `number` | 使用 `matrix` 作业策略时可以同时运行的最大作业数。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)”。 |

### `strategy` 上下文的示例内容

`strategy` 上下文的以下示例内容来自具有四个作业的矩阵，取自最终作业。 请注意从零开始的 `job-index` 数字与 `job-total`（不从零开始）之间的差异。

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### `strategy` 上下文的示例用法

此示例工作流使用 `strategy.job-index` 属性为矩阵中的每个作业设置日志文件的唯一名称。

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## `matrix` 上下文

对于具有矩阵的工作流，`matrix` 上下文包含工作流程文件中定义的适用于当前作业的矩阵属性。 例如，如果使用 `os` 和 `node` 键配置矩阵，则 `matrix` 上下文对象包含 `os` 和 `node` 属性，该属性具有用于当前作业的值。

`matrix` 上下文中没有标准属性，只有工作流文件中定义的属性。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `matrix` | `object` | 此上下文仅适用于矩阵中的作业，并且对于工作流运行中的每个作业都会发生更改。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的属性。 |
| `matrix.<property_name>` | `string` | 矩阵属性的值。 |

### `matrix` 上下文的示例内容

`matrix` 上下文的以下示例内容来自具有工作流中定义的 `os` 和 `node` 矩阵属性的矩阵中的作业。 该作业正在执行 `ubuntu-latest` OS 和 Node.js 版本 `16` 的矩阵合并。

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### `matrix` 上下文的示例用法

此示例工作流创建包含 `os` 和 `node` 键的矩阵。 它使用 `matrix.os` 属性为每个作业设置运行器类型，并使用 `matrix.node` 属性为每个作业设置 Node.js 版本。

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## `needs` 上下文

`needs` 上下文包含定义为当前作业直接依赖项的所有作业的输出。 请注意，这不包括隐式依赖作业（例如依赖作业的依赖作业）。 有关定义作业依赖项的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `needs` | `object` | 仅为具有相关作业的工作流程运行填充此上下文，并为工作流程运行中的每个作业填充此上下文。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `needs.<job_id>` | `object` | 当前作业依赖的单个作业。 |
| `needs.<job_id>.outputs` | `object` | 当前作业依赖的作业的输出集。 |
| `needs.<job_id>.outputs.<output name>` | `string` | 当前作业依赖的作业的特定输出值。 |
| `needs.<job_id>.result` | `string` | 当前作业依赖的作业的结果。 可能的值为 `success`、`failure`、`cancelled` 或 `skipped`。 |

### `needs` 上下文的示例内容

`needs` 上下文的以下示例内容显示了当前作业所依赖的两个作业的信息。

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### `needs` 上下文的示例用法

此示例工作流有三个作业：一个 `build` 作业（执行生成），一个 `deploy` 作业（需要 `build` 作业）以及一个 `debug` 作业（需要 `build` 和 `deploy` 作业且仅当工作流中有故障时运行）。 `deploy` 作业还使用 `needs` 上下文来访问 `build` 作业中的输出。

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## `inputs` 上下文

`inputs` 上下文包含传递给操作{% ifversion actions-unified-inputs %}{% else %}、{% endif %}可重用工作流{% ifversion actions-unified-inputs %}或手动触发的工作流{% endif %}的输入属性。 {% ifversion actions-unified-inputs %}对于可重用工作流，{% else %}{% endif %}输入名称和类型是在可重用工作流的 [`workflow_call` 事件配置](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) 中定义的，输入值从调用可重用工作流的外部工作流中的 [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) 传递。 {% ifversion actions-unified-inputs %}对于手动触发的工作流，输入是在工作流的 [`workflow_dispatch` 事件配置](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)中定义的。{% endif %}

`inputs` 上下文中没有标准属性，只有工作流文件中定义的属性。

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| 属性名称 | 类型 | 说明 |
|---------------|------|-------------|
| `inputs` | `object` | 此上下文仅在[可重用工作流](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %}或 [`workflow_dispatch` 事件](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)触发的工作流中可用{% endif %}。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的属性。 |
| `inputs.<name>` | `string` 或 `number` 或 `boolean` | 从外部工作流传递的每个输入值。 |

### `inputs` 上下文的示例内容

`inputs` 上下文的以下示例内容来自已定义 `build_id`、`deploy_target` 和 `perform_deploy` 输入的工作流。

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### 可重用工作流中 `inputs` 上下文的示例用法

此示例可重用工作流使用 `inputs` 上下文从调用方工作流获取传递到可重用工作流的 `build_id`、`deploy_target` 和 `perform_deploy` 输入的值。

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### 手动触发的工作流中 `inputs` 上下文的示例用法

这个由 `workflow_dispatch` 事件触发的示例工作流使用 `inputs` 上下文来获取传递给工作流的 `build_id`、`deploy_target` 和 `perform_deploy` 输入的值。

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}
