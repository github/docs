---
ms.openlocfilehash: b0db396765557122de192fe6dde98aeeb0057ec2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147093205"
---
## Error: "La hora actual es anterior a la condición NotBefore"

Este error puede producirse cuando hay una diferencia de tiempo demasiado grande entre el IdP y {% data variables.product.product_name %}, lo que suele ocurrir con IdP auto hospedados.

{% ifversion ghes %}Para evitar este problema, se recomienda apuntar el dispositivo al mismo origen del Protocolo de tiempo de red (NTP) que el IdP, si es posible. {% endif %}Si te aparece este error, asegúrate de que la hora del {% ifversion ghes %}appliance{% else %}IdP{% endif %} esté sincronizada correctamente con el servidor NTP.

Si se usa ADFS como idP, también se establece `NotBeforeSkew` en ADFS en 1 minuto para {% data variables.product.prodname_dotcom %}. Si `NotBeforeSkew` se establece en 0, hasta diferencias de tiempo muy pequeñas, incluidos milisegundos, puede causar problemas de autenticación.