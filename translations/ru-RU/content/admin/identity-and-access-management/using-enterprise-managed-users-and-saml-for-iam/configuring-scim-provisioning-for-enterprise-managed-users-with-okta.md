---
title: Настройка подготовки SCIM для управляемых пользователей Enterprise с помощью Okta
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
- /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 6c143b8ef729ab7343cf14613acf5f528384135c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145112667"
---
## <a name="about-provisioning-with-okta"></a>Сведения о подготовке с помощью Okta

Вы можете использовать {% data variables.product.prodname_emus %} с Okta в качестве поставщика удостоверений для подготовки новых учетных записей, управления членством в предприятиях и в группах для организаций в предприятии. Дополнительные сведения о подготовке данных для {% data variables.product.prodname_emus %} см. в разделе [Настройка подготовки SCIM для управляемых пользователей Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users).

Перед настройкой подготовки с помощью Okta необходимо настроить единый вход SAML. Дополнительные сведения см. в разделе [Настройка единого входа SAML для управляемых пользователей Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

Чтобы настроить подготовку с помощью Okta, необходимо задать название предприятия в приложении {% data variables.product.prodname_emu_idp_application %} и ввести личный маркер доступа пользователя установки. Затем можно начать подготовку пользователей в Okta.

## <a name="supported-features"></a>Поддерживаемые функции

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

## <a name="setting-your-enterprise-name"></a>Настройка названия организации

После создания {% data variables.product.prodname_emu_enterprise %} можно начать настройку подготовки, задав название организации в Okta.

1. Откройте приложение {% data variables.product.prodname_emu_idp_application %} в Okta.
1. Перейдите на вкладку **Вход**.
1. Чтобы внести изменения, щелкните **Правка**.
1. В разделе "Параметры расширенного входа" в текстовом поле "Название организации" введите название организации. Например, если вы обращаетесь к организации по адресу `https://github.com/enterprises/octoinc`, название вашей организации будет octoinc.
![Снимок экрана с полем "Название организации" в Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Чтобы сохранить название организации, щелкните **Сохранить**.

## <a name="configuring-provisioning"></a>Настройка подготовки

После задания названия организации можно продолжить настройку параметров подготовки.

Чтобы настроить подготовку, пользователю установки с помощью имени пользователя **@<em>SHORT-CODE</em>_admin** необходимо предоставить личный маркер доступа с областью **admin:enterprise**. Дополнительные сведения о создании маркера см. в статье [Создание личного маркера доступа](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).

1. Откройте приложение {% data variables.product.prodname_emu_idp_application %} в Okta.
1. Перейдите на вкладку **Инициализация**.
1. В меню настроек щелкните **Интеграция**.
1. Чтобы внести изменения, щелкните **Правка**.
1. Выберите **Включить интеграцию API**.
1. В поле "Маркер API" введите личный маркер доступа с областью **admin:enterprise**, принадлежащей пользователю установки.
![Снимок экрана с полем маркера API в Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Щелкните **Проверить учетные данные API**. Если проверка выполнена успешно, в верхней части экрана появится проверочное сообщение.
1. Чтобы сохранить маркер, щелкните **Сохранить**.
1. В меню настроек щелкните **Перейти к приложению**.
![Снимок экрана с пунктом меню "Перейти к приложению" на Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. Чтобы разрешить внесение изменений, справа от пункта "Подготовка для приложения" щелкните **Изменить**.
1. Выберите **Включить** справа от разделов **Создание пользователей**, **Обновление атрибутов пользователей** и **Деактивация пользователей**.
![Снимок экрана с параметрами подготовки в Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Чтобы завершить настройку подготовки, щелкните **Сохранить**.

## <a name="assigning-users-and-groups"></a>Назначение пользователей и групп

После настройки единого входа и подготовки SAML вы сможете подготовить новых пользователей в {% data variables.product.prodname_dotcom_the_website %}, назначив их приложению {% data variables.product.prodname_emu_idp_application %}. 

{% data reusables.scim.emu-scim-rate-limit %}

Вы также можете автоматически управлять членством в организации, назначив группы приложению и добавив их на вкладку "Отправка групп" в Okta. После успешной подготовки группы она будет доступна для подключения к командам в организациях предприятия. Дополнительные сведения об управлении командами см. в разделе [Управление членством в командах с помощью групп поставщиков удостоверений](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

При назначении пользователей можно использовать атрибут "Роли" в приложении {% data variables.product.prodname_emu_idp_application %} для настройки роли пользователя в организации на {% data variables.product.product_name %}. Дополнительные сведения о ролях см. в разделе [Роли в организации](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise).

![Снимок экрана с параметрами роли для подготовленного пользователя на Okta](/assets/images/help/enterprises/okta-emu-user-role.png)
