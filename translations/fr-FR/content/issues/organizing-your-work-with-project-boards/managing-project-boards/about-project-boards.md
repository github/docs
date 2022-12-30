---
title: 'À propos des {% data variables.product.prodname_projects_v1 %}'
intro: 'Les {% data variables.product.prodname_projects_v1_caps %} sur {% data variables.product.product_name %} vous aident à organiser et prioriser votre travail. Vous pouvez créer des {% data variables.projects.projects_v1_boards %} pour un travail de fonctionnalités spécifique, des feuilles de route complètes ou même des check-lists de mise en production. Avec {% data variables.product.prodname_projects_v1 %}, vous avez la flexibilité de créer des workflows personnalisés qui répondent à vos besoins.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107620'
---
{% data reusables.projects.project_boards_old %}

Les {% data variables.projects.projects_v1_boards_caps %} sont constitués de problèmes, de demandes de tirage et de notes classés comme des cartes dans les colonnes de votre choix. Vous pouvez faire un glisser-déplacer ou utiliser des raccourcis clavier pour réorganiser les cartes dans une colonne, déplacer des cartes d’une colonne à l’autre, et modifier l’ordre des colonnes.

Les cartes de {% data variables.projects.projects_v1_board_caps %} contiennent des métadonnées relatives aux problèmes et demandes de tirage, comme les étiquettes, les destinataires d’attribution, l’état et qui les a ouverts. {% data reusables.project-management.edit-in-project %}

Vous pouvez créer des notes dans les colonnes pour servir de rappels de tâches, de références à des problèmes et des demandes de tirage provenant de n’importe quel dépôt sur {% data variables.location.product_location %}, ou pour ajouter des informations relatives au {% data variables.projects.projects_v1_board %}. Vous pouvez créer une carte de référence pour un autre {% data variables.projects.projects_v1_board %} en ajoutant un lien à une note. Si la note ne répond pas à vos besoins, vous pouvez la convertir en problème. Pour plus d’informations sur la conversion de notes en problèmes, consultez « [Ajout de notes à un {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board) ».

Types de tableaux de projet :

- Le **{% data variables.projects.projects_v1_board %} appartenant à l’utilisateur** peut contenir les problèmes et les demandes de tirage de n’importe quel dépôt personnel.
- Le **{% data variables.projects.projects_v1_board %} à l’échelle de l’organisation** peut contenir les problèmes et les demandes de tirage de n’importe quel dépôt appartenant à une organisation.  {% data reusables.project-management.link-repos-to-project-board %} Pour plus d’informations, consultez « [Liaison d’un dépôt à un {% data variables.product.prodname_project_v1 %} ](/articles/linking-a-repository-to-a-project-board) ».
- Le **{% data variables.projects.projects_v1_board %} de dépôt** est limité aux problèmes et aux demandes de tirage d’un seul dépôt. Ils peuvent également inclure des notes qui référencent des problèmes et des demandes de tirage se trouvant dans d’autres dépôts.

## Création et affichage de {% data variables.projects.projects_v1_boards %}

Pour créer un {% data variables.projects.projects_v1_board %} pour votre organisation, vous devez être membre de l’organisation. Les propriétaires d’organisation et les personnes avec des autorisations d’administration de {% data variables.projects.projects_v1_board %} peuvent personnaliser l’accès au {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Si un {% data variables.projects.projects_v1_board %} appartenant à l’organisation contient les problèmes ou les demandes de tirage d’un dépôt que vous n’avez pas l’autorisation de consulter, la carte est rédigée.  Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) ».

La vue d’activité affiche l’historique récent du {% data variables.projects.projects_v1_board %}, comme les cartes qui ont été créées ou déplacées entre des colonnes. Pour accéder à la vue d’activité, cliquez sur **Menu**, puis faites défiler vers le bas.

Pour rechercher des cartes spécifiques sur un {% data variables.projects.projects_v1_board %} ou voir une partie des cartes, vous pouvez filtrer sur les cartes du {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Filtrage des cartes d’un {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board) ».

Pour simplifier votre workflow et laisser les tâches terminées en dehors de votre {% data variables.projects.projects_v1_board %}, vous pouvez archiver des cartes. Pour plus d’informations, consultez « [Archivage des cartes d’un {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board) ».

Si vous avez terminé toutes les tâches de votre {% data variables.projects.projects_v1_board %} ou que vous n’avez plus besoin d’un {% data variables.projects.projects_v1_board %}, vous pouvez fermer le {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Fermeture d’un {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board) ».

Vous pouvez également [désactiver les {% data variables.projects.projects_v1_boards %} dans un dépôt](/articles/disabling-project-boards-in-a-repository) ou [désactiver les {% data variables.projects.projects_v1_boards %} dans votre organisation](/articles/disabling-project-boards-in-your-organization), si vous préférez suivre votre travail d’une autre manière.

{% data reusables.project-management.project-board-import-with-api %}

## Modèles pour les {% data variables.projects.projects_v1_boards %}

Vous pouvez utiliser des modèles pour configurer rapidement un nouveau {% data variables.projects.projects_v1_board %}. Lorsque vous utilisez un modèle pour créer un {% data variables.projects.projects_v1_board %}, votre nouveau panneau inclut des colonnes ainsi que des cartes avec des conseils pour utiliser les {% data variables.product.prodname_projects_v1 %}. Vous pouvez également choisir un modèle avec l’automatisation déjà configurée.

| Modèle | Description |
| --- | --- |
| Kanban de base | Effectuer le suivi de vos tâches avec les colonnes À faire, En cours et Terminé |
| Kanban automatisé | Les cartes se déplacent automatiquement entre les colonnes À faire, En cours et Terminé | 
| Kanban automatisé avec révision | Les cartes se déplacent automatiquement entre les colonnes À faire, En cours et Terminé, avec des déclencheurs supplémentaires pour l’état de révision des demandes de tirage |
| Triage des bogues | Triage et classement par ordre de priorité des bogues avec les colonnes À faire, Priorité haute, Priorité basse et Fermé |

Pour plus d’informations sur l’automatisation de {% data variables.product.prodname_projects_v1 %}, consultez « [À propos de l’automatisation des {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards) ».

![{% data variables.product.prodname_project_v1 %} avec un modèle kanban de base](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Pour aller plus loin

- « [Création d’un {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board) »
- « [Modification d’un {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board) »{% ifversion fpt or ghec %}
- « [Copie d’un {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board) »{% endif %}
- « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) »
- « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) »
- « [Raccourcis clavier](/articles/keyboard-shortcuts/#project-boards) »
