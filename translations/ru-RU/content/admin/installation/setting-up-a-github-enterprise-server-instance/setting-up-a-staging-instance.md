---
title: Настройка промежуточного экземпляра
intro: 'Экземпляр {% data variables.product.product_name %} можно настроить в отдельной изолированной среде, а затем использовать для проверки и тестирования изменений.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106864'
---
## Сведения о промежуточных экземплярах

{% данных variables.product.company_short %} рекомендует настроить отдельную среду для тестирования резервных копий, обновлений или изменений конфигурации для {% данных variables.location.product_location %}. Эта среда, которую следует изолировать от рабочих систем, называется промежуточной.

Например, для защиты от потери данных можно регулярно проверять резервную копию рабочего экземпляра. Резервную копию рабочих данных можно регулярно восстанавливать в отдельном экземпляре {% data variables.product.product_name %} в промежуточной среде. На этом промежуточном экземпляре можно также протестировать обновление до последнего выпуска компонента {% data variables.product.product_name %}.

{% tip %}

**Совет.** Можно повторно использовать существующий файл лицензии {% data variables.product.prodname_enterprise %}, если промежуточный экземпляр не используется для рабочей среды.

{% endtip %}

## Рекомендации для промежуточной среды

Чтобы тщательно протестировать {% data variables.product.product_name %} и воссоздать среду, аналогичную рабочей среде, рассмотрите внешние системы, взаимодействующие с вашим экземпляром. Например, может потребоваться протестировать в промежуточной среде следующее.

- Проверка подлинности, особенно при использовании внешнего поставщика проверки подлинности, например, SAML
- Интеграция с внешней системой запросов
- Интеграция с сервером непрерывной интеграции
- Внешние скрипты или программное обеспечение, использующие {% данных variables.product.prodname_enterprise_api %}
- Внешний SMTP-сервер для уведомлений по электронной почте

## Настройка промежуточного экземпляра

Промежуточный экземпляр можно настроить с нуля и настроить нужный экземпляр. Дополнительные сведения см. в разделе "[Настройка экземпляра {% данных variables.product.product_name %}](/admin/installation/setting-up-a-github-enterprise-server-instance)" и "[Настройка предприятия](/admin/configuration/configuring-your-enterprise)".

Кроме того, можно создать промежуточный экземпляр, который отражает рабочую конфигурацию, восстановив резервную копию рабочего экземпляра в промежуточный экземпляр.

1. [Создайте резервную копию рабочего экземпляра](#1-back-up-your-production-instance).
2. [Настройка промежуточного экземпляра](#2-set-up-a-staging-instance).
3. [Настройте {% данных variables.product.prodname_actions %}](#3-configure-github-actions).
4. [Настройте {% данных variables.product.prodname_registry %}](#4-configure-github-packages).
5. [Восстановите рабочую резервную копию](#5-restore-your-production-backup).
6. [Проверьте конфигурацию экземпляра](#6-review-the-instances-configuration).
7. [Примените конфигурацию экземпляра](#7-apply-the-instances-configuration).

### 1. Резервное копирование рабочего экземпляра

Если вы хотите протестировать изменения в экземпляре, содержающем те же данные и конфигурацию, что и рабочий экземпляр, создайте резервную копию данных и конфигурации из рабочего экземпляра с помощью {% данных variables.product.prodname_enterprise_backup_utilities %}. Дополнительные сведения см. в статье "[Настройка резервных копий на устройстве](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

{% warning %}

**Предупреждение.** При использовании {% данных variables.product.prodname_actions %} или {% данных variables.product.prodname_registry %} в рабочей среде резервная копия будет включать рабочую конфигурацию для внешнего хранилища. Чтобы избежать потенциальной потери данных путем записи в рабочее хранилище из промежуточного экземпляра, необходимо настроить каждую функцию на шагах 3 и 4 перед восстановлением резервной копии.

{% endwarning %}

### 2. Настройка промежуточного экземпляра

Настройте новый экземпляр для использования в качестве промежуточной среды. Вы можете использовать для подготовки и установки промежуточного экземпляра те же инструкции, что и в случае с рабочим экземпляром. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/).

Если вы планируете восстановить резервную копию рабочего экземпляра, перейдите к следующему шагу. Кроме того, можно настроить экземпляр вручную и пропустить следующие действия.

### 3. Настройка {% данных variables.product.prodname_actions %}

При необходимости при использовании {% данных variables.product.prodname_actions %} в рабочем экземпляре настройте эту функцию на промежуточном экземпляре перед восстановлением рабочей резервной копии. Если вы не используете {% данных variables.product.prodname_actions %}, перейдите к разделу "[4. Настройте {% данных variables.product.prodname_registry %}](#4-configure-github-packages)".

{% warning %}

**Предупреждение.** Если вы не настроите {% данных variables.product.prodname_actions %} на промежуточном экземпляре перед восстановлением рабочей резервной копии, промежуточный экземпляр будет использовать внешнее хранилище рабочего экземпляра, что может привести к потере данных. Настоятельно рекомендуется использовать другое внешнее хранилище для промежуточного экземпляра. Дополнительные сведения см. в разделе [Использование промежуточной среды](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment).

{% endwarning %}

{% данных reusables.enterprise_installation.ssh-into-staging-instance %}
1. Чтобы настроить промежуточный экземпляр для использования внешнего поставщика хранилища для {% данных variables.product.prodname_actions %}, введите одну из следующих команд.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% данных reusables.actions.configure-storage-provider %}
1. Чтобы подготовиться к включению {% данных variables.product.prodname_actions %} на промежуточном экземпляре, введите следующую команду.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. Настройка {% данных variables.product.prodname_registry %}

При необходимости, если вы используете {% данных variables.product.prodname_registry %} в рабочем экземпляре, настройте эту функцию на промежуточном экземпляре перед восстановлением рабочей резервной копии. Если вы не используете {% данных variables.product.prodname_registry %}, перейдите к разделу "[5. Восстановите рабочую резервную копию](#5-restore-your-production-backup)".

{% warning %}

**Предупреждение.** Если вы не настроите {% данных variables.product.prodname_registry %} на промежуточном экземпляре перед восстановлением рабочей резервной копии, промежуточный экземпляр будет использовать внешнее хранилище рабочего экземпляра, что может привести к потере данных. Настоятельно рекомендуется использовать другое внешнее хранилище для промежуточного экземпляра.

{% endwarning %}

1. Просмотрите резервную копию, восстанавливаемую в промежуточном экземпляре.
   - Если вы выполнили резервное копирование с {% данных variables.product.prodname_enterprise_backup_utilities %} 3.5 или более поздней версии, резервная копия включает конфигурацию для {% данных variables.product.prodname_registry %}. Перейдите к следующему шагу.
   - Если вы выполнили резервное копирование с {% данных variables.product.prodname_enterprise_backup_utilities %} 3.4 или более ранней версии, настройте {% данных variables.product.prodname_registry %} на промежуточном экземпляре. Дополнительные сведения см. в разделе "[Начало работы с {% данных variables.product.prodname_registry %} для вашего предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% данных reusables.enterprise_installation.ssh-into-staging-instance %}
1. Настройте подключение к внешнему хранилищу, введя следующие команды, заменив значения заполнителей фактическими значениями для подключения.
   - Хранилище BLOB-объектов Azure:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. Чтобы подготовиться к включению {% данных variables.product.prodname_registry %} в промежуточном экземпляре, введите следующую команду.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. Восстановление рабочей резервной копии

`ghe-restore` Используйте команду для восстановления остальных данных из резервной копии. Дополнительные сведения см. в разделе [Восстановление резервной копии](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup).

Если промежуточный экземпляр уже настроен и вы хотите перезаписать параметры, сертификаты и данные лицензии, добавьте `-c` этот параметр в команду. Дополнительные сведения о параметре см. в разделе ["Использование команд резервного копирования и восстановления](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) " в документации по {% данных variables.product.prodname_enterprise_backup_utilities %}.

### 6. Проверка конфигурации экземпляра

Чтобы получить доступ к промежуточному экземпляру с помощью того же имени узла, обновите файл локальных узлов, чтобы разрешить имя узла промежуточного экземпляра по IP-адресу, изменив `/etc/hosts` файл в macOS или Linux или `C:\Windows\system32\drivers\etc` файл в Windows.

{% note %}

**Примечание.** Промежуточный экземпляр должен быть доступен из того же имени узла, что и рабочий экземпляр. Изменение имени узла для {% данных variables.location.product_location %} не поддерживается. Дополнительные сведения см. в разделе [Настройка имени узла](/admin/configuration/configuring-network-settings/configuring-a-hostname).

{% endnote %}

Затем просмотрите конфигурацию промежуточного экземпляра в {% данных variables.enterprise.management_console %}. Дополнительные сведения см. в разделе "[Доступ к {% данных variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% warning %}

**Предупреждение.** Если вы настроили {% данных variables.product.prodname_actions %} или {% данных variables.product.prodname_registry %} для промежуточного экземпляра, чтобы избежать перезаписи рабочих данных, убедитесь, что конфигурация внешнего хранилища в {% данных variables.enterprise.management_console %} не соответствует рабочему экземпляру.

{% endwarning %}

### 7. Применение конфигурации экземпляра

Чтобы применить конфигурацию из {% данных variables.enterprise.management_console %}, нажмите кнопку **"Сохранить параметры**".

## Дополнительные материалы

- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases)
