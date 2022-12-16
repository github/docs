---
title: 'Gestion de l’accès à un {% data variables.product.prodname_project_v1 %} pour les membres de l’organisation'
intro: 'En tant que propriétaire d’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez définir un niveau d’autorisation par défaut d’un {% data variables.projects.projects_v1_board %} pour tous les membres de l’organisation.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108593'
---
{% data reusables.projects.project_boards_old %}

Par défaut, les membres de l’organisation ont un accès en écriture aux {% data variables.projects.projects_v1_boards %} de l’organisation sauf si les propriétaires de l’organisation ou les administrateurs de {% data variables.projects.projects_v1_board %} définissent des autorisations différentes pour des {% data variables.projects.projects_v1_boards %} spécifiques.

## Définition d’un niveau d’autorisation de base pour tous les membres de l’organisation

{% tip %}

**Conseil :** Vous pouvez accorder à un membre de l’organisation des autorisations plus élevées pour un {% data variables.projects.projects_v1_board %}. Pour plus d’informations, consultez « [Autorisations de tableau de projet pour une organisation](/articles/project-board-permissions-for-an-organization) ».

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. Sous « Autorisation des membres de l’organisation », choisissez un niveau d’autorisation de base pour tous les membres de l’organisation : **Lecture**, **Écriture**, **Administrateur** ou **Aucun**.
![Options d’autorisation de tableau de projet de base pour tous les membres de l’organisation](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Cliquez sur **Enregistrer**.

## Pour aller plus loin

- « [Gestion de l’accès d’une personne à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-an-individual-s-access-to-an-organization-project-board) »
- « [Gestion de l’accès d’une équipe à un {% data variables.product.prodname_project_v1 %} de l’organisation](/articles/managing-team-access-to-an-organization-project-board) »
- « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) »
