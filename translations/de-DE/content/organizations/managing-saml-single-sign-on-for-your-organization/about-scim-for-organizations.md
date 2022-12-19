---
title: Informationen zu SCIM für Organisationen
intro: Mit „System for Cross-domain Identity Management“ (SCIM) können Administrator*innen den Austausch von Benutzeridentitätsinformationen zwischen Systemen automatisieren.
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068292'
---
## Informationen zu SCIM für Organisationen

Wenn deine Organisation [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) verwendet, kannst du SCIM implementieren, um den Zugriff von Organisationsmitgliedern auf {% data variables.product.product_name %} zu gewähren, zu verwalten und zu entziehen. Ein Administrator kann beispielsweise die Bereitstellung des Zugriffs eines Organisationsmitglieds mithilfe von SCIM aufheben und das Mitglied automatisch aus der Organisation entfernen.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Wenn du SAML-SSO verwendest, ohne SCIM zu implementieren, erfolgt keine automatische Aufhebung der Bereitstellung. Wenn die Sitzungen von Organisationsmitgliedern ablaufen, nachdem ihr Zugriff aus dem IdP entfernt wurde, werden sie nicht automatisch aus der Organisation entfernt. Autorisierte Token gewähren der Organisation auch nach Ablauf ihrer Sitzungen Zugriff. Wenn SCIM nicht verwendet wird, muss der bzw. die Organisationsbesitzer*in den Zugriff eines Mitglieds beim IdP entziehen und das Mitglied in {% data variables.product.prodname_dotcom %} aus der Organisation entfernen, um dessen Zugriff vollständig zu entziehen.

{% data reusables.scim.changes-should-come-from-idp %}

## Unterstützte Identitätsanbieter

Die folgenden Identitätsanbieter (IdPs) sind mit der SCIM-API von {% data variables.product.product_name %} für Organisationen kompatibel. Weitere Informationen findest du unter [SCIM](/rest/scim) in der {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API-Dokumentation.
- Azure AD
- Okta
- OneLogin

## Informationen zur SCIM-Konfiguration für Organisationen

{% data reusables.scim.dedicated-configuration-account %}

Bevor du {% data variables.product.prodname_oauth_app %} autorisierst, muss eine aktive SAML-Sitzung vorhanden sein. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).

{% note %}

**Hinweis:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Weitere Informationsquellen

- [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)
