---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108745"
---
Les exécuteurs sont automatiquement replacés dans le groupe par défaut quand leur groupe est supprimé.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. Dans la liste des groupes, à droite du groupe à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Pour supprimer le groupe, cliquez sur **Supprimer le groupe**.
3. Passez en revue les invites de confirmation, puis cliquez sur **Supprimer ce groupe d’exécuteurs**. Tous les exécuteurs encore dans ce groupe sont automatiquement déplacés vers le groupe par défaut, où ils héritent des autorisations d’accès attribuées au groupe.

{% endif %}
