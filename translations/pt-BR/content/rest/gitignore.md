---
title: Gitignore
intro: A API Gitignore busca modelos `.gitignore` que podem ser usados para ignorar arquivos e diretórios.
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
ms.openlocfilehash: 082b626aac4af8dcdf435761447caeb015a608db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147092883'
---
## Sobre a API do Gitignore

Quando você cria um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} por meio da API, você pode especificar um [modelo .gitignore](/github/getting-started-with-github/ignoring-files) para aplicá-lo ao repositório após a criação. A API de modelos .gitignore lista modelos do [repositório .gitignore](https://github.com/github/gitignore) do {% data variables.product.product_name %} e efetua fetch deles.

### Tipos de mídia personalizados para gitignore

Você pode usar este tipo de mídia personalizada ao obter um modelo de gitignore.

    application/vnd.github.VERSION.raw

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
