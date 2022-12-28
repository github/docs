---
title: Suppression d’utilisateurs d’équipes et d’organisations
intro: 'Si un membre de votre organisation n’a plus besoin d’accéder à certains dépôts, vous pouvez le retirer de l’équipe qui autorise cet accès. Si un membre de votre organisation n’a plus besoin d’accéder aux dépôts dont est propriétaire l’organisation, vous pouvez les retirer de l’organisation.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104742'
---
Seuls les propriétaires et les administrateurs d’équipe peuvent supprimer des membres d’une organisation. Quand un utilisateur est supprimé d’une équipe ou d’une organisation, ses problèmes, ses demandes de tirage (pull request) et ses commentaires dans les dépôts de l’organisation restent intacts et lui sont toujours attribués.

{% warning %}

**Avertissement** : Quand vous supprimez un utilisateur d’une organisation, il perd l’accès à ses duplications (fork) de **dépôts privés** de votre organisation. Il peut toujours avoir des copies locales de ces duplications. Toutefois, il ne pourra pas les synchroniser avec les dépôts de votre organisation. Vous êtes chargé de veiller à ce que les personnes qui ont perdu l’accès à un dépôt suppriment toute information confidentielle ou propriété intellectuelle. Si l’utilisateur supprimé de votre organisation était membre de l’organisation, son accès aux duplications privées des dépôts de l’organisation peut être restauré s’il est [rétabli comme membre de l’organisation](/articles/reinstating-a-former-member-of-your-organization) dans les trois mois suivant sa suppression de l’organisation.

{% endwarning %}

## Suppression d’un membre d’équipe

{% ifversion ghes %}

{% warning %}

**Remarque :** {% data reusables.enterprise_management_console.badge_indicator %}

Pour supprimer un membre existant d’une équipe synchronisée avec un groupe LDAP, contactez votre administrateur LDAP.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Sélectionnez la personne ou les personnes que vous souhaitez supprimer.
![Case à cocher en regard d’un membre d’organisation](/assets/images/help/teams/team-member-check-box.png)
5. Au-dessus de la liste des membres d’équipe, utilisez le menu déroulant et cliquez sur **Supprimer de l’équipe**.
![Menu déroulant avec option de modification du rôle](/assets/images/help/teams/bulk-edit-drop-down.png)

## Suppression d’un utilisateur d’une organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Cliquez sur la case à cocher en regard du nom des utilisateurs que vous souhaitez supprimer de l’organisation.
![Case à cocher pour supprimer l’utilisateur](/assets/images/help/organizations/Organization-remove-user.png)
5. En haut de la page, sous le nom de l’organisation, cliquez sur **Supprimer de l’organisation**.
![Bouton Supprimer de l’organisation](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
