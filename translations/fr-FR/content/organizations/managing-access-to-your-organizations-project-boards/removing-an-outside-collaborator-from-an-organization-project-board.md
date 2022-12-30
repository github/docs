---
title: 'Suppression d’un collaborateur externe d’un {% data variables.product.prodname_project_v1 %} de l’organisation'
intro: 'En tant que propriétaire de l’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez supprimer l’accès d’un collaborateur externe à un {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove outside collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ce2dd198d259473b775cf6a9bd61e494ad1c2717
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108598'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
