---
ms.openlocfilehash: 19ffef89b0f09653fc396f4cfc99e47e2162548b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108464"
---
{% comment %} 

Incluez toujours un avertissement de sécurité au-dessus de cette procédure. Il s’agit de l’un des avertissements suivants, selon que le contexte correspond à des exécuteurs auto-hébergés ou à des exécuteurs plus importants.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

En ce qui concerne les groupes d’exécuteurs d’une entreprise, vous pouvez changer les organisations à l’échelle de l’entreprise qui peuvent accéder à un groupe d’exécuteurs{% ifversion restrict-groups-to-workflows %} ou restreindre les workflows qu’un groupe d’exécuteurs peut exécuter{% endif %}. En ce qui concerne les groupes d’exécuteurs d’une organisation, vous pouvez changer les dépôts à l’échelle de l’organisation qui peuvent accéder à un groupe d’exécuteurs{% ifversion restrict-groups-to-workflows %} ou restreindre les workflows qu’un groupe d’exécuteurs peut exécuter{% endif %}.

### Modification de la liste des organisations et des dépôts qui peuvent accéder à un groupe d’exécuteurs

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Pour les groupes d’exécuteurs d’une grande entreprise, sous **Accès des organisations**, modifiez la liste des organisations qui peuvent accéder au groupe d’exécuteurs. Pour les groupes d’exécuteurs d’une organisation, sous **Accès au dépôt**, modifiez les dépôts qui peuvent accéder au groupe d’exécuteurs.

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### Modification des workflows auxquels un groupe d’exécuteurs peut accéder
Vous pouvez configurer un groupe d’exécuteurs pour exécuter les workflows sélectionnés ou tous les workflows. Par exemple, vous pouvez utiliser ce paramètre pour protéger les secrets stockés sur des exécuteurs ou pour normaliser les workflows de déploiement en limitant un groupe d’exécuteurs pour qu’il exécute uniquement un workflow réutilisable spécifique. Ce paramètre ne peut pas être remplacé si vous configurez un groupe d’exécuteurs d’une organisation qui a été partagé par une grande entreprise. {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Sous **Accès aux workflows**, sélectionnez le menu déroulant, puis cliquez sur **Workflows sélectionnés**.
1. Cliquez sur {% octicon "gear" aria-label="the gear icon" %}.
1. Entrez une liste séparée par des virgules des workflows qui peuvent accéder au groupe d’exécuteurs. Utilisez le chemin d’accès complet, y compris le nom et le propriétaire du dépôt. Épinglez le workflow à une branche, à une étiquette ou à un algorithme SHA complet. Par exemple : `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Seuls les travaux définis directement dans les workflows sélectionnés auront accès au groupe d’exécuteurs.
   
   Les groupes d’exécuteurs définis au niveau d’une organisation ne peuvent pas accéder aux workflows d’une autre organisation dans la grande entreprise. Au lieu de cela, vous devez définir un groupe d’exécuteurs au niveau de la grande entreprise.

1. Cliquez sur **Enregistrer**.

{% endif %}
