---
title: Подключение поставщика идентификаторов к вашей организации
intro: 'Чтобы использовать единый вход SAML и SCIM, необходимо подключить поставщика удостоверений (IdP) к организации в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: Connect an IdP
ms.openlocfilehash: 61ae7b13afa01938c316e9ee785f7393d520a0c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098029'
---
## Сведения о подключении поставщика удостоверений к организации

При включении единого входа SAML для организации {% data variables.product.product_name %} вы подключаете поставщик удостоверений к организации. Дополнительные сведения см. в разделе [Включение и тестирование единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.ghec-only %}

Сведения о реализации SAML и SCIM можно найти в документации поставщика удостоверений.
- [SAML ](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services) службы федерации Active Directory (AD FS)
- [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) и [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial) Azure Active Directory (Azure AD)
- [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) и [SCIM](http://developer.okta.com/standards/SCIM/) Okta
- [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) и [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e) OneLogin
- [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)PingOne
- [SAML](https://shibboleth.atlassian.net/wiki/spaces/IDP4/overview) Shibboleth

{% note %}

**Примечание.** {% data variables.product.product_name %} поддерживаются следующие поставщики удостоверений для SCIM: Azure AD, Okta и OneLogin. Дополнительные сведения об SCIM см. в статье [Сведения об SCIM для организаций](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.scim.enterprise-account-scim %} 

{% endnote %}

## Метаданные SAML

Дополнительные сведения о метаданных SAML для вашей организации см. в разделе [Справочник по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference).
