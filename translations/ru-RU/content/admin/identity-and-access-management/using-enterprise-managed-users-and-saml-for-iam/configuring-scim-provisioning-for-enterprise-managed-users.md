---
title: Настройка подготовки SCIM для Enterprise Managed Users
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116603"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>Сведения о подготовке для {% data variables.product.prodname_emus %}

Необходимо настроить подготовку для {% data variables.product.prodname_emus %}, чтобы создавать, деактивировать учетные записи пользователей для членов предприятия и управлять ими. При настройке подготовки для {% data variables.product.prodname_emus %} пользователи, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в вашем поставщике удостоверений, готовятся как новые учетные записи пользователей на {% data variables.product.prodname_dotcom %} через SCIM и будут добавлены на предприятие. 

При обновлении сведений, связанных с удостоверением пользователя в поставщик удостоверений, этот поставщик обновит учетную запись пользователя на GitHub.com. Если вы отменяете назначение пользователя из приложения {% data variables.product.prodname_emu_idp_application %} или деактивируете учетную запись пользователя в своем поставщике удостоверений, тот свяжется с {% data variables.product.prodname_dotcom %}, чтобы аннулировать все сеансы SAML и отключить учетную запись члена. Информация об отключенной учетной записи сохраняется, а имя пользователя изменяется на хэш исходного имени пользователя с добавлением короткого кода. Если вы повторно назначите пользователя в приложение {% data variables.product.prodname_emu_idp_application %} или повторно активируете его учетную запись в своем IdP, учетная запись {% data variables.product.prodname_managed_user %} в {% data variables.product.prodname_dotcom %} будет повторно активирована, а имя пользователя восстановится.

Группы в поставщике удостоверений можно использовать для управления членством в командах организаций предприятия, что позволяет настраивать доступ к репозиторию и разрешения через поставщика удостоверений. Дополнительные сведения см в разделе [Управление членством с помощью групп поставщика удостоверений](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

## <a name="prerequisites"></a>Предварительные требования

Прежде чем можно будет настроить подготовку для {% data variables.product.prodname_emus %}, необходимо настроить единый вход SAML. Дополнительные сведения см. в разделе [Настройка единого входа SAML для Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

## <a name="creating-a-personal-access-token"></a>Создание личного маркера доступа

Чтобы настроить подготовку для {% data variables.product.prodname_emu_enterprise %}, необходим личный маркер доступа с областью действия **admin:enterprise**, который принадлежит пользователю настройки.

{% warning %}

**Предупреждение.** Если срок действия маркера истекает или подготовленный пользователь создает маркер, подготовка SCIM может неожиданно перестать работать. Убедитесь, что вы создали токен, войдя в систему как пользователь настройки, и что срок действия маркера установлен на "Без срока действия".

{% endwarning %}

1. Войдите в {% data variables.product.prodname_dotcom_the_website %} в качестве пользователя настройки для нового предприятия с именем пользователя **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. В разделе **Примечание** укажите описательное имя маркера.
   ![Снимок экрана: имя маркера](/assets/images/help/enterprises/emu-pat-name.png)
1. Выберите раскрывающееся меню **Срок действия**, а затем щелкните **Без срока действия**.
   ![Снимок экрана: срок действия маркера установлен на "Без срока действия"](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Выберите область **admin:enterprise**.
   ![Снимок экрана: область admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Щелкните **Создать токен**.
   ![Создание кнопки маркера](/assets/images/help/settings/generate_token.png)
1. Чтобы скопировать маркер в буфер обмена, щелкните {% octicon "paste" aria-label="The copy icon" %}.
   ![Только что созданный маркер](/assets/images/help/settings/personal_access_tokens.png)
2. Чтобы сохранить маркер для последующего использования, надежно сохраните его в диспетчере паролей.

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>Настройка подготовки для {% data variables.product.prodname_emus %}

После создания личного маркера доступа и его безопасного сохранения можно настроить подготовку для своего поставщика удостоверений.

{% data reusables.scim.emu-scim-rate-limit %}

Чтобы настроить Azure Active Directory для подготовки пользователей для {% data variables.product.prodname_emu_enterprise %}, см. [Руководство. Настройка GitHub Enterprise Managed User для автоматической подготовки пользователей](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) в документации по Azure AD.

Чтобы настроить Okta для подготовки пользователей для {% data variables.product.prodname_emu_enterprise %}, см. раздел [Настройка подготовки SCIM для Enterprise Managed Users с помощью Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta).

