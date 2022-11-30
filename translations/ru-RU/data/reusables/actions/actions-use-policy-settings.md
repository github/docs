---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179722"
---
Если выбрать {% data reusables.actions.policy-label-for-select-actions-workflows %}, действия {% ifversion actions-workflow-policy %}и многократно используемые рабочие процессы{% endif %} {% ifversion ghec or ghes or ghae %}вашего предприятия{% else %}вашей организации{% endif %} будут разрешены. При этом будут доступны дополнительные параметры для разрешения других отдельных действий{% ifversion actions-workflow-policy %} и многократно используемых рабочих процессов{% endif %}. Дополнительные сведения см. в статье [Разрешение выполнения действий выбора{% ifversion actions-workflow-policy %} и многократно используемых рабочих процессов{% endif %}](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run).

{% ifversion ghec or fpt %}Если разрешить действия{% ifversion actions-workflow-policy %} и многократно используемые рабочие процессы только из{% else %} локальной среды{% endif %} {% ifversion ghec or ghes or ghae %}среды предприятия{% else %}организации{% endif %}, политикой будут блокироваться все попытки доступа к действиям, созданным {% data variables.product.prodname_dotcom %}. Например, действие [`actions/checkout`](https://github.com/actions/checkout) будет недоступно.{% endif %}
