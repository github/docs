---
title: 'Erstellen eines {% data variables.product.prodname_project_v1 %}'
intro: 'Mit {% data variables.projects.projects_v1_boards_caps %} kannst du benutzerdefinierte Workflows entsprechend deinen Anforderungen erstellen, beispielsweise für die Nachverfolgung und Priorisierung spezifischer Arbeit an Funktionen, umfassender Roadmaps oder sogar Release-Checklisten.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109791'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Weitere Informationen findest du unter [Verknüpfen eines Repositorys mit einem {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board).

Nachdem du dein {% data variables.projects.projects_v1_board %} erstellt hast, kannst du ihm Issues, Pull Requests und Notizen hinzufügen. Weitere Informationen findest du unter [Hinzufügen von Issues und Pull Requests zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) und [Hinzufügen von Notizen zu einem {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board).

Du kannst auch Workflowautomatisierungen konfigurieren, um dein {% data variables.projects.projects_v1_board %} mit dem Status vonn Issues und Pull Requests zu synchronisieren. Weitere Informationen findest du unter [Informationen zur Automatisierung für {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards).

{% data reusables.project-management.project-board-import-with-api %}

## Erstellen eines benutzereigenen {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. Klicke oben auf deiner Profilseite in der Hauptnavigation auf {% octicon "project" aria-label="The project board icon" %} **Projekte**.
![Registerkarte „Projekte“](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Erstellen eines organisationsweiten {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**Hinweis:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Erstellen eines organisationsweiten {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. Klicke unter dem Namen des Repositorys auf {% octicon "project" aria-label="The project board icon" %} **Projekte**.
![Registerkarte „Projekte“](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Klicke auf **Projekte (klassisch)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Weiterführende Themen

- [Informationen zu Projektboards](/articles/about-project-boards)
- [Bearbeiten eines Projektboards](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [Ein Projektboard kopieren](/articles/copying-a-project-board){% endif %}
- [Schließen eines Projektboards](/articles/closing-a-project-board)
- [Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards)
