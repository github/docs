---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108748"
---
Si vous ne spécifiez pas de groupe d’exécuteurs pendant le processus d’inscription, vos nouveaux exécuteurs sont automatiquement affectés au groupe par défaut et peuvent ensuite être déplacés vers un autre groupe.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Dans la liste « Exécuteurs », cliquez sur l’exécuteur que vous souhaitez configurer.
2. Sélectionnez la liste déroulante **Groupe d’exécuteurs**.
3. Dans « Déplacer l’exécuteur vers le groupe », choisissez un groupe de destination pour l’exécuteur.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. Dans la section {% ifversion ghes or ghae %}« Groupes d’exécuteurs »{% endif %} de la page des paramètres, recherchez le groupe actuel de l’exécuteur à déplacer, puis développez la liste des membres du groupe.
    ![Afficher les membres du groupe d’exécuteurs](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Cochez la case en regard de l’exécuteur auto-hébergé, puis cliquez sur **Déplacer vers le groupe** pour afficher les destinations disponibles.
    ![Déplacement d’un membre du groupe d’exécuteurs](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Pour déplacer l’exécuteur, cliquez sur le groupe de destination.
    ![Déplacement d’un membre du groupe d’exécuteurs](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
