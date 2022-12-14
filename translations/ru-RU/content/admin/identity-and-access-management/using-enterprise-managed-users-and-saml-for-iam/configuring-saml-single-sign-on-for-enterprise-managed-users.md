---
title: Настройка единого входа SAML для управляемых пользователей GitHub Enterprise
shortTitle: SAML for managed users
intro: You can automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring Security Assertion Markup Language (SAML) single sign-on (SSO).
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: fc932d913cb104f4555e4151620469769b4ef99a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145120307"
---
## <a name="about-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>Сведения о едином входе SAML для {% data variables.product.prodname_emus %}

С {% data variables.product.prodname_emus %} ваше предприятие использует единый вход SAML для проверки подлинности всех участников. Вместо входа в {% data variables.product.prodname_dotcom %} с помощью имени пользователя и пароля для {% data variables.product.prodname_dotcom %} участники вашего предприятия будут выполнять вход с помощью IdP.

{% data variables.product.prodname_emus %} поддерживает следующие IdP:

{% data reusables.enterprise-accounts.emu-supported-idps %}

После настройки единого входа SAML рекомендуется хранить коды восстановления, чтобы вы могли восстановить доступ к своему предприятию, если поставщик удостоверений будет недоступен.

{% note %}

**Примечание.** Если единый вход SAML включен, единственным параметром, который можно обновить в {% data variables.product.prodname_dotcom %} для существующей конфигурации SAML, является сертификат SAML. Если вам нужно обновить издателя или URL-адрес входа, сначала необходимо отключить единый вход SAML, а затем перенастроить его с новыми параметрами.

{% endnote %}

## <a name="configuring-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>Настройка единого входа SAML для {% data variables.product.prodname_emus %}

Чтобы настроить единый вход SAML для {% data variables.product.prodname_emu_enterprise %}, необходимо настроить приложение в IdP, а затем выполнить настройку предприятия на сайте GitHub.com. После настройки единого входа SAML можно настроить подготовку пользователей. 

Чтобы установить и настроить приложение {% data variables.product.prodname_emu_idp_application %} в вашем IdP, необходимо наличие арендатора и административного доступа для поддерживаемого IdP.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Настройка поставщика удостоверений](#configuring-your-identity-provider)
2. [Настройка предприятия](#configuring-your-enterprise)
3. [включение подготовки;](#enabling-provisioning)

### <a name="configuring-your-identity-provider"></a>Настройка поставщика удостоверений

Чтобы настроить IdP, следуйте инструкциям по настройке приложения {% data variables.product.prodname_emu_idp_application %} в своем IdP.

1. Чтобы установить приложение {% data variables.product.prodname_emu_idp_application %}, перейдите по ссылке для IdP ниже:

     - [Приложение {% data variables.product.prodname_emu_idp_application %} в Azure Active Directory](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Приложение {% data variables.product.prodname_emu_idp_application %} в Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Чтобы настроить приложение {% data variables.product.prodname_emu_idp_application %} и IdP, щелкните ссылку ниже и следуйте инструкциям, предоставленным вашим IdP:

     - [Учебник по Azure Active Directory для {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Документация по Okta для {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Чтобы протестировать и настроить свое предприятие, назначьте для себя или пользователя, который будет настраивать единый вход SAML для {% data variables.product.prodname_dotcom %}, приложение {% data variables.product.prodname_emu_idp_application %} в своем IdP.

1. Чтобы продолжить настройку предприятия в {% data variables.product.prodname_dotcom %}, найдите и запишите следующие сведения из приложения, установленного в IdP:

    | Значение | Другие названия | Описание |
    | :- | :- | :- |
    | URL-адрес для входа IdP | URL-адрес для входа, URL-адрес для IdP | URL-адрес приложения в IdP |
    | URL-адрес идентификатора IdP | Издатель | Идентификатор IdP для поставщиков услуг для проверки подлинности SAML |
    | Сертификат для подписи, закодированный с помощью Base64 | Общедоступный сертификат | Общедоступный сертификат, который IdP использует для подписания запросов на проверку подлинности |

### <a name="configuring-your-enterprise"></a>Настройка предприятия

После установки и настройки приложения {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений вы можете настроить свое предприятие. 

1. Войдите в {% data variables.product.prodname_dotcom_the_website %} в качестве пользователя установки для нового предприятия с именем пользователя **@<em>SHORT-CODE</em>_admin**.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. В разделе "Единый вход SAML" выберите **Требовать проверку подлинности SAML**.
  ![Флажок для включения единого входа SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. В разделе **URL-адрес для входа** введите конечную точку HTTPS своего IdP для запросов единого входа, которые вы записали при настройке IdP.
![Поле для URL-адреса, на который участники будут переадресованы при входе](/assets/images/help/saml/saml_sign_on_url_business.png)

1. В разделе **Издатель** введите URL-адрес издателя SAML, который вы записали при настройке своего IdP, чтобы проверить подлинность отправленных сообщений.
![Поле для имени издателя SAML](/assets/images/help/saml/saml_issuer.png)

1. В разделе **Общедоступный сертификат** вставьте сертификат, который вы записали при настройке своего IdP, чтобы проверить ответы SAML.
![Поле для общедоступного сертификата от поставщика удостоверений](/assets/images/help/saml/saml_public_certificate.png)

1. Чтобы проверить целостность запросов от издателя SAML, нажмите {% octicon "pencil" aria-label="The edit icon" %}. Затем в раскрывающихся списках "Метод подписи" и "Хэш-метод" выберите хэш-алгоритм, используемый издателем SAML.
![Раскрывающиеся списки для алгоритмов хэширования метода подписи и хэш-метода, используемых издателем SAML](/assets/images/help/saml/saml_hashing_method.png)

1. Перед включением единого входа SAML для вашего предприятия нажмите **Проверить конфигурацию SAML**, чтобы убедиться, что введенные сведения верны. ![Кнопка для проверки конфигурации SAML перед применением](/assets/images/help/saml/saml_test.png)

1. Выберите команду **Сохранить**.

    {% note %}

    **Примечание.** Когда для вашего предприятия требуется единый вход SAML, пользователь установки больше не будет иметь доступа к предприятию, но останется вошедшим в GitHub. Доступ к организации будут иметь только {% data variables.product.prodname_managed_users %}, подготовленные вашим IdP.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### <a name="enabling-provisioning"></a>включение подготовки;

После включения единого входа SAML включите подготовку. Дополнительные сведения см. в статье [Настройка подготовки SCIM для управляемых пользователей GitHub Enterprise](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users).

