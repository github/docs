---
title: 管理来自代码扫描的警报
shortTitle: 管理警报
intro: 您可以查看、修复和关闭项目代码中潜在漏洞或错误的警报。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '拥有仓库写入权限的人可管理仓库的 {% data variables.product.prodname_code_scanning %} 警报。'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 关于 {% data variables.product.prodname_code_scanning %} 中的警报

After you enable {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} displays {% data variables.product.prodname_code_scanning %} alerts in your repository. 默认 {% data variables.product.prodname_code_scanning %} 工作流程使用 `on.push` 事件触发代码扫描 - 每次推送到任何包含工作流程文件的分支时触发。

Each alert highlights a problem with the code and the name of the tool that identified it. 您可以看到触发警报的代码行以及警报的属性，例如问题的严重程度和性质。 警报还会告知该问题第一次被引入的时间。 For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

![来自 {% data variables.product.prodname_code_scanning %} 的警报示例](/assets/images/help/repository/code-scanning-alert.png)

如果不执行警报建议的操作，可以手动关闭警报。 例如，您可以关闭用于测试的代码的警报，或者您认为是误报的警报。 如果修复编码错误的成本大于改进代码的潜在利益，您可能还希望关闭警报。

默认情况下，{% data variables.product.prodname_dotcom %} 显示默认分支和任何受保护分支的警报。 您可以对警报列表进行排序和过滤，只查看您感兴趣的警报。

您可以查看拉取请求中引入的警报，并立即采取措施。 当 {% data variables.product.prodname_code_scanning %} 在拉取请求中找到漏洞或错误时，{% data variables.product.prodname_dotcom %} 会在时间线中显示注释，并显示拉取请求的差异视图。

If you enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

当 {% data variables.product.prodname_code_scanning %} 报告数据流警报时，{% data variables.product.prodname_dotcom %} 将显示数据在代码中如何移动。 {% data variables.product.prodname_code_scanning_capc %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

{% data reusables.code-scanning.you-can-upload-third-party-analysis %} {% data reusables.code-scanning.get-started-uploading-third-party-data %}

If you scan your code using a third-party tool or scan your code with custom {% data variables.product.prodname_codeql %} queries, {% data variables.product.prodname_dotcom %} will only use the supported SARIF 2.1.0 properties to display alerts. 第三方工具或自定义查询的结果可能不包括在使用 {% data variables.product.company_short %} 默认 {% data variables.product.prodname_codeql %} 查询扫描代码时看到的所有属性。 更多信息请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)”。

### 查看警报

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. （可选）如果警报突出显示数据流的问题，单击 **Show paths（显示路径）**可查看数据的路径。 ![数据流警报示例](/assets/images/help/repository/code-scanning-show-paths.png)

### 关闭警报

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. 使用“Close（关闭）”下拉菜单，单击关闭警报的原因。 ![选择通过 "Close（关闭）"下拉菜单关闭警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

### 延伸阅读

- "[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)"
- "[{% data variables.product.prodname_code_scanning_capc %} API](/v3/code-scanning)"
