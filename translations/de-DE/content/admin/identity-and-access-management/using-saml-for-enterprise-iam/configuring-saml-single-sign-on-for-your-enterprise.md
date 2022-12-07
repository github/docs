---
title: Konfigurieren von SAML Single Sign-On für dein Unternehmen
shortTitle: Configure SAML SSO
intro: 'Du kannst den Zugriff auf {% ifversion ghec %}Ressourcen wie Repositorys, Issues und Pull Requests in den Organisationen deines Unternehmens{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}dein Unternehmen auf {% data variables.product.prodname_ghe_managed %}{% endif %} durch {% ifversion ghec %}das Erzwingen{% elsif ghes or ghae %}die Konfiguration{% endif %} des einmaliges Anmeldens mit SAML (SSO) über deinen Identitätsanbieter (IdP) verwalten und sichern.'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183956'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Informationen zu SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung mit der einmaligen SAML-Anmeldung](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf dein Unternehmenskonto](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

Mit SAML SSO kannst du den Zugriff auf {% data variables.location.product_location %} über deinen SAML-IdP zentral steuern und schützen. Wenn ein nicht authentifizierter Benutzer {% data variables.location.product_location %} in einem Browser besucht, leitet {% data variables.product.product_name %} ihn zur Authentifizierung an deinen SAML-IdP weiter. Nachdem der Benutzer sich erfolgreich mit einem Konto beim IdP authentifiziert hat, wird er von diesem wieder an {% data variables.location.product_location %} geleitet. {% data variables.product.product_name %} überprüft die Antwort deines IdP und gewährt dem bzw. der Benutzer*in dann Zugriff.

Nachdem ein Benutzer sich erfolgreich bei deinem IdP authentifiziert hat, ist dessen bzw. deren SAML-Sitzung für {% data variables.location.product_location %} im Browser 24 Stunden lang aktiv. Nach Ablauf der 24 Stunden muss der bzw. die Benutzer*in sich erneut bei deinem IdP authentifizieren.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

{% endif %}

{% endif %}

## Unterstützte Identitätsanbieter

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Grundlegendes für Benutzernamen bei SAML

{% ifversion ghec %}Wenn du {% data variables.product.prodname_emus %} verwendest, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Weitere Informationen findest du unter [Wichtige Überlegungen zu Benutzernamen für die externe Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Erzwingen von SAML Single Sign-On für Organisationen in deinem Unternehmenskonto

Wenn du SAML SSO für dein Unternehmen erzwingst, überschreiben die Unternehmenskonfiguration alle vorhandenen SAML-Konfigurationen auf Organisationsebene. {% data reusables.saml.switching-from-org-to-enterprise %} Weitere Informationen findest du unter [Umstellen der SAML-Konfiguration von einer Organisation auf ein Unternehmenskonto](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

Wenn du SAML SSO für eine Organisation erzwingst, entfernt {% data variables.product.company_short %} alle Mitglieder der Organisationen, die sich nicht erfolgreich bei deinem SAML-IdP authentifiziert haben. Wenn du SAML SSO für dein Unternehmen erzwingst, entfernt {% data variables.product.company_short %} die Unternehmensmitglieder nicht, die sich nicht erfolgreich bei deinem SAML-IdP authentifiziert haben. Beim nächsten Zugriff eines Mitglieds auf die Unternehmensressourcen muss dieses sich bei deinem SAML-IdP authentifizieren.

Weitere Informationen zum Aktivieren von SAML mithilfe von Okta findest du unter [Konfigurieren von SAML Single Sign-On für dein Unternehmenskonto mit Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter „SAML Single Sign-On“ die Option **SAML-Authentifizierung erzwingen** aus.
  ![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. Gib im Feld **Anmelde-URL** den HTTPS-Endpunkt deines IdP für SSO-Anforderungen ein. Diesen Wert findest Du in der IdP-Konfiguration.
![Feld für die URL, auf die Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optional kannst du im Feld **Aussteller** deine SAML-Aussteller-URL ein, um die Echtheit gesendeter Nachrichten zu bestätigen.
![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)
8. Füge unter **Öffentliches Zertifikat** ein Zertifikat ein, um SAML-Antworten zu verifizieren.
![Feld für das öffentliche Zertifikat des Identitätsanbieters](/assets/images/help/saml/saml_public_certificate.png)
9. Um die Integrität der Anforderungen von deinem SAML-Aussteller zu überprüfen, klicke auf {% octicon "pencil" aria-label="The edit icon" %}. Wähle dann in den Dropdownlisten „Signaturmethode“ und „Digestmethode“ den Hashalgorithmus aus, den dein SAML-Aussteller verwendet.
![Dropdownlisten für die Hashalgorithmen der Signaturmethode und Digestmethode, die dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)
10. Klicke auf **SAML-Konfiguration testen**, bevor du SAML SSO für dein Unternehmen aktivierst, um dich zu vergewissern, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)
11. Klicke auf **Speichern**.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Konfigurieren von SAML SSO

Du kannst die SAML-Authentifizierung für {% data variables.location.product_location %} aktivieren oder deaktivieren oder eine vorhandene Konfiguration bearbeiten. Du kannst die Authentifizierungseinstellungen für {% data variables.product.product_name %} in der Verwaltungskonsole anzeigen und bearbeiten. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungskonsole](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).

{% note %}

**Hinweis**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Wähle **SAML** aus.
   
   ![Screenshot der Option zum Aktivieren der SAML-Authentifizierung in der Verwaltungskonsole](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot der Option zum Aktivieren der integrierten Authentifizierung außerhalb des SAML-IdP](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Wähle optional zum Aktivieren von SSO mit unangeforderter Antwort die Option **IdP initiated SSO** (IdP-initiiertes einmaliges Anmelden) aus. {% data variables.product.prodname_ghe_server %} antwortet auf eine von einem Identitätsanbieter (Identity Provider, IdP) initiierte unaufgeforderte Anforderung standardmäßig durch das Zurücksenden einer `AuthnRequest` an den IdP.

   ![Screenshot der Option zum Aktivieren der vom IdP initiierten unangeforderten Antwort](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Hinweis**: Es empfiehlt sich, diesen Wert **nicht auszuwählen**. Du solltest dieses Feature **nur** dann aktivieren, wenn deine SAML-Implementierung das vom Dienstanbieter initiierte SSO nicht unterstützt und du vom {% data variables.contact.enterprise_support %} dazu angewiesen wirst.

   {% endtip %}

1. Wähle **Herabstufung des Administrators/Höherstufung zum Administrator deaktivieren** aus, wenn du **nicht** möchtest, dass der SAML-Anbieter Administratorrechte für Benutzer in {% data variables.location.product_location %} festlegen soll.

   ![Screenshot der Option hinsichtlich der Berücksichtigung des „Administrator“-Attributs vom IdP, mit dem Administratorrechte aktiviert oder deaktiviert werden](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. Wenn du optional zulassen möchtest, dass von {% data variables.location.product_location %} verschlüsselte Assertionen vom SAML-IdP empfangen werden, wähle **Verschlüsselte Assertionen erforderlich** aus. Du musst dich vergewissern, dass der IdP verschlüsselte Assertionen unterstützt und dass die Verschlüsselungs- und Schlüsseltransportmethoden in der Verwaltungskonsole den für deinen IdP konfigurierten Werten entsprechen. Du musst dem IdP auch das öffentliche Zertifikat von {% data variables.location.product_location %} bereitstellen. Weitere Informationen findest du unter [Aktivieren verschlüsselter Assertionen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions).

   ![Screenshot des Kontrollkästchens „Enable encrypted assertions“ (Verschlüsselte Assertionen aktivieren) im Abschnitt „Authentication“ (Authentifizierung) der Verwaltungskonsole](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. Gib im Feld **Single sign-on URL** (URL für einmaliges Anmelden) den HTTP- oder HTTPS-Endpunkt für den IdP für SSO-Anforderungen ein. Dieser Wert wird durch deine IdP-Konfiguration angegeben. Wenn der Host nur über das interne Netzwerk verfügbar ist, musst du möglicherweise [{% data variables.location.product_location %} so konfigurieren, dass interne Namenserver verwendet werden](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Screenshot des Textfelds für die URL für einmaliges Anmelden](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Gib optional im Feld **Issuer** (Aussteller) den Namen des SAML-Ausstellers ein. Dadurch wird die Authentizität von Nachrichten verifiziert, die an {% data variables.location.product_location %} gesendet werden.

   ![Screenshot des Textfelds für die URL des SAML-Ausstellers](/assets/images/enterprise/management-console/saml-issuer.png)
1. Wähle in den Dropdownmenüs **Signaturmethode** und **Hashwertmethode** den Hashalgorithmus aus, der vom SAML-Aussteller dazu verwendet wird, die Integrität der Anforderungen von {% data variables.location.product_location %} zu überprüfen. Gib das Format mit dem Dropdownmenü **Name Identifier Format** (Namensbezeichnerformat) an.

   ![Screenshot der Dropdownmenüs zum Auswählen der Signatur- und der Hashwertmethode](/assets/images/enterprise/management-console/saml-method.png)
1. Klicke unter **Verification certificate** (Verifizierungszertifikat) auf **Choose File** (Datei auswählen), und wähle ein Zertifikat aus, um SAML-Antworten vom IdP zu überprüfen.

   ![Screenshot der Schaltfläche zum Hochladen des Verifizierungszertifikats vom IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Ändere die SAML-Attributnamen bei Bedarf so, dass sie mit deinem IdP übereinstimmen, oder akzeptiere die Standardnamen.

   ![Screenshot der Felder zum Eingeben zusätzlicher SAML-Attribute](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Aktivieren von SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Die folgenden IdP haben eine Dokumentation zum Konfigurieren von SAML SSO für {% data variables.product.product_name %} veröffentlicht. Wenn dein IdP nicht aufgeführt ist, wende dich an deinen IdP, um Unterstützung für {% data variables.product.product_name %} anzufordern.

 | IdP | Weitere Informationen |
 | :- | :- |
 | Azure AD | [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mit Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad) |
| Okta | [Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mit Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta) |

Während der Initialisierung für {% data variables.product.product_name %} musst du {% data variables.product.product_name %} als SAML-Dienstanbieter (SP, Service Provider) bei deinem IdP konfigurieren. Du musst mehrere eindeutige Werte bei deinem IdP eingeben, um {% data variables.product.product_name %} als gültigen SP zu konfigurieren. Weitere Informationen findest du in der [SAML-Konfigurationsreferenz](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata).

## Bearbeiten der SAML-SSO-Konfiguration

Wenn sich die Details für deinen IdP ändern, musst du die SAML-SSO-Konfiguration für {% data variables.location.product_location %} bearbeiten. Wenn beispielsweise das Zertifikat für deinen IdP abläuft, kannst du den Wert für das öffentliche Zertifikat bearbeiten.

{% ifversion ghae %}

{% note %}

**Hinweis**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Gib unter „SAML Single Sign-On“ die neuen Details deines IdP ein.
  ![Texteingabefelder mit IdP-Details für die SAML-SSO-Konfiguration für ein Unternehmen](/assets/images/help/saml/ae-edit-idp-details.png)
1. Klicke optional auf {% octicon "pencil" aria-label="The edit icon" %}, um eine neue Signatur- oder Digestmethode zu konfigurieren.
  ![Symbol zum Ändern der Signatur- und Digestmethode](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Verwende die Dropdownmenüs, und wähle die neue Signatur- oder Digestmethode aus.
      ![Dropdownmenüs zum Auswählen einer neuen Signatur- oder Digestmethode](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Klicke auf **SAML-Konfiguration testen**, um dich zu vergewissern, dass die von dir eingegebenen Informationen korrekt sind.
  ![Schaltfläche „SAML-Konfiguration testen“](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Klicke auf **Speichern**.
    ![Schaltfläche „Speichern“ für die SAML-SSO-Konfiguration](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Für die automatische Bereitstellung und Aufhebung der Bereitstellung von Benutzerkonten für {% data variables.location.product_location %} kannst du optional die Benutzerbereitstellung mit SCIM neu konfigurieren. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

{% endif %}

{% ifversion ghae %}

## Deaktivieren von SAML SSO

{% warning %}

**Warnung**: Wenn du SAML SSO für {% data variables.location.product_location %} deaktivierst, können sich Benutzer ohne bestehende SAML-SSO-Sitzungen nicht bei {% data variables.location.product_location %} anmelden. SAML-SSO-Sitzungen in {% data variables.location.product_location %} laufen nach 24 Stunden ab.

{% endwarning %}

{% note %}

**Hinweis**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Deaktiviere unter „SAML Single Sign-On“ das Kontrollkästchen **SAML-Authentifizierung aktivieren**.
  ![Kontrollkästchen für „SAML-Authentifizierung aktivieren“](/assets/images/help/saml/ae-saml-disabled.png)
1. Klicke auf **Speichern**, um SAML SSO zu deaktivieren und die Anmeldung mit dem integrierten Benutzerkonto zu erzwingen, das während der Initialisierung erstellt wurde.
    ![Schaltfläche „Speichern“ für die SAML-SSO-Konfiguration](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## Weiterführende Themen

{%- ifversion ghec %}
- [Verwalten von SAML Single Sign-On für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization) {%- endif %} {%- ifversion ghes %}
- [Hoch- oder Zurückstufen eines Websiteadministrators](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator) {%- endif %}

{% endif %}
