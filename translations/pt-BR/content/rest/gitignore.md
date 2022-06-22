---
title: Gitignore
intro: A API do Gitignore busca modelos `.gitignore` que podem ser usados para ignorar arquivos e diretórios.
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

## Sobre a API do Gitignore

Ao criar um novo repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} por meio da API, você pode especificar um [.gitignore template](/github/getting-started-with-github/ignoring-files) para que seja aplicado ao repositório após a criação. A API de modlos do .gitignore lista e recupera modelos do repositório de [.gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de mídia personalizados para gitignore

Você pode usar este tipo de mídia personalizada ao obter um modelo de gitignore.

    application/vnd.github.VERSION.raw

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".
