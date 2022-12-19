---
title: Настройка репликации с высоким уровнем доступности для кластера
intro: 'Вы можете настроить пассивную реплику всего кластера {% data variables.product.prodname_ghe_server %} в другом расположении, что позволяет кластеру выполнять отработку отказа на избыточные узлы.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Configure HA replication
ms.openlocfilehash: 5faf916b803018caf1cf5b0d4b92791b9faba4cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094284'
---
## Сведения о репликации с высоким уровнем доступности для кластеров

Вы можете настроить развертывание кластера {% data variables.product.prodname_ghe_server %} для обеспечения высокой доступности, где идентичный набор пассивных узлов синхронизируется с узлами в активном кластере. Если сбои оборудования или программного обеспечения затронут центр обработки данных с активным кластером, вы можете вручную выполнить отработку отказа на узлы реплики и продолжить обработку запросов пользователей, сводя воздействие сбоя к минимуму.

В режиме высокой доступности каждый активный узел регулярно синхронизируется с соответствующим пассивным узлом. Пассивный узел функционирует в режиме ожидания и не обслуживает приложения и не обрабатывает запросы пользователей.

Мы рекомендуем настроить высокий уровень доступности в рамках комплексного плана аварийного восстановления для {% data variables.product.prodname_ghe_server %}. Мы также рекомендуем выполнять регулярное резервное копирование. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/enterprise/admin/configuration/configuring-backups-on-your-appliance)".

## Предварительные требования

### Оборудование и программное обеспечение

Для каждого узла в вашем активном кластере необходимо подготовить вторую виртуальную машину с идентичными аппаратными ресурсами. Например, если в кластере имеется 11 узлов, и в каждом узле имеется 12 виртуальных ЦП, 96 ГБ ОЗУ и 750 ГБ подключенного хранилища, необходимо подготовить 11 новых виртуальных машин, каждая из которых имеет 12 виртуальных ЦП, 96 ГБ ОЗУ и 750 ГБ подключенного хранилища.

На каждой новой виртуальной машине установите ту же версию {% data variables.product.prodname_ghe_server %}, которая работает на узлах в вашем активном кластере. Вам не нужно передавать лицензию или выполнять какую-либо дополнительную настройку. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance).

{% note %}

**Примечание.** Узлы, которые вы планируете использовать для репликации с высоким уровнем доступности, должны быть изолированными экземплярами {% data variables.product.prodname_ghe_server %}. Не инициализируйте пассивные узлы в качестве второго кластера.

{% endnote %}

### Сеть

Вам нужно назначить статический IP-адрес каждому новому подготовленному узлу и настроить подсистему балансировки нагрузки для приема подключений и направления их в узлы на интерфейсном уровне кластера.

{% данных reusables.enterprise_clustering.network-latency %} Дополнительные сведения о сетевом подключении между узлами в пассивном кластере см. в разделе "[Конфигурация сети кластера](/enterprise/admin/enterprise-management/cluster-network-configuration)".

## Создание реплики с высоким уровнем доступности для кластера

- [Назначение активных узлов основному центру обработки данных](#assigning-active-nodes-to-the-primary-datacenter)
- [Добавление пассивных узлов в файл конфигурации кластера](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Пример конфигурации](#example-configuration)

### Назначение активных узлов основному центру обработки данных

Прежде чем определить дополнительный центр обработки данных для пассивных узлов, необходимо назначить активные узлы основному центру обработки данных.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Запишите имя основного центра обработки данных кластера. В верхнем разделе `[cluster]` файла конфигурации кластера определяется имя основного центра обработки данных с помощью пары "ключ-значение" `primary-datacenter`. По умолчанию основной центр обработки данных для кластера получает имя `default`.

    ```shell
    [cluster]
      mysql-master = HOSTNAME
      redis-master = HOSTNAME
      <strong>primary-datacenter = default</strong>
    ```

    - При необходимости измените имя основного центра обработки данных на более информативное или точное, изменив значение `primary-datacenter`.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Под заголовком каждого узла добавьте новую пару "ключ-значение", чтобы назначить узел центру обработки данных. Используйте то же значение, что и в `primary-datacenter` на шаге 3 выше. Например, если вы хотите использовать имя по умолчанию (`default`), добавьте следующую пару "ключ-значение" в соответствующий раздел для каждого узла.

    ```
    datacenter = default
    ```

    После этого добавления раздел для каждого узла в файле конфигурации кластера должен выглядеть так, как показано в следующем примере. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "HOSTNAME"]
      <strong>datacenter = default</strong>
      hostname = HOSTNAME
      ipv4 = IP-ADDRESS
      ...
    ...
    ```

    {% note %}

    **Примечание.** Если вы изменили имя основного центра обработки данных на шаге 3, найдите пару "ключ-значение" `consul-datacenter` в разделе для каждого узла и измените значение на новое имя основного центра обработки данных. Например, если вы присвоили основному центру обработки данных имя `primary`, используйте для каждого узла следующую пару "ключ-значение".

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Когда {% data variables.product.prodname_ghe_server %} вернет вас в командную строку, это будет означать, что вы завершили назначение узлов основному центру обработки данных кластера.

### Добавление пассивных узлов в файл конфигурации кластера

Чтобы настроить высокий уровень доступности, необходимо определить соответствующий пассивный узел для каждого активного узла в кластере. Ниже приведены инструкции по созданию новой конфигурации кластера, которая определяет как активные, так и пассивные узлы. Вам предстоит:

- Создать копию файла конфигурации активного кластера.
- Изменить копию, добавив в нее IP-адреса новых подготовленных виртуальных машин, чтобы определить пассивные узлы, соответствующие активным узлам.
- Объединить измененную копию конфигурации кластера с конфигурацией активного кластера.
- Применить новую конфигурацию для запуска репликации.

Пример конфигурации см. в разделе [Пример конфигурации](#example-configuration).

1. Для каждого узла в кластере подготовьте соответствующую виртуальную машину с идентичными характеристиками, запустив одну и ту же версию {% data variables.product.prodname_ghe_server %}. Запишите IPv4-адрес и имя узла для каждого нового узла кластера. Дополнительные сведения см. в разделе [Предварительные требования](#prerequisites).

    {% note %}

    **Примечание.** Если вы перенастраиваете высокий уровень доступности после отработки отказа, вместо этого можно использовать старые узлы из основного центра обработки данных.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Создайте резервную копию существующей конфигурации кластера.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Создайте копию существующего файла конфигурации кластера во временном расположении, например _/home/admin/cluster-passive.conf_. Удалите уникальные пары "ключ-значение" для IP-адресов (`ipv*`), UUID (`uuid`) и открытых ключей для WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Удалите раздел `[cluster]` из временного файла конфигурации кластера, скопированного на предыдущем шаге.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Выберите имя для дополнительного центра обработки данных, в котором вы подготовили пассивные узлы, а затем обновите файл конфигурации временного кластера, указав новое имя центра обработки данных. Замените `SECONDARY` выбранным вами именем.

    ```shell
    sed -i 's/datacenter = default/datacenter = SECONDARY/g' ~/cluster-passive.conf
    ```

7. Выберите шаблон для имен пассивных узлов.

    {% warning %}

    **Предупреждение**. Имена пассивных узлов должны быть уникальными и отличаться от имен соответствующих активных узлов.

    {% endwarning %}

8. Откройте в текстовом редакторе временный файл конфигурации кластера из шага 3. Например, можно использовать редактор Vim.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. В каждом разделе временного файла конфигурации кластера обновите конфигурацию узла. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Измените имя узла в кавычках в заголовке раздела и значение `hostname` в разделе на имя пассивного узла согласно шаблону, выбранному на шаге 7 выше.
    - Добавьте новый ключ с именем `ipv4` и задайте значение для статического IPv4-адреса пассивного узла.
    - Добавьте новую пару "ключ-значение" `replica = enabled`.

    ```shell
    [cluster "NEW PASSIVE NODE HOSTNAME"]
      ...
      hostname = NEW PASSIVE NODE HOSTNAME
      ipv4 = NEW PASSIVE NODE IPV4 ADDRESS
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Добавьте содержимое временного файла конфигурации кластера, созданного на шаге 4, в активный файл конфигурации.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Назначьте основные узлы MySQL и Redis в дополнительном центре обработки данных. Замените `REPLICA MYSQL PRIMARY HOSTNAME` и `REPLICA REDIS PRIMARY HOSTNAME` на имена пассивных узлов, которые вы подготовили для соответствия существующим основным узлам MySQL и Redis.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica REPLICA-MYSQL-PRIMARY-HOSTNAME
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica REPLICA-REDIS-PRIMARY-HOSTNAME
    ```

    {% warning %}

    **Предупреждение**. Прежде чем продолжить, проверьте ваш файл конфигурации кластера.

    - В верхнем разделе `[cluster]` проверьте, что значения для `mysql-master-replica` и `redis-master-replica` являются правильными именами пассивных узлов в дополнительном центре обработки данных, которые будут использоваться в качестве основных узлов MySQL и Redis после отработки отказа.
    - В каждом разделе для активного узла с именем <code>[cluster "ACTIVE NODE HOSTNAME"]</code> дважды проверьте следующие пары "ключ-значение".
      - Значение `datacenter` должно соответствовать значению `primary-datacenter` в верхнем разделе `[cluster]`.
      - Значение `consul-datacenter` должно соответствовать значению `datacenter`, которое должно совпадать со значением `primary-datacenter` в верхнем разделе `[cluster]`.
    - Убедитесь, что для каждого активного узла в конфигурации имеется **один** соответствующий раздел для **одного** пассивного узла с той же ролью. В каждом разделе для пассивного узла дважды проверьте каждую пару "ключ-значение".
      - Значение `datacenter` должно соответствовать всем остальным пассивным узлам.
      - Значение `consul-datacenter` должно соответствовать всем остальным пассивным узлам.
      - Значение `hostname` должно соответствовать имени узла в заголовке раздела.
      - Значение `ipv4` должно соответствовать уникальному статическому IPv4-адресу узла.
      - Значение `replica` должно быть `enabled`.
    - Воспользуйтесь возможностью удалить разделы для автономных узлов, которые больше не используются.

    Пример конфигурации см. в разделе [Пример конфигурации](#example-configuration).

    {% endwarning %}

13. Инициализируйте новую конфигурацию кластера. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. После завершения инициализации {% data variables.product.prodname_ghe_server %} отобразит следующее сообщение.

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Настройте подсистему балансировки нагрузки, которая будет принимать подключения от пользователей при отработке отказа и переключении на пассивные узлы. Дополнительные сведения см. в разделе [Конфигурация сети кластера](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer).

Вы завершили настройку репликации с высоким уровнем доступности для узлов в кластере. Каждый активный узел начинает реплицировать конфигурацию и данные в соответствующий пассивный узел, и в случае сбоя вы можете направить трафик в подсистему балансировки нагрузки для дополнительного центра обработки данных. Дополнительные сведения об отработке отказа см. в разделе [Инициирование отработки отказа в кластер реплики](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster).

### Пример конфигурации

Конфигурация `[cluster]` верхнего уровня должна выглядеть так, как показано в следующем примере.

```shell
[cluster]
  mysql-master = HOSTNAME-OF-ACTIVE-MYSQL-MASTER
  redis-master = HOSTNAME-OF-ACTIVE-REDIS-MASTER
  primary-datacenter = PRIMARY-DATACENTER-NAME
  mysql-master-replica = HOSTNAME-OF-PASSIVE-MYSQL-MASTER
  redis-master-replica = HOSTNAME-OF-PASSIVE-REDIS-MASTER
  mysql-auto-failover = false
...
```

Конфигурация для активного узла на уровне хранилища кластера должна выглядеть так, как показано в следующем примере.

```shell
...
[cluster "UNIQUE ACTIVE NODE HOSTNAME"]
  datacenter = default
  hostname = UNIQUE-ACTIVE-NODE-HOSTNAME
  ipv4 = IPV4-ADDRESS
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = IPV4 ADDRESS SET AUTOMATICALLY
  uuid = UUID SET AUTOMATICALLY
  wireguard-pubkey = PUBLIC KEY SET AUTOMATICALLY
...
```

Конфигурация для соответствующего пассивного узла на уровне хранилища должна выглядеть так, как показано в следующем примере.

- Важные отличия от соответствующего активного узла выделены **полужирным шрифтом**.
- {% data variables.product.prodname_ghe_server %} присваивает значения для `vpn`, `uuid` и `wireguard-pubkey` автоматически, поэтому вам не нужно определять значения для пассивных узлов, которые будут инициализироваться.
- Роли сервера, определенные ключами `*-server`, согласуются с соответствующим активным узлом.

```shell
...
<strong>[cluster "UNIQUE PASSIVE NODE HOSTNAME"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</strong>
  <strong>datacenter = SECONDARY DATACENTER NAME</strong>
  <strong>hostname = UNIQUE PASSIVE NODE HOSTNAME</strong>
  <strong>consul-datacenter = SECONDARY DATACENTER NAME</strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = DO NOT DEFINE</strong>
  <strong>uuid = DO NOT DEFINE</strong>
  <strong>wireguard-pubkey = DO NOT DEFINE</strong>
...
```

## Мониторинг репликации между активными и пассивными узлами кластера

Первоначальная репликация между активными и пассивными узлами в кластере занимает некоторое время. Это время зависит от объема реплицируемых данных и уровней активности для {% data variables.product.prodname_ghe_server %}.

Вы можете отслеживать ход выполнения на любом узле кластера с помощью инструментов командной строки, доступных в административной оболочке {% data variables.product.prodname_ghe_server %}. Дополнительные сведения об этой административной оболочке см. в разделе [Доступ к административной оболочке (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh).

- Мониторинг репликации баз данных:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Мониторинг репликации данных репозитория и Gist:

  ```
  ghe-spokes status
  ```

- Мониторинг репликации данных вложений и LFS:

  ```
  ghe-storage replication-status
  ```

- Мониторинг репликации данных Pages:

  ```
  ghe-dpages replication-status
  ```

Для проверки общей работоспособности кластера можно использовать `ghe-cluster-status`. Дополнительные сведения см. в разделе [Служебные программы командной строки](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status).

## Перенастройка репликации с высоким уровнем доступности после отработки отказа

После отработки отказа с активных узлов кластера на пассивные узлы можно перенастроить репликацию с высоким уровнем доступности двумя способами.

### Подготовка и настройка новых пассивных узлов

После отработки отказа можно перенастроить высокий уровень доступности двумя способами. Выбор способа зависит от причины отработки отказа и состояния исходных активных узлов.

1. Подготовка и настройка нового набора пассивных узлов для всех новых активных узлов в дополнительном центре обработки данных.

2. Использование старых активных узлов в качестве новых пассивных узлов.

Процесс перенастройки высокого уровня доступности аналогичен начальной настройке высокого уровня доступности. Дополнительные сведения см. в разделе [Создание реплики с высоким уровнем доступности для кластера](#creating-a-high-availability-replica-for-a-cluster).


## Отключение репликации с высоким уровнем доступности для кластера

Вы можете остановить репликацию на пассивные узлы для развертывания кластера {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. В верхнем разделе `[cluster]` удалите пары "ключ-значение" `redis-master-replica` и `mysql-master-replica`.

4. Удалите каждый раздел для пассивного узла. Для пассивных узлов `replica` настраивается как `enabled`.

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Когда {% data variables.product.prodname_ghe_server %} вернет вас в командную строку, это будет означать, что вы завершили отключение репликации с высоким уровнем доступности.
