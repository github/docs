---
title: Удаление реплики с высоким уровнем доступности
intro: 'Вы можете временно остановить репликацию в реплику {% data variables.product.prodname_ghe_server %} или окончательно удалить репликацию.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
ms.openlocfilehash: 12fe196d38f93cb29bf49413ef9912028d662130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116776'
---
## Временная остановка репликации

1. При необходимости остановите обслуживание пользовательского трафика в реплике георепликации, удалив записи Geo DNS для реплики.
2. В реплике, в которой вы хотите временно остановить репликацию, выполните команду ghe-repl-stop.
  ```shell
  $ ghe-repl-stop
  ```
3. Чтобы снова запустить репликацию, выполните команду `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```

## Удаление репликации навсегда

1. При необходимости остановите обслуживание пользовательского трафика в реплике георепликации, удалив записи Geo DNS для реплики.
2. В реплике, из которой требуется удалить репликацию, выполните команду `ghe-repl-stop`.
  ```shell
  $ ghe-repl-stop
  ```
3. Чтобы удалить репликацию, выполните `ghe-repl-teardown` в реплике.
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **Примечание.** Если включено {% data variables.product.prodname_actions %}, следует вывести из эксплуатации бывший сервер реплики или обновить его конфигурацию {% data variables.product.prodname_actions %}, чтобы использовать другое внешнее хранилище. Дополнительные сведения см. в статье [Высокий уровень доступности для {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas).
  
  {% endnote %} {% endif %}
