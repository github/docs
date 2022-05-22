---
title: 支払い
intro: 'With the Billing API, you can monitor the charges and usage {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} for a user or organization.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Enterprise の支払情報を取得できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#billing)」REST API を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
