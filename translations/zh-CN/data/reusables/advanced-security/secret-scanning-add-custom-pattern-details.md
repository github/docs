---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084810"
---
1. 输入新自定义模式的详细信息：
   1. 您至少必须提供模式的名称，以及秘密模式格式的正则表达式。
   1. 可以单击“更多选项{% octicon "chevron-down" aria-label="down" %}”来提供密钥格式的其他周围内容或额外匹配要求。
   1. 提供一个示例测试字符串，用于确保配置与预期模式匹配。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![创建自定义 {% data variables.product.prodname_secret_scanning %} 模式窗体](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![创建自定义 {% data variables.product.prodname_secret_scanning %} 模式窗体](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
