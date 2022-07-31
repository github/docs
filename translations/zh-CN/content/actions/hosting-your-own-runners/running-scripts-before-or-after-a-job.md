---
title: 在作业之前或之后运行脚本
intro: 脚本可以直接在作业之前或之后在自托管运行器上自动执行。
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: 在作业之前或之后运行脚本
---

{% note %}

**注意**：此功能目前在测试中，可能会更改。

{% endnote %}

## 关于作业前和作业后脚本

您可以在作业运行之前或作业完成运行后自动在自托管运行器上执行脚本。 您可以使用这些脚本来支持作业的要求，例如构建或拆除运行器环境，或者清理目录。 还可以使用这些脚本来跟踪有关运行器使用情况的遥测数据。

当在运行器上设置特定环境变量时，将自动触发自定义脚本；环境变量必须包含脚本的绝对路径。 更多信息请参阅下面的“[触发脚本](#triggering-the-scripts)”。

支持以下脚本语言：

- **Bash**：使用 `bash` ，可以回退到 `sh`。 通过运行 `-e {pathtofile}` 执行。
- **PowerShell**：使用 `pwsh` ，可以回退到 `powershell`。 通过运行 `-command \". '{pathtofile}'\"` 执行。

## 编写脚本

您的自定义脚本可以使用以下功能：

- **环境变量**：脚本可以访问默认环境变量。 完整的 web 挂钩事件有效负载可以在 `GITHUB_EVENT_PATH` 中找到。 更多信息请参阅“[环境变量](/actions/learn-github-actions/environment-variables#default-environment-variables)”。
- **工作流程命令**：脚本可以使用工作流程命令。 更多信息请参阅[“ {% data variables.product.prodname_actions %} 的工作流程命令”](/actions/using-workflows/workflow-commands-for-github-actions)，但 `save-state` 和 `set-output` 除外，这些脚本不支持这些命令。 脚本还可以使用环境文件。 更多信息请参阅“[环境文件](/actions/using-workflows/workflow-commands-for-github-actions#environment-files)”。

{% note %}

**注意**：避免使用脚本将敏感信息输出到控制台，因为对存储库具有读取访问权限的任何人都可能能够在 UI 日志中看到输出。

{% endnote %}

### 处理退出代码

对于作业前脚本，退出代码 `0` 表示脚本已成功完成，然后作业将继续运行。 如果存在任何其他退出代码，则作业不会运行，并标记为失败。 要查看作业前脚本的结果，请检查日志中是否有 `Set up runner` 条目。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。

这些脚本不支持使用 [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) 设置。

## 触发脚本

自定义脚本必须位于运行器上，但不应存储在 `actions-runner` 应用程序目录中。 这些脚本在执行运行器服务的服务帐户的安全上下文中执行。

{% note %}

**注意**：触发的脚本是同步处理的，因此它们将在运行时阻止作业执行。

{% endnote %}

当运行器具有以下环境变量（包含脚本的绝对路径）时，将自动执行脚本：
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`：此环境变量中定义的脚本在作业已分配给运行器时触发，但在作业开始运行之前。
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`：此环境变量中定义的脚本在作业完成处理后触发。

要设置这些环境变量，可以将它们添加到操作系统，也可以将它们添加到自托管运行器应用程序目录中名为 `.env` 的文件中。 例如，以下 `.env` 条目将使运行器在每个作业运行之前自动运行名为 `cleanup_script.sh` 的脚本：

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## 疑难解答


### 无超时设置

当前没有可用于由 `ACTIONS_RUNNER_HOOK_JOB_STARTED` 或 `ACTIONS_RUNNER_HOOK_JOB_COMPLETED` 执行的脚本的超时设置。 因此，您可以考虑向脚本添加超时处理。

### 查看工作流程运行日志

要确认脚本是否正在执行，可以查看该作业的日志。 这些脚本将在`设置运行器`或`完整运行器`的单独步骤中列出，具体取决于触发脚本的环境变量。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。
