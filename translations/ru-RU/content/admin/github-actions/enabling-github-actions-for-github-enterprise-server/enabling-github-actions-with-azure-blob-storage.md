---
title: Включение GitHub Actions с использованием хранилища BLOB-объектов Azure
intro: 'Можно включить {% data variables.product.prodname_actions %} на {% data variables.product.prodname_ghe_server %} и использовать хранилище BLOB-объектов Azure для хранения данных, созданных при выполнении рабочего процесса.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: b6abccdfea0d33b387fc3ec6df563fcbaf57f861
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109543'
---
## Предварительные требования

Перед включением {% data variables.product.prodname_actions %} выполните следующие действия:

* Создайте учетную запись хранения в Azure для хранения данных рабочего процесса. {% data variables.product.prodname_actions %} хранит данные в виде блочных BLOB-объектов. Поддерживаются два типа учетных записей хранения:
  * Учетная запись хранения **общего назначения** (также известная как `general-purpose v1` или `general-purpose v2`) с использованием **стандартного** уровня производительности.

    {% warning %}

    **Предупреждение.** Использование уровня производительности **премиум** вместе с учетной записью с хранилищем общего назначения не поддерживается. **Стандартный** уровень производительности должен быть выбран при создании учетной записи хранения, и его нельзя изменить позже.

    {% endwarning %}
  * Учетная запись хранения **BlockBlobStorage**, которая использует уровень производительности **премиум**.

  Дополнительные сведения о типах учетных записей хранения в Azure и уровнях производительности см. в [документации по Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

## Включение {% data variables.product.prodname_actions %} с хранилищем BLOB-объектов Azure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. В разделе "Артефакты и хранилище журналов" выберите **Хранилище BLOB-объектов Azure** и введите строку подключения для учетной записи хранения Azure. Дополнительные сведения о получении строки подключения для учетной записи хранения см. в [документации по Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

   ![Переключатель для выбора Хранилище BLOB-объектов Azure и поля](/assets/images/enterprise/management-console/actions-azure-storage.png) строки подключения {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
