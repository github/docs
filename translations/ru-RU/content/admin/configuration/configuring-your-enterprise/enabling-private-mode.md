---
title: Включение частного режима
intro: 'В частном режиме {% data variables.product.prodname_ghe_server %} требует от каждого пользователя войти в систему для доступа к установке.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 865c446155dc184269ed8a0b6c1161ba7e6eed5d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097816'
---
Необходимо включить закрытый режим, если {% данных variables.location.product_location %} является общедоступным через Интернет. В частном режиме пользователи не могут анонимно клонировать репозитории через `git://`. Если также включена встроенная проверка подлинности, администратор должен пригласить новых пользователей для создания учетной записи в экземпляре. Дополнительные сведения см. в разделе [Настройка встроенной проверки подлинности](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

С включенным закрытым режимом можно разрешить операции Git без проверки подлинности (и любой пользователь с сетевым доступом к {% данных variables.location.product_location %}) считывать код общедоступного репозитория в вашем экземпляре с включенным анонимным доступом на чтение Git. Дополнительные сведения см. в разделе [Разрешение администраторам включить анонимный доступ для чтения Git к общедоступным репозиториям](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. Выберите **Частный режим**.
  ![Флажок для включения частного режима](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
