---
title: 设置暂存实例
intro: 'You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: 设置暂存实例
---

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.product.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- 与外部事件单记录系统的集成
- 与持续集成服务器的集成
- 使用 {% data variables.product.prodname_enterprise_api %} 的外部脚本或软件
- 用于发送电子邮件通知的外部 SMTP 服务器

## 设置暂存实例

1. 使用 {% data variables.product.prodname_enterprise_backup_utilities %} 执行生产实例备份。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)”的“关于 {% data variables.product.prodname_enterprise_backup_utilities %} ”部分。
2. 设置新实例作为暂存环境。 配置和安装暂存实例的方法与生产实例所用方法相同。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)”。
3. Optionally, if you plan to test {% data variables.product.prodname_actions %} functionality in your test environment, review the considerations for your logs and storage. For more information, see "[Using a staging environment](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."
4. 在暂存实例上还原备份。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)”的“还原备份”部分。

## 延伸阅读

- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"
