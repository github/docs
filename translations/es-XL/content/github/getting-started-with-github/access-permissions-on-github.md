---
title: Permisos de acceso en GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
intro: 'Si bien puedes otorgar acceso de lectura/escritura a los colaboradores en un repositorio personal, los miembros de una organización pueden tener más permisos de acceso granular para los repositorios de la organización.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Permissions
  - Accounts
---

### Cuentas de usuarios personales

Un repositorio que es propiedad de una cuenta de usuario y tiene dos niveles de permiso: el *propietario del repositorio* y los *colaboradores*. Para obtener más información, consulta "[Niveles de permiso para un repositorio de cuenta de usuario](/articles/permission-levels-for-a-user-account-repository)".

### Cuentas de organización

Los miembros de la organización pueden tener roles de *propietario*{% if currentVersion == "free-pro-team@latest" %}, *gerente de facturación*,{% endif %} o *miembro*. Los propietarios tienen acceso administrativo completo a tu organización {% if currentVersion == "free-pro-team@latest" %}, mientras que los gerentes de facturación pueden administrar parámetros de facturación{% endif %}. El miembro tiene un rol predeterminado para todos los demás. Puedes administrar los permisos de acceso para múltiples miembros a la vez con equipos. Para obtener más información, consulta:
- [Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)"
- [Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
- [Acerca de los equipos](/articles/about-teams)"

{% if currentVersion == "free-pro-team@latest" %}

### Cuentas de empresa

Los *propietarios de empresa* tienen máximo poder sobre la cuenta de la empresa y pueden tomar medidas en la cuenta de la empresa. Los *gerentes de facturación* pueden administrar los parámetros de facturación de la cuenta de la empresa. Los miembros y colaboradores externos de las organizaciones que son propiedad de tu cuenta empresarial automáticamente son miembros de la cuenta empresarial, si bien no tienen acceso a la cuenta empresarial en sí o a sus parámetros. Para obtener más información, consulta "[Roles para una cuenta empresarial](/articles/roles-for-an-enterprise-account)".

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Leer más

- [Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
