---
title: Escaneo de secretos
intro: 'Para recuperar y actualizar las alertas de secretos desde un repositorio privado, puedes utilizar la API de Escaneo de Secretos.'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghec: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

La API del {% data variables.product.prodname_secret_scanning %} te permite {% ifversion fpt or ghec or ghes > 3.1 or ghae %}:

- Habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %} para un repositorio. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#update-a-repository)" en la documentación de REST.
- Recupera y actualiza las alertas del {% data variables.product.prodname_secret_scanning %} desde un repositorio {% ifversion fpt or ghec %}privado{% endif %}. Para obtener más detalles, consulta las secciones a continuación.
{%- else %} recupera y actualiza las alertas del {% data variables.product.prodname_secret_scanning %} desde un repositorio {% ifversion fpt or ghec %}privado{% endif %}.{% endif %}

Para obtener más información acerca de las {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)".

{% include rest_operations_at_current_path %}
