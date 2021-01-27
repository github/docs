---
title: Gestionar equipos y personas con acceso a tu repositorio
intro: Puedes ver a todo aquél que ha accedido a tu repositorio y ajustar los permisos.
permissions: Los administradores de repositorio pueden administrar equipos y personas con acceso a ellos.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
versions:
  free-pro-team: '*'
---

### Acerca de gestionar el acceso a tu repositorio

Puedes ver un resumen de cada equipo o persona con acceso a tu repositorio para todo aquél que administres en {% data variables.product.prodname_dotcom %}. Desde este resumen, también puedes invitar a nuevos equipos o personas, cambiar los permisos de ellos, o eliminar su acceso al repositorio.

Este resumen puede ayudarte a auditar el acceso a tu repositorio, incorporar o retirar personal externo o empleados, y responder con efectividad a los incidentes de seguridad.

Para obtener más información acerca de los niveles de permiso en los repositorios, consulta "[Niveles de permiso para un repositorio de la cuenta de un usuario](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" y"[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)."

![Resumen de gestión de accesos](/assets/images/help/repository/manage-access-overview.png)

### Filtrar la lista de equipos y personas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Debajo de "Administrar acceso" en el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres encontrar. ![Campo de búsqueda para filtrar la lista de equipos o personas con acceso](/assets/images/help/repository/manage-access-filter.png)

### Cambiar permisos para un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Encuentra el equipo o persona cuyos permisos quieres cambiar debajo de "Administrar acceso", posteriormente, utiliza el menú desplegable de **Rol** para seleccionar nuevos permisos. ![Utilizar el menú desplegable de "Rol" para seleccionar nuevos permisos para un equipo o persona](/assets/images/help/repository/manage-access-role-drop-down.png)

### Invitar a un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. En el campo de búsqueda, comienza a teclear el nombre del equipo o persona que quieres invitar y da clic en el mismo dentro de la lista de coincidencias. ![Campo de búsqueda para teclear el nombre del equipo o persona que deseas invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Debajo de "Escoje un rol", selecciona los permisos que quieres otorgar al equipo o persona, posteriormente, da clic en **Añadir NOMBRE a REPOSITORIO**. ![Seleccionar los permisos para el equipo o persona](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

### Eliminar el acceso de un equipo o persona

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Debajo de "Administrar acceso", encuentra al equipo o persona de quien quieras eliminar el acceso y da clic{% octicon "trashcan" aria-label="The trashcan icon" %}. ![Icono de papelera para eliminar el acceso](/assets/images/help/repository/manage-access-remove.png)

### Further reading

- "[Configurar la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility)"
- "[Configurar los permisos básicos para una organización](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
