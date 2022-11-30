---
title: Verbinden deines Identitätsanbieters mit deiner Organisation
intro: 'Um die einmalige SAML-Anmeldung und SCIM zu verwenden, musst du deinen Identitätsanbieter (IdP) mit deiner Organisation auf {% data variables.product.product_name %} verbinden.'
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
ms.openlocfilehash: fe20822b6f3381b6cdc6dbf844c84a93d8d4ea0f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125673'
---
## Informationen zum Verbinden deines IdP mit deiner Organisation

Wenn du SAML-SSO für deine {% data variables.product.product_name %}-Organisation aktivierst, verbinde deinen Identitätsanbieter (IdP) mit deiner Organisation. Weitere Informationen findest du unter [Aktivieren und Testen des einmaligen Anmeldens mit SAML für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.ghec-only %}

Die SAML- und SCIM-Implementierungsdetails für deinen IdP findest du in der IdP-Dokumentation.
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) und [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) und [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) und [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**Hinweis:** Von {% data variables.product.product_name %} unterstützte Identitätsanbieter für SCIM sind Azure AD, Okta und OneLogin. Weitere Informationen zu SCIM findest du unter [Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.scim.enterprise-account-scim %} 

{% endnote %}

## SAML-Metadaten

Weiter Informationen über SAML-Metadaten für deine Organisation finden findest du unter [SAML-Konfigurationshinweise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference).
