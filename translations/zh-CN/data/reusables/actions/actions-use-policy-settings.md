---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179717"
---
如果选择 {% data reusables.actions.policy-label-for-select-actions-workflows %}，则允许{% ifversion ghec or ghes or ghae %}企业{% else %}组织{% endif %}内的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，并且还有允许其他特定操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}的其他选项。 有关详细信息，请参阅“[允许选择操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}来运行](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run)”。

{% ifversion ghec or fpt %}如果仅允许从{% else %}本地{% endif %}到{% ifversion ghec or ghes or ghae %}企业{% else %}组织{% endif %}的操作{% ifversion actions-workflow-policy %}和可重用工作流，该策略会阻止对由 {% data variables.product.prodname_dotcom %} 创作的操作的所有访问。 例如，无法访问 [`actions/checkout`](https://github.com/actions/checkout) 操作。{% endif %}
