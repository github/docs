---
title: Конфигурация сети кластера
intro: 'Для правильной работы кластеризации {% data variables.product.prodname_ghe_server %} используется правильное разрешение DNS-имен, балансировку нагрузки и обмен данными между узлами.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/cluster-network-configuration
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
shortTitle: Configure a cluster network
ms.openlocfilehash: 73b011bcaea2655fef728a142b20d1067a4df0b6
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098412'
---
## Рекомендации по сети

Реализация самого простого проекта сети для кластеризации заключается в размещении узлов в одной локальной сети. Если кластер должен охватывать подсети, не рекомендуется настраивать правила брандмауэра между сетями. Задержка между узлами должна быть меньше 1 миллисекунд.

{% данных reusables.enterprise_clustering.network-latency %}

### Порты приложений для конечных пользователей

Порты приложений предоставляют конечным пользователям доступ к веб-приложениям и Git.

| Порт     | Описание     | С шифрованием  |
| :------------- | :------------- | :------------- |
| 22/TCP    | Git по протоколу SSH | Да |
| 25/TCP    | SMTP | Требуется STARTTLS |
| 80/TCP    | HTTP | Нет<br>(Если протокол SSL включен, этот порт перенаправляет на HTTPS) |
| 443/TCP   | HTTPS | Да |
| 9418/TCP  | Простой порт протокола Git<br>(Отключено в частном режиме) | Нет |

### Административные порты

Административные порты не требуются для использования основного приложения конечными пользователями.

| Порт     | Описание     | С шифрованием  |
| :------------- | :------------- | :------------- |
| ICMP      | Проверка связи ICMP | Нет |
| 122/TCP   | Административный SSH | Да |
| 161/UDP    | SNMP | Нет |
| 8080/TCP  | HTTP консоли управления | Нет<br>(Если протокол SSL включен, этот порт перенаправляет на HTTPS) |
| 8443/TCP  | HTTPS консоли управления | Да |

### Порты взаимодействия кластера

Если брандмауэр уровня сети установлен между узлами, эти порты должны быть доступны. Обмен данными между узлами не шифруется. Эти порты не должны быть доступны извне.

| Порт     | Описание     |
| :------------- | :------------- |
| 1336/TCP  | Внутренний API |
| 3033/TCP  | Внутренний доступ к SVN |
| 3037/TCP  | Внутренний доступ к SVN |
| 3306/TCP  | MySQL |
| 4486/TCP  | Доступ к регулятору |
| 5115/TCP  | Серверная часть служба хранилища |
| 5208/TCP  | Внутренний доступ к SVN |
| 6379/TCP  | Redis |
| 8001/TCP  | Grafana |
| 8090/TCP  | Внутренний доступ к GPG |
| 8149/TCP  | Доступ к файловому серверу GitRPC |
| 8300/TCP | Consul |
| 8301/TCP | Consul |
| 8302/TCP | Consul |
| 9000/TCP  | Управляющая программа Git |
| 9102/TCP  | Файловый сервер Pages |
| 9105/TCP  | Сервер LFS |
| 9200/TCP  | Elasticsearch |
| 9203/TCP | Служба семантического кода |
| 9300/TCP  | Elasticsearch |
| 11211/TCP | Memcache |
| 161/UDP   | SNMP |
| 8125/UDP  | Statsd |
| 8301/UDP | Consul |
| 8302/UDP | Consul |
| 25827/UDP | Collectd |

## Настройка подсистемы балансировки нагрузки

 Рекомендуется использовать внешнюю подсистему балансировки нагрузки на основе TCP, которая поддерживает протокол PROXY для распределения трафика между узлами. Рассмотрите возможность использования следующих конфигураций подсистемы балансировки нагрузки:

 - TCP-порты (как показано ниже) следует перенаправить на узлы, на которых запущена служба `web-server`. Это единственные узлы, обслуживающие внешние клиентские запросы.
 - Прикрепленные сеансы не должны быть включены.

{% data reusables.enterprise_installation.terminating-tls %}

## Обработка сведений о подключениях клиентов

Так как подключения клиентов к кластеру выполняются из подсистемы балансировки нагрузки, IP-адрес клиента может быть потерян. Для корректной записи сведений о подключении клиента требуется учесть некоторые особенности.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

### Включение поддержки PROXY на {% data variables.product.prodname_ghe_server %}

Настоятельно рекомендуется включить поддержку PROXY для экземпляра и подсистемы балансировки нагрузки.

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

 - Для имеющегося экземпляра используйте следующую команду:
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - Для подсистемы балансировки нагрузки следуйте инструкциям, предоставленным поставщиком.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Включение поддержки X-Forwarded-For на {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

Чтобы включить заголовок `X-Forwarded-For`, используйте следующую команду:

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### Настройка проверок работоспособности
Проверки работоспособности позволяют подсистеме балансировки нагрузки прекратить направлять трафик узлу, который не отвечает, в случае неудачной попытки выполнения предварительно настроенной проверки этого узла. Если узел кластера завершается сбоем, проверки работоспособности, связанные с избыточными узлами, обеспечивают высокий уровень доступности.

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Требования к DNS

{% data reusables.enterprise_clustering.load_balancer_dns %}
