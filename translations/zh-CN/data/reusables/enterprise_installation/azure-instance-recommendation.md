---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145100824"
---
{% data variables.product.prodname_ghe_server %} 设备需要高级存储数据磁盘，可以在支持高级存储的任何 Azure VM 上使用。 带有 `s` 后缀的 Azure VM 类型支持高级存储。 有关详细信息，请参阅 Azure 文档中的“[Azure 中提供哪些磁盘类型？](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd)” 和“[Azure 高级存储：高性能设计](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance)”。

{% data variables.product.company_short %} 建议对 {% data variables.product.prodname_ghe_server %} 使用内存优化的虚拟机。 有关详细信息，请参阅 Azure 文档中的“[内存优化虚拟机大小](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory)”。

{% data variables.product.prodname_ghe_server %} 可以在支持您的 VM 类型的任何地区使用。 有关每个 VM 支持的区域的详细信息，请参阅 Azure 的“[提供的产品（按区域）](https://azure.microsoft.com/regions/services/)”。
