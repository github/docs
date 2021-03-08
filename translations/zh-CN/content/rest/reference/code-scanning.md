---
title: 代码扫描
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} API 可让您从仓库检索和更新代码扫描警告。 您可以使用端点为组织中的代码扫描警报创建自动化报告，或者使用离线代码扫描工具生成上传分析结果。 更多信息请参阅“[查找代码中的安全漏洞和错误](/github/finding-security-vulnerabilities-and-errors-in-your-code)”。

{% include rest_operations_at_current_path %}
