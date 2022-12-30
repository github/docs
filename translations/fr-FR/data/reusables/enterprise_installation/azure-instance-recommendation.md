---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145108458"
---
L’appliance {% data variables.product.prodname_ghe_server %} nécessite un disque de données de stockage Premium et est prise en charge sur n’importe quelle machine virtuelle Azure qui prend en charge le stockage Premium. Les types de machines virtuelles Azure avec le suffixe `s` prennent en charge le stockage Premium. Pour plus d’informations, consultez [Quels sont les types de disque disponibles dans Azure ?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd) et « [Stockage Azure Premium : conception sous le signe de la haute performance](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance) » dans la documentation Azure.

{% data variables.product.company_short %} recommande une machine virtuelle optimisée en mémoire pour {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Tailles de machine virtuelle à mémoire optimisée](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory) » dans la documentation Azure.

{% data variables.product.prodname_ghe_server %} prend en charge n’importe quelle région qui prend en charge votre type de machine virtuelle. Pour plus d’informations sur les régions prises en charge pour chaque machine virtuelle, consultez « [Disponibilité des produits par région](https://azure.microsoft.com/regions/services/) » d’Azure.
