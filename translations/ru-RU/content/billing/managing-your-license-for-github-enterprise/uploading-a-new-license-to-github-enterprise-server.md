---
title: Отправка новой лицензии в GitHub Enterprise Server
intro: 'Вы можете отправить файл лицензии для {% данных variables.product.prodname_enterprise %} в {% данных variables.location.product_location_enterprise %} для проверки приложения.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
ms.openlocfilehash: 7e967f0c42fe6e37f987b22097579ed38a4d99cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098447'
---
## Сведения о файлах лицензий для {% data variables.product.prodname_enterprise %}

После приобретения или обновления лицензии для {% данных variables.product.prodname_enterprise %} с {% данных variables.contact.contact_enterprise_sales %}необходимо отправить новый файл лицензии в {% данных variables.location.product_location_enterprise %}, чтобы разблокировать новые лицензии пользователей. Дополнительные сведения о лицензиях для {% data variables.product.product_name %} см. в разделе "[Сведения о лицензиях для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" и "[Загрузка лицензии для {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Отправка лицензии в {% данных variables.location.product_location_enterprise %}

{% warning %}

**Предупреждение:** Обновление лицензии приводит к небольшому простою для {% данных variables.location.product_location %}.

{% endwarning %}

1. Войдите в {% данных variables.location.product_location_enterprise %} в качестве администратора сайта.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. В разделе "Быстрые ссылки" щелкните **Обновить лицензию**.
  ![Ссылка на обновление лицензии](/assets/images/enterprise/business-accounts/update-license-link.png)
1. Чтобы выбрать лицензию, щелкните **файл лицензии** или перетащите файл лицензии в область **Файл лицензии**.
  ![Отправка файла лицензии](/assets/images/enterprise/management-console/upload-license.png)
1. Щелкните **Отправить**.
  ![Начать отправку](/assets/images/enterprise/management-console/begin-upload.png)

