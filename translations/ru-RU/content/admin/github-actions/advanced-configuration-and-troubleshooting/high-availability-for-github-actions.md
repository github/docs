---
title: Высокий уровень доступности для GitHub Actions
intro: 'Доступны специальные рекомендации по администрированию {% data variables.product.prodname_actions %} в конфигурации с высоким уровнем доступности.'
versions:
  ghes: '*'
type: reference
topics:
  - Actions
  - Enterprise
  - High availability
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/high-availability-for-github-actions
shortTitle: HA for GitHub Actions
ms.openlocfilehash: c8b71ddb651baa0757100c356ce3f9edb0e1edee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112704'
---
## Репликация или избыточность данных {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-storage-ha-backups %}

Настоятельно рекомендуется настроить внешнее хранилище {% data variables.product.prodname_actions %} для использования избыточности или репликации данных. Дополнительные сведения см. в документации поставщика хранилища:

* [Документация по избыточности службы хранилища Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Документация по репликации Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

## Реплики высокого уровня доступности

### Продвижение реплики

При включении конфигурации высокого уровня доступности все реплики автоматически настраиваются на использования конфигурации внешнего хранилища {% data variables.product.prodname_actions %}. Если необходимо инициировать отработку отказа для повышения уровня реплики, для {% data variables.product.prodname_actions %} не требуются дополнительные изменения конфигурации.

Дополнительные сведения см. в разделе [Инициирование отработки отказа на устройстве реплики](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance).

### Удаление реплики с высоким уровнем доступности

Воздерживайтесь от разрешения нескольким экземплярам совершать записи в одно и то же внешнее хранилище {% data variables.product.prodname_actions %}. Это может произойти при использовании команды `ghe-repl-teardown` для остановки и окончательного удаления реплики, включенной {% data variables.product.prodname_actions %}. Это связано с тем, что реплика будет преобразована в автономный {% data variables.product.prodname_ghe_server %}, а после удаления она будет по-прежнему использовать ту же конфигурацию внешнего хранилища, что и основной.

Чтобы устранить эту проблему, рекомендуется либо отказаться от сервера-реплики, либо обновить его конфигурацию {% data variables.product.prodname_actions %} с другим внешним хранилищем.
