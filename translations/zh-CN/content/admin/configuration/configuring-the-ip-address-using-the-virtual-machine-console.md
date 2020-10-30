---
title: 使用虚拟机控制台配置 IP 地址
intro: '默认情况下，{% data variables.product.prodname_ghe_server %} 通过动态主机配置协议 (DHCP) 检索网络设置。 如果您的平台不支持该协议，或者 DHCP 不可用，您也可以使用虚拟机控制台配置网络设置。'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.open-vm-console-start %}
3. 选择配置 `IPv4` 或 `IPv6` 协议。 ![用于选择 IPv4 或 IPv6 协议的选项](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. 配置所选协议的选项。 ![含 IP 协议选项的菜单](/assets/images/enterprise/network-configuration/network-settings-selection.png)
{% data reusables.enterprise_installation.vm-console-done %}
