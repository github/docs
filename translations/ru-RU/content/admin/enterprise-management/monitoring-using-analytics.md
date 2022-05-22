---
title: Monitoring using analytics
intro: 'You can enable web analytics tools to track and analyze traffic for your {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/enterprise-management/monitoring-using-analytics
  - /enterprise/admin/enterprise-management/monitoring-using-analytics
versions:
  enterprise-server: '>2.21'
---

### Configuring Google Analytics

To configure Google Analytics, you must have a [Google Analytics ID](https://analytics.google.com/) and authenticate to your {% data variables.product.prodname_ghe_server %} instance with SSH. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

```shell
$ ghe-config website-analytics.enabled true
$ ghe-config website-analytics.google-analytics-id <em>GOOGLE-ANALYTICS-ID</em>
$ ghe-config-apply
```
