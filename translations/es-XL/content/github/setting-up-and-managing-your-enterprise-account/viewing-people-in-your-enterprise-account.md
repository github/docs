---
title: Ver personas en tu cuenta de empresa
intro: 'Para auditar el acceso a los recursos que son propiedad de la empresa o el uso de la licencia de usuario, los propietarios de la empresa pueden ver cada administrador o miembro de la cuenta de empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Ver propietarios de empresa y gerentes de facturación

Puedes ver los propietarios de empresa y los gerentes de facturación, y una lista de invitaciones pendientes para convertirse en propietarios y gerentes de facturación. Puedes filtrar la lista de administradores de empresa por rol. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre completo.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

### Ver miembros y colaboradores externos

Puedes ver la cantidad de miembros y colaboradores externos pendientes. Puedes filtrar la lista de miembros por implementación ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}), rol y organización. Puedes filtrar la lista de colaboradores externos por la visibilidad de los repositorios a los que el colaborador tiene acceso. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre que se muestra.

Al hacer clic en el nombre de la persona, puedes ver todas las organizaciones de {% data variables.product.prodname_ghe_cloud %} e instancias de {% data variables.product.prodname_ghe_server %} a las que un miembro pertenece, y a qué repositorios tiene acceso un colaborador externo.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. De manera opcional, para ver una lista de colaboradores externos en lugar de una lista de miembros, haz clic en **Outside collaborators (Colaboradores externos)**. ![Pestaña de colaboradores externos en la página de miembros de la organización](/assets/images/help/business-accounts/outside-collaborators-tab.png)

### Leer más

- "[Roles de una cuenta de empresa](/articles/roles-for-an-enterprise-account)"
