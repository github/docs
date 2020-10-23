---
title: Accessing the monitor dashboard
intro: '{% data variables.product.prodname_ghe_server %} includes a web-based monitoring dashboard that displays historical data about your {% data variables.product.prodname_ghe_server %} appliance, such as CPU and storage usage, application and authentication response times, and general system health.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
---

### Accessing the monitor dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. At the top of the page, click **Monitor**. ![The Monitor Dashboard link](/assets/images/enterprise/management-console/monitor-dash-link.png)

### Troubleshooting common resource allocation problems on your appliance

{% note %}

**Note**: Because regularly polling {% data variables.product.product_location_enterprise %} with continuous integration (CI) or build servers can effectively cause a denial of service attack that results in problems, we recommend using webhooks to push updates. For more information, see "[About webhooks](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)".

{% endnote %}

Use the monitor dashboard to stay informed on your appliance's resource health and make decisions on how to fix high usage issues.

| Problem                          | Possible cause(s)                                                      | Recommendations                                                                                                                                                                                                                                                                                                                              |
| -------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High CPU usage                   | VM contention from other services or programs running on the same host | If possible, reconfigure other services or programs to use fewer CPU resources. To increase total CPU resources for the VM, see "[Increasing CPU or memory resources](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)."                                                                      |
| High memory usage                | VM contention from other services or programs running on the same host | If possible, reconfigure other services or programs to use less memory. To increase the total memory available on the VM, see "[Increasing CPU or memory resources](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)."                                                                        |
| Low disk space availability      | Large binaries or log files consuming disk space                       | If possible, host large binaries on a separate server, and compress or archive log files. If necessary, increase disk space on the VM by following the steps for your platform in "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)."                                  |
| Higher than usual response times | Often caused by one of the above issues                                | Identify and fix the underlying issues. If response times remain high, contact {% data variables.contact.contact_ent_support %}.                                                                                                                                                                                                           |
| Elevated error rates             | Software issues                                                        | Contact {% data variables.contact.contact_ent_support %} and include your support bundle. For more information, see "[Providing data to {% data variables.product.prodname_enterprise %} Support](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)." |
