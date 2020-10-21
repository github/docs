---
title: 关于与代码扫描的集成
shortTitle: 关于集成
intro: 'You can perform {% data variables.product.prodname_code_scanning %} externally and then display the results in {% data variables.product.prodname_dotcom %}, or set up webhooks that listen to {% data variables.product.prodname_code_scanning %} activity in your repository.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

作为在 {% data variables.product.prodname_dotcom %} 中运行 {% data variables.product.prodname_code_scanning %} 的替代方法，您可以在其他地方执行分析，然后上传结果。 在外部运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式与在 {% data variables.product.prodname_dotcom %} 内运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式相同。 For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

如果使用可生成结果为静态分析结果交换格式 (SARIF) 2.1.0 数据的第三方静态分析工具，您可以将其上传到 {% data variables.product.prodname_dotcom %}。 更多信息请参阅“[将 SARIF 文件上传到 GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)”。

### Integrations with webhooks

You can use {% data variables.product.prodname_code_scanning %} webhooks to build or set up integrations, such as [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) or [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/), that subscribe to {% data variables.product.prodname_code_scanning %} events in your repository. For example, you could build an integration that creates an issue on {% data variables.product.product_location %} or sends you a Slack notification when a new {% data variables.product.prodname_code_scanning %} alert is added in your repository. For more information, see "[Creating webhooks](/developers/webhooks-and-events/creating-webhooks)" and "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)."

### 延伸阅读

* "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)"
* "[Using {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} with your existing CI system
* "[SARIF support for {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)"
