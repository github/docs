---
ms.openlocfilehash: a9edfbc5b5f3c0f50ae1e476d393e658751a5079
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "145098396"
---
{% data variables.product.company_short %} 按提交者对 {% data variables.product.prodname_advanced_security %} 计费。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[管理 {% data variables.product.prodname_GH_advanced_security %} 的许可](/billing/managing-licensing-for-github-advanced-security)”。{% elsif ghes %}有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security)”。{% endif %}

您可以执行策略来控制仓库管理员是否被允许在组织的仓库中为 {% data variables.product.prodname_advanced_security %} 启用功能。 您可以为企业帐户拥有的所有组织或您选择的单个组织配置策略。

对组织禁止 {% data variables.product.prodname_advanced_security %} 将使仓库管理员无法为其他仓库启用 {% data variables.product.prodname_advanced_security %} 功能，但不会对已启用功能的仓库禁用功能。 有关配置 {% data variables.product.prodname_advanced_security %} 功能的详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
