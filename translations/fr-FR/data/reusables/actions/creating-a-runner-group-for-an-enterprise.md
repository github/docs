---
ms.openlocfilehash: f49d42aa3fafbdbde2a650f84bc3b48a61e26182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147764089"
---
{% comment %} 

Incluez toujours un avertissement de sécurité au-dessus de cette procédure. Il s’agit de l’un des avertissements suivants, selon que le contexte correspond à des exécuteurs auto-hébergés ou à des exécuteurs plus importants.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Les grandes entreprises peuvent ajouter leurs exécuteurs à des groupes à des fins de gestion des accès. Les grandes entreprises peuvent créer des groupes d’exécuteurs accessibles à des organisations spécifiques{% ifversion restrict-groups-to-workflows %} ou à des workflows spécifiques{% endif %} dans le compte d’entreprise. Les propriétaires d’organisation peuvent ensuite affecter aux groupes d’exécuteurs de l’entreprise des stratégies d’accès supplémentaires précises aux dépôts{% ifversion restrict-groups-to-workflows %} ou aux workflows{% endif %}. Pour obtenir des informations sur la façon de créer un groupe d’exécuteurs avec l’API REST, consultez les points de terminaison d’entreprise dans l’API REST [{% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Les exécuteurs sont automatiquement affectés au groupe par défaut lors de leur création et peuvent être membres d’un seul groupe à la fois. Vous pouvez affecter l’exécuteur à un groupe spécifique pendant le processus d’inscription ou déplacer ultérieurement l’exécuteur du groupe par défaut vers un groupe personnalisé.

Lors de la création d’un groupe, vous devez choisir une stratégie qui définit les organisations qui ont accès au groupe d’exécuteurs.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Pour choisir une stratégie pour l’accès des organisations, sélectionnez la liste déroulante **Accès des organisations**, puis cliquez sur une stratégie. Vous pouvez configurer un groupe d’exécuteurs pour qu’il soit accessible à une liste spécifique d’organisations ou à toutes les organisations de la grande entreprise.{% ifversion ghes %} Par défaut, seuls les dépôts privés peuvent accéder aux exécuteurs dans un groupe d’exécuteurs, mais vous pouvez changer cela.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Ajouter des options de groupe d’exécuteurs](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png) {%- elsif ghae %}

   ![Ajouter des options de groupe d’exécuteurs](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png) {%- endif %} {% data reusables.actions.runner-group-assign-policy-workflow %}
1. Cliquez sur **Enregistrer le groupe** pour créer le groupe et appliquer la stratégie.

