---
title: Roles en una empresa
intro: 'Todas las personas en una empresa son miembros de ella. Para controlar el acceso a los datos y configuraciones de tu empresa, puedes asignar roles diferentes a los miembros de ella.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
---

## Acerca de los roles en una empresa

Todas las personas en una empresa son miembros de ella. También puedes asignar roles administrativos a los miembros de tu empresa. Cada rol de admnistrador mapea las funciones de negocio y proporciona permisos para llevar a cabo tareas específicas dentro de la empresa.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %}
Si tu empresa no utiliza {% data variables.product.prodname_emus %}, puedes invitar a alguien a un rol administrativo utilizando una cuetna de usuario en {% data variables.product.product_name %} que ellos controlen. Para obtener más información, consulta la sección "[Invitar a las personas para que administren tu empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

En una empresa que utiliza {% data variables.product.prodname_emus %}, los propietarios y miembros nuevos deben aprovisionarse mediante tu proveedor de identidad. Los propietarios empresariales y propietarios de empresas no pueden agregar miembros o propietarios nuevos a la empresa utilizando {% data variables.product.prodname_dotcom %}. Puedes seleccionar el rol empresarial de un miembro utilizando tu IdP y no puede cambiarse en {% data variables.product.prodname_dotcom %}. Puedes seleccionar el rol de un miembro en una organización de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
{% else %}
Para obtener más información acerca de cómo agregar personas a tu empresa, consulta la sección "[Autenticación](/admin/authentication)".

{% endif %}

## Propietarios empresariales

Los propietarios de las empresas tienen el control absoluto de las mismas y pueden tomar todas las acciones, incluyendo:
- Gestionar administradores
- {% ifversion ghec %}Agregar y eliminar {% elsif ghae or ghes %}Administrar{% endif %} organizaciones {% ifversion ghec %}hacia y desde {% elsif ghae or ghes %} en{% endif %} la empresa{% ifversion remove-enterprise-members %}
- Eliminar miembros empresariales desde todas las organizaciones que pertenecen a la empresa{% endif %}
- Administrar parámetros de la empresa
- Aplicar políticas en las organizaciones
{% ifversion ghec %}- Administrar la configuración de facturación{% endif %}

{% ifversion enterprise-owner-join-org %}
Los propietarios empresariales no tienen acceso a los ajustes o contenido de la organización predeterminadamente. Para obtener acceso, los propietarios de empresas pueden unirse a cualquier organización que le pertenezca a su empresa. Para obtener más información, consulta la sección "[Administrar tu rol en una organización que le pertenezca a tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".

Los propietarios de las organizaciones en tu empresa no tienen acceso a la empresa misma a menos de que los hagas propietarios de la misma.
{% else %}
Los propietarios de empresa no pueden acceder a los parámetros o el contenido de la organización, a menos que se conviertan en propietarios de la organización o que se les otorgue acceso directo al repositorio que le pertenece a una organización. De forma similar, los propietarios de las organizaciones en tu empresa no tienen acceso a la empresa misma a menos de que los conviertas en propietarios de ella.
{% endif %}

Un propietario de la empresa solo consumirá una licencia si son propietarios o miembros de por lo menos una organización dentro de la emrpesa. Incluso si un propietario de empresa tiene un rol en varias organizaciones, consumirán una sola licencia. {% ifversion ghec %}Los propietrios de la empresa deben tener una cuenta personal en {% data variables.product.prodname_dotcom %}.{% endif %} Como mejor práctica, te recomendamos que solo algunas personas en tu compañía se conviertan en propietarios, para reducir el riesgo en tu negocio.

## Miembros de empresa

Los miembros de las organizaciones que pertenezcan a tu empresa también son miembros de ella automáticamente. Los miembros pueden colaborar en las organizaciones y pueden ser dueños de éstas, pero no pueden configurar ni acceder a los ajustes empresariales{% ifversion ghec %}, including billing settings{% endif %}.

Las personas en tu empresa podrían tener niveles de acceso diferentes para las diversas organizaciones que pertenecen a tu empresa y para los repositorios dentro de ellas. Puedes ver los recursos a los que tiene acceso cada persona. Para obtener más información, consulta la sección "[Visualizar a las personas en tu empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)".

Para obtener más información sobre los permisos a nivel organizacional, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Las personas con acceso de colaborador externo a los repositorios que pertenecen a tu organización también se listan en la pestaña de "Personas" de tu empresa, pero no son miembros empresariales y no tienen ningún tipo de acceso a la empresa. Para obtener más información sobre los colaboradores externos, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% ifversion ghec %}

## Gerentes de facturación

Los gerentes de facturación solo tienen acceso a la configuración de facturación de tu empresa. Los gerentes de facturación de tu empresa pueden:
- Ver y administrar las licencias de usuario, {% data variables.large_files.product_name_short %} los paquetes y otros parámetros de facturación
- Ver una lista de gerentes de facturación
- Agregar o eliminar otros gerentes de facturación

Los gerentes de facturación solo consumirán una licencia si son propietarios o miembros de por lo menos una organización dentro de la empresa. Los gerentes de facturación no tienen acceso a las organizaciones o repositorios de tu empresa y no pueden agregar o eliminar propietarios de la misma. Los gerentes de facturación deben tener una cuenta personal en {% data variables.product.prodname_dotcom %}.

## Acerca de los derechos de soporte

{% data reusables.enterprise-accounts.support-entitlements %}

## Leer más

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"

{% endif %}
