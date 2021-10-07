---
title: Escaneo de secretos
intro: 'Para recuperar y actualizar las alertas de secretos desde un repositorio privado, puedes utilizar la API de Escaneo de Secretos.'
versions:
  fpt: '*'
  ghes: '>=3.1'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

La API de {% data variables.product.prodname_secret_scanning %} te permite recuperar y actualizar las alertas del escaneo de secretos desde un repositorio {% ifversion fpt %}privado{% endif %}. Para obtener más información sobre el escaneo de secretos, consulta la sección "[Acerca del escaneo de secretos](/code-security/secret-security/about-secret-scanning)".

{% include rest_operations_at_current_path %}
