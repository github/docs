---
title: 设置暂存实例
intro: '可在单独的隔离环境中设置 {% data variables.product.product_name %} 实例，并使用该实例来验证和测试更改。'
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
shortTitle: Set up a staging instance
ms.openlocfilehash: 86006b3dd1fcdd7a7139f35934cafce1f208c8bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065360'
---
## 关于暂存实例

{% data variables.product.company_short %} 建议将单独的环境设置为测试对 {% data variables.product.product_location %} 的配置的备份、更新或更改。 此环境应与生产系统隔离，称为过渡环境。

例如，为了防止数据丢失，可以定期验证生产实例的备份。 可以定期在过渡环境中将生产数据的备份还原到单独的 {% data variables.product.product_name %} 实例。 在此暂存实例上，还可以测试是否升级到 {% data variables.product.product_name %} 的最新功能版。

{% tip %}

提示：只要暂存实例未用于生产容量，便可以重复使用现有 {% data variables.product.prodname_enterprise %} 许可证文件。

{% endtip %}

## 过渡环境的注意事项

若要完全测试 {% data variables.product.product_name %} 并尽可能重新创建与生产环境类似的环境，请考虑与实例交互的外部系统。 例如，你可能想要在过渡环境中测试以下内容。

- 身份验证，特别是在使用外部身份验证提供程序（如 SAML）的情况下
- 与外部事件单记录系统的集成
- 与持续集成服务器的集成
- 使用 {% data variables.product.prodname_enterprise_api %} 的外部脚本或软件
- 用于发送电子邮件通知的外部 SMTP 服务器

## 设置暂存实例

1. 使用 {% data variables.product.prodname_enterprise_backup_utilities %} 执行生产实例备份。 有关详细信息，请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)”的“关于 {% data variables.product.prodname_enterprise_backup_utilities %}”部分。
2. 设置新实例作为暂存环境。 配置和安装暂存实例的方法与生产实例所用方法相同。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)”。
3. （可选）如果计划在测试环境中测试 {% data variables.product.prodname_actions %} 功能，请查看日志和存储的注意事项。 有关详细信息，请参阅“[使用过渡环境](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)”。
4. 在暂存实例上还原备份。 有关详细信息，请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)”的“还原备份”部分。

## 延伸阅读

- “[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)”
