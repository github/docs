---
title: 访问监视仪表板
intro: '{% data variables.product.prodname_ghe_server %} 中基于 Web 的监视仪表板可以显示关于 {% data variables.product.prodname_ghe_server %} 设备的历史数据，例如 CPU 和内存使用情况、应用程序和身份验证响应时间以及整体系统健康状况。'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
topics:
  - 企业
---

### 访问监视仪表板

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. 在页面顶部，单击 **Monitor**。 ![监视仪表板链接](/assets/images/enterprise/management-console/monitor-dash-link.png)

### 排查设备上的常见资源分配问题

{% note %}

**注**：由于通过持续集成 (CI) 或构建服务器定期轮询 {% data variables.product.product_location %} 会引发拒绝服务攻击，从而导致问题的出现，因此，建议使用 web 挂钩推送更新。 更多信息请参阅“[关于 web 挂钩](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)”。

{% endnote %}

使用监视仪表板实时了解设备资源健康状况并确定如何解决高利用率问题。

| 问题         | 可能原因                  | 建议                                                                                                                                                                                                                                                                               |
| ---------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CPU 利用率高   | 在同一主机上运行的其他服务或程序争用 VM | 如有可能，请将其他服务或程序重新配置为占用较少的 CPU 资源。 要增加 VM 的总 CPU 资源，请参阅“[增加 CPU 或内存资源](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)”。                                                                                                           |
| 内存使用量高     | 在同一主机上运行的其他服务或程序争用 VM | 如有可能，请将其他服务或程序重新配置为占用较少内存。 要增加 VM 上可用的总内存大小，请参阅“[增加 CPU 或内存资源](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)”。                                                                                                                 |
| 可用磁盘空间小    | 较大的二进制或日志文件占用磁盘空间     | 如有可能，请在独立服务器上托管较大的二进制文件，并压缩或存档日志文件。 如有必要，请按“[增加存储容量](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)”中的步骤操作，为您的平台增加 VM 的磁盘空间。                                                                                                           |
| 响应时间较正常时间长 | 通常是上述问题之一造成的          | 确定并解决根本问题。 如果响应时间仍较长，请联系 {% data variables.contact.contact_ent_support %}。                                                                                                                                                                                                     |
| 错误率提高      | 软件问题                  | 联系 {% data variables.contact.contact_ent_support %} 并附上支持包。 更多信息请参阅“[向 {% data variables.product.prodname_enterprise %} Support 提供数据](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”。 |
