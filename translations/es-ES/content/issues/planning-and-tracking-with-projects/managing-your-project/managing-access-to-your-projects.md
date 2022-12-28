---
title: 'Administración del acceso a {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Aprende a administrar el acceso individual y del equipo a la instancia de {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9c414ab3bfbbd9bbf488a73e5dd2600458074914
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109959'
---
## Acerca del acceso a los proyectos

Los administradores de proyectos a nivel de organización pueden administrar el acceso para toda la organización, para los equipos, para los miembros de la organización y para los colaboradores externos. 

Los administradores de los proyectos a nivel de usuario pueden invitar a los colaboradores individuales y administrar su acceso.

Los administradores de proyectos también pueden controlar la visibilidad del proyecto para cualquiera en la internet. Para obtener más información, vea "[Administración de la visibilidad de los proyectos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## Administrar el acceso para los proyectos a nivel organizacional

### Administrar el acceso para todos en tu organización

El rol base predeterminado es `write`, lo que significa que todos en la organización pueden ver y editar su proyecto. Para cambiar el acceso del proyecto para todos en la organización, puedes cambiar el rol base. Los cambios al rol base sólo afectarán a los miembros de la organización que no sean propietarios y a los que no se les haya otorgado acceso individual.

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
2. En **Base role** (Rol base), seleccione el rol predeterminado.
   ![Captura de pantalla en la que se muestra el menú de roles base](/assets/images/help/projects-v2/base-role.png)
   - **Sin acceso**: solo los propietarios de la organización y los usuarios a los que se les ha otorgado acceso individual pueden ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Lectura**: todos los usuarios de la organización pueden ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Escritura**: todos los usuarios de la organización pueden ver y editar el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Administrador**: todos los usuarios de la organización son administradores del proyecto.

### Administrar el acceso para los equipos y miembros individuales de tu organización

También puedes agregar equipos, colaboradores externos y miembros individuales de la organización como colaboradores para un proyecto a nivel organizacional. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

{% ifversion projects-v2-add-to-team %}

Si concedes a un equipo permisos de lectura o uno superior para un proyecto, el proyecto también se muestra en la página de proyectos del equipo. También puedes agregar proyectos a un equipo en la página de proyectos del equipo. Para obtener más información, consulta "[Incorporación del proyecto a un equipo](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)".  

{% endif %}

Solo puedes invitar a un usuario individual para que colabore con tu proyecto a nivel organizacional si ya es miembro de la organización o a un colaborador externo en por lo menos un repositorio de la organización.

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
2. En **Invite collaborators** (Invitar a colaboradores), busque el equipo o el usuario individual que quiere invitar.
   ![Captura de pantalla en la que se muestra la búsqueda de un colaborador](/assets/images/help/projects-v2/access-search.png)
3. Selecciona el rola para el colaborador.
   ![Captura de pantalla en la que se muestra la selección de un rol](/assets/images/help/projects-v2/access-role.png)
   - **Lectura**: el equipo o la persona puede ver el proyecto.
   - **Escritura**: el equipo o la persona puede ver y editar el proyecto.
   - **Administrador**: el equipo o la persona puede ver, editar y agregar nuevos colaboradores al proyecto.
4. Haga clic en **Invitar**.
   ![Captura de pantalla en la que se muestra el botón Invitación](/assets/images/help/projects-v2/access-invite.png)

### Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
1. En **Manage access** (Administrar acceso), busque los colaboradores cuyos permisos quiere modificar.

   Puede usar los menús desplegables **Type** (Tipo) y **Role** (Rol) para filtrar la lista de acceso.
   ![Captura de pantalla en la que se muestra un colaborador](/assets/images/help/projects-v2/access-find-member.png)

1. Edita el rol para el colaborador.
   ![Captura de pantalla en la que se muestra cómo cambiar el rol de un colaborador](/assets/images/help/projects-v2/access-change-role.png)
1. Opcionalmente, haz clic en **Quitar** para quitar los colaboradores.
   ![Captura de pantalla en la que se muestra cómo quitar un colaborador](/assets/images/help/projects-v2/access-remove-member.png)

## Administrar el acceso para los proyectos a nivel de usuario

### Otorgar un acceso de colaborador a tu proyecto

{% note %}

Esto solo afecta a los colaboradores para tu proyecto, no a los repositorios de este. Para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece el elemento. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este. Para obtener más información, vea "[Configuración de la visibilidad del repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" y "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
2. En **Invite collaborators** (Invitar a colaboradores), busque el usuario al que quiere invitar.
   ![Captura de pantalla en la que se muestra la búsqueda de un colaborador](/assets/images/help/projects-v2/access-search.png)
3. Selecciona el rola para el colaborador.
   ![Captura de pantalla en la que se muestra la selección de un rol](/assets/images/help/projects-v2/access-role.png)
   - **Lectura**: la persona puede ver el proyecto.
   - **Escritura**: la persona puede ver y editar el proyecto.
   - **Administrador**: la persona puede ver, editar y agregar nuevos colaboradores al proyecto.
4. Haga clic en **Invitar**.
   ![Captura de pantalla en la que se muestra el botón Invitación](/assets/images/help/projects-v2/access-invite.png)

### Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
   ![Captura de pantalla en la que se muestra el elemento "Administrar acceso"](/assets/images/help/projects-v2/manage-access.png)
1. En **Manage access** (Administrar acceso), busque los colaboradores cuyos permisos quiere modificar.

   Puede usar los menús desplegables **Type** (Tipo) y **Role** (Rol) para filtrar la lista de acceso.
   ![Captura de pantalla en la que se muestra un colaborador](/assets/images/help/projects-v2/access-find-member.png)

1. Edita el rol para el colaborador.
   ![Captura de pantalla en la que se muestra cómo cambiar el rol de un colaborador](/assets/images/help/projects-v2/access-change-role.png)
1. Opcionalmente, haz clic en **Quitar** para quitar los colaboradores.
   ![Captura de pantalla en la que se muestra cómo quitar un colaborador](/assets/images/help/projects-v2/access-remove-member.png)
