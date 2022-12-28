---
title: Запуск отработки отказа в кластер реплики
intro: 'Если кластер {% data variables.product.prodname_ghe_server %} завершится сбоем, можно выполнить отработку отказа на пассивную реплику.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
ms.openlocfilehash: 14889e5d861475bc2d887062fb12450194cd6505
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120611'
---
## Сведения об отработке отказа в кластер реплики

В случае сбоя в основном центре обработки данных можно выполнить отработку отказа на узлы реплики в дополнительном центре обработки данных, если пассивный узел реплики настроен для каждого узла в активном кластере.

Время, необходимое для отработки отказа, зависит от того, сколько времени требуется для повышения уровня кластера реплики и перенаправления трафика вручную.

При повышении уровня кластера реплики не настройка репликации для существующего кластера не выполняется автоматически. После повышения уровня кластера реплики можно перенастроить репликацию из нового активного кластера. Дополнительные сведения см. в разделе [Настройка высокого уровня доступности для кластера](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover).

## Предварительные требования

Чтобы выполнить отработку отказа на пассивные узлы реплики, необходимо настроить высокий уровень доступности для кластера. Дополнительные сведения см. в разделе [Настройка высокого уровня доступности для кластера](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster).

## Запуск отработки отказа в кластер реплики

1. SSH в любой пассивный узел в дополнительном центре обработки данных для кластера. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh).

2. Инициализируйте отработку отказа в дополнительный кластер и настройте его для работы в качестве активных узлов.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Обновите запись DNS, чтобы указать IP-адрес подсистемы балансировки нагрузки для пассивного кластера. Трафик направляется в реплику после истечения срока жизни.

Отработка отказа считается завершенной после того, как {% data variables.product.prodname_ghe_server %} снова отобразит строку запроса и будут распространены обновления DNS. Пользователи могут получить доступ к {% data variables.product.prodname_ghe_server %}, используя обычное имя узла для вашего кластера.
