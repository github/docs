---
title: Gitignore
intro: A API do Gitignore busca modelos `.gitignore` que podem ser usados para ignorar arquivos e diretórios.
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

When you create a new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} via the API, you can specify a [.gitignore template](/github/getting-started-with-github/ignoring-files) to apply to the repository upon creation. A API de modlos do .gitignore lista e recupera modelos do repositório de [.gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de mídia personalizados para gitignore

Você pode usar este tipo de mídia personalizada ao obter um modelo de gitignore.

    application/vnd.github.VERSION.raw

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".

{% include rest_operations_at_current_path %}
