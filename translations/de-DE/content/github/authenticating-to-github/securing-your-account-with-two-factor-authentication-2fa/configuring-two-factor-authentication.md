---
title: Zwei-Faktor-Authentifizierung konfigurieren
intro: 'Du kannst zwischen mehreren Optionen wählen, um eine zweite Authentifizierungsquelle Deinem Konto hinzuzufügen.'
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app/
  - /articles/configuring-two-factor-authentication-via-text-message/
  - /articles/configuring-two-factor-authentication-via-fido-u2f/
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---
You can configure two-factor authentication using a mobile app{% if currentVersion == "free-pro-team@latest" %} or via text message{% endif %}. Du kannst auch einen Sicherheitsschlüssel hinzufügen.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA.{% if currentVersion == "free-pro-team@latest" %} TOTP applications are more reliable than SMS, especially for locations outside the United States.{% endif %} TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

{% warning %}

**Warnung:**
- If you're a member{% if currentVersion == "free-pro-team@latest" %}, billing manager,{% endif %} or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on {% data variables.product.product_location %}.
- Wenn Du die 2FA deaktivierst, verlierst Du automatisch den Zugriff auf die Organisation und alle privaten Forks, die Du in den privaten Repositorys der Organisation hast. Um wieder auf die Organisation und Deine Forks zuzugreifen, aktiviere die Zwei-Faktor-Authentifizierung erneut und wende Dich an einen Organisationsinhaber.

{% endwarning %}

### Zwei-Faktor-Authentifizierung mit einer mobilen TOTP-Anwendung konfigurieren

Eine TOTP-Anwendung (Time-based One-Time Password) erzeugt automatisch einen Authentifizierungscode, der sich nach einem bestimmten Zeitraum ändert. Wir empfehlen die Nutzung Cloud-basierter TOTP-Apps wie:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)

{% tip %}

**Tipp:** Um die Authentifizierung per TOTP auf mehreren Geräten zu konfigurieren, scanne bei der Einrichtung den QR-Code mit jedem Gerät gleichzeitig. Wenn die 2FA bereits aktiviert ist und Du ein weiteres Gerät hinzufügen möchtest, musst Du die 2FA über Deine Sicherheitseinstellungen erneut konfigurieren.

{% endtip %}

1. Lade eine TOTP-Anwendung herunter.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
5. Klicke auf der Seite zur Zwei-Faktor-Authentifizierung auf **Set up using an app** (Mit einer App einrichten).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
8. Führe auf der Seite zur Zwei-Faktor-Authentifizierung eine der folgenden Aktionen durch:
    - Scanne den QR-Code mit der App Deines Mobilgeräts. Nach dem Scannen zeigt die App einen sechsstelligen Code an, den Du auf {% data variables.product.product_name %} eingeben kannst.
    - Wenn Du den QR-Code nicht scannen kannst, klicke auf **enter this text code** (Diesen Textcode eingeben), um einen Code anzuzeigen, den Du kopieren und manuell auf{% data variables.product.product_name %} eingeben kannst. ![Klicke auf „enter this text code“ (Diesen Code eingeben)](/assets/images/help/2fa/totp-click-enter-code.png)
9. The TOTP mobile application saves your
{% data variables.product.product_name %} account and generates a new authentication code every few seconds. Gib auf der 2FA-Seite auf {% data variables.product.product_name %} den Code ein, und klicke auf **Enable** (Aktivieren).
    ![Feld zum Aktivieren von TOTP](/assets/images/help/2fa/totp-enter-code.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% if currentVersion == "free-pro-team@latest" %}

### Zwei-Faktor-Authentifizierung mit SMS konfigurieren

Wenn Dir die Authentifizierung per TOTP-Mobilanwendung nicht möglich ist, kannst Du stattdessen SMS-Nachrichten zur Authentifizierung verwenden. Du kannst auch eine zweite Telefonnummer für ein Fallback-Gerät angeben. Wenn Du weder auf Dein primäres Gerät noch auf Deine Wiederherstellungscodes zugreifen kannst, ermöglicht eine Ersatztelefonnummer für SMS den erneuten Zugriff auf Dein Konto.

Bevor Du diese Methode verwendest, stelle sicher, dass Du SMS empfangen kannst. Möglicherweise fallen Gebühren des Mobilfunkanbieters an.

{% warning %}

**Warnung:** Wir **empfehlen dringend,** statt SMS eine TOTP-Anwendung für die Zwei-Faktor-Authentifizierung zu verwenden. {% data variables.product.product_name %} unterstützt den SMS-Versand an Telefone nicht für jedes Land. Bevor Du die Authentifizierung per SMS konfigurierst, sieh Dir die Liste der Länder an, in denen {% data variables.product.product_name %} die Authentifizierung per SMS unterstützt. Weitere Informationen findest Du unter „[Länder, in denen die SMS-Authentifizierung unterstützt wird](/articles/countries-where-sms-authentication-is-supported)“.

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Klicke auf der Seite zur Zwei-Faktor-Authentifizierung auf **Set up using SMS** (Mit einer SMS einrichten).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
7. Wählen Sie Ihre Landesvorwahl aus, und geben Sie Ihre komplette Mobiltelefonnummer ein. Wenn die Angaben korrekt sind, klicke auf **Send authentication code** (Authentifizierungscode senden). ![2FA-SMS-Bild](/assets/images/help/2fa/2fa_sms_photo.png)
8. Du erhältst eine SMS mit einem Sicherheitscode. Gib den Code auf der Seite zur Zwei-Faktor-Authentifizierung ein, und klicke auf **Enable** (Aktivieren). ![Feld zum Fortfahren mit 2FA-SMS](/assets/images/help/2fa/2fa-sms-code-enable.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

### Zwei-Faktor-Authentifizierung mit einem Sicherheitsschlüssel konfigurieren

{% data reusables.two_fa.after-2fa-add-security-key %}

Auf den meisten Geräten und Browsern kannst Du einen physikalischen Sicherheitsschlüssel über USB oder NFC verwenden. Einige Browser können Fingerabdruckleser, Gesichtserkennung oder Passwort / PIN als Sicherheitsschlüssel auf Deinem Gerät verwenden.

Authentication with a security key is *secondary* to authentication with a TOTP application{% if currentVersion == "free-pro-team@latest" %} or a text message{% endif %}. Wenn Du Deinen Sicherheitsschlüssel verlierst, kannst Du immer noch den Code Deines Telefons für die Anmeldung verwenden.

1. You must have already configured 2FA via a TOTP mobile app{% if currentVersion == "free-pro-team@latest" %} or via SMS{% endif %}.
2. Ensure that you have a WebAuthn compatible security key inserted into your computer.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
5. Klicke neben „Security keys“ (Sicherheitsschlüssel) auf **Add** (Hinzufügen). ![Option „Add security keys" (Hinzufügen von Sicherheitsschlüsseln)](/assets/images/help/2fa/add-security-keys-option.png)
6. Klicke unter „Security keys“ (Sicherheitsschlüssel) auf **Register new security key** (Neuen Sicherheitsschlüssel registrieren). ![Einen neuen Sicherheitsschlüssel registrieren](/assets/images/help/2fa/security-key-register.png)
7. Gib einen Nicknamen für den Sicherheitsschlüssel ein, und klicke dann auf **Add** (Hinzufügen). ![Einen Nickname für einen Sicherheitsschlüssel angeben](/assets/images/help/2fa/security-key-nickname.png)
8. Aktivieren Sie Ihren Sicherheitsschlüssel gemäß den Anweisungen in der Dokumentation des Schlüssels. ![Eingabeaufforderung für einen Sicherheitsschlüssel](/assets/images/help/2fa/security-key-prompt.png)
9.  Bestätige, dass Du Deine Wiederherstellungscodes heruntergeladen hast und auf sie zugreifen kannst. Wenn Du das noch nicht getan hast oder einen anderen Satz an Codes verwenden möchtest, lade Deine Codes herunter und speichere sie an einem sicheren Ort. Wenn Du nicht mehr auf Dein Konto zugreifen kannst, kannst Du mit den Wiederherstellungscodes erneut Zugriff auf Dein Konto erlangen. Weitere Informationen findest Du unter „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).“ ![Schaltfläche „Download recovery codes" (Herunterladen der Wiederherstellungscodes)](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

### Weiterführende Informationen

- „[Informationen zur Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication)“
- „[Wiederherstellungsmethoden für die Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication-recovery-methods)“
- „[Mit Zwei-Faktor-Authentifizierung auf {% data variables.product.prodname_dotcom %} zugreifen](/articles/accessing-github-using-two-factor-authentication)“
- „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
