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

Si alguien con permisos administrativos en un repositorio de una organización otorga un nivel de acceso superior a un miembro para dicho repositorio, este nivel de acceso superior anulará el permiso base.

{% ifversion custom-repository-roles %}
Si creaste un rol de repositorio personalizado con un rol heredado que tenga un acceso menor que los permisos base de tu organización, cualquier miembro que se haya asignado a ese rol tendrá los permisos base predeterminados de la organización en vez de los del rol heredado. Para obtener más información, consulta la sección "[Administrar los roles personalizados de repositorio en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

## Configurar los permisos base

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Permisos Base", utiliza el menú desplegable para seleccionar los nuevos permisos base. ![Selección de nuevo nivel de permiso desde el menú desplegable de "permisos base"](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revisa los cambios. Da clic en **Cambiar el permiso predeterminado por PERMISO** para confirmar. ![Revisar y confirmar el cambio de permisos base](/assets/images/help/organizations/base-permissions-confirm.png)

## Leer más

- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Agregar colaboradores externos a repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
