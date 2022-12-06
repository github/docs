---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111294"
---
1. 单击“新建运行器”，然后单击“{% octicon "mark-github" aria-label="New hosted runner" %} 新建 {% data variables.product.prodname_dotcom %} 托管的运行器” 。
1. 完成配置新运行器所需的详细信息：

    - 名称：输入新运行器的名称。 为了便于识别，这应指示其硬件和操作配置，例如 `ubuntu-20.04-16core`。
    - 运行器映像：从可用选项中选择操作系统。 选择操作系统后，便能够选择特定版本。
    - 运行器大小：从可用选项下拉列表中选择硬件配置。
    - 自动缩放：选择可随时处于活动状态的最大运行器数。
    - 运行器组：选择运行器所属的组。 此组会托管运行器的多个实例，因为它们会纵向扩展和缩减以满足需求。
    - 网络：仅适用于 {% data variables.product.prodname_ghe_cloud %}：选择是否将静态 IP 地址范围分配给 {% data variables.actions.hosted_runner %} 的实例。 总共最多可以使用 10 个静态 IP 地址。

1. 单击“创建运行器”。
