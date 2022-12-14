---
title: Включение GitHub Packages с использованием Хранилища BLOB-объектов Azure
intro: 'Настройте {% data variables.product.prodname_registry %}, указав Хранилище BLOB-объектов Azure в качестве внешнего хранилища.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190390'
---
{% warning %}

**Предупреждения.**
- Крайне важно задать ограничительные политики доступа, необходимые для контейнера хранилища, так как {% data variables.product.company_short %} не применяет к конфигурации контейнера хранилища конкретные разрешения объекта или дополнительные списки управления доступом (ACL). Например, если сделать контейнер общедоступным, данные в контейнере нем доступны в общедоступном Интернете.
- Мы рекомендуем использовать для {% data variables.product.prodname_registry %} выделенный контейнер, который отделен от контейнера, используемого для хранилища {% data variables.product.prodname_actions %}.
- Обязательно настройте контейнер, который хотите использовать в будущем. Не рекомендуется изменять хранилище после начала использования {% data variables.product.prodname_registry %}.

{% endwarning %}

## Предварительные требования

Прежде чем включить и настроить {% data variables.product.prodname_registry %} в {% data variables.location.product_location_enterprise %}, необходимо подготовить контейнер хранилища BLOB-объектов Azure. Чтобы подготовить контейнер хранилища BLOB-объектов Azure, рекомендуется ознакомиться с официальной документацией по Хранилищу BLOB-объектов Azure на [официальном сайте](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Включение {% data variables.product.prodname_registry %} с использованием Хранилища BLOB-объектов Azure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. В разделе "Packages Storage" (Хранилище пакетов) выберите **Хранилище BLOB-объектов Azure** и введите имя контейнера Azure для контейнера хранилища пакетов и строку подключения.

    - Перед настройкой имени контейнера и строки подключения необходимо создать контейнер хранилища.

  ![Поля для имени контейнера хранилища BLOB-объектов Azure и строки подключения](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Примечание.** Строку подключения Azure можно найти, перейдя в меню "Ключ доступа" в учетной записи хранения Azure. 
  Использование маркера SAS или URL-адреса SAS в качестве строки подключения в настоящее время не поддерживается.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Дальнейшие действия

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
