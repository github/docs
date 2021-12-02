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
topics:
  - Repositories
shortTitle: Equipos & personas
---

## About access management for repositories

Puedes ver un resumen de cada equipo o persona con acceso a tu repositorio para todo aquél que administres en {% data variables.product.prodname_dotcom %}. From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

Este resumen puede ayudarte a auditar el acceso a tu repositorio, incorporar o retirar personal externo o empleados, y responder con efectividad a los incidentes de seguridad.

For more information about repository roles, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

![Resumen de gestión de accesos](/assets/images/help/repository/manage-access-overview.png)

## Filtrar la lista de equipos y personas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Debajo de "Administrar acceso" en el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres encontrar. ![Campo de búsqueda para filtrar la lista de equipos o personas con acceso](/assets/images/help/repository/manage-access-filter.png)

## Cambiar permisos para un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", find the team or person whose role you'd like to change, then select the Role drop-down and click a new role. ![Utilizar el menú desplegable de "Rol" para seleccionar nuevos permisos para un equipo o persona](/assets/images/help/repository/manage-access-role-drop-down.png)

## Invitar a un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. En el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres invitar y da clic en el mismo dentro de la lista de coincidencias. ![Campo de búsqueda para teclear el nombre del equipo o persona que deseas invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**. ![Seleccionar los permisos para el equipo o persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Eliminar el acceso de un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Debajo de "Administrar acceso", encuentra al equipo o persona de quien quieras eliminar el acceso y da clic{% octicon "trash" aria-label="The trash icon" %}. ![icono de cesto de basura para eliminar el acceso](/assets/images/help/repository/manage-access-remove.png)

## Leer más

- "[Configurar la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility)"
- "[Configurar los permisos básicos para una organización](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
