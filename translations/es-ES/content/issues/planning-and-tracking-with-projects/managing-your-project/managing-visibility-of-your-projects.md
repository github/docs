---
title: 'Managing visibility of your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Learn about setting your {% data variables.projects.project_v2 %} to private or public visibility.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
---

## Acerca de la visibilidad de los proyectos

Projects can be public or private. En el caso de los proyectos públicos, toda persona con acceso a internet puede verlos. Para el caso de los proyectos privados, solo podrán verlos los usuarios a los que se les otorgó por lo menos acceso de lectura.

Solo se afecta la visibilidad del proyecto; para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece este. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este.

![Proyecto con un elemento oculto](/assets/images/help/projects/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners can restrict the ability to change project visibility to just organization owners.

In public and private projects, insights are only visible to users with write permissions for the project.

En los proyectos privados que pertenecen a las organizaciones, los avatares de los usuarios que actualmente hacen actualizaciones al mismo se muestran en su IU.

Los administradores de proyecto también pueden administrar el acceso administrativo y de escritura al mismo, así como controlar el acceso para los usuarios individuales. For more information, see "[Managing access to your projects](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## Cambiar la visibilidad de proyecto

{% data reusables.projects.project-settings %}
1. Next to **Visibility** in the "Danger zone", select **Private** or **Public**. ![Screenshot showing the visibility controls](/assets/images/help/projects-v2/visibility.png)

## Leer más

- [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
