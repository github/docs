---
title: Code Scanning
intro: 'La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas del {% data variables.product.prodname_code_scanning %} desde un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
---

{% data reusables.code-scanning.beta %}

## About the Code scanning API

La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas del {% data variables.product.prodname_code_scanning %} desde un repositorio. Puedes utilizar las terminales para crear reportes automatizados para las alertas del {% data variables.product.prodname_code_scanning %} en una organización o cargar resutlados de análisis que se hayan generado utilizando con herramientas fuera de línea del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta la sección "[Encontrar vulnerabilidades de seguridad y errores en tu código](/github/finding-security-vulnerabilities-and-errors-in-your-code)".

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
### Tipos de medios personalizados para el {% data variables.product.prodname_code_scanning %}

Hay un tipo de medios personalizado compatible para la API de REST del {% data variables.product.prodname_code_scanning %}. 

    application/sarif+json

Puedes utilizarla con las solicitudes de tipo `GET` que envíes a la terminal de `/analyses/{analysis_id}`. Para obtener más información sobre esta operación, consulta la sección [Obtén un análisis del {% data variables.product.prodname_code_scanning %} para un repositorio](#get-a-code-scanning-analysis-for-a-repository)". Cuando utilices este tipo de medios con esta operación, la respuesta incluirá un subconjunto de los datos actuals que se cargaron para el análisis específico en vez del resumen del análisis que se devuelve cuando utilizas el tipo de medios predeterminado. La respuesta también incluye datos adicionales, tales como las propiedades de `github/alertNumber` y `github/alertUrl`. Estos datos tienen formato de [SARIF versión 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".
{% endif %}
