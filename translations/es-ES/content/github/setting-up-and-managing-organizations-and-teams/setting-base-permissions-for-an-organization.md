---
title: Configurar los permisos base para una organización
intro: Puedes configurar permisos base para los repositorios que pertenezcan a una organización.
permissions: Los dueños de la organización pueden configurar permisos base para la misma.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de los permisos base para una organización

Puedes configurar permisos base que apliquen a todos los miembros de una organización cuando accedan a cualquiera de los repositorios de la misma. Los permisos base no aplican para los colaboradores externos.

{% if currentVersion == "free-pro-team@latest" %}Predeterminadamente, los miembros de una organización tendrán permisos de **Lectura** en los repositorios de la organización.{% endif %}

Si alguien con permisos administrativos en un repositorio de la organización otorga un nivel superior de permisos en el mismo a algún miembro, este nivel de permiso superior anulará el permiso base.

### Configurar los permisos base

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Permisos Base", utiliza el menú desplegable para seleccionar los nuevos permisos base. ![Selección de nuevo nivel de permiso desde el menú desplegable de "permisos base"](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revisa los cambios. Da clic en **Cambiar el permiso predeterminado por PERMISO** para confirmar. ![Revisar y confirmar el cambio de permisos base](/assets/images/help/organizations/base-permissions-confirm.png)

### Leer más

- "[Niveles de permisopara una organización en un repositorio](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)"
- "[Añadir colaboradores externos a los repositorios de tu organización](/github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization)"
