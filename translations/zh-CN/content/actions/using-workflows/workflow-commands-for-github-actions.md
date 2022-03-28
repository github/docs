---
title: GitHub Actions 的工作流程命令
shortTitle: 工作流程命令
intro: 您可以在工作流程或操作代码中运行 shell 命令时使用工作流程命令。
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于工作流程命令

操作可以与运行器机器进行通信，以设置环境变量，其他操作使用的输出值，将调试消息添加到输出日志和其他任务。

大多数工作流程命令使用特定格式的 `echo` 命令，而其他工作流程则通过写入文件被调用。 更多信息请参阅“[环境文件](#environment-files)”。

### 示例

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**注意：**工作流程命令和参数名称不区分大小写。

{% endnote %}

{% warning %}

**警告：**如果您使用命令提示符，则使用工作流程命令时忽略双引号字符 (`"`)。

{% endwarning %}

## 使用工作流程命令访问工具包函数

[actions/toolkit](https://github.com/actions/toolkit) 包括一些可以作为工作流程命令执行的功能。 使用 `::` 语法来运行您的 YAML 文件中的工作流程命令；然后，通过 `stdout` 将这些命令发送给运行器。 例如，不使用代码来设置环境变量，如下所示：

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Example: Setting a value

您可以在工作流程中使用 `set-output` 命令来设置相同的值：

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

下表显示了在工作流程中可用的工具包功能：

| 工具包函数                 | 等效工作流程命令                                                              |
| --------------------- | --------------------------------------------------------------------- |
| `core.addPath`        | Accessible using environment file `GITHUB_PATH`                       |
| `core.debug`          | `debug` |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}
| `core.notice`         | `notice` 
{% endif %}
| `core.error`          | `error`                                                               |
| `core.endGroup`       | `endgroup`                                                            |
| `core.exportVariable` | Accessible using environment file `GITHUB_ENV`                        |
| `core.getInput`       | 可使用环境变量 `INPUT_{NAME}` 访问                                             |
| `core.getState`       | 可使用环境变量 `STATE_{NAME}` 访问                                             |
| `core.isDebug`        | 可使用环境变量 `RUNNER_DEBUG` 访问                                             |
| `core.saveState`      | `save-state`                                                          |
| `core.setCommandEcho` | `echo`                                                                |
| `core.setFailed`      | 用作 `::error` 和 `exit 1` 的快捷方式                                         |
| `core.setOutput`      | `set-output`                                                          |
| `core.setSecret`      | `add-mask`                                                            |
| `core.startGroup`     | `组`                                                                   |
| `core.warning`        | `警告`                                                                  |

## 设置输出参数

设置操作的输出参数。

```{:copy}
::set-output name={name}::{value}
```

（可选）您也可以在操作的元数据文件中声明输出参数。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”。

### Example: Setting an output parameter

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %}

## 设置调试消息

将调试消息打印到日志。 您可以创建名为 `ACTIONS_STEP_DEBUG`、值为 `true` 的密码，才能在日志中查看通过此命令设置的调试消息。 更多信息请参阅“[启用调试日志记录](/actions/managing-workflow-runs/enabling-debug-logging)”。

```{:copy}
::debug::{message}
```

### Example: Setting a debug message

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}

## 设置通知消息

创建通知消息并将该消息打印到日志。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a notice message

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}
{% endif %}

## 设置警告消息

创建警告消息并将该消息打印到日志。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a warning message

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## 设置错误消息

创建错误消息并将该消息打印到日志。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting an error message

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## 对日志行分组

在日志中创建一个可扩展的组。 要创建组，请使用 `group` 命令并指定 `title`。 打印到 `group` 与 `endgroup` 命令之间日志的任何内容都会嵌套在日志中可扩展的条目内。

```{:copy}
::group::{title}
::endgroup::
```

### Example: Grouping log lines

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![工作流运行日志中的可折叠组](/assets/images/actions-log-group.png)

## 在日志中屏蔽值

```{:copy}
::add-mask::{value}
```

屏蔽值可阻止在日志中打印字符串或变量。 用空格分隔的每个屏蔽的词均替换为 `*` 字符。 您可以使用环境变量或字符串作为屏蔽的 `value`。

### Example: Masking a string

当您在日志中打印 `"Mona The Octocat"` 时，您将看到 `"***"`。

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

### Example: Masking an environment variable

当您在日志中打印变量 `MY_NAME` 或值 `"Mona The Octocat"` 时，您将看到 `"***"` 而不是 `"Mona The Octocat"`。

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## 停止和启动工作流程命令

停止处理任何工作流程命令。 此特殊命令可让您记录任何内容而不会意外运行工作流程命令。 例如，您可以停止记录以输出带有注释的整个脚本。

```{:copy}
::stop-commands::{endtoken}
```

要停止处理工作流程命令，请将唯一的令牌传递给 `stop-commands`。 要继续处理工作流程命令，请传递用于停止工作流程命令的同一令牌。

{% warning %}

**警告：** 请确保您使用的令牌是随机生成的，且对每次运行唯一。

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Example: Stopping and starting workflow commands

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

## Echoing command outputs

Enables or disables echoing of workflow commands. For example, if you use the `set-output` command in a workflow, it sets an output parameter but the workflow run's log does not show the command itself. If you enable command echoing, then the log shows the command, such as `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Command echoing is disabled by default. However, a workflow command is echoed if there are any errors processing the command.

The `add-mask`, `debug`, `warning`, and `error` commands do not support echoing because their outputs are already echoed to the log.

You can also enable command echoing globally by turning on step debug logging using the `ACTIONS_STEP_DEBUG` secret. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)". In contrast, the `echo` workflow command lets you enable command echoing at a more granular level, rather than enabling it for every workflow in a repository.

### Example: Toggling command echoing

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

The example above prints the following lines to the log:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Only the second `set-output` and `echo` workflow commands are included in the log because command echoing was only enabled when they were run. Even though it is not always echoed, the output parameter is set in all cases.

## 将值发送到 pre 和 post 操作

您可以使用 `save-state` 命令来创建环境变量，以便与工作流程的 `pre:` 或 `post:` 操作共享。 例如，您可以使用 `pre:` 操作创建文件，将该文件位置传给 `main:` 操作，然后使用 `post:` 操作删除文件。 或者，您可以使用 `main:` 操作创建文件，将该文件位置传给 `post:` 操作，然后使用 `post:` 操作删除文件。

如果您有多个 `pre:` 或 `post:` 操作，则只能访问使用了 `save-state` 的操作中的已保存值。 有关 `post:` 操作的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)”。

`save-state` 命令只能在操作内运行，并且对 YAML 文件不可用。 保存的值将作为环境值存储，带 `STATE_` 前缀。

此示例使用 JavaScript 运行 `save-state` 命令。 由此生成的环境变量被命名为 `STATE_processID`，带 `12345` 的值：

```javascript{:copy}
console.log('::save-state name=processID::12345')
```

然后，`STATE_processID` 变量将仅可被用于 `main` 操作下运行的清理脚本。 此示例在 `main` 中运行，并使用 JavaScript 显示分配给 `STATE_processID` 环境变量的值：

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Environment files

在工作流程执行期间，运行器生成可用于执行某些操作的临时文件。 这些文件的路径通过环境变量显示。 写入这些文件时，您需要使用 UTF-8 编码，以确保正确处理命令。 多个命令可以写入同一个文件，用换行符分隔。

{% powershell %}

{% note %}

**Note:** PowerShell versions 5.1 and below (`shell: powershell`) do not use UTF-8 by default, so you must specify the UTF-8 encoding. 例如：

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core versions 6 and higher (`shell: pwsh`) use UTF-8 by default. 例如：

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## 设置环境变量

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Using PowerShell version 6 and higher:
```pwsh{:copy}
"{environment_variable_name}={value}" >> $env:GITHUB_ENV
```

- Using PowerShell version 5.1 and below:
```powershell{:copy}
"{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
```

{% endpowershell %}

You can make an environment variable available to any subsequent steps in a workflow job by defining or updating the environment variable and writing this to the `GITHUB_ENV` environment file. 创建或更新环境变量的步骤无法访问新值，但在作业中的所有后续步骤均可访问。 The names of environment variables are case-sensitive, and you can include punctuation. 更多信息请参阅“[环境变量](/actions/learn-github-actions/environment-variables)”。

### 示例

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### 多行字符串

对于多行字符串，您可以使用具有以下语法的分隔符。

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

#### 示例

This example uses `EOF` as a delimiter, and sets the `JSON_RESPONSE` environment variable to the value of the `curl` response.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.lab >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.lab").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

## 添加系统路径

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. 要查看作业的当前定义路径，您可以在步骤或操作中使用 `echo "$PATH"`。

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### 示例

此示例演示如何将用户 `$HOME/.local/bin` 目录添加到 `PATH`：

{% bash %}

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}


This example demonstrates how to add the user `$env:HOMEPATH/.local/bin` directory to `PATH`:

{% powershell %}

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
