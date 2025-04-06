---
title: Configuring collectd for your instance
shortTitle: Configure collectd
intro: 'To gain insight into {% data variables.product.product_name %}''s performance, you can review data from `collectd` on your instance, or optionally send the data to an external `collectd` server.'
redirect_from:
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
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

## About collectd for {% data variables.product.product_name %}

`collectd` is a service that runs on {% data variables.location.product_location %} to gather and provide metrics about the system's performance. Common metrics that `collectd` gathers includes CPU utilization, memory and disk consumption, network interface traffic and errors, and a system's overall load. You can also forward the data to another `collectd` server. For more information see the [collectd wiki](https://github.com/collectd/collectd/wiki).

Your instance uses metrics from `collectd` to display graphs in the {% data variables.enterprise.management_console %}'s monitor dashboard. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard)."

You can review a list of the metrics that `collectd` gathers on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics-for-github-enterprise-server)."

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

## Exporting collectd data with `ghe-export-graphs`

The command-line tool `ghe-export-graphs` will export the data that `collectd` stores in RRD databases. This command turns the data into XML and exports it into a single tarball (`.tgz`).

Its primary use is to provide the {% data variables.contact.contact_ent_support %} team with data about a VM's performance, without the need for downloading a full Support Bundle. It shouldn't be included in your regular backup exports and there is no import counterpart. If you contact us through {% data variables.contact.contact_ent_support %}, we may ask for this data to assist with troubleshooting.

### Usage

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Troubleshooting

### Central collectd server receives no data

{% data variables.product.prodname_enterprise %} ships with `collectd` version 5.x. `collectd` 5.x is not backwards compatible with the 4.x release series. Your central `collectd` server needs to be at least version 5.x to accept data sent from {% data variables.location.product_location %}.

For help with further questions or issues, visit {% data variables.contact.contact_ent_support %}.
