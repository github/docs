---
title: Assessing your code security risk
shortTitle: Assess security risk to code
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see which teams and repositories are affected by security alerts, and identify repositories for urgent remedial action.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
type: how_to
topics: 
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/security-overview/viewing-the-security-overview
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

{% data reusables.security-overview.beta-org-risk-coverage %}

## About security risks in your code

You can use security overview to see which repositories and teams are free from any security alerts and which have unresolved security alerts. The "Security risk" page shows a summary and detailed information on which repositories in an organization are affected by security alerts, with a breakdown of alert by severity. You can filter the view to show a subset of repositories using the "affected" and "unaffected" links, the links under "Open alerts", the "Teams" dropdown menu, and a search field in the page header. This view is a great way to understand the broader picture for a repository, team, or group of repositories because you can see security alerts of all types in one view.

![Screenshot of the header section of the "Security risk" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "affected"/"unaffected" links, "Teams" selector, and search field.](/assets/images/help/security-overview/security-risk-view-summary.png)

{% note %}

**Note:** It's important to understand that all repositories without open alerts are included in the set of unaffected repositories. That is, unaffected repositories include any repositories where the feature is not enabled, in addition to repositories that have been scanned and any alerts identified have been closed.

{% endnote %}

## Viewing organization-level code security risks

{% data reusables.security-overview.information-varies-GHAS %} For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#permission-to-view-data-in-security-overview)."


{% ifversion security-overview-org-risk-coverage %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To display the "Security risk" view, in the sidebar, click **{% octicon "shield" aria-hidden="true"  %} Risk**.
1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."
    - Use the **Teams** dropdown to show information only for the repositories owned by one or more teams.
    - Click **NUMBER affected** or **NUMBER unaffected** in the header for any feature to show only the repositories with open alerts or no open alerts of that type.
    - Click any of the descriptions of "Open alerts" in the header to show only repositories with alerts of that type and category. For example, **1 critical** to show the repository with a critical alert for {% data variables.product.prodname_dependabot %}.
    - At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    - Click in the search box to add further filters to the repositories displayed.

    ![Screenshot of the header section of the "Security risk" view on the "Security" tab for an organization. The options for filtering are outlined in dark orange, including "affected"/"unaffected" links, alert severity links, "Teams" selector, archived repositories, and search field.](/assets/images/help/security-overview/security-risk-view-highlights.png)

{% data reusables.organizations.security-overview-feature-specific-page %}

{% else %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. To view aggregate information about alert types, click **Show more**.
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-alert-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Screenshot of the {% data variables.product.prodname_code_scanning %} alerts page on the "Security" tab. Features apart from filters, dropdown menus, and sidebar are grayed out.](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png)
{% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}

## Viewing enterprise-level code security risks

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. In the left sidebar, click **{% octicon "shield" aria-hidden="true" %} Code Security**.
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Viewing security overview for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
{% endif %}

