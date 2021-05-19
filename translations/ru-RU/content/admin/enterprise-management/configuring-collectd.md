---
title: Configuring collectd
intro: '{% data variables.product.prodname_enterprise %} can gather data with `collectd` and send it to an external `collectd` server. Among other metrics, we gather a standard set of data such as CPU utilization, memory and disk consumption, network interface traffic and errors, and the VM''s overall load.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd/
  - /enterprise/admin/enterprise-management/configuring-collectd
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

### Set up an external `collectd` server

If you haven't already set up an external `collectd` server, you will need to do so before enabling `collectd` forwarding on {% data variables.product.product_location %}. Your `collectd` server must be running `collectd` version 5.x or higher.

1. Log into your `collectd` server.
2. Create or edit the `collectd` configuration file to load the network plugin and populate the server and port directives with the proper values. On most distributions, this is located at `/etc/collectd/collectd.conf`

An example *collectd.conf* to run a `collectd` server:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

### Enable collectd forwarding on {% data variables.product.prodname_enterprise %}

By default, `collectd` forwarding is disabled on {% data variables.product.prodname_enterprise %}. Follow the steps below to enable and configure `collectd` forwarding:

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Below the log forwarding settings, select **Enable collectd forwarding**.
1. In the **Server address** field, type the address of the `collectd` server to which you'd like to forward {% data variables.product.prodname_enterprise %} appliance statistics.
1. In the **Port** field, type the port used to connect to the `collectd` server. (Defaults to 25826)
1. In the **Cryptographic setup** dropdown menu, select the security level of communications with the `collectd` server. (None, signed packets, or encrypted packets.)
{% data reusables.enterprise_management_console.save-settings %}

### Exporting collectd data with `ghe-export-graphs`

The command-line tool `ghe-export-graphs` will export the data that `collectd` stores in RRD databases. This command turns the data into XML and exports it into a single tarball (.tgz).

Its primary use is to provide the {% data variables.contact.contact_ent_support %} team with data about a VM's performance, without the need for downloading a full Support Bundle. It shouldn't be included in your regular backup exports and there is no import counterpart. If you contact {% data variables.contact.contact_ent_support %}, we may ask for this data to assist with troubleshooting.

#### Использование

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

### Устранение проблем

#### Central collectd server receives no data

{% data variables.product.prodname_enterprise %} ships with `collectd` version 5.x. `collectd` 5.x is not backwards compatible with the 4.x release series. Your central `collectd` server needs to be at least version 5.x to accept data sent from {% data variables.product.product_location %}.

For help with further questions or issues, contact {% data variables.contact.contact_ent_support %}.
