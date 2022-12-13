---
title: Konfigurieren der Benutzerbereitstellung für dein Unternehmen
shortTitle: Configure user provisioning
intro: Du kannst System for Cross-Domain Identity Management (SCIM) für dein Unternehmen konfigurieren, sodass Benutzerkonten automatisch auf {% data variables.product.product_location %} bereitgestellt werden, wenn du Benutzer*innen in deinem Identitätsanbieter (IdP) die Anwendung für {% data variables.product.product_location %} zuweist.
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102915"
---
## Informationen zur Benutzerbereitstellung für dein Unternehmen

{% data reusables.saml.ae-uses-saml-sso %} Weitere Informationen findest du unter [Konfigurieren von einmaligem Anmelden für SAML für dein Unternehmen](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

Du kannst die Benutzerbereitstellung mit SCIM so konfigurieren, dass Benutzerkonten automatisch erstellt oder gesperrt werden, und den Zugriff auf {% data variables.product.product_name %} gewähren, wenn du die Anwendung bei deinem IdP zuweist oder die Zuweisung aufhebst. Weitere Informationen zu SCIM findest du unter [System for Cross-Domain Identity Management: Protokoll (RFC 7644)](https://tools.ietf.org/html/rfc7644) auf der IETF-Website.

Wenn du die Benutzerbereitstellung nicht mit SCIM konfigurierst, kommuniziert dein IdP nicht automatisch mit {% data variables.product.product_name %}, wenn du die Anwendung einem Benutzer zuweist oder die Zuweisung aufhebst. Ohne SCIM erstellt {% data variables.product.product_name %} ein Benutzerkonto mit SAML-JIT-Bereitstellung, wenn ein*e Benutzer*in zum ersten Mal zu {% data variables.product.product_name %} navigiert und sich mit Authentifizierung durch den IdP anmeldet.

Durch das Konfigurieren der Bereitstellung kann dein IdP mit {% data variables.product.product_location %} kommunizieren, wenn du die Anwendung für {% data variables.product.product_name %} einem Benutzer auf deinem IdP zuweist oder die entsprechende Zuweisung aufhebst. Wenn du die Anwendung zuweist, fordert der IdP {% data variables.product.product_location %} auf, ein Konto zu erstellen und eine Onboarding-E-Mail an den Benutzer zu senden. Wenn du die Zuweisung der Anwendung aufhebst, kommuniziert der IdP mit {% data variables.product.product_name %}, um SAML-Sitzungen ungültig zu machen und das Konto des Mitglieds zu deaktivieren.

Zum Konfigurieren der Bereitstellung für dein Unternehmen musst du die Bereitstellung in {% data variables.product.product_name %} aktivieren und dann eine Bereitstellungsanwendung beim IdP installieren und konfigurieren.

Die Bereitstellungsanwendung auf dem IdP kommuniziert über die SCIM-API für Unternehmen mit {% data variables.product.product_name %}. Weitere Informationen findest du in der {% data variables.product.prodname_dotcom %}-REST-API-Dokumentation unter [GitHub Enterprise-Administration](/rest/reference/enterprise-admin#scim).

## Unterstützte Identitätsanbieter

Die folgenden IdP werden mit {% data variables.product.prodname_ghe_managed %} für SSO unterstützt:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Bei Identitätsanbietern, die Teamzuordnung unterstützen, kannst du die Anwendung für {% data variables.product.product_name %} Gruppen von Benutzern in deinem IdP zuweisen oder die entsprechende Zuweisung aufheben. Diese Gruppen stehen dann Organisationsbesitzern und Teambetreuern in {% data variables.product.product_location %} zur Verfügung, sodass sie {% data variables.product.product_name %}-Teams zugeordnet werden können. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

## Voraussetzungen

Damit der Zugriff auf {% data variables.product.product_location %} über den IdP automatisch bereitgestellt bzw. diese Bereitstellung automatisch aufgehoben werden kann, musst du zuerst SAML-SSO konfigurieren, wenn du {% data variables.product.product_name %} initialisierst. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

Du musst über administrative Zugriffsrechte auf dem IdP verfügen, um die Anwendung für die Benutzerbereitstellung für {% data variables.product.product_name %} konfigurieren zu können.

## Aktivieren der Benutzerbereitstellung für dein Unternehmen

1. Erstelle, während du bei {% data variables.product.product_location %} als Unternehmensbesitzer angemeldet bist, ein persönliches Zugriffstoken mit dem Bereich **admin:enterprise**. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).
  {% note %}

  **Hinweise**:
    - Zum Erstellen des persönlichen Zugriffstokens empfehlen wir die Verwendung des Kontos für den ersten Unternehmensbesitzer, den du während der Initialisierung erstellt hast. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).
    - du benötigst dieses persönliche Zugriffstoken, um die Anwendung für SCIM auf deinem IdP zu konfigurieren. Speichere das Token sicher in einem Kennwort-Manager, bis du das Token später in diesen Anweisungen erneut benötigst.

  {% endnote %} {% warning %}

  **Warnung:** Wenn das Benutzerkonto für die Unternehmensbesitzer*innen, die das persönliche Zugriffstoken erstellen, deaktiviert ist bzw. wenn die Bereitstellung des Kontos aufgehoben wird, stellt dein IdP Benutzerkonten für dein Unternehmen nicht mehr automatisch bereit bzw. wird die Breitstellung von Benutzerkonten nicht mehr automatisch aufgehoben. Ein anderer Unternehmensbesitzer muss ein neues persönliches Zugriffstoken erstellen und die Bereitstellung auf dem IdP neu konfigurieren.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle unter „SCIM User Provisioning“ (SCIM-Benutzerbereitstellung) die Option **Require SCIM user provisioning** (SCIM-Benutzerbereitstellung erforderlich) aus.
  ![Kontrollkästchen für „Require SCIM user provisioning“ (SCIM-Benutzerbereitstellung erforderlich) in den Unternehmenssicherheitseinstellungen](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Klicken Sie auf **Speichern**.
  ![Schaltfläche „Save“ (Speichern) unterhalb von „Require SCIM user provisioning“ (SCIM-Benutzerbereitstellung erforderlich) in den Unternehmenssicherheitseinstellungen](/assets/images/help/enterprises/settings-scim-save.png)
1. Konfiguriere die Benutzerbereitstellung in der Anwendung für {% data variables.product.product_name %} auf deinem IdP.

  Die folgenden IdP machen eine Dokumentation zum Konfigurieren der Bereitstellung für {% data variables.product.product_name %} verfügbar. Wenn dein IdP nicht aufgeführt ist, wende dich an deinen IdP, um Unterstützung für {% data variables.product.product_name %} anzufordern.

  | IdP | Weitere Informationen |
  | :- | :- |
  | Azure AD | [Tutorial: Konfigurieren von {% data variables.product.prodname_ghe_managed %} für die automatische Benutzerbereitstellung](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) in der Microsoft-Dokumentation. Informationen zum Konfigurieren von Azure AD für {% data variables.product.prodname_ghe_managed %} findest du unter [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mithilfe von Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad).|
| Okta | (Beta) Informationen zum Konfigurieren von Okta für {% data variables.product.prodname_ghe_managed %} findest du unter [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mithilfe von Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta).|

  Die Anwendung auf deinem IdP erfordert zwei Werte zum Bereitstellen von Benutzerkonten bzw. zum Aufheben der Bereitstellung von Benutzerkonten für {% data variables.product.product_location %}.

  | Wert | Andere Namen | BESCHREIBUNG | Beispiel |
  | :- | :- | :- | :- |
  | URL | Mandanten-URL | URL zur SCIM-Bereitstellungs-API für dein Unternehmen in {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Gemeinsamer geheimer Schlüssel | Persönliches Zugriffstoken, geheimes Token | Token für die Anwendung auf deinem IdP zum Ausführen von Bereitstellungsaufgaben im Namen von Unternehmensbesitzer*innen | Das persönliche Zugriffstoken, das du in Schritt 1 erstellt hast |
