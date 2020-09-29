---
title: Cobrança
versions:
  free-pro-team: '*'
---

You can monitor your {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} charges and usage for a user and organization through the Billing API.

Você pode obter informações de cobrança para uma empresa. Para obter mais informações, consulte a API REST "[{% data variables.product.prodname_dotcom %} administração de Enterprise](/rest/reference/enterprise-admin#billing)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
