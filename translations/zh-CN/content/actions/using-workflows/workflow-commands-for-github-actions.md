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

大多数工作流程命令使用特定格式的 `echo` 命令，而其他工作流程则通过写入文件被调用。 For more information, see "[Environment files](#environment-files)."

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

### 示例：设置值

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

| 工具包函数                 | 等效工作流程命令                                                   |
| --------------------- | ---------------------------------------------------------- |
| `core.addPath`        | 可使用环境文件 `GITHUB_PATH` 访问                                   |
| `core.debug`          | `debug` |{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
| `core.notice`         | `notice` 
{% endif %}
| `core.error`          | `error`                                                    |
| `core.endGroup`       | `endgroup`                                                 |
| `core.exportVariable` | 可使用环境文件 `GITHUB_ENV` 访问                                    |
| `core.getInput`       | 可使用环境变量 `INPUT_{NAME}` 访问                                  |
| `core.getState`       | 可使用环境变量 `STATE_{NAME}` 访问                                  |
| `core.isDebug`        | 可使用环境变量 `RUNNER_DEBUG` 访问                                  |
{%- ifversion actions-job-summaries %}
| `core.summary` | 可使用环境变量 `GITHUB_STEP_SUMMARY` 访问 |
{%- endif %}
| `core.saveState`  | `save-state` | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Used as a shortcut for `::error` and `exit 1` | | `core.setOutput`  | `set-output` | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

## 设置输出参数

设置操作的输出参数。

```{:copy}
::set-output name={name}::{value}
```

（可选）您也可以在操作的元数据文件中声明输出参数。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”。

### 示例：设置输出参数

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

### 示例：设置调试消息

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

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

## 设置通知消息

创建通知消息并将该消息打印到日志。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 示例：设置通知消息

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

### 示例：设置警告消息

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

### 示例：设置错误消息

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

### 示例：对日志行进行分组

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

屏蔽值可阻止在日志中打印字符串或变量。 用空格分隔的每个屏蔽的词均替换为 `*` 字符。 您可以使用环境变量或字符串作为屏蔽的 `value`。 当您屏蔽某个值时，该值将被视为机密，并将在运行器上进行编辑。 例如，屏蔽某个值后，便无法将该值设置为输出。

### 示例：屏蔽字符串

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

### 示例：屏蔽环境变量

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

### 示例：停止和启动工作流程命令

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

## 回显命令输出

启用或禁用工作流程命令的回显。 例如，如果在工作流程中使用 `set-output` 命令，则会设置输出参数，但工作流程运行的日志不会显示命令本身。 如果启用命令回显，则日志将显示该命令，例如 `::set-output name={name}::{value}`。

```{:copy}
::echo::on
::echo::off
```

默认情况下，命令回显处于禁用状态。 但是，如果处理工作流命令时出现任何错误，则会回显该命令。

`add-mask`、`debug`、`warning` 和 `error` 命令不支持回显，因为它们的输出已经回显到日志。

还可以通过使用 `ACTIONS_STEP_DEBUG` 密钥打开步骤调试日志记录来启用命令全局回显。 更多信息请参阅“[启用调试日志记录](/actions/managing-workflow-runs/enabling-debug-logging)”。 相比之下，`echo` 工作流程命令允许您在更精细的级别启用命令回显，而不是为存储库中的每个工作流程启用它。

### 示例：切换命令回显

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

上面的示例将以下行打印到日志中：

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

日志中仅包含第二个 `set-output` 和 `echo` 工作流程命令，因为命令回显仅在运行时启用。 即使它并不总是回显，输出参数在所有情况下都会被设置。

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

## 环境文件

在工作流程执行期间，运行器生成可用于执行某些操作的临时文件。 这些文件的路径通过环境变量显示。 写入这些文件时，您需要使用 UTF-8 编码，以确保正确处理命令。 多个命令可以写入同一个文件，用换行符分隔。

{% powershell %}

{% note %}

**注意：** PowerShell 版本 5.1 及更低版本 (`shell: powershell`) 默认情况下不使用 UTF-8，因此必须指定 UTF-8 编码。 例如：

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core 版本 6 及更高版本 (`shell: pwsh`) 默认使用 UTF-8。 例如：

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

- 使用 PowerShell 版本 6 及更高版本：

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- 使用 PowerShell 版本 5.1 及更低版本：

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

通过定义或更新环境变量并将其写入 `GITHUB_ENV` 环境文件，可以使环境变量用于工作流程作业中的任何后续步骤。 创建或更新环境变量的步骤无法访问新值，但在作业中的所有后续步骤均可访问。 环境变量的名称区分大小写，您可以包含标点符号。 更多信息请参阅“[环境变量](/actions/learn-github-actions/environment-variables)”。

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

{% warning %}

**Warning:** Make sure the delimiter you're using is randomly generated and unique for each run. For more information, see "[Understanding the risk of script injections](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)".

{% endwarning %}

#### 示例

此示例使用 `EOF` 作为分隔符，并将 `JSON_RESPONSE` 环境变量设置为 `curl` 响应的值。

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

{% ifversion actions-job-summaries %}

## 添加作业摘要

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

您可以为每个作业设置一些自定义 Markdown，以便将其显示在工作流程运行的摘要页面上。 可以使用作业摘要来显示和分组唯一内容（如测试结果摘要），以便查看工作流程运行结果的用户无需进入日志即可查看与运行相关的重要信息（如失败）。

作业摘要支持 [{% data variables.product.prodname_dotcom %} 样式的 Markdown](https://github.github.com/gfm/)，您可以将某个步骤的 Markdown 内容添加到 `GITHUB_STEP_SUMMARY` 环境文件中。 `GITHUB_STEP_SUMMARY` 对于作业中的每个步骤都是唯一的。 有关 `GITHUB_STEP_SUMMARY` 引用的每个步骤的文件的详细信息，请参阅“[环境文件](#environment-files)”。

作业完成后，作业中所有步骤的摘要将组合到单个作业摘要中，并显示在工作流程运行摘要页上。 如果多个作业生成摘要，则作业摘要按作业完成时间排序。

### 示例

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Markdown 摘要示例](/assets/images/actions-job-summary-simple-example.png)

### 多行 Markdown 内容

对于多行 Markdown 内容，可以使用 `>>` 连续附加当前步骤的内容。 每个附加操作都会自动添加换行符。

#### 示例

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### 覆盖作业摘要

要清除当前步骤的所有内容，可以使用 `>` 覆盖以前添加的任何内容。

#### 示例

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### 删除作业摘要

要完全删除当前步骤的摘要，可以删除 `GITHUB_STEP_SUMMARY` 引用的文件。

#### 示例

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

步骤完成后，将上传作业摘要，后续步骤无法修改以前上传的 Markdown 内容。 摘要会自动屏蔽可能意外添加的任何机密。 如果作业摘要包含必须删除的敏感信息，则可以删除整个工作流程运行以删除其所有作业摘要。 更多信息请参阅“[删除工作流程运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。

### 步骤分隔和限制

作业摘要在步骤之间分隔，每个步骤的最大大小限制为 1MiB。 在步骤之间执行分隔，以便单个步骤中可能格式错误的 Markdown 无法破坏后续步骤的 Markdown 呈现。 如果为某个步骤添加的内容超过 1MiB，则该步骤的上传将失败，并且会创建错误注释。 作业摘要的上传失败不影响步骤或作业的整体状态。 每个作业最多显示 20 个步骤中的作业摘要。

{% endif %}

## 添加系统路径

为系统 `PATH` 变量预先设置一个目录，并自动使其可用于当前作业中的所有后续操作；当前运行的操作无法访问更新的路径变量。 要查看作业的当前定义路径，您可以在步骤或操作中使用 `echo "$PATH"`。

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

{% bash %}

此示例演示如何将用户 `$HOME/.local/bin` 目录添加到 `PATH`：

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

此示例演示如何将用户 `$env:HOMEPATH/.local/bin` 目录添加到 `PATH`：

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
