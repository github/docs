---
title: 将企业从 Docker 注册表迁移到容器注册表
intro: '可以将先前存储在 {% data variables.location.product_location %} 上的 Docker 注册表中的 Docker 映像迁移到 {% data variables.product.prodname_container_registry %}。'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106379'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## 关于 {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}有关详细信息，请参阅“[使用 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”。

有关配置 {% data variables.location.product_location %} 的 {% data variables.product.prodname_registry %} 的详细信息，请参阅“[企业的 {% data variables.product.prodname_registry %} 使用入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。

## 关于从 Docker 注册表迁移

{% data reusables.package_registry.container-registry-replaces-docker-registry %} 如果 {% data variables.location.product_location %} 上的 Docker 注册表包含映像，必须手动将映像迁移到 {% data variables.product.prodname_container_registry %}。

{% ifversion ghes %}

{% note %}

注意：{% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}有关迁移到 {% data variables.product.prodname_container_registry %} 的影响的详细信息，请参阅“[从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)”。

## 将组织迁移到 {% data variables.product.prodname_container_registry %}

可以开始将组织的所有 Docker 映像迁移到 {% data variables.product.prodname_container_registry %}。 迁移操作的持续时间取决于要迁移的映像总数和{% ifversion ghes %}实例{% elsif ghae %}{% data variables.product.product_name %}{% endif %}上的总体负载。 成功迁移后，{% data variables.product.product_name %} 将显示摘要，以后所有 Docker 映像的上传都将使用 {% data variables.product.prodname_container_registry %}。

如果 {% ifversion ghes %} 站点管理员 {% elsif ghae %} 和企业所有者 {% endif %} 为 {% data variables.location.product_location %} 配置了电子邮件通知，你将在迁移完成后收到一封电子邮件。 有关详细信息，请参阅“[配置邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”。

{% note %}

{% ifversion ghes %}注意{% elsif ghae %}注意{% endif %}：

{%- ifversion ghes %}
- 在迁移过程中，实例的 CPU 和内存使用率将会增加。 为确保用户的实例性能，{% data variables.product.company_short %} 建议在活动减少期间开始迁移。
{%- endif %} {% ifversion ghes %}- {% endif %}在迁移过程中，请勿修改企业的设置{% ifversion ghes %}或从管理 SSH 会话运行 `ghe-config-apply`{% endif %}。 {% ifversion ghes %}这些操作将触发配置运行，从而可以重启服务和{% elsif ghae %}。如果修改这些设置，{% endif %} 可能会中断迁移。
{%- ifversion ghes %}
- 迁移后，由于 Docker 注册表和 {% data variables.product.prodname_container_registry %} 中的映像文件重复，因此实例的存储压力将会增加。 {% data variables.product.product_name %} 的未来版本将在所有迁移完成后删除重复的文件。

有关监视 {% data variables.location.product_location %} 的性能和存储的详细信息，请参阅“[访问监视仪表板](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)”。
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“包”。
1. 在要迁移的包数量的右侧，单击“开始迁移”。 在迁移过程中，{% data variables.product.product_name %} 将在此页上显示进度。

迁移完成后，该页将显示结果。 如果迁移失败，该页将显示拥有导致失败的包的组织。

## 重新运行失败的组织迁移

在迁移之前，如果用户在 {% data variables.product.prodname_container_registry %} 中创建了与 Docker 注册表中的现有包同名的包，则迁移将失败。

1. 删除 {% data variables.product.prodname_container_registry %} 中受影响的容器。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)”。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. 在要迁移的包数量的右侧，单击“重新开始迁移”。 在迁移过程中，{% data variables.product.product_name %} 将在此页上显示进度。
1. 如果迁移再次失败，请从步骤 1 开始并重新运行迁移。
