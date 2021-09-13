---
title: Cobrança
versions:
  free-pro-team: '*'
topics:
  - API
---

Você pode monitorar suas cobranças e uso de {% data variables.product.prodname_actions %} e de {% data variables.product.prodname_registry %} para um usuário e organização através da API de cobrança.

Você pode obter informações de cobrança para uma empresa. Para obter mais informações, consulte a API REST "[{% data variables.product.prodname_dotcom %} administração de Enterprise](/rest/reference/enterprise-admin#billing)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
