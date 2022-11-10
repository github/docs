---
title: 'Adición de un {% data variables.projects.project_v2 %} a un equipo'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: Puedes agregar proyectos a equipos para administrar permisos y mejorar la detectabilidad del proyecto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109814'
---
## Acerca de cómo agregar proyectos a equipos

Puedes agregar proyectos a tu equipo para conceder a todo el equipo acceso de colaborador a los proyectos. Al agregar un proyecto a un equipo, ese proyecto aparece en la página de proyectos del equipo, lo que facilita a los miembros identificar qué proyectos usa un equipo determinado.

A los equipos se les concede permiso de lectura en cualquier proyecto al que se les agregue. Este permiso se agrega a los permisos existentes para el proyecto y para los miembros individuales del equipo, lo que garantiza que se conserven los permisos superiores. Para obtener más información sobre cómo establecer permisos para equipos y colaboradores individuales, consulta "[Administración del acceso a los proyectos](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)".

## Adición de un proyecto a un equipo

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Haz clic en {% octicon "project" aria-label="The Projects icon" %} **Proyectos**.
   
   ![Captura de pantalla en la que se muestra la pestaña de proyectos del equipo.](/assets/images/help/organizations/team-project-board-button.png)
   
1. Haga clic en **Add project** (Agregar proyecto).
   
   ![Captura de pantalla en la que se muestra el botón "Agregar proyecto".](/assets/images/help/organizations/team-project-add-project.png)
   
1. Empieza a escribir el nombre del proyecto que quieres agregar y, luego, selecciona el proyecto en la lista de coincidencias.  
   
   {% note %}
   
   **Nota**: Si este cambio provocará un aumento de los permisos del proyecto para los miembros del equipo, {% data variables.product.product_name %} te pedirá que confirmes tu elección.
   
   {% endnote %}
   
   ![Captura de pantalla en la que se muestra el formulario "Agregar proyecto".](/assets/images/help/organizations/team-project-search.png)
   

## Eliminación de un proyecto de un equipo

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
   
1. Junto al equipo que quieres quitar del proyecto, haz clic en **Quitar**.
   
   ![Captura de pantalla en la que se muestra cómo quitar un colaborador](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Información adicional

- [Administración del acceso de un equipo a un {% data variables.product.prodname_project_v1 %} de la organización](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
