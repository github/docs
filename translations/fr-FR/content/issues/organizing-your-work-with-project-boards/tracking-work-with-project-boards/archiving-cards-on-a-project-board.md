---
title: 'Archivage des cartes d’un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez archiver les cartes d’un {% data variables.projects.projects_v1_board %} pour nettoyer votre workflow sans perdre le contexte historique d’un projet.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108705'
---
{% data reusables.projects.project_boards_old %}

L’automatisation dans votre {% data variables.projects.projects_v1_board %} ne s’applique pas aux cartes de {% data variables.projects.projects_v1_board %} archivées. Par exemple, si vous fermez un problème dans l’archive d’un {% data variables.projects.projects_v1_board %}, la carte archivée ne passe pas automatiquement dans la colonne « Terminé ». Lorsque vous restaurez une carte à partir de l’archive du {% data variables.projects.projects_v1_board %}, la carte retourne à la colonne où elle a été archivée.

## Archivage des cartes d’un {% data variables.projects.projects_v1_board %}

1. Dans un {% data variables.projects.projects_v1_board %}, recherchez la carte que vous souhaitez archiver, puis cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Liste des options permettant de modifier une carte de tableau de projet](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Cliquez sur **Archive**.
![Sélection de l’option Archive dans le menu](/assets/images/help/projects/archive-project-board-card.png)

## Restauration de cartes sur un {% data variables.projects.projects_v1_board %} depuis la barre latérale

{% data reusables.project-management.click-menu %}
2. Dans le coin supérieur droit, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Afficher l’archive**.
  ![Sélection de l’option Afficher l’archive dans le menu](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Au-dessus de la carte de {% data variables.projects.projects_v1_board %} que vous voulez désarchiver, cliquez sur **Restaurer**.
  ![Sélection de la carte de tableau de projet de restauration](/assets/images/help/projects/restore-card.png)
