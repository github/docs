---
title: 'Création d’un {% data variables.product.prodname_project_v1 %}'
intro: 'Les {% data variables.projects.projects_v1_boards_caps %} peuvent être utilisés pour créer des workflows personnalisés en fonction de vos besoins, comme suivre et prioriser un travail de fonctionnalités spécifique, des feuilles de route complètes ou même des check-lists de mise en production.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108773'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Pour plus d’informations, consultez « [Liaison d’un dépôt à un {% data variables.product.prodname_project_v1 %} ](/articles/linking-a-repository-to-a-project-board) ».

Une fois que vous avez créé votre {% data variables.projects.projects_v1_board %}, vous pouvez y ajouter des problèmes, des demandes de tirage et des notes. Pour plus d’informations, consultez « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) » et « [Ajout de notes à un {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board) ».

Vous pouvez également configurer des automatisations de workflow pour que votre {% data variables.projects.projects_v1_board %} soit synchronisé avec l’état des problèmes et des demandes de tirage. Pour plus d’informations, consultez « [À propos de l’automatisation des {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards) ».

{% data reusables.project-management.project-board-import-with-api %}

## Création d’un {% data variables.projects.projects_v1_board %} appartenant à l’utilisateur

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. En haut de votre page de profil, dans le volet de navigation principal, cliquez sur {% octicon "project" aria-label="The project board icon" %} **Projets**.
![Onglet Projet](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Création d’un {% data variables.projects.projects_v1_board %} à l’échelle de l’organisation

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**Remarque :** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Création d’un {% data variables.projects.projects_v1_board %} de dépôt

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. Sous le nom de votre référentiel, cliquez sur {% octicon "project" aria-label="The project board icon" %} **Projets**.
![Onglet Projet](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Pour aller plus loin

- « [À propos des tableaux de projet](/articles/about-project-boards) »
- « [Modification d’une carte de projet](/articles/editing-a-project-board) »{% ifversion fpt or ghec %}
- « [Copie d’une carte de projet](/articles/copying-a-project-board) »{% endif %}
- « [Fermeture d’un tableau de projet](/articles/closing-a-project-board) »
- « [À propos de l’automatisation pour les tableaux de projet](/articles/about-automation-for-project-boards) »
