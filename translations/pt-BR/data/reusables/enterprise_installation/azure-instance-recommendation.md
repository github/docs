---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145096730"
---
O appliance do {% data variables.product.prodname_ghe_server %} requer um disco de dados de armazenamento premium e é compatível com qualquer VM do Azure que tenha suporte ao armazenamento premium. Os tipos de VMs do Azure com o sufixo `s` dão suporte ao armazenamento premium. Para obter mais informações, confira "[Quais tipos de discos estão disponíveis no Azure?](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)" e "[Armazenamento premium do Azure: design para alto desempenho](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)" na documentação do Azure.

{% data variables.product.company_short %} recomenda uma VM com memória otimizada para {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Tamanhos de máquina virtual otimizados para memória](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)" na documentação do Azure.

O {% data variables.product.prodname_ghe_server %} dá suporte a qualquer região compatível com o seu tipo de VM. Para obter mais informações sobre as regiões com suporte para cada VM, confira "[Produtos disponíveis por região](https://azure.microsoft.com/regions/services/)" do Azure.
