---
title: Viewing security insights
shortTitle: View security insights
intro: 'You can use the overview dashboard in security overview to monitor the security landscape of the repositories in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  feature: security-overview-dashboard
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
redirect_from:
  - /code-security/security-overview/viewing-security-insights-for-your-organization
allowTitleToDifferFromFilename: true
---

{% data reusables.security-overview.beta-overview-dashboard %}

## {% ifversion security-overview-dashboard-enterprise %}About security insights{% else %} About organization-level security insights{% endif %}

The overview page in security overview is a consolidated dashboard of insights about your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}'s security landscape and progress. You can use the dashboard to monitor the health of your application security program, collaborate with engineering teams, and gather data for benchmarking purposes.

{% ifversion security-overview-dashboard-enterprise %}
Both the enterprise and organization-level security overviews have a dashboard. By default, the enterprise-level dashboard shows metrics for all the repositories in your enterprise. You can filter the data shown on the enterprise-level dashboard by owner (for example, by organization). By default, the organization-level dashboard shows metrics for all repositories owned by your organization. Both dashboards also allow you to filter by repository.
{% endif %}

You can view a variety of metrics about the security alerts in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}. The dashboard displays trending data that tracks alert counts and activity over time, as well as snapshot data that reflects the current state.

- The top section of the dashboard shows information about the status and age of alerts in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}, as well as data about secrets that have been blocked or bypassed.
- The "Remediation" section shows information about how alerts are resolved and alert activity over time.
- The "Impact analysis" section shows the repositories that pose the highest potential security risk in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}.

You can filter the overview dashboard by selecting a specific time period, and apply additional filters to focus on narrower areas of interest. All data and metrics across the dashboard will change as you apply filters. {% ifversion security-overview-additional-tools %}By default, the dashboard displays all alerts from {% data variables.product.prodname_dotcom %} tools, but you can use the tool filter to show alerts from a specific tool ({% data variables.product.prodname_secret_scanning %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, a specific third-party tool) or all third-party {% data variables.product.prodname_code_scanning %} tools. This feature is in beta, and is subject to change.{% endif %} For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

{% ifversion security-overview-dashboard-enterprise %}Enterprise members can access the overview page for organizations in their enterprise. {% endif %}The metrics you see will depend on your role and repository permissions. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#permission-to-view-data-in-security-overview)."

### Limitations

The data that populates the overview page can and will change over time due to various factors, such as repository deletion or modifications to a security advisory. This means that the overview metrics for the same time period could vary if viewed at two different times. For compliance reports or other scenarios where data consistency is crucial, we recommend that you source data from the audit log. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

Keep in mind that the overview page tracks changes over time for security alert data only. If you filter the page by non-alert attributes, such as repository status, the data you see will reflect the current state of those attributes, instead of the historical state. For example, consider that you archived a repository that contains open security alerts, an action which closes the alerts. If you then view the overview page for the week before you archived the repository, the alert data for the repository will only appear when you filter to show data from archived repositories, because the current state of the repository is archived. However, the alerts will appear as open, since they were open during that time period and the overview page tracks the historical state of alerts.

{% data reusables.security-overview.alert-differences %}

## Viewing the security overview dashboard{% ifversion security-overview-dashboard-enterprise %} for your organization{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. The overview page is the primary view that you will see after clicking on the "Security" tab. To get to the dashboard from another security overview page, in the sidebar, click **{% octicon "graph" aria-hidden="true"  %} Overview**.
{% data reusables.security-overview.filter-and-toggle %}

{% ifversion security-overview-dashboard-enterprise %}

## Viewing the security overview dashboard for your enterprise

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
{% data reusables.security-overview.filter-and-toggle %}

{% endif %}

## Understanding the overview dashboard

- [Alert trends graph](#alert-trends-graph)
- [Age of alerts](#age-of-alerts)
- [Secrets bypassed or blocked](#secrets-bypassed-or-blocked)
- [Mean time to remediate](#mean-time-to-remediate)
- [Net resolve rate](#net-resolve-rate)
- [Alert activity graph](#alert-activity-graph){% ifversion security-overview-additional-tools %}
- [Impact analysis table](#impact-analysis-table)
- [Reopened alerts](#reopened-alerts){% else %}
- [Impact analysis for repositories](#impact-analysis-for-repositories)
{% endif %}

{% ifversion security-overview-additional-tools %}

Some metrics in the security overview dashboard include a trend indicator, which shows the percentage gain or loss for the chosen time period relative to previous period. For example, when you select a week with 10 alerts, if the previous week had 20 alerts, the trend indicator reports that the metric has dropped by 50%. If the average age of the open alerts is 15 days, and for the previous period it was 5 days, the trend indicator reports that the metric has risen by 200%. This feature is in beta, and is subject to change. This feature is in beta, and is subject to change.

{% endif %}

### Alert trends graph

The alert trends graph shows the change in the number of alerts in your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %} over the time period you have chosen. {% ifversion security-overview-3-13-overview %}By default, alerts{% else %}Alerts{% endif %} are grouped by severity. You can toggle the graph between open and closed alerts{% ifversion security-overview-3-13-overview %} and change the way alerts are grouped{% endif %}.

Open alerts include both newly created and existing open security alerts. New alerts are represented on their creation date, while alerts that existed before the chosen time period are represented at the start of the period. Once an alert is remediated or dismissed, it is not included in the graph. Instead, the alert will move to the closed alerts graph.

Closed alerts include security alerts that have been successfully remediated or dismissed prior to or during the chosen time period. Alerts closed during the time period are represented on the graph on their closed date, while alerts remediated or dismissed before the chosen time period are represented at the start of the period.

### Age of alerts

The "Age of alerts" metric is the average age of all alerts that are still open at the end of the chosen time period.

The age of each open alert is calculated by subtracting the date the alert was created from the date that the chosen time period ends. For reopened alerts, the age is calculated by subtracting the original created date rather than the date the alert was reopened.

{% ifversion security-overview-additional-tools %}

### Reopened alerts

{% note %}

**Note:** The "Reopened alerts" metric is in beta, and is subject to change.

{% endnote %}

The "Reopened alerts" metric is the total open alerts that were reopened during the chosen time period. Only alerts that are open at the end of the reporting period are reported. This includes:

- Alerts that were closed as of the day before the chosen time period, and that remain open at the end of the period.
- Newly created alerts that were closed, and then reopened, during the chosen time period.
- Alerts that were open at the start of the chosen time period, but closed and then reopened within the same period.

{% endif %}

### Secrets bypassed or blocked

The "Secrets bypassed / blocked" metric shows the ratio of secrets bypassed to the total secrets blocked by push protection.

You can also see how many secrets were successfully blocked, which is calculated by subtracting the number of secrets bypassed from the total number of secrets blocked by push protection. A secret is considered to have been successfully blocked when it has been corrected, and not committed to the repository.

{% ifversion security-overview-additional-tools %}You can click **View details** to view the {% data variables.product.prodname_secret_scanning %} report with the same filters and time period selected. This feature is in beta, and is subject to change.{% endif %}

For more information on secret scanning push protection metrics, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection-in-your-organization)."

### Mean time to remediate

The "Mean time to remediate" metric is the average age of all alerts that were remediated or dismissed in the chosen time period. Alerts that were closed as "false positive" are excluded.

The age of each closed alert is calculated by subtracting the date the alert was created from the date that the alert was last closed during the chosen time period. For reopened alerts, the age is calculated by subtracting the original created date rather than the date the alert was reopened.

### Net resolve rate

The "Net resolve rate" metric is the rate at which alerts are being closed. This metric is similar to measuring "developer velocity", reflecting the speed and efficiency with which alerts are resolved.

The rate is calculated by dividing the number of alerts that were closed and remained closed during the chosen time period, by the number of alerts created during the time period.

{% note %}

**Note:** The net resolve rate takes into account any new and any closed alerts during the chosen time period. This means that the set of new alerts and set of closed alerts used for the calculation do not necessarily correspond, since they may represent different populations of alerts.

{% endnote %}

Alerts that are reopened and re-closed during the chosen time period are ignored.

{% ifversion code-scanning-autofix %}

### Autofix suggestions

{% data reusables.rai.code-scanning.beta-autofix %}

Autofix, powered by {% data variables.product.prodname_copilot %}, is an expansion of {% data variables.product.prodname_code_scanning %} that provides you with targeted recommendations to help you fix {% data variables.product.prodname_code_scanning %} alerts in pull requests. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

The "Autofix suggestions" metric is the total number of Autofix suggestions generated in open and closed pull requests during the chosen time period.

{% endif %}

### Alert activity graph

Expanding on the alert trends graph, the alert activity graph shows you alert inflows and outflows over your chosen time period.

Green bars represent the number of new alerts created during the segmented time period. Purple bars represent the number of alerts that were closed during the segmented time period. The blue dotted line represents the net alert activity, which is the difference between new and closed alerts.

{% ifversion security-overview-additional-tools %}

### Impact analysis table

{% note %}

**Note:** The "Impact analysis" table is in beta, and is subject to change.

{% endnote %}

The impact analysis table has separate tabs showing data for: "Repositories" and "Advisories".

- The "Repositories" tab shows the top 10 repositories with the most open alerts at the end of the chosen time period, ranked by the total number of open alerts. For each repository, the total number of open alerts is shown alongside a breakdown by severity.

- The "Advisories" tab shows the 10 CVE advisories that triggered the most {% data variables.product.prodname_dependabot %} alerts at the end of the chosen time period, ranked by the total number of open alerts. For each advisory, the total number of open alerts is shown alongside a severity rating.

{% else %}

### Impact analysis for repositories

The impact analysis table shows the top 10 repositories with the most open alerts as of the end of the chosen time period, ranked by the total number of open alerts. For each repository, the total number of open alerts is shown alongside a breakdown by severity.

{% endif %}
