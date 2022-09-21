---
title: 关于存储库缓存
intro: 您可以使用存储库缓存提高分散的团队和 CI 服务器场的 Git 读取操作性能。
versions:
  ghes: '>=3.3'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: 06a0dd3ba202c73f1ee035d61f7865fadd13b415
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145100053'
---
{% data reusables.enterprise.repository-caching-release-phase %}

如果您的团队和 CI 服务器场位于世界各地，则主要 {% data variables.product.prodname_ghe_server %} 实例的性能可能会降低。 虽然活动异地副本可以提高读取请求的性能，但这是以限制写入吞吐量为代价的。 要减少主实例上的负载并提高写入吞吐量性能，您可以配置存储库缓存，这是位于这些地理位置分散的客户端附近的存储库的异步只读镜像。 

存储库缓存通过在 CI 场和分散的团队附近提供存储库数据，不再需要 {% data variables.product.product_name %} 通过长途网络链路多次传输相同的 Git 数据以服务于多个客户端。 例如，如果您的主实例位于北美，并且您在亚洲也拥有大量业务，那么在亚洲设置存储库缓存以供 CI 运行者使用将很有益。

存储库缓存侦听主实例（无论是单个实例还是异地复制的实例集），以查找对 Git 数据的更改。 CI 场和其他读取量大的使用者克隆并从存储库缓存（而不是主实例）中提取。 更改以定期间隔在网络上传播，每个缓存实例一次，而不是每个客户端一次。 Git 数据通常会在数据推送到主实例后的几分钟内在存储库缓存中可见。  {% ifversion ghes > 3.3 %}CI 系统可以使用 [`cache_sync` Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) 来响应缓存中可用的数据。{% endif %}

您可以精细控制允许哪些存储库同步到存储库缓存。 Git 数据将仅复制到指定的位置。

{% data reusables.enterprise.repository-caching-config-summary %} 有关详细信息，请参阅“[配置存储库缓存](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)”。
