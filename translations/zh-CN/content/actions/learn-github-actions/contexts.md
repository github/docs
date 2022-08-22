---
title: 上下文
shortTitle: 上下文
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于上下文

上下文是一种访问工作流程运行、运行器环境、作业及步骤相关信息的方式。 每个上下文都是一个包含属性的对象，属性可以是字符串或其他对象。

{% data reusables.actions.context-contents %} 例如，`matrix` 上下文中仅填充 [matrix](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) 中的作业。

您可以使用表达式语法访问上下文。 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions)”。

{% raw %}
`${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| 上下文名称      | 类型   | 描述                                                                |
| ---------- | ---- | ----------------------------------------------------------------- |
| `github`   | `对象` | 工作流程运行的相关信息。 更多信息请参阅 [`github` 上下文](#github-context)。             |
| `env`      | `对象` | 包含工作流程、作业或步骤中设置的环境变量。 更多信息请参阅 [`env` 上下文](#env-context)。          |
| `job`      | `对象` | 有关当前运行的作业的信息。 更多信息请参阅 [`job` 上下文](#job-context)。                  |
| `steps`    | `对象` | 有关当前作业中已运行的步骤的信息。 更多信息请参阅 [`steps` 上下文](#steps-context)。          |
| `runner`   | `对象` | 运行当前作业的运行程序相关信息。 更多信息请参阅 [`runner` 上下文](#runner-context)。         |
| `secrets`  | `对象` | 包含可用于工作流程运行的机密的名称和值。 更多信息请参阅 [`secrets` 上下文](#secrets-context)。   |
| `strategy` | `对象` | 有关当前作业的矩阵执行策略的信息。 更多信息请参阅 [`strategy` 上下文](#strategy-context)。    |
| `matrix`   | `对象` | 包含在工作流程中定义的应用于当前作业的矩阵属性。 更多信息请参阅 [`matrix` 上下文](#matrix-context)。 |
| `needs`    | `对象` | 包含定义为当前作业依赖项的所有作业的输出。 更多信息请参阅 [`needs` 上下文](#needs-context)。      |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}
| `inputs` | `object` | 包含可重用 {% ifversion actions-unified-inputs %}或手动触发 {% endif %}工作流程的输入。 更多信息请参阅 [`inputs` 上下文](#inputs-context)。 |{% endif %}

作为表达式的一部分，您可以使用以下两种语法之一访问上下文信息。

- 索引语法：`github['sha']`
- 属性解除参考语法：`github.sha`

要使用属性取消引用语法，属性名称必须以字母或 `_` 开头，并且仅包含字母数字字符、`-` 或 `_`。

如果尝试取消引用不存在的属性，则该属性的计算结果将为空字符串。

### 确定何时使用上下文

{% data reusables.actions.using-context-or-environment-variables %}

### 上下文可用性

在整个工作流程运行过程中，提供不同的上下文。 例如，`secrets` 上下文只能用于作业中的某些地方。

此外，某些功能只能在某些地方使用。 例如， `hashFiles` 函数无法随处可用。

下表列出了工作流程中每一个上下文和特殊函数可以使用的地方。 除非下面列出，否则可以在任何地方使用函数。 |{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
| 工作流程键                      | 上下文                        | 特殊函数                       |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github, inputs</code>  |                            |
| <code>env</code>  | <code>github, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix, env, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs, secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> |                            |
| <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> |                            |
| <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> |                            |
{% else %}
| 路径                          | 上下文                         | 特殊函数                        |
| --------------------------- | --------------------------- | --------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                             |
| <code>env</code>  | <code>github, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code>  | <code>github, needs, strategy, matrix, job, runner, env, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.defaults.run</code>  | <code>github, needs, strategy, matrix, env</code>  |                             |
| <code>jobs.&lt;job_id&gt;.env</code>  | <code>github, needs, strategy, matrix, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.environment</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.environment.url</code>  | <code>github, needs, strategy, matrix, job, runner, env, steps</code>  |                             |
| <code>jobs.&lt;job_id&gt;.if</code>  | <code>github, needs</code>  | <code>always, cancelled, success, failure</code>  |
| <code>jobs.&lt;job_id&gt;.name</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> |                             |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> |                             |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> |                             |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> |                             |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                             |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> |                             |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> |                             |
{% endif %}

### 示例：将上下文信息打印到日志

您可以将上下文的内容打印到日志中进行调试。 需要 [`toJSON` 函数](/actions/learn-github-actions/expressions#tojson)才能将 JSON 对象打印到日志中。

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

`github` 上下文包含有关工作流程运行以及触发运行的事件相关信息。 您还可以读取环境变量中的大多数 `github` 上下文数据。 有关环境变量的更多信息，请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

{% data reusables.actions.github-context-warning %}
{% data reusables.actions.context-injection-warning %}

| 属性名称                                                                                                                                                                                                                                                                                                                                                                                                                                         | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                                                                                                                                                                                                                                                                                                                                                                                                                                     | `对象`  | 工作流程中任何作业或步骤期间可用的顶层上下文。 此对象包含下面列出的所有属性。                                                                                                                                                                                                                                                                                                                                                                       |
| `github.action`                                                                                                                                                                                                                                                                                                                                                                                                                              | `字符串` | 当前运行的操作的名称，或步骤的 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)。 {% data variables.product.prodname_dotcom %} 将删除特殊字符，并在当前步骤运行没有 `id` 的脚本时使用名称 `__run`。 如果在同一作业中多次使用相同的操作，则名称将包含一个前面跟序号和下划线的后缀。 例如，运行的第一个脚本名称 `__run`，则第二个脚本将命名为 `__run_2`。 同样，`actions/checkout` 第二次调用时将变成 `actionscheckout2`。                                                                    |
| `github.action_path`                                                                                                                                                                                                                                                                                                                                                                                                                         | `字符串` | 操作所在的路径。 此属性仅在复合操作中受支持。 您可以使用此路径访问与操作位于同一存储库中的文件。                                                                                                                                                                                                                                                                                                                                                             |
| `github.action_ref`                                                                                                                                                                                                                                                                                                                                                                                                                          | `字符串` | 对于执行操作的步骤，这是正在执行的操作的引用。 例如 `v2`。                                                                                                                                                                                                                                                                                                                                                                              |
| `github.action_repository`                                                                                                                                                                                                                                                                                                                                                                                                                   | `字符串` | 对于执行操作的步骤，这是操作的所有者和存储库名称。 例如 `actions/checkout`。                                                                                                                                                                                                                                                                                                                                                              |
| `github.action_status`                                                                                                                                                                                                                                                                                                                                                                                                                       | `字符串` | 对于复合操作，这是复合操作的当前结果。                                                                                                                                                                                                                                                                                                                                                                                           |
| `github.actor`                                                                                                                                                                                                                                                                                                                                                                                                                               | `字符串` |                                                                                                                                                                                                                                                                                                                                                                                                               |
| {% ifversion actions-stable-actor-ids %}The username of the user that triggered the initial workflow run. If the workflow run is a re-run, this value may differ from `github.triggering_actor`. Any workflow re-runs will use the privileges of `github.actor`, even if the actor initiating the re-run (`github.triggering_actor`) has different privileges.{% else %}The username of the user that initiated the workflow run.{% endif %} |       |                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                              |       |                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.api_url`                                                                                                                                                                                                                                                                                                                                                                                                                             | `字符串` | {% data variables.product.prodname_dotcom %} REST API 的 URL。                                                                                                                                                                                                                                                                                                                                                  |
| `github.base_ref`                                                                                                                                                                                                                                                                                                                                                                                                                            | `字符串` | 工作流程运行中拉取请求的 `base_ref` 或目标分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 或 `pull_request_target` 时才可用。                                                                                                                                                                                                                                                                                                                 |
| `github.env`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `字符串` | 运行器上从工作流程命令到设置环境变量的文件路径。 此文件对于当前步骤是唯一的，并且是作业中每个步骤的不同文件。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)”。                                                                                                                                                                                 |
| `github.event`                                                                                                                                                                                                                                                                                                                                                                                                                               | `对象`  | 完整事件 web 挂钩有效负载。 您可以使用上下文访问事件的个别属性。 此对象与触发工作流运行的事件的 web 挂钩有效负载相同，并且对于每个事件都是不同的。 每个 {% data variables.product.prodname_actions %} 事件的 web 挂钩都链接在“[触发工作流程](/articles/events-that-trigger-workflows/)”的事件中。 例如，对于由 [`push` 事件](/actions/using-workflows/events-that-trigger-workflows#push)触发的工作流程运行，此对象包含[push webhook payload](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push) 的内容。 |
| `github.event_name`                                                                                                                                                                                                                                                                                                                                                                                                                          | `字符串` | 触发工作流程运行的事件的名称。                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.event_path`                                                                                                                                                                                                                                                                                                                                                                                                                          | `字符串` | 运行器上包含完整事件 web 挂钩负载的文件的路径。                                                                                                                                                                                                                                                                                                                                                                                    |
| `github.graphql_url`                                                                                                                                                                                                                                                                                                                                                                                                                         | `字符串` | {% data variables.product.prodname_dotcom %} GraphQL API 的 URL。                                                                                                                                                                                                                                                                                                                                               |
| `github.head_ref`                                                                                                                                                                                                                                                                                                                                                                                                                            | `字符串` | 工作流程运行中拉取请求的 `head_ref` 或来源分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 或 `pull_request_target` 时才可用。                                                                                                                                                                                                                                                                                                                 |
| `github.job`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `字符串` | 当前作业的 [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。 <br /> 注意：此上下文属性由 Actions 运行器设置，并且仅在作业的执行 `steps` 中可用。 否则，此属性的值将为 `null`。                                                                                                                                                                                                                                           |
| `github.ref`                                                                                                                                                                                                                                                                                                                                                                                                                                 | `字符串` | {% data reusables.actions.ref-description %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `string` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `github.path` | `string` | 运行器上从工作流程命令到设置系统 `PATH` 变量的文件的路径。 此文件对于当前步骤是唯一的，并且是作业中每个步骤的不同文件。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)”。 | | `github.repository` | `string` | 所有者和存储库名称。 例如 `Codertocat/Hello-World`。 | | `github.repository_owner` | `string` | 存储库所有者的名称。 例如 `Codertocat`。 | | `github.repositoryUrl` | `string` | 存储库的 Git URL。 例如 `git://github.com/codertocat/hello-world.git`。 | | `github.retention_days` | `string` | 工作流程运行日志和构件的保留天数。 | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %}
{%- ifversion fpt or ghec or ghes > 3.5 or ghae-issue-4722 %}
| `github.run_attempt` | `string` | 在存储库中运行的特定工作流程的每次尝试的唯一编号。 对于工作流程运行的第一次尝试，此数字从 1 开始，并随着每次重新运行而递增。 |
{%- endif %}
| `github.server_url` | `string` | GitHub 服务器的 URL。 例如：`https://github.com`。 | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | A token to authenticate on behalf of the GitHub App installed on your repository. 这在功能上等同于 `GITHUB_TOKEN` 密码。 更多信息请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。  <br /> 注意：此上下文属性由 Actions 运行器设置，并且仅在作业的执行 `steps` 中可用。 否则，此属性的值将为 `null`。 |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | The username of the user that initiated the workflow run. If the workflow run is a re-run, this value may differ from `github.actor`. Any workflow re-runs will use the privileges of `github.actor`, even if the actor initiating the re-run (`github.triggering_actor`) has different privileges. |{% endif %} | `github.workflow` | `string` | The name of the workflow. 如果工作流程文件未指定 `name`，此属性的值将是仓库中工作流程文件的完整路径。 | | `github.workspace` | `string` | 运行器上步骤的默认工作目录，以及使用[`检出`](https://github.com/actions/checkout)操作时存储库的默认位置。 |

### `github` 上下文的示例内容

以下示例上下文来自由 `push` 事件触发的工作流程运行。 此示例中的 `event` 对象已被截断，因为它与 [`push` web 挂钩有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)的内容相同。

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

仅当工作流运行是由 `pull_request` 事件触发时，此示例工作流才使用 `github.event_name` 上下文来运行作业。

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

`env` 上下文包含已在工作流程、作业或步骤中设置的环境变量。 有关在工作流程中设置环境变量的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)”。

`env` 上下文语法允许您在工作流程文件中使用环境变量的值。 您可以在步骤中除 `id` 和 `uses` 之外的任何键的值中使用 `env` 上下文。 有关步骤语法的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。

如果您想要在运行器中使用环境变量的值，请使用运行器操作系统的正常方法来读取环境变量。

| 属性名称                   | 类型    | 描述                                                   |
| ---------------------- | ----- | ---------------------------------------------------- |
| `env`                  | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的属性。 |
| `env.<env_name>` | `字符串` | 特定环境变量的值。                                            |

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

| 属性名称                                      | 类型    | 描述                                                                                                                                                     |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `job`                                     | `对象`  | 此上下文针对工作流程运行中的每项作业而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。                                                                                             |
| `job.container`                           | `对象`  | 作业的容器相关信息。 有关容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。   |
| `job.container.id`                        | `字符串` | 容器的 ID。                                                                                                                                                |
| `job.container.network`                   | `字符串` | 容器网络的 ID。 运行程序创建作业中所有容器使用的网络。                                                                                                                          |
| `job.services`                            | `对象`  | 为作业创建的服务容器。 有关服务容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)”。 |
| `job.services.<service_id>.id`      | `字符串` | 服务容器的 ID。                                                                                                                                              |
| `job.services.<service_id>.network` | `字符串` | 服务容器网络的 ID。 运行程序创建作业中所有容器使用的网络。                                                                                                                        |
| `job.services.<service_id>.ports`   | `对象`  | 服务容器显露的端口。                                                                                                                                             |
| `job.status`                              | `字符串` | 作业的当前状态。 可能的值包括 `success`、`failure` 或 `cancelled`。                                                                                                     |

### `job` 上下文的示例内容

此示例 `job` 上下文使用具有映射端口的 PostgreSQL 服务容器。 如果作业中没有使用容器或服务容器，则 `job` 上下文仅包含 `status` 属性。

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

## `steps` 上下文

`steps` 上下文包含有关当前作业中指定了 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) 且已运行的步骤的信息。

| 属性名称                                                | 类型    | 描述                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `steps`                                             | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。                                                                                                                                                                                                             |
| `steps.<step_id>.outputs`                     | `对象`  | 为步骤定义的输出集。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”。                                                                                      |
| `steps.<step_id>.conclusion`                  | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之后完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step_id>.outcome`                     | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之前完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step_id>.outputs.<output_name>` | `字符串` | 特定输出的值。                                                                                                                                                                                                                                                            |

### `steps` 上下文的示例内容

此示例 `steps` 上下文显示前面两个指定了 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) 的步骤。 第一步将 `id` 命名为 `checkout`，第二步 `generate_number`。 `generate_number` 步骤有一个名为 `random_number` 的输出。

```yaml
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

此示例工作流程在一个步骤中生成一个随机数作为输出，后面的步骤使用 `steps` 上下文来读取该输出的值。

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
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## `runner` 上下文

`runner` 上下文包含正在执行当前作业的运行器相关信息。

| 属性名称                | 类型    | 描述                                                                                                                                                              |
| ------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner`            | `对象`  | 此上下文针对工作流程运行中的每项作业而改变。 此对象包含下面列出的所有属性。                                                                                                                          |
| `runner.name`       | `字符串` | {% data reusables.actions.runner-name-description %}
| `runner.os`         | `字符串` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch`       | `字符串` | {% data reusables.actions.runner-arch-description %} 
{% endif %}
| `runner.temp`       | `字符串` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache` | `字符串` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}
| `runner.debug`      | `字符串` | {% data reusables.actions.runner-debug-description %}

{%- comment %}
`runner.workspace` 属性故意不记录。 与 `github.workspace`相比，这是一个早期的 Actions 属性，现在与用户无关。 它为兼容性而保留。 | `runner.workspace` | `string` | |
{%- endcomment %}

### `runner` 上下文的示例内容

以下示例上下文来自 Linux {% data variables.product.prodname_dotcom %} 托管的运行器。

```yaml
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. 与 `github.workspace` 相比，这是一个早期的 Actions 属性，现在与用户无关。 它为兼容性而保留。
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### `runner` 上下文的示例用法

此示例工作流程使用 `runner` 上下文来设置临时目录的路径以写入日志，如果工作流程失败，它将这些日志上传为构件。

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

`secrets` 上下文包含可用于工作流程运行的机密的名称和值。 `secrets` 上下文不可用于复合操作。 有关机密的更多信息，请参阅“[加密密码](/actions/security-guides/encrypted-secrets)”。

`GITHUB_TOKEN` 是为每个工作流程运行自动创建的机密，并且始终包含在 `secrets` 上下文中。 更多信息请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。

{% data reusables.actions.secrets-redaction-warning %}

| 属性名称                          | 类型    | 描述                                                                                              |
| ----------------------------- | ----- | ----------------------------------------------------------------------------------------------- |
| `secrets`                     | `对象`  | 对于工作流程运行中的每个作业，此上下文都是相同的。 您可以从作业中的任何步骤访问此上下文。 此对象包含下面列出的所有属性。                                   |
| `secrets.GITHUB_TOKEN`        | `字符串` | 为每个工作流程运行自动创建的令牌。 更多信息请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 |
| `secrets.<secret_name>` | `字符串` | 特定机密的值。                                                                                         |

### `secrets` 上下文的示例内容

以下 `secrets` 上下文的示例内容显示了自动 `GITHUB_TOKEN`，以及可用于工作流程运行的另外两个机密。

```yaml
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### `secrets` 上下文的示例用法

{% data reusables.actions.github_token-input-example %}

## `strategy` 上下文

对于具有矩阵的工作流程，`strategy` 上下文包含有关当前作业的矩阵执行策略的信息。

| 属性名称                    | 类型    | 描述                                                                                                                                                                                                                                     |
| ----------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `strategy`              | `对象`  | 此上下文针对工作流程运行中的每项作业而改变。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的所有属性。                                                                                                                                                                        |
| `strategy.fail-fast`    | `字符串` | 为 `true` 时，如果矩阵中的任何作业失败，所有正在进行的作业都将被取消。 For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)." |
| `strategy.job-index`    | `字符串` | 矩阵中当前作业的索引。 **注意：** 此数字是零基数字。 矩阵中第一个作业的索引是 `0`。                                                                                                                                                                                        |
| `strategy.job-total`    | `字符串` | 矩阵中的作业总数。 **注意：** 此数字 **不是**从零基数字。 例如，对于具有四个作业的矩阵，`job-total` 的值为 `4`。                                                                                                                                                                 |
| `strategy.max-parallel` | `字符串` | 使用 `matrix` 作业策略时可同时运行的最大作业数。 For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)."        |

### `strategy` 上下文的示例内容

`strategy` 上下文的以下示例内容来自具有四个作业的矩阵，取自最终作业。 请注意零基 `job-index` 数字与 `job-total` （非零基）之间的差异。

```yaml
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### `strategy` 上下文的示例用法

此示例工作流程使用 `strategy.job-index` 属性为矩阵中每个作业的日志文件设置唯一名称。

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

对于具有矩阵的工作流程，`matrix` 上下文包含工作流程文件中定义的适用于当前作业的矩阵属性。 例如，如果使用 `os` 和 `node` 键配置矩阵，则 `matrix` 上下文对象将包括 `os` 和 `node` 属性，具有用于当前作业的值。

`matrix` 上下文中没有标准属性，只有工作流程文件中定义的属性。

| 属性名称                           | 类型    | 描述                                                                            |
| ------------------------------ | ----- | ----------------------------------------------------------------------------- |
| `matrix`                       | `对象`  | 此上下文仅适用于矩阵中的作业，并且对于工作流程运行中的每个作业都会发生更改。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的属性。 |
| `matrix.<property_name>` | `字符串` | 矩阵属性的值。                                                                       |

### `matrix` 上下文的示例内容

`matrix` 上下文的以下示例内容来自矩阵中的作业，该矩阵具有工作流中定义的 `os` 和 `node` 矩阵属性。 该作业执行 `ubuntu-latest` OS 和 Node.js 版本 `16` 的矩阵组合。

```yaml
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### `matrix` 上下文的示例用法

此示例工作流程创建一个包含 `os` 和 `node` 键的矩阵。 它使用 `matrix.os` 属性为每个作业设置运行器类型，并使用 `matrix.node` 属性为每个作业设置 Node.js 版本。

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

`needs` 上下文包含定义为当前作业依赖项的所有作业的输出。 有关定义作业依赖项的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

| 属性名称                                               | 类型    | 描述                                                                                   |
| -------------------------------------------------- | ----- | ------------------------------------------------------------------------------------ |
| `needs`                                            | `对象`  | 仅为具有相关作业的工作流程运行填充此上下文，并为工作流程运行中的每个作业填充此上下文。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的所有属性。 |
| `needs.<job_id>`                             | `对象`  | 当前作业依赖的单个作业。                                                                         |
| `needs.<job_id>.outputs`                     | `对象`  | 当前作业依赖的作业的输出集。                                                                       |
| `needs.<job_id>.outputs.<output name>` | `字符串` | 当前作业依赖的作业的特定输出值。                                                                     |
| `needs.<job_id>.result`                      | `字符串` | 当前作业依赖的作业的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。                    |

### `needs` 上下文的示例内容

`needs` 上下文的以下示例内容显示了当前作业所依赖的两个作业的信息。

```yaml
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

此示例工作流程有三个作业：执行生成的 `build` 作业，执行生成；需要 `build` 作业的 `deploy` 作业，以及需要 `build` 和 `deploy` 作业并且仅工作流程中出现失败时运行的 `debug` 作业。 `deploy` 作业还使用 `needs` 上下文来访问 `build` 作业的输出。

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
          echo "::set-output name=build_id::$BUILD_ID"
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

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}
## `inputs` 上下文

`inputs` 上下文包含传递给可重用工作流程{% ifversion actions-unified-inputs %} 或手动触发的工作流{% endif %} 的输入属性。 {% ifversion actions-unified-inputs %}对于可重用的工作流程，{% else %}{% endif %}输入名称和类型在可重用工作流程的 [`workflow_call` 事件配置](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)中定义，输入值从调用可重用工作流程的外部工作流中的 [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) 传递。 {% ifversion actions-unified-inputs %}对于手动触发的工作流，输入在工作流程的 [`workflow_dispatch` 事件配置](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)中定义。{% endif %}

`inputs` 上下文中没有标准属性，只有工作流程文件中定义的属性。

{% data reusables.actions.reusable-workflows-ghes-beta %}

| 属性名称                  | 类型                              | 描述                                                                                                                                                                                                                                                                                         |
| --------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inputs`              | `对象`                            | 此上下文仅在 [reusable workflow](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} 或由 [`workflow_dispatch` 事件](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %} 触发的工作流程中可用。 您可以从工作流程中的任何作业或步骤访问此上下文。 此对象包含下面列出的属性。 |
| `inputs.<name>` | `string` 或 `number` 或 `boolean` | 从外部工作流传递的每个输入值。                                                                                                                                                                                                                                                                            |

### `inputs` 上下文的示例内容

以下 `inputs` 上下文的示例内容来自定义了 `build_id`、`deploy_target` 和 `perform_deploy` 输入的工作流程。

```yaml
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### 可重用工作流程中 `inputs` 上下文的示例用法

此示例可重用工作流程使用 `inputs` 上下文来获取从调用方工作流程传递到可重用工作流程的 `build_id`、`deploy_target` 和 `perform_deploy` 输入的值。

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
### 手动触发的工作流程中 `inputs` 上下文的示例用法

此示例工作流程由 `workflow_dispatch` 事件触发，它使用 `inputs` 上下文来获取传递给工作流程的 `build_id`、`deploy_target` 和 `perform_deploy` 输入的值。

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
{% endraw %}
{% endif %}

{% endif %}
