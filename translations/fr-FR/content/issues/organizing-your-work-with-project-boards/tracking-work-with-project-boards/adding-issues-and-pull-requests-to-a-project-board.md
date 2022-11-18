---
title: 'Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez ajouter des problèmes et des demandes de tirage à un {% data variables.projects.projects_v1_board %} sous la forme de cartes et les trier en colonnes.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108708'
---
{% data reusables.projects.project_boards_old %}

Vous pouvez ajouter des cartes de demande de tirage ou de problème à votre {% data variables.projects.projects_v1_board %} en procédant comme suit :
- Faites glisser les cartes à partir de la section **Triage** dans la barre latérale.
- Tapez l’URL du problème ou de la demande de tirage dans une carte.
- Recherchez des problèmes ou des demandes de tirage dans la barre latérale de recherche du {% data variables.projects.projects_v1_board %}.

Vous pouvez placer au maximum 2 500 cartes dans chaque colonne de projet. Si une colonne a atteint le nombre maximal de cartes, aucune carte ne pourra être déplacée dans cette colonne.

![Le curseur déplace la carte de problème de la barre latérale de triage vers la colonne de tableau de projet](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Remarque :** Vous pouvez également ajouter des notes à votre panneau de projet qui serviront de rappels de tâches, de références aux problèmes et demandes de tirage de n’importe quel dépôt de {% data variables.product.product_name %}. Elles peuvent également être utilisées pour ajouter des informations connexes à votre {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Ajout de notes à un tableau de projet](/articles/adding-notes-to-a-project-board) ».

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Lorsque vous recherchez des problèmes et des demandes de tirage en vue de les ajouter à votre {% data variables.projects.projects_v1_board %}, la recherche s’étend automatiquement à vos dépôts associés. Vous pouvez supprimer ces qualificateurs afin d’effectuer la recherche dans tous les dépôts de l’organisation. Pour plus d’informations, consultez « [Liaison d’un dépôt à un tableau de projet](/articles/linking-a-repository-to-a-project-board) ».

## Ajout de problèmes et de demandes de tirage à un {% data variables.projects.projects_v1_board %}

1. Accédez au {% data variables.projects.projects_v1_board %} où vous souhaitez ajouter des problèmes et des demandes de tirage.
2. Dans votre {% data variables.projects.projects_v1_board %}, cliquez sur {% octicon "plus" aria-label="The plus icon" %} **Ajouter des cartes**.
![Bouton Ajouter des cartes](/assets/images/help/projects/add-cards-button.png)
3. Recherchez les problèmes et les demandes de tirage à ajouter à votre {% data variables.projects.projects_v1_board %} en utilisant des qualificateurs de recherche. Pour plus d’informations sur les qualificateurs de recherche que vous pouvez utiliser, consultez « [Rechercher des problèmes](/articles/searching-issues) ».
  ![Rechercher des problèmes et des demandes de tirage](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Conseils :**
    - Vous pouvez également ajouter un problème ou une demande de tirage en tapant l’URL dans une carte.
    - Si vous travaillez sur une fonctionnalité spécifique, vous pouvez appliquer une étiquette à chaque problème ou demande de tirage associés pour cette fonctionnalité, puis ajouter facilement des cartes à votre {% data variables.projects.projects_v1_board %} en recherchant le nom de l’étiquette. Pour plus d’informations, consultez « [Appliquer des étiquettes aux problèmes et aux demandes de tirage](/articles/applying-labels-to-issues-and-pull-requests) ».

  {% endtip %}
4. Dans la liste filtrée des problèmes et des demandes de tirage, faites glisser la carte que vous souhaitez ajouter à votre {% data variables.projects.projects_v1_board %} et déposez-la dans la colonne souhaitée. Vous pouvez également déplacer des cartes à l’aide des raccourcis clavier. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Conseil :** Vous pouvez utiliser un glisser-déposer ou des raccourcis clavier pour réorganiser les cartes et les déplacer d’une colonne à l’autre. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Ajout de problèmes et de demandes de tirage à un {% data variables.projects.projects_v1_board %} à partir de la barre latérale

1. À droite d’un problème ou d’une demande de tirage, cliquez sur **Projets {% octicon "gear" aria-label="The Gear icon" %}** .
  ![Bouton Tableau de projet dans la barre latérale](/assets/images/help/projects/sidebar-project.png)
2. Cliquez sur les onglets **Récents**, **Dépôt**, puis **Utilisateur** ou **Organisation** du {% data variables.projects.projects_v1_board %} dans lequel vous souhaitez effectuer des ajouts.
  ![Onglets Récents, Dépôt et Organisation](/assets/images/help/projects/sidebar-project-tabs.png)
3. Tapez le nom du projet dans le champ **Filtrer les projets**.
  ![Zone de recherche du tableau de projet](/assets/images/help/projects/sidebar-search-project.png)
4. Sélectionnez un ou plusieurs {% data variables.projects.projects_v1_boards %} où vous voulez ajouter le problème ou la demande de tirage.
  ![Tableau de projet sélectionné](/assets/images/help/projects/sidebar-select-project.png)
5. Cliquez sur {% octicon "triangle-down" aria-label="The down triangle icon" %}, puis cliquez sur la colonne où vous souhaitez placer votre problème ou votre demande de tirage. La carte se déplace vers le bas de la colonne du {% data variables.projects.projects_v1_board %} que vous sélectionnez.
  ![Menu - Déplacer la carte vers la colonne](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Pour aller plus loin

- « [À propos des {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
- « [Modification d’un {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board) »
- « [Filtrage des cartes d’un {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board) »
