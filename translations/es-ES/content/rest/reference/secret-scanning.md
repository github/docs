---
title: Escaneo de secretos
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.secret-scanning.api-beta %}

La API de {% data variables.product.prodname_secret_scanning %} te permite recuperar y actualizar las alertas del escaneo de secretos desde un repositorio {% if currentVersion == "free-pro-team@latest" %}privado{% endif %}. Para obtener más información sobre el escaneo de secretos, consulta la sección "[Acerca del escaneo de secretos](/code-security/secret-security/about-secret-scanning)".

{% include rest_operations_at_current_path %}
