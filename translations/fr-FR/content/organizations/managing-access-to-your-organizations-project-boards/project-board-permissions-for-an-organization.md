---
title: 'Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation'
intro: 'Les propriétaires d’organisation et les personnes avec des autorisations d’administration de {% data variables.projects.projects_v1_board %} peuvent personnaliser qui va avoir des autorisations en lecture, en écriture et en administration sur les {% data variables.projects.projects_v1_boards %} de votre organisation.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614206'
---
{% data reusables.projects.project_boards_old %}

## Vue d’ensemble des autorisations

Il existe trois niveaux d’autorisations pour un {% data variables.projects.projects_v1_board %} pour les personnes et les équipes :

{% data reusables.project-management.project-board-permissions %}

Les propriétaires d’organisations et les personnes disposant d’autorisations d’administration peuvent accorder à une personne l’accès à un {% data variables.projects.projects_v1_board %} d’organisation individuellement, en tant que collaborateur externe ou membre de l’organisation, ou par le biais de son appartenance à une équipe ou à une organisation. Un collaborateur externe est une personne qui n’est pas membre de l’organisation, mais qui dispose des autorisations nécessaires pour collaborer dans votre organisation.

Les propriétaires d’organisation et les personnes avec des autorisations d’administration sur un {% data variables.projects.projects_v1_board %} peuvent également :
- Définir les autorisations de tableau de projet par défaut pour tous les membres de l’organisation.
- Gérer l’accès au tableau de projet pour les membres de l’organisation, les équipes et les collaborateurs externes. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-team-access-to-an-organization-project-board) », « [Gestion de l’accès d’une personne à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-an-individual-s-access-to-an-organization-project-board) » ou « [Gestion de l’accès à un {% data variables.product.prodname_project_v1 %} pour les membres de l’organisation](/articles/managing-access-to-a-project-board-for-organization-members) ».
- Gérer la visibilité du tableau de projet. Pour plus d’informations, consultez « [Gestion de l’accès à un {% data variables.product.prodname_project_v1 %} pour les membres de l’organisation](/articles/managing-access-to-a-project-board-for-organization-members) »

## Autorisations en cascade pour les {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Par exemple, si un propriétaire d’organisation a donné à tous les membres de l’organisation des autorisations en lecture sur un {% data variables.projects.projects_v1_board %} et qu’un administrateur de {% data variables.projects.projects_v1_board %} donne à un membre de l’organisation des autorisations en écriture sur ce panneau en tant que collaborateur individuel, cette personne aura des autorisations en écriture sur le {% data variables.projects.projects_v1_board %}.

## Visibilité des {% data variables.projects.projects_v1_board_caps %}

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Vous pouvez changer la visibilité du {% data variables.projects.projects_v1_board %} en la faisant passer de privée à {% ifversion ghae %}interne{% else %}public{% endif %} et en la remettant en privée. Pour plus d’informations, consultez « [Changement de la visibilité d’un {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility) ».

## Pour aller plus loin

- « [Changement de la visibilité d’un {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility) »
- « [Gestion de l’accès d’une personne à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-an-individual-s-access-to-an-organization-project-board) »
- « [Gestion de l’accès d’une équipe à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-team-access-to-an-organization-project-board) »
- « [Gestion de l’accès à un {% data variables.product.prodname_project_v1 %} pour les membres de l’organisation](/articles/managing-access-to-a-project-board-for-organization-members) »
