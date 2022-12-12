---
title: Миграция с SAML на OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'Если вы используете SAML для проверки подлинности участников в {% data variables.enterprise.prodname_emu_enterprise %}, вы можете перейти на OpenID Connect (OIDC) и воспользоваться поддержкой политики условного доступа поставщика удостоверений.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180048'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Сведения о переносе {% data variables.enterprise.prodname_emu_enterprise %} с SAML на OIDC

Если {% data variables.enterprise.prodname_emu_enterprise %} использует единый вход SAML для проверки подлинности в Azure Active Directory (Azure AD), вы можете перейти на OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

При миграции с SAML на OIDC к отображаемым именам к {% data variables.enterprise.prodname_managed_users %} и группам, которые ранее были подготовлены для SAML, но не подготовлены приложением {% data variables.product.prodname_emu_idp_oidc_application %}, будут добавлены "(SAML)".

Если вы не знакомы с {% data variables.product.prodname_emus %} и еще не настроили проверку подлинности для вашего предприятия, вам не нужно немедленно выполнять миграцию и настраивать единый вход OIDC. Дополнительные сведения см. в статье [Настройка OIDC для управляемых пользователей GitHub Enterprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).

## Миграция предприятия

{% note %}

**Примечание.** Чтобы войти в систему от имени пользователя программы установки, вам потребуется код восстановления. Если у вас еще нет кодов восстановления, вы можете получить доступ к ним при входе в качестве владельца предприятия. Дополнительные сведения см. в статье [Скачивание кодов восстановления единого входа для корпоративной учетной записи](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

{% endnote %}

1. Перед началом миграции войдите в Azure и отключите подготовку в существующем приложении {% data variables.product.prodname_emu_idp_application %}.
1. Если в клиенте Azure AD применяются [политики условного доступа для расположений в сети](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) и вы сейчас используете список разрешенных IP-адресов на {% data variables.product.prodname_dotcom_the_website %} со своей учетной записью предприятия или какими-либо принадлежащими ей организациями, отключите список разрешенных IP-адресов. Дополнительные сведения см. в разделах [Применение параметров безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) и [Управление разрешенными IP-адресами для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).
1.  Войдите в {% data variables.product.prodname_dotcom_the_website %} в качестве пользователя программы установки для предприятия с именем пользователя **@<em>SHORT-CODE</em>_admin**. 
1. Когда появится запрос на переход к поставщику удостоверений, нажмите **Использовать код восстановления** и войдите с помощью одного из кодов восстановления предприятия.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В нижней части страницы рядом с пунктом "Миграция на единый вход OpenID Connect" нажмите **Настроить с помощью Azure**.  
   {% warning %} 

   **Предупреждение.** Миграция может занять до часа, и важно не выполнять подготовку пользователей во время миграции. Вы можете убедиться, что миграция все еще выполняется, вернувшись на страницу параметров безопасности предприятия. Если флажок "Требовать проверку подлинности SAML" по-прежнему установлен, миграция еще выполняется.

   {% endwarning %}

   ![Снимок экрана: кнопка "Настроить с помощью Azure"](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Прочтите оба предупреждения и щелкните, чтобы продолжить.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. В новой вкладке или окне, выполнив вход в качестве пользователя установки в {% data variables.product.prodname_dotcom_the_website %}, создайте {% data variables.product.pat_v1 %} с областью **admin:enterprise** и **не используйте срок действия** и скопируйте его в буфер обмена. Дополнительные сведения о создании маркера см. в разделе [Создание {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).
1. В параметрах приложения {% data variables.product.prodname_emu_idp_oidc_application %} на портале Azure в разделе "URL-адрес клиента" введите `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, заменив ВАШЕ_ПРЕДПРИЯТИЕ именем вашей корпоративной учетной записи.  
   
   Например, если URL-адрес вашей корпоративной учетной записи — `https://github.com/enterprises/octo-corp`, имя корпоративной учетной записи — `octo-corp`.
1. В разделе "Секретный токен" вставьте {% data variables.product.pat_v1 %} с областью **admin:enterprise** , созданной ранее.
1. Чтобы проверить конфигурацию, нажмите **Проверить подключение**.
1. Чтобы сохранить изменения, в верхней части формы нажмите **Сохранить**.
1. На портале Azure скопируйте пользователей и группы из старого приложения {% data variables.product.prodname_emu_idp_application %} в новое приложение {% data variables.product.prodname_emu_idp_oidc_application %}.
1. Проверьте конфигурацию, подготовив одного нового пользователя.
1. Если тест выполнен успешно, начните подготовку для всех пользователей, нажав **Начать подготовку**.
