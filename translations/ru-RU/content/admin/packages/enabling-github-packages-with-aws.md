---
title: Включение GitHub Packages с AWS
intro: 'Настройка {% data variables.product.prodname_registry %} с использованием AWS в качестве внешнего хранилища.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 1e359bb3e91a9b53e220d9d576c674552a441f81
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097771'
---
{% warning %}

**Предупреждения.**
- Крайне важно настроить ограничительные политики доступа, необходимые для контейнера хранилища, так как {% data variables.product.company_short %} не применяет к конфигурации контейнера хранилища конкретные разрешения объекта или дополнительные списки управления доступом (ACL). Например, если сделать контейнер общедоступным, данные в нем будут доступны в общедоступном Интернете. Дополнительные сведения см. в разделе [Настройка разрешений на доступ к контейнерам и объектам](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html) в документации AWS.
- Мы рекомендуем использовать для {% data variables.product.prodname_registry %} выделенный контейнер, который отделен от контейнера, используемого для хранилища {% data variables.product.prodname_actions %}.
- Обязательно настройте контейнер, который хотите использовать в будущем. Не рекомендуется изменять хранилище после начала использования {% data variables.product.prodname_registry %}.

{% endwarning %}

## Предварительные требования

Прежде чем включить и настроить {% данных variables.product.prodname_registry %} на {% данных variables.location.product_location_enterprise %}, необходимо подготовить контейнер хранилища AWS. Чтобы подготовить контейнер хранилища AWS, рекомендуется ознакомиться с официальными документами AWS в [документации по AWS](https://docs.aws.amazon.com/index.html).

Убедитесь, что идентификатор ключа доступа и секрет AWS имеют следующие разрешения:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Включение {% data variables.product.prodname_registry %} с внешним хранилищем AWS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. В разделе "Хранилище пакетов" выберите **Amazon S3** и введите сведения о контейнере хранилища:
    - **URL-адрес службы AWS.** URL-адрес службы для контейнера. Например, если контейнер S3 был создан в `us-west-2 region`, это значение должно быть `https://s3.us-west-2.amazonaws.com`.

      Дополнительные сведения см. в разделе [Конечные точки службы AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html) в документации по AWS.

    - **Контейнер AWS S3.** Имя контейнера S3, выделенного для {% data variables.product.prodname_registry %}.
    - **Ключ доступа AWS S3** и **секретный ключ AWS S3**. Идентификатор ключа доступа AWS и секретный ключ для доступа к контейнеру.

      Дополнительные сведения об управлении ключами доступа AWS см. в [документации по управлению удостоверениями и доступом AWS](https://docs.aws.amazon.com/iam/index.html).

    ![Поля записи для сведений о контейнере S3 AWS](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Дальнейшие действия

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
