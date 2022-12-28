---
title: 'Ajout d’un collaborateur externe à un {% data variables.product.prodname_project_v1 %} de votre organisation'
intro: 'En tant que propriétaire de l’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez ajouter un collaborateur externe et personnaliser ses autorisations sur un {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 517e0c6f71d1b70eb19dc85dfe3334ff0144c814
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108768'
---
{% data reusables.projects.project_boards_old %}

Un collaborateur externe est une personne qui n’est pas explicitement membre de votre organisation, mais qui a des autorisations sur un {% data variables.projects.projects_v1_board %} de votre organisation.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Sous « Rechercher par nom d’utilisateur, nom complet ou adresse e-mail », tapez le nom, le nom d’utilisateur ou l’adresse e-mail {% data variables.product.prodname_dotcom %} du collaborateur externe.
   ![La section Collaborateurs avec le nom d’utilisateur d’Octocat entré dans le champ de recherche](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}
