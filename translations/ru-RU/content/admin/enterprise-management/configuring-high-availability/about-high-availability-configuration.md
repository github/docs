---
title: Сведения о настройке высокого уровня доступности
intro: 'В конфигурации высокого уровня доступности полностью избыточное дополнительное устройство {% data variables.product.prodname_ghe_server %} синхронизируется с основным устройством посредством репликации всех основных хранилищ данных.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
ms.openlocfilehash: b54ca60c6cf1d79b9435ca8deedebec09ed39396
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109003'
---
При конфигурации высокого уровня доступности происходит автоматическая настройка односторонней асинхронной репликации всех хранилищ данных (репозиториев Git, MySQL, Redis и Elasticsearch) с основного устройства на устройство реплики. Также реплицируется большинство параметров конфигурации {% data variables.product.prodname_ghe_server %}, включая пароль {% data variables.enterprise.management_console %}. Дополнительные сведения см. в статье "[Доступ к консоли управления](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% data variables.product.prodname_ghe_server %} поддерживает конфигурацию "активный — пассивный", где устройство реплики выполняется в режиме ожидания со службами баз данных, работающими в режиме репликации, но службы приложений остановлены.

После выполнения репликации {% data variables.enterprise.management_console %} больше недоступна на устройствах реплики. Если перейти к IP-адресу или имени узла реплики на порту 8443, появится сообщение "Сервер в режиме репликации", указывающее, что устройство в настоящее время настроено в качестве реплики.
{% data reusables.enterprise_installation.replica-limit %}

## Целевые сценарии сбоев

Используйте конфигурацию высокого уровня доступности для защиты от:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

Конфигурация высокого уровня доступности не подходит для использования в следующих случаях:

  - **Горизонтальное масштабирование**. Хотя трафик можно распределять географически с помощью георепликации, производительность операций записи ограничена скоростью и доступностью основного устройства. Дополнительные сведения см. в статье "[Сведения о георепликации](/enterprise/admin/guides/installation/about-geo-replication/)".
  - **Нагрузка CI/CD**. При наличии большого количества клиентов CI, географически удаленных от основного экземпляра, можно настроить кэш репозитория. Дополнительные сведения см. в разделе [Сведения о кэшировании репозитория](/admin/enterprise-management/caching-repositories/about-repository-caching).
  - **Резервное копирование основного устройства**. Реплика высокого уровня доступности не заменяет резервные копии вне сайта в плане аварийного восстановления. Некоторые формы повреждения или потери данных могут быть реплицированы немедленно с основного устройства на реплику. Чтобы обеспечить безопасный откат к стабильному прошлому состоянию, необходимо выполнять регулярные операции резервного копирования с историческими моментальными снимками.
  - **Обновления без простоя**. Чтобы предотвратить потерю данных и возникновение ситуаций с разделением вычислительных мощностей в контролируемых сценариях повышения уровня, переведите основное устройство в режим обслуживания и дождитесь завершения всех операций записи перед повышением уровня реплики.

## Стратегии отработки отказа сетевого трафика

Во время отработки отказа необходимо отдельно настроить и контролировать перенаправление сетевого трафика с основного устройства на реплику.

### Отработка отказа DNS

При отработке отказа DNS используйте короткие значения TTL в записях DNS, указывающие на основное устройство {% data variables.product.prodname_ghe_server %}. Рекомендуемое значение TTL — от 60 секунд до пяти минут.

Во время отработки отказа необходимо перевести основное устройство в режим обслуживания и перенаправлять записи DNS на IP-адрес устройства реплики. Время, необходимое для перенаправления трафика с основного устройства, будет зависеть от TTL и времени, необходимого для обновления записей DNS.

Если вы используете георепликацию, необходимо настроить геоизбыточную службу DNS для направления трафика в ближайшую реплику. Дополнительные сведения см. в статье "[Сведения о георепликации](/enterprise/admin/guides/installation/about-geo-replication/)".

### Подсистема балансировки нагрузки

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Во время отработки отказа необходимо перевести основное устройство в режим обслуживания. Подсистему балансировки нагрузки можно настроить для автоматического определения повышения уровня реплики до основного устройства, или может потребоваться изменить конфигурацию вручную. Прежде чем реплика начнет реагировать на трафик пользователя, необходимо вручную повысить ее уровень до основного устройства. Дополнительные сведения см. в статье "[Использование {% data variables.product.prodname_ghe_server %} с подсистемой балансировки нагрузки](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)".

{% data reusables.enterprise_installation.monitoring-replicas %}

## Служебные программы для управления репликацией

Для управления репликацией на {% data variables.product.prodname_ghe_server %} используйте эти программы командной строки, подключившись к устройству реплики по протоколу SSH.

### ghe-repl-setup

Команда `ghe-repl-setup` переводит устройство {% data variables.product.prodname_ghe_server %} в режим ожидания реплики.

 - Зашифрованный VPN-туннель WireGuard настроен для обмена данными между двумя устройствами.
 - Службы баз данных настроены для репликации и запущены.
 - Службы приложений отключены. При попытках доступа к устройству реплики по протоколу HTTP, Git или другим поддерживаемым протоколам откроется страница, информирующая о том, что устройство находится в режиме реплики, или будет выведено сообщение об ошибке.

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

### ghe-repl-start

Команда `ghe-repl-start` включает активную репликацию всех хранилищ данных.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

### ghe-repl-status

Команда `ghe-repl-status` возвращает состояние `OK`, `WARNING` или `CRITICAL` для каждого потока репликации хранилища данных. Если любой из каналов репликации находятся в состоянии `WARNING`, команда завершит работу с выводом кода `1`. Аналогично, если любой из каналов репликации находятся в состоянии `CRITICAL`, команда завершит работу с выводом кода `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

Параметры `-v` и `-vv` предоставляют сведения о состоянии репликации каждого хранилища данных:

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

### ghe-repl-start

Команда `ghe-repl-stop` временно отключает репликацию для всех хранилищ данных и останавливает службы репликации. Чтобы возобновить репликацию, используйте команду [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

### ghe-repl-promote

Команда `ghe-repl-promote` отключает репликацию и преобразует устройство реплики в основное. Устройство настроено с теми же параметрами, что и исходное основное, и все службы включены.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

### ghe-repl-teardown

Команда `ghe-repl-teardown` полностью отключает режим репликации, удаляя конфигурацию реплики.

## Дополнительные материалы

- "[Создание реплики с высоким уровнем доступности](/enterprise/admin/guides/installation/creating-a-high-availability-replica)"
- "[Сетевые порты](/admin/configuration/configuring-network-settings/network-ports)"
