---
title: 计费
versions:
  free-pro-team: '*'
topics:
  - api
---

您可以通过计费 API 监控用户和组织的 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 费用和使用情况。

您可以获取企业的帐单信息。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#billing)”REST API。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
