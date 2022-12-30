---
title: Настройка подготовки SCIM для Enterprise Managed Users
shortTitle: Provisioning managed users
intro: Вы можете настроить поставщик удостоверений для подготовки новых пользователей и управления их членством в предприятии и командах.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160699'
---
## Сведения о подготовке для {% data variables.product.prodname_emus %}

Необходимо настроить подготовку для {% data variables.product.prodname_emus %}, чтобы создавать, деактивировать учетные записи пользователей для членов предприятия и управлять ими. 

После настройки подготовки для {% data variables.product.prodname_emus %} пользователи, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений, подготавливаются как новые {% data variables.enterprise.prodname_managed_users %} в {% data variables.product.prodname_dotcom %} через SCIM, а {% data variables.enterprise.prodname_managed_users %} добавляются в ваше предприятие. Если вы назначите группу приложению, все пользователи в группе будут подготовлены как новые {% data variables.enterprise.prodname_managed_users %}.

При обновлении сведений, связанных с удостоверением пользователя в поставщике удостоверений, ваш поставщик удостоверений обновит учетную запись пользователя в {% data variables.product.prodname_dotcom_the_website %}. Когда отменяется назначение пользователя из приложения {% data variables.product.prodname_emu_idp_application %} или деактивируется учетная запись пользователя в поставщике удостоверений, поставщик удостоверений свяжется с {% data variables.product.prodname_dotcom %}, чтобы аннулировать все сеансы и отключить учетную запись члена. Информация об отключенной учетной записи сохраняется, а имя пользователя изменяется на хэш исходного имени пользователя с добавлением короткого кода. Если вы переназначите пользователя приложению {% data variables.product.prodname_emu_idp_application %} или повторно активируете его учетную запись в поставщике удостоверений, {% data variables.enterprise.prodname_managed_user %} в {% data variables.product.prodname_dotcom %} будет повторно активировано, а имя пользователя будет восстановлено.

Группы в поставщике удостоверений можно использовать для управления членством в командах организаций предприятия, что позволяет настраивать доступ к репозиторию и разрешения через поставщика удостоверений. Дополнительные сведения см в разделе [Управление членством с помощью групп поставщика удостоверений](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

## Предварительные требования

Перед настройкой подготовки для {% data variables.product.prodname_emus %} необходимо настроить единый вход на основе SAML{% ifversion oidc-for-emu %} или OIDC{% endif %}. {% ifversion oidc-for-emu %}

- Дополнительные сведения о настройке OIDC см. в статье [Настройка OIDC для Управляемых пользователей Enterprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)
- {% endif %}Сведения о настройке SAML см. в статье [Настройка единого входа SAML для Управляемых пользователей Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).

## Создание {% data variables.product.pat_generic %}

Чтобы настроить подготовку для {% data variables.enterprise.prodname_emu_enterprise %}, вам потребуется {% data variables.product.pat_v1 %} с областью **admin:enterprise** , которая принадлежит пользователю установки.

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

## Настройка подготовки для {% data variables.product.prodname_emus %}

После создания {% data variables.product.pat_generic %} и безопасного хранения его можно настроить подготовку в поставщике удостоверений. 

{% data reusables.scim.emu-scim-rate-limit %}

Чтобы настроить подготовку, перейдите по соответствующей ссылке из таблицы ниже.

| Поставщик удостоверений | Метод единого входа | Дополнительные сведения | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | [Учебник. Настройка Управляемого пользователя Enterprise GitHub (OIDC) для автоматической подготовки пользователей](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) в документации по Azure AD |{% endif %} | Azure AD | SAML | [Учебник. Настройка Управляемого пользователя Enterprise GitHub для автоматической подготовки пользователей](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) в документации по Azure AD | | Okta | | SAML | [Настройка подготовки SCIM для Управляемых пользователей Enterprise с помощью Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**Примечание**. Azure AD не поддерживает подготовку вложенных групп. Дополнительные сведения см. в статье [Общие сведения о подготовке приложений в Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
