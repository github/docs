---
title: Configuring time synchronization
intro: '{% data variables.product.prodname_ghe_server %} automatically synchronizes its clock by connecting to NTP servers. You can set the NTP servers that are used to synchronize the clock, or you can use the default NTP servers.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-your-enterprise/configuring-time-synchronization
  - /admin/configuration/configuring-network-settings/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
---

## Default NTP servers

We recommend configuring your own preferred NTP servers. The default NTP server values on GitHub Enterprise Server are the following:

{% ifversion ghes > 3.17 %}
AWS
* Primary Server: 169.254.169.123 prefer iburst minpoll 4 maxpoll 4
* NTP Pool: time.aws.com iburst

Other (non-AWS)
{% endif %}
* Primary Server: 0.github.pool.ntp.org
* Secondary Server: 1.github.pool.ntp.org

You must ensure that the NTP servers (configured or default) are reachable on UDP port 123. For more details on the network ports that need to be open, see [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports).

## Changing the default NTP servers

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the "Settings" sidebar, click **Time**.
1. Under "Primary NTP server", type the hostname of the primary NTP server.
1. Under "Secondary NTP server (optional)", type the hostname of the secondary NTP server.{% ifversion ghes > 3.17 %}
1. Under "NTP pool (optional)", type the NTP pool.{% endif %}
1. Under the "Settings" sidebar, click **Save settings**.
1. Wait for the configuration run to complete.

## Correcting a large time drift

The NTP protocol continuously corrects small time synchronization discrepancies. You can use the administrative shell to synchronize time immediately.

> [!NOTE]
> * You can't modify the Coordinated Universal Time (UTC) zone.
> * You should prevent your hypervisor from trying to set the virtual machine's clock. For more information, see the documentation provided by the virtualization provider.

* Use the `chronyc` command to synchronize the server with the configured NTP server. For example:

```shell
sudo chronyc -a makestep
```
