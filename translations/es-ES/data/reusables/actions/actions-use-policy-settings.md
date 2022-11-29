---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179723"
---
Si eliges {% data reusables.actions.policy-label-for-select-actions-workflows %}, se permiten acciones {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} en tu {% ifversion ghec or ghes or ghae %}empresa{% else %}organización{% endif %} y hay opciones adicionales para permitir otras acciones específicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}. Para obtener más información, consulta "[Habilitación de la ejecución de acciones seleccionadas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run)".

{% ifversion ghec or fpt %}Al permitir acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables solo en{% else %} local en{% endif %} tu{% ifversion ghec or ghes or ghae %}empresa{% else %}organización{% endif %}, la directiva bloquea todo el acceso a las acciones que crea {% data variables.product.prodname_dotcom %}. Por ejemplo, no se podría acceder a la acción [`actions/checkout`](https://github.com/actions/checkout).{% endif %}
