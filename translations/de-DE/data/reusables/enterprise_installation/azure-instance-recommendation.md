---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145108459"
---
Für die {% data variables.product.prodname_ghe_server %}-Appliance ist eine Premium-Storage-Daten-Disk erforderlich. Zudem wird sie auf jeder Azure-VM unterstützt, die Premium-Storage unterstützt. Azure VM-Typen mit dem Suffix `s` unterstützen Storage Premium. Weitere Informationen findest du unter [Welche Datenträgertypen sind in Azure verfügbar?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd) und [Azure Storage Premium: für hohe Leistung konzipiert](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance) in der Azure-Dokumentation.

{% data variables.product.company_short %} empfiehlt eine arbeitsspeicheroptimierte VM für {% data variables.product.prodname_ghe_server %}. Weitere Informationen findest du unter [Arbeitsspeicheroptimierte VM-Größen](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory) in der Azure-Dokumentation.

{% data variables.product.prodname_ghe_server %} unterstützt jede Region, die Ihren VM-Typ unterstützt. Weitere Informationen zu den unterstützten Regionen für jede VM findest du unter [Verfügbare Produkte nach Region](https://azure.microsoft.com/regions/services/).
