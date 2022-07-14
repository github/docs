---
title: Viewing the security overview
intro: Navigate to the different views available in the security overview
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
shortTitle: View the security overview
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Viewing the security overview for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To view aggregate information about alert types, click **Show more**.
  ![Show more button](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Screenshot of the code scanning-specific page](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Viewing alerts across your organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the security sidebar, select the subset of alerts you want to view.
![View alert subset](/assets/images/help/organizations/view-alert-subset.png)
2. Optionally, filter the list of alerts. Each view has its own selection of available filters. You can click multiple filters in the drop-down filter menus to narrow your search. You can also type search qualifiers in the search field. For more information about the available qualifiers, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)."
  ![The drop-down filter menus and Search repositories field in the secret scanning view](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Viewing the security overview for an enterprise

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. In the left sidebar, click {% octicon "shield" aria-label="The shield icon" %} **Code Security**.
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}
{% endif %}

## Viewing alerts for a repository

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **Security**.
  ![Repository security tab](/assets/images/help/repository/security-tab.png)
2. In the security sidebar, select the view you want to open.
  ![Repository view alert subset](/assets/images/help/repository/repo-security-side-panel.png)
3. Optionally, filter the list of alerts. Each view has its own selection of available filters. You can click multiple filters in the drop-down filter menus to narrow your search. You can also type search qualifiers in the search field. For more information about the available qualifiers, see "[Filtering alerts in the security overview](/code-security/security-overview/filtering-alerts-in-the-security-overview)."
  ![Drop down filter menus in the repository secret scanning alerts view](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Viewing the security overview for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
