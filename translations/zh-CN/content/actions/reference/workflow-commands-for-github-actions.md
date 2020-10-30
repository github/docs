---
title: GitHub 操作的工作流程命令
shortTitle: 工作流程命令
intro: 您可以在工作流程或操作代码中运行 shell 命令时使用工作流程命令。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于工作流程命令

操作可以与运行器机器进行通信，以设置环境变量，其他操作使用的输出值，将调试消息添加到输出日志和其他任务。

工作流程命令使用特定格式的 `echo` 命令。

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**注意：**工作流程命令和参数名称不区分大小写。

{% endnote %}

{% warning %}

**警告：**如果您使用命令提示符，则使用工作流程命令时忽略双引号字符 (`"`)。

{% endwarning %}

### 使用工作流程命令访问工具包函数

[actions/toolkit](https://github.com/actions/toolkit) 包括一些可以作为工作流程命令执行的功能。 使用 `::` 语法来运行您的 YAML 文件中的工作流程命令；然后，通过 `stdout` 将这些命令发送给运行器。 例如，不使用如下所示的代码来设置环境变量：

```javascript
core.exportVariable('SELECTED_COLOR', 'green');
```

您可以在工作流程中使用 `set-env` 命令来设置相同的值：

``` yaml
      - name: Set selected color
        run: echo '::set-env name=SELECTED_COLOR::green'
      - name: Get color
        run: echo 'The selected color is' $SELECTED_COLOR
```

下表显示了在工作流程中可用的工具包功能：

| 工具包函数                 | 等效工作流程命令                      |
| --------------------- | ----------------------------- |
| `core.addPath`        | `add-path`                    |
| `core.debug`          | `debug`                       |
| `core.error`          | `error`                       |
| `core.endGroup`       | `endgroup`                    |
| `core.exportVariable` | `set-env`                     |
| `core.getInput`       | 可使用环境变量 `INPUT_{NAME}` 访问     |
| `core.getState`       | 可使用环境变量 `STATE_{NAME}` 访问     |
| `core.isDebug`        | 可使用环境变量 `RUNNER_DEBUG` 访问     |
| `core.saveState`      | `save-state`                  |
| `core.setFailed`      | 用作 `::error` 和 `exit 1` 的快捷方式 |
| `core.setOutput`      | `set-output`                  |
| `core.setSecret`      | `add-mask`                    |
| `core.startGroup`     | `组`                           |
| `core.warning`        | `warning file`                |

### 设置环境变量

`::set-env name={name}::{value}`

为作业中接下来运行的任何操作创建或更新环境变量。 创建或更新环境变量的操作无法访问新值。 但在作业中的所有后续操作均可访问。 环境变量区分大小写，并且可以包含标点符号。

#### 示例

``` bash
echo "::set-env name=action_state::yellow"
```

### 设置输出参数

`::set-output name={name}::{value}`

设置操作的输出参数。

（可选）您也可以在操作的元数据文件中声明输出参数。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs)”。

#### 示例

``` bash
echo "::set-output name=action_fruit::strawberry"
```

### 添加系统路径

`::add-path::{path}`

为当前作业中的所有后续操作将目录添加到系统 `PATH` 变量之前。 当前运行的操作无法访问新路径变量。

#### 示例

``` bash
echo "::add-path::/path/to/dir"
```

### 设置调试消息

`::debug::{message}`

将调试消息打印到日志。 您可以创建名为 `ACTIONS_STEP_DEBUG`、值为 `true` 的密码，才能在日志中查看通过此命令设置的调试消息。 更多信息请参阅“[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run#enabling-debug-logging)”。

#### 示例

``` bash
echo "::debug::Set the Octocat variable"
```

### 设置警告消息

`::warning file={name},line={line},col={col}::{message}`

创建警告消息并将该消息打印到日志。 您可以选择提供警告出现位置的文件名 (`file`)、行号 (`line`) 和列号 (`col`)。

#### 示例

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### 设置错误消息

`::error file={name},line={line},col={col}::{message}`

创建错误消息并将该消息打印到日志。 您可以选择提供警告出现位置的文件名 (`file`)、行号 (`line`) 和列号 (`col`)。

#### 示例

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### 在日志中屏蔽值

`::add-mask::{value}`

屏蔽值可阻止在日志中打印字符串或变量。 用空格分隔的每个屏蔽的词均替换为 `*` 字符。 您可以使用环境变量或字符串作为屏蔽的 `value`。

#### 屏蔽字符串的示例

当您在日志中打印 `"Mona The Octocat"` 时，您将看到 `"***"`。

```bash
echo "::add-mask::Mona The Octocat"
```

#### 屏蔽环境变量的示例

当您在日志中打印变量 `MY_NAME` 或值 `"Mona The Octocat"` 时，您将看到 `"***"` 而不是 `"Mona The Octocat"`。

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### 停止和启动工作流程命令

`::stop-commands::{endtoken}`

停止处理任何工作流程命令。 此特殊命令可让您记录任何内容而不会意外运行工作流程命令。 例如，您可以停止记录以输出带有注释的整个脚本。

#### 停止工作流程命令的示例

``` bash
echo "::stop-commands::pause-logging"
```

要启动工作流程命令，请传递用于停止工作流程命令的令牌。

`::{endtoken}::`

#### 启动工作流程命令的示例

``` bash
echo "::pause-logging::"
```

### 将值发送到 pre 和 post 操作

您可以使用 `save-state` 命令来创建环境变量，以便与工作流程的 `pre:` 或 `post:` 操作共享。 例如，您可以使用 `pre:` 操作创建文件，将该文件位置传给 `main:` 操作，然后使用 `post:` 操作删除文件。 或者，您可以使用 `main:` 操作创建文件，将该文件位置传给 `post:` 操作，然后使用 `post:` 操作删除文件。

如果您有多个 `pre:` 或 `post:` 操作，则只能访问使用了 `save-state` 的操作中的已保存值。 有关 `post:` 操作的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions#post)”。

`save-state` 命令只能在操作内运行，并且对 YAML 文件不可用。 保存的值将作为环境值存储，带 `STATE_` 前缀。

此示例使用 JavaScript 运行 `save-state` 命令。 由此生成的环境变量被命名为 `STATE_processID`，带 `12345` 的值：

``` javascript
console.log('::save-state name=processID::12345')
```

然后，`STATE_processID` 变量将仅可被用于 `main` 操作下运行的清理脚本。 此示例在 `main` 中运行，并使用 JavaScript 显示分配给 `STATE_processID` 环境变量的值：

``` javascript
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```
