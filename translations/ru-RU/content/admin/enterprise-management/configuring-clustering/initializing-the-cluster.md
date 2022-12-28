---
title: Инициализация кластера
intro: 'Кластер {% data variables.product.prodname_ghe_server %} нужно настроить с помощью лицензии и инициализировать посредством административной оболочки (SSH).'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167087'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## Установка {% data variables.product.prodname_ghe_server %}

1. На каждом узле кластера подготовьте и установите {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Используя административную оболочку или DHCP, настройте **только** IP-адрес каждого узла. Не следует настраивать другие параметры.

## Настройка первого узла

1. Подключитесь узлу, который будет назначен как основной сервер MySQL в `cluster.conf`. Дополнительные сведения см. в разделе [Сведения о файле конфигурации кластера](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file).
2. В веб-браузере перейдите по адресу `https://<ip address>:8443/setup/`.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## Инициализация кластера

Для инициализации кластера требуется файл конфигурации кластера (`cluster.conf`). Дополнительные сведения см. в разделе [Сведения о файле конфигурации кластера](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file).

1. На первом настроенном узле выполните команду `ghe-cluster-config-init`.  При этом кластер инициализируется, если в файле конфигурации кластера есть узлы, которые не были настроены.
2. Выполните команду `ghe-cluster-config-apply`. Это позволит проверить файл `cluster.conf`, применить конфигурацию к каждому файлу узла и запустить настроенные службы на каждом узле.

Чтобы проверить состояние работающего кластера, используйте команду `ghe-cluster-status`.

## Сведения о файле конфигурации кластера

Файл конфигурации кластера (`cluster.conf`) определяет узлы в кластере и службы, которые они выполняют.
Дополнительные сведения см. в разделе [Сведения об узлах кластера](/enterprise/admin/guides/clustering/about-cluster-nodes).

В этом примере `cluster.conf` определяется кластер с 11 узлами.

  - Два узла, называемые `ghes-front-end-node-\*` службами запуска, отвечающими за ответы на запросы клиентов.
  - Три узла, которые называются `ghes-database-node-\*` запускают службы, отвечающие за хранение, получение и репликацию данных базы данных.
  - Три узла, называемые `ghes-search-node-\*` службами запуска, отвечающими за функции поиска.
  - Три узла, называемые `ghes-storage-node-\*` службами запуска, отвечающими за хранение, получение и репликацию данных.

Имя узла может быть любым допустимым именем узла. Имена задаются как имена узла для каждого узла, а также добавляются в `/etc/hosts` на каждый узел, чтобы позволить разрешать узлы друг в друга.

Укажите первый узел кластера, который настроен как основной узел MySQL, посредством `mysql-server` и `mysql-master`.

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

Создайте файл `/data/user/common/cluster.conf` на первом настроенном узле. Например, при выполнении команды `vim`:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
