---
title: 'Fermeture d’un {% data variables.product.prodname_project_v1 %}'
intro: 'Si vous avez terminé toutes les tâches d’un {% data variables.projects.projects_v1_board %} ou que vous n’avez plus besoin d’un {% data variables.projects.projects_v1_board %}, vous pouvez fermer le {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21dfb0c6837f97d567f19168cd7f343aac06a4c0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108713'
---
{% data reusables.projects.project_boards_old %}

Lorsque vous fermez un {% data variables.projects.projects_v1_board %}, toute automatisation de workflow configurée s’interrompt par défaut.

Si vous rouvrez un {% data variables.projects.projects_v1_board %}, vous avez la possibilité de *synchroniser* l’automatisation, ce qui met à jour la position des cartes dans le panneau en fonction des paramètres d’automatisation configurés pour le panneau. Pour plus d’informations, consultez « [Réouverture d’un {% data variables.product.prodname_project_v1 %} fermé](/articles/reopening-a-closed-project-board) » ou « [À propos de l’automatisation de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards) ».

1. Accédez à la liste des {% data variables.projects.projects_v1_boards %} de votre dépôt ou de votre organisation ou appartenant à votre compte personnel.
2. Dans la liste des projets, à côté du {% data variables.projects.projects_v1_board %} que vous souhaitez fermer, cliquez sur {% octicon "chevron-down" aria-label="The chevron icon" %}.
![Icône représentant un chevron à droite du nom du tableau de projet](/assets/images/help/projects/project-list-action-chevron.png)
3. Cliquez sur **Fermer**.
![Fermer l’élément dans le menu déroulant du tableau de projet](/assets/images/help/projects/close-project.png)

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
- « [Suppression d’un {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board) »
- « [Désactivation de {% data variables.product.prodname_projects_v1 %} dans un dépôt](/articles/disabling-project-boards-in-a-repository) »
- « [Désactivation de {% data variables.product.prodname_projects_v1 %} dans votre organisation](/articles/disabling-project-boards-in-your-organization) »
- « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) »
