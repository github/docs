---
title: 为仓库设置代码扫描
shortTitle: 设置代码扫描
intro: '您可以通过添加工作流程到仓库来设置 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### 设置 {% data variables.product.prodname_code_scanning %} 的选项

在仓库级别决定如何生成 {% data variables.product.prodname_code_scanning %} 警报，以及使用哪些工具。 {% data variables.product.product_name %} 对 {% data variables.product.prodname_codeql %} 分析提供完全集成的支持，还支持使用第三方工具进行分析。 更多信息请参阅“[关于 {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)”。

{% data reusables.code-scanning.enabling-options %}

### 使用操作设置 {% data variables.product.prodname_code_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在“{% data variables.product.prodname_code_scanning_capc %} 警报”右侧，单击**设置 {% data variables.product.prodname_code_scanning %}**。 !["Set up code scanning" button to the right of "Code scanning" in the Security Overview](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Under "Get started with code scanning", click **Set up this workflow** on the {% data variables.product.prodname_codeql_workflow %} or on a third-party workflow. !["Set up this workflow" button under "Get started with code scanning" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Optionally, to customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."

   一般来说，您可以提交 {% data variables.product.prodname_codeql_workflow %} 而不对其做任何更改。 但是，许多第三方工作流程需要额外的配置，因此在提交之前请阅读工作流程中的注释。

   更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)。”
6. 使用 **Start commit（开始提交）**下拉菜单，并键入提交消息。 ![开始提交](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 选择您是想直接提交到默认分支，还是创建新分支并启动拉取请求。 ![选择提交位置](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. 单击 **Commit new file（提交新文件）**或 **Propose new file（提议新文件）**。

在默认 {% data variables.product.prodname_codeql_workflow %} 中，{% data variables.product.prodname_code_scanning %} 配置为在每次将更改推送到默认分支或任何受保护分支或者对默认分支提出拉取请求时分析代码。 因此，{% data variables.product.prodname_code_scanning %} 将立即开始。

### 批量设置 {% data variables.product.prodname_code_scanning %}
您可以使用脚本在多个仓库中一次设置 {% data variables.product.prodname_code_scanning %}。 有关提出拉取请求以向多个仓库添加 {% data variables.product.prodname_actions %} 工作流程的脚本示例，请参阅 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 仓库。

### You decide how you generate {% data variables.product.prodname_code_scanning %} alerts, and which tools you use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see "[About {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

为仓库设置 {% data variables.product.prodname_code_scanning %} 后，您可以关注操作运行时的输出。

{% data reusables.repositories.actions-tab %}

  You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)." 条目的文本是提交消息的标题。

  ![After you commit the workflow file or create a pull request, {% data variables.product.prodname_code_scanning %} will analyze your code according to the frequency you specified in your workflow file. If you created a pull request, {% data variables.product.prodname_code_scanning %} will only analyze the code on the pull request's topic branch until you merge the pull request into the default branch of the repository.](/assets/images/help/repository/code-scanning-actions-list.png)

1. 单击 {% data variables.product.prodname_code_scanning %} 工作流程的项目。

1. 单击左侧的作业名称。 例如 **Analyze (LANGUAGE)**。

  ![{% data variables.product.prodname_code_scanning %} 工作流程的日志输出](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 查看此工作流运行时操作的日志记录输出。

1. 在所有作业完成后，您可以查看已识别的任何 {% data variables.product.prodname_code_scanning %} 警报的详细信息。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

{% note %}

**注意：** 如果您提出拉取请求以将 {% data variables.product.prodname_code_scanning %} 工作流程添加到仓库，则在合并拉取请求之前，来自该拉取请求的警报不会直接显示在 {% data variables.product.prodname_code_scanning_capc %} 页面上。 如果发现任何警报，您可以在合并拉取请求之前查看这些警报，方法是在 {% data variables.product.prodname_code_scanning_capc %} 页面上的横幅中点击**发现的 _n_ 条警报**链接。

  ![点击"发现的 n 条警报"链接](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### 了解拉取请求检查

设置在拉取请求上运行的每个 {% data variables.product.prodname_code_scanning %} 工作流程始终有至少两个条目列在拉取请求的检查部分中。 工作流程中每个分析作业有一个条目，最后还有一个对应于分析结果的条目。

{% data variables.product.prodname_code_scanning %} 分析检查的名称采用形式："TOOL NAME / JOB NAME (TRIGGER)"。 例如，对于 {% data variables.product.prodname_codeql %}，C++ 代码的分析有条目 "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)"。 您可以单击 {% data variables.product.prodname_code_scanning %} 分析条目上的**Details（详细信息）**来查看日志记录数据。 这允许您在分析作业失败时调试问题。 例如，对于编译的语言的 {% data variables.product.prodname_code_scanning %} 分析，如果操作无法生成代码，则可能会发生这种情况。

  ![After a scan completes, you can view alerts from a completed scan. For more information, see "<a href="/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning">Managing alerts from {% data variables.product.prodname_code_scanning %}</a>."](/assets/images/help/repository/code-scanning-pr-checks.png)

当 {% data variables.product.prodname_code_scanning %} 作业完成后， {% data variables.product.prodname_dotcom %} 检查拉取请求是否添加了任何警报，并将“{% data variables.product.prodname_code_scanning_capc %} 结果/工具名称”条目添加到检查列表中。 在执行至少一次 {% data variables.product.prodname_code_scanning %} 后，您可以单击 **Details（详细信息）**查看分析结果。 如果使用拉取请求将 {% data variables.product.prodname_code_scanning %} 添加到存储库，则当您单击“{% data variables.product.prodname_code_scanning_capc %} 结果/工具名称”检查中的 **Details（详细信息）**时，您最初会看到“Missing analysis（缺少分析）”的消息。

  ![缺少提交消息的分析](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### “缺少分析”消息的原因

在 {% data variables.product.prodname_code_scanning %} 分析拉取请求中的代码后，它需要将主题分支（用于创建拉取请求的分支）的分析与基本分支（要合并拉取请求的分支）的分析进行比较。 这允许 {% data variables.product.prodname_code_scanning %} 计算哪些警报是拉取请求新近引入的，哪些是基础分支中已经存在的，以及是否有任何现有的警报通过拉取请求中的更改来修复。 最初，如果使用拉取请求将 {% data variables.product.prodname_code_scanning %} 添加到仓库，则尚未分析基础分支，因此无法计算这些详细信息。 在这种情况下，当您从拉取请求的结果检查中点进时，将看到“Missing analysis for base commit SHA-HASH（缺少基础提交 SHA-HASH 的分析）”消息。

在其他情况下，可能没有分析对拉取请求的基础分支的最新提交。 这些包括：

* 已针对默认分支以外的分支提出拉取请求，并且尚未分析此分支。

  要检查是否扫描了分支，请转到 {% data variables.product.prodname_code_scanning_capc %} 页面，单击 **Branch<（分支）**下拉菜单并选择相关分支。

  ![从 Branch（分支）下拉菜单中选择一个分支](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-dropdown.png)

  {% if currentVersion == "free-pro-team@latest" %}Using actions to run {% data variables.product.prodname_code_scanning %} will use minutes. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."{% endif %}

* 目前正在分析拉取请求的基础分支上的最新提交，分析尚未提供。

  等待几分钟，然后将更改推送到拉取请求以重新触发 {% data variables.product.prodname_code_scanning %}。

* 在分析基础分支上的最新提交时发生了错误，且该提交的分析不可用。

  将一个微小的更改合并到基础分支以触发此最新提交的 {% data variables.product.prodname_code_scanning %}，然后将更改推送到拉取请求以重新触发 {% data variables.product.prodname_code_scanning %}。

### 后续步骤

设置 {% data variables.product.prodname_code_scanning %} 并允许其操作完成后，您可以：

- 查看为此仓库生成的所有 {% data variables.product.prodname_code_scanning %} 警报。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。
- 查看在设置 {% data variables.product.prodname_code_scanning %} 后提交的拉取请求生成的任何警报。 更多信息请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。
- 为已完成的运行设置通知。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”。
- 调查初始设置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 时发生的任何问题。 更多信息请参阅“[{% data variables.product.prodname_codeql %} 工作流程疑难解答](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)”。
- 自定义 {% data variables.product.prodname_code_scanning %} 如何扫描您的仓库中的代码。 更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)。”
