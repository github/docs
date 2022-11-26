---
ms.openlocfilehash: 255dcb0346e9413e32492c34a7724df6284cd325
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455739"
---
当您决定哪些仓库和组织优先用于 {% data variables.product.prodname_GH_advanced_security %} 时，应该查看它们并识别：

- 对公司成功至关重要的代码库。 在这些项目中，引入了易受攻击代码、硬编码的密钥或不安全的依赖项，将对你的公司产生最大的影响。
- 提交频率最高的代码库。 这些是最积极开发的项目，因此出现安全问题的风险较高。

对这些组织或仓库启用 {% data variables.product.prodname_GH_advanced_security %} 后，评估您可以添加哪些其他代码库，而不会对唯一提交者产生计费。 最后，查看其余重要和繁忙的代码库。 {% ifversion fpt or ghes or ghec %}如果想增加许可证中的席位数，请联系 {% data variables.contact.contact_enterprise_sales %}。{% endif %}
