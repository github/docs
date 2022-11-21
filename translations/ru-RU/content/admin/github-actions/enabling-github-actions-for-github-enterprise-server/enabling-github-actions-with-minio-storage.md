---
title: Включение GitHub Actions с хранилищем MinIO
intro: 'Вы можете включить {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_server %} и использовать хранилище MinIO для хранения данных, созданных при выполнении рабочих процессов.'
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
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: 3d9c6cfca6b81a66185515c8757cef22290ead30
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166572'
---
## Предварительные требования

Перед включением {% data variables.product.prodname_actions %} выполните следующие действия:

* Создайте контейнер MinIO для хранения данных, созданных при выполнении рабочих процессов. Дополнительные сведения об установке и настройке MinIO см. в разделе [Хранилище высокопроизводительных объектов MinIO](https://min.io/docs/minio/container/index.html) и [mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html) документации По MinIO.

  Чтобы избежать конфликтов за ресурсы на устройстве, рекомендуется размещать MinIO отдельно от {% data variables.location.product_location %}.

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## Включение {% data variables.product.prodname_actions %} с хранилищем MinIO

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. В разделе "Артефакт и журнал хранилища" выберите **Amazon S3** и введите сведения о контейнере хранилища:

   * **URL-адрес службы AWS**: URL-адрес службы MinIO. Например, `https://my-minio.example:9000`.
   * **Контейнер AWS S3**: имя контейнера S3.
   * **Ключ доступа AWS S3** и **Секретный ключ AWS S3**: `MINIO_ACCESS_KEY` и `MINIO_SECRET_KEY` для экземпляра MinIO.

   ![Переключатель для выбора хранилища Amazon S3 и поля для конфигурации MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. В разделе "Артефакт и журнал хранилища" выберите **Задать стиль пути**.

   ![Флажок для принудительного стиля](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) пути {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
