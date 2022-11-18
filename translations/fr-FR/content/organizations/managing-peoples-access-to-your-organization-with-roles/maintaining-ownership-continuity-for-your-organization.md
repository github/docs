---
title: Maintien de la continuité de la propriété pour votre organisation
intro: Les organisations peuvent avoir plusieurs propriétaires d’organisation pour éviter une vacance de propriété.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885971'
---
## À propos du maintien de la continuité des propriétés pour votre organisation

{% data reusables.organizations.org-ownership-recommendation %}

Les propriétaires d’organisation ont un accès d’administration complet à l’organisation. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Remarque** : en tant que propriétaire de l’organisation, vous pouvez modifier le rôle des autres membres et propriétaires de l’organisation. Vous ne pouvez pas modifier votre propre rôle. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} Si votre organisation appartient à un compte d’entreprise, tout propriétaire d’entreprise peut devenir propriétaire de votre organisation. Pour plus d’informations, consultez « [Gestion de votre rôle dans une organisation appartenant à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise) ».
{% endif %}

## Nomination d’un propriétaire d’organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Sélectionnez la ou les personnes que vous souhaitez promouvoir en tant que propriétaire.
  ![Liste de membres avec deux membres sélectionnés](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Au-dessus de la liste des membres, utilisez le menu déroulant, puis cliquez sur **Modifier le rôle**.
  ![Menu déroulant avec l’option de suppression de membres](/assets/images/help/teams/user-bulk-management-options.png)
6. Sélectionnez un nouveau rôle pour la ou les personnes, puis cliquez sur **Modifier le rôle**.
  ![Cases d’option avec les rôles de propriétaire et de membre et bouton Modifier le rôle](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
