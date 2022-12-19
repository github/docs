---
title: Различия между кластеризацией и высоким уровнем доступности (HA)
intro: "{% data variables.product.prodname_ghe_server %} Конфигурация высокого уровня доступности (HA)\_— это основная или дополнительная конфигурация отработки отказа, которая обеспечивает избыточность, тогда как кластеризация обеспечивает избыточность и масштабируемость путем распределения нагрузки, связанной с чтением и записью данных, между несколькими узлами."
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332491'
---
## Сценарии сбоев

Высокий уровень доступности (HA) и кластеризация обеспечивают избыточность, устраняя единственный узел как точку отказа. Они могут обеспечить доступность в следующих сценариях:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Масштабируемость

{% data reusables.enterprise_clustering.clustering-scalability %} При обеспечении высокого уровня доступности масштаб устройства зависит исключительно от основного узла, а нагрузка не распространяется на сервер-реплику.

## Различия в методе отработки отказа и конфигурации

| Компонент     | Конфигурация отработки отказа     | Метод отработки отказа |
| :------------- | :------------- | :--- |
| Конфигурация высокого уровня доступности       | Запись DNS с низким TTL указывает на основное устройство или подсистему балансировки нагрузки. | Необходимо вручную повысить уровень устройства реплики в конфигурациях отработки отказа DNS и подсистемы балансировки нагрузки. |
| Кластеризация | Запись DNS должна указывать на подсистему балансировки нагрузки. | Если узел за подсистемой балансировки нагрузки выходит из строя, трафик автоматически отправляется на другие функционирующие узлы. |

## Резервное копирование и аварийное восстановление

Ни высокий уровень доступности, ни кластеризация не должны рассматриваться как замена регулярному резервному копированию. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)".

## Наблюдение

Функции доступности, особенно с автоматической отработкой отказа, такие как кластеризация, могут маскировать сбой, так как служба обычно не нарушается при сбое. Независимо от того, используете ли вы высокий уровень доступности или кластеризацию, важно отслеживать работоспособность каждого экземпляра, чтобы вы знали, когда происходит сбой. Дополнительные сведения о мониторинге см. в статьях "[Рекомендуемые пороговые значения оповещений](/enterprise/admin/guides/installation/recommended-alert-thresholds/)" и "[Мониторинг узлов кластера](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)".

## Дополнительные материалы
- Дополнительные сведения о кластеризации {% data variables.product.prodname_ghe_server %} см. в статье "[Сведения о кластеризации](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)".
- Дополнительные сведения о высокой доступности см. в статье "[Настройка {% data variables.product.prodname_ghe_server %} для обеспечения высокого уровня доступности](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".
