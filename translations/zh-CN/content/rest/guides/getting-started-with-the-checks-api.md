---
title: 检查 API 入门指南
intro: '检查运行 API 使您能够构建 GitHub 应用程序，以针对仓库中的代码更改运行强大的检查。 您可以创建应用程序以执行持续集成 、代码分析或代码扫描服务，并提供有关提交的详细反馈。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 概览

GitHub 应用程序可以报告丰富的状态信息、提供详细的代码行注释以及重新运行测试，而不是提供二进制的通过/失败构建状态。 Checks API 功能专用于您的 GitHub 应用程序。

关于如何将检查 API 用于 {% data variables.product.prodname_github_app %} 的示例，请参阅“[使用检查 API 创建 CI 测试](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)”。

### 关于检查套件

当有人向仓库推送代码时，GitHub 会为最新的提交创建一个检查套件。 检查套件是单个 GitHub 应用程序为特定提交而创建的[检查运行](/rest/reference/checks#check-runs)的集合。 检查套件汇总了套件所含检查运行的状态和结论。

![检查套件工作流程](/assets/images/check_suites.png)

检查套件在其 `conclusion` 中报告优先级最高的检查运行 `conclusion` 。 例如，如果三个检查运行的结论分别为 `timed_out`、`success` 和 `neutral`，则检查套件的结论将为 `timed_out`。

默认情况下，当代码被推送到仓库时，GitHub 会自动创建一个检查套件。 此默认流程会将 `check_suite` 事件（使用 `requested` 操作）发送到具有 `checks:write` 权限的所有 GitHub 应用程序。 当您的 GitHub 应用程序收到 `check_suite` 事件时，它可以为最新的提交创建新的检查运行。 GitHub 根据检查运行的仓库和 SHA，自动将新的检查运行添加到适当的[检查套件](/rest/reference/checks#check-suites)中。

如果您不想使用默认的自动流程，您可以控制何时创建检查套件。 要更改用于创建检查套件的默认设置，请使用[更新检查套件的仓库首选项](/rest/reference/checks#update-repository-preferences-for-check-suites)端点。 对自动流程设置的所有更改都被记录在仓库的审核日志中。 如果您禁用了自动流程，您可以使用[创建检查套件](/rest/reference/checks#create-a-check-suite)端点来创建一个检查套件。 您应该继续使用[创建检查运行](/rest/reference/checks#create-a-check-run)端点来提供对提交的反馈。

{% data reusables.apps.checks-availability %}

要使用检查套件 API，GitHub 应用程序必须具有 `checks:write` 权限并且可以订阅 [check_suite](/webhooks/event-payloads/#check_suite) web 挂钩。

{% data reusables.shortdesc.authenticating_github_app %}

### 关于检查运行

检查运行是检查套件中的单个测试。 每个运行都包含状态和结论。

![检查运行工作流程](/assets/images/check_runs.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
如果检查运行处于未完成状态超过 14 天，则检查运行的 `conclusion` 将变成 `stale`，并且通过
{% octicon "issue-reopened" aria-label="The issue-reopened icon" %} 在 {% data variables.product.prodname_dotcom %} 上显示为 stale（过时）。 只有 {% data variables.product.prodname_dotcom %} 可以将检查运行标记为 `stale`。 有关检查运行之可能结论的更多信息，请参阅 [`conclusion` 参数](/rest/reference/checks#create-a-check-run--parameters)。
{% endif %}

一旦收到 [`check_suite`](/webhooks/event-payloads/#check_suite) web 挂钩，您即可创建检查运行，即使检查尚未完成。 您可以在检查运行完成时使用值 `queued`、`in_progress` 或 `completed` 来更新其 `status`， 并且可以在更多详细信息可用时更新 `output`。 检查运行可以包含时间戳、指向外部站点上更多详细信息的链接、特定代码行的详细注释以及有关所执行分析的信息。

![检查运行注释](/assets/images/check_run_annotations.png)

还可以在 GitHub UI 中手动重新运行检查。 更多信息请参阅“[关于状态检查](/articles/about-status-checks#checks)”。 发生这种情况时，创建检查运行的 GitHub 应用程序将收到请求新检查运行的 [`check_run`](/webhooks/event-payloads/#check_run) web 挂钩。 如果您创建检查运行时没有创建检查套件，GitHub 将自动为您创建检查套件。

{% data reusables.apps.checks-availability %}

要使用检查运行 API，GitHub 应用程序必须具有 `checks:write` 权限并且可以订阅 [ccheck_run](/webhooks/event-payloads#check_run) web 挂钩。

### 检查运行和请求的操作

在设置带有请求操作（不要与 {% data variables.product.prodname_actions %} 混淆）的检查运行时，您可以在 {% data variables.product.prodname_dotcom %} 上的拉取请求视图中显示一个按钮，以允许用户请求您的 {% data variables.product.prodname_github_app %} 执行额外任务。

例如，代码分析应用程序可以使用请求的操作在拉取请求中显示一个按钮，以自动修复检测到的语法错误。

要创建可从您的程序请求额外操作的按钮，请在[创建检查运行](/rest/reference/checks/#create-a-check-run)时使用

`actions` 对象。 例如，下面的 `actions` 对象在拉取请求中显示一个按钮，标签为“Fix this（修复此问题）”。 该按钮在检查运行完成后显示。 



   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```
</p> 

![检查运行请求操作按钮](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

当用户单击该按钮时，{% data variables.product.prodname_dotcom %} 会将 [`check_run.requested_action` web 挂钩](/webhooks/event-payloads/#check_run)发送到您的应用程序。 当您的应用程序收到 `check_run.requested_action` web 挂钩事件时，它可以在 web 挂钩有效负载中查找 `requested_action.identifier` 键，以确定单击了哪个按钮，并执行请求的任务。

关于如何使用检查 API 设置请求操作的详细示例，请参阅“[使用检查 API 创建 CI 测试](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)”。
