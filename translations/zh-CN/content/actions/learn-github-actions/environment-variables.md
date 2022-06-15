---
title: 环境变量
intro: '{% data variables.product.prodname_dotcom %} 为每个 {% data variables.product.prodname_actions %} 工作流程运行设置默认环境变量。 您也可以在工作流程文件中设置自定义环境变量。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于环境变量

您可以使用环境变量来存储要在工作流程中引用的信息。 您可以在工作流程步骤或操作中引用环境变量，这些变量将在运行工作流程的运行器计算机上插值。 在操作或工作流程步骤中运行的命令可以创建、读取和修改环境变量。

您可以设置自己的自定义环境变量，可以使用 {% data variables.product.prodname_dotcom %} 自动设置的默认环境变量，还可以使用在运行器上的工作环境中设置的任何其他环境变量。 环境变量区分大小写。

要设置自定义环境变量，必须在工作流程文件中定义它。 自定义环境变量的作用域仅限于在其中定义它的元素。 您可以定义作用域如下的环境变量：

* 整个工作流程，通过使用 [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) 工作流程文件的顶级来定义。
* 工作流程中作业的内容，通过使用 [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv) 来定义。
* 作业中的特定步骤，通过使用 [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv) 来定义。

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

上面的示例显示了在 `echo` 命令中使用的三个自定义环境变量：`$DAY_OF_WEEK`、`$Greeting` 和 `$First_Name`。 这些环境变量的值分别在工作流程、作业和步骤级别设置和定义作用域。

由于环境变量插值是在将工作流作业发送到运行器计算机后完成的，因此必须对运行器上使用的 shell 使用适当的语法。 在此示例中，工作流程指定 `ubuntu-latest`。 默认情况下，Linux 运行器使用 bash shell，因此您必须使用语法 `$NAME`。 如果工作流程指定了 Windows 运行器，则将使用 PowerShell 的语法 `$env:NAME`。 有关 shell 的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)”。

{% note %}

**注意**：您可以在步骤中使用 <span style="white-space: nowrap;">`run: env`</span> ，然后检查步骤的输出，以列出可用于工作流程步骤的整个环境变量集。

{% endnote %}

## 使用上下文访问环境变量值

除了环境变量之外，{% data variables.product.prodname_actions %} 还允许您使用上下文设置和读取值。 环境变量和上下文旨在用于工作流程中的不同点。

环境变量始终在虚拟机运行器上插值。 但是，工作流程的某些部分由 {% data variables.product.prodname_actions %} 处理，不会发送到运行器。 不能在工作流程文件的这些部分中使用环境变量。 相反，您可以使用上下文。 例如，`if` 条件（确定作业或步骤是否发送到运行器）始终由 {% data variables.product.prodname_actions %} 处理。 可以在 `if` 条件语句中使用上下文访问环境变量的值。

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

在第一个示例的修改中，我们引入了 `if` 条件。 现在，工作流程步骤仅在 `DAYS_OF_WEEK` 设置为 "Monday" 时才会运行。 我们通过使用 [`env` context](/actions/learn-github-actions/contexts#env-context)从 `if` 语句访问此值。

{% note %}

**注意**：上下文通常使用美元符号和大括号表示，如 {% raw %}`${{ context.property }}`{% endraw %}。 在 `if` 条件中，{% raw %}`${{` and `}}`{% endraw %} 是可选的，但如果使用它们，它们必须括住整个比较语句，如上所示。

{% endnote %}

您通常使用 `env` 或 `github` 上下文来访问工作流程部分中的环境变量值，这些值在作业发送给运行器之前处理。


| 上下文      | 用例                     | 示例                                                                                        |
| -------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| `env`    | 引用工作流中定义的自定义环境变量。      | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>   |
| `github` | 引用有关工作流程运行的信息和触发运行的事件。 | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |



在工作流程中，还有许多其他上下文可用于各种目的。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。 有关您可以在工作流程中使用特定上下文的详细信息，请参阅“[上下文可用性](/actions/learn-github-actions/contexts#context-availability)”。

### 其他类型的变量

在工作流程中的大多数位置，可以使用的唯一变量类型是环境变量，如 `$MY_VARIABLE`，或等效的上下文属性，如 <span style="white-space: nowrap;">{% raw %}'${{ env.MY_VARIABLE }}'{% endraw %}</span>。 例外情况包括：

* `workflow_call` 和 `workflow_dispatch` 事件的输入，允许您将值传递到工作流程。 更多信息请参阅 [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) 和 [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs)。
* 作业输出，允许您在工作流程中的作业之间传递值。 更多信息请参阅 [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)。
* 格式表达式中的变量，允许您替换字符串的某些部分。 更多信息请参阅 [`format`](/actions/learn-github-actions/expressions#format)。

## 环境变量命名约定

设置自定义环境变量时，不能使用任何默认环境变量名称。 有关这些变量的完整列表，请参阅下面的“[默认环境变量](#default-environment-variables)”。 如果尝试重写其中一个默认环境变量的值，则会忽略赋值。

您设置的指向文件系统上某个位置的任何新环境变量都应该有 `_PATH` 后缀。 `HOME`、`GITHUB_ENV` 和 `GITHUB_WORKSPACE` 默认环境变量是此约定的例外。

## 默认环境变量

{% data variables.product.prodname_dotcom %} 设置的默认环境变量可用于工作流程中的每个步骤。

强烈建议操作使用环境变量访问文件系统，而非使用硬编码的文件路径。 {% data variables.product.prodname_dotcom %} 设置供操作用于所有运行器环境中的环境变量。

| 环境变量                       | 描述                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CI`                       | 始终设置为 `true`。                                                                                                                                                                                                                                                                                                                                                                                                |
| `GITHUB_ACTION`            | 当前运行的操作的名称，或步骤的 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)。 例如，对于操作 `__repo-owner_name-of-action-repo`。<br><br>{% data variables.product.prodname_dotcom %} 将删除特殊字符，并在当前步骤运行没有 `ID`的脚本时使用名称 `__run`。 如果在同一作业中多次使用相同的脚本或操作，则名称将包含一个由序号前跟下划线组成的后缀。 例如，运行的第一个脚本名称 `__run`，则第二个脚本将命名为 `__run_2`。 同样，`actions/checkout` 第二次调用时将变成 `actionscheckout2`。 |
| `GITHUB_ACTION_PATH`       | 操作所在的路径。 此属性仅在复合操作中受支持。 您可以使用此路径访问与操作位于同一存储库中的文件。 例如，`/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`。                                                                                                                                                                                                                                                                                         |
| `GITHUB_ACTION_REPOSITORY` | 对于执行操作的步骤，这是操作的所有者和存储库名称。 例如 `actions/checkout`。                                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_ACTIONS`           | 当 {% data variables.product.prodname_actions %} 运行工作流程时，始终设置为 `true`。 您可以使用此变量来区分测试是在本地运行还是通过 {% data variables.product.prodname_actions %} 运行。                                                                                                                                                                                                                                                              |
| `GITHUB_ACTOR`             | 发起工作流程的个人或应用程序的名称。 例如 `octocat`。                                                                                                                                                                                                                                                                                                                                                                             |
| `GITHUB_API_URL`           | 返回 API URL。 例如：`{% data variables.product.api_url_code %}`。                                                                                                                                                                                                                                                                                                                                                  |
| `GITHUB_BASE_REF`          | 工作流程运行中拉取请求的基本引用或目标分支的名称。 这仅在触发工作流运行的事件 `pull_request` 或 `pull_request_target` 时才会设置。 例如 `main`。                                                                                                                                                                                                                                                                                                             |
| `GITHUB_ENV`               | 运行器上从工作流程命令到设置环境变量的文件路径。 此文件对于当前步骤是唯一的，并且会针对作业中的每个步骤进行更改。 例如，`/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)”。                                                                                  |
| `GITHUB_EVENT_NAME`        | 触发工作流程的事件的名称。 例如，`workflow_dispatch`。                                                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_EVENT_PATH`        | 运行器上包含完整事件 web 挂钩负载的文件的路径。 例如 `/github/workflow/event.json`。                                                                                                                                                                                                                                                                                                                                                 |
| `GITHUB_GRAPHQL_URL`       | 返回 GraphQL API URL。 例如：`{% data variables.product.graphql_url_code %}`。                                                                                                                                                                                                                                                                                                                                      |
| `GITHUB_HEAD_REF`          | 工作流程运行中拉取请求的头部引用或来源分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 或 `pull_request_target` 时才设置。 例如，`feature-branch-1`。                                                                                                                                                                                                                                                                                                 |
| `GITHUB_JOB`               | 当前作业的 [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。 例如，`greeting_job`。                                                                                                                                                                                                                                                                                                         |
| `GITHUB_PATH`              | 运行器上从工作流程命令到设置系统 `PATH` 变量的文件路径。 此文件对于当前步骤是唯一的，并且会针对作业中的每个步骤进行更改。  例如 `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)”。                                                                                   |
| `GITHUB_REF`               | 触发工作流程的分支或标记参考。 对于分支，这是格式 `refs/heads/<branch_name>`，对于标记是 `refs/tags/<tag_name>`，对于拉取请求是 `refs/pull/<pr_number>/merge`。 此变量仅在分支或标记可用于事件类型时才会设置。 例如 `refs/heads/feature-branch-1`。                                                                                                                                                                                                         |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} For example, `feature-branch-1`.| | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `GITHUB_REPOSITORY` |所有者和存储库名称。 例如 `octocat/Hello-World`。 | | `GITHUB_REPOSITORY_OWNER` |存储库所有者的姓名。 例如 `octocat`。 | | `GITHUB_RETENTION_DAYS` |工作流程运行日志和构件的保留天数。 例如 `90`。 | | `GITHUB_RUN_ATTEMPT` | 在存储库中运行的特定工作流程的每次尝试的唯一编号。 对于工作流程运行的第一次尝试，此数字从 1 开始，并随着每次重新运行而递增。 例如 `3`。 | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} 例如 `1658821493`。 | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} 例如 `3`。 | | `GITHUB_SERVER_URL`| {% data variables.product.product_name %} 服务器的 URL。 例如：`https://{% data variables.product.product_url %}`。 | `GITHUB_SHA` | 触发工作流程的提交 SHA。 此提交 SHA 的值取决于触发工作流程的事件。 更多信息请参阅“[触发工作流程的事件](/actions/using-workflows/events-that-trigger-workflows)”。 例如 `ffac537e6cbbf934b08745a378932722df287a53`。 |
{%- ifversion actions-job-summaries %}
| `GITHUB_STEP_SUMMARY` | 包含工作流程命令中作业摘要的文件在运行器上的路径。 此文件对于当前步骤是唯一的，并且会针对作业中的每个步骤进行更改。 例如，`/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)”。 |
{%- endif %}
| `GITHUB_WORKFLOW` |工作流程的名称。 例如 `My test workflow`。 如果工作流程文件未指定`名称`，则此变量的值是存储库中工作流程文件的完整路径。 | | `GITHUB_WORKSPACE` | 运行器上步骤的默认工作目录，以及使用[`检出`](https://github.com/actions/checkout)操作时存储库的默认位置。 例如 `/home/runner/work/my-repo-name/my-repo-name`。 |
{%- ifversion actions-runner-arch-envvars %}
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %}
{%- endif %}
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} 例如 `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} 例如 `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} 例如 `D:\a\_temp` |
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} 例如 `C:\hostedtoolcache\windows` |{% endif %}

{% note %}

**注:**

* 如果需要在作业中使用工作流程运行的 URL，您可以组合这些环境变量：`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* 大多数默认环境变量都有一个对应且名称类似的上下文属性。 例如，在工作流程处理期间，可以使用 {% raw %}`${{ github.ref }}`{% endraw %} 上下文属性读取 `GITHUB_REF` 环境变量的值。

{% endnote %}

## 检测操作系统

通过使用默认环境变量和相应的上下文属性 <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>，可以编写可用于不同操作系统的单个工作流程文件 `RUNNER_OS`。 例如，如果将操作系统从 `macos-latest` 更改为 `windows-latest` ，而不必更改环境变量的语法，则以下工作流程可以成功运行，这取决于运行器使用的 shell。

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

在此示例中，两个 `if` 语句检查 `runner` 上下文的 `os` 属性，以确定运行器的操作系统。 `if` 条件由 {% data variables.product.prodname_actions %} 处理，并且只有将检查解析为 `true` 的步骤才会发送到运行器。 这里其中一个检查将始终为 `true`，而另一个检查为 `false`，因此只有其中一个步骤发送到运行器。 在作业发送到运行器后，将执行该步骤，并使用适当的语法 (在 Windows 上对 PowerShell 使用 `$env:NAME`，在 Linux 和 MacOS 上的对 bash 和 sh 使用 `$NAME`）对 `echo` 命令中的环境变量进行插值。 在此示例中，语句 `runs-on: macos-latest` 意味着将运行第二步。

## 在工作流程中的步骤和作业之间传递值

 如果在作业的某个步骤中生成值，则可以在同一作业的后续步骤中使用该值，方法是将该值分配给现有或新的环境变量，然后将其写入 `GITHUB_ENV` 环境文件。 环境文件可由操作直接使用，也可从工作流程文件中的 shell 命令使用 `run` 关键字。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)”。

 如果要将工作流程中一个作业的某个步骤中的值传递到工作流程中另一作业的某个步骤，可以将该值定义为作业输出。 然后，可以从另一个作业中的步骤引用此作业输出。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)”。 
 
