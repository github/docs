---
title: Viewing security insights for your organization
shortTitle: Viewing security insights
intro: 'You can use the overview dashboard in security overview to monitor the security landscape of the repositories in your organization.'
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
---

{% data reusables.security-overview.beta-overview-dashboard %}

## About organization-level security insights

The overview page in security overview is a consolidated dashboard of insights about your organization's security landscape and progress. You can use the dashboard to monitor the health of your application security program, collaborate with engineering teams, and gather data for benchmarking purposes.

You can view a variety of metrics about the security alerts in your organization. The dashboard displays trending data that tracks alert counts and activity over time, as well as snapshot data that reflects the current state.

- The top section of the dashboard shows information about the status and age of alerts in your organization, as well as data about secrets that have been blocked or bypassed.
- The "Remediation" section shows information about how alerts are resolved and alert activity over time.
- The "Impact analysis" section shows the repositories that pose the highest potential security risk in your organization.

You can filter the overview dashboard by selecting a specific time period, and apply additional filters to focus on narrower areas of interest. All data and metrics across the dashboard will change as you apply filters. For more information, see "[AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview)."

Enterprise members can access the overview page for organizations in their enterprise. The metrics you see will depend on your role and repository permissions. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#permission-to-view-data-in-security-overview)."

### Limitations

The data that populates the overview page can and will change over time due to various factors, such as repository deletion or modifications to a security advisory. This means that the overview metrics for the same time period could vary if viewed at two different times. For compliance reports or other scenarios where data consistency is crucial, we recommend that you source data from the audit log. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

Keep in mind that the overview page tracks changes over time for security alert data only. If you filter the page by non-alert attributes, such as repository status, the data you see will reflect the current state of those attributes, instead of the historical state. For example, consider that you archived a repository that contains open security alerts, an action which closes the alerts. If you then view the overview page for the week before you archived the repository, the alert data for the repository will only appear when you filter to show data from archived repositories, because the current state of the repository is archived. However, the alerts will appear as open, since they were open during that time period and the overview page tracks the historical state of alerts.

{% data reusables.security-overview.alert-differences %}

## Viewing the security overview dashboard

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. The overview page is the primary view that you will see after clicking on the "Security" tab. To get to the dashboard from another security overview page, in the sidebar, click **{% octicon "graph" aria-hidden="true"  %} Overview**.
1. Use the options at the top of the overview page to filter the group of alerts you want to see metrics for. All of the data and metrics on the page will change as you adjust the filters.
   - Use the date picker to set the time range that you want to view alert activity and metrics for.
   - Click in the search box to add further filters on the alerts and metrics displayed.

    ![Screenshot of the overview page in security overview for an organization. The options for filtering are outlined in dark orange, including the date picker and search field.](/assets/images/help/security-overview/security-overview-dashboard-filters.png)

1. For the alert trends graph at the top of the page, you can click **{% octicon "shield" aria-hidden="true"  %} Open alerts** or **{% octicon "shield-x" aria-hidden="true"  %} Closed alerts** to toggle between showing the trends for open or closed alerts. The toggle will only affect the alert trends graph. For more information, see "[Alert trends graph](#alert-trends-graph)."

## Understanding the overview dashboard

- [Alert trends graph](#alert-trends-graph)
- [Age of alerts](#age-of-alerts)
- [Secrets bypassed or blocked](#secrets-bypassed-or-blocked)
- [Mean time to remediate](#mean-time-to-remediate)
- [Net resolve rate](#net-resolve-rate)
- [Alert activity graph](#alert-activity-graph)
- [Impact analysis for repositories](#impact-analysis-for-repositories)

### Alert trends graph

The alert trends graph shows the change in the number of alerts in your organization over the time period you have chosen. Alerts are grouped by severity. You can toggle the graph between open and closed alerts.

Open alerts include both newly created and existing open security alerts. New alerts are represented on their creation date, while alerts that existed before the chosen time period are represented at the start of the period. Once an alert is remediated or dismissed, it is not included in the graph. Instead, the alert will move to the closed alerts graph.

Closed alerts include security alerts that have been successfully remediated or dismissed prior to or during the chosen time period. Alerts closed during the time period are represented on the graph on their closed date, while alerts remediated or dismissed before the chosen time period are represented at the start of the period.

### Age of alerts

The "Age of alerts" metric is the average age of all alerts that are still open at the end of the chosen time period.

The age of each open alert is calculated by subtracting the date the alert was created from the date that the chosen time period ends. For reopened alerts, the age is calculated by subtracting the original created date rather than the date the alert was reopened.

### Secrets bypassed or blocked

The "Secrets bypassed / blocked" metric shows the ratio of secrets bypassed to the total secrets blocked by push protection.

You can also see how many secrets were successfully blocked, which is calculated by subtracting the number of secrets bypassed from the total number of secrets blocked by push protection. A secret is considered to have been successfully blocked when it has been corrected, and not committed to the repository.

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

### Alert activity graph

Expanding on the alert trends graph, the alert activity graph shows you alert inflows and outflows over your chosen time period.

Green bars represent the number of new alerts created during the segmented time period. Purple bars represent the number of alerts that were closed during the segmented time period. The blue dotted line represents the net alert activity, which is the difference between new and closed alerts.

### Impact analysis for repositories

The impact analysis table shows the top 10 repositories with the most open alerts as of the end of the chosen time period, ranked by the total number of open alerts. For each repository, the total number of open alerts is shown alongside a breakdown by severity.
