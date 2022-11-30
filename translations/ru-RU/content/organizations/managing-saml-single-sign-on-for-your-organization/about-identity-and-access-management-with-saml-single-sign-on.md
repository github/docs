---
title: Об управлении удостоверениями и доступом с помощью единого входа SAML
intro: 'При централизованном управлении удостоверениями пользователей и приложениями с помощью поставщика удостоверений (IdP) можно настроить единый вход (SSO) с помощью языка разметки заявлений системы безопасности (SAML) для защиты ресурсов организации на {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120620'
---
{% data reusables.saml.ghec-only %}

## Сведения о едином входе SAML

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Владельцы организации могут применять единый вход SAML для отдельной организации, или владельцы предприятий могут применять его для всех организаций в корпоративной учетной записи. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Перед включением единого входа SAML для вашей организации необходимо подключить к организации поставщика удостоверений. Дополнительные сведения см. в разделе [Подключение поставщика удостоверений к организации](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

Для организации единый вход SAML можно отключить, включить, но не применять принудительно, включить и принудительно применять. После включения единого входа SAML для организации и ее участников можно принудительно применить конфигурацию единого входа SAML. Дополнительные сведения о применении единого входа SAML для организации {% data variables.product.prodname_dotcom %} см. в разделе [Применение единого входа SAML для вашей организации](/articles/enforcing-saml-single-sign-on-for-your-organization).

Участники должны периодически проходить проверку подлинности с помощью поставщика удостоверений, чтобы пройти проверку подлинности и получить доступ к ресурсам вашей организации. Продолжительность этого периода для входа задается идентификатором поставщика удостоверений и обычно составляет 24 часа. Это требование о периодическом входе ограничивает продолжительность доступа и требует от пользователей повторной идентификации для продолжения работы.

Чтобы получить доступ к защищенным ресурсам организации с помощью API и Git в командной строке, участники должны авторизоваться и пройти проверку подлинности с помощью {% data variables.product.pat_generic %} или ключа SSH. Дополнительные сведения см. в разделах [Авторизация {% data variables.product.pat_generic %} для использования с единым входом SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) и [Авторизация ключа SSH для использования с единым входом SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

При первом использовании единого входа SAML для доступа к организации {% data variables.product.prodname_dotcom %} автоматически создает запись, которая связывает вашу организацию, учетную запись участника в {% data variables.location.product_location %} и учетную запись участника в поставщике удостоверений. Вы можете просмотреть и отозвать связанное удостоверение SAML, активные сеансы и авторизованные учетные данные для участников организации или учетной записи предприятия. Дополнительные сведения см. в статье [Просмотр и контроль доступа SAML участника к организации](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) и [Просмотр доступа SAML пользователя к корпоративной учетной записи и управление ею](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

Если участники выполнили вход в сеанс единого входа SAML при создании нового репозитория, для этого репозитория по умолчанию установлен параметр видимости "Частный". В противном случае видимость по умолчанию настраивается как "Общедоступный". Дополнительные сведения о видимости репозитория см. в разделе [О репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Члены организации также должны иметь активный сеанс SAML для авторизации {% data variables.product.prodname_oauth_app %}. Вы можете отказаться от этого требования, обратившись к {% data variables.contact.contact_support %}. {% data variables.product.product_name %} не рекомендует отказываться от этого требования, поскольку из-за этого ваша организация будет более подвержена риску перехвата учетных записей и возможной потери данных.

{% data reusables.saml.saml-single-logout-not-supported %}

## Поддерживаемые службы SAML

{% data reusables.saml.saml-supported-idps %}

Некоторые поставщики удостоверений поддерживают доступ для подготовки к организации {% data variables.product.prodname_dotcom %} посредством SCIM. Дополнительную информацию см. в разделе [Сведения о SCIM для организаций](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.scim.enterprise-account-scim %} 

## Добавление участников в организацию с помощью единого входа SAML

После включения единого входа SAML можно добавить в организацию новых участников. Владельцы организации могут вручную отправить приглашение новым участникам в {% data variables.product.product_name %} или с помощью API. Дополнительные сведения см. в разделе [Отправка пользователям приглашений присоединиться к организации](/articles/inviting-users-to-join-your-organization) и [Участники](/rest/reference/orgs#add-or-update-organization-membership).

Для подготовки новых пользователей без приглашения от владельца организации можно использовать URL-адрес `https://github.com/orgs/ORGANIZATION/sso/sign_up`, заменив _ORGANIZATION_ на название организации. Например, можно настроить IdP таким образом, чтобы любой пользователь с доступом к IdP мог щелкнуть ссылку на панели мониторинга IdP и присоединиться к {% data variables.product.prodname_dotcom %} организации.

{% note %}

**Примечание:** Подготовка новых пользователей с помощью `https://github.com/orgs/ORGANIZATION/sso/sign_up` поддерживается только в том случае, если единый вход SAML настроен на уровне организации, а не при настройке единого входа SAML на уровне корпоративной учетной записи. Дополнительные сведения о едином входе SAML для корпоративных учетных записей см. в разделе [Сведения о SAML для корпоративного IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

{% endnote %}

Если ваш поставщик удостоверений поддерживает SCIM, {% data variables.product.prodname_dotcom %} может автоматически приглашать участников присоединиться к организации при предоставлении доступа к поставщику удостоверений. При удалении доступа участника к вашей организации {% data variables.product.prodname_dotcom %} в поставщике удостоверений SAML участник автоматически удаляется из организации {% data variables.product.prodname_dotcom %}. Дополнительную информацию см. в разделе [Сведения о SCIM для организаций](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Дополнительные материалы

- [Справочник по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
- [Сведения о двухфакторной проверке подлинности и едином входе SAML](/articles/about-two-factor-authentication-and-saml-single-sign-on)
- [Сведения о проверке подлинности с помощью единого входа SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)
