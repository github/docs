---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123727"
---
{% data variables.product.prodname_ghe_server %} 어플라이언스에는 Premium Storage 데이터 디스크가 필요하며 Premium Storage를 지원하는 모든 Azure VM에서 지원됩니다. `s` 접미사가 있는 Azure VM 유형은 Premium Storage를 지원합니다. 자세한 내용은 Azure 설명서의 [Azure에서 사용할 수 있는 디스크 유형](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd) 및 “[Azure Premium Storage: 고성능을 위한 디자인](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)”을 참조하세요.

{% data variables.product.company_short %}에서는 {% data variables.product.prodname_ghe_server %}에 메모리 최적화 VM을 권장합니다. 자세한 내용은 Azure 설명서의 “[메모리 최적화 가상 머신 크기](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)”를 참조하세요.

{% data variables.product.prodname_ghe_server %}는 VM 유형을 지원하는 모든 지역을 지원합니다. 각 VM에 대해 지원되는 지역에 대한 자세한 내용은 Azure의 “[지역별 사용 가능한 제품](https://azure.microsoft.com/regions/services/)”을 참조하세요.
