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
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/security-overview/viewing-the-security-overview
---

{% data reusables.security-overview.beta-org-risk-coverage %}

## About security risks in your code

You can use security overview to see which repositories and teams are free from any security alerts and which have unresolved security alerts. The "Security risk" page shows a summary and detailed information on which repositories in an organization {% ifversion security-overview-org-risk-coverage-enterprise %}or enterprise {% endif %}are affected by security alerts, with a breakdown of alert by severity. You can filter the view to show a subset of repositories using the "affected" and "unaffected" links, the links under "Open alerts", the "Teams" dropdown menu, and a search field in the page header. This view is a great way to understand the broader picture for a repository, team, or group of repositories because you can see security alerts of all types in one view.

![Screenshot of the header section of the "Security risk" view on the "Security" tab for an organization.](/assets/images/help/security-overview/security-risk-view-summary.png)

{% ifversion security-overview-export-data %}
You can download a CSV file of the data displayed on the "Security risk" page. This data file can be used for efforts like security research and in-depth data analysis, and can integrate easily with external datasets. For more information, see "[AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview)."
{% endif %}

{% note %}

**Note:** It's important to understand that all repositories without open alerts are included in the set of unaffected repositories. That is, unaffected repositories include any repositories where the feature is not enabled, in addition to repositories that have been scanned and any alerts identified have been closed.

{% endnote %}

## Viewing organization-level code security risks

{% data reusables.security-overview.information-varies-GHAS %}

{% ifversion security-overview-org-risk-coverage %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-security-risk-view %}
{% data reusables.code-scanning.using-security-overview-risk %}

   ![Screenshot of the "Security risk" view for an organization. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights.png)

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

{% data reusables.security-overview.alert-differences %}

## Viewing enterprise-level code security risks

{% ifversion security-overview-org-risk-coverage-enterprise %}

You can view data for security alerts across organizations in an enterprise. {% data reusables.security-overview.information-varies-GHAS %}

{% data reusables.security-overview.enterprise-filters-tip %}

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
{% ifversion security-overview-feature-specific-alert-page %}{% ifversion security-overview-org-risk-coverage-enterprise %}
1. To display the "Security coverage" view, in the sidebar, click **Risk**.
{% data reusables.code-scanning.using-security-overview-risk %}

    ![Screenshot of the "Security risk" view for an enterprise. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights-enterprise.png)

{% else %}
{% data reusables.organizations.security-overview-feature-specific-page %}{% endif %}
{% endif %}

{% data reusables.security-overview.alert-differences %}
