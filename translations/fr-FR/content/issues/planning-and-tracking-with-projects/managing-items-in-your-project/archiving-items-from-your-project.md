---
title: 'Archivage des éléments de votre {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'Vous pouvez archiver des éléments, les garder à disposition pour les restaurer ou les supprimer définitivement.'
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107716'
---
## Archivage des éléments

Vous pouvez archiver un élément pour conserver son contexte dans le projet, mais le supprimer des affichages du projet. {% ifversion projects-v2-auto-archive %}Vous pouvez aussi configurer les workflows intégrés de votre projet pour archiver automatiquement les éléments qui répondent à certains critères. Pour plus d’informations, consultez « [Archivage automatique d’éléments](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically) ».{% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Cliquez sur **Archive**.
   ![Capture d’écran montrant l’option Archiver](/assets/images/help/projects-v2/archive-menu-item.png)
1. Lorsque vous y êtes invité, confirmez votre choix en cliquant sur **Archiver**.
   ![Capture d’écran montrant l’invite d’archivage](/assets/images/help/projects-v2/archive-item-prompt.png)

## Restauration d’éléments archivés

1. Accédez à votre projet.
1. En haut à droite, cliquez sur {% octicon "kebab-horizontal" aria-label="The menu icon" %} pour ouvrir le menu.
  ![Capture d’écran montrant l’icône du menu](/assets/images/help/projects-v2/open-menu.png)
1. Dans le menu, cliquez sur {% octicon "archive" aria-label="The archive icon" %} **Éléments archivés**.
  ![Capture d’écran montrant l’élément de menu « Éléments archivés »](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. Pour filtrer les éléments archivés qui s’affichent, vous pouvez entrer votre filtre dans la zone de texte au-dessus de la liste des éléments. Pour plus d’informations sur les filtres disponibles, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».
   ![Capture d’écran montrant le champ de filtrage des éléments archivés](/assets/images/help/issues/filter-archived-items.png)   
1. À gauche de chaque titre d’élément, sélectionnez les éléments que vous souhaitez restaurer.
   ![Capture d’écran montrant les cases à cocher en regard des éléments archivés](/assets/images/help/issues/select-archived-item.png)   
1. Pour restaurer les éléments sélectionnés, au-dessus de la liste des éléments, cliquez sur **Restaurer**. 
   ![Capture d’écran montrant le bouton « Restaurer »](/assets/images/help/issues/restore-archived-item-button.png)

## Suppression d’éléments

Vous pouvez supprimer un élément pour le supprimer entièrement du projet.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. Cliquez sur **Supprimer du projet**.
   ![Capture d’écran montrant l’option Supprimer](/assets/images/help/projects-v2/delete-menu-item.png)
1. Lorsque vous y êtes invité, confirmez votre choix en cliquant sur **Supprimer**.
   ![Capture d’écran montrant l’invite de suppression](/assets/images/help/projects-v2/delete-item-prompt.png)
