---
title: Восстановление настройки высокого уровня доступности
intro: 'После выполнения отработки отказа на устройство {% data variables.product.prodname_ghe_server %} необходимо как можно скорее восстановить избыточность, а не полагаться на одно устройство.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: 5ca63dc97633208cacd1991bd171a065f2c07205
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008883'
---
## Сведения о восстановлении настройки высокого уровня доступности

Вы можете использовать прежнее основное устройство в качестве нового устройства реплики, если отработка отказа была запланирована или она не связана со работоспособностью устройства. Если отработка отказа связана с проблемой с основным устройством, вы можете создать новое устройство реплики. Дополнительные сведения см. в статье [Создание реплики с высоким уровнем доступности](/enterprise/admin/guides/installation/creating-a-high-availability-replica/).

{% warning %}

**Предупреждение.** Перед настройкой прежнего основного устройства в качестве новой реплики необходимо включить режим обслуживания. Если режим обслуживания не будет включен, произойдет сбой рабочей среды.

{% endwarning %}

## Настройка прежнего основного устройства в качестве новой реплики

1. Подключитесь к IP-адресу прежнего основного устройства с помощью SSH.
  ```shell
  $ ssh -p 122 admin@ FORMER_PRIMARY_IP 
  ```
1. Включите режим обслуживания на прежнем основном устройстве. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).
1. На прежнем основном устройстве запустите `ghe-repl-setup` с IP-адресом прежней реплики.
  ```shell
  $ ghe-repl-setup  FORMER_REPLICA_IP 
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Чтобы проверить подключение к новому основному устройству и включить режим реплики для новой реплики, еще раз запустите `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup  FORMER_REPLICA_IP 
  ```
{% data reusables.enterprise_installation.replication-command %}
