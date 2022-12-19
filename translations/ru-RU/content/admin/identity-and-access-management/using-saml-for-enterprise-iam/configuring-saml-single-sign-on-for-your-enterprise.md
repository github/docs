---
title: Настройка единого входа SAML для предприятия
shortTitle: Configure SAML SSO
intro: 'Вы можете контролировать и защищать доступ к {% ifversion ghec %}ресурсам, таким как репозитории, проблемы, и запросы на вытягивание в организациях предприятия{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}ваше предприятие на {% data variables.product.prodname_ghe_managed %}{% endif %} от {% ifversion ghec %}принудительное применение{% elsif ghes or ghae %}настройки{% endif %} единого входа SAML через поставщика удостоверений (IdP).'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183959'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Сведения о едином входе SAML

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Дополнительные сведения см. в разделе [Просмотр сведений о SAML-доступе пользователей к предприятию и управление ими](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

Единый вход SAML позволяет централизованно контролировать и защищать доступ к {% data variables.location.product_location %} из поставщика удостоверений SAML. Когда пользователь без проверки подлинности посещает {% data variables.location.product_location %} в браузере, {% data variables.product.product_name %} перенаправит пользователя к поставщику удостоверений SAML для проверки подлинности. После успешной проверки подлинности пользователя с помощью учетной записи поставщика удостоверений поставщик удостоверений перенаправляет пользователя обратно в {% data variables.location.product_location %}. {% data variables.product.product_name %} проверяет ответ от поставщика удостоверений, а затем предоставляет доступ пользователю.

После успешной проверки подлинности пользователя в поставщике удостоверений сеанс SAML пользователя для {% data variables.location.product_location %} активен в браузере в течение 24 часов. Через 24 часа пользователь должен будет снова пройти проверку подлинности у поставщика удостоверений.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Дополнительные сведения см. в разделе [Настройка подготовки пользователей для вашей организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

{% endif %}

{% endif %}

## Поддерживаемые поставщики удостоверений

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Рекомендации по использованию имен пользователей в SAML

{% ifversion ghec %}Если вы используете {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Принудительное применение единого входа SAML для организаций в корпоративной учетной записи

При принудительном применении единого входа SAML для вашего предприятия конфигурация предприятия переопределит все существующие конфигурации SAML на уровне организаций. {% data reusables.saml.switching-from-org-to-enterprise %} Дополнительные сведения см. в разделе [Переключение конфигурации SAML с организации на корпоративную учетную запись](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

При принудительном применении единого входа SAML для организации {% data variables.product.company_short %} удаляет всех участников организации, которые не прошли проверку подлинности с помощью поставщика удостоверений SAML. Когда вы требуете для вашего предприятия единый вход SAML, {% data variables.product.company_short %} не удаляет участников предприятия, которые не прошли проверку подлинности с помощью поставщика удостоверений SAML. При следующем доступе к ресурсам предприятия участник должен пройти проверку подлинности с помощью поставщика удостоверений SAML.

Дополнительные сведения о включении SAML с помощью Okta см. в разделе [Настройка единого входа SAML для корпоративной учетной записи с помощью Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Единый вход SAML" выберите **Требовать проверку подлинности SAML**.
  ![Флажок для включения единого входа SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. В поле **URL-адрес входа** введите конечную точку HTTPS поставщика удостоверений для запросов единого входа. Это значение доступно в конфигурации поставщика удостоверений.
![Поле для URL-адреса, на который участники будут переадресованы при входе](/assets/images/help/saml/saml_sign_on_url_business.png)
7. При необходимости в поле **Издатель** введите URL-адрес издателя SAML для проверки подлинности отправляемых сообщений.
![Поле для имени издателя SAML](/assets/images/help/saml/saml_issuer.png)
8. В поле **Открытый сертификат** вставьте сертификат для проверки ответов SAML.
![Поле для открытого сертификата поставщика удостоверений](/assets/images/help/saml/saml_public_certificate.png)
9. Чтобы проверить целостность запросов от издателя SAML, нажмите значок {% octicon "pencil" aria-label="The edit icon" %}. Затем в раскрывающихся списках "Метод подписи" и "Метод дайджеста" выберите хэш-алгоритм, используемый издателем SAML.
![Раскрывающиеся списки алгоритмов хэширования для метода подписи и метода дайджеста, используемых издателем SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Перед включением единого входа SAML для вашего предприятия щелкните **Проверить конфигурацию SAML**, чтобы убедиться, что введены правильные сведения. ![Кнопка для проверки конфигурации SAML перед применением](/assets/images/help/saml/saml_test.png)
11. Выберите команду **Сохранить**.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Настройка единого входа SAML

Вы можете включить или отключить проверку подлинности SAML для {% data variables.location.product_location %} или изменить существующую конфигурацию. Параметры проверки подлинности для {% data variables.product.product_name %} можно просматривать и изменять в консоли управления. Дополнительные сведения см. в статье "[Доступ к консоли управления](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Примечание**. {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Выберите **SAML**.
   
   ![Снимок экрана: параметр включения проверки подлинности SAML в консоли управления](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Снимок экрана: параметр включения встроенной проверки подлинности за пределами поставщика удостоверений SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. При необходимости, чтобы включить единый вход без запроса, выберите **Единый вход, инициированный поставщиком удостоверений**. По умолчанию {% data variables.product.prodname_ghe_server %} отвечает на назапрашиваемый запрос поставщика удостоверений (IdP) с сообщением `AuthnRequest` обратно поставщику удостоверений.

   ![Снимок экрана: параметр включения ответа на назапрашиваемый запрос, инициированный поставщиком удостоверений](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Примечание.** Рекомендуется оставлять этот параметр **неотмеченным**. Эту функцию следует включать **только** в редких случаях, когда реализация SAML не поддерживает единый вход, инициированный поставщиком услуг, и когда это рекомендует {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Выберите **Отключить понижение или повышение роли администратора** , если вы **не** хотите, чтобы поставщик SAML определял права администратора для пользователей в {% data variables.location.product_location %}.

   ![Снимок экрана: параметр для учета атрибута "администратор" поставщика удостоверений для включения или отключения прав администратора](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. При необходимости, чтобы разрешить {% data variables.location.product_location %} получать зашифрованные утверждения от поставщика удостоверений SAML, выберите **Требовать зашифрованные утверждения**. Необходимо убедиться, что поставщик удостоверений поддерживает зашифрованные утверждения и что методы шифрования и передачи ключей в консоли управления соответствуют значениям, настроенным для поставщика удостоверений. Необходимо также предоставить поставщику удостоверений общедоступный сертификат {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Включение зашифрованных утверждений](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions).

   ![Снимок экрана: флажок "Включить зашифрованные утверждения" в разделе "Проверка подлинности" консоли управления](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. В поле **URL-адреса единого входа** введите конечную точку HTTP или HTTPS поставщика удостоверений для запросов единого входа. Это значение предоставляется конфигурацией поставщика удостоверений. Если узел доступен только из внутренней сети, может потребоваться [настроить {% data variables.location.product_location %} для использования внутренних серверов доменных имен](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Снимок экрана: текстовое поле для URL-адреса единого входа](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. При необходимости в поле **Издатель** введите имя издателя SAML. Это проверяет подлинность сообщений, отправленных в {% data variables.location.product_location %}.

   ![Снимок экрана: текстовое поле для URL-адреса издателя SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. В раскрывающихся меню **Метод подписи** и **Дайджест-метод** выберите алгоритм хэширования, используемый издателем SAML, чтобы проверить целостность запросов от {% data variables.location.product_location %}. Укажите формат в раскрывающемся меню **Формат идентификатора имени**.

   ![Снимок экрана: раскрывающееся меню для выбора метода подписи и дайджеста](/assets/images/enterprise/management-console/saml-method.png)
1. В разделе **Сертификат проверки** щелкните **Выбрать файл** и выберите сертификат для проверки ответов SAML от поставщика удостоверений.

   ![Снимок экрана: кнопка для отправки сертификата проверки поставщика удостоверений](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. При необходимости измените имена атрибутов SAML в соответствии с поставщиком удостоверений или примите имена по умолчанию.

   ![Снимок экрана: поля для ввода дополнительных атрибутов SAML](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Включение единого входа SAML

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Следующие поставщики удостоверений предоставляют документацию по настройке единого входа SAML для {% data variables.product.product_name %}. Если ваш поставщик удостоверений не указан, обратитесь к своему поставщику удостоверений, чтобы запросить поддержку для {% data variables.product.product_name %}.

 | IdP | Дополнительные сведения |
 | :- | :- |
 | Azure AD | [Настройка проверки подлинности и подготовка вашей организации с помощью Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad) |
| Okta | [Настройка проверки подлинности и подготовка вашей организации с помощью Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta) |

Во время инициализации для {% data variables.product.product_name %} необходимо настроить {% data variables.product.product_name %} в качестве поставщика услуг SAML в поставщике удостоверений. Чтобы настроить {% data variables.product.product_name %} в качестве допустимого поставщика услуг, необходимо ввести несколько уникальных значений для поставщика удостоверений. Дополнительные сведения см. в разделе [Справочник по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata).

## Изменение конфигурации единого входа SAML

При изменении сведений о поставщике удостоверений необходимо изменить конфигурацию единого входа SAML для {% data variables.location.product_location %}. Например, если срок действия сертификата поставщика удостоверений истек, можно изменить значение для открытого сертификата.

{% ifversion ghae %}

{% note %}

**Примечание**. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Единый вход SAML" введите новые сведения для поставщика удостоверений.
  ![Поля ввода текста со сведениями о поставщике удостоверений в конфигурации единого входа SAML для предприятия](/assets/images/help/saml/ae-edit-idp-details.png)
1. При необходимости щелкните значок {% octicon "pencil" aria-label="The edit icon" %}, чтобы настроить новый метод подписи или дайджеста.
  ![Значок изменения подписи и дайджеста](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Используйте раскрывающееся меню для выбора нового метода подписи или дайджеста.
      ![Раскрывающиеся меню для выбора нового метода подписи или дайджеста](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Чтобы убедиться, что введенные сведения верны, нажмите кнопку **Проверить конфигурацию SAML**.
  ![Кнопка "Проверить конфигурацию SAML"](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Выберите команду **Сохранить**.
    ![Кнопка "Сохранить" для конфигурации единого входа SAML](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. При необходимости для автоматической подготовки и отзыва учетных записей пользователей для {% data variables.location.product_location %} перенастройте подготовку пользователей с помощью SCIM. Дополнительные сведения см. в разделе [Настройка подготовки пользователей в организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

{% endif %}

{% ifversion ghae %}

## Отключение единого входа SAML

{% warning %}

**Предупреждение**. Если отключить единый вход SAML для {% data variables.location.product_location %}, пользователи без сеансов единого входа SAML не смогут войти в {% data variables.location.product_location %}. Сеансы единого входа SAML в {% data variables.location.product_location %} завершаются через 24 часа.

{% endwarning %}

{% note %}

**Примечание**. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Единый вход SAML" снимите флажок **Включить проверку подлинности SAML**.
  ![Флажок "Включить проверку подлинности SAML"](/assets/images/help/saml/ae-saml-disabled.png)
1. Чтобы отключить единый вход SAML и требовать входа со встроенной учетной записью пользователя, созданной во время инициализации, нажмите кнопку **Сохранить**.
    ![Кнопка "Сохранить" для конфигурации единого входа SAML](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## Дополнительные материалы

{%- ifversion ghec %}
- [Управление единым входом SAML для вашей организации](/organizations/managing-saml-single-sign-on-for-your-organization) {%- endif %} {%- ifversion ghes %}
- [Повышение или понижение уровня для администратора сайта](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator) {%- endif %}

{% endif %}
