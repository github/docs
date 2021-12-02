---
title: 上下文
shortTitle: 上下文
intro: You can access context information in workflows and actions.
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
{% data reusables.actions.ae-beta %}

## About contexts

{% data reusables.github-actions.context-injection-warning %}

上下文是一种访问工作流程运行、运行器环境、作业及步骤相关信息的方式。 上下文使用表达式语法。 For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

| 上下文名称      | 类型   | 描述                                                                                                                                  |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `github`   | `对象` | 工作流程运行的相关信息。 更多信息请参阅 [`github` 上下文](#github-context)。                                                                               |
| `env`      | `对象` | 包含工作流程、作业或步骤中设置的环境变量。 更多信息请参阅 [`env` 上下文](#env-context)。                                                                            |
| `job`      | `对象` | 当前执行的作业相关信息。 更多信息请参阅 [`job` 上下文](#job-context)。                                                                                     |
| `steps`    | `对象` | 此作业中已经运行的步骤的相关信息。 更多信息请参阅 [`steps` 上下文](#steps-context)。                                                                            |
| `runner`   | `对象` | 运行当前作业的运行程序相关信息。 更多信息请参阅 [`runner` 上下文](#runner-context)。                                                                           |
| `secrets`  | `对象` | 启用对密码的访问权限。 有关密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。 |
| `strategy` | `对象` | 用于访问配置的策略参数及当前作业的相关信息。 策略参数包括 `fail-fast`、`job-index`、`job-total` 和 `max-parallel`。                                                 |
| `matrix`   | `对象` | 用于访问为当前作业配置的矩阵参数。 例如，如果使用 `os` 和 `node` 版本配置矩阵构建，`matrix` 上下文对象将包含当前作业的 `os` 和 `node` 版本。                                           |
| `needs`    | `对象` | 允许访问定义为当前作业依赖项的所有作业的输出。 更多信息请参阅 [`needs` 上下文](#needs-context)。                                                                      |
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}| `inputs` | `object` | Enables access to the inputs of reusable workflow. For more information, see [`inputs` context](#inputs-context). |{% endif %}

作为表达式的一部分，您可以使用以下两种语法之一访问上下文信息。
- 索引语法：`github['sha']`
- 属性解除参考语法：`github.sha`

要使用属性解除参考语法，属性名称必须：
- 以 `a-Z` 或 `_` 开头。
- 后跟 `a-Z` `0-9` `-` 或 `_`。

### 确定何时使用上下文

{% data reusables.github-actions.using-context-or-environment-variables %}

### `github` 上下文

`github` 上下文包含有关工作流程运行以及触发运行的事件相关信息。 您可以读取环境变量中的大多数 `github` 上下文数据。 有关环境变量的更多信息，请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| 属性名称                 | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`             | `对象`  | 工作流程中任何作业或步骤期间可用的顶层上下文。                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.action`      | `字符串` | 正在运行的操作的名称。 {% data variables.product.prodname_dotcom %} removes special characters or uses the name `__run` when the current step runs a script.  If you use the same action more than once in the same job, the name will include a suffix with the sequence number with underscore before it.  For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. 同样，`actions/checkout` 第二次调用时将变成 `actionscheckout2`。 |
| `github.action_path` | `字符串` | 您的操作所在的路径。 您可以使用此路径轻松访问与操作位于同一仓库中的文件。 此属性仅在复合操作中才受支持。                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `github.actor`       | `字符串` | 发起工作流程运行的用户的登录名。                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `github.base_ref`    | `字符串` | 工作流程运行中拉取请求的 `base_ref` 或目标分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 或 `pull_request_target` 时才可用。                                                                                                                                                                                                                                                                                                                                                                          |
| `github.event`       | `对象`  | 完整事件 web 挂钩有效负载。 更多信息请参阅“[触发工作流程的事件](/articles/events-that-trigger-workflows/)”。 您可以使用上下文访问事件的个别属性。                                                                                                                                                                                                                                                                                                                                                                    |
| `github.event_name`  | `字符串` | 触发工作流程运行的事件的名称。                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `github.event_path`  | `字符串` | 运行器上完整事件 web 挂钩有效负载的路径。                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.head_ref`    | `字符串` | 工作流程运行中拉取请求的 `head_ref` 或来源分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 或 `pull_request_target` 时才可用。                                                                                                                                                                                                                                                                                                                                                                          |
| `github.job`         | `字符串` | 当前作业的 [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                                                                                                                                                                                                                                                                    |
| `github.ref`         | `字符串` | 触发工作流程的分支或标记参考。 对于分支，格式为 `refs/heads/<branch_name>`，对于标记是 `refs/tags/<tag_name>`。                                                                                                                                                                                                                                                                                                                                                                          |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `string` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `github.repository` | `string` | The owner and repository name. 例如 `Codertocat/Hello-World`。 | | `github.repository_owner` | `string` | The repository owner's name. 例如 `Codertocat`。 | | `github.run_id` | `string` | {% data reusables.github-actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.github-actions.run_number_description %} | | `github.run_attempt` | `string` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. | | `github.server_url` | `string` | Returns the URL of the GitHub server. 例如：`https://github.com`。 | | `github.sha` | `string` | The commit SHA that triggered the workflow run. | | `github.token` | `string` | A token to authenticate on behalf of the GitHub App installed on your repository. 这在功能上等同于 `GITHUB_TOKEN` 密码。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。 | | `github.workflow` | `string` | The name of the workflow. 如果工作流程文件未指定 `name`，此属性的值将是仓库中工作流程文件的完整路径。 | | `github.workspace` | `string` | The default working directory for steps and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |

### `env` 上下文

`env` 上下文包含已在工作流程、作业或步骤中设置的环境变量。 有关在工作流程中设置环境变量的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)”。

`env` 上下文语法允许您在工作流程文件中使用环境变量的值。 您可以在**步骤**的任何键值中使用 `env` 上下文，但 `id` 和 `uses` 键除外。 有关步骤语法的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。

如果您想要在运行器中使用环境变量的值，请使用运行器操作系统的正常方法来读取环境变量。

| 属性名称                   | 类型    | 描述                                     |
| ---------------------- | ----- | -------------------------------------- |
| `env`                  | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 |
| `env.<env_name>` | `字符串` | 特定环境变量的值。                              |

### `job` 上下文

`job` 上下文包含当前正在运行的作业相关信息。

| 属性名称                                      | 类型    | 描述                                                                                                                                                     |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `job`                                     | `对象`  | 此上下文针对工作流程运行中的每项作业而改变。 您可以从作业中的任何步骤访问此上下文。                                                                                                             |
| `job.container`                           | `对象`  | 作业的容器相关信息。 有关容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。   |
| `job.container.id`                        | `字符串` | 容器的 id。                                                                                                                                                |
| `job.container.network`                   | `字符串` | 容器网络的 id。 运行程序创建作业中所有容器使用的网络。                                                                                                                          |
| `job.services`                            | `对象`  | 为作业创建的服务容器。 有关服务容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)”。 |
| `job.services.<service id>.id`      | `字符串` | 服务容器的 id。                                                                                                                                              |
| `job.services.<service id>.network` | `字符串` | 服务容器网络的 id。 运行程序创建作业中所有容器使用的网络。                                                                                                                        |
| `job.services.<service id>.ports`   | `对象`  | 服务容器显露的端口。                                                                                                                                             |
| `job.status`                              | `字符串` | 作业的当前状态。 可能的值包括 `success`、`failure` 或 `cancelled`。                                                                                                     |

### `steps` 上下文

`steps` 上下文包含当前作业中已经运行的步骤相关信息。

| 属性名称                                                | 类型    | 描述                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `steps`                                             | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。                                                                                                                                                                                                                             |
| `steps.<step id>.outputs`                     | `对象`  | 为步骤定义的输出集。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs)”。                                                                                                                                  |
| `steps.<step id>.conclusion`                  | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之后完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step id>.outcome`                     | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之前完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step id>.outputs.<output name>` | `字符串` | 特定输出的值。                                                                                                                                                                                                                                                            |

### `runner` 上下文

`runner` 上下文包含正在执行当前作业的运行器相关信息。

| 属性名称                | 类型    | 描述                                                                                                                                                                                                                                              |
| ------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.name`       | `字符串` | {% data reusables.actions.runner-name-description %}
| `runner.os`         | `字符串` | {% data reusables.actions.runner-os-description %}
| `runner.temp`       | `字符串` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache` | `字符串` | {% ifversion ghae %}有关如何确定 {% data variables.actions.hosted_runner %} 已安装所需软件的说明，请参阅“[创建自定义映像](/actions/using-github-hosted-runners/creating-custom-images)”。 {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### `needs` 上下文

`needs` 上下文包含定义为当前作业依赖项的所有作业的输出。 有关定义作业依赖项的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

| 属性名称                                               | 类型    | 描述                                                                |
| -------------------------------------------------- | ----- | ----------------------------------------------------------------- |
| `needs.<job id>`                             | `对象`  | 当前作业依赖的单个作业。                                                      |
| `needs.<job id>.outputs`                     | `对象`  | 当前作业依赖的作业的输出集。                                                    |
| `needs.<job id>.outputs.<output name>` | `字符串` | 当前作业依赖的作业的特定输出值。                                                  |
| `needs.<job id>.result`                      | `字符串` | 当前作业依赖的作业的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 |

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}
### `inputs` context

The `inputs` context contains information about the inputs of reusable workflow. The inputs are defined in [`workflow_call` event configuration](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events). These inputs are passed from [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) in an external workflow.

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)".

| 属性名称                  | 类型                                | 描述                                                                                                                |
| --------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `inputs`              | `对象`                              | This context is only available when it is [a reusable workflow](/actions/learn-github-actions/reusing-workflows). |
| `inputs.<name>` | `string` or `number` or `boolean` | Each input value passed from an external workflow.                                                                |
{% endif %}

#### 打印上下文信息到日志文件的示例

要检查每个上下文中可访问的信息，您可以使用此工作流程文件示例。

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

## 上下文可用性

在整个工作流程运行过程中，提供不同的上下文。 例如，`secrets` 上下文只能用于作业中的某些地方。

此外，某些功能只能在某些地方使用。 例如， `hashFiles` 函数无法随处可用。

下表列出了工作流程中每一个上下文和特殊函数可以使用的地方。 除非下面列出，否则可以在任何地方使用函数。 |{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
| 路径                         | 上下文                        | 特殊函数                       |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                            |
| <code>env</code>  | <code>github, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix, inputs</code>  |                            |
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
| <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs</code> |                            |
| <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github</code> |                            |
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
