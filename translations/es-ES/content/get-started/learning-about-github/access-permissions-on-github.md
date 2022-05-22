---
title: Permisos de acceso en GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Si bien puedes otorgar acceso de lectura/escritura a los colaboradores en un repositorio personal, los miembros de una organización pueden tener más permisos de acceso granular para los repositorios de la organización.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Acceder a los permisos
---

## Cuentas de usuarios personales

Un repositorio que es propiedad de una cuenta de usuario y tiene dos niveles de permiso: el *propietario del repositorio* y los *colaboradores*. Para obtener más información, consulta "[Niveles de permiso para un repositorio de cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)".

## Cuentas de organización

Los miembros de la organización pueden tener roles de *propietario*{% ifversion fpt or ghec %}, *gerente de facturación*,{% endif %} o *miembro*. Los propietarios tienen acceso administrativo completo a tu organización {% ifversion fpt or ghec %}, mientras que los gerentes de facturación pueden administrar parámetros de facturación{% endif %}. El miembro tiene un rol predeterminado para todos los demás. Puedes administrar los permisos de acceso para múltiples miembros a la vez con equipos. Para obtener más información, consulta:
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- [Acerca de los equipos](/articles/about-teams)"

{% ifversion fpt or ghec %}

## Cuentas de empresa

Los *propietarios de empresa* tienen máximo poder sobre la cuenta de la empresa y pueden tomar medidas en la cuenta de la empresa. Los *gerentes de facturación* pueden administrar los parámetros de facturación de la cuenta de la empresa. Los miembros y colaboradores externos de las organizaciones que son propiedad de tu cuenta empresarial automáticamente son miembros de la cuenta empresarial, si bien no tienen acceso a la cuenta empresarial en sí o a sus parámetros. Para obtener más información, consulta la sección "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Si una empresa utiliza {% data variables.product.prodname_emus %}, los miembros se aprovisionan como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} y el proveedor de identidad los administra en su totalidad. Los {% data variables.product.prodname_managed_users %} tienen acceso de solo lectura a los repositorios que no son parte de su empresa y no pueden interactuar con los usuarios que tampoco sean miembros de la empresa. Dentro de las organizaciones que pertenecen a la empresa, se puede otorgar los mismos niveles de acceso granular de los {% data variables.product.prodname_managed_users %} que estén disponibles para las organizaciones normales. For more information, see "[About {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation{% else %}."{% endif %}

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Leer más

- [Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
