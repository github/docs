---
ms.openlocfilehash: deca3a28d17f3716b20a84281ad843c47bdbbee2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147705086"
---
{% ifversion fpt or ghec %} La API de GraphQL de {% data variables.product.prodname_registry %} no admite contenedores ni imágenes de Docker que usan el espacio de nombres del paquete `https://ghcr.io/OWNER/PACKAGE-NAME` ni imágenes npm que usan el espacio de nombres del paquete `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`.{% endif %}