---
title: 'Creación de una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Las instancias de {% data variables.projects.projects_v1_boards_caps %} se pueden usar para crear flujos de trabajo personalizados de acuerdo con tus necesidades, como realizar el seguimiento y priorizar trabajos con características específicas, hojas de ruta completas y hasta listas de comprobación de versiones.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110144'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Para más información, consulta "[Vinculación de un repositorio a una instancia de {% data variables.product.prodname_project_v1 %} ](/articles/linking-a-repository-to-a-project-board)".

Una vez que se ha creado la instancia de {% data variables.projects.projects_v1_board %}, puedes agregarle incidencias, solicitudes de incorporación de cambios y notas. Para más información, consulta "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)" y "[Adición de notas a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

También puedes configurar automatizaciones de flujo de trabajo para mantener la instancia de {% data variables.projects.projects_v1_board %} sincronizada con el estado de las incidencias y las solicitudes de incorporación de cambios. Para más información, consulta "[Acerca de la automatización para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.project-board-import-with-api %}

## Creación de una instancia de {% data variables.projects.projects_v1_board %} propiedad del usuario

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. En la parte superior de la página de perfil, en la navegación principal, haga clic en {% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Proyecto](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Creación de una instancia de {% data variables.projects.projects_v1_board %} para toda la organización

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**Nota:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Creación de una instancia de {% data variables.projects.projects_v1_board %} de repositorio

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. En el nombre del repositorio, haga clic en {% octicon "project" aria-label="The project board icon" %} **Proyectos**.
![Pestaña Proyecto](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Haz clic en **Proyectos (clásico)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Información adicional

- "[Acerca de los paneles de proyecto](/articles/about-project-boards)"
- "[Edición de un panel de proyecto](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copia de un panel de proyecto](/articles/copying-a-project-board)"{% endif %}
- "[Cierre de un panel de proyecto](/articles/closing-a-project-board)"
- "[Acerca de la automatización de los paneles de proyecto](/articles/about-automation-for-project-boards)"
