---
title: "Включение GitHub Actions с хранилищем Amazon\_S3"
intro: "Можно включить {% data variables.product.prodname_actions %} на {% data variables.product.prodname_ghe_server %} и использовать хранилище Amazon\_S3 для хранения данных, созданных при выполнении рабочего процесса."
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: dd0f4c7135def456212de3355d6f6af17076c40c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192988'
---
{% data reusables.actions.enterprise-storage-about %}

## Предварительные требования

{% note %}

**Примечание:** Единственными поставщиками хранилища S3, поддерживаемыми {% data variables.product.prodname_dotcom %}, являются Amazon S3 и Шлюз MinIO для NAS.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

Перед включением {% data variables.product.prodname_actions %} выполните следующие действия:

* Создайте контейнер Amazon S3 для хранения данных, создаваемых при выполнении рабочих процессов. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Включение {% data variables.product.prodname_actions %} с хранилищем Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. В разделе "Артефакт и журнал хранилища" выберите **Amazon S3** и введите сведения о контейнере хранилища:

   * **URL-адрес службы AWS**. URL-адрес службы для контейнера. Например, если контейнер S3 был создан в регионе `us-west-2`, это значение должно быть `https://s3.us-west-2.amazonaws.com`.

     Дополнительные сведения см. в разделе [Конечные точки службы AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html) в документации по AWS.
   * **Контейнер AWS S3**. Имя контейнера S3.
   * **Ключ доступа AWS S3** и **секретный ключ AWS S3**. Идентификатор ключа доступа AWS и секретный ключ для контейнера. Дополнительные сведения об управлении ключами доступа AWS см. в [документации по управлению удостоверениями и доступом AWS](https://docs.aws.amazon.com/iam/index.html).

   ![Переключатель для выбора хранилища Amazon S3 и полей для конфигурации](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) S3 {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
