---
title: Управление неактивными пользователями
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680928'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## О неактивных пользователях

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Просмотр неактивных пользователей

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. На левой боковой панели нажмите **Неактивные пользователи**.
![Вкладка "Неактивные пользователи"](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. Чтобы приостановить всех неактивных пользователей в этом списке, в верхней части страницы нажмите **Приостановить все**.
![Кнопка "Приостановить все"](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Определение того, является ли учетная запись пользователя неактивной

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. В разделе **Сведения о пользователе** красная точка со словом "Неактивная" указывает, что учетная запись пользователя неактивна, а зеленая точка со словом "Активная" означает, что учетная запись пользователя активна.
![Неактивная учетная запись пользователя](/assets/images/enterprise/stafftools/dormant-user.png)
![Активная учетная запись пользователя](/assets/images/enterprise/stafftools/active-user.png)

## Настройка порога неактивности

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Порог неактивности" в раскрывающемся меню выберите нужный порог неактивности.
![Раскрывающееся меню порога неактивности](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Скачивание отчета о неактивных пользователях из корпоративной учетной записи

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Чтобы скачать отчет о неактивных пользователях (бета-версию) в виде CSV-файла, в разделе "Другое" нажмите {% octicon "download" aria-label="The Download icon" %} **Скачать**.
  ![Кнопка "Скачать" в разделе "Другое" на странице "Соответствие"](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Совет.** Для оценки неактивности пользователей активность пользователя ограничивается и включает в себя только активность пользователя, что относится к организациям, репозиториям или событиям входа в систему, которые связаны с предприятием. Например, пользователь может считаться неактивным, если он недавно прокомментировал проблему в общедоступном репозитории, не связанном с предприятием. Однако если он недавно прокомментировал проблему в общедоступном репозитории, связанном с организацией в вашем предприятии, он не будет считаться неактивным и не появится в отчете "Неактивные пользователи".

Что касается событий входа в Интернет, то активностью пользователя, связанной с предприятием, считаются только события входа в систему через домен единого входа, связанный с предприятием.

{% endtip %}

{% endif %}
