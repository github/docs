---
title: Viewing security insights
shortTitle: View security insights
intro: Monitor your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %} security posture, identify high-risk repositories, and track alert remediation progress using the overview dashboard in security overview.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-both %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: how-tos
redirect_from:
  - /code-security/security-overview/viewing-security-insights-for-your-organization
  - /code-security/security-overview/viewing-security-insights
allowTitleToDifferFromFilename: true
category:
  - Secure at scale
---

The overview page in security overview provides a consolidated dashboard of your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}'s security landscape. You can filter the dashboard by time period, tool, and other criteria to focus on specific areas of interest. For more information about the overview dashboard, available metrics, and access permissions, see [AUTOTITLE](/code-security/concepts/security-at-scale/about-security-overview).

{% ifversion security-overview-export-data %}
You can download a CSV file of the overview dashboard data for your organization or enterprise. For more information, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/exporting-data-from-security-overview).
{% endif %}


{% data reusables.security-overview.alert-differences %}

## Viewing the security overview dashboard{% ifversion security-overview-dashboard-enterprise %} for your organization{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. The overview page is the primary view that you will see after clicking on the **{% data variables.product.prodname_security_and_quality_tab %}** tab. To get to the dashboard from another security overview page, in the sidebar, click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} Overview**.{% ifversion security-overview-3-tab-dashboard %}
1. By default, the **Detection** tab is displayed. If you want to switch to another tab to see other metrics, click **Remediation** or **Prevention**.{% endif %}
{% data reusables.security-overview.filter-and-toggle %}

{% ifversion security-overview-dashboard-enterprise %}

## Viewing the security overview dashboard for your enterprise

{% ifversion ghes %}{% data reusables.enterprise-accounts.access-enterprise-ghes %}{% else %}{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}{% endif %}
{% data reusables.code-scanning.click-code-security-enterprise %}{% ifversion security-overview-3-tab-dashboard %}
1. By default, the **Detection** tab is displayed. If you want to switch to another tab to see other metrics, click **Remediation** or **Prevention**.{% endif %}
{% data reusables.security-overview.filter-and-toggle %}

{% data reusables.security-overview.enterprise-filters-tip %}

{% endif %}

## Next steps

The dashboard displays metrics about alert status, remediation velocity, and high-risk repositories in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}. For detailed explanations of each metric and how it's calculated, see [AUTOTITLE](/code-security/reference/security-at-scale/security-overview-dashboard-metrics).

You can filter the dashboard by time period, tool, repository, and other criteria. For more information, see [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).
