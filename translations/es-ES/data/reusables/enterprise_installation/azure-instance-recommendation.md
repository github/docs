---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123729"
---
El aparato {% data variables.product.prodname_ghe_server %} requiere un disco de datos de almacenamiento prémium, y es compatible con cualquier Azure VM que admita almacenamiento prémium. Los tipos de VM de Azure con el sufijo `s` admiten el almacenamiento premium. Para más información, vea "[¿Qué tipos de disco están disponibles en Azure?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)" y "[Azure Premium Storage: diseño para un alto rendimiento](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)" en la documentación de Azure.

{% data variables.product.company_short %} recomienda una VM con memoria optimizada para {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Tamaños de máquina virtual optimizados para memoria](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)" en la documentación de Azure.

{% data variables.product.prodname_ghe_server %} admite cualquier región que sea compatible con tu tipo de VM. Para más información sobre las regiones admitidas para cada máquina virtual, vea "[Productos disponibles por región](https://azure.microsoft.com/regions/services/)" de Azure.
