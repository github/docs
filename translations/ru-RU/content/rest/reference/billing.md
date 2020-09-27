---
title: Billing
versions:
  free-pro-team: '*'
---

You can monitor your {{ site.data.variables.product.prodname_actions }} and {{ site.data.variables.product.prodname_registry }} charges and usage for a user and organization through the Billing API.

You can get billing information for an enterprise. For more information, see the "[{{ site.data.variables.product.prodname_dotcom }} Enterprise administration](/rest/reference/enterprise-admin#billing)" REST API.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
