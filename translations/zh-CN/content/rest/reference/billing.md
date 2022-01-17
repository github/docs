---
title: 计费
intro: 'With the Billing API, you can monitor the charges and usage {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} for a user or organization.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

您可以获取企业的帐单信息。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#billing)”REST API。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
