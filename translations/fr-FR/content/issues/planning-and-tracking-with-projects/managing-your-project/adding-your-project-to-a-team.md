---
title: 'Ajout de votre {% data variables.projects.project_v2 %} à une équipe'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: Vous pouvez ajouter des projets à des équipes pour gérer les autorisations et améliorer la découvrabilité des projets.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108284'
---
## À propos de l’ajout de projets à des équipes

Vous pouvez ajouter des projets à votre équipe pour donner à l’ensemble de l’équipe un accès collaborateur à leurs projets. Quand vous ajoutez un projet à une équipe, ce projet apparaît dans la page des projets de l’équipe, ce qui permet aux membres d’identifier plus facilement les projets utilisés par une équipe particulière.

Les équipes reçoivent des autorisations de lecture sur les projets auquel elles sont ajoutées. Cette autorisation est ajoutée aux autorisations existantes pour le projet et pour les membres individuels de l’équipe, ce qui garantit que les autorisations plus élevées sont conservées. Pour plus d’informations sur la définition des autorisations pour les équipes et les contributeurs individuels, consultez « [Gestion de l’accès à vos projets](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects) ».

## Ajout d’un projet à une équipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Cliquez sur {% octicon "project" aria-label="The Projects icon" %} **Projets**.
   
   ![Capture d’écran montrant l’onglet Projets de l’équipe.](/assets/images/help/organizations/team-project-board-button.png)
   
1. Cliquez sur **Ajouter un projet**.
   
   ![Capture d’écran montrant le bouton « Ajouter un projet ».](/assets/images/help/organizations/team-project-add-project.png)
   
1. Commencez à taper le nom du projet que vous voulez ajouter, puis sélectionnez le projet dans la liste des correspondances.  
   
   {% note %}
   
   **Remarque :** Si cette modification entraîne une élévation des autorisations de projet pour les membres de l’équipe, {% data variables.product.product_name %} vous invite à confirmer votre choix.
   
   {% endnote %}
   
   ![Capture d’écran montrant le formulaire « Ajouter un projet ».](/assets/images/help/organizations/team-project-search.png)
   

## Suppression d’un projet d’une équipe

{% data reusables.projects.project-settings %}
1. Cliquez sur **Gérer l’accès**.
   
   ![Capture d’écran montrant l’élément « Gérer l’accès »](/assets/images/help/projects-v2/manage-access.png)
   
1. En regard de l’équipe de laquelle vous voulez supprimer le projet, cliquez sur **Supprimer**.
   
   ![Capture d’écran montrant la suppression d’un collaborateur](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Pour aller plus loin

- [Gestion de l’accès d’une équipe à un {% data variables.product.prodname_project_v1 %} de l’organisation](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
