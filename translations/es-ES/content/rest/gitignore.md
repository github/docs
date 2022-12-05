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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181272'
---
## Acerca de Gitignore API

Al crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} mediante la API, puedes especificar una [plantilla de .gitignore](/github/getting-started-with-github/ignoring-files) para aplicarla al repositorio cuando se cree. La API de plantillas de .gitignore enumera y recupera plantillas del [repositorio .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.raw

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
