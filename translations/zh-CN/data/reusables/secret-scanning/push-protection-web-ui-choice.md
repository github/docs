---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108129"
---
使用 Web UI 尝试将受支持的机密提交到启用了机密扫描作为推送保护的存储库或组织时，{% data variables.product.prodname_dotcom %} 将阻止提交。 

你将在页面顶部看到一个横幅，其中包含有关机密位置的信息，并且文件中的机密将带有下划线，以便你轻松找到它。

{% ifversion push-protection-custom-link-orgs %}

  ![屏幕截图显示因机密扫描推送保护而阻止在 Web UI 中提交](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![屏幕截图显示因机密扫描推送保护而阻止在 Web UI 中提交](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
