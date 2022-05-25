---
title: Gitignore
intro: La API de Gitignore recupera las plantillas de `.gitignore` que pueden utilizarse para ignorar archivos y directorios.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
---

## About the Gitignore API

Cuando creas un repositorio nuevo en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} a través de la API, puedes especificar una [plantilla de.gitignore](/github/getting-started-with-github/ignoring-files) para aplicarla al repositorio cuando lo crees. La API de plantillas de .gitignore lista y recupera plantillas del [repositorio de .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.VERSION.raw

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".
