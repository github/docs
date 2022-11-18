---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108476"
---
{% ifversion fpt %} {% note %}

**Remarque :** Toutes les organisations disposent d’un seul groupe d’exécuteurs par défaut. Seuls les comptes d’une grande entreprise et les organisations appartenant à ces comptes peuvent créer et gérer des groupes d’exécuteurs supplémentaires.

{% endnote %}

Les groupes d’exécuteurs sont utilisés pour contrôler l’accès aux exécuteurs. Les administrateurs d’organisation peuvent configurer des stratégies d’accès pour contrôler les dépôts d’une organisation ayant accès au groupe d’exécuteurs.

Si vous utilisez {% data variables.product.prodname_ghe_cloud %}, vous pouvez créer des groupes d’exécuteurs supplémentaires, les administrateurs d’entreprise peuvent configurer des stratégies d’accès qui contrôlent les organisations d’une grande entreprise qui ont accès au groupe d’exécuteurs et les administrateurs d’organisation peuvent affecter au groupe d’exécuteurs de l’entreprise des stratégies d’accès supplémentaires aux dépôts individuels. {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Lorsque de nouveaux exécuteurs sont créés, ils sont automatiquement affectés au groupe par défaut. Les exécuteurs peuvent appartenir à un seul groupe à la fois. Vous pouvez déplacer les exécuteurs du groupe par défaut vers un autre groupe. Pour plus d’informations, consultez « [Déplacement d’un exécuteur vers un groupe](#moving-a-runner-to-a-group) ».

{% endif %}
