---
title: Initialisieren von GitHub AE
intro: 'Um dein Unternehmen einsatzbereit zu machen, kannst du die Anfangskonfiguration von {% data variables.product.product_name %} abschließen.'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
ms.openlocfilehash: a3c32a770bbf58be3589824302fe3a32be0e239a
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167052'
---
## Informationen zur Initialisierung

Bevor du dein Unternehmen initialisieren kannst, musst du {% data variables.product.product_name %} erwerben. Für weitere Informationen kontaktiere das {% data variables.contact.contact_enterprise_sales %}.

{% data reusables.github-ae.initialize-enterprise %} Vergewissere dich, dass die von dir angegebenen Informationen mit den Informationen zum vorgesehenen Unternehmensbesitzer im IdP übereinstimmen. Weitere Informationen zu Unternehmensbesitzern findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner).

{% note %}

**Hinweise**:

- Wenn das anfängliche Kennwort für {% data variables.product.prodname_ghe_managed %} abläuft, bevor du die Initialisierung abgeschlossen hast, kannst du jederzeit über deine Einladungs-E-Mail ein neues Kennwort anfordern.

- Speichere den anfänglichen Benutzernamen und das Kennwort für {% data variables.product.prodname_ghe_managed %} sicher in einem Kennwort-Manager. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

Während der Initialisierung benennt der Unternehmensbesitzer dein Unternehmen, konfiguriert SAML-SSO-Einstellungen, erstellt Richtlinien für alle Organisationen in deinem Unternehmen und konfiguriert einen Supportkontakt für deine Benutzer.

## Voraussetzungen

Um mit der Initialisierung zu beginnen, erhältst du eine Einladungs-E-Mail von {% data variables.product.company_short %}. Bevor du {% data variables.product.prodname_ghe_managed %} konfigurierst, solltest du die folgenden Voraussetzungen überprüfen.


Für die Initialisierung von {% data variables.location.product_location %} benötigst du einen SAML-Identitätsanbieter (IdP). {% data reusables.saml.ae-uses-saml-sso %} Damit du den IdP während der Initialisierung mit deinem Unternehmen verbinden kannst, benötigst du die Entitäts-ID-URL (SSO), die Aussteller-ID-URL und das öffentliche Signaturzertifikat (Base64-verschlüsselt) für deinen IdP. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung für dein Unternehmen](/admin/authentication/about-identity-and-access-management-for-your-enterprise).

{% note %}

**Hinweis**: {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## Anmelden und Benennen deines Unternehmens

1. Folge den Anweisungen in der Willkommens-E-Mail, um dein Unternehmen einzurichten.
2. Gib deine Anmeldeinformationen unter „Kennwort ändern“ ein, und klicke dann auf **Kennwort ändern**.
3. Gib unter „Wie soll dein Unternehmenskonto heißen?“ den Namen des Unternehmens ein, und klicke dann auf **Speichern und fortfahren**.
  ![Schaltfläche „Speichern und fortfahren“ zum Benennen eines Unternehmens](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

## Verbinden des IdP mit deinem Unternehmen

Um die Authentifizierung für {% data variables.product.product_name %} zu konfigurieren, musst du in {% data variables.product.product_name %} Details zu deinem SAML-IdP angeben. {% data variables.product.company_short %} empfiehlt, Azure AD als IdP zu verwenden. Weitere Informationen findest du unter [Konfigurieren der Authentifizierung und Bereitstellung mit deinem Identitätsanbieter](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider).

1. Klicke rechts neben „Identitätsanbieter einrichten“ auf **Konfigurieren**.
  ![Schaltfläche „Konfigurieren“ für die IdP-Konfiguration](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Kopiere die URL für deinen SAML-IdP, und füge sie unter „Anmelde-URL“ ein.
  ![Textfeld für die Anmelde-URL des SAML-IdP](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Kopiere die Aussteller-URL für deinen SAML-IdP, und füge sie unter „Aussteller“ ein.
  ![Textfeld für die Aussteller-URL des SAML-IdP](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Kopiere das öffentliche Zertifikat für deinen SAML-IdP, und füge es unter „Öffentliches Zertifikat“ ein.
  ![Textfeld für das öffentliche Zertifikat des SAML-IdP](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Klicke auf **SAML-Konfiguration testen**, um sicherzustellen, dass die von dir eingegebenen Informationen korrekt sind.
  ![Schaltfläche „SAML-Konfiguration testen“](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Klicke auf **Speichern**.
  ![Schaltfläche „Speichern“ für die IdP-Konfiguration](/assets/images/enterprise/configuration/ae-save.png)
1. {% data reusables.saml.assert-the-administrator-attribute %}

## Festlegen der Unternehmensrichtlinien

Durch die Konfiguration von Richtlinien werden Einschränkungen für die Verwaltung von Repositorys und Organisationen in deinem Unternehmen festgelegt. Diese können nach dem Initialisierungsvorgang neu konfiguriert werden.

1. Klicke rechts neben „Unternehmensrichtlinien festlegen“ auf **Konfigurieren**.
  ![Schaltfläche „Konfigurieren“ für die Richtlinienkonfiguration](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Klicke unter „Standardberechtigungen für Repositorys“ auf das Dropdownmenü, und wähle eine Standardberechtigungsstufe für Repositorys in deinem Unternehmen aus. Wenn eine Person über mehrere Zugriffsmöglichkeiten auf eine Organisation verfügt (entweder als Einzelperson, über ein Team oder als Mitglied einer Organisation), hat die höchste Berechtigungsstufe Vorrang vor allen niedrigeren Berechtigungsstufen. (Optional) Wenn Organisationen innerhalb deines Unternehmens die Möglichkeit haben sollen, ihre Standardberechtigungen für Repositorys festzulegen, klicke auf **Keine Richtlinie**
  ![Dropdownmenü mit Standardberechtigungsoptionen für Repositorys](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png).
3. Wähle unter „Repositoryerstellung“ aus, ob du Mitgliedern erlauben willst, Repositorys zu erstellen. Optional kannst du Organisationen innerhalb deines Unternehmens erlauben, Berechtigungen festzulegen, indem du auf **Keine Richtlinie** klickst.
  ![Schaltfläche „Mitglieder können Repositorys erstellen“ zum Konfigurieren von Unternehmensrichtlinien](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Wähle unter „Repositorys forken“ aus, ob private und interne Repositorys geforkt werden können. (Optional) Wenn Organisationen innerhalb deines Unternehmens die Möglichkeit haben sollen, Berechtigungen festzulegen, klicke auf **Keine Richtlinie**
  ![Dropdownmenü mit Berechtigungsoptionen zum Forken von Repositorys](/assets/images/enterprise/configuration/ae-repository-forking-menu.png).
5. Wähle unter „Repositoryeinladungen“ aus, ob Mitglieder oder Organisationsbesitzer Projektmitarbeiter zu Repositorys einladen können. (Optional) Wenn Organisationen innerhalb deines Unternehmens die Möglichkeit haben sollen, Berechtigungen festzulegen, klicke auf **Keine Richtlinie**
  ![Dropdownmenü mit Berechtigungsoptionen für Repositoryeinladungen](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png).
6. Klicke unter „Standardsichtbarkeit von Repositorys“ auf das Dropdownmenü, und wähle die Standardeinstellung für die Sichtbarkeit neuer Repositorys aus.
  ![Dropdownmenü mit Optionen zur Standardsichtbarkeit von Repositorys](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Verwende das Dropdownmenü unter „Benutzer können Organisationen erstellen“, um für Mitglieder des Unternehmens den Zugriff auf die Organisationserstellung zu aktivieren oder zu deaktivieren.
  ![Dropdownmenü mit Berechtigungsoptionen zum Erstellen von Organisationen](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Lege mithilfe des Dropdownmenüs unter „Pushvorgänge erzwingen“ fest, ob das Erzwingen von Pushvorgängen erlaubt oder blockiert werden soll.
  ![Dropdownmenü für Konfigurationsoptionen zum Erzwingen von Pushvorgängen](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Lege über das Dropdownmenü unter „Git-SSH-Zugriff“ fest, ob der Git-SSH-Zugriff für alle Repositorys im Unternehmen aktiviert werden soll.
  ![Dropdownmenü für Git-SSH-Zugriffsoptionen](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Klicke auf **Speichern**
  ![Schaltfläche „Speichern“ zum Konfigurieren der Unternehmensrichtlinien](/assets/images/enterprise/configuration/ae-save.png).
11. (Optional) Klicke auf „Auf Standardrichtlinien zurücksetzen“, um alle ausgewählten Optionen zurückzusetzen.
  ![Link zum Zurücksetzen aller Standardrichtlinien](/assets/images/enterprise/configuration/ae-reset-default-options.png)

## Festlegen des internen Supportkontakts

Du kannst die Methode konfigurieren, mit der deine Benutzer das interne Supportteam kontaktieren können. Die Methode kann nach dem Initialisierungsvorgang neu konfiguriert werden.

1. Klicke rechts neben „Interner Supportkontakt“ auf **Konfigurieren**.
  ![Schaltfläche „Konfigurieren“ zum Konfigurieren des internen Supportkontakts](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Wähle unter „Interner Supportkontakt“ die Methode aus, mit der die Benutzer deines Unternehmens den Support kontaktieren können: über eine URL oder eine E-Mail-Adresse. Gib dann die Informationen zum Supportkontakt ein.
  ![Textfeld für die URL des internen Supportkontakts](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Klicke auf **Speichern**.
  ![Schaltfläche „Speichern“ zur Konfiguration des Kontakts zum internen Unternehmenssupport](/assets/images/enterprise/configuration/ae-save.png)

## Festlegen deiner E-Mail-Einstellungen

Nach Abschluss des Initialisierungsvorgangs kannst du alle Einstellungen neu konfigurieren. Weitere Informationen findest du unter [Konfigurieren einer E-Mail-Adresse für Benachrichtigungen](/admin/configuration/configuring-email-for-notifications).

1. Klicke rechts neben „E-Mail-Einstellungen konfigurieren“ auf **Konfigurieren**.
  ![Schaltfläche „Konfigurieren“ zur Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-email-configure.png)
2. Wähle **E-Mail aktivieren** aus. Dadurch werden sowohl ausgehende als auch eingehende E-Mail-Benachrichtigungen aktiviert. Zur ordnungsgemäßen Funktion der eingehenden E-Mails musst du jedoch auch deine DNS-Einstellungen konfigurieren. Weitere Informationen findest du unter [Konfigurieren der DNS-Einstellungen und Firewalleinstellungen zum Zulassen eingehender E-Mails](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails).
 ![Kontrollkästchen zum Aktivieren bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Vervollständige deine E-Mail-Servereinstellungen:
    - Gib im Feld **Serveradresse** die Adresse deines SMTP-Servers an.
    - Gib im Feld **Port** den Port an, den dein SMTP-Server zum Senden von E-Mails verwendet.
    - Gib im Feld **Domäne** den Domänennamen an, den dein SMTP-Server mit einer HELO-Antwort sendet (sofern vorhanden).
    - Wähle in der Dropdownliste **Authentifizierung** die Art der Verschlüsselung aus, die von deinem SMTP-Server verwendet wird.
    - Gib im Feld **No-Reply-E-Mail-Adresse** die E-Mail-Adresse an, die bei allen Benachrichtigungs-E-Mails in den Feldern „Von“ und „An“ verwendet werden soll.

4. Wenn du alle eingehenden E-Mails an die No-Reply-E-Mail-Adresse verwerfen möchtest, wähle **E-Mails an die No-Reply-E-Mail-Adresse verwerfen** aus.
  ![Kontrollkästchen zum Verwerfen bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Klicke auf **E-Mail-Einstellungen testen**.
  ![Schaltfläche „E-Mail-Einstellungen testen“ bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-test-email.png)
6. Gib unter „Test-E-Mail senden an“ die E-Mail-Adresse ein, an die du eine Test-E-Mail senden möchtest, und klicke dann auf **Test-E-Mail senden**.
  ![Schaltfläche „Test-E-Mail senden“ bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Klicke auf **Speichern**.
  ![Schaltfläche „Speichern“ zur Konfiguration des Kontakts zum internen Unternehmenssupport](/assets/images/enterprise/configuration/ae-save.png)
