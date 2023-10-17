---
title: Accessing the monitor dashboard
intro: '{% data variables.product.prodname_ghe_server %} includes a web-based monitoring dashboard that displays historical data about your {% data variables.product.prodname_ghe_server %} appliance, such as CPU and storage usage, application and authentication response times, and general system health.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
---
## Accessing the monitor dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the top navigation bar, click **Monitor**.

   ![Screenshot of the header of the {% data variables.enterprise.management_console %}. A tab, labeled "Monitor", is highlighted with an orange outline.](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Troubleshooting common resource allocation problems on your appliance

{% note %}

**Note**: Because regularly polling {% data variables.location.product_location %} with continuous integration (CI) or build servers can effectively cause a denial of service attack that results in problems, we recommend using webhooks to push updates. For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-webhooks)".

{% endnote %}

Use the monitor dashboard to stay informed on your appliance's resource health and make decisions on how to fix high usage issues.

| Problem | Possible cause(s) | Recommendations |
| -------- | ----------------- | --------------- |
| High CPU usage | VM contention from other services or programs running on the same host | If possible, reconfigure other services or programs to use fewer CPU resources. To increase total CPU resources for the VM, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources)." |
| High memory usage | VM contention from other services or programs running on the same host | If possible, reconfigure other services or programs to use less memory. To increase the total memory available on the VM, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources)." |
| Low disk space availability | Large binaries or log files consuming disk space | If possible, host large binaries on a separate server, and compress or archive log files. If necessary, increase disk space on the VM by following the steps for your platform in "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)." |
| Higher than usual response times | Often caused by one of the above issues | Identify and fix the underlying issues. If response times remain high, contact us by visiting {% data variables.contact.contact_ent_support %}. |
| Elevated error rates | Software issues  | Contact us by visiting {% data variables.contact.contact_ent_support %} and include your support bundle. For more information, see "[Providing data to {% data variables.product.prodname_enterprise %} Support](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)." |
