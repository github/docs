---
title: Setting up external monitoring with collectd
intro: 'Configure external monitoring systems to collect and analyze collectd metrics from your {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/setting-up-external-monitoring
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/setting-up-external-monitoring
  - /admin/monitoring-and-managing-your-instance/monitoring-your-instance/setting-up-external-monitoring
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/monitoring-your-appliance/configuring-collectd
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/configuring-collectd
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/configuring-collectd
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/configuring-collectd-for-your-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: External monitoring with collectd
---

{% data reusables.enterprise.collectd-metrics-future %}

## Set up an external `collectd` server

If you haven't already set up an external `collectd` server, you will need to do so before enabling `collectd` forwarding on {% data variables.location.product_location %}. Your `collectd` server must be running `collectd` version 5.x or higher.

1. Log into your `collectd` server.
1. Create or edit the `collectd` configuration file to load the network plugin and populate the server and port directives with the proper values. On most distributions, this is located at `/etc/collectd/collectd.conf`

An example _collectd.conf_ to run a `collectd` server:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Enabling collectd forwarding on {% data variables.product.prodname_enterprise %}

By default, `collectd` forwarding is disabled on {% data variables.product.prodname_enterprise %}. Follow the steps below to enable and configure `collectd` forwarding:

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Below the log forwarding settings, select **Enable collectd forwarding**.
1. In the **Server address** field, type the address of the `collectd` server to which you'd like to forward {% data variables.product.prodname_enterprise %} appliance statistics.
1. In the **Port** field, type the port used to connect to the `collectd` server. (Defaults to 25826)
1. In the **Cryptographic setup** dropdown menu, select the security level of communications with the `collectd` server. (None, signed packets, or encrypted packets.)
{% data reusables.enterprise_management_console.save-settings %}

## Troubleshooting

### Central collectd server receives no data

{% data variables.product.prodname_enterprise %} ships with `collectd` version 5.x. `collectd` 5.x is not backwards compatible with the 4.x release series. Your central `collectd` server needs to be at least version 5.x to accept data sent from {% data variables.location.product_location %}.

For help with further questions or issues, visit {% data variables.contact.contact_ent_support %}.
