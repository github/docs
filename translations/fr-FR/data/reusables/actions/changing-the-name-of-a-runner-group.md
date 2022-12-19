---
ms.openlocfilehash: ece0ef29b0410e074ce00926fda68f6cde0fa175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108465"
---
{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Modifiez le nom du groupe d’exécuteurs.

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group %}
1. Modifiez le nom du groupe d’exécuteurs.
{% endif %}
