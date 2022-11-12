---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108144"
---
{% data variables.product.prodname_actions %} 为 {% ifversion ghec or fpt %}，而不是 {% endif %}，{% data variables.product.prodname_dependabot_version_updates %} 和 {% data variables.product.prodname_dependabot_security_updates %} 在 {% data variables.product.product_name %} 上运行。{% ifversion fpt or ghec %}但是，{% data variables.product.prodname_dependabot %} 打开的拉取请求可以触发运行操作的工作流。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_actions %} 自动执行 {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)”。{% elsif ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %}有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。{% endif %}
