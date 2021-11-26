---
title: Configurar los permisos base para una organización
intro: Puedes configurar permisos base para los repositorios que pertenezcan a una organización.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configurar los permisos básicos
---

## Acerca de los permisos base para una organización

Puedes configurar permisos base que apliquen a todos los miembros de una organización cuando accedan a cualquiera de los repositorios de la misma. Los permisos base no aplican para los colaboradores externos.

{% ifversion fpt or ghec %}Predeterminadamente, los miembros de una organización tendrán permisos de **Lectura** para los repositorios de la misma{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion ghec %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## Configurar los permisos base

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Permisos Base", utiliza el menú desplegable para seleccionar los nuevos permisos base. ![Selección de nuevo nivel de permiso desde el menú desplegable de "permisos base"](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revisa los cambios. Da clic en **Cambiar el permiso predeterminado por PERMISO** para confirmar. ![Revisar y confirmar el cambio de permisos base](/assets/images/help/organizations/base-permissions-confirm.png)

## Leer más

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Agregar colaboradores externos a repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
