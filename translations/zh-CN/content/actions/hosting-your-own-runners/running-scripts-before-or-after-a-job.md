---
title: 在作业之前或之后运行脚本
intro: 脚本可以直接在作业之前或之后在自托管运行器上自动执行。
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067648'
---
{% note %}

注意：此功能目前为 beta 版本，可能会有变动。

{% endnote %}

## 关于作业前脚本和作业后脚本

可在作业运行之前或在作业完成运行之后，在自托管运行器上自动执行脚本。 可使用这些脚本来满足作业需求，例如生成或关闭运行器环境，或清理目录。 还可使用这些脚本来跟踪运行器使用情况的遥测数据。

当运行器上设置了特定环境变量时，自定义脚本会自动触发；环境变量必须包含该脚本的绝对路径。 有关详细信息，请参阅下面的“[触发脚本](#triggering-the-scripts)”。

支持以下脚本语言：

- **Bash**：使用 `bash` 并可以回退到 `sh`。 通过运行 `-e {pathtofile}` 执行。
- **PowerShell**：使用 `pwsh` 并可以回退到 `powershell`。 通过运行 `-command \". '{pathtofile}'\"` 执行。

## 编写脚本

自定义脚本可以使用以下功能：

- **环境变量**：脚本有权访问默认环境变量。 完整的 Webhook 事件有效负载可在 `GITHUB_EVENT_PATH` 中找到。 有关详细信息，请参阅“[环境变量](/actions/learn-github-actions/environment-variables#default-environment-variables)”。
- **工作流命令**：脚本可以使用工作流命令。 有关详细信息，请参阅[“{% data variables.product.prodname_actions %} 的工作流命令”](/actions/using-workflows/workflow-commands-for-github-actions)，`save-state` 和 `set-output` 除外（这些脚本不支持）。 脚本还可以使用环境文件。 有关详细信息，请参阅“[环境文件](/actions/using-workflows/workflow-commands-for-github-actions#environment-files)”。

{% note %}

注意：避免使用脚本将敏感信息输出到控制台，因为拥有存储库读取访问权限的任何人都可以在 UI 日志中查看输出。

{% endnote %}

### 处理退出代码

对于作业前脚本，退出代码 `0` 指示脚本成功完成并且作业随后继续运行。 如果存在任何其他退出代码，该作业将不会运行，并标记为失败。 要查看作业前脚本的结果，请检查日志中的 `Set up runner` 条目。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。

这些脚本不支持使用 [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) 设置。

## 触发脚本

自定义脚本必须位于运行器上，但不应存储在 `actions-runner` 应用程序目录中。 脚本在运行运行器服务的服务帐户的安全性上下文中执行。

{% note %}

注意：触发的脚本是同步处理的，因此它们会在运行时阻止作业执行。

{% endnote %}

当运行器具有以下包含脚本绝对路径的环境变量时，脚本会自动执行：
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`：此环境变量中定义的脚本在作业分配给运行器之后且作业开始运行之前触发。
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`：此环境变量中定义的脚本在作业完成处理后触发。

要设置这些环境变量，可将它们添加到操作系统中，或将它们添加到自托管运行器应用程序目录中名为 `.env` 的文件中。 例如，以下 `.env` 条目将使运行器在每个作业运行之前自动运行一个名为 `cleanup_script.sh` 的脚本：

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## 故障排除


### 无超时设置

目前没有可供 `ACTIONS_RUNNER_HOOK_JOB_STARTED` 或 `ACTIONS_RUNNER_HOOK_JOB_COMPLETED` 执行的脚本使用的超时设置。 因此，可以考虑向脚本添加超时处理。

### 查看工作流运行日志

要确认脚本是否正在执行，可查看该作业的日志。 脚本将在 `Set up runner` 或 `Complete runner` 的单独步骤中列出，具体取决于触发脚本的环境变量。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。
