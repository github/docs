---
title: Connexion de votre fournisseur d’identité à votre organisation
intro: 'Pour utiliser l’authentification unique SAML et SCIM, vous devez connecter votre fournisseur d’identité (IdP) à votre organisation sur {% data variables.product.product_name %}.'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109430'
---
## À propos de la connexion de votre fournisseur d’identité à votre organisation

Lorsque vous activez l’authentification unique SAML pour votre organisation {% data variables.product.product_name %}, vous connectez votre fournisseur d’identité (IdP) à votre organisation. Pour plus d’informations, consultez « [Activation et test de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) ».

{% data reusables.saml.ghec-only %}

Vous trouverez les détails d’implémentation SAML et SCIM pour votre fournisseur d’identité dans la documentation de celui-ci.
- Services de fédération Active Directory (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) et [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial) Azure Active Directory (Azure AD)
- [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) et [SCIM](http://developer.okta.com/standards/SCIM/) Okta
- [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) et [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e) OneLogin
- [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector) PingOne
- [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home) Shibboleth

{% note %}

**Remarque :** les fournisseurs d’identité {% data variables.product.product_name %} pris en charge pour SCIM sont Azure AD, Okta et OneLogin. Pour plus d’informations sur SCIM, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».

{% data reusables.scim.enterprise-account-scim %} 

{% endnote %}

## Métadonnées SAML

Pour plus d’informations sur les métadonnées SAML pour votre organisation, consultez « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference) ».
