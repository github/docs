---
title: Permisos de acceso en GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Con los roles, puedes controlar quién tiene acceso a tus cuentas y recursos de {% data variables.product.product_name %}, así como el nivel de acceso que tiene cada persona.'
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

## Acerca de los permisos de acceso en {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %}

Los roles funcionan de forma diferente para los diferentes tipos de cuenta. Para obtener más información sobre las cuentas, consulta la sección "[Tipos de cuenta de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

## Cuentas de usuarios personales

Un repositorio que es propiedad de una cuenta de usuario y tiene dos niveles de permiso: el *propietario del repositorio* y los *colaboradores*. Para obtener más información, consulta "[Niveles de permiso para un repositorio de cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)".

## Cuentas de organización

Los miembros de la organización pueden tener roles de *propietario*{% ifversion fpt or ghec %}, *gerente de facturación*,{% endif %} o *miembro*. Los propietarios tienen acceso administrativo completo a tu organización {% ifversion fpt or ghec %}, mientras que los gerentes de facturación pueden administrar parámetros de facturación{% endif %}. El miembro tiene un rol predeterminado para todos los demás. Puedes administrar los permisos de acceso para múltiples miembros a la vez con equipos. Para obtener más información, consulta:
- "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- [Acerca de los equipos](/articles/about-teams)"

## Cuentas de empresa

{% ifversion fpt %}
{% data reusables.gated-features.enterprise-accounts %}

For more information about permissions for enterprise accounts, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %}
*Enterprise owners* have ultimate power over the enterprise account and can take every action in the enterprise account.{% ifversion ghec or ghes %} *Billing managers* can manage your enterprise account's billing settings.{% endif %} Members and outside collaborators of organizations owned by your enterprise account are automatically members of the enterprise account, although they have no access to the enterprise account itself or its settings. Para obtener más información, consulta la sección "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghec %}
Si una empresa utiliza {% data variables.product.prodname_emus %}, los miembros se aprovisionan como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} y el proveedor de identidad los administra en su totalidad. Los {% data variables.product.prodname_managed_users %} tienen acceso de solo lectura a los repositorios que no son parte de su empresa y no pueden interactuar con los usuarios que tampoco sean miembros de la empresa. Dentro de las organizaciones que pertenecen a la empresa, se puede otorgar los mismos niveles de acceso granular de los {% data variables.product.prodname_managed_users %} que estén disponibles para las organizaciones normales. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
{% endif %}
{% endif %}

## Leer más

- [Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
