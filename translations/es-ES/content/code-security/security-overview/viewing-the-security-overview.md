---
title: Viewing the security overview
intro: Navigate to the different views available in the security overview
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  fpt: '*'
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
---

{% data reusables.security-center.beta %}

## Visualizar el resumen de seguridad de una organización

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para ver la información agregada sobre los tipos de alerta, haz clic en **Mostrar más**. ![Botón de mostrar más](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

{% ifversion ghec or ghes > 3.4 %}

## Viewing alerts across your organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the security sidebar, select the subset of alerts you want to view. ![View alert subset](/assets/images/help/organizations/view-alert-subset.png)
2. Opcionalmente, filtra la lista de alertas. Each view has its own selection of available filters. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. You can also type search qualifiers in the search field. For more information about the available qualifiers, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)." ![The drop-down filter menus and Search repositories field in the secret scanning view](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

## Viewing alerts for a repository

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **Security**. ![Repository security tab](/assets/images/help/repository/security-tab.png)
2. In the security sidebar, select the view you want to open. ![Repository view alert subset](/assets/images/help/repository/repo-security-side-panel.png)
3. Opcionalmente, filtra la lista de alertas. Cada vista tiene su propia selección de filtros disponibles. Puedes hacer clic en varios filtros de los menús desplegables de filtros para especificar tu búsqueda. También puedes teclear calificadores de búsqueda en el campo de búsqueda. Para obtener más información sobre los calificadores disponibles, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)". ![Drop down filter menus in the repository secret scanning alerts view](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Visualizar el resumen de seguridad de un equipo

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
