---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179716"
---
Se você escolher {% data reusables.actions.policy-label-for-select-actions-workflows %}, as ações {% ifversion actions-workflow-policy %}e os fluxos de trabalho reutilizáveis{% endif %} na {% ifversion ghec or ghes or ghae %}empresa{% else %}organização{% endif %} serão permitidos, e haverá opções adicionais para permitir outras ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} específicos. Para obter mais informações, confira "[Como permitir a execução de ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} selecionados](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run)".

{% ifversion ghec or fpt %}Quando você permite ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis somente no {% else %} local para{% endif %} sua {% ifversion ghec or ghes or ghae %}empresa{% else %}organização{% endif %}, a política bloqueia todo o acesso às ações criadas pelo {% data variables.product.prodname_dotcom %}. Por exemplo, a ação [`actions/checkout`](https://github.com/actions/checkout) não estará acessível.{% endif %}
