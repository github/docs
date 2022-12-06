---
title: Viewing the security overview
intro: Navigate to the different views available in the security overview
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
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
{% data reusables.security-overview.beta %}
{% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Viewing the security overview for an organization

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Choose the overview you want to display from the options in the sidebar.
1. Use the drop-down filters and search box to focus on the information of greatest interest. The "Security Risk" and "Security Coverage" views also have an interactive header that you can use to filter results.

  ![Screenshot of the Security Risk view with interactive header highlighted](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To view aggregate information about alert types, click **Show more**.
  ![Show more button](/assets/images/help/security-overview/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-alert-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Screenshot of the code scanning-specific page](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png)
{% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Viewing the security overview for an enterprise

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. In the left sidebar, click {% octicon "shield" aria-label="The shield icon" %} **Code Security**.
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Viewing the security overview for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
{% endif %}