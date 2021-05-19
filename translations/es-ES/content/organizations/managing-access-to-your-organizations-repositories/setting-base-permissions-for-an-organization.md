---
title: Configurar los permisos base para una organización
intro: Puedes configurar permisos base para los repositorios que pertenezcan a una organización.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### Acerca de los permisos base para una organización

Puedes configurar permisos base que apliquen a todos los miembros de una organización cuando accedan a cualquiera de los repositorios de la misma. Los permisos base no aplican para los colaboradores externos.

{% if currentVersion == "free-pro-team@latest" %}Predeterminadamente, los miembros de una organización tendrán permisos de **Lectura** en los repositorios de la organización.{% endif %}

Si alguien con permisos administrativos en un repositorio de la organización otorga un nivel superior de permisos en el mismo a algún miembro, este nivel de permiso superior anulará el permiso base.

### Configurar los permisos base

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Permisos Base", utiliza el menú desplegable para seleccionar los nuevos permisos base. ![Selección de nuevo nivel de permiso desde el menú desplegable de "permisos base"](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revisa los cambios. Da clic en **Cambiar el permiso predeterminado por PERMISO** para confirmar. ![Revisar y confirmar el cambio de permisos base](/assets/images/help/organizations/base-permissions-confirm.png)

### Leer más

- [Niveles de permiso de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)"
- "[Agregar colaboradores externos a repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
