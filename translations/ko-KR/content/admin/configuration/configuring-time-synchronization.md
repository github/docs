---
title: Configuring time synchronization
intro: '{% data variables.product.prodname_ghe_server %} automatically synchronizes its clock by connecting to NTP servers. You can set the NTP servers that are used to synchronize the clock, or you can use the default NTP servers.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock/
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings/
  - /enterprise/admin/articles/setting-ntp-servers/
  - /enterprise/admin/categories/time/
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Changing the default NTP servers

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. In the left sidebar, click **Time**. ![The Time button in the {% data variables.enterprise.management_console %} sidebar](/assets/images/enterprise/management-console/sidebar-time.png)
3. Under "Primary NTP server," type the hostname of the primary NTP server. Under "Secondary NTP server," type the hostname of the secondary NTP server. ![The fields for primary and secondary NTP servers in the {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. At the bottom of the page, click **Save settings**. ![The Save settings button in the {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Wait for the configuration run to complete.

### Correcting a large time drift

The NTP protocol continuously corrects small time synchronization discrepancies. You can use the administrative shell to synchronize time immediately.

{% note %}

**참고:**
 - You can't modify the Coordinated Universal Time (UTC) zone.
 - You should prevent your hypervisor from trying to set the virtual machine's clock. For more information, see the documentation provided by the virtualization provider.

{% endnote %}

- Use the `chronyc` command to synchronize the server with the configured NTP server. 예시:

```shell
$ sudo chronyc -a makestep
```
