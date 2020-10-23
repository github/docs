---
title: Managing code scanning alerts for your repository
shortTitle: 管理警报
intro: '您可以查看、修复和关闭项目代码中潜在漏洞或错误的警报。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permission to a repository can manage {% data variables.product.prodname_code_scanning %} alerts for the repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
---

{% data reusables.code-scanning.beta %}

### 关于 {% data variables.product.prodname_code_scanning %} 中的警报

You can set up {% data variables.product.prodname_code_scanning %} to check the code in a repository using the default {% data variables.product.prodname_codeql %} analysis, a third-party analysis, or multiple types of analysis. When the analysis is complete, the resulting alerts are displayed alongside each other in the security view of the repository. Results from third-party tools or from custom queries may not include all of the properties that you see for alerts detected by {% data variables.product.company_short %}'s default {% data variables.product.prodname_codeql %} analysis. 默认 {% data variables.product.prodname_code_scanning %} 工作流程使用 `on.push` 事件触发代码扫描 - 每次推送到任何包含工作流程文件的分支时触发。

By default, {% data variables.product.prodname_code_scanning %} analyzes your code periodically on the default branch and during pull requests. For information about managing alerts on a pull request, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

### About alerts details

每个警报都会高亮显示代码的问题以及识别该问题的工具名称。 您可以看到触发警报的代码行以及警报的属性，例如问题的严重程度和性质。 警报还会告知该问题第一次被引入的时间。 对于由 {% data variables.product.prodname_codeql %} 分析确定的警报，您还会看到如何解决问题的信息。

![来自 {% data variables.product.prodname_code_scanning %} 的警报示例](/assets/images/help/repository/code-scanning-alert.png)

如果使用 {% data variables.product.prodname_codeql %} 启用 {% data variables.product.prodname_code_scanning %}，也可以检测代码中的数据流问题。 数据流分析将查找代码中的潜在安全问题，例如：不安全地使用数据、将危险参数传递给函数以及泄漏敏感信息。

当 {% data variables.product.prodname_code_scanning %} 报告数据流警报时，{% data variables.product.prodname_dotcom %} 将显示数据在代码中如何移动。 {% data variables.product.prodname_code_scanning_capc %} 可用于识别泄露敏感信息的代码区域，以及可能成为恶意用户攻击切入点的代码区域。

### 查看警报

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} alerts on pull requests. However, you need write permission to view a summary of alerts for repository on the **Security** tab. By default, alerts are shown for the default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used. ![数据流警报示例](/assets/images/help/repository/code-scanning-show-paths.png)

### Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

### 关闭警报

Closing an alert is a way to resolve an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Select the Close drop-down menu and click a reason for closing the alert. ![Choosing reason for closing the alert via the Close drop-down](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### 延伸阅读

- "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)"
- "[About integration with {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
