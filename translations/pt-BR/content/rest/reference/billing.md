---
title: Cobrança
intro: 'With the Billing API, you can monitor the charges and usage {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} for a user or organization.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Você pode obter informações de cobrança para uma empresa. Para obter mais informações, consulte a API REST "[{% data variables.product.prodname_dotcom %} administração de Enterprise](/rest/reference/enterprise-admin#billing)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
