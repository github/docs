---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100905"
---
{% ifversion not ghec%}默认情况下，{% else %}{% endif %}用户帐户在 90 天内处于非活动状态，则该帐户被视为休眠帐户。 {% ifversion not ghec %}可以配置用户在被视为休眠用户前必须处于非活动状态的时间长度{% ifversion ghes%}，并选择挂起休眠用户以释放用户许可证{% endif %}。{% endif %}
