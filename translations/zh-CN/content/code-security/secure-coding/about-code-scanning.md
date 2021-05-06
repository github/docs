---
title: 关于代码扫描
intro: '您可以使用 {% data variables.product.prodname_code_scanning %} 在 {% data variables.product.prodname_dotcom %} 上查找项目中的安全漏洞和代码错误。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

您可以使用 {% data variables.product.prodname_code_scanning %} 来查找代码中现有的问题，并且对其进行分类和确定修复的优先级。 {% data variables.product.prodname_code_scanning_capc %} 还可防止开发者引入新问题。 您可以计划在特定的日期和时间进行扫描，或在仓库中发生特定事件（如推送）时触发扫描。

如果 {% data variables.product.prodname_code_scanning %} 发现您的代码中可能存在漏洞或错误，{% data variables.product.prodname_dotcom %} 会在仓库中显示警报。 在修复触发警报的代码之后，{% data variables.product.prodname_dotcom %} 将关闭警报。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

要监控您的仓库或组织的 {% data variables.product.prodname_code_scanning %} 结果，您可以使用 web 挂钩和 {% data variables.product.prodname_code_scanning %} API。 有关用于 {% data variables.product.prodname_code_scanning %} 的 web 挂钩的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”。 有关 API 端点的信息，请参阅“[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)”。

要开始 {% data variables.product.prodname_code_scanning %}，请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

### 关于 {% data variables.product.prodname_codeql %}

您可以在 [`github/codeql`](https://github.com/github/codeql) 仓库中查看并参与 {% data variables.product.prodname_code_scanning %} 的查询。 {% data variables.product.prodname_codeql %} 将代码视为数据，允许您在代码中查找潜在漏洞，比传统的静态分析工具更可靠。

{% data variables.product.prodname_ql %} 是授权 {% data variables.product.prodname_codeql %} 的查询语言。 {% data variables.product.prodname_ql %} 是一种面向对象的逻辑编程语言。 {% data variables.product.company_short %}、语言专家和安全研究人员创建用于 {% data variables.product.prodname_code_scanning %} 的查询，查询是开源的。 社区维护和更新查询，以改善分析和减少误报。 更多信息请参阅 GitHub Security Lab 网站上的 [{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql)。

有关 {% data variables.product.prodname_code_scanning %} 的 API 端点的更多信息，请参阅“[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)”。

{% data reusables.code-scanning.supported-languages %}

您可以在 [`github/codeql`](https://github.com/github/codeql) 仓库中查看并参与 {% data variables.product.prodname_code_scanning %} 的查询。 更多信息请参阅 {% data variables.product.prodname_codeql %} 文档中的 [{% data variables.product.prodname_codeql %} 查询](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/)。

{% if currentVersion == "free-pro-team@latest" %}

### 关于 {% data variables.product.prodname_code_scanning %} 的计费

{% data variables.product.prodname_code_scanning_capc %} 使用 {% data variables.product.prodname_actions %}，{% data variables.product.prodname_code_scanning %} 工作流程的每次运行将耗用 {% data variables.product.prodname_actions %} 的分钟数。 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”。

{% endif %}

### 关于第三方代码扫描工具

{% data reusables.code-scanning.you-can-upload-third-party-analysis %}

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

{% data reusables.code-scanning.get-started-uploading-third-party-data %}

### 延伸阅读

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"{% endif %}
- [{% data variables.product.prodname_security %}](https://securitylab.github.com/)
- OASIS Committee 网站上的 [OASIS 静态分析结果交换格式 (SARIF) TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=sarif)
