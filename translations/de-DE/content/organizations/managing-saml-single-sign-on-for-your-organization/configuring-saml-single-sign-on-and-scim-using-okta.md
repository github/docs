---
title: SAML Single Sign-On und SCIM mit Okta konfigurieren
intro: 'Du kannst das einmalige Anmelden (SSO) mit der Security Assertion Markup Language (SAML) und System for Cross-Domain Identity Management (SCIM) mit Okta verwenden, um den Zugriff auf deine Organisation in {% data variables.product.product_location %} automatisch zu verwalten.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: 3b1083e0ec9d792de9e9c1e83cd5b000e8261905
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883279'
---
## Über SAML und SCIM mit Okta

Du kannst den Zugriff auf deine {% data variables.product.product_location %}-Organisation und andere Webanwendungen von einer zentralen Schnittstelle aus steuern, indem du die Organisation so konfigurierst, dass sie SAML SSO und SCIM mit Okta, einem Identitätsanbieter (IdP), nutzt.

{% data reusables.saml.ghec-only %}

SAML SSO steuert und sichert den Zugriff auf Organisationsressourcen wie Repositorys, Issues und Pull Requests. SCIM fügt bei Änderungen in Okta automatisch den Zugriff von Mitgliedern auf deine {% data variables.product.product_location %}-Organisation hinzu, oder verwaltet und entfernt sie. Weitere Informationen findest du unter „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML-SSO](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)“ und „[Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)“.

Nachdem du SCIM aktiviert hast, stehen Dir folgende Bereitstellungsfunktionen für alle Benutzer zur Verfügung, denen du deine {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta zuweist.

| Funktion | BESCHREIBUNG |
| --- | --- |
| Push neuer Benutzer | Wenn du in Okta einen neuen Benutzer erstellst, erhält der Benutzer eine E-Mail-Einladung zu deiner {% data variables.product.product_location %}-Organisation. |
| Push Benutzer-Deaktivierung | Wenn du einen Benutzer in Okta deaktivierst, entfernt Okta ihn auch aus deiner {% data variables.product.product_location %}-Organisation. |
| Push Profil-Aktualisierungen | Wenn du ein Benutzerprofil in Okta aktualisierst, aktualisiert Okta die Metadaten für die Mitgliedschaft des Benutzers in {% data variables.product.product_location %}. |
| Benutzer reaktivieren | Wenn du Benutzer*innen in Okta reaktivierst, sendet Okta den Benutzer*innen eine E-Mail-Einladung, deiner Organisation in {% data variables.product.product_location %} wieder beizutreten. |

Alternativ kannst du SAML SSO für ein Unternehmen mithilfe Okta konfigurieren. SCIM für Enterprise-Konten sind nur mit Enterprise-verwalteten Benutzern verfügbar. Weitere Informationen findest du unter „[Konfigurieren von SAML Single Sign-On für dein Unternehmen mit Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)“ und „[Konfigurieren der SCIM-Bereitstellung für Enterprise-verwaltete Benutzer mit Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)“.

## Die {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta hinzufügen

{% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Aktiviere und teste SAML SSO auf {% data variables.product.prodname_dotcom %} über die Anmelde-URL, die Herausgeber-URL und die öffentlichen Zertifikate aus dem „Wie konfiguriere ich SAML 2.0"-Leitfaden. Weitere Informationen findest du unter [Aktivieren und Testen des einmaligen Anmeldens mit SAML für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization).

## Konfigurieren der Zugriffsbereitstellung mit SCIM in Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Melde dich mit {% data variables.product.prodname_dotcom_the_website %} mit einem Konto an, das ein Organisationsbesitzer ist und idealerweise nur für die SCIM-Konfiguration verwendet wird.
1. Um eine aktive SAML-Sitzung für deine Organisation zu erstellen, navigiere zu `https://github.com/orgs/ORGANIZATION-NAME/sso`. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
1. Navigiere zu Okta.
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. Klicke auf **Authentifizieren mit {% data variables.product.prodname_ghe_cloud %} – Organisation**.
1. Klicke rechts neben dem Namen deiner Organisation auf **Zuweisung**.

  ![Schaltfläche „Zuweisung“, um die Okta-SCIM-Integration für den Organisationszugriff zu autorisieren](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. Klicke auf **Authorize OktaOAN** (OktaOAN autorisieren).
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## Weiterführende Themen

- „[Konfigurieren des einmaligen Anmeldens mit SAML für dein Unternehmen mithilfe von Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)“
- [Grundlegendes zu SAML](https://developer.okta.com/docs/concepts/saml/) in der Okta-Dokumentation
- [Grundlegendes zu SCIM](https://developer.okta.com/docs/concepts/scim/) in der Okta-Dokumentation
