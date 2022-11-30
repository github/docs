---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145100905"
---
{% ifversion not ghec%}默认情况下，{% else %}{% endif %}用户帐户在 90 天内处于非活动状态，则该帐户被视为休眠帐户。 {% ifversion not ghec %}可以配置用户在被视为休眠用户前必须处于非活动状态的时间长度{% ifversion ghes%}，并选择挂起休眠用户以释放用户许可证{% endif %}。{% endif %}
