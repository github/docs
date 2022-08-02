---
title: 'Managing access to your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Learn how to manage team and individual access to your {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---


## Acerca del acceso a los proyectos

Los administradores de proyectos a nivel de organización pueden administrar el acceso para toda la organización, para los equipos, para los miembros de la organización y para los colaboradores externos.

Los administradores de los proyectos a nivel de usuario pueden invitar a los colaboradores individuales y administrar su acceso.

Los administradores de proyectos también pueden controlar la visibilidad del proyecto para cualquiera en la internet. Para obtener más información, consulta la sección "[Adminsitrar la visibilidad de tus proyectos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## Administrar el acceso para los proyectos a nivel organizacional

### Administrar el acceso para todos en tu organización

El rol base predeterminado es `write`, lo cual significa que todos en la organización pueden ver y editar tu proyecto. Para cambiar el acceso del proyecto para todos en la organización, puedes cambiar el rol base. Los cambios al rol base sólo afectarán a los miembros de la organización que no sean propietarios y a los que no se les haya otorgado acceso individual.

{% data reusables.projects.project-settings %}
1. Haz Clic en **Administrar el acceso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Debajo de **Rol base**, selecciona el rol principal. ![Screenshot showing the base role menu](/assets/images/help/projects-v2/base-role.png)
   - **Sin acceso**: Únicamente los propietarios de las organizaciones y usuarios con acceso individual pueden ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Lectura**: Cualquiera en la organización puede ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Escritura**: Cualquiera en la organización puede ver y editar el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Administración**: Cualquiera en la organización es un administrador del proyecto.

### Administrar el acceso para los equipos y miembros individuales de tu organización

También puedes agregar equipos, colaboradores externos y miembros individuales de la organización como colaboradores para un proyecto a nivel organizacional. Para obtener más información, consulta la sección "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

Solo puedes invitar a un usuario individual para que colabore con tu proyecto a nivel organizacional si ya es miembro de la organización o a un colaborador externo en por lo menos un repositorio de la organización.

{% data reusables.projects.project-settings %}
1. Haz Clic en **Administrar el acceso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Debajo de **Invitar colaboradores**, busca al equipo o usuario individual que quieras invitar. ![Screenshot showing searching for a collaborator](/assets/images/help/projects-v2/access-search.png)
3. Select the role for the collaborator. ![Screenshot showing selecting a role](/assets/images/help/projects-v2/access-role.png)
   - **Lectura**: El equipo o individuo puede ver el proyecto.
   - **Escritura**: El equipo o individuo puede ver y editar el proyecto.
   - **Administrador**: El equipo o individuo puede ver, editar y agregar colaboradores nuevos al proyecto.
4. Haz clic en **Invitar**. ![Screenshot showing the invite button](/assets/images/help/projects-v2/access-invite.png)

### Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haz Clic en **Administrar el acceso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
1. Debajo de **Administrar acceso**, encuentra al(los) colaborador(es) cuyos permisos quieras modificar.

   Puedes utilizar los menús de **Tipo** y **Rol** para filtrar la lista de acceso. ![Screenshot showing a collaborator](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s). ![Screenshot showing changing a collaborator's role](/assets/images/help/projects-v2/access-change-role.png)
1. Optionally, click **Remove** to remove the collaborator(s). ![Screenshot showing removing a collaborator](/assets/images/help/projects-v2/access-remove-member.png)

## Administrar el acceso para los proyectos a nivel de usuario

### Otorgar un acceso de colaborador a tu proyecto

{% note %}

Esto solo afecta a los colaboradores para tu proyecto, no a los repositorios de este. Para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece el elemento. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este. Para obtener más información, consulta las secciones "[Configurar la visibilidad de un repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" y "[Administrar los equipos y personas con acceso a tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Haz Clic en **Administrar el acceso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Debajo de **invitar colaboradores**, busca al usuario que quieras invitar. ![Screenshot showing searching for a collaborator](/assets/images/help/projects-v2/access-search.png)
3. Select the role for the collaborator. ![Screenshot showing selecting a role](/assets/images/help/projects-v2/access-role.png)
   - **Lectura**: El individuo puede ver el proyecto.
   - **Escritura**: El individuo puede ver y editar el proyecto.
   - **Administrador**: El individuo puede ver, editar y agregar colaboradores nuevos al proyecto.
4. Haz clic en **Invitar**. ![Screenshot showing the invite button](/assets/images/help/projects-v2/access-invite.png)

### Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haz Clic en **Administrar el acceso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
1. Debajo de **Administrar acceso**, encuentra al(los) colaborador(es) cuyos permisos quieras modificar.

   Puedes utilizar los menús de **Tipo** y **Rol** para filtrar la lista de acceso. ![Screenshot showing a collaborator](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s). ![Screenshot showing changing a collaborator's role](/assets/images/help/projects-v2/access-change-role.png)
1. Optionally, click **Remove** to remove the collaborator(s). ![Screenshot showing removing a collaborator](/assets/images/help/projects-v2/access-remove-member.png)
