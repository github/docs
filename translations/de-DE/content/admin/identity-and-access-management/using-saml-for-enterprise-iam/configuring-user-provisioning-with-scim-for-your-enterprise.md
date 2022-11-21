---
title: Konfigurieren der Benutzerbereitstellung mit SCIM für dein Unternehmen
shortTitle: Configure user provisioning
intro: 'Du kannst System for Cross-Domain Identity Management (SCIM) für {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} konfigurieren. Damit werden automatisch Benutzerkonten bereitgestellt, wenn du die Anwendung für {% ifversion scim-for-ghes %}deine Instanz{% elsif ghae %}{% data variables.product.product_name %}{% endif %} einem oder einer Benutzer*in auf deinem Identitätsanbieter (IdP) zuweist.'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c330d8e375522901d2738b581a897d42d30d628e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108495'
---
{% data reusables.scim.ghes-beta-note %}

## Informationen zur Benutzerbereitstellung für {% data variables.product.product_name %}

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} Weitere Informationen findest du unter [Konfigurieren von einmaligem Anmelden für SAML für dein Unternehmen](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise).

{% endif %}

{% ifversion scim-for-ghes %}Wenn du SAML-SSO (einmaliges Anmelden) für {% data variables.location.product_location %} verwendest,{% elsif ghae %}Du{% endif %} kannst SCIM so konfigurieren, dass Benutzerkonten automatisch erstellt oder gesperrt werden, und Zugriff{% ifversion scim-for-ghes %} auf deine Instanz{% elsif ghae %} für {% data variables.product.product_name %}{% endif %} gewähren, wenn du die Anwendung auf deinem IdP zuweist bzw. die Zuweisung aufhebst. Weitere Informationen zu SCIM findest du unter [System for Cross-Domain Identity Management: Protokoll (RFC 7644)](https://tools.ietf.org/html/rfc7644) auf der IETF-Website.

Wenn du die Benutzerbereitstellung nicht mit SCIM konfigurierst, kommuniziert dein IdP nicht automatisch mit {% data variables.product.product_name %}, wenn du die Anwendung einem Benutzer zuweist oder die Zuweisung aufhebst. Ohne SCIM erstellt {% data variables.product.product_name %} ein Benutzerkonto mit SAML-JIT-Bereitstellung, wenn ein*e Benutzer*in zum ersten Mal zu {% data variables.product.product_name %} navigiert und sich mit Authentifizierung durch den IdP anmeldet.

Durch das Konfigurieren der Bereitstellung kann dein IdP mit {% data variables.location.product_location %} kommunizieren, wenn du die Anwendung für {% data variables.product.product_name %} einem oder einer Benutzer*in auf deinem IdP zuweist oder die Zuweisung aufhebst. Wenn du die Anwendung zuweist, fordert der IdP {% data variables.location.product_location %} dazu auf, ein Konto zu erstellen und eine Onboarding-E-Mail an den oder die Benutzer*in zu senden. Wenn du die Zuweisung der Anwendung aufhebst, kommuniziert der IdP mit {% data variables.product.product_name %}, um SAML-Sitzungen ungültig zu machen und das Konto des Mitglieds zu deaktivieren.

Zum Konfigurieren der Bereitstellung für dein Unternehmen musst du die Bereitstellung in {% data variables.product.product_name %} aktivieren und dann eine Bereitstellungsanwendung beim IdP installieren und konfigurieren.

{% ifversion scim-for-ghes %}

Die Bereitstellungsanwendung auf dem IdP kommuniziert über die SCIM-API mit {% data variables.product.product_name %}. Weitere Informationen findest du unter [SCIM](/rest/enterprise-admin/scim) in der REST-API-Dokumentation.

{% endif %}

## Informationen zu Identitäten und Ansprüchen

Nachdem ein oder eine IdP-Administrator*in einer Person Zugriff auf {% data variables.location.product_location %}, kann sich der oder die Benutzer*in über den IdP authentifizieren, um mit SAML-SSO auf {% data variables.product.product_name %} zuzugreifen.

Während der Authentifizierung {% ifversion scim-for-ghes %}versucht die Instanz{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, den oder die Benutzer*in einer SAML-Identität zuzuordnen. Standardmäßig {% ifversion scim-for-ghes %}vergleicht die Instanz{% elsif ghae %}{% data variables.product.product_name %}{% endif %} den `NameID`-Anspruch des IdP mit dem Benutzernamen des Kontos. Für den Vergleich normalisiert {% data variables.product.product_name %} den Wert von `NameID`. Weitere Informationen zur Benutzernamennormalisierung findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization).

Wenn kein übereinstimmender Benutzername auf der Instanz vorhanden ist, erstellt die Instanz ein neues Konto für den oder die Benutzer*in. Wenn ein Konto mit übereinstimmendem Benutzernamen auf der Instanz vorhanden ist, wird der oder die Benutzer*in bei diesem Konto angemeldet.{% ifversion scim-for-ghes %} {% data variables.product.product_name %} vergleicht den Anspruch des IdP mit allen Konten auf der Instanz, unabhängig davon, ob sie über integrierte Authentifizierung verfügen oder bereits einer SAML-Identität zugeordnet sind.{% endif %}

{% ifversion scim-for-ghes %}

Beim Verwenden von SAML-SSO kann können Websiteadministrator*innen benutzerdefinierte Benutzerattribute für die Instanz konfigurieren. Ein benutzerdefiniertes Benutzernamenattribut ermöglicht es der Instanz, einen anderen Wert als `NameID` aus dem IdP zu verwenden. {% data variables.product.product_name %} berücksichtigt diese Zuordnung beim Konfigurieren von SCIM. Weitere Informationen zum Zuordnen von Benutzerattributen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

{% endif %}

Wenn {% data variables.product.product_name %} einen oder eine Benutzer*in des IdP erfolgreich identifiziert, Kontodetails wie E-Mail-Adresse, Vorname oder Nachname jedoch nicht übereinstimmen, aktualisiert die Instanz diese mit Werten aus dem IdP.

## Unterstützte Identitätsanbieter

Die folgenden IdPs unterstützen die Benutzerbereitstellung mit SCIM für {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

{% ifversion ghae %} Bei Identitätsanbietern, die Teamzuordnungen unterstützen, kannst du die Anwendung für {% data variables.product.product_name %} Benutzergruppen in deinem IdP zuweisen oder die Zuweisung aufheben. Diese Gruppen stehen dann Organisationsbesitzer*innen und Teambetreuer*innen in {% data variables.location.product_location %} zur Verfügung, sodass sie {% data variables.product.product_name %}-Teams zugeordnet werden können. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
{% endif %}

## Voraussetzungen

{% ifversion ghae %}

- Du musst SAML-SSO beim Initialisieren von {% data variables.product.product_name %} konfigurieren. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- Du musst die integrierte Authentifizierung für Benutzer*innen zulassen, die kein Konto auf deinem IdP haben. Weitere Informationen findest du unter [Zulassen der integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).

- Dein IdP muss SCIM-Aufrufe an einen Dienstanbieter (SP) unterstützen.

{% endif %}

- Du musst über administrative Zugriffsrechte auf dem IdP verfügen, um die Anwendung für die Benutzerbereitstellung für {% data variables.product.product_name %} konfigurieren zu können.

## Aktivieren der Benutzerbereitstellung für dein Unternehmen

{% ifversion scim-for-ghes %}

Um Bereitstellungsaktionen auf deiner Instanz auszuführen, erstelle ein dediziertes Computerbenutzerkonto, und stufe es auf „Unternehmensbesitzer“ hoch.

Nach dem Aktivieren von SCIM auf einer Instanz von {% data variables.product.product_name %} sind alle Benutzerkonten gesperrt. Wenn du den Benutzer*innen aus deinem IdP Zugriff auf deine Instanz gewährst und sie sich erfolgreich authentifizieren, werden ihre Konten entsperrt.

{% endif %}

{%- ifversion ghae %}
1. Erstelle, während du bei {% data variables.location.product_location %} als Unternehmensbesitzer angemeldet bist, ein {% data variables.product.pat_v1 %} mit dem Umfang **admin:enterprise**. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).
  {% note %}

  **Hinweise**:
    - Zum Erstellen des {% data variables.product.pat_generic %} wird empfohlen, das Konto des ersten Unternehmensbesitzers zu verwenden, das während der Initialisierung erstellt wurde. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).
    - Du benötigst dieses {% data variables.product.pat_generic %} zum Konfigurieren der Anwendung für SCIM auf deinem IdP. Speichere das Token sicher in einem Kennwort-Manager, bis du das Token später in diesen Anweisungen erneut benötigst.

  {% endnote %} {% warning %}

  **Warnung:** Wenn das Benutzerkonto für die Unternehmensbesitzer*innen, die das{% data variables.product.pat_generic %} erstellen, deaktiviert ist bzw. wenn die Bereitstellung des Kontos aufgehoben wird, stellt dein IdP Benutzerkonten für dein Unternehmen nicht mehr automatisch bereit bzw. wird die Bereitstellung von Benutzerkonten nicht mehr automatisch aufgehoben. Ein anderer Unternehmensbesitzer muss ein neues {% data variables.product.pat_generic %} erstellen und die Bereitstellung auf dem IdP neu konfigurieren.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. Erstelle ein dediziertes Computerbenutzerkonto, um Bereitstellungsaktionen auf deiner Instanz auszuführen. Weitere Informationen findest du unter [Zulassen der integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance).
1. Stufe das dedizierte Benutzerkonto auf „Unternehmensbesitzer“ hoch. Weitere Informationen findest du unter [Einladen von Personen zum Verwalten deines Unternehmens](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account).
1. Melde dich bei deiner Instanz als neuer Unternehmensbesitzer an.
1. Erstelle ein {% data variables.product.pat_v1 %} mit dem Umfang **admin:enterprise**. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).

   {% note %}

   **Hinweis**: Sie benötigen dieses {% data variables.product.pat_generic %} zum Testen der SCIM-Konfiguration und Konfigurieren der Anwendung für SCIM auf deinem IdP. Speichere das Token sicher in einem Kennwort-Manager, bis du das Token später in diesen Anweisungen erneut benötigst.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Führe zum Aktivieren von SCIM die Befehle aus, die von deinem oder deiner Konto-Manager*in auf {% data variables.contact.contact_enterprise_sales %} bereitgestellt wurden.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. Um zu überprüfen, ob SCIM betriebsfähig ist, führe die folgenden Befehle aus. Ersetze _PAT AUS SCHRITT 3_ und _DEN HOSTNAMEN DEINER INSTANZ_ durch tatsächliche Werte.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   Der Befehl sollte ein leeres Array zurückgeben.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle unter „SCIM User Provisioning“ (SCIM-Benutzerbereitstellung) die Option **Require SCIM user provisioning** (SCIM-Benutzerbereitstellung erforderlich) aus.
  ![Kontrollkästchen für „Require SCIM user provisioning“ (SCIM-Benutzerbereitstellung erforderlich) in den Unternehmenssicherheitseinstellungen](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Klicken Sie auf **Speichern**.
  ![Schaltfläche „Speichern“ unter „SCIM-Benutzerbereitstellung erforderlich“ in den Unternehmenssicherheitseinstellungen](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. Konfiguriere die Benutzerbereitstellung in der Anwendung für {% data variables.product.product_name %} auf deinem IdP.

  {%- ifversion ghae %} Die folgenden IdPs stellen Dokumentation zum Konfigurieren der Bereitstellung für {% data variables.product.product_name %} zur Verfügung. Wenn dein IdP nicht aufgeführt ist, wende dich an deinen IdP, um Unterstützung für {% data variables.product.product_name %} anzufordern.
  {%- elsif scim-for-ghes %} {% data variables.product.company_short %} bietet Dokumentation zum Konfigurieren der Bereitstellung für die folgenden IdPs.{% endif %}

  | IdP | Weitere Informationen |
  | :- | :- |
  | Azure AD | {% ifversion ghae %}[Tutorial: Konfigurieren von {% data variables.product.prodname_ghe_managed %} für die automatische Benutzerbereitstellung](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) in der Microsoft-Dokumentation. {% endif %}Informationen zum Konfigurieren von Azure AD für {% data variables.product.product_name %} findest du unter [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mit Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad). |
| Okta | {% ifversion ghae %}(Beta){% endif %} Informationen zum Konfigurieren von Okta für {% data variables.product.product_name %} findest du unter [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mit Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta). |

  Die Anwendung auf deinem IdP benötigt zwei Werte zum Bereitstellen von Benutzerkonten bzw. zum Aufheben der Bereitstellung für {% data variables.location.product_location %}.

  | Wert | Andere Namen | BESCHREIBUNG | Beispiel |
  | :- | :- | :- | :- |
  | URL | Mandanten-URL | URL zur SCIM-Bereitstellungs-API für dein Unternehmen in {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Gemeinsamer geheimer Schlüssel | {% data variables.product.pat_generic_caps %}, Geheimnistoken | Token für die Anwendung auf deinem IdP zum Ausführen von Bereitstellungsaufgaben im Namen von Unternehmensbesitzer*innen | Das {% data variables.product.pat_generic_caps %}, das du in Schritt {% ifversion ghae %}1{% elsif scim-for-ghes %}4{% endif %} erstellt hast |
