---
title: Инициализация отработки отказа на устройство реплики
intro: 'Вы можете выполнить отработку отказа на устройство реплики {% data variables.product.prodname_ghe_server %}, если можно использовать командную строку для обслуживания и тестирования или если работа основного устройства завершается сбоем.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: b27d925f5b9ecf35da9ba55633e312e8c9fb94e4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008888'
---
Время, необходимое для отработки отказа, зависит от того, сколько времени требуется для повышения уровня реплики и перенаправления трафика вручную. В среднем на это требуется от 20 до 30 минут.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Если основное устройство доступно, то чтобы позволить репликации завершиться до переключения устройств, необходимо перейти на основное устройство и перевести его в режим обслуживания.

    - Переведите устройство в режим обслуживания.

       - Сведения об использовании консоли управления см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/).

       - Можно также использовать команду `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Когда количество активных операций Git, запросов MySQL и заданий Resque достигнет нуля, подождите 30 секунд. 

      {% note %}

      **Примечание.** В Nomad всегда будут какие-выполняющиеся задания, даже в режиме обслуживания, но вы можете спокойно игнорировать эти задания.
    
      {% endnote %}

   - Чтобы проверить отчет `OK` обо всех каналах репликации, используйте команду `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. Чтобы остановить репликацию и повысить уровень устройства реплики до основного, на устройстве реплики используйте команду `ghe-repl-promote`. Эта команда также автоматически переведет основной узел в режим обслуживания, если он доступен.
  ```shell
  $ ghe-repl-promote
  ```
5. Обновите запись DNS, чтобы она указывала IP-адрес реплики. Трафик направляется в реплику после истечения срока жизни. Если вы используете подсистему балансировки нагрузки, убедитесь, что она настроена для отправки трафика в реплику.
6. Уведомите пользователей о том, что они могут возобновить обычные операции.
7. При желании настройте репликацию из нового основного устройства на существующие устройства и предыдущее основное устройство. Дополнительные сведения см. в разделе [сведения о настройке высокого уровня доступности](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management).
8. Устройства, которые были частью конфигурации с высоким уровнем доступности, но на которые вы не планируете настраивать репликацию, необходимо удалить из конфигурации с высоким уровнем доступности с помощью UUID.
    - На бывших устройствах получите их UUID с помощью команды `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - На новом основном устройстве удалите эти UUID с помощью `ghe-repl-teardown`. Замените *`UUID`* на UUID, полученные на предыдущем шаге.
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## Дополнительные материалы

- [Служебные программы для управления репликацией](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
