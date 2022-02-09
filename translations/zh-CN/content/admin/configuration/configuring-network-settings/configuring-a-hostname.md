---
title: 配置主机名
intro: 我们建议为您的设备设置主机名，不建议使用硬编码 IP 地址。
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---

如果配置的是主机名，而不是硬编码 IP 地址，您将能够更改运行 {% data variables.product.product_location %} 的物理硬件，而不会影响用户或客户端软件。

{% data variables.enterprise.management_console %} 中的主机名设置应设置为合适的完全限定域名 (FQDN)，此域名可在互联网上或您的内部网络内解析。 例如，您的主机名设置可以是 `github.companyname.com`。我们还建议为选定的主机名启用子域隔离，以缓解多种跨站点脚本样式漏洞。 更多关于主机名设置的信息，请参阅 [HTTP RFC 的第 2.1 节](https://tools.ietf.org/html/rfc1123#section-2)。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. 输入想要为 {% data variables.product.product_location %} 设置的主机名。 ![用于设置主机名的字段](/assets/images/enterprise/management-console/hostname-field.png)
5. 要测试新主机名的 DNS 和 SSL 设置，请单击 **Test domain settings**。 ![测试域设置按钮](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

配置完主机名后，建议为 {% data variables.product.product_location %} 启用子域隔离。 更多信息请参阅“[启用子域隔离](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)”。
