---
title: Configuring the IP address using the virtual machine console
intro: 'By default, {% data variables.product.prodname_ghe_server %} retrieves network settings via the dynamic host configuration protocol (DHCP). If your platform supports it, or if DHCP is unavailable, you can also configure the network settings using the virtual machine console.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-network-settings/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
---

> [!NOTE]
> We do not support adding additional network adapters to {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_installation.open-vm-console-start %}
1. Choose to configure the `IPv4` or `IPv6` protocol.
1. Configure options for the protocol you chose.
{% data reusables.enterprise_installation.vm-console-done %}
