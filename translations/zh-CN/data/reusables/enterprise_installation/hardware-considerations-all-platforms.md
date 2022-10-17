---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882785"
---
- [最低要求](#minimum-requirements)
- [存储](#storage)
- [CPU 和内存](#cpu-and-memory)

### 最低要求

建议根据 {% data variables.product.product_location %} 的用户许可数选择不同的硬件配置。 如果预配的资源超过最低要求，您的实例将表现出更好的性能和扩展。

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### 存储

我们建议为 {% data variables.product.prodname_ghe_server %} 配置具有高每秒输入/输出操作数 (IOPS) 和低延迟的高性能 SSD。 工作负载是 I/O 密集型的。 如果使用裸机管理程序，建议直接连接磁盘或使用存储区域网络 (SAN) 中的磁盘。

您的实例需要一个独立于根磁盘的持久数据磁盘。 有关详细信息，请参阅[系统概述](/enterprise/admin/guides/installation/system-overview)。

{% ifversion ghes %}

若要配置 {% data variables.product.prodname_actions %}，必须提供外部 Blob 存储。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)”。

{% endif %}

根文件系统上的可用空间将占磁盘总大小的 50%。 您可以通过构建一个新实例或使用现有实例来调整实例的根磁盘大小。 有关详细信息，请参阅“[系统概述](/enterprise/admin/guides/installation/system-overview#storage-architecture)”和“[增加存储容量](/enterprise/admin/guides/installation/increasing-storage-capacity)”。

### CPU 和内存

{% data variables.product.prodname_ghe_server %} 需要的 CPU 和内存资源取决于用户的活动水平、自动化和集成。

{% ifversion ghes %}

如果计划为 {% data variables.product.prodname_ghe_server %} 实例的用户启用 {% data variables.product.prodname_actions %}，则可能需要为实例预配额外的 CPU 和内存资源。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”。

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

警告：建议用户配置 Web 挂钩事件来通知外部系统有关 {% data variables.product.prodname_ghe_server %} 上的活动。 自动检查更改或轮询将对实例的性能和可扩展性产生不利影响。 有关详细信息，请参阅“[关于更新](/github/extending-github/about-webhooks)”。

{% endwarning %}

有关监视 {% data variables.product.prodname_ghe_server %} 的容量和性能的详细信息，请参阅“[监视设备](/admin/enterprise-management/monitoring-your-appliance)”。

您可以增加实例的 CPU 或内存资源。 有关详细信息，请参阅“[增加 CPU 或内存资源](/enterprise/admin/installation/increasing-cpu-or-memory-resources)”。
