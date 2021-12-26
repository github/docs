---
title: Configuring DNS nameservers
intro: '{% data variables.product.prodname_ghe_server %} uses the dynamic host configuration protocol (DHCP) for DNS settings when DHCP leases provide nameservers. If nameservers are not provided by a dynamic host configuration protocol (DHCP) lease, or if you need to use specific DNS settings, you can specify the nameservers manually.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

The nameservers you specify must resolve {% data variables.product.product_location %}'s hostname.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### Configuring nameservers using the virtual machine console

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configure nameservers for your instance.
{% data reusables.enterprise_installation.vm-console-done %}

### Configuring nameservers using the administrative shell

{% data reusables.enterprise_installation.ssh-into-instance %}
2. To edit your nameservers, enter:
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. Append any `nameserver` entries, then save the file.
4. After verifying your changes, save the file.
5. To add your new nameserver entries to {% data variables.product.product_location %}, enter:
  ```shell
  $ sudo service resolvconf restart
  ```
