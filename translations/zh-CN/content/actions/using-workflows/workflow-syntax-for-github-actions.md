---
title: GitHub Actions 的工作流程语法
shortTitle: 工作流程语法
intro: 工作流程是可配置的自动化过程，由一个或多个作业组成。 您必须创建 YAML 文件来定义工作流程配置。
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于工作流程的 YAML 语法

工作流程文件使用 YAML 语法，必须有 `.yml` 或 `.yaml` 文件扩展名。 {% data reusables.actions.learn-more-about-yaml %}

必须将工作流程文件存储在仓库的 `.github/workflows` 目录中。

## `name`

工作流程的名称。 {% data variables.product.prodname_dotcom %} 在仓库的操作页面上显示工作流程的名称。 如果省略 `name`，{% data variables.product.prodname_dotcom %} 将其设置为相对于仓库根目录的工作流程文件路径。

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-ghes-beta %}

使用 `on.workflow_call` 定义可重用工作流程的输入和输出。 您还可以映射可用于被调用工作流程的机密。 有关可重用工作流程的详细信息，请参阅“[重用工作流程](/actions/using-workflows/reusing-workflows)”。

### `on.workflow_call.inputs`

使用 `workflow_call` 关键字时，可以选择指定从调用方工作流程传递到被调用工作流程的输入。 有关 `workflow_call` 关键字的更多信息，请参阅“[触发工作流程的事件](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)”。

除了可用的标准输入参数外，`on.workflow_call.inputs` 还需要 `type` 参数。 更多信息请参阅 [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype)。

如果未设置 `default` 参数，则输入的默认值对于布尔值为 `false` ，对于数字为 `0`，对于字符串为 `""`。

在被调用的工作流程中，可以使用 `inputs` 上下文来引用输入。

如果调用方工作流程传递的输入未在被调用工作流程中指定，则会导致错误。

#### 示例

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

#### `on.workflow_call.inputs.<input_id>.type`

在为 `on.workflow_call` 关键字定义了输入时必需。 此参数的值是指定输入的数据类型的字符串。 这必须是以下之一：`boolean`、`number` 或 `string`。

### `on.workflow_call.outputs`

被调用工作流程的输出映射。 调用的工作流程输出可用于调用方工作流程中的所有下游作业。 每个输出都有标识符、可选的 `description` 和 `value`。必须将 `value` 设置为被调用工作流程中作业的输出值。

在下面的示例中，为此可重用工作流定义了两个输出：`workflow_output1` 和 `workflow_output2`。 它们映射到名为 `job_output1` 和 `job_output2` 的输出，两者都来自名为 `my_job` 的作业。

#### 示例

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

有关如何引用作业输出的信息，请参阅 [`jobs.<job_id>.outputs`](#jobsjob_idoutputs)。 For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `on.workflow_call.secrets`

可在被调用工作流程中使用的机密的映射。

在被调用的工作流程中，可以使用 `secrets` 上下文来引用机密。

如果调用方工作流程传递的机密未在被调用的工作流程中指定，则会导致错误。

#### 示例

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

要与机密关联的字符串标识符。

#### `on.workflow_call.secrets.<secret_id>.required`

指定是否必须提供机密的布尔值。
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## `权限`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

{% endif %}

## `env`

环境变量的 `map` 可用于工作流程中所有作业的步骤。 您还可以设置仅适用于单个作业的步骤或单个步骤的环境变量。 更多信息请参阅 [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)。

`env` 映射中的变量不能根据映射中的其他变量进行定义。

{% data reusables.repositories.actions-env-var-note %}

### 示例

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

{% endif %}
## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

{% endif %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% endif %}
## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

环境变量的 `map` 可用于作业中的所有步骤。 您也可以设置整个工作流程或单个步骤的环境变量。 更多信息请参阅 [`env`](#env) 和 [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)。

{% data reusables.repositories.actions-env-var-note %}

### 示例

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

作业包含一系列任务，称为 `steps`。 步骤可以运行命令、运行设置任务，或者运行您的仓库、公共仓库中的操作或 Docker 注册表中发布的操作。 并非所有步骤都会运行操作，但所有操作都会作为步骤运行。 每个步骤在运行器环境中以其自己的进程运行，且可以访问工作区和文件系统。 因为步骤以自己的进程运行，所以步骤之间不会保留环境变量的更改。 {% data variables.product.prodname_dotcom %} 提供内置的步骤来设置和完成作业。

在工作流程的使用限制之内可运行无限数量的步骤。 For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

### 示例

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

步骤的唯一标识符。 您可以使用 `id` 引用上下文中的步骤。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

### `jobs.<job_id>.steps[*].if`

您可以使用 `if` 条件阻止步骤在条件得到满足之前运行。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.actions.expression-syntax-if %} 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions)”。

#### 示例：使用上下文

 此步骤仅在事件类型为 `pull_request` 并且事件操作为 `unassigned` 时运行。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### 示例：使用状态检查功能

`my backup step` 仅在作业的上一步失败时运行。 For more information, see "[Expressions](/actions/learn-github-actions/expressions#job-status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### 示例：使用机密

无法直接在 `if:` 条件中引用机密。 而应考虑将机密设置为作业级环境变量，然后引用环境变量以有条件地运行作业中的步骤。

如果尚未设置机密，则引用该机密的表达式（例如示例中的 {% raw %}`${{ secrets.SuperSecret }}`{% endraw %}）的返回值将为空字符串。

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

更多信息请参阅“[上下文可用性](/actions/learn-github-actions/contexts#context-availability)”和“[加密密码](/actions/security-guides/encrypted-secrets)”。

### `jobs.<job_id>.steps[*].name`

步骤显示在 {% data variables.product.prodname_dotcom %} 上的名称。

### `jobs.<job_id>.steps[*].uses`

选择要作为作业中步骤的一部分运行的操作。 操作是一种可重复使用的代码单位。 您可以使用工作流程所在仓库中、公共仓库中或[发布 Docker 容器映像](https://hub.docker.com/)中定义的操作。

强烈建议指定 Git ref、SHA 或 Docker 标记编号来包含所用操作的版本。 如果不指定版本，在操作所有者发布更新时可能会中断您的工作流程或造成非预期的行为。
- 使用已发行操作版本的 SHA 对于稳定性和安全性是最安全的。
- 使用特定主要操作版本可在保持兼容性的同时接收关键修复和安全补丁。 还可确保您的工作流程继续工作。
- 使用操作的默认分支可能很方便，但如果有人新发布具有突破性更改的主要版本，您的工作流程可能会中断。

有些操作要求必须通过 [`with`](#jobsjob_idstepswith) 关键词设置输入。 请查阅操作的自述文件，确定所需的输入。

操作为 JavaScript 文件或 Docker 容器。 如果您使用的操作是 Docker 容器，则必须在 Linux 环境中运行作业。 更多详情请参阅 [`runs-on`](#jobsjob_idruns-on)。

#### 示例：使用版本化操作

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### 示例：使用公共操作

`{owner}/{repo}@{ref}`

您可以指定公共 {% data variables.product.prodname_dotcom %} 仓库中的分支、引用或 SHA。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### 示例：在子目录中使用公共操作

`{owner}/{repo}/{path}@{ref}`

公共 {% data variables.product.prodname_dotcom %} 仓库中特定分支、引用或 SHA 上的子目录。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### 示例：使用工作流程所在仓库中操作

`./path/to/dir`

包含工作流程的仓库中操作的目录路径。 在使用操作之前，必须检出仓库。

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### 示例：使用 Docker 中枢操作

`docker://{image}:{tag}`

[Docker 中枢](https://hub.docker.com/)上发布的 Docker 映像。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### 示例：使用 {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

{% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} 中的 Docker 映像。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### 示例：使用 Docker 公共注册表操作

`docker://{host}/{image}:{tag}`

公共注册表中的 Docker 映像。 此示例在 `gcr.io` 使用 Google Container Registry。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### 示例：在不同于工作流程的私有仓库中使用操作

您的工作流程必须检出私有仓库，并在本地引用操作。 生成个人访问令牌并将该令牌添加为加密密钥。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”和“[加密密码](/actions/reference/encrypted-secrets)”。

将示例中的 `PERSONAL_ACCESS_TOKEN` 替换为您的密钥名称。

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

使用操作系统 shell 运行命令行程序。 如果不提供 `name`，步骤名称将默认为 `run` 命令中指定的文本。

命令默认使用非登录 shell 运行。 您可以选择不同的 shell，也可以自定义用于运行命令的 shell。 更多信息请参阅 [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell)。

每个 `run` 关键词代表运行器环境中一个新的进程和 shell。 当您提供多行命令时，每行都在同一个 shell 中运行。 例如：

* 单行命令：

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* 多行命令：

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

使用 `working-directory` 关键词，您可以指定运行命令的工作目录位置。

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

您可以使用 `shell` 关键词覆盖运行器操作系统中默认的 shell 设置。 您可以使用内置的 `shell` 关键词，也可以自定义 shell 选项集。 内部运行的 shell 命令执行一个临时文件，其中包含 `run` 关键词中指定的命令。

| 支持的平台         | `shell` 参数   | 描述                                                                                                                                                                                  | 内部运行命令                                          |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 所有            | `bash`       | 非 Windows 平台上回退到 `sh` 的默认 shell。 指定 Windows 上的 bash shell 时，将使用 Git for Windows 随附的 bash shel。                                                                                      | `bash --noprofile --norc -eo pipefail {0}`      |
| 所有            | `pwsh`       | PowerShell Core。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。                                                                                                | `pwsh -command ". '{0}'"`                       |
| 所有            | `python`     | 执行 python 命令。                                                                                                                                                                       | `python {0}`                                    |
| Linux / macOS | `sh`         | 未提供 shell 且 在路径中找不到 `bash` 时的非 Windows 平台的后退行为。                                                                                                                                     | `sh -e {0}`                                     |
| Windows       | `cmd`        | {% data variables.product.prodname_dotcom %} 将扩展名 `.cmd` 附加到您的脚本名称并替换 `{0}`。                                                                                                        | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows       | `pwsh`       | 这是 Windows 上使用的默认 shell。 PowerShell Core。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。 如果自托管的 Windows 运行器没有安装 _PowerShell Core_，则使用 _PowerShell Desktop_ 代替。 | `pwsh -command ". '{0}'"`.                      |
| Windows       | `powershell` | PowerShell 桌面。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。                                                                                                  | `powershell -command ". '{0}'"`.                |

#### 示例：使用 bash 运行脚本

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### 示例：使用 Windows `cmd` 运行脚本

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### 示例：使用 PowerShell Core 运行脚本

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### 示例：使用 PowerShell 桌面运行脚本

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### 示例：运行 python 脚本

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### 自定义 shell

您可以使用 `command […options] {0} [..more_options]` 将 `shell` 值设置为模板字符串。 {% data variables.product.prodname_dotcom %} 将字符串的第一个用空格分隔的词解释为命令，并在 `{0}` 处插入临时脚本的文件名。

例如：

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

此示例中使用的命令 `perl` 必须安装在运行器上。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% elsif fpt or ghec %}
有关 GitHub 托管运行器中所包含软件的信息，请参阅“[GitHub 托管运行器的规格](/actions/reference/specifications-for-github-hosted-runners#supported-software)”。
{% endif %}

#### 退出代码和错误操作首选项

至于内置的 shell 关键词，我们提供由 {% data variables.product.prodname_dotcom %} 托管运行程序执行的以下默认值。 在运行 shell 脚本时，您应该使用这些指南。

- `bash`/`sh`：
  - 使用 `set -eo pipefail` 的快速失败行为：`bash` 和内置 `shell` 的默认值。 它还是未在非 Windows 平台上提供选项时的默认值。
  - 您可以向 shell 选项提供模板字符串，以退出快速失败并接管全面控制权。 例如 `bash {0}`。
  - sh 类 shell 使用脚本中最后执行的命令的退出代码退出，也是操作的默认行为。 运行程序将根据此退出代码将步骤的状态报告为失败/成功。

- `powershell`/`pwsh`
  - 可能时的快速失败行为。 对于 `pwsh` 和 `powershell` 内置 shell，我们将 `$ErrorActionPreference = 'stop'` 附加到脚本内容。
  - 我们将 `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` 附加到 powershell 脚本，以使操作状态反映脚本的最后一个退出代码。
  - 用户可随时通过不使用内置 shell 并提供类似如下的自定义 shell 选项来退出：`pwsh -File {0}` 或 `powershell -Command "& '{0}'"`，具体取决于需求。

- `cmd`
  - 除了编写脚本来检查每个错误代码并相应地响应之外，似乎没有办法完全选择快速失败行为。 由于我们默认不能实际提供该行为，因此您需要将此行为写入脚本。
  - `cmd.exe` 在退出时带有其执行的最后一个程序的错误等级，并且会将错误代码返回到运行程序。 此行为在内部与上一个 `sh` 和 `pwsh` 默认行为一致，是 `cmd.exe` 的默认值，所以此行为保持不变。

### `jobs.<job_id>.steps[*].with`

输入参数的 `map` 由操作定义。 每个输入参数都是一个键/值对。 输入参数被设置为环境变量。 该变量的前缀为 `INPUT_`，并转换为大写。

#### 示例

定义 `hello_world` 操作所定义的三个输入参数（`first_name`、`middle_name` 和 `last_name`）。 这些输入变量将被 `hello-world` 操作作为 `INPUT_FIRST_NAME`、`INPUT_MIDDLE_NAME` 和 `INPUT_LAST_NAME` 环境变量使用。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

### `jobs.<job_id>.steps[*].with.args`

`string` 定义 Docker 容器的输入。 {% data variables.product.prodname_dotcom %} 在容器启动时将 `args` 传递到容器的 `ENTRYPOINT`。 此参数不支持 `array of strings`。

#### 示例

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args` 用来代替 `Dockerfile` 中的 `CMD` 指令。 如果在 `Dockerfile` 中使用 `CMD`，请遵循按偏好顺序排序的指导方针：

1. 在操作的自述文件中记录必要的参数，并在 `CMD` 指令的中忽略它们。
1. 使用默认值，允许不指定任何 `args` 即可使用操作。
1. 如果操作显示 `--help` 标记或类似项，请将其用作默认值，以便操作自行记录。

### `jobs.<job_id>.steps[*].with.entrypoint`

覆盖 `Dockerfile` 中的 Docker `ENTRYPOINT`，或在未指定时设置它。 与包含 shell 和 exec 表单的 Docker `ENTRYPOINT` 指令不同，`entrypoint` 关键词只接受定义要运行的可执行文件的单个字符串。

#### 示例

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

`entrypoint` 关键词旨在用于 Docker 容器操作，但您也可以将其用于未定义任何输入的 JavaScript 操作。

### `jobs.<job_id>.steps[*].env`

设置供步骤用于运行器环境的环境变量。 您也可以设置整个工作流程或某个作业的环境变量。 更多信息请参阅 [`env`](#env) 和 [`jobs.<job_id>.env`](#jobsjob_idenv)。

{% data reusables.repositories.actions-env-var-note %}

公共操作可在自述文件中指定预期的环境变量。 如果要在环境变量中设置密码，必须使用 `secrets` 上下文进行设置。 更多信息请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”和“[上下文](/actions/learn-github-actions/contexts)”。

#### 示例

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

防止步骤失败时作业也会失败。 设置为 `true` 以允许在此步骤失败时作业能够通过。

### `jobs.<job_id>.steps[*].timeout-minutes`

终止进程之前运行该步骤的最大分钟数。

## `jobs.<job_id>.timeout-minutes`

在 {% data variables.product.prodname_dotcom %} 自动取消运行之前可让作业运行的最大分钟数。 默认值：360

如果超时超过运行器的作业执行时限，作业将在达到执行时限时取消。 有关作业执行时间限制的更多信息，请参阅 {% ifversion fpt or ghec or ghes %}“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration#usage-limits)”（对于 {% data variables.product.prodname_dotcom %} 托管的运行器）和 {% endif %}“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”（对于自托管运行器使用限制）。{% elsif ghae %}。”{% endif %}

{% note %}

**注意：** {% data reusables.actions.github-token-expiration %} 对于自托管运行器，如果作业超时大于 24 小时，则令牌可能是限制因素。 有关 `GITHUB_TOKEN` 的更多信息，请参阅“[关于 `GITHUB_TOKEN` 机密](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)”。

{% endnote %}

## `jobs.<job_id>.strategy`

使用 `jobs.<job_id>.strategy` 为您的任务使用矩阵策略。 {% data reusables.actions.jobs.about-matrix-strategy %} 更多信息请参阅“[对作业使用矩阵](/actions/using-jobs/using-a-matrix-for-your-jobs)”。

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### 示例：使用单维矩阵

{% data reusables.actions.jobs.single-dimension-matrix %}

#### 示例：使用多维矩阵

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### 示例：使用上下文创建矩阵

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### 示例：展开配置

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### 示例：添加配置

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

防止工作流程运行在作业失败时失败。 设置为 `true` 以允许工作流程运行在此作业失败时通过。

### 示例：防止特定失败的矩阵作业无法运行工作流程

您可以允许作业矩阵中的特定任务失败，但工作流程运行不失败。 例如， 只允许 `node` 设置为 `15` 的实验性作业失败，而不允许工作流程运行失败。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

用于为工作流程中的作业托管服务容器。 服务容器可用于创建数据库或缓存服务（如 Redis）。 运行器自动创建 Docker 网络并管理服务容器的生命周期。

如果将作业配置为在容器中运行，或者步骤使用容器操作，则无需映射端口来访问服务或操作。 Docker 会自动在同一个 Docker 用户定义的桥接网络上的容器之间显示所有端口。 您可以直接引用服务容器的主机名。 主机名自动映射到为工作流程中的服务配置的标签名称。

如果配置作业直接在运行器机器上运行，且您的步骤不使用容器操作，则必须将任何必需的 Docker 服务容器端口映射到 Docker 主机（运行器机器）。 您可以使用 localhost 和映射的端口访问服务容器。

有关网络服务容器之间差异的更多信息，请参阅“[关于服务容器](/actions/automating-your-workflow-with-github-actions/about-service-containers)”。

### 示例：使用 localhost

此示例创建分别用于 nginx 和 redis 的两项服务。 指定 Docker 主机端口但不指定容器端口时，容器端口将随机分配给空闲端口。 {% data variables.product.prodname_dotcom %} 在 {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} 上下文中设置分配的容器端口。 在此示例中，可以使用 {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} 和 {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} 上下文访问服务容器端口。

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

要用作运行操作的服务容器的 Docker 镜像。 值可以是 Docker Hub 映像名称或注册表名称。

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### 示例

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

在服务容器中设置环境变量的 `map`。

### `jobs.<job_id>.services.<service_id>.ports`

设置要在服务容器上显示的端口 `array`。

### `jobs.<job_id>.services.<service_id>.volumes`

设置要使用的服务容器卷的 `array`。 您可以使用卷分享作业中服务或其他步骤之间的数据。 可以指定命名的 Docker 卷、匿名的 Docker 卷或主机上的绑定挂载。

要指定卷，需指定来源和目标路径：

`<source>:<destinationPath>`.

`<source>` 是主机上的卷名称或绝对路径，`<destinationPath>` 是容器中的绝对路径。

#### 示例

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

附加 Docker 容器资源选项。 有关选项列表，请参阅“[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)”。

{% warning %}

**警告**：不支持 `--network` 选项。

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

要作为作业运行的可重用工作流程文件的位置和版本。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}使用下列语法之一：{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### 示例

{% data reusables.actions.uses-keyword-example %}

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `jobs.<job_id>.with`

当作业用于调用可重用工作流程时，可以使用 `with` 来提供传递到被调用工作流程的输入的映射。

传递的任何输入都必须与被调用工作流程中定义的输入规范匹配。

与 [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith)不同，通过 `jobs.<job_id>.with` 传递的输入不能作为被调用工作流程中的环境变量使用。 但您可以通过使用 `inputs` 上下文来引用输入。

#### 示例

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

由输入的字符串标识符和输入的值组成的对。 标识符必须与被调用工作流程中的 [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) 定义的输入名称匹配。 该值的数据类型必须与被调用工作流程中的 [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) 定义的类型匹配。

允许的表达式上下文： `github` 和 `needs`。

### `jobs.<job_id>.secrets`

当作业用于调用可重用工作流程时，可以使用 `secrets` 来提供传递给被调用工作流程的机密映射。

传递的任何机密都必须与被调用工作流程中定义的名称匹配。

#### 示例

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

### `jobs.<job_id>.secrets.<secret_id>`

由机密的字符串标识符和机密的值组成的对。 标识符必须与被调用工作流程中的 [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) 定义的机密名称匹配。

允许的表达式上下文：`github`、`needs` 和 `secrets`。
{% endif %}

## 过滤器模式备忘清单

您可以在路径、分支和标记过滤器中使用特殊字符。

- `*`： 匹配零个或多个字符，但不匹配 `/` 字符。 例如，`Octo*` 匹配 `Octocat`。
- `**`： 匹配零个或多个任何字符。
- `?`：匹配零个或一个前缀字符。
- `+`: 匹配一个或多个前置字符。
- `[]` 匹配列在括号中或包含在范围内的一个字符。 范围只能包含 `a-z`、`A-Z` 和 `0-9`。 例如，范围 `[0-9a-z]` 匹配任何数字或小写字母。 例如，`[CB]at` 匹配 `Cat` 或 `Bat`，`[1-2]00` 匹配 `100` 和 `200`。
- `!`：在模式开始时，它将否定以前的正模式。 如果不是第一个字符，它就没有特殊的意义。

字符 `*`、`[` 和 `!` 是 YAML 中的特殊字符。 如果模式以 `*`、`[` 或 `!` 开头，必须用引号括住模式。

```yaml
# Valid
- '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
- **/README.md
```

有关分支、标记和路径筛选器语法的更多信息，请参阅“[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)”、“[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)”和“[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)”。

### 匹配分支和标记的模式

| 模式                                                      | 描述                                                                   | 示例匹配                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `feature/*`                                             | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。                                          | `feature/my-branch`<br/><br/>`feature/your-branch`                                                        |
| `feature/**`                                            | `**` 通配符匹配任何字符，包括分支和标记名称中的斜杠 (`/`)。                                  | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | 匹配分支或标记名称的确切名称。                                                      | `main`<br/><br/>`releases/mona-the-octocat`                                                               |
| `'*'`                                                   | 匹配所有不包含斜杠 (`/`) 的分支和标记名称。 `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。 | `main`<br/><br/>`releases`                                                                                |
| `'**'`                                                  | 匹配所有分支和标记名称。 这是不使用 `branches` or `tags` 过滤器时的默认行为。                   | `all/the/branches`<br/><br/>`every/tag`                                                                   |
| `'*feature'`                                            | `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。                           | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature`                                   |
| `v2*`                                                   | 匹配以 `v2` 开头的分支和标记名称。                                                 | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                                   | 将所有语义版本控制分支和标记与主要版本 1 或 2 匹配.                                        | `v1.10.1`<br/><br/>`v2.0.0`                                                                               |

### 匹配文件路径的模式

路径模式必须匹配整个路径，并从仓库根开始。

| 模式                                                                      | 匹配描述                                                                   | 示例匹配                                                                                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `'*'`                                                                   | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。 `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。 | `README.md`<br/><br/>`server.rb`                                                                             |
| `'*.jsx?'`                                                              | `?` 个字符匹配零个或一个前缀字符。                                                    | `page.js`<br/><br/>`page.jsx`                                                                                |
| `'**'`                                                                  | The `**` 通配符匹配任何字符，包括斜杠 (`/`)。 这是不使用 `path` 过滤器时的默认行为。                 | `all/the/files.md`                                                                                                       |
| `'*.js'`                                                                | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。 匹配仓库根目录上的所有 `.js` 文件。                      | `app.js`<br/><br/>`index.js`                                                                                 |
| `'**.js'`                                                               | 匹配仓库中的所有 `.js` 文件。                                                     | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js`                                       |
| `docs/*`                                                                | 仓库根目录下 `docs` 根目录中的所有文件。                                               | `docs/README.md`<br/><br/>`docs/file.txt`                                                                    |
| `docs/**`                                                               | 仓库根目录下 `/docs` 目录中的任何文件。                                               | `docs/README.md`<br/><br/>`docs/mona/octocat.txt`                                                            |
| `docs/**/*.md`                                                          | `docs` 目录中任意位置具有 `.md` 后缀的文件。                                          | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`          |
| `'**/docs/**'`                                                          | 仓库中任意位置 `docs` 目录下的任何文件。                                               | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`             |
| `'**/README.md'`                                                        | 仓库中任意位置的 README.md 文件。                                                 | `README.md`<br/><br/>`js/README.md`                                                                          |
| `'**/*src/**'`                                                          | 仓库中任意位置具有 `src` 后缀的文件夹中的任何文件。                                          | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`                                                              |
| `'**/*-post.md'`                                                        | 仓库中任意位置具有后缀 `-post.md` 的文件。                                            | `my-post.md`<br/><br/>`path/their-post.md`                                                                   |
| `'**/migrate-*.sql'`                                                    | 仓库中任意位置具有前缀 `migrate-` 和后缀 `.sql` 的文件。                                 | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql`             |
| `*.md`<br/><br/>`!README.md`                                | 模式前使用感叹号 (`!`) 对其进行否定。 当文件与模式匹配并且也匹配文件后面定义的否定模式时，则不包括该文件。              | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | 按顺序检查模式。 否定前一个模式的模式将重新包含文件路径。                                          | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`                                            |
