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

Use `on.workflow_call` to define the inputs and outputs for a reusable workflow. You can also map the secrets that are available to the called workflow. For more information on reusable workflows, see "[Reusing workflows](/actions/using-workflows/reusing-workflows)."

### `on.workflow_call.inputs`

When using the `workflow_call` keyword, you can optionally specify inputs that are passed to the called workflow from the caller workflow. For more information about the `workflow_call` keyword, see "[Events that trigger workflows](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)."

In addition to the standard input parameters that are available, `on.workflow_call.inputs` requires a `type` parameter. For more information, see [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

If a `default` parameter is not set, the default value of the input is `false` for a boolean, `0` for a number, and `""` for a string.

Within the called workflow, you can use the `inputs` context to refer to an input.

If a caller workflow passes an input that is not specified in the called workflow, this results in an error.

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

Required if input is defined for the `on.workflow_call` keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: `boolean`, `number`, or `string`.

### `on.workflow_call.outputs`

A map of outputs for a called workflow. Called workflow outputs are available to all downstream jobs in the caller workflow. Each output has an identifier, an optional `description,` and a `value.` The `value` must be set to the value of an output from a job within the called workflow.

In the example below, two outputs are defined for this reusable workflow: `workflow_output1` and `workflow_output2`. These are mapped to outputs called `job_output1` and `job_output2`, both from a job called `my_job`.

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

For information on how to reference a job output, see [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `on.workflow_call.secrets`

A map of the secrets that can be used in the called workflow.

Within the called workflow, you can use the `secrets` context to refer to a secret.

If a caller workflow passes a secret that is not specified in the called workflow, this results in an error.

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

A string identifier to associate with the secret.

#### `on.workflow_call.secrets.<secret_id>.required`

A boolean specifying whether the secret must be supplied.
{% endif %}


## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.github-actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## `权限`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

{% endif %}

## `env`

A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

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

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

{% endif %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% endif %}
## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

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

A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. {% data variables.product.prodname_dotcom %} provides built-in steps to set up and complete a job.

You can run an unlimited number of steps as long as you are within the workflow usage limits. For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

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

A unique identifier for the step. 您可以使用 `id` 引用上下文中的步骤。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

### `jobs.<job_id>.steps[*].if`

You can use the `if` conditional to prevent a step from running unless a condition is met. 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

#### 示例：使用上下文

 此步骤仅在事件类型为 `pull_request` 并且事件操作为 `unassigned` 时运行。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### 示例：使用状态检查功能

The `my backup step` only runs when the previous step of a job fails. For more information, see "[Expressions](/actions/learn-github-actions/expressions#job-status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

### `jobs.<job_id>.steps[*].name`

A name for your step to display on {% data variables.product.prodname_dotcom %}.

### `jobs.<job_id>.steps[*].uses`

Selects an action to run as part of a step in your job. 操作是一种可重复使用的代码单位。 您可以使用工作流程所在仓库中、公共仓库中或[发布 Docker 容器映像](https://hub.docker.com/)中定义的操作。

强烈建议指定 Git ref、SHA 或 Docker 标记编号来包含所用操作的版本。 如果不指定版本，在操作所有者发布更新时可能会中断您的工作流程或造成非预期的行为。
- 使用已发行操作版本的 SHA 对于稳定性和安全性是最安全的。
- 使用特定主要操作版本可在保持兼容性的同时接收关键修复和安全补丁。 还可确保您的工作流程继续工作。
- 使用操作的默认分支可能很方便，但如果有人新发布具有突破性更改的主要版本，您的工作流程可能会中断。

Some actions require inputs that you must set using the [`with`](#jobsjob_idstepswith) keyword. 请查阅操作的自述文件，确定所需的输入。

Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](#jobsjob_idruns-on).

#### 示例：使用版本化操作

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: actions/checkout@v2
  # Reference a specific version
  - uses: actions/checkout@v2.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### 示例：使用公共操作

`{owner}/{repo}@{ref}`

You can specify a branch, ref, or SHA in a public {% data variables.product.prodname_dotcom %} repository.

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

A subdirectory in a public {% data variables.product.prodname_dotcom %} repository at a specific branch, ref, or SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### 示例：使用工作流程所在仓库中操作

`./path/to/dir`

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### 示例：使用 Docker 中枢操作

`docker://{image}:{tag}`

A Docker image published on [Docker Hub](https://hub.docker.com/).

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

A Docker image in the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}.

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

A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### 示例：在不同于工作流程的私有仓库中使用操作

Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”和“[加密密码](/actions/reference/encrypted-secrets)”。

Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.

{% raw %}
```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```
{% endraw %}

### `jobs.<job_id>.steps[*].run`

Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.

Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. 例如：

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

Using the `working-directory` keyword, you can specify the working directory of where to run the command.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

You can override the default shell settings in the runner's operating system using the `shell` keyword. You can use built-in `shell` keywords, or you can define a custom set of shell options. The shell command that is run internally executes a temporary file that contains the commands specified in the `run` keyword.

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

You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. {% data variables.product.prodname_dotcom %} interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.

例如：

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

The command used, `perl` in this example, must be installed on the runner.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% elsif fpt or ghec %}
For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners#supported-software)."
{% endif %}

#### 退出代码和错误操作首选项

For built-in shell keywords, we provide the following defaults that are executed by {% data variables.product.prodname_dotcom %}-hosted runners. You should use these guidelines when running shell scripts.

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

A `map` of the input parameters defined by the action. 每个输入参数都是一个键/值对。 输入参数被设置为环境变量。 The variable is prefixed with `INPUT_` and converted to upper case.

#### 示例

Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) defined by the `hello_world` action. These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.

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

A `string` that defines the inputs for a Docker container. {% data variables.product.prodname_dotcom %} 在容器启动时将 `args` 传递到容器的 `ENTRYPOINT`。 An `array of strings` is not supported by this parameter.

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

Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.

#### 示例

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.

### `jobs.<job_id>.steps[*].env`

Sets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job. For more information, see [`env`](#env) and [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the `secrets` context. For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Contexts](/actions/learn-github-actions/contexts)."

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

Prevents a job from failing when a step fails. Set to `true` to allow a job to pass when this step fails.

### `jobs.<job_id>.steps[*].timeout-minutes`

The maximum number of minutes to run the step before killing the process.

## `jobs.<job_id>.timeout-minutes`

The maximum number of minutes to let a job run before {% data variables.product.prodname_dotcom %} automatically cancels it. Default: 360

If the timeout exceeds the job execution time limit for the runner, the job will be canceled when the execution time limit is met instead. For more information about job execution time limits, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration#usage-limits)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

## `jobs.<job_id>.strategy`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-strategy %}

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.

### 示例：防止特定失败的矩阵作业无法运行工作流程

You can allow specific jobs in a job matrix to fail without failing the workflow run. For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.

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

{% data reusables.github-actions.docker-container-os-support %}

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

{% data reusables.github-actions.docker-container-os-support %}

Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner  automatically creates a Docker network and manages the life cycle of the service containers.

If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.

If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.

For more information about the differences between networking service containers, see "[About service containers](/actions/automating-your-workflow-with-github-actions/about-service-containers)."

### 示例：使用 localhost

This example creates two services: nginx and redis. 指定 Docker 主机端口但不指定容器端口时，容器端口将随机分配给空闲端口。 {% data variables.product.prodname_dotcom %} sets the assigned container port in the {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} context. In this example, you can access the service container ports using the {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} and {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} contexts.

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

The Docker image to use as the service container to run the action. The value can be the Docker Hub image name or a  registry name.

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

Sets a `map` of environment variables in the service container.

### `jobs.<job_id>.services.<service_id>.ports`

Sets an `array` of ports to expose on the service container.

### `jobs.<job_id>.services.<service_id>.volumes`

Sets an `array` of volumes for the service container to use. 您可以使用卷分享作业中服务或其他步骤之间的数据。 可以指定命名的 Docker 卷、匿名的 Docker 卷或主机上的绑定挂载。

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

Additional Docker container resource options. 有关选项列表，请参阅“[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)”。

{% warning %}

**警告**：不支持 `--network` 选项。

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

The location and version of a reusable workflow file to run as a job. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Use one of the following syntaxes:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### 示例

{% data reusables.actions.uses-keyword-example %}

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `jobs.<job_id>.with`

When a job is used to call a reusable workflow, you can use `with` to provide a map of inputs that are passed to the called workflow.

Any inputs that you pass must match the input specifications defined in the called workflow.

Unlike [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), the inputs you pass with `jobs.<job_id>.with` are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the `inputs` context.

#### 示例

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

A pair consisting of a string identifier for the input and the value of the input. The identifier must match the name of an input defined by [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) in the called workflow. The data type of the value must match the type defined by [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) in the called workflow.

Allowed expression contexts: `github`, and `needs`.

### `jobs.<job_id>.secrets`

When a job is used to call a reusable workflow, you can use `secrets` to provide a map of secrets that are passed to the called workflow.

Any secrets that you pass must match the names defined in the called workflow.

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

A pair consisting of a string identifier for the secret and the value of the secret. The identifier must match the name of a secret defined by [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) in the called workflow.

Allowed expression contexts: `github`, `needs`, and `secrets`.
{% endif %}

## 过滤器模式备忘清单

You can use special characters in path, branch, and tag filters.

- `*`： 匹配零个或多个字符，但不匹配 `/` 字符。 例如，`Octo*` 匹配 `Octocat`。
- `**`： 匹配零个或多个任何字符。
- `?`：匹配零个或一个前缀字符。
- `+`: 匹配一个或多个前置字符。
- `[]` 匹配列在括号中或包含在范围内的一个字符。 范围只能包含 `a-z`、`A-Z` 和 `0-9`。 例如，范围 `[0-9a-z]` 匹配任何数字或小写字母。 例如，`[CB]at` 匹配 `Cat` 或 `Bat`，`[1-2]00` 匹配 `100` 和 `200`。
- `!`：在模式开始时，它将否定以前的正模式。 如果不是第一个字符，它就没有特殊的意义。

The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.

```yaml
# Valid
- '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
- **/README.md
```

For more information about branch, tag, and path filter syntax, see "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)", and "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)."

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

Path patterns must match the whole path, and start from the repository's root.

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
