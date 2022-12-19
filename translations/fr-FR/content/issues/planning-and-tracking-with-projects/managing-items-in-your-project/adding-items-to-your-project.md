---
title: 'Ajout d’éléments à votre {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Découvrez comment ajouter des demandes de tirage, des problèmes et des brouillons de problème à vos projets, individuellement ou en bloc.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107612'
---
Votre projet peut suivre des brouillons de problèmes, des problèmes et des demandes de tirage. 

{% note %}

**Remarque :** Un projet peut contenir un maximum de {% data variables.projects.item_limit %} éléments et de {% data variables.projects.archived_item_limit %} éléments archivés. {% ifversion projects-v2-auto-archive %}Pour en savoir plus sur l’archivage automatique des éléments quand ils répondent à des critères spécifiques, consultez «[Archivage automatique des éléments](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically) ».{% endif %}

{% endnote %}

### Ajout de problèmes et de demandes de tirage à un projet

#### Collage de l’URL d’un problème ou d’une demande de tirage

{% data reusables.projects.add-item-via-paste %}

#### Recherche d’un problème ou d’une demande de tirage

{% data reusables.projects.add-item-bottom-row %}
2. Entrez <kbd>#</kbd> .
3. Sélectionnez le référentiel où se trouve le problème ou la demande de tirage. Vous pouvez entrer une partie du nom du référentiel pour affiner vos options.
  ![Capture d’écran montrant le collage d’une URL de problème pour l’ajouter au projet](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Sélectionnez le problème ou la demande de tirage. Vous pouvez entrer une partie du titre pour affiner vos options.
  ![Capture d’écran montrant le collage d’une URL de problème pour l’ajouter au projet](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Ajout de problèmes et de demandes de tirage en bloc

1. Dans la ligne du bas du projet, cliquez sur {% octicon "plus" aria-label="plus icon" %}.
  ![Capture d’écran montrant le bouton + en bas du projet](/assets/images/help/projects-v2/omnibar-add.png)
1. Cliquez sur **Ajouter un élément à partir du dépôt**.
  ![Capture d’écran montrant l’élément de menu « Ajouter un élément à partir du dépôt »](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### Ajout de plusieurs problèmes ou demandes de tirage à partir d’un référentiel

1. Sur {% data variables.location.product_location %}, accédez au dépôt contenant les problèmes ou les demandes de tirage que vous voulez ajouter à votre projet.
{% data reusables.repositories.sidebar-issue-pr %}
1. À gauche de chaque titre de problème, sélectionnez les problèmes que vous souhaitez ajouter à votre projet.
  ![Capture d’écran montrant la case à cocher permettant de sélectionner un problème ou une demande de tirage](/assets/images/help/issues/select-issue-checkbox.png)
1. Si vous le souhaitez, pour sélectionner chaque problème ou demande de tirage de la page, en haut de la liste des problèmes ou demandes de tirage, sélectionnez tout. 
  ![Capture d’écran montrant la case à cocher pour tout sélectionner à l’écran](/assets/images/help/issues/select-all-checkbox.png)
1. Au-dessus de la liste des problèmes ou demandes de tirage, cliquez sur **Projets**. 
  ![Capture d’écran montrant l’option Projets](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Cliquez sur les projets auxquels vous souhaitez ajouter les problèmes ou les demandes de tirage sélectionnés.
  ![Capture d’écran montrant la case à cocher pour tout sélectionner à l’écran](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Attribution d’un projet à partir d’un problème ou d’une demande de tirage

1. Accédez au problème ou à la demande de tirage que vous souhaitez ajouter à un projet.
2. Dans la barre latérale, cliquez sur **Projets**.
  ![Capture d’écran montrant « Projets » dans la barre latérale du problème](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Sélectionnez le projet auquel vous souhaitez ajouter le problème ou la demande de tirage.
  ![Capture d’écran montrant la sélection d’un projet dans la barre latérale du problème](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Si vous le souhaitez, renseignez les champs personnalisés.
  ![Barre latérale Projet](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Utilisation de la palette de commandes pour ajouter un problème ou une demande de tirage

1. {% data reusables.projects.open-command-palette %}
1. Commencez à taper « Ajouter des éléments » et appuyez sur <kbd>Retour</kbd>.
{% data reusables.projects.bulk-add %}

### Création de brouillons de problèmes

Les brouillons de problèmes sont utiles pour capturer rapidement des idées. Contrairement aux problèmes et aux demandes de tirage référencées à partir de vos dépôts, les brouillons de problèmes existent uniquement dans votre projet.

{% data reusables.projects.add-draft-issue %}

Les brouillons de problèmes peuvent être accompagnés d’un titre, d’un corps de texte, de destinataires et de tous les champs personnalisés de votre projet. Pour remplir le référentiel, les étiquettes ou les jalons d’un brouillon de problème, vous devez commencer par convertir ce brouillon de problème en problème. Pour plus d’informations, consultez « [Conversion de brouillons de problèmes en problèmes](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues) ».

{% note %}

**Remarque** : les utilisateurs ne reçoivent pas de notifications lorsqu’ils sont affectés à un brouillon de problème ou y sont mentionnés, sauf si le brouillon de problème est converti en problème.

{% endnote %}
