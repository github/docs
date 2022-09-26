---
ms.openlocfilehash: 1122a6eba1b8e9e2501ddf011c36baf6d0a5f2e9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065888"
---
1. 分配组织访问权限的策略。

    你可以将运行器组配置为可供特定的一些组织或企业中的所有组织访问。{% ifversion ghec or ghes %} 默认情况下，只有私有存储库可以访问运行器组中的运行器，但你可以覆盖此操作。 如果配置企业共享的组织的运行组，则不能覆盖此设置。{% endif %}
