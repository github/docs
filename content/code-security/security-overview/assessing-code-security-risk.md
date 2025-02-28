---
title: Assessing your code security risk
shortTitle: Assess security risk to code
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see which teams and repositories are affected by security alerts, and identify repositories for urgent remedial action.'
permissions: '{% data reusables.permissions.security-overview %}'
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



## Exploring the security risks in your code

You can use the different views on your **Security** tab to explore the security risks in your code.

* **Overview:** use to explore trends in **Detection**, **Remediation**, and **Prevention** of security alerts.
* **Risk:** use to explore the current state of repositories, across all alert types.
* **Alerts views:** use to explore {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dependabot %}, or {% data variables.product.prodname_secret_scanning %} alerts in greater detail.

These views provide you with the data and filters to:

* Assess the landscape of your code security across all your repositories.
* Identify the highest impact vulnerabilities to address.
* Monitor your progress in remediating potential vulnerabilities. {% ifversion security-overview-export-data %}
* Export your current selection of data for further analysis and reporting.  {% endif %}

{% ifversion security-overview-dashboard %}
For information about the **Overview**, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights).{% endif %}

## Viewing organization-level code security risks

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-security-risk-view %}
{% data reusables.code-scanning.using-security-overview-risk %}

   ![Screenshot of the "Security risk" view for an organization. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights.png)

    {% data reusables.security-overview.unaffected-repositories %}

{% data reusables.organizations.security-overview-feature-specific-page %} {% ifversion security-overview-export-data %}
1. Optionally, use the **{% octicon "download" aria-hidden="true" %} Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview). {% endif %}

{% data reusables.security-overview.alert-differences %}

## Viewing enterprise-level code security risks

You can view data for security alerts across organizations in an enterprise.

{% data reusables.security-overview.enterprise-filters-tip %}

{% ifversion ghes %}{% data reusables.enterprise-accounts.access-enterprise-ghes %}{% else %}{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}{% endif %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. To display the "Security risk" view, in the sidebar, click **{% octicon "shield" aria-hidden="true" %} Risk**.
{% data reusables.code-scanning.using-security-overview-risk %}

    ![Screenshot of the "Security risk" view for an enterprise. The options for filtering are outlined in dark orange.](/assets/images/help/security-overview/security-risk-view-highlights-enterprise.png)

    {% data reusables.security-overview.unaffected-repositories %}
{% data reusables.organizations.security-overview-feature-specific-page %}{% ifversion security-overview-export-data %}
1. Optionally, use the {% octicon "download" aria-hidden="true" %} **Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview). {% endif %}

{% data reusables.security-overview.alert-differences %}

{% ifversion security-campaigns %}

## Next steps

When you have assessed your code security risks, you are ready to create a security campaign to collaborate with developers to remediate alerts. For information about fixing security alerts at scale, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-tracking-security-campaigns) and [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).
{% endif %}
