---
title: Создание реплики с высоким уровнем доступности
intro: 'В активной или пассивной конфигурации устройство реплики является избыточной копией основного устройства. Если основное устройство завершается сбоем, режим высокой доступности позволяет реплике выступать в качестве основного устройства, что дает возможность свести к минимуму прерывание работы службы.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Create HA replica
ms.openlocfilehash: ee384588ee76cd455facdb6fcbe838fc110bc223
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106760'
---
{% data reusables.enterprise_installation.replica-limit %}

## Создание реплики с высоким уровнем доступности

1. Настройте новое устройство {% data variables.product.prodname_ghe_server %} на выбранной платформе. Устройство-реплика должно зеркально отражать параметры ЦП, ОЗУ и хранилища основного устройства. Рекомендуется установить устройство-реплику в независимой среде. Базовые аппаратные, программные и сетевые компоненты должны быть изолированы от компонентов основного устройства. Если вы используете поставщик облачных служб, используйте отдельный регион или зону. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
1. Убедитесь, что новое устройство может взаимодействовать со всеми другими устройствами в этой среде с высоким уровнем доступности через порты 122/TCP и 1194/UDP. Дополнительную информацию см. в разделе [Сетевые порты](/admin/configuration/configuring-network-settings/network-ports#administrative-ports).
1. В браузере перейдите к IP-адресу нового устройства реплики и отправьте лицензию {% data variables.product.prodname_enterprise %}.
{% data reusables.enterprise_installation.replica-steps %}
1. Подключение к IP-адресу устройства-реплики с помощью SSH.
  ```shell
  $ ssh -p 122 admin@REPLICA_IP
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Чтобы проверить подключение к основному устройству и включить режим реплики для новой реплики, выполните `ghe-repl-setup` еще раз.
  ```shell
  $ ghe-repl-setup PRIMARY_IP
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## Создание реплик георепликации

В этом примере конфигурации используются основной узел и две реплики, расположенные в трех разных географических регионах. Хотя три узла могут быть в разных сетях, все узлы должны быть доступны со всех остальных узлов. Для всех остальных узлов должны быть открыты хотя бы обязательные административные порты. Дополнительные сведения о требованиях к портам см. в разделе [Сетевые порты](/enterprise/admin/guides/installation/network-ports/#administrative-ports).

{% данных reusables.enterprise_clustering.network-latency %} Если задержка превышает 70 миллисекунд, рекомендуется кэшировать узлы реплики. Дополнительные сведения см. в разделе "[Настройка кэша репозитория](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)".

1. Создайте первую реплику так же, как и для стандартной конфигурации двух узлов, запустив `ghe-repl-setup` на первой реплике.
  ```shell
  (replica1)$ ghe-repl-setup PRIMARY_IP
  (replica1)$ ghe-repl-start
  ```
2. Создайте вторую реплику и используйте команду `ghe-repl-setup --add`. Флаг `--add` предотвращает перезапись существующей конфигурации репликации и добавляет новую реплику в конфигурацию.
  ```shell
  (replica2)$ ghe-repl-setup --add PRIMARY_IP
  (replica2)$ ghe-repl-start
  ```
3. По умолчанию реплики настроены для одного центра обработки данных и теперь попытаются заполнить данные из существующего узла в том же центре обработки данных. Настройте реплики для разных центров обработки данных, задав другое значение для параметра центра обработки данных. Конкретные значения могут быть любыми при условии, что они отличаются друг от друга. Выполните команду `ghe-repl-node` на каждом узле и укажите центр обработки данных.

  На основном устройстве:
  ```shell
  (primary)$ ghe-repl-node --datacenter [PRIMARY DC NAME]
  ```
  На первой реплике:
  ```shell
  (replica1)$ ghe-repl-node --datacenter [FIRST REPLICA DC NAME]
  ```
  На второй реплике:
  ```shell
  (replica2)$ ghe-repl-node --datacenter [SECOND REPLICA DC NAME]
  ```
  {% tip %}

  **Совет.** Можно одновременно задать параметры `--datacenter` и `--active`.

  {% endtip %}
4. Активный узел-реплика будет хранить копии данных устройства и обслуживать запросы конечных пользователей. Неактивный узел будет хранить копии данных устройства, но не сможет обслуживать запросы конечных пользователей. Включите активный режим с помощью флага `--active` или неактивный режим с помощью флага `--inactive`.

  На первой реплике:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  На второй реплике:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Чтобы применить конфигурацию, используйте команду `ghe-config-apply` на основном сервере.
  ```shell
  (primary)$ ghe-config-apply
  ```

## Настройка DNS для георепликации

Настройте Geo DNS с помощью IP-адресов основных узлов и узлов-реплик. Вы также можете создать DNS CNAME для основного узла (например`primary.github.example.com`) для доступа к основному узлу по SSH или создать резервную копию с помощью `backup-utils`

Для тестирования можно добавить записи в файл локальной рабочей станции `hosts` (например, `/etc/hosts`). Эти примеры записей будут разрешать запросы для `HOSTNAME` в `replica2`. Можно нацелиться на конкретные узлы, добавив комментарий к разным строкам.

```
# <primary IP>      HOSTNAME 
# <replica1 IP>     HOSTNAME 
<replica2 IP>     HOSTNAME 
```

## Дополнительные материалы

- [Сведения о настройке высокого уровня доступности](/enterprise/admin/guides/installation/about-high-availability-configuration)
- [Служебные программы для управления репликацией](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
- [Сведения о георепликации](/enterprise/admin/guides/installation/about-geo-replication/)
