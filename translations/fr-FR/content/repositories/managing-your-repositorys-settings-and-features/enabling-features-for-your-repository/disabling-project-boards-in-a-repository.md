---
title: 'Désactivation de {% data variables.projects.projects_v1_boards %} dans un dépôt'
intro: 'Les administrateurs de dépôt peuvent désactiver les {% data variables.projects.projects_v1_boards %} pour un dépôt si vous ou votre équipe gérez le travail différemment.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 8c550cd9ebc767327298e39dc0b3a6a11368dc3f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108620'
---
Lorsque vous désactivez des {% data variables.projects.projects_v1_boards %}, vous ne voyez plus les informations de {% data variables.projects.projects_v1_board %} dans les chronologies ou les [journaux d’audit](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Fonctionnalités », décochez la case **Projets**.
  ![Case à cocher Supprimer des projets](/assets/images/help/projects/disable-projects-checkbox.png)

Une fois que les {% data variables.projects.projects_v1_boards %} sont désactivés, les {% data variables.projects.projects_v1_boards %} existants sont inaccessibles depuis leur URL précédente. {% data reusables.organizations.disable_project_board_results %}
