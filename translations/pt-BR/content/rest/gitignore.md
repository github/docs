---
title: Gitignore
intro: Use a API REST para obter modelos `.gitignore` que podem ser usados para ignorar arquivos e diretórios.
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
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193038'
---
## Sobre o gitignore

Quando você cria um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} por meio da API, você pode especificar um [modelo .gitignore](/github/getting-started-with-github/ignoring-files) para aplicá-lo ao repositório após a criação. Você pode usar a API REST para obter modelos .gitignore do [repositório .gitignore](https://github.com/github/gitignore) do {% data variables.product.product_name %}.

Você pode usar o tipo de mídia personalizado `application/vnd.github.raw` ao obter um modelo gitignore. Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
