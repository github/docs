---
title: Настройка GitHub Pages для предприятия
intro: 'Вы можете включить или отключить {% data variables.product.prodname_pages %} для предприятия{% ifversion ghes %} и выбрать, сделать ли сайты общедоступными{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 27b8a16b5ffeea95cbbaa32cb6057c3e020c7064
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098839'
---
{% ifversion ghes %}

## Включение общедоступных сайтов для {% data variables.product.prodname_pages %}

Если на предприятии включен частный режим, общественность не сможет получить доступ к сайтам {% data variables.product.prodname_pages %}, размещенным вашим предприятием, если не включить общедоступные сайты.

{% warning %}

**Предупреждение.** Если вы включите общедоступные сайты для {% data variables.product.prodname_pages %}, каждый сайт в каждом репозитории предприятия будет доступен для общественности.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. Выберите **Общедоступные страницы**.
  ![Флажок для включения общедоступных страниц](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Отключение {% data variables.product.prodname_pages %} для предприятия

Если изоляция поддомена для предприятия отключена, необходимо также отключить {% data variables.product.prodname_pages %}, чтобы защитить себя от потенциальных уязвимостей системы безопасности. Дополнительные сведения см. в разделе [Включение изоляции поддомена](/admin/configuration/enabling-subdomain-isolation).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Отмена выбора **Включить страницы**.
  ![Флажок для отключения {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. В разделе "Политики страниц" отмените выбор параметра **Включить {% data variables.product.prodname_pages %}** .
  ![Флажок для отключения {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Настройка заголовков ответа {% data variables.product.prodname_pages %} для предприятия

Вы можете добавлять или переопределять заголовки ответов для сайтов {% variables.product.prodname_pages %}, размещенных на {% данных variables.location.product_location %}.

{% warning %}

**Предупреждение.** Перед сохранением убедитесь, что заголовки ответа настроены правильно. Неправильные конфигурации могут негативно повлиять на безопасность {% данных variables.location.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Введите параметры заголовков, а затем щелкните **Добавить заголовки**.
   - В поле **Имя заголовка HTTP** введите имя заголовка. Длина имени заголовка должна превышать 128 символов.
   - В поле **Значение заголовка HTTP** введите значение заголовка. Длина значения заголовка должна превышать 300 символов.
![Поля имени и значения заголовка ответа {% data variables.product.prodname_pages %} в {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Дополнительные материалы

- [Включение частного режима](/admin/configuration/enabling-private-mode) {% endif %}
