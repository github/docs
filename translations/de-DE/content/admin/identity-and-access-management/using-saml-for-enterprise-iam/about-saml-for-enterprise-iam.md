---
title: Informationen zu SAML für Enterprise IAM
shortTitle: About SAML for IAM
intro: 'Du kannst SAML-SSO {% ifversion ghae %}und SCIM (System for Cross-domain Identity Management) {% endif %}verwenden, um zentral den Zugriff {% ifversion ghec %}auf Organisationen im Besitz deines Unternehmens auf {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %} auf {% data variables.location.product_location %}{% elsif ghae %} auf {% data variables.location.product_location %}{% endif %}zu verwalten.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
ms.openlocfilehash: d719ef81948cef75018b0976fc97ef45c267469f
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180029'
---
## Informationen zu SAML-SSO für {% ifversion ghec or ghae %}dein Unternehmen auf {% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Wenn deine Unternehmensmitglieder ihre eigenen Benutzerkonten auf {% data variables.location.product_location %} verwalten, kannst du die SAML-Authentifizierung als zusätzliche Zugriffsbeschränkung für dein Unternehmen oder deine Organisation konfigurieren. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} Weitere Informationen findest du unter [Konfigurieren von SAML-SSO für dein Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Optional kannst du die Konten deiner Unternehmensmitglieder mit {% data variables.product.prodname_emus %} bereitstellen und verwalten. Informationen dazu, ob SAML-SSO oder {% data variables.product.prodname_emus %} für dein Unternehmen besser geeignet sind, findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise).

{% data reusables.enterprise-accounts.about-recovery-codes %} Weitere Informationen findest du unter [Verwalten von Wiederherstellungscodes für dein Unternehmen](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

Nach der Aktivierung von SAML SSO kannst du je nach IdP zusätzliche Identitäts- und Zugriffsverwaltungsfeatures aktivieren. 

Wenn du Azure AD als IdP verwendest, kannst du mithilfe der Teamsynchronisierung die Teammitgliedschaft für die einzelnen Organisationen verwalten. {% data reusables.identity-and-permissions.about-team-sync %} Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmenskonto](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

{% note %}

**Hinweis:** Du kannst SCIM nur auf Unternehmensebene verwenden, wenn {% data variables.product.prodname_emus %} für dein Unternehmen aktiviert ist.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} Weitere Informationen findest du unter [Umstellen der SAML-Konfiguration von einer Organisation auf ein Unternehmenskonto](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

{% elsif ghes %}

Mithilfe von SAML-SSO können sich Personen über ein externes System für die Identitätsverwaltung in {% data variables.location.product_location %} authentifizieren und darauf zugreifen.

SAML ist ein XML-basierter Standard für die Authentifizierung und Autorisierung. Wenn du SAML für {% data variables.location.product_location %} konfigurierst, wird das externe System für die Authentifizierung als Identitätsanbieter (Identity Provider, IdP) bezeichnet. Deine Instanz fungiert als SAML-Dienstanbieter (Service Provider, SP). Weitere Informationen zum SAML-Standard findest du auf Wikipedia unter [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language).

Weitere Informationen zur Konfiguration von SAML SSO in {% data variables.product.product_name %} findest du unter [Konfigurieren von SAML Single Sign-On für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Nachdem du die Anwendung bei deinem Identitätsanbieter (IdP) für {% data variables.product.product_name %} konfiguriert hast, kannst du Zugriff auf {% data variables.location.product_location %} bereitstellen, indem du die Anwendung Benutzer*innen und Gruppen bei deinem IdP zuweist. Weitere Informationen zu SAML SSO für {% data variables.product.product_name %} findest du unter [Konfigurieren von SAML Single Sign-On für dein Unternehmen](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.scim.after-you-configure-saml %} Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

Informationen zum Konfigurieren der Authentifizierung und der Benutzerbereitstellung für {% data variables.location.product_location %} bei deinem Identitätsanbieter findest du unter [Konfigurieren der Authentifizierung und Bereitstellung bei deinem Identitätsanbieter](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider).

{% endif %}

## Unterstützte IdPs

{% ifversion ghec %}

Wir testen und unterstützen offiziell die folgenden IdPs. Für SAML SSO bieten wir begrenzten Support für alle Identitätsanbieter, die den SAML 2.0-Standard implementieren. Weitere Informationen findest du im [SAML-Wiki](https://wiki.oasis-open.org/security) auf der OASIS-Website.

IdP | SAML | Teamsynchronisierung | 
--- | :--: | :-------: |
Active Directory-Verbunddienste (Active Directory Federation Services, AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Wenn dein IdP verschlüsselte SAML-Assertionen unterstützt, kannst du verschlüsselte Assertionen in {% data variables.product.product_name %} konfigurieren und so während des Authentifizierungsprozesses erhöhte Sicherheit gewährleisten.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

Die folgenden IdPs werden offiziell für die Integration mit {% data variables.product.prodname_ghe_managed %} unterstützt.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Zuordnen von {% data variables.product.prodname_ghe_managed %}-Teams zu Okta-Gruppen

Wenn du Okta als IdP verwendest, kannst du deine Okta-Gruppen in {% data variables.product.product_name %} zu Teams zuordnen. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

{% endif %}

## Weiterführende Themen

- [SAML-Wiki](https://wiki.oasis-open.org/security) auf der OASIS-Website
- [SCIM (System for Cross-Domain Identity Management): Protokoll (RFC 7644)](https://tools.ietf.org/html/rfc7644) auf der IETF-Website {%- ifversion ghae %}
- [Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) {%- endif %}
