---
title: Facturación
versions:
  free-pro-team: '*'
topics:
  - api
---

Puedes monitorear tus cargos y uso de {% data variables.product.prodname_actions %} y de {% data variables.product.prodname_registry %} para un usuario y organización a través de la API de Facturación.

Puedes obtener información de facturación para una empresa. Para obtener más información, consulta la API de REST para la "[ Administración de {% data variables.product.prodname_dotcom %} Enterprise](/rest/reference/enterprise-admin#billing)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
