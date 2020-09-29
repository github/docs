---
title: 设置暂存实例
intro: '您可以先使用*暂存实例*测试修改，然后再将修改应用到 {% data variables.product.product_location_enterprise %}。 例如，您可以使用暂存实例测试新的 {% data variables.product.prodname_ghe_server %} 更新或练习导入迁移数据。'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
---

{% tip %}

**提示**：只要暂存实例未用于生产，您便可以重复使用现有的 {% data variables.product.prodname_enterprise %} 许可文件。

{% endtip %}

要彻底测试 {% data variables.product.prodname_ghe_server %} 设备，您需要考虑与该设备进行交互的外部系统。 考虑测试的一些因素包括：

  - 身份验证，特别是在使用外部身份验证提供程序的情况下
  - 与外部事件单记录系统的集成
  - 与持续集成服务器的集成
  - 使用 {% data variables.product.prodname_enterprise_api %} 的外部脚本或软件
  - 用于发送电子邮件通知的外部 SMTP 服务器

1. 使用 {% data variables.product.prodname_enterprise_backup_utilities %} 执行生产实例备份。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)”的“关于 {% data variables.product.prodname_enterprise_backup_utilities %} ”部分。
2. 设置新实例作为暂存环境。 配置和安装暂存实例的方法与生产实例所用方法相同。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)”。
3. 在暂存实例上还原备份。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)”的“还原备份”部分。
