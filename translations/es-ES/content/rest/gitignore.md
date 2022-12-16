---
title: Gitignore
intro: Usa la API de REST para obtener plantillas de `.gitignore` que se pueden usar para omitir archivos y directorios.
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
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193045'
---
## Acerca de gitignore

Al crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} mediante la API, puedes especificar una [plantilla de .gitignore](/github/getting-started-with-github/ignoring-files) para aplicarla al repositorio cuando se cree. Puedes usar la API de REST para obtener plantillas de .gitignore del [repositorio .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

Puedes utilizar el tipo de medios personalizado `application/vnd.github.raw` cuando obtengas una plantilla de gitignore. Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
