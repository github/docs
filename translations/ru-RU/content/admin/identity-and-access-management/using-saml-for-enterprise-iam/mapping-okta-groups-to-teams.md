---
title: Сопоставление групп Okta с командами
shortTitle: Map Okta groups to teams
intro: 'Группы Okta можно сопоставить с командами в {% data variables.product.prodname_ghe_managed %}, чтобы автоматически добавлять и удалять участников группы.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116539'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Сведения о сопоставлении команд

Если вы используете Okta в качестве поставщика удостоверений, можно сопоставить группу Okta с командой в {% data variables.product.prodname_ghe_managed %}. Участники группы Okta автоматически становятся участниками сопоставленной команды в {% data variables.product.prodname_ghe_managed %}. Чтобы настроить это сопоставление, можно настроить приложение Okta "GitHub AE" для отправки группы и ее участников в {% data variables.product.prodname_ghe_managed %}. Затем можно выбрать, какая команда в {% data variables.product.prodname_ghe_managed %} будет сопоставлена с группой Okta.

## Предварительные требования

Вы или администратор Okta должны быть глобальным администратором или администратором привилегированных ролей в Okta.
 
Необходимо включить единый вход SAML с использованием Okta. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Вам необходимо пройти проверку подлинности в своей учетной записи предприятия с помощью единого входа SAML и Okta. Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).

## Назначение группы Okta приложению GitHub AE

1. На панели мониторинга Okta откройте параметры группы.
1. Нажмите кнопку **Manage Apps** (Управление приложениями).
  ![Добавление группы в приложение](/assets/images/help/saml/okta-ae-group-add-app.png)

1. Справа от GitHub AE нажмите кнопку **Assign** (Назначить).

  ![Назначение приложения](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Нажмите кнопку **Done**(Готово).

## Отправка группы Okta в {% data variables.product.prodname_ghe_managed %}

При отправке и сопоставлении группы Okta с командой все участники группы смогут входить в {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Нажмите кнопку **Push Groups** (Отправить группы).

  ![Вкладка "Push Groups" (Отправить группы)](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. В раскрывающееся меню "Push Groups" (Отправить группы) выберите **Find groups by name** (Найти группы по имени).

  ![Кнопка добавления групп](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Введите имя группы для отправки в {% data variables.product.prodname_ghe_managed %}, а затем нажмите кнопку **Save** (Сохранить).

  ![Добавление имени группы](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Сопоставление команды с группой Okta

Можно сопоставить команду в организации с группой Okta, которая ранее была отправлена в {% data variables.product.prodname_ghe_managed %}. После этого участники группы Okta автоматически становятся участниками команды в {% data variables.product.prodname_ghe_managed %}. Все последующие изменения членства в группе Okta автоматически синхронизируются с командой {% data variables.product.prodname_ghe_managed %}.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. В разделе "Identity Provider Group" (Группа поставщиков удостоверений) в раскрывающемся меню и выберите группу поставщиков удостоверений.
    ![Раскрывающееся меню для выбора группы поставщика удостоверений](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Нажмите кнопку **Сохранить изменения**.

## Проверка состояния сопоставленных команд

Владельцы предприятия могут использовать панель мониторинга администрирования сайта для просмотра того, как группы Okta сопоставляются с командами в {% data variables.product.prodname_ghe_managed %}.

1. Чтобы получить доступ к панели мониторинга, щелкните значок {% octicon "rocket" aria-label="The rocket ship" %} в правом верхнем углу любой страницы.
  ![Значок ракеты для доступа к параметрам администратора сайта](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. В левой области щелкните **External groups** (Внешние группы).

  ![Добавление имени группы](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Чтобы просмотреть дополнительные сведения о группе, щелкните группу в списке внешних групп.

  ![Список внешних групп](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Сведения о группе включают имя группы Okta, список пользователей Okta, являющихся членами группы, и соответствующую сопоставленную команду в {% data variables.product.prodname_ghe_managed %}. 

  ![Список внешних групп](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Просмотр событий журнала аудита для сопоставленных групп

 Для мониторинга активности единого входа для сопоставленных групп можно просмотреть следующие события в журнале аудита {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

Дополнительные сведения см. в разделе [Просмотр журнала аудита для вашей организации](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).
