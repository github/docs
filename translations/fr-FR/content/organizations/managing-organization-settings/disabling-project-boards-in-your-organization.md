---
title: 'Désactivation de {% ifversion projects-v2 %}projets{% else %}panneaux de projet{% endif %} dans votre organisation'
intro: 'Les propriétaires d’organisation peuvent désactiver {% ifversion projects-v2 %}les {% data variables.projects.projects_v2 %} à l’échelle de l’entreprise, les {% data variables.projects.projects_v1_boards %} à l’échelle de l’entreprise et les {% data variables.projects.projects_v1_boards %}au niveau du dépôt{% else %}les panneaux de projet à l’échelle de l’organisation et les panneaux de projet de dépôt{% endif %} dans une organisation.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423323'
---
Quand vous désactivez les tableaux de projet au niveau de l’organisation, vous ne pouvez pas en créer de nouveaux, et les tableaux de projet existants deviennent inaccessibles sur leurs URL précédentes. Les tableaux de projet dans les dépôts de l’organisation ne sont pas affectés. {% ifversion projects-v2 %}Ces paramètres s’appliquent aux {% data variables.projects.projects_v2 %} et aux {% data variables.projects.projects_v1_boards %}.{% endif %}

Quand vous désactivez les tableaux de projet de dépôt dans une organisation, vous ne pouvez plus en créer de nouveaux dans les dépôts de l’organisation, et les tableaux de projet existants ne sont plus accessibles sur leurs URL précédentes. Les tableaux de projet au niveau de l’organisation ne sont pas affectés.


Quand vous désactivez les tableaux de projet, vous ne voyez plus les informations de tableau de projet dans les chronologies ni les [journaux d’audit](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Dans la section « Planification de code et automatisation » de la barre latérale, cliquez sur **{% octicon "table" aria-label="The table icon" %} Projets**.
{% endif %}
1. Déterminez s’il faut désactiver les tableaux de projet à l’échelle de l’organisation, désactiver les tableaux de projet de dépôt dans l’organisation ou les deux. Ensuite, sous « Projets » :
    - Pour désactiver les tableaux de projet à l’échelle de l’organisation, désélectionnez **Activer les projets pour l’organisation**.
    - Pour désactiver les tableaux de projet de dépôt dans l’organisation, désélectionnez **Activer les projets pour tous les dépôts**.
  ![Cases à cocher pour désactiver les projets d’une organisation ou de tous les dépôts d’une organisation](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Cliquez sur **Enregistrer**.

{% data reusables.organizations.disable_project_board_results %}

## Pour aller plus loin

{% ifversion projects-v2 %}- « [À propos de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) »{% endif %}
- « [À propos de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
- « [Fermeture d’un {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board) »
- « [Suppression d’un {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board) »
- « [Désactivation de {% data variables.projects.projects_v1_boards %} dans un dépôt](/articles/disabling-project-boards-in-a-repository) »
