---
title: Применение юридического удержания к пользователю или организации
intro: 'Вы можете применить юридическое удержание к пользователю или организации, чтобы убедиться, что репозитории, которыми они владеют, не могут быть окончательно удалены из вашего предприятия.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199948'
---
Как правило, если репозиторий удаляется, он будет доступен на диске в течение 90 дней и может быть восстановлен с помощью панели мониторинга администратора сайта. Через 90 дней репозиторий очищается и удаляется навсегда. Если применить юридическое удержание к пользователю или организации, репозитории, которыми они владеют, доступны для восстановления на неопределенный срок.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Нажмите кнопку **Применить юридическое удержание**.
![Кнопка "Применить юридическое удержание"](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
