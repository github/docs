---
title: Настройка подготовки SCIM для управляемых пользователей Enterprise с помощью Okta
shortTitle: Set up provisioning with Okta
intro: 'Можно подготовить к работе новых пользователей и управлять их членством в предприятии и командах, используя Okta в качестве поставщика удостоверений.'
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: b8c086d1d91c1248fa5a0349bb6f8ef32c3bbdf0
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160715'
---
## Сведения о подготовке с помощью Okta

Вы можете использовать {% data variables.product.prodname_emus %} с Okta в качестве поставщика удостоверений для подготовки новых учетных записей, управления членством в предприятиях и в группах для организаций в предприятии. Дополнительные сведения о подготовке данных для {% data variables.product.prodname_emus %} см. в разделе [Настройка подготовки SCIM для управляемых пользователей Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).

Перед настройкой подготовки с помощью Okta необходимо настроить единый вход SAML. Дополнительные сведения см. в разделе [Настройка единого входа SAML для управляемых пользователей Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).

Чтобы настроить подготовку с помощью Okta, необходимо задать имя предприятия в приложении {% data variables.product.prodname_emu_idp_application %} и ввести {% data variables.product.pat_generic %}. Затем можно начать подготовку пользователей в Okta.

## Поддерживаемые функции

{% data variables.product.prodname_emus %} поддерживает множество возможностей подготовки в Okta.

| Компонент | Описание |
| --- | --- |
| Отправка новых пользователей | Пользователи, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в Okta, автоматически создаются в предприятии на {% data variables.product.product_name %}. |
| Принудительные обновления профиля | Обновления профиля пользователя в Okta будут отправлены в {% data variables.product.product_name %}. |
| Отправка групп | Группы в Okta, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в качестве групп отправки, автоматически создаются в организации на {% data variables.product.product_name %}. |
| Принудительная деактивация пользователя | Отмена назначения пользователя из приложения {% data variables.product.prodname_emu_idp_application %} в Okta отключит пользователя на {% data variables.product.product_name %}. Пользователь не сможет войти в систему, но его данные сохранятся. |
| Повторная активация пользователей | Пользователи в Okta, чьи учетные записи Okta повторно активируются и которые назначаются обратно приложению {% data variables.product.prodname_emu_idp_application %}, будут включены. |

{% note %}

**Примечание.** {% data variables.product.prodname_emus %} не поддерживает изменения имен пользователей.

{% endnote %}

## Настройка названия организации

После создания {% data variables.enterprise.prodname_emu_enterprise %} можно приступить к настройке подготовки, задав название предприятия в Okta.

1. Откройте приложение {% data variables.product.prodname_emu_idp_application %} в Okta.
1. Перейдите на вкладку **Вход**.
1. Чтобы внести изменения, щелкните **Правка**.
1. В разделе "Параметры расширенного входа" в текстовом поле "Название организации" введите название организации. Например, если вы обращаетесь к организации по адресу `https://github.com/enterprises/octoinc`, название вашей организации будет octoinc.
![Снимок экрана с полем "Название организации" в Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Чтобы сохранить название организации, щелкните **Сохранить**.

## Настройка подготовки

После задания названия организации можно продолжить настройку параметров подготовки.

Чтобы настроить подготовку, пользователь установки с **@ именем пользователя <em>SHORT-CODE</em>_admin** должен предоставить {% data variables.product.pat_v1 %} с областью **admin:enterprise**. Дополнительные сведения о создании нового маркера см. в разделе [Создание {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).

1. Откройте приложение {% data variables.product.prodname_emu_idp_application %} в Okta.
1. Перейдите на вкладку **Инициализация**.
1. В меню настроек щелкните **Интеграция**.
1. Чтобы внести изменения, щелкните **Правка**.
1. Выберите **Включить интеграцию API**.
1. В поле "Токен API" введите {% data variables.product.pat_v1 %} с областью **admin:enterprise** , принадлежащей пользователю установки.
![Снимок экрана с полем маркера API в Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Щелкните **Проверить учетные данные API**. Если проверка выполнена успешно, в верхней части экрана появится проверочное сообщение.
1. Чтобы сохранить маркер, щелкните **Сохранить**.
1. В меню настроек щелкните **Перейти к приложению**.
![Снимок экрана с пунктом меню "Перейти к приложению" на Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. Чтобы разрешить внесение изменений, справа от пункта "Подготовка для приложения" щелкните **Изменить**.
1. Выберите **Включить** справа от разделов **Создание пользователей**, **Обновление атрибутов пользователей** и **Деактивация пользователей**.
![Снимок экрана с параметрами подготовки в Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Чтобы завершить настройку подготовки, щелкните **Сохранить**.

## Назначение пользователей и групп

После настройки единого входа SAML и подготовки вы сможете подготавливать новых пользователей в {% data variables.product.prodname_dotcom_the_website %}, назначив пользователей или группы приложению {% data variables.product.prodname_emu_idp_application %}. 

{% data reusables.scim.emu-scim-rate-limit %}

Вы также можете автоматически управлять членством в организации, добавляя группы на вкладку "Группы принудительной отправки" в Okta. После успешной подготовки группы она будет доступна для подключения к командам в организациях предприятия. Дополнительные сведения об управлении командами см. в разделе [Управление членством в командах с помощью групп поставщиков удостоверений](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

При назначении пользователей можно использовать атрибут "Роли" в приложении {% data variables.product.prodname_emu_idp_application %} для настройки роли пользователя в организации на {% data variables.product.product_name %}. Дополнительные сведения о ролях см. в разделе [Роли в организации](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise).

![Снимок экрана с параметрами роли для подготовленного пользователя на Okta](/assets/images/help/enterprises/okta-emu-user-role.png)

## Отзыв пользователей и групп

Чтобы удалить пользователя или группу из {% data variables.product.product_name %}, удалите их с вкладки "Назначения" и вкладки "Отправка групп" в Okta. При удалении пользователя убедитесь, что он удален из всех групп на вкладке "Отправка групп".


