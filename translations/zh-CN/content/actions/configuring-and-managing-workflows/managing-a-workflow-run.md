---
title: 管理工作流程运行
intro: 您可以查看工作流程中每个步骤的状态和结果，取消待定的工作流程，查看可计费作业执行分钟数，调试并重新运行失败的工作流程，搜索并下载日志，以及下载构件。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于工作流程管理

您可以从工作流程运行页面查看工作流程运行是在进行中，还是已完成。 如果运行正在进行中，您可以取消运行。 您必须登录到 {% data variables.product.prodname_dotcom %} 帐户才能查看工作流程运行信息，包括公共仓库。 更多信息请参阅“[GitHub 上的访问权限](/articles/access-permissions-on-github)”。

如果运行已完成，则可查看运行结果是成功、失败、已取消还是中性。 如果运行失败，您可以查看并搜索构建日志，来诊断失败原因并重新运行工作流程。 您也可以查看可计费作业执行分钟数，或下载日志和创建构件。

 ![注释的工作流运行映像](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %} 使用 Checks API 来输出工作流程的状态、结果和日志。 {% data variables.product.prodname_dotcom %} 对每个工作流程创建新检查套件。 检查套件包含检查工作流程中每项作业的运行，而每项作业包含步骤。 {% data variables.product.prodname_actions %} 作为工作流程中的一个步骤运行。 有关检查 API 的详细信息，请参阅“[检查](/v3/checks/)”。

{% data reusables.github-actions.invalid-workflow-files %}

### 查看工作流程历史记录

您可以查看工作流程运行中的每项作业以及作业中的每个步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)”。 {% data reusables.repositories.permissions-statement-read %}

除了工作流程文件中配置的步骤外，每个作业还包括用于启动和完成作业执行的其他任务。 这些步骤工作流程运行中记录为"设置作业"和"完成作业"。

对于在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的作业，“设置作业”记录运行器虚拟环境的详细信息。 并包含一个链接，可链接到运行器机器上的预安装工具列表。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. （可选）如果运行失败，要重新运行工作流程，请使用工作流程右上角的 **Re-run checks（重新运行检查）**下拉菜单，然后选择 **Re-run all checks（重新运行所有检查）**。 ![重新运行检查下拉菜单](/assets/images/help/repository/rerun-checks-drop-down.png)

### 取消工作流程运行

当您取消工作流程运行时，{% data variables.product.prodname_dotcom %} 会取消属于该工作流程的所有作业和步骤。 {% data reusables.repositories.permissions-statement-write %}

取消工作流程运行时，您可能正在运行使用与工作流程运行相关的资源的其他软件。 为了帮助您释放与工作流程运行相关的资源，它可能有助于了解 {% data variables.product.prodname_dotcom %} 为取消工作流程运行而执行的步骤。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 取消工作流程运行所执行的步骤](#steps-github-takes-to-cancel-a-workflow-run)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在工作流程右上角单击 **Cancel check suite（取消检查套件）**。 ![取消检查套件按钮](/assets/images/help/repository/cancel-check-suite.png)
1. 单击 **Cancel check suite（取消检查套件）**后。

#### {% data variables.product.prodname_dotcom %} 取消工作流程运行所执行的步骤

1. 要取消工作流程运行，服务器将重新评估所有正在运行的作业的 `if` 条件。 如果条件评估为 `true`，作业将不会取消。 例如，条件 `if: always()` 将评估为 true，并且作业继续运行。 没有条件时，则等同于条件 `if: success()`，仅在上一步已成功完成时才会运行。
2. 对于需要取消的作业，服务器向包含需取消作业的所有运行器机器发送取消消息。
3. 对于继续运行的作业，服务器将对未完成的步骤重新评估 `if` 条件。 如果条件评估为 `true`，则步骤继续运行。
4. 对于需要取消的步骤，运行器机器发送 `SIGINT/Ctrl-C` 到该步骤的输入进程（`node` 用于 javascript 操作，`docker` 用于容器操作，`bash/cmd/pwd` 则在步骤中使用 `run` 时发送）。 如果进程未在 7500 毫秒内退出，运行器将发送 `SIGTERM/Ctrl-Break` 到此进程，然后等待 2500 毫秒让进程退出。 如果该进程仍在运行，运行器会停止进程树。
5. 在 5 分钟取消超时期后，服务器将强制终止未完成运行或无法完成取消进程的所有作业和步骤。

### 删除工作流程运行

您可以删除已完成或超过 2 周的工作流程运行。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. 要删除工作流程运行，请使用 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单并选择 **Delete workflow run（删除工作流程运行）**。

    ![删除工作流程运行](/assets/images/help/settings/workflow-delete-run.png)
1. 查看确认提示并单击 **Yes, permanently delete this workflow run（是，永久删除此工作流程运行）**。

    ![删除工作流程运行确认](/assets/images/help/settings/workflow-delete-run-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}

### 查看可计费作业执行分钟数

您可以查看作业的执行时间，包括某个作业累积的可计费分钟数。

仅为在私有仓库上运行，使用 {% data variables.product.prodname_dotcom %}- 托管的运行器的作业显示可计费作业执行分钟数。 如果在公共仓库中使用 {% data variables.product.prodname_actions %}，或在自托管的运行器中运行作业时，将没有可计费分钟数。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在作业摘要下，单击 **Run and billable time details（运行和可计费时间详细信息）**。 ![运行和可计费时间详细信息链接](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注意：**显示的可计费时间不包括任何四舍五入或分钟乘数。 要查看您的 {% data variables.product.prodname_actions %} 总使用情况，包括四舍五入和分钟乘法，请参阅"[查看您的 {% data variables.product.prodname_actions %} 使用情况](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)。"

   {% endnote %}

{% endif %}

### 查看日志以诊断故障

如果工作流程运行失败，您可以查看是哪个步骤导致了失败，然后审查失败步骤的创建日志进行故障排除。 您可以查看每个步骤运行的时长。 也可以将永久链接复制到日志文件中的特定行，与您的团队分享。 {% data reusables.repositories.permissions-statement-read %}

{% data variables.product.product_name %} 会将整个创建日志和构件存储 90 天。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. 要展开失败步骤的日志，请单击该步骤。 ![失败的步骤名称](/assets/images/help/repository/failed-check-step.png)
7. （可选）要获取指向日志中特定行的链接，请单击该步骤的行号。 您可以从 web 浏览器的地址栏中复制链接。 ![复制链接的按钮](/assets/images/help/repository/copy-link-button.png)

### 搜索日志

您可以搜索特定步骤的创建日志。 在搜索日志时，只有展开的步骤会包含在结果中。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. 要展开想包含在搜索中的每个步骤，请单击该步骤。 ![步骤名称](/assets/images/help/repository/failed-check-step.png)
7. 在日志输出的右上角，在 **Search logs（搜索日志）**搜索框中输入搜索查询。 ![搜索日志的搜索框](/assets/images/help/repository/search-log-box.png)

### 下载日志

您可以从工作流程运行中下载日志文件。 您也可以下载工作流程的构件。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. 要下载日志，请使用 **Download logs（下载日志）**下拉菜单，然后选择要下载的日志。 ![下载日志下拉菜单](/assets/images/help/repository/download-logs-drop-down.png)

### 删除日志

您可以从工作流程运行中删除日志文件。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. 要删除日志文件，单击 **Delete all logs（删除所有日志）**按钮并审查确认提示。 ![删除所有日志](/assets/images/help/repository/delete-all-logs.png) 删除日志后，**Delete all logs（删除所有日志）**按钮将被删除，以表明工作流程运行中未剩下任何日志文件。

### 启用调试日志

如果工作流程日志没有提供足够的详细信息来诊断工作流程、作业或步骤未按预期工作的原因，您可以启用额外的调试日志。

这些额外的日志将通过在包含工作流程的仓库中设置密码来启用，因此将应用相同的权限要求：

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

有关设置密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

#### 启用运行程序诊断日志

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. 两个额外的日志文件被添加到日志存档中：

* 运行程序进程日志，其中包含关于如何协调和设置运行程序执行作业的信息。
* 工作程序进程日志，用于记录作业执行情况。

1. 要启用运行程序诊断日志，请在包含工作流程的仓库中设置以下密码：将 `ACTIONS_RUNNER_DEBUG` 设置为 `true`。

1. 要下载运行程序诊断日志，请下载工作流程运行情况的日志存档。 运行程序诊断日志包含在 `runner-diagnostic-logs` 文件夹中。 关于下载日志的更多信息，请参阅“[下载日志](#downloading-logs)”。

#### 启用步骤调试日志

步骤调试日志增加了作业执行期间和执行之后的作业日志的详细程度。

1. 要启用步骤调试日志，必须在包含工作流程的仓库中设置以下密码：将 `ACTIONS_STEP_DEBUG` 设置为 `true`。

1. 设置密码后，步骤日志中会显示更多调试事件。 更多信息请参阅[“查看日志以诊断故障”](#viewing-logs-to-diagnose-failures)。


### 延伸阅读

- “[关于 {% data variables.product.prodname_actions %}](/articles/about-github-actions)”
- "[配置工作流程](/articles/configuring-a-workflow)"
- "[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions)"
- "[触发工作流程的事件](/articles/events-that-trigger-workflows)"
- "[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
