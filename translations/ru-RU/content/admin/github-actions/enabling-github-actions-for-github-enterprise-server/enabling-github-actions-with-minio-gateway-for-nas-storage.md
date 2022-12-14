---
title: Включение GitHub Actions со шлюзом MinIO для хранилища NAS
intro: Вы можете включить {% data variables.product.prodname_actions %} на {% data variables.product.prodname_ghe_server %} и использовать шлюз MinIO для хранилища NAS, чтобы хранить данные, созданные при выполнении рабочего процесса.
permissions: Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.
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
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: bb738d04d54234704f3278422c1f1ef075956640
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106872"
---
{% data reusables.actions.minio-gateways-removal %}

## Предварительные требования

Перед включением {% data variables.product.prodname_actions %} выполните следующие действия:

* Чтобы избежать конфликтов за ресурсы на устройстве, рекомендуется размещать MinIO отдельно от {% data variables.location.product_location %}.
* Создайте контейнер для хранения данных рабочего процесса. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Включение {% data variables.product.prodname_actions %} со шлюзом MinIO для хранилища NAS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. В разделе "Артефакт и журнал хранилища" выберите **Amazon S3** и введите сведения о контейнере хранилища:

   * **URL-адрес службы AWS**: URL-адрес службы MinIO. Например, `https://my-minio.example:9000`.
   * **Контейнер AWS S3**: имя контейнера S3.
   * **Ключ доступа AWS S3** и **Секретный ключ AWS S3**: `MINIO_ACCESS_KEY` и `MINIO_SECRET_KEY` для экземпляра MinIO.

   ![Переключатель для выбора хранилища Amazon S3 и поля для конфигурации MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. В разделе "Артефакт и журнал хранилища" выберите **Задать стиль пути**.

   ![Флажок для принудительного стиля](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) пути {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
