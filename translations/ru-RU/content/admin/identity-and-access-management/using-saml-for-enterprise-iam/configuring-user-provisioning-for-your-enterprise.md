---
title: Настройка подготовки пользователей в организации
shortTitle: Configure user provisioning
intro: Вы можете настроить систему для управления междоменной идентификацией (SCIM) для вашего предприятия, которая автоматически подготавливает учетные записи пользователей для {% данных variables.location.product_location %} при назначении приложения для {% данных variables.location.product_location %} пользователю поставщика удостоверений (IdP).
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: a193150129cd0d8007e88a0c8f88767857f36284
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099164"
---
## Сведения о подготовке пользователей в организации

{% data reusables.saml.ae-uses-saml-sso %} Дополнительные сведения приведены в статье [Настройка единого входа SAML для вашего предприятия](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

Вы можете настроить подготовку пользователей с помощью SCIM для автоматического создания или приостановки учетных записей пользователей и предоставления доступа для {% data variables.product.product_name %} при назначении или отмене назначения приложения в настройках вашего поставщика удостоверений. Дополнительные сведения о SCIM можно найти на странице [System for Cross-domain Identity Management: протокол (RFC 7644)](https://tools.ietf.org/html/rfc7644) на веб-сайте IETF.

Если вы не настроите подготовку пользователей с помощью SCIM, ваш поставщик удостоверений не будет автоматически взаимодействовать с {% data variables.product.product_name %} при назначении или отмене назначения приложения пользователю. Без SCIM {% data variables.product.product_name %} создает учетную запись пользователя с помощью JIT-подготовки SAML при первом переходе в {% data variables.product.product_name %} и входе с использованием проверки подлинности через поставщика удостоверений.

Настройка подготовки позволяет idP взаимодействовать с {% данными variables.location.product_location %} при назначении или отмене назначения приложения для {% данных variables.product.product_name %} пользователю в idP. При назначении приложения ваш idP предложит {% данных variables.location.product_location %} создать учетную запись и отправить пользователю сообщение электронной почты о подключении. При отмене назначения приложения поставщик удостоверений будет взаимодействовать с {% data variables.product.product_name %}, чтобы сделать недействительными все сеансы SAML и отключить учетную запись участника.

Чтобы настроить подготовку для предприятия, необходимо включить подготовку в {% data variables.product.product_name %}, а затем установить и настроить приложение подготовки у поставщика удостоверений.

Приложение подготовки у поставщика удостоверений взаимодействует с {% data variables.product.product_name %} с помощью нашего API SCIM для предприятий. Дополнительные сведения см. в разделе [Администрирование GitHub Enterprise](/rest/reference/enterprise-admin#scim) в документации по REST API {% data variables.product.prodname_dotcom %}.

## Поддерживаемые поставщики удостоверений

Для единого входа с помощью {% data variables.product.prodname_ghe_managed %} поддерживаются следующие поставщики удостоверений:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Для поставщиков удостоверений, поддерживающих сопоставление групп, можно назначить или отменить назначение приложения для {% data variables.product.product_name %} группам пользователей в настройках поставщика удостоверений. Затем эти группы доступны владельцам и сотрудникам организации в {% данных variables.location.product_location %} для сопоставления с командами {% variables.product.product_name %}. Дополнительные сведения см. в статье [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

## Предварительные требования

Чтобы автоматически подготавливать и отзывать доступ к {% данных variables.location.product_location %} от поставщика удостоверений, необходимо сначала настроить единый вход SAML при инициализации {% данных variables.product.product_name %}. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

Чтобы настроить приложение для подготовки пользователей для {% data variables.product.product_name %}, необходимо иметь административный доступ к поставщику удостоверений.

## Включение подготовки пользователей в предприятии

1. Во время входа в {% данных variables.location.product_location %} в качестве владельца предприятия создайте {% данных variables.product.pat_v1 %} с областью **admin:enterprise** . Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Примечания**
    - Чтобы создать {% данных variables.product.pat_generic %}, рекомендуется использовать учетную запись для первого владельца предприятия, созданного во время инициализации. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).
    - Вам потребуется этот {% данных variables.product.pat_generic %}, чтобы настроить приложение для SCIM в idP. Храните маркер безопасно в диспетчере паролей, пока он не потребуется позже в этих инструкциях.

  {% endnote %} {% warning %}

  **Предупреждение.** Если учетная запись пользователя для владельца предприятия, создающего {% данных variables.product.pat_generic %}, деактивирована или отозвана, ваш idP больше не будет подготавливать и отзывать учетные записи пользователей для вашего предприятия автоматически. Другой владелец предприятия должен создать {% данных variables.product.pat_generic %} и перенастроить подготовку для поставщика удостоверений.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Подготовка пользователей SCIM" выберите **Требовать подготовку пользователей SCIM**.
  ![Флажок "Требовать подготовку пользователей SCIM" в параметрах безопасности предприятия](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Выберите команду **Сохранить**.
  ![Кнопка сохранения под флажком "Требовать подготовку пользователей SCIM" в параметрах безопасности предприятия](/assets/images/help/enterprises/settings-scim-save.png)
1. Настройте подготовку пользователей в приложении для {% data variables.product.product_name %} у поставщика удостоверений.

  Следующие поставщики удостоверений предоставляют документацию по настройке подготовки для {% data variables.product.product_name %}. Если ваш поставщик удостоверений не указан, обратитесь к своему поставщику удостоверений, чтобы запросить поддержку для {% data variables.product.product_name %}.

  | IdP | Дополнительные сведения |
  | :- | :- |
  | Azure AD | [Учебник. Настройка {% data variables.product.prodname_ghe_managed %} для автоматической подготовки пользователей](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) в Документации Майкрософт. Сведения о настройке Azure AD для {% data variables.product.prodname_ghe_managed %} приведены в статье [Настройка проверки подлинности и подготовки для предприятия с помощью Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad).|
| Okta | (бета-версия) Сведения о настройке Okta для {% data variables.product.prodname_ghe_managed %} приведены в статье [Настройка проверки подлинности и подготовки для организации с помощью Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta).|

  Приложению в idP требуется два значения для подготовки или отзыва учетных записей пользователей на {% данных variables.location.product_location %}.

  | Значение | Другие названия | Описание | Пример |
  | :- | :- | :- | :- |
  | URL-адрес | URL-адрес клиента | URL-адрес API подготовки SCIM для вашего предприятия в {% data variables.product.prodname_ghe_managed %}. | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Общий секрет | {% данных variables.product.pat_generic_caps %}, секретный токен | Токен для приложения в поставщике удостоверений для выполнения задач подготовки от имени владельца предприятия | {% данных variables.product.pat_generic_caps %} вы создали на шаге 1 |
