---
ms.openlocfilehash: 9658a9b020b627b040b8c8f8aab181cd6de443df
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141531640"
---
Al crear un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} mediante la API, puede especificar una [plantilla de .gitignore](/github/getting-started-with-github/ignoring-files) para aplicarla al repositorio cuando se cree. La API de plantillas de .gitignore enumera y recupera plantillas del [repositorio .gitignore](https://github.com/github/gitignore) de {% data variables.product.product_name %}.

### <a name="custom-media-types-for-gitignore"></a>Tipos de medios personalizados para gitignore

Puedes utilizar este tipo de medios personalizado cuando obtengas una plantilla de gitignore.

    application/vnd.github.VERSION.raw

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".