---
title: Gitignore
intro: La API de Gitignore recupera las plantillas de `.gitignore` que pueden usarse para ignorar archivos y directorios.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147092890'
---
## Acerca de Gitignore API

Al crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} mediante la API, puede especificar una [plantilla de .gitignore](/github/getting-started-with-github/ignoring-files) para aplicarla al repositorio cuando se cree. La API de plantillas de .gitignore enumera y recupera plantillas del [repositorio .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.VERSION.raw

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
