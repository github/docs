---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145129890"
---
仓库管理员可以启用或禁用私有仓库的依赖关系图。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用依赖项图。 有关详细信息，请参阅“[配置依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 阅读有关授予 {% data variables.product.product_name %} 只读访问存储库数据的消息，以启用依赖项关系图，然后在“依赖项关系图”旁边单击“启用”。
   ![依赖项关系图的“启用”按钮](/assets/images/help/repository/dependency-graph-enable-button.png) 可以随时通过在{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}“代码安全性和分析。”{% else %}“安全性和分析。”{% endif %}的设置页面上单击“依赖项关系图”旁边的“禁用”来禁用依赖项关系图。
