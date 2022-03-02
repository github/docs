---
title: 计费
intro: '使用计费 API，可以监视用户或组织的费用和使用情况 {% data variables.product.prodname_actions %} 及 {% data variables.product.prodname_registry %}。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

您可以获取企业的帐单信息。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#billing)”REST API。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
