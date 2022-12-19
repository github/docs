---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087215"
---
{% data variables.product.prodname_GH_advanced_security %} 的每个许可证都规定了可以使用这些功能的最大帐户或席位数量。 至少一个启用了该功能的仓库的每个活跃提交者将使用一个席位。 如果提交者的一个提交在过去 90 天内被推送到存储库，则提交者被视为处于活跃状态，无论最初创作的时间如何。

{% note %}

**注意：** 系统使用提交作者信息和代码推送到 {% data variables.product.product_name %} 时的时间戳来计算活跃的提交者。

- 当用户将代码推送到 {% data variables.product.prodname_dotcom %} 时，在该推送中创作代码的每个用户都会计入 {% data variables.product.prodname_GH_advanced_security %} 席位，即使代码对 {% data variables.product.prodname_dotcom %} 并不是新代码。

- 用户应始终从最近的基础创建分支，或在推送之前重新设置分支的基础。 这将确保在过去 90 天内未进行提交的用户不会占用 {% data variables.product.prodname_GH_advanced_security %} 席位。

{% endnote %}

