---
title: Сведения о SCIM для организаций
intro: С помощью System for Cross-domain Identity Management (SCIM) администраторы могут автоматизировать обмен информацией об удостоверениях пользователей между системами.
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069624'
---
## Сведения о SCIM для организаций

Если в вашей организации используется [единый вход SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on), вы можете реализовать SCIM для добавления и удаления доступа членов организации к {% data variables.product.product_name %} и управления этим решением. Например, администратор может отозвать участника организации с помощью SCIM и автоматически удалить его из организации.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Если вы используете единый вход SAML без реализации SCIM, автоматический отзыв будет недоступен. Когда срок действия сеансов участников организации истекает после удаления их доступа из IdP, они не удаляются из организации автоматически. Авторизованные токены дают им доступ к организации даже после истечения срока действия их сеансов. Если SCIM не используется, чтобы полностью удалить доступ участника, владелец организации должен удалить доступ участника в IdP и вручную удалить участника из организации в {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Поддерживаемые поставщики удостоверений

Эти поставщики удостоверений (IdP) совместимы с API SCIM {% data variables.product.product_name %} для организаций. Дополнительные сведения см. в разделе [SCIM](/rest/scim) в документации по API  {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## Сведения о конфигурации SCIM для организаций

{% data reusables.scim.dedicated-configuration-account %}

Чтобы авторизовать {% data variables.product.prodname_oauth_app %}, требуется активный сеанс SAML. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).

{% note %}

**Примечание.** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Дополнительные материалы

- [Просмотр доступа SAML участника к вашей организации и управление им](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)
