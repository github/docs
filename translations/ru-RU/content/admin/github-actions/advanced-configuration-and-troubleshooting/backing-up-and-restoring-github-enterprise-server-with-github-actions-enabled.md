---
title: Резервное копирование и восстановление сервера GitHub Enterprise с включенным GitHub Actions
shortTitle: Backing up and restoring
intro: 'Чтобы восстановить резервную копию {% данных variables.location.product_location %} при включении {% данных variables.product.prodname_actions %} необходимо настроить {% данных variables.product.prodname_actions %} перед восстановлением резервной копии с помощью {% данных variables.product.prodname_enterprise_backup_utilities %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: 43279c6b99cce6618de9253c5d0451c0a661b095
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107312'
---
## Сведения о резервном копировании данных {% variables.product.product_name %} при использовании {% данных variables.product.prodname_actions %}

Вы можете использовать {% данных variables.product.prodname_enterprise_backup_utilities %} для резервного копирования и восстановления данных и конфигурации для {% данных variables.location.product_location %} в новый экземпляр. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/admin/configuration/configuring-backups-on-your-appliance)".

Однако не все данные для {% данных variables.product.prodname_actions %} включены в эти резервные копии. {% data reusables.actions.enterprise-storage-ha-backups %}

## Восстановление резервной копии {% данных variables.product.product_name %} при включении {% данных variables.product.prodname_actions %}

Чтобы восстановить резервную копию {% данных variables.location.product_location %} с {% данных variables.product.prodname_actions %}}, необходимо вручную настроить параметры сети и внешнее хранилище на целевом экземпляре перед восстановлением резервной копии из {% данных variables.product.prodname_enterprise_backup_utilities %}. 

1. Убедитесь, что исходный экземпляр находится в автономном режиме.
1. Вручную настройте параметры сети для замены экземпляра {% данных variables.product.prodname_ghe_server %}. Параметры сети исключаются из моментального снимка резервной копии и не перезаписываются `ghe-restore`. Дополнительные сведения см. в разделе [Настройка параметров сети](/admin/configuration/configuring-network-settings).
1. SSH в целевом экземпляре. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Настройте целевой экземпляр для использования той же внешней службы хранилища для {% данных variables.product.prodname_actions %} в качестве исходного экземпляра, введя одну из следующих команд.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% данных reusables.actions.configure-storage-provider %}
1. Чтобы подготовиться к включению {% данных variables.product.prodname_actions %} в целевом экземпляре, введите следующую команду.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% данных reusables.actions.apply-configuration-and-enable %}
1. После настройки и включения {% данных variables.product.prodname_actions %} для восстановления остальных данных из резервной копии используйте `ghe-restore` команду. Дополнительные сведения см. в разделе [Восстановление резервной копии](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup).
1. Повторно зарегистрируйте локальные средства выполнения в целевом экземпляре. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).
