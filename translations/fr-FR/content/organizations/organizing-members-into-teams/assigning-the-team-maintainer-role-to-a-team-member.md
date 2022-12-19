---
title: Attribution du rôle de gestionnaire d’équipe à un membre de l’équipe
intro: Vous pouvez donner à un membre de l’équipe la possibilité de gérer les paramètres et l’appartenance à l’équipe en affectant le rôle de gestionnaire d’équipe.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109386'
---
## À propos des gestionnaires d’équipe

Les personnes disposant du rôle de gestionnaire d’équipe peuvent gérer l’appartenance à l’équipe et ses paramètres.

- [Changer le nom et la description de l’équipe](/articles/renaming-a-team)
- [Changer la visibilité de l’équipe](/articles/changing-team-visibility)
- [Demander à ajouter une équipe enfant](/articles/requesting-to-add-a-child-team)
- [Demander à ajouter ou à changer une équipe parente](/articles/requesting-to-add-or-change-a-parent-team)
- [Définir l’image du profil de l’équipe](/articles/setting-your-team-s-profile-picture)
- [Modifier les discussions d’équipe](/articles/managing-disruptive-comments/#editing-a-comment)
- [Supprimer les discussions d’équipe](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Ajouter des membres de l’organisation à l’équipe](/articles/adding-organization-members-to-a-team)
- [Supprimer des membres de l’organisation dans l’équipe](/articles/removing-organization-members-from-a-team)
- Supprimer l’accès de l’équipe aux dépôts
- [Gérer l’affectation de révision de code pour l’équipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [Gérer les rappels planifiés pour les demandes de tirage](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Promotion d’un membre de l’organisation en gestionnaire d’équipe

Pour que vous puissiez promouvoir un membre de l’organisation en gestionnaire de l’équipe, la personne doit déjà être membre de l’équipe.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. Sélectionnez la ou les personnes que vous souhaitez promouvoir en gestionnaire de l’équipe.
![Case à cocher en regard d’un membre d’organisation](/assets/images/help/teams/team-member-check-box.png)
5. Au-dessus de la liste des membres de l’équipe, utilisez le menu déroulant, puis cliquez sur **Modifier le rôle...** . ![Menu déroulant avec l’option permettant de changer le rôle](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Sélectionnez un nouveau rôle, puis cliquez sur **Modifier le rôle**.
![Cases d’option pour les rôles Gestionnaire ou Membre](/assets/images/help/teams/team-role-modal.png)
