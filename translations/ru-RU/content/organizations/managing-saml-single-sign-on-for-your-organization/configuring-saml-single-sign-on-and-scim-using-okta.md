---
title: Настройка единого входа SAML и SCIM с помощью Okta
intro: 'Для автоматического управления доступом к организации в {% data variables.location.product_location %}можно использовать единый вход на языке SAML и систему управления междоменной идентификацией (SCIM) с Okta.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: c1b6ab48122c97cb1f805399430cc181ed3f30d1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192740'
---
## Сведения о SAML и SCIM с Okta

Вы можете управлять доступом к организации в {% data variables.location.product_location %} и других веб-приложениях из одного центрального интерфейса, настроив организацию для использования единого входа SAML и SCIM с okta, поставщиком удостоверений (IdP).

{% data reusables.saml.ghec-only %}

Единый вход SAML контролирует и защищает доступ к ресурсам организации, таким как репозитории, проблемы и запросы на вытягивание. SCIM автоматически добавляет, управляет и удаляет доступ участников к вашей организации в {% data variables.location.product_location %} при внесении изменений в Okta. Дополнительные сведения см. в разделах [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) и [Сведения о SCIM для организаций](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

После включения SCIM доступны следующие функции подготовки для всех пользователей, которым назначено приложение {% data variables.product.prodname_ghe_cloud %} в Okta.

| Компонент | Описание |
| --- | --- |
| Отправка новых пользователей | При создании нового пользователя в Okta он получит сообщение электронной почты о присоединении к вашей организации на {% data variables.location.product_location %}. |
| Принудительная деактивация пользователя | При отключении пользователя в Okta Okta удалит его из вашей организации в {% data variables.location.product_location %}. |
| Обновления профиля | При обновлении профиля пользователя в Okta Okta обновит метаданные для членства пользователя в вашей организации в {% data variables.location.product_location %}. |
| Повторная активация пользователей | При повторной активации пользователя в Okta Okta отправит пользователю по электронной почте приглашение на повторное присоединение к организации на {% data variables.location.product_location %}. |

Кроме того, можно настроить единый вход SAML для предприятия с помощью Okta. SCIM для корпоративных учетных записей доступен только с Enterprise Managed Users. Дополнительные сведения см. в разделах [Настройка единого входа SAML для предприятия с помощью Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta) и [Настройка подготовки SCIM для Enterprise Managed Users с помощью Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta).

## Настройка SAML в Okta

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {% data reusables.saml.okta-add-ghec-org-integration %}
1. Заполните форму, указав название организации в {% data variables.product.prodname_dotcom %} и уникальное имя приложения интеграции приложений OAuth.
{% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Включите и протестируйте единый вход SAML на {% data variables.product.prodname_dotcom %}, используя URL-адрес для входа, URL-адрес издателя и общедоступные сертификаты из руководства "Настройка SAML 2.0". Дополнительные сведения см. в разделе [Включение и тестирование единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization).

## Настройка подготовки доступа с помощью SCIM в Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Войдите в {% data variables.product.prodname_dotcom_the_website %} с помощью учетной записи, которая является владельцем организации и в идеале используется только для конфигурации SCIM.
1. Чтобы создать активный сеанс SAML для вашей организации, перейдите к `https://github.com/orgs/ORGANIZATION-NAME/sso`. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
1. Перейдите к Okta.
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. Щелкните **Проверка подлинности с помощью {% data variables.product.prodname_ghe_cloud %} — организация**.
1. Справа от имени вашей организации щелкните **Предоставить**.

  ![Кнопка "Предоставить" для авторизации интеграции SCIM Okta для доступа к организации](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. Щелкните **Авторизовать OktaOAN**.
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## Дополнительные материалы

- [Настройка единого входа SAML для корпоративной учетной записи с помощью Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)
- [Основные сведения о SAML](https://developer.okta.com/docs/concepts/saml/) в документации Okta
- [Основные сведения о SCIM](https://developer.okta.com/docs/concepts/scim/) в документации Okta
