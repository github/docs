---
title: Сведения о кластеризации
intro: 'Кластеризация {% data variables.product.prodname_ghe_server %} позволяет масштабировать службы, составляющие {% data variables.product.prodname_ghe_server %}, на нескольких узлах.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 5da017898f1f0e205685dcf1fc29b5088030421a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332483'
---
## Архитектура кластеризации

{% data variables.product.prodname_ghe_server %} is comprised of a set of services. В кластере эти службы выполняются на нескольких узлах, и нагрузки распределяются между ними. Изменения автоматически сохраняются с избыточными копиями на отдельных узлах. Большинство служб являются одноранговыми узлами, которые равноценны другим экземплярам одной и той же службы. Исключениями являются службы `mysql-server` и `redis-server`. Они работают с одним _основным_ узлом с одним или несколькими _узлами-репликами_.

Узнайте больше о [службах, необходимых для кластеризации](/enterprise/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

## Подходит ли кластеризация для моей организации?

{% data reusables.enterprise_clustering.clustering-масштабируемость %} Однако настройка избыточного и масштабируемого кластера может быть сложной и требует тщательного планирования. Эта дополнительная сложность должна быть учтена во время установки, в сценариях аварийного восстановления и в обновлениях.

{% data variables.product.prodname_ghe_server %} требует низкой задержки между узлами и не предназначен для настройки избыточности в различных географических расположениях.

Кластеризация обеспечивает избыточность, но не предназначена для замены конфигурации высокой доступности. Дополнительные сведения см. в разделе [Настройка высокого уровня доступности](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). Настроить основную или дополнительную конфигурацию отработки отказа гораздо проще, чем кластеризацию, и такая конфигурация будет обслуживать потребности множества организаций. Дополнительные сведения см. в разделе [Различия между кластеризацией и высокой доступностью](/enterprise/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

{% data reusables.package_registry.packages-cluster-support %}

## Как получить доступ к кластеризации?

Кластеризация предназначена для конкретных сценариев масштабирования и не предназначена для всех организаций. Если вы хотите использовать кластеризацию, обратитесь к назначенному вам представителю или {% data variables.contact.contact_enterprise_sales %}.
