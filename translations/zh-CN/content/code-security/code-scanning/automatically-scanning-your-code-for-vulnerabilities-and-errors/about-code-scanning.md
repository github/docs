---
title: 关于代码扫描
intro: '您可以使用 {% data variables.product.prodname_code_scanning %} 在 {% data variables.product.prodname_dotcom %} 上查找项目中的安全漏洞和代码错误。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

您可以使用 {% data variables.product.prodname_code_scanning %} 来查找代码中现有的问题，并且对其进行分类和确定修复的优先级。 {% data variables.product.prodname_code_scanning_capc %} 还可防止开发者引入新问题。 您可以计划在特定的日期和时间进行扫描，或在仓库中发生特定事件（如推送）时触发扫描。

如果 {% data variables.product.prodname_code_scanning %} 发现您的代码中可能存在漏洞或错误，{% data variables.product.prodname_dotcom %} 会在仓库中显示警报。 在修复触发警报的代码之后，{% data variables.product.prodname_dotcom %} 将关闭警报。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

要监控您的仓库或组织的 {% data variables.product.prodname_code_scanning %} 结果，您可以使用 web 挂钩和 {% data variables.product.prodname_code_scanning %} API。 有关用于 {% data variables.product.prodname_code_scanning %} 的 web 挂钩的信息，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”。 有关 API 端点的信息，请参阅“[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)”。

要开始 {% data variables.product.prodname_code_scanning %}，请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% ifversion fpt %}

## 关于 {% data variables.product.prodname_code_scanning %} 的计费

{% data variables.product.prodname_code_scanning_capc %} 使用 {% data variables.product.prodname_actions %}，{% data variables.product.prodname_code_scanning %} 工作流程的每次运行将耗用 {% data variables.product.prodname_actions %} 的分钟数。 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

{% endif %}

## About tools for {% data variables.product.prodname_code_scanning %}

You can set up {% data variables.product.prodname_code_scanning %} to use the {% data variables.product.prodname_codeql %} product maintained by {% data variables.product.company_short%} or a third-party {% data variables.product.prodname_code_scanning %} tool.

### About {% data variables.product.prodname_codeql %} analysis

{% data reusables.code-scanning.about-codeql-analysis %} For more information about {% data variables.product.prodname_codeql %}, see "[About code scanning with CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

### 关于第三方 {% data variables.product.prodname_code_scanning %} 工具

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

您可以使用操作在 {% data variables.product.product_name %} 内或者在外部 CI 系统内运行第三方分析工具。 更多信息请参阅“[设置仓库的代码扫描](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”或“[将 SARIF 文件上传到 GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。
