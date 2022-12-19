---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084818"
---
我们在 {% data variables.product.product_location %} 上记录并显示 {% data variables.product.prodname_GH_advanced_security %} 的两名提交者：

- “提交者数”是指在组织中参与至少一个 {% ifversion fpt or ghec %} 专用{% endif %}存储库，并在你的企业许可中使用一个席位的提交者数量。 也就是说，他们也是组织成员、外部协作者，或者具有待处理的企业帐户中组织加入邀请。
- “是此存储库/组织唯一”是指仅向此存储库或此组织中的存储库作出贡献的提交者数量。 此数字显示您可以通过禁用该仓库或组织的 {% data variables.product.prodname_GH_advanced_security %} 来释放多少许可证席位。

如果没有唯一的提交者，则意味着所有活跃的提交者也参与其他使用 {% data variables.product.prodname_GH_advanced_security %} 的仓库或组织。 禁用该仓库或组织的功能将不会在您的许可证上腾出任何席位。

从企业帐户中删除用户后，用户的许可证在 24 小时内被释放。

{% note %}

注意：用户可以参与多个存储库或组织。 使用数是在整个企业帐户中计量的，确保每个成员使用一个席位，无论该用户参与多少个仓库或组织。

{% endnote %}
