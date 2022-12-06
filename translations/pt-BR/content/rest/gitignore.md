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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181265'
---
## Sobre a API do Gitignore

Quando você cria um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} por meio da API, você pode especificar um [modelo .gitignore](/github/getting-started-with-github/ignoring-files) para aplicá-lo ao repositório após a criação. A API de modelos .gitignore lista modelos do [repositório .gitignore](https://github.com/github/gitignore) do {% data variables.product.product_name %} e efetua fetch deles.

### Tipos de mídia personalizados para gitignore

Você pode usar este tipo de mídia personalizada ao obter um modelo de gitignore.

    application/vnd.github.raw

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
