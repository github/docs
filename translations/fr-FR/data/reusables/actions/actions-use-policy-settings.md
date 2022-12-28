---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179718"
---
Si vous choisissez {% data reusables.actions.policy-label-for-select-actions-workflows %}, les actions {% ifversion actions-workflow-policy %}et les workflows réutilisables{% endif %} au sein de votre {% ifversion ghec or ghes or ghae %}entreprise{% else %}organisation{% endif %} sont autorisé(e)s, et il existe d’autres options pour autoriser d’autres actions spécifiques{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %}. Pour plus d’informations, consultez « [Autorisation de l’exécution des actions sélectionnées{% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %}](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run) ».

{% ifversion ghec or fpt %}Quand vous autorisez des actions{% ifversion actions-workflow-policy %} et des workflows réutilisables uniquement dans{% else %} localement dans{% endif %} votre {% ifversion ghec or ghes or ghae %}entreprise{% else %}organisation{% endif %}, la stratégie bloque tout accès aux actions créées par {% data variables.product.prodname_dotcom %}. Par exemple, l’action [`actions/checkout`](https://github.com/actions/checkout) n’est pas accessible.{% endif %}
