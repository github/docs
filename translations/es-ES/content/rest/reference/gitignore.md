---
title: Gitignore
intro: La API de Gitignore recupera las plantillas de `.gitignore` que pueden utilizarse para ignorar archivos y directorios.
redirect_from:
  - /v3/gitignore
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

When you create a new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. La API de plantillas de .gitignore lista y recupera plantillas del [repositorio de .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.VERSION.raw

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".

{% include rest_operations_at_current_path %}
