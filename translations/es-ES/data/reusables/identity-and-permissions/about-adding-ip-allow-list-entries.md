---
ms.openlocfilehash: 6775f1ca71684e74de0fedce4cb7e6c6b15c2820
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682926"
---
Puedes crear una lista de direcciones IP permitidas agregando entradas que incluyan una dirección IP o un intervalo de direcciones.{% ifversion ip-allow-list-address-check %} Cuando hayas terminado de agregar entradas, puedes comprobar si cualquiera de las entradas habilitadas de la lista permitiría una dirección IP determinada.{% endif %}

Antes de que la lista restrinja el acceso a {% ifversion ghae %}tu empresa{% else %}los activos privados propiedad de las organizaciones de tu empresa{% endif %}, también debes habilitar las direcciones IP permitidas.