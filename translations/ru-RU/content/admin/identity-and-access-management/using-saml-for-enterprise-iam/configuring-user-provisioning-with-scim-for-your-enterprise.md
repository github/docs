---
title: Настройка подготовки пользователей с помощью SCIM для предприятия
shortTitle: Configure SCIM user provisioning
intro: 'Вы можете настроить System for Cross-domain Identity Management (SCIM) для {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, которая автоматически подготавливает учетные записи пользователей при назначении приложения для {% ifversion scim-for-ghes %}вашего экземпляра{% elsif ghae %}{% data variables.product.product_name %}{% endif %} пользователю в поставщике удостоверений (IdP).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: ded93a01d14d1a5e26cdf35efed4f13afc832ca1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192668'
---
{% data reusables.scim.ghes-beta-note %}

## Сведения о подготовке пользователей для {% data variables.product.product_name %}

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} Дополнительные сведения приведены в статье [Настройка единого входа SAML для вашего предприятия](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

{% endif %}

{% ifversion scim-for-ghes %} Если вы используете единый вход SAML для {% data variables.location.product_location %}, вы{% elsif ghae %}Вы{% endif %} можете настроить SCIM для автоматического создания или приостановки учетных записей пользователей и предоставления доступа{% ifversion scim-for-ghes %} экземпляру{% elsif ghae %} для {% data variables.product.product_name %}{% endif %} при назначении или отмене назначения приложения в поставщике удостоверений. Дополнительные сведения о SCIM можно найти на странице [System for Cross-domain Identity Management: протокол (RFC 7644)](https://tools.ietf.org/html/rfc7644) на веб-сайте IETF.

Если вы не настроите подготовку пользователей с помощью SCIM, ваш поставщик удостоверений не будет автоматически взаимодействовать с {% data variables.product.product_name %} при назначении или отмене назначения приложения пользователю. Без SCIM {% data variables.product.product_name %} создает учетную запись пользователя с помощью JIT-подготовки SAML при первом переходе в {% data variables.product.product_name %} и входе с использованием проверки подлинности через поставщика удостоверений.

Настройка подготовки позволяет поставщику удостоверений взаимодействовать с {% data variables.location.product_location %} при назначении или отмене назначения приложения для {% data variables.product.product_name %} пользователю в поставщике удостоверений. При назначении приложения поставщик удостоверений предложит {% data variables.location.product_location %} создать учетную запись и отправить пользователю электронное письмо о подключении. При отмене назначения приложения поставщик удостоверений будет взаимодействовать с {% data variables.product.product_name %}, чтобы сделать недействительными все сеансы SAML и отключить учетную запись участника.

Чтобы настроить подготовку для предприятия, необходимо включить подготовку в {% data variables.product.product_name %}, а затем установить и настроить приложение подготовки у поставщика удостоверений.

{% ifversion scim-for-ghes %}

Приложение подготовки в поставщике удостоверений взаимодействует с {% data variables.product.product_name %} с помощью API SCIM. Дополнительные сведения см. в разделе [SCIM](/rest/enterprise-admin/scim) документации по REST API.

{% endif %}

## Сведения об удостоверениях и утверждениях

После того как администратор поставщика удостоверений предоставит пользователю доступ к {% data variables.location.product_location %}, пользователь может пройти проверку подлинности через поставщика удостоверений для доступа к {% data variables.product.product_name %} с помощью единого входа SAML.

Во время проверки подлинности {% ifversion scim-for-ghes %}экземпляр{% elsif ghae %}{% data variables.product.product_name %}{% endif %} пытается связать пользователя с удостоверением SAML. По умолчанию {% ifversion scim-for-ghes %}экземпляр{% elsif ghae %}{% data variables.product.product_name %}{% endif %} сравнивает `NameID` утверждение от поставщика удостоверений с именем пользователя учетной записи. {% data variables.product.product_name %} нормализует значение `NameID` для сравнения. Дополнительные сведения о нормализации имени пользователя см. в разделе Рекомендации [по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization).

Если в экземпляре нет учетной записи с соответствующим именем пользователя, пользователю не удастся войти в систему.{% ifversion scim-for-ghes %} Чтобы выполнить это сопоставление, {% data variables.product.product_name %} сравнивает утверждение SAML `NameId` из поставщика удостоверений с `username` утверждением для каждой учетной записи пользователя, подготовленной SCIM в экземпляре.{ % endif %}

{% ifversion scim-for-ghes %}

{% note %}

**Примечание**. Во время проверки подлинности SAML в некоторых средах в качестве уникального идентифицирующие утверждения может использоваться значение, отличное `NameID` от . В настоящее время при использовании подготовки SCIM настраиваемые сопоставления атрибутов пользователя SAML не поддерживаются.

{% endnote %}

{% endif %}

Если {% data variables.product.product_name %} успешно идентифицирует пользователя из поставщика удостоверений, но данные учетной записи, такие как адрес электронной почты, имя или фамилия, не совпадают, экземпляр перезаписывает сведения значениями из поставщика удостоверений. Все адреса электронной почты, отличные от основного адреса электронной почты, подготовленные SCIM, также будут удалены из учетной записи пользователя.

## Поддерживаемые поставщики удостоверений

{% ifversion ghes %}

Во время закрытой бета-версии ваша команда по учетным записям предоставит документацию по настройке SCIM для {% data variables.product.product_name %} в поддерживаемом поставщике удостоверений.

{% elsif ghae %}

Следующие поставщики удостоверений поддерживают подготовку пользователей с помощью SCIM для {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

Для поставщиков удостоверений, поддерживающих сопоставление групп, можно назначить или отменить назначение приложения для {% data variables.product.product_name %} группам пользователей в настройках поставщика удостоверений. Затем эти группы будут доступны владельцам организации и участникам команд в {% data variables.location.product_location %} для сопоставления с командами {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

{% endif %}

## Предварительные требования

{% ifversion ghae %}

- При инициализации {% data variables.product.product_name %} необходимо настроить единый вход SAML. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- Необходимо разрешить встроенную проверку подлинности для пользователей, у которых нет учетной записи поставщика удостоверений. Дополнительные сведения см. в статье [Разрешение встроенной проверки подлинности пользователям за пределами вашего поставщика](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).

- Поставщик удостоверений должен поддерживать вызовы SCIM к поставщику услуг .

{% endif %}

- Чтобы настроить приложение для подготовки пользователей для {% data variables.product.product_name %}, необходимо иметь административный доступ к поставщику удостоверений.

## Включение подготовки пользователей в предприятии

{% ifversion scim-for-ghes %}

Для выполнения действий по подготовке в экземпляре необходимо создать встроенную учетную запись пользователя и повысить ее до владельца предприятия.

После включения SCIM в экземпляре {% data variables.product.product_name %} все учетные записи пользователей приостанавливаются. Встроенная учетная запись пользователя продолжит выполнять действия по подготовке. После предоставления пользователю доступа к экземпляру из поставщика удостоверений поставщик удостоверений будет взаимодействовать с экземпляром с помощью SCIM, чтобы отменить добавление учетной записи пользователя.

{% endif %}

{%- ifversion ghae %}
1. Во время входа в {% data variables.location.product_location %} в качестве владельца предприятия создайте {% data variables.product.pat_v1 %} с областью **admin:enterprise** . Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).
  {% note %}

  **Примечания**
    - Чтобы создать {% data variables.product.pat_generic %}, рекомендуется использовать учетную запись первого владельца предприятия, созданного во время инициализации. Дополнительные сведения см. в разделе [Инициализация {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).
    - Этот {% data variables.product.pat_generic %} потребуется для настройки приложения для SCIM в поставщике удостоверений. Храните маркер безопасно в диспетчере паролей, пока он не потребуется позже в этих инструкциях.

  {% endnote %} {% warning %}

  **Предупреждение**. Если учетная запись пользователя владельца предприятия, создавшего {% data variables.product.pat_generic %}, деактивирована или отозвана, поставщик удостоверений больше не будет автоматически подготавливать и отзывать учетные записи пользователей для вашего предприятия. Другой владелец предприятия должен создать новый {% data variables.product.pat_generic %} и перенастроить подготовку в поставщике удостоверений.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. Создайте встроенную учетную запись пользователя для выполнения действий по подготовке экземпляра. Дополнительные сведения см. в статье [Разрешение встроенной проверки подлинности пользователям за пределами вашего поставщика](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance).
1. Повышение уровня выделенной учетной записи пользователя до владельца предприятия. Дополнительные сведения см. на странице [Приглашение людей для управления предприятием](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account).
1. Войдите в экземпляр в качестве нового владельца предприятия.
1. Создайте {% data variables.product.pat_v1 %} с областью **admin:enterprise** . Не указывайте дату окончания срока действия для {% data variables.product.pat_v1 %}. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).

   {% warning %}
   
   **Предупреждение**. Убедитесь, что не указана дата окончания срока действия для {% data variables.product.pat_v1 %}. Если указать дату окончания срока действия, SCIM больше не будет работать после истечения срока действия.
   
   {% endwarning %} {% note %}

   **Примечание**. Этот {% data variables.product.pat_generic %} понадобится для тестирования конфигурации SCIM и настройки приложения для SCIM в поставщике удостоверений. Храните маркер безопасно в диспетчере паролей, пока он не потребуется позже в этих инструкциях.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Чтобы включить SCIM, выполните команды, предоставленные менеджером по работе с клиентами в {% data variables.contact.contact_enterprise_sales %}.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. Чтобы проверить работоспособность SCIM, выполните следующие команды. Замените _PAT FROM STEP 3_ и ИМЯ _УЗЛА ВАШЕГО ЭКЗЕМПЛЯРа_ фактическими значениями.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   Команда должна вернуть пустой массив.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. В разделе "Подготовка пользователей SCIM" выберите **Требовать подготовку пользователей SCIM**.
  ![Флажок "Требовать подготовку пользователей SCIM" в параметрах безопасности предприятия](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Выберите команду **Сохранить**.
  ![Кнопка "Сохранить" в разделе "Требовать подготовку пользователей SCIM" в параметрах](/assets/images/help/enterprises/settings-scim-save.png) безопасности предприятия {%- endif %}
1. Настройте подготовку пользователей в приложении для {% data variables.product.product_name %} в поставщике удостоверений. {% ifversion scim-for-ghes %} Чтобы запросить документацию для поддерживаемого поставщика удостоверений, обратитесь к менеджеру по работе с клиентами по адресу {% data variables.contact.contact_enterprise_sales %}. Если поставщик удостоверений не поддерживается, необходимо создать приложение и настроить SCIM вручную. {% elsif ghae %}

  Следующие поставщики удостоверений предоставляют документацию по настройке подготовки для {% data variables.product.product_name %}. Если ваш поставщик удостоверений не указан, обратитесь к своему поставщику удостоверений, чтобы запросить поддержку для {% data variables.product.product_name %}.

  | IdP | Дополнительные сведения |
  | :- | :- |
  | Azure AD | [Руководство. Настройка {% data variables.product.prodname_ghe_managed %} для автоматической подготовки пользователей](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) в Документация Майкрософт. Сведения о настройке Azure AD для {% data variables.product.product_name %} см. в разделе [Настройка проверки подлинности и подготовки для предприятия с помощью Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad). |
  | Okta | (бета-версия) Сведения о настройке Okta для {% data variables.product.product_name %} см. в разделе [Настройка проверки подлинности и подготовки для предприятия с помощью Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta). |

  Приложению в поставщике удостоверений требуется два значения для подготовки или отзыва учетных записей пользователей в {% data variables.location.product_location %}.

  | Значение | Другие названия | Описание | Пример |
  | :- | :- | :- | :- |
  | URL-адрес | URL-адрес клиента | URL-адрес API подготовки SCIM для предприятия в {% data variables.product.product_name %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Общий секрет | {% data variables.product.pat_generic_caps %}, секретный токен | Токен для приложения в поставщике удостоверений для выполнения задач подготовки от имени владельца предприятия | {% data variables.product.pat_generic_caps %}, созданный на шаге 1 |
  {%- endif %}
