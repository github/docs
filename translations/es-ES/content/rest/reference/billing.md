---
title: Billing
intro: 'With the Billing API, you can monitor the charges and usage {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} for a user or organization.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

You can get billing information for an enterprise. For more information, see the "[{% data variables.product.prodname_dotcom %} Enterprise administration](/rest/reference/enterprise-admin#billing)" REST API.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
