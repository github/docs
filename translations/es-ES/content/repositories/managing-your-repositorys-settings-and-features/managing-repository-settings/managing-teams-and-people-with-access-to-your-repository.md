---
title: Gestionar equipos y personas con acceso a tu repositorio
intro: Puedes ver a todo aquél que ha accedido a tu repositorio y ajustar los permisos.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-5974
topics:
  - Repositories
shortTitle: Equipos & personas
---

## Acerca de la administración de accesos para los repositorios

Puedes ver un resumen de cada equipo o persona con acceso a tu repositorio para todo aquél que administres en {% data variables.product.prodname_dotcom %}. Desde este resumen, también puedes invitar a nuevos equipos o personas, cambiar el rol de cada equipo o persona en el repositorio o eliminar el acceso al mismo.

Este resumen puede ayudarte a auditar el acceso a tu repositorio, incorporar o retirar personal externo o empleados, y responder con efectividad a los incidentes de seguridad.

{% data reusables.organizations.mixed-roles-warning %}

Para obtener más información sobre los roles de repositorio, consulta las secciones "[Niveles de permiso para un repositorio de una cuenta personal](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

![Resumen de gestión de accesos](/assets/images/help/repository/manage-access-overview.png)

## Filtrar la lista de equipos y personas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
1. Debajo de "Administrar acceso" en el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres encontrar. Opcionalmente, utiliza los menús desplegables para filtrar tu búsqueda. ![Campo de búsqueda para filtrar la lista de equipos o personas con acceso](/assets/images/help/repository/manage-access-filter.png)

## Cambiar permisos para un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. Debajo de "Administrar acceso", encuentra al equipo o persona cuyo rol te gustaría cambiar y luego selecciona el menú desplegable del rol y haz clic en un rol nuevo. ![Utilizar el menú desplegable de "Rol" para seleccionar nuevos permisos para un equipo o persona](/assets/images/help/repository/manage-access-role-drop-down.png)

## Invitar a un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
{% data reusables.organizations.invite-teams-or-people %}
5. En el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres invitar y da clic en el mismo dentro de la lista de coincidencias. ![Campo de búsqueda para teclear el nombre del equipo o persona que deseas invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Debajo de "Elige un rol", selecciona el rol del repositorio que quieras otorgar al equipo o persona y luego haz clic en **Add NAME to REPOSITORY**. ![Seleccionar los permisos para el equipo o persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Eliminar el acceso de un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. Debajo de "Administrar acceso", encuentra al equipo o persona de quien quieras eliminar el acceso y da clic{% octicon "trash" aria-label="The trash icon" %}. ![icono de cesto de basura para eliminar el acceso](/assets/images/help/repository/manage-access-remove.png)

## Leer más

- "[Configurar la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility)"
- "[Configurar los permisos básicos para una organización](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
