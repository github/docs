---
title: Gestion de l’accès de l’équipe à un dépôt de l’organisation
intro: Vous pouvez accorder à une équipe l’accès à un dépôt, supprimer l’accès d’une équipe à un dépôt ou changer le niveau d’autorisation d’une équipe pour un dépôt.
redirect_from:
- /articles/managing-team-access-to-an-organization-repository-early-access-program
- /articles/managing-team-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876900"
---
Les personnes disposant d’un accès administrateur à un dépôt peuvent gérer l’accès de l’équipe au dépôt. Les responsables d’équipe peuvent supprimer l’accès d’une équipe à un dépôt si l’équipe a un accès direct à ce dernier. Si l’accès de l’équipe au dépôt est hérité d’une équipe parente, les responsables peuvent choisir de réinitialiser l’autorisation actuelle pour qu’elle corresponde à l’autorisation de l’équipe parente.

{% warning %}

**Avertissements :**
- Vous pouvez changer le niveau d’autorisation d’une équipe si l’équipe dispose d’un accès direct à un dépôt. Si l’accès de l’équipe à un dépôt est hérité d’une équipe parente, vous devez changer l’accès de l’équipe parente au dépôt.
- Si vous ajoutez ou supprimez l’accès au dépôt pour une équipe parente, chacune de ses équipes enfants reçoit ou perd également l’accès au dépôt. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams) ».

{% endwarning %}

## Donner à une équipe l’accès à un dépôt

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Vous pouvez accorder à une équipe l’accès à un dépôt ou changer le niveau d’accès d’une équipe à un dépôt dans vos paramètres de dépôt. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person) ». {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Au-dessus de la liste des dépôts, cliquez sur **Ajouter un dépôt**.
  ![Bouton pour ajouter un dépôt](/assets/images/help/organizations/add-repositories-button.png)
6. Tapez le nom d’un dépôt, puis cliquez sur **Ajouter un dépôt à l’équipe**.
  ![Champ de recherche d’un dépôt](/assets/images/help/organizations/team-repositories-add.png)
7. Si vous le souhaitez, à droite du nom du dépôt, utilisez le menu déroulant et choisissez un autre niveau d’autorisation pour l’équipe.
  ![Liste déroulante des niveaux d’accès au dépôt](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## Suppression de l’accès d’une équipe à un dépôt

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Vous pouvez supprimer l’accès d’une équipe à un dépôt d’organisation dans vos paramètres de dépôt. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person) ».

Si une équipe a un accès direct à un dépôt, vous pouvez supprimer l’accès de cette équipe au dépôt. Si l’accès d’une équipe au dépôt est hérité d’une équipe parente, vous devez supprimer le dépôt de l’équipe parente pour supprimer le dépôt des équipes enfants.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

Vous pouvez supprimer l’accès d’une équipe à un dépôt si l’équipe a un accès direct à un dépôt. Si l’accès d’une équipe au dépôt est hérité d’une équipe parente, vous devez supprimer le dépôt de l’équipe parente pour supprimer le dépôt des équipes enfants.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Sélectionnez le ou les dépôts que vous souhaitez supprimer de l’équipe.
  ![Liste des dépôts d’équipe avec des cases à cocher pour certains dépôt sélectionnés](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Au-dessus de la liste des dépôts, utilisez le menu déroulant et cliquez sur **Supprimer de l’équipe**.
  ![Menu déroulant avec l’option de suppression d’un dépôt d’une équipe](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Passez en revue le ou les dépôts qui seront supprimés de l’équipe, puis cliquez sur **Supprimer les dépôts**.
  ![Boîte modale listant les dépôts auxquels l’équipe n’aura plus accès](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## Pour aller plus loin

- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
