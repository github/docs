---
title: 'Réouverture d’un {% data variables.product.prodname_project_v1 %} fermé'
intro: 'Vous pouvez rouvrir un {% data variables.projects.projects_v1_board %} fermé et redémarrer n’importe quelle automatisation de workflow qui avait été configurée pour le {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e0101378c0b7049f7cba5e04dd28231a1237d0c5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108644'
---
{% data reusables.projects.project_boards_old %}

Lorsque vous fermez un {% data variables.projects.projects_v1_board %}, toute automatisation de workflow qui avait été configurée pour le {% data variables.projects.projects_v1_board %} est interrompue par défaut. Pour plus d’informations, consultez « [Fermeture d’un {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board) ».

Quand vous rouvrez un {% data variables.projects.projects_v1_board %}, vous avez la possibilité de *synchroniser* l’automatisation, ce qui met à jour la position des cartes dans le panneau en fonction des paramètres d’automatisation configurés pour le panneau.

1. Accédez au {% data variables.projects.projects_v1_board %} que vous voulez rouvrir.
{% data reusables.project-management.click-menu %}
3. Choisissez de synchroniser l’automatisation pour votre {% data variables.projects.projects_v1_board %} ou de rouvrir votre {% data variables.projects.projects_v1_board %} sans synchronisation.
    - Pour rouvrir votre {% data variables.projects.projects_v1_board %} et synchroniser l’automatisation, cliquez sur **Rouvrir et synchroniser le projet**.
  ![Bouton « Rouvrir et resynchroniser le projet »](/assets/images/help/projects/reopen-and-sync-project.png)
    - Pour rouvrir votre {% data variables.projects.projects_v1_board %} sans synchroniser l’automatisation, dans le menu déroulant de réouverture, cliquez sur **Rouvrir uniquement**. Ensuite, cliquez sur **Rouvrir uniquement**.
  ![Menu déroulant Rouvrir le tableau de projet fermé](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Pour aller plus loin

- « [Configuration de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards) »
