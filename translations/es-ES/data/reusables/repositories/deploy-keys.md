---
ms.openlocfilehash: f4ea2cee931b8d44b44f0febba3304f41bac404c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092668"
---
Puedes lanzar proyectos hacia tu servidor desde un repositorio de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} utilizando una llave de despliegue, la cual es una llave SSH que otorga acceso a un repositorio único. {% data variables.product.product_name %} adjunta la parte pública de la llave directamente en tu repositorio en vez de hacerlo a una cuenta personal, mientras que la parte privada de la clave permanece en tu servidor. Para más información, vea "[Entrega de implementaciones](/rest/guides/delivering-deployments)".
