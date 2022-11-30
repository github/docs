---
title: 升级要求
intro: '对 {% data variables.product.prodname_ghe_server %} 进行升级之前，请查阅升级策略规划的建议和要求。'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106875'
---
{% note %}

**注意：**
- [enterprise.github.com](https://enterprise.github.com/releases) 上提供了支持版本的升级包。 验证完成升级所需的升级包的可用性。 如果升级包不可用，请联系 {% data variables.contact.contact_ent_support %} 获得帮助。
- 如果使用的是 {% data variables.product.prodname_ghe_server %} 群集，请参阅 {% data variables.product.prodname_ghe_server %} 群集指南中的“[升级群集](/enterprise/admin/guides/clustering/upgrading-a-cluster/)”，了解群集特有的特定说明。
- {% data variables.product.prodname_ghe_server %} 版本说明提供了 {% data variables.product.prodname_ghe_server %} 每一版本的新功能一览表。 有关详细信息，请参阅[发布页面](https://enterprise.github.com/releases)。

{% endnote %}

## 建议

- 尽量减少升级过程中的升级次数。 例如，不要从 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} 升级到 {{ enterpriseServerReleases.supported[1] }} 再升级到 {{ enterpriseServerReleases.latest }}，而应从 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} 升级到 {{ enterpriseServerReleases.latest }}。 使用 [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) 查找当前发行版本的升级路径。
- 如果你的版本比最新版本低几个版本，请通过升级过程的每一步骤尽量将 {% data variables.location.product_location %}升级为更高版本。 在每次升级时尽可能使用最新版本，这样一来您可以充分利用性能改进和错误修复。 例如，您可以从 {% data variables.product.prodname_enterprise %} 2.7 升级到 2.8 再升级到 2.10，但从 {% data variables.product.prodname_enterprise %} 2.7 升级到 2.9 再升级到 2.10 会在第二步中使用更高版本。
- 升级时使用最新补丁版本。 {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- 使用暂存实例测试升级步骤。 有关详细信息，请参阅“[设置暂存实例](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)”。
- 如果运行多次升级，两次功能升级之间至少应间隔 24 小时，以便使数据迁移和后台升级任务能够彻底完成。
- 在升级虚拟机之前拍摄快照。 有关详细信息，请参阅“[拍摄快照](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot)”。 
- 确保您最近成功备份了实例。 有关详细信息，请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} README.md 文件](https://github.com/github/backup-utils#readme)。

## 要求

- 必须从最近两个版本的功能版本开始升级。 例如，要升级到 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}，您必须使用 {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} 或 {{ enterpriseServerReleases.supported[2] }}。
- 使用升级包进行升级时，请为 {% data variables.product.prodname_ghe_server %} 最终用户安排维护时段。
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- 如果受影响的服务（例如内核、MySQL 或 Elasticsearch）需要重启 VM 或服务，热补丁可能需要停机一段时间。 需要重启时，系统会通知您。 您可以在稍后完成重启。
- 通过热补丁升级时，必须提供额外的根存储，因为热补丁会安装某些服务的多个版本，直至升级完成。 如果根磁盘存储空间不足，运行前检查将发出通知。
- 通过热补丁进行升级时，您的实例负荷不能过大，否则可能影响热补丁过程。
- 升级到 {% data variables.product.prodname_ghe_server %} 2.17 会将您的审核日志从 ElasticSearchElasticSearch 迁移到 MySQL。 这种迁移还会增加恢复快照所需的时长和磁盘空间大小。 迁移之前，请使用此命令检查 ElasticSearch 审核日志索引中的字节数：
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
使用此数字估算 MySQL 审核日志将需要的磁盘空间大小。 该脚本还会在导入过程中监视可用磁盘空间大小。 在可用磁盘空间大小接近于迁移必需的磁盘空间大小时，监视此数字尤为重要。

## 后续步骤

查看这些建议和要求后，您可以对 {% data variables.product.prodname_ghe_server %} 进行升级。 有关详细信息，请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”。
