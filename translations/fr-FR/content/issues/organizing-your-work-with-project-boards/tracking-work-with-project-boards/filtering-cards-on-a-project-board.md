---
title: 'Filtrage des cartes d’un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez filtrer les cartes d’un {% data variables.projects.projects_v1_board %} pour rechercher des cartes spécifiques ou afficher une partie des cartes.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108636'
---
{% data reusables.projects.project_boards_old %}

Dans une carte, vous pouvez cliquer sur n’importe quel destinataire, jalon ou étiquette pour filtrer le {% data variables.projects.projects_v1_board %} avec ce qualificateur. Pour effacer la recherche, vous pouvez cliquer à nouveau sur le même destinataire, jalon ou étiquette.

Vous pouvez également utiliser la barre de recherche « Filtrer les cartes » en haut de chaque {% data variables.projects.projects_v1_board %} pour rechercher des cartes. Vous pouvez filtrer des cartes à l’aide des qualificateurs de recherche suivants avec n’importe quelle combinaison, ou en tapant simplement le texte que vous souhaitez rechercher.

- Filtrer les cartes par auteur à l’aide de `author:USERNAME`
- Filtrer les cartes par destinataire à l’aide de `assignee:USERNAME` ou `no:assignee`
- Filtrer les cartes par étiquette à l’aide de `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` ou `no:label`
- Filtrer par jalon à l’aide de `milestone:MY-MILESTONE`
- Filtrer les cartes par état à l’aide de `state:open`, `state:closed` ou `state:merged`
- Filtrer par état de révision à l’aide de `review:none`, `review:required`, `review:approved` ou `review:changes_requested`
- Filtrer par état de vérification à l’aide de `status:pending`, `status:success` ou `status:failure`
- Filtrer les cartes par type à l’aide de `type:issue`, `type:pr` ou `type:note`
- Filtrer les cartes par état et par type à l’aide de `is:open`, `is:closed` ou `is:merged`, et de `is:issue`, `is:pr` ou `is:note`
- Filtrer les cartes selon les problèmes qui sont liés à une demande de tirage par une référence fermante avec `linked:pr`
- Filtrer les cartes par dépôt dans un {% data variables.projects.projects_v1_board %} à l’échelle de l’organisation avec `repo:ORGANIZATION/REPOSITORY`

1. Accédez au {% data variables.projects.projects_v1_board %} qui contient les cartes que vous souhaitez filtrer.
2. Au-dessus des colonnes de carte de projet, cliquez dans la barre de recherche « Filtrer les cartes » et tapez une requête de recherche pour filtrer les cartes.
![Barre de recherche pour filtrer les cartes](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Conseil :** Vous pouvez glisser-déposer des cartes filtrées ou utiliser des raccourcis clavier pour les déplacer d’une colonne à l’autre. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
- « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) »
- « [Ajout de notes à un {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board) »
