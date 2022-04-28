---
title: Code Scanning
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} API 可让您从仓库检索和更新 {% data variables.product.prodname_code_scanning %} 警报。 您可以使用端点为组织中的 {% data variables.product.prodname_code_scanning %} 警报创建自动报告，或上传使用离线 {% data variables.product.prodname_code_scanning %} 工具生成的分析结果。 更多信息请参阅“[查找代码中的安全漏洞和错误](/github/finding-security-vulnerabilities-and-errors-in-your-code)”。

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
### {% data variables.product.prodname_code_scanning %} 的自定义媒体类型

{% data variables.product.prodname_code_scanning %} REST API 有一种支持的自定义媒体类型。 

    application/sarif+json

您可以将此请求与发送到 `/analyses/{analysis_id}` 端点的 `GET` 请求一起使用。 有关此操作的更多信息，请参阅“[获取仓库的 {% data variables.product.prodname_code_scanning %} 分析](#get-a-code-scanning-analysis-for-a-repository)”。 当您使用此媒体类型进行此操作时，响应包括上传用于指定分析的实际数据的子集，而不是使用默认媒体类型时返回的分析摘要。 响应还包括其他数据，如 `github/alertNumber` 和 `github/alertUrl` 属性。 数据格式为 [SARIF 版本 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)。

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。
{% endif %}
