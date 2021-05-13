---
title: 关于与代码扫描的集成
shortTitle: 关于集成
intro: '您可以在外部执行 {% data variables.product.prodname_code_scanning %}，然后在 {% data variables.product.prodname_dotcom %} 中显示结果，或者设置侦听仓库中 {% data variables.product.prodname_code_scanning %} 活动的 web 挂钩。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

作为在 {% data variables.product.prodname_dotcom %} 中运行 {% data variables.product.prodname_code_scanning %} 的替代方法，您可以在其他地方执行分析，然后上传结果。 在外部运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式与在 {% data variables.product.prodname_dotcom %} 内运行的 {% data variables.product.prodname_code_scanning %} 的警报显示方式相同。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。

如果使用可生成结果为静态分析结果交换格式 (SARIF) 2.1.0 数据的第三方静态分析工具，您可以将其上传到 {% data variables.product.prodname_dotcom %}。 更多信息请参阅“[将 SARIF 文件上传到 GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)”。

### 与 web 挂钩集成

您可以使用 {% data variables.product.prodname_code_scanning %} web 挂钩构建或设置集成，例如 [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) 或 [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/)，以订阅仓库中的 {% data variables.product.prodname_code_scanning %} 事件。 例如，您可以构建在 {% data variables.product.product_name %} 上创建议题，或者在仓库中新增 {% data variables.product.prodname_code_scanning %} 警报时向您发送 Slack 通知的集成。 更多信息请参阅“[创建 web 挂钩](/developers/webhooks-and-events/creating-webhooks)”和“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”。

### 延伸阅读

* "[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)"
* "[将 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 与现有的 CI 系统一起使用](/github/finding-security-vulnerabilities-and-errors-in-your-code/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)"
