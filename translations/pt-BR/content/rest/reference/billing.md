---
title: Cobrança
intro: 'Com a API de cobrança você pode monitorar as cobranças e uso {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %} para um usuário ou organização.'
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
