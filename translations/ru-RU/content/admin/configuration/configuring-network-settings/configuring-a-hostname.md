---
title: Настройка имени узла
intro: Рекомендуется задать имя узла для устройства вместо использования жестко заданного IP-адреса.
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 7c18fcf9e768e6c1639004ad8f85ca60f7c98f49
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098332'
---
Если вы настроите имя узла вместо жестко закодированного IP-адреса, вы сможете изменить физическое оборудование, на котором работает {% данных variables.location.product_location %} без влияния на пользователей или клиентское программное обеспечение.

Параметр имени узла в {% data variables.enterprise.management_console %} должен иметь подходящее полное доменное имя (FQDN), которое можно разрешить в Интернете или во внутренней сети. Например, параметр имени узла может быть `github.companyname.com.`, поэтому веб-запросы и запросы API будут автоматически перенаправляться на имя узла, настроенное в {% data variables.enterprise.management_console %}. Обратите внимание, что `localhost` не является допустимым параметром имени узла. 

Имена узлов содержать менее 63 символов в соответствии с [разделом 2.3.4 спецификации доменных имен RFC](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4).

После настройки имени узла можно включить изоляцию поддомена для дальнейшего повышения безопасности {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Включение изоляции поддомена](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).

Дополнительные сведения о поддерживаемых типах имен узлов см. в [разделе 2.1 RFC HTTP](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Введите имя узла, заданное для {% данных variables.location.product_location %}.
  ![Поле для задания имени узла](/assets/images/enterprise/management-console/hostname-field.png)
5. Чтобы проверить параметры DNS и SSL для нового имени узла, щелкните **Проверить параметры домена**.
  ![Кнопка "Проверить параметры домена"](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

Чтобы устранить различные уязвимости межсейтовых сценариев, рекомендуется включить изоляцию поддомена для {% данных variables.location.product_location %} после настройки имени узла. Дополнительные сведения см. в разделе [Включение изоляции поддомена](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).
