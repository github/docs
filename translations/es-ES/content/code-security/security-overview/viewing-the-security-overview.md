---
title: Ver el resumen de seguridad
intro: Navegar a las diversas vistas disponibles en el resumen de seguridad
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
versions:
  ghae: issue-5503
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Ver el resumen de seguridad
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Visualizar el resumen de seguridad de una organización

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para ver la información agregada sobre los tipos de alerta, haz clic en **Mostrar más**. ![Botón de mostrar más](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Captura de pantalla de la página específica del escaneo de código](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Visualizar las alertas en toda tu organización

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. En la barra lateral de seguridad, selecciona el subconjunto de alertas que quieras ver. ![Visualizar un subconjunto de alertas](/assets/images/help/organizations/view-alert-subset.png)
2. Opcionalmente, filtra la lista de alertas. Cada vista tiene su propia selección de filtros disponibles. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. También puedes teclear calificadores de búsqueda en el campo de búsqueda. Para obtener más información sobre los calificadores disponibles, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)". ![Los menús de filtro desplegable y el campo de búsqueda de repositorios en la vista de escaneo de secretos](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Ver el resumen de seguridad de una empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. En la barra lateral izquierda, haz clic en {% octicon "shield" aria-label="The shield icon" %} **Seguridad de código**.
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}
{% endif %}

## Visualizar las alertas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
1. Debajo de tu nombre de repositorio, haz clic en **Seguridad**. ![Pestaña de seguridad de repositorio](/assets/images/help/repository/security-tab.png)
2. En la barra lateral de seguridad, selecciona la vista que quieras abrir. ![Ver subconjunto de alertas del repositorio](/assets/images/help/repository/repo-security-side-panel.png)
3. Opcionalmente, filtra la lista de alertas. Cada vista tiene su propia selección de filtros disponibles. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. También puedes teclear calificadores de búsqueda en el campo de búsqueda. Para obtener más información sobre los calificadores disponibles, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)". ![Menús de filtro desplegables en la vista de alertas de escaneo de secreto del repositorio](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Visualizar el resumen de seguridad de un equipo

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
