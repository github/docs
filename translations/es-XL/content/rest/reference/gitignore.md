---
title: Gitignore
redirect_from:
  - /v3/gitignore
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

Cuando creas un repositorio de {% data variables.product.product_name %} nuevo a través de la API, puedes especificar una [plantilla de .gitignore](/github/using-git/ignoring-files) para que aplique al repositorio cuando éste se cree. La API de plantillas de .gitignore lista y recupera plantillas del [repositorio de .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.VERSION.raw

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".

{% include rest_operations_at_current_path %}
