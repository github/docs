---
title: Gestion de la stratégie de duplication pour votre organisation
intro: 'Vous pouvez autoriser ou empêcher la duplication (fork) de tout dépôt privé{% ifversion ghes or ghae or ghec %} et interne{% endif %} appartenant à votre organisation.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106245'
---
Par défaut, les nouvelles organisations sont configurées pour interdire la duplication (fork) des dépôts privés{% ifversion ghes or ghec or ghae %} et internes{% endif %}.

Si vous autorisez la duplication des dépots privés{% ifversion ghes or ghec or ghae %} et internes{% endif %} au niveau de l’organisation, vous pouvez également configurer la possibilité de dupliquer un dépôt privé{% ifversion ghes or ghec or ghae %} ou interne{% endif %} spécifique. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre dépôt](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Sous « Duplication des dépôts », sélectionnez **Autoriser la duplication des dépôts privés{% ifversion ghec or ghes or ghae %} et internes{% endif %}** .

   {%- ifversion fpt %} ![Case à cocher pour autoriser ou interdire la duplication dans l’organisation](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![Case à cocher pour autoriser ou interdire la duplication dans l’organisation](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. Cliquez sur **Enregistrer**.

## Pour aller plus loin

- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
