---
title: Configuring DNS nameservers
intro: '{% data variables.product.prodname_ghe_server %} uses the dynamic host configuration protocol (DHCP) for DNS settings when DHCP leases provide nameservers. If nameservers are not provided by a dynamic host configuration protocol (DHCP) lease, or if you need to use specific DNS settings, you can specify the nameservers manually.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-network-settings/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
---
The nameservers you specify must resolve {% data variables.location.product_location %}'s hostname.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Configuring nameservers using the virtual machine console

{% data reusables.enterprise_installation.open-vm-console-start %}
1. Configure nameservers for your instance.
{% data reusables.enterprise_installation.vm-console-done %}

## Configuring nameservers using the administrative shell

{% data reusables.enterprise_installation.ssh-into-instance %}

1. To edit your nameservers, use the `ghe-setup-network` command in visual mode. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)."

   ```shell
   ghe-setup-network -v
   ```

1. To add your new nameserver entries to {% data variables.location.product_location %}, run the following:

   ```shell
   sudo service resolvconf restart
   sudo service dnsmasq restart
   ```
