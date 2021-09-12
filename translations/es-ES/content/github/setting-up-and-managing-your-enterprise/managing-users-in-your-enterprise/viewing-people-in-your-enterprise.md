---
title: Visualizar a las personas en tu empresa
intro: 'Para auditar el acceso a los recursos que pertenezcan a tu empresa o al uso de licencias de usuario, los propietarios de la empresa pueden ver a cada administrador y miembro de la misma.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### Visualizar a los propietarios{% if currentVersion == "free-pro-team@latest" %} y gerentes de facturación de la empresa{% endif %}

Puedes ver a los propietarios {% if currentVersion == "free-pro-team@latest" %}y gerentes de facturación de la empresa, {% endif %}así como una lista de invitaciones pendientes para convertirse en propietarios{% if currentVersion == "free-pro-team@latest" %} y gerentes de facturación. Puedes filtrar la lista de administradores de la empresa por rol{% endif %}. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre completo.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver una lista de invitaciones pendientes, da clic en **_CANTIDAD_ pendientes**.
  ![botón de "CANTIDAD pendientes" a la derecha de las opciones de búsqueda y de filtrado](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### Ver miembros y colaboradores externos

Puedes ver la cantidad de miembros y colaboradores externos pendientes. Puedes filtrar la lista de miembros por {% if currentVersion == "free-pro-team@latest" %}despliegue ({% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %}),{% endif %} rol{% if currentVersion == "free-pro-team@latest" %}, y{% else %} u{% endif %} organización. Puedes filtrar la lista de colaboradores externos por la visibilidad de los repositorios a los que el colaborador tiene acceso. Puedes encontrar una persona específica al buscar por su nombre de usuario o nombre que se muestra.

Puedes ver {% if currentVersion == "free-pro-team@latest" %}todas las organizaciones de {% data variables.product.prodname_ghe_cloud %} e instancias de {% data variables.product.prodname_ghe_server %} a las cuales pertenece un miembro, y {% endif %}a qué repositorios tiene acceso un colaborador externo{% if currentVersion == "free-pro-team@latest" %}, {% endif %} dand clic en el nombre de una persona.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. De manera opcional, para ver una lista de colaboradores externos en lugar de una lista de miembros, haz clic en **Outside collaborators (Colaboradores externos)**. ![Pestaña de colaboradores externos en la página de miembros de la organización](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. Opcionalmente, para ver una lista de invitaciones pendientes, da clic en **_CANTIDAD_ pendientes**.
  ![botón de "CANTIDAD pendientes" a la derecha de las opciones de búsqueda y de filtrado](/assets/images/help/enterprises/members-pending.png){% endif %}

### Leer más

- "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
