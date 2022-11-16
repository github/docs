---
title: Эвакуация узла кластера
intro: Службы данных можно эвакуировать на узел кластера.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 9f98059b0ff0fbc26027aeb6c2154033ce54a1fb
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009038'
---
## Сведения об эвакуации узлов кластера

В конфигурации кластера для {% data variables.product.product_name %} можно эвакуировать узел перед отключением узла от сети. Эвакуация гарантирует, что остальные узлы на уровне служб будут содержать все данные службы. Например, при замене виртуальной машины для узла в кластере необходимо сначала эвакуировать узел.

Дополнительные сведения об узлах и уровнях служб для {% data variables.product.prodname_ghe_server %}см. в разделе [Сведения об узлах кластера](/admin/enterprise-management/configuring-clustering/about-cluster-nodes).

{% warning %}

**Предупреждения**

- Чтобы избежать потери данных, {% data variables.product.company_short %} настоятельно рекомендует эвакуировать узел перед его отключением от сети. 

- Если у вас есть только три узла в кластере служб данных, вы не сможете эвакуировать узлы, поскольку в `ghe-spokes` нет другого места для создания копий. Если у вас четыре или более, `ghe-spokes` переместит все репозитории из эвакуированного узла.

{% endwarning %}

## Эвакуация узла кластера

Если вы планируете перевести узел в автономный режим, но он при этом выполняет роль службы данных, например `git-server`, `pages-server`или `storage-server`, необходимо эвакуировать каждый узел, прежде чем отключить узел от сети.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Чтобы найти UUID узла для эвакуации, выполните следующую команду. Замените `HOSTNAME` именем узла.

   ```shell
   $ ghe-config cluster.HOSTNAME.uuid
   ```
1. Отслеживайте состояние узла, пока {% data variables.product.product_name %} копирует данные. Не отключайте узел от сети до завершения копирования. Чтобы отслеживать состояние узла, выполните любую из следующих команд, заменив UUID `UUID` в шаге 2.

   - **Git**.

     ```shell
     $ ghe-spokes evac-status git-server-UUID
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-UUID'" | ghe-dbconsole -y
     ```

   - **Хранилище**.

     ```shell
     $ ghe-storage evacuation-status storage-server-UUID
     ```
1. После завершения копирования можно эвакуировать узел, выполнив любую из следующих команд, заменив UUID `UUID` из шага 2.

   - **Git**.

     ```shell
     $ ghe-spokes server evacuate git-server-UUID \'REASON FOR EVACUATION\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-UUID
     ```

   - Для **хранилища** сначала переведите узел в автономный режим, выполнив следующую команду.

     ```shell
     $ ghe-storage offline storage-server-UUID
     ```

     После отключения узла хранилища можно эвакуировать узел, выполнив следующую команду.

     ```shell
     $ ghe-storage evacuate storage-server-UUID
     ```
