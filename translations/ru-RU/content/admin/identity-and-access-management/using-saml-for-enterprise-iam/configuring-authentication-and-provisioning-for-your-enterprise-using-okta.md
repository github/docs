---
title: Настройка проверки подлинности и подготовка вашей организации с помощью Okta
shortTitle: Configure with Okta
intro: 'Вы можете использовать Okta в качестве поставщика удостоверений (IdP) для централизованного управления проверкой подлинности и подготовкой пользователей для {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192676'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Сведения о проверке подлинности и подготовке пользователей с помощью Okta

Вы можете использовать Okta в качестве поставщика удостоверений (IdP) для {% data variables.product.product_name %}, что позволяет пользователям Okta входить в {% data variables.product.product_name %} с помощью учетных данных Okta.

Чтобы использовать Okta в качестве поставщика удостоверений для {% data variables.product.product_name %}, можно добавить приложение {% data variables.product.product_name %} в Okta, настроить Okta в качестве поставщика удостоверений в {% data variables.product.product_name %} и подготовить доступ для пользователей и групп Okta.

{% data reusables.saml.idp-saml-and-scim-explanation %}
- [Сопоставление групп Okta с командами](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)

После включения SCIM следующие функции подготовки будут доступны для всех пользователей, которым вы назначаете приложение {% data variables.product.product_name %} в Okta.

{% data reusables.scim.ghes-beta-note %}

Следующие функции подготовки доступны для всех пользователей Okta, назначенных приложению {% data variables.product.product_name %}.

| Компонент | Описание |
| --- | --- |
| Отправка новых пользователей | При создании нового пользователя в Okta он добавляется в {% data variables.product.product_name %}. |
| Принудительная деактивация пользователя | При отключении пользователя в Okta пользователь будет приостановлен из вашего предприятия в {% data variables.product.product_name %}. |
| Обновления профиля | При обновлении профиля пользователя в Okta будут обновлены метаданные о членстве пользователя в организации в {% data variables.product.product_name %}. |
| Повторная активация пользователей | При повторной активации пользователя в Okta он отменит добавление пользователя в вашей организации на {% data variables.product.product_name %}. |

Дополнительные сведения об управлении удостоверениями и доступом для предприятия в {% data variables.location.product_location %} см. в разделе [Управление удостоверениями и доступом для предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise).

## Предварительные требования

- Чтобы настроить проверку подлинности и подготовку пользователей для {% data variables.product.product_name %} с помощью Okta, необходимо иметь учетную запись и клиент Okta.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Добавление приложения {% data variables.product.product_name %} в Okta


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. В поле поиска введите "GitHub AE", а затем в результатах нажмите **GitHub AE**.

  !["Результат поиска"](/assets/images/help/saml/okta-ae-search.png)
1. Нажмите кнопку **Добавить**.

  !["Добавить приложение GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. В поле "Базовый URL-адрес" введите URL-адрес предприятия в {% data variables.product.product_name %}.

  !["Настроить базовый URL-адрес"](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Нажмите кнопку **Done**(Готово).
{%- elsif scim-for-ghes %}
1. В поле поиска введите "GitHub Enterprise Server", а затем щелкните **GitHub Enterprise Server** в результатах.
1. Нажмите кнопку **Добавить**.
1. В поле "Базовый URL-адрес" введите URL-адрес {% data variables.location.product_location %}.
1. Нажмите кнопку **Done**(Готово).
{% endif %}

## Включение единого входа SAML для {% data variables.product.product_name %}

Чтобы включить единый вход (SSO) для {% data variables.product.product_name %}, необходимо настроить {% data variables.product.product_name %} на использование URL-адреса входа, URL-адреса издателя и общедоступного сертификата, предоставленного Okta. Эти сведения можно найти в приложении Okta для {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Запишите сведения: "URL-адрес входа", "Издатель" и "Общедоступный сертификат". 
1. Используйте сведения, чтобы включить единый вход SAML для предприятия в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. Используйте сведения, чтобы включить единый вход SAML для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
{%- endif %}

{% note %}

**Примечание:** Чтобы протестировать конфигурацию SAML из {% data variables.product.product_name %}, необходимо назначить учетную запись пользователя Okta приложению {% data variables.product.product_name %}.

{% endnote %}

## Включение интеграции API

Приложение Okta использует REST API для {% data variables.product.product_name %} для подготовки SCIM. Вы можете включить и проверить доступ к API, настроив Okta с {% data variables.product.pat_generic %} для {% data variables.product.product_name %}.

1. В {% data variables.product.product_name %} создайте {% data variables.product.pat_v1 %} с областью `admin:enterprise` . Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Щелкните **Настройка интеграции API**.

1. Выберите **Включить интеграцию API**.

  ![Включение интеграции API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. В поле "Токен API" введите ранее созданный {% data variables.product.product_name %} {% data variables.product.pat_generic %}.

1. Нажмите **Проверить учетные данные API**. 

{% note %}

**Примечание:** Если отображается `Error authenticating: No results for users returned`значение , убедитесь, что вы включили единый вход для {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Включение единого входа SAML для {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae).

{% endnote %}

## Настройка параметров подготовки SCIM

В этой процедуре показана настройка параметров SCIM для подготовки Okta. Эти параметры определяют, какие функции будут использоваться при автоматической подготовке учетных записей пользователей Okta в {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. В разделе "Параметры" нажмите **В приложение**.

  ![Параметры «В приложение»](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. Справа от элемента "Provisioning to App" (Подготовка для приложения) нажмите кнопку **Изменить**.
1. Справа от пункта "Создать пользователей" выберите **Включить**.
1. Справа от пункта "Обновить атрибуты пользователя" выберите **Включить**.
1. Справа от пункта "Деактивировать пользователей" выберите **Включить**.
1. Выберите команду **Сохранить**.

## Предоставление пользователям и группам Okta доступа к {% data variables.product.product_name %}

Можно подготовить доступ к {% data variables.product.product_name %} для отдельных ваших пользователей Okta или для всех групп.

### Подготовка доступа для пользователей Okta

Прежде чем пользователи Okta смогут использовать свои учетные данные для входа в {% data variables.product.product_name %}, необходимо назначить пользователей приложению Okta для {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. Нажмите **Назначения**.

  ![Вкладка "Назначения"](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Выберите раскрывающееся меню "Назначить" и нажмите кнопку **Назначить пользователям**.

  ![Кнопка "Назначить пользователям"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. Справа от нужной учетной записи пользователя нажмите кнопку **Назначить**.

  ![Список пользователей](/assets/images/help/saml/okta-ae-assign-user.png)

1. Справа от слова "Роль" щелкните роль пользователя, а затем нажмите кнопку **Сохранить и вернуться**.

  ![Выбор ролей](/assets/images/help/saml/okta-ae-assign-role.png)

1. Нажмите кнопку **Done**(Готово).

{% ifversion ghae %}
### Подготовка доступа для групп Okta

Вы можете сопоставить группу Okta с командой в {% data variables.product.product_name %}. Члены группы Okta автоматически станут членами сопоставленной команды {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
{% endif %}

## Дополнительные материалы

- [Основные сведения о SAML](https://developer.okta.com/docs/concepts/saml/) в документации Okta
- [Основные сведения о SCIM](https://developer.okta.com/docs/concepts/scim/) в документации Okta
