---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108693"
---
{% comment %} 

Incluez toujours un avertissement de sécurité au-dessus de cette procédure. Il s’agit de l’un des avertissements suivants, selon que le contexte correspond à des exécuteurs auto-hébergés ou à des exécuteurs plus importants.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Toutes les organisations disposent d’un seul groupe d’exécuteurs par défaut. Les organisations au sein d’un compte d’entreprise peuvent créer des groupes supplémentaires. Les administrateurs d’organisation peuvent autoriser l’accès aux dépôts individuels à un groupe d’exécuteurs. Pour obtenir des informations sur la façon de créer un groupe d’exécuteurs avec l’API REST, consultez « [Groupes d’exécuteurs auto-hébergés](/rest/reference/actions#self-hosted-runner-groups) ».

Les exécuteurs sont automatiquement affectés au groupe par défaut lors de leur création et peuvent être membres d’un seul groupe à la fois. Vous pouvez déplacer un exécuteur du groupe par défaut vers n’importe quel groupe que vous créez.

Quand vous créez un groupe, vous devez choisir une stratégie qui définit les dépôts{% ifversion restrict-groups-to-workflows %} et les workflows{% endif %} ayant accès au groupe d’exécuteurs.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Dans la section « Groupes d’exécuteurs », cliquez sur **Nouveau groupe d’exécuteurs**.
1. Entrez un nom pour votre groupe d’exécuteurs.
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Les groupes d’exécuteurs détenus par une organisation ne peuvent pas accéder aux workflows d’une autre organisation au sein de l’entreprise. À la place, vous devez définir un groupe d’exécuteurs détenu par l’entreprise.{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Sous {% ifversion ghes or ghae %}« Exécuteurs »{% endif %}, cliquez sur **Ajouter nouveau**, puis sur **Nouveau groupe**.

    ![Ajouter un groupe d’exécuteurs](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Entrez un nom pour votre groupe d’exécuteurs et attribuez une stratégie pour l’accès aux dépôts.

   Vous pouvez configurer un groupe d’exécuteurs pour qu’il soit accessible à une liste spécifique de dépôts ou à tous les dépôts de l’organisation.{% ifversion ghec or ghes %} Par défaut, seuls les dépôts privés peuvent accéder aux exécuteurs dans un groupe d’exécuteurs, mais vous pouvez changer cela. Ce paramètre ne peut pas être remplacé si vous configurez un groupe d’exécuteurs d’une organisation qui a été partagé par une grande entreprise. {% endif %}
   
   ![Ajouter des options de groupe d’exécuteurs](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Cliquez sur **Enregistrer le groupe** pour créer le groupe et appliquer la stratégie.
{% endif %}
