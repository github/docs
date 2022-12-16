---
title: 'À propos de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}'
intro: 'Vous pouvez configurer des workflows automatiques pour garder l’état des cartes de {% data variables.projects.projects_v1_board %} synchronisé avec les problèmes et demandes de tirage associés.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108404'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_projects_v1_caps %}](/articles/project-board-permissions-for-an-organization) d’une organisation ».

Vous pouvez automatiser des actions basées sur le déclenchement d’événements pour les colonnes de {% data variables.projects.projects_v1_board %}. Cela enlève certaines tâches manuelles dans la gestion d’un {% data variables.projects.projects_v1_board %}. Par exemple, vous pouvez configurer une colonne « À faire », où l’ensemble des nouveaux problèmes ou des nouvelles demandes de tirage que vous ajoutez à un {% data variables.projects.projects_v1_board %} sont automatiquement déplacés vers la colonne configurée. Pour plus d’informations, consultez « [Configuration de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards) ».  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

L’automatisation de {% data variables.projects.projects_v1_board_caps %} peut aussi aider les équipes à développer une compréhension commune de l’objectif d’un {% data variables.projects.projects_v1_board %} et le processus de développement de l’équipe en créant un workflow standard pour certaines actions.

{% data reusables.project-management.resync-automation %}

## Options d’automatisation

| Présélection de colonne | Options de configuration |
| --- | --- |
| Actions à effectuer | <ul><li>Déplacer tous les problèmes récemment ajoutés ici</li><li>Déplacer toutes les demandes de tirage récemment ajoutées ici</li><li>Déplacer tous les problèmes rouverts ici</li><li>Déplacer toutes les demandes de tirage rouvertes ici</li></ul> |
| En cours | <ul><li>Déplacer toutes les demandes de tirage récemment ouvertes ici</li><li>Déplacer tous les problèmes rouverts ici</li><li>Déplacer toutes les demandes de tirage rouvertes ici</li><li>Déplacer toutes les demandes de tirage qui respectent le nombre minimal de révisions requises de la branche de base ici</li><li>Déplacer toutes les demandes de tirage qui ne respectent plus le nombre minimal de révisions requises de la branche de base ici</li></ul> |
| Terminé | <ul><li>Déplacer tous les problèmes fermés ici</li><li>Déplacer toutes les demandes de tirage fusionnées ici</li><li>Déplacer toutes les demandes de tirage non fusionnées fermées ici</li></ul> |

## Suivi de la progression d’un projet

Vous pouvez suivre la progression sur votre {% data variables.projects.projects_v1_board %}. Les cartes figurant dans les colonnes « À faire », « En cours » ou « Terminé » sont prises en compte dans la progression globale du projet. {% data reusables.project-management.project-progress-locations %}

Pour plus d’informations, consultez « [Suivi de la progression dans votre {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board) ».

## Pour aller plus loin
- « [Configuration de l’automatisation pour les {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards) »{% ifversion fpt or ghec %}
- « [Copie d’un {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board) »{% endif %}
