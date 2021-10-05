---
title: 查看代码扫描日志
intro: '您可以在 {% data variables.product.product_location %} 中查看 {% data variables.product.prodname_code_scanning %} 分析期间生成的输出。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
topics:
  - Security
shortTitle: 查看代码扫描日志
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## 关于第三方 {% data variables.product.prodname_code_scanning %} 设置

您可以使用各种工具在仓库中设置 {% data variables.product.prodname_code_scanning %} 。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)”。

{% ifversion fpt or ghes > 3.1 %}
您可用的日志和诊断信息取决于您在 {% data variables.product.prodname_code_scanning %} 中使用的方法。 您可以使用警报列表中的 **Tool（工具）**下拉菜单，检查仓库的 **Security（安全）**选项卡中使用的 {% data variables.product.prodname_code_scanning %} 类型。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

## 关于分析和诊断信息

您可以使用 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_codeql %} 分析查看 {% data variables.product.prodname_code_scanning %} 运行的分析和诊断信息。

在警报列表顶部的标题中显示最近分析的**分析**信息。 更多信息请参阅“[管理仓库的代码扫描警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

**诊断**信息显示在行动工作流日志中，包含汇总表和提取器诊断。 有关访问 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_code_scanning %} 日志的信息，请参阅下面的“[查看 {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning) 的日志输出”。

如果您在 {% data variables.product.prodname_dotcom %} 外部使用 {% data variables.product.prodname_codeql_cli %} ，您将在数据库分析期间生成的输出中看到诊断信息。 此信息也包含在您随 {% data variables.product.prodname_code_scanning %} 结果上传到 {% data variables.product.prodname_dotcom %} 的 SARIF 结果文件中。

有关 {% data variables.product.prodname_codeql_cli %} 的信息，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)”。

### 关于摘要指标

{% data reusables.code-scanning.summary-metrics %}

### 关于 {% data variables.product.prodname_codeql %} 源代码提取诊断信息

{% data reusables.code-scanning.extractor-diagnostics %}

{% endif %}
## You decide how you generate {% data variables.product.prodname_code_scanning %} alerts, and which tools you use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see "[About {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

本节适用于使用 {% data variables.product.prodname_code_scanning %} 的 {% data variables.product.prodname_actions %} 运行（{% data variables.product.prodname_codeql %} 或第三方）。

为仓库设置 {% data variables.product.prodname_code_scanning %} 后，您可以关注操作运行时的输出。

{% data reusables.repositories.actions-tab %}

  You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)." 条目的文本是提交消息的标题。

  ![After you commit the workflow file or create a pull request, {% data variables.product.prodname_code_scanning %} will analyze your code according to the frequency you specified in your workflow file. If you created a pull request, {% data variables.product.prodname_code_scanning %} will only analyze the code on the pull request's topic branch until you merge the pull request into the default branch of the repository.](/assets/images/help/repository/code-scanning-actions-list.png)

1. 单击 {% data variables.product.prodname_code_scanning %} 工作流程的项目。

2. 单击左侧的作业名称。 例如 **Analyze (LANGUAGE)**。

  ![{% data variables.product.prodname_code_scanning %} 工作流程的日志输出](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 查看此工作流运行时操作的日志记录输出。

1. 在所有作业完成后，您可以查看已识别的任何 {% data variables.product.prodname_code_scanning %} 警报的详细信息。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

{% note %}

**注意：** 如果您提出拉取请求以将 {% data variables.product.prodname_code_scanning %} 工作流程添加到仓库，则在合并拉取请求之前，来自该拉取请求的警报不会直接显示在 {% data variables.product.prodname_code_scanning_capc %} 页面上。 如果发现任何警报，您可以在合并拉取请求之前查看这些警报，方法是在 {% data variables.product.prodname_code_scanning_capc %} 页面上的横幅中点击**发现的 _n_ 条警报**链接。

{% ifversion fpt or ghes > 3.1 %}
  ![点击"发现的 n 条警报"链接](/assets/images/help/repository/code-scanning-alerts-found-link.png)
{% else %}
  ![点击"发现的 n 条警报"链接](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)
{% endif %}

{% endnote %}
