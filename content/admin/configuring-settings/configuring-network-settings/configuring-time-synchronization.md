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
## Changing the default NTP servers

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the "Settings" sidebar, click **Time**.
1. Under "Primary NTP server," type the hostname of the primary NTP server.
1. Under "Secondary NTP server," type the hostname of the secondary NTP server.
1. Under the "Settings" sidebar, click **Save settings**.
1. Wait for the configuration run to complete.

## Correcting a large time drift

The NTP protocol continuously corrects small time synchronization discrepancies. You can use the administrative shell to synchronize time immediately.

{% note %}

**Notes:**
* You can't modify the Coordinated Universal Time (UTC) zone.
* You should prevent your hypervisor from trying to set the virtual machine's clock. For more information, see the documentation provided by the virtualization provider.

{% endnote %}

* Use the `chronyc` command to synchronize the server with the configured NTP server. For example:

```shell
sudo chronyc -a makestep
```
