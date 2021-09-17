---
title: Acerca de las API de GitHub
intro: 'Aprende sobre las API de {% data variables.product.prodname_dotcom %} para extender y personalizar tu experiencia en {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v3/versions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Hay dos versiones estables de la API de GitHub: la [API de REST](/v3/) y la [API de GraphQL](/v4/).

{% else %}

La última versión estable de la API de GitHub es la [API de REST](/v3/).

{% endif %}

Cuando utilizas la API de REST, te exhortamos a que [solicites la v3 a través del encabezado de `Accept`](/v3/media/#request-specific-version).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Para obtener más información sobre cómo utilizar la API de GraphQL, consulta los [documentos de la v4](/v4/).

{% endif %}

## Versiones obsoletas

### beta

Se hizo obsoleta la API beta el 22 de abril de 2014.

### v2

Eliminamos el soporte para la API v2 en el 12 de junio de 2012.

### v1

Eliminamos el soporte para la API v1 en el 12 de junio de 2012.
