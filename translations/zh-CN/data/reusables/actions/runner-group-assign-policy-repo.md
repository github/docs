---
ms.openlocfilehash: ef09954dd829eae3eb7cfaefbefab65b9a2fffc5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084859"
---
1. 分配存储库访问策略。

    您可以将运行器组配置为可供特定的存储库列表或组织中的所有存储库访问。{% ifversion ghec or ghes %} 默认情况下，只有私有存储库可以访问运行器组中的运行器，但您可以覆盖此操作。 如果配置企业共享的组织的运行组，则不能覆盖此设置。{% endif %}
