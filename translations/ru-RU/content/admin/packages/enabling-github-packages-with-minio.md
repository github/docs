---
title: Включение пакетов GitHub с использованием MinIO
intro: 'Настройка {% data variables.product.prodname_registry %} с использованием MiniO в качестве внешнего хранилища.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 9a6ee2cdc40a9487fac21de915084795e6a9b5bf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097837'
---
{% warning %}

**Предупреждения.**
- Крайне важно задать ограничительные политики доступа, необходимые для контейнера хранилища, так как {% data variables.product.company_short %} не применяет к конфигурации контейнера хранилища конкретные разрешения объекта или дополнительные списки управления доступом (ACL). Например, если сделать контейнер общедоступным, данные в контейнере нем доступны в общедоступном Интернете.
- Мы рекомендуем использовать для {% data variables.product.prodname_registry %} выделенный контейнер, который отделен от контейнера, используемого для хранилища {% data variables.product.prodname_actions %}.
- Обязательно настройте контейнер, который хотите использовать в будущем. Не рекомендуется изменять хранилище после начала использования {% data variables.product.prodname_registry %}.

{% endwarning %}

## Предварительные требования

Прежде чем включить и настроить {% данных variables.product.prodname_registry %} на {% данных variables.location.product_location_enterprise %}, необходимо подготовить контейнер хранилища MinIO. Чтобы быстро настроить контейнер MinIO и перейти к параметрам настройки MinIO, см. [Краткое руководство по настройке контейнера хранилища MinIO для {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages).

Убедитесь, что идентификатор ключа доступа к внешнему хранилищу MinIO и секрет имеют следующие разрешения:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Включение {% data variables.product.prodname_registry %} с внешним хранилищем MinIO

Хотя MinIO в настоящее время не отображается в пользовательском интерфейсе в разделе "Служба хранилища пакета", MinIO по-прежнему поддерживается {% data variables.product.prodname_registry %} на {% data variables.product.prodname_enterprise %}. Кроме того, обратите внимание, что хранилище объектов MinIO совместимо с API S3, и можно ввести сведения о контейнере MinIO вместо сведений AWS S3.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. В разделе "Служба хранилища пакета" выберите **Amazon S3**.
1. Введите сведения о контейнере хранилища MinIO в параметрах хранилища AWS.
    - **URL-адрес службы AWS.** URL-адрес размещения для контейнера MinIO.
    - **Контейнер AWS S3.** Имя контейнера MinIO, совместимого с S3, выделенного для {% data variables.product.prodname_registry %}.
    - **Ключ доступа AWS S3** и **секретный ключ AWS S3**. Введите идентификатор ключа доступа MinIO и секретный ключ для доступа к контейнеру.

    ![Поля записи для сведений о контейнере S3 AWS](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Дальнейшие действия

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
