---
title: Включение GitHub Actions с помощью Google Cloud Storage
intro: 'Вы можете включить {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %} и использовать Google Cloud Storage для хранения данных, созданных при выполнении рабочих процессов.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: 33ecb0adfb0786a4308bba80ecc6467fc7adb4e5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192956'
---
{% note %}

**Примечание.** Поддержка {% data variables.product.prodname_actions %} для Google Cloud Storage в настоящее время находится в бета-версии и может быть изменена.

{% endnote %}

{% data reusables.actions.enterprise-storage-about %}

## Предварительные требования

Перед включением {% data variables.product.prodname_actions %} выполните следующие действия:

* Создайте контейнер Google Cloud Storage для хранения данных, созданных при выполнении рабочих процессов.
* Создайте учетную запись службы Google Cloud, которая может получить доступ к контейнеру, и создайте ключ кода проверки подлинности сообщений на основе хэша (HMAC) для учетной записи службы. Дополнительные сведения см. в разделе [Управление ключами HMAC для учетных записей служб](https://cloud.google.com/storage/docs/authentication/managing-hmackeys) в документации по Google Cloud.

  Учетная запись службы должна иметь следующие [разрешения на управление удостоверениями и доступом (IAM)](https://cloud.google.com/storage/docs/access-control/iam-permissions) для контейнера:

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Включение {% data variables.product.prodname_actions %} с помощью Google Cloud Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. В разделе "Хранилище журналов артефактов &" выберите **Google Cloud Storage** и введите сведения о контейнере:

   * **URL-адрес службы**: URL-адрес службы для контейнера. Обычно `https://storage.googleapis.com`это .
   * **Имя контейнера**. Имя контейнера.
   * **Идентификатор доступа HMAC** и **секрет HMAC**. Идентификатор и секрет google Cloud для вашей учетной записи хранения. Дополнительные сведения см. в разделе [Управление ключами HMAC для учетных записей служб](https://cloud.google.com/storage/docs/authentication/managing-hmackeys) в документации по Google Cloud.

   ![Переключатель для выбора Google Cloud Storage и полей для конфигурации](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
