---
title: 配置 DNS 域名服务器
intro: '在 DHCP 租约提供域名服务器时，{% data variables.product.prodname_ghe_server %} 将为 DNS 设置使用动态主机配置协议 (DHCP)。 如果域名服务器不是由动态主机配置协议 (DHCP) 租约提供，或者您需要使用特定的 DNS 设置，可以手动指定域名服务器。'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

指定的域名服务器必须解析 {% data variables.product.product_location %} 的主机名。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### 使用虚拟机控制台配置域名服务器

{% data reusables.enterprise_installation.open-vm-console-start %}
2. 为实例配置域名服务器。
{% data reusables.enterprise_installation.vm-console-done %}

### 使用管理 shell 配置域名服务器

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 要编辑域名服务器，请输入：
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. 附加任何 `nameserver` 条目，然后保存文件。
4. 验证变更后，请保存文件。
5. 要向 {% data variables.product.product_location %} 添加新的域名服务器条目，请输入：
  ```shell
  $ sudo service resolvconf restart
  ```
