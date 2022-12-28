---
title: 'Gestion de l’accès d’une équipe à un {% data variables.product.prodname_project_v1 %} de l’organisation'
intro: 'En tant que propriétaire d’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez donner à une équipe l’accès à un {% data variables.projects.projects_v1_board %} appartenant à votre organisation.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108597'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**Avertissements :**
- Vous pouvez changer le niveau d’autorisation d’une équipe si celle-ci dispose d’un accès direct à un {% data variables.projects.projects_v1_board %}. Si l’accès de l’équipe au {% data variables.projects.projects_v1_board %} est hérité d’une équipe parente, vous devez changer l’accès de l’équipe parente au {% data variables.projects.projects_v1_board %}.
- Si vous ajoutez ou supprimez l’accès au {% data variables.projects.projects_v1_board %} pour une équipe parente, chacune des équipes enfant de ce parent reçoit ou perd aussi l’accès au {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams) ».

{% endwarning %}

## Octroi à une équipe de l’accès à un {% data variables.projects.projects_v1_board %}

Vous pouvez accorder à une équipe entière le même niveau d’autorisation à un {% data variables.projects.projects_v1_board %}.

{% note %}

**Remarque :** {% data reusables.project-management.cascading-permissions %} Par exemple, si un propriétaire d’organisation a donné à une équipe des autorisations de lecture sur un {% data variables.projects.projects_v1_board %}, et qu’un administrateur de {% data variables.projects.projects_v1_board %} donne à l’un des membres de l’équipe des autorisations d’administration sur ce panneau en tant que collaborateur individuel, cette personne dispose d’autorisations d’administration sur le {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) ».

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Dans la barre latérale de gauche, cliquez sur **Équipes**.
9. Pour ajouter une équipe, cliquez sur **Ajouter une équipe : Sélectionner une équipe**. Ensuite, choisissez une équipe dans le menu déroulant ou recherchez l’équipe que vous souhaitez ajouter.
 ![Ajouter un menu déroulant d’équipe avec la liste des équipes de l’organisation](/assets/images/help/projects/add-a-team.png)
10. En regard du nom de l’équipe, utilisez le menu déroulant pour sélectionner le niveau d’autorisation souhaité : **Lecture**, **Écriture** ou **Administration**. ![Menu déroulant des autorisations d'équipe avec les options de lecture, d’écriture et d’administration](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Configuration de l’accès d’une équipe à un {% data variables.projects.projects_v1_board %}

Si l’accès d’une équipe à un {% data variables.projects.projects_v1_board %} est hérité d’une équipe parente, vous devez changer l’accès de l’équipe parente au {% data variables.projects.projects_v1_board %} pour mettre à jour l’accès des équipes enfant.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Au-dessus de la conversation de l’équipe, cliquez sur {% octicon "project" aria-label="The Projects icon" %} **Projets**.
  ![Onglet Référentiels d’équipe](/assets/images/help/organizations/team-project-board-button.png)
5. Pour changer les niveaux d’autorisation, à droite du {% data variables.projects.projects_v1_board %} que vous souhaitez mettre à jour, utilisez la liste déroulante. Pour supprimer un {% data variables.projects.projects_v1_board %}, cliquez sur **{% octicon "trash" aria-label="The trash icon" %}** .
  ![Supprimer une carte de projet du bouton corbeille de votre équipe](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Pour aller plus loin

- [Ajout de votre projet à une équipe](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
