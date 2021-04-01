---
title: 支払い
versions:
  free-pro-team: '*'
topics:
  - api
---

Billing API を使用して、ユーザおよび Organization の {% data variables.product.prodname_actions %} および {% data variables.product.prodname_registry %} の料金と使用状況を監視できます。

Enterprise の支払情報を取得できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#billing)」REST API を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
