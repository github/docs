---
title: Zwei-Faktor-Authentifizierung konfigurieren
intro: 'Du kannst zwischen mehreren Optionen wählen, um deinem Konto eine zweite Authentifizierungsquelle hinzuzufügen.'
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179957'
---
Du kannst die Zwei-Faktor-Authentifizierung mit einer mobilen App{% ifversion fpt or ghec %} oder per Textnachricht{% endif %} konfigurieren. Du kannst auch einen Sicherheitsschlüssel hinzufügen.

Es wird dringend empfohlen, eine zeitbasierte Einmalpasswort-Anwendung (TOTP) zur Konfiguration von 2FA zu verwenden.{% ifversion fpt or ghec %} TOTP-Anwendungen sind zuverlässiger als SMS, insbesondere für Standorte außerhalb der Vereinigten Staaten.{% endif %} TOTP-Anwendungen unterstützen die sichere Sicherung deiner Authentifizierungscodes in der Cloud und können wiederhergestellt werden, wenn du den Zugriff auf dein Gerät verlierst.

{% warning %}

**Warnung:**
- Wenn du Mitglied{% ifversion fpt or ghec %}, Abrechnungsmanager*in{% endif %} oder externe*r Mitarbeiter*in bei einem privaten Repository einer Organisation bist, die eine Zwei-Faktor-Authentifizierung verlangt, musst du die Organisation verlassen, bevor du 2FA in {% data variables.location.product_location %} deaktivieren kannst.
- Wenn du die 2FA deaktivierst, verlierst du automatisch den Zugriff auf die Organisation und alle privaten Forks, die du in den privaten Repositorys der Organisation hast. Um wieder auf die Organisation und deine Forks zuzugreifen, aktiviere die Zwei-Faktor-Authentifizierung erneut und wende Dich an einen Organisationsinhaber.

{% endwarning %}

{% ifversion fpt or ghec %}

Wenn du Mitglied eines {% data variables.enterprise.prodname_emu_enterprise %} bist, kannst du die Zwei-Faktor-Authentifizierung für dein {% data variables.enterprise.prodname_managed_user %}-Konto nur konfigurieren, wenn du als Setupbenutzer*in angemeldet bist. Für andere Benutzer*innen als den Setupbenutzer muss ein*e Administrator*in die zweistufige Authentifizierung für deinen Identitätsanbieter (IdP) konfigurieren.

{% endif %}

## Zwei-Faktor-Authentifizierung mit einer mobilen TOTP-Anwendung konfigurieren

Eine TOTP-Anwendung (Time-based One-Time Password) erzeugt automatisch einen Authentifizierungscode, der sich nach einem bestimmten Zeitraum ändert. Wir empfehlen die Nutzung Cloud-basierter TOTP-Apps wie:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Tipp**: Um die Authentifizierung über TOTP auf mehreren Geräten zu konfigurieren, scanne den QR-Code während der Einrichtung mit jedem Gerät gleichzeitig. Wenn die 2FA bereits aktiviert ist und du ein weiteres Gerät hinzufügen möchtest, musst du die 2FA über deine Sicherheitseinstellungen erneut konfigurieren.

{% endtip %}

1. Lade eine TOTP-Anwendung herunter.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. Führe unter „Authentifikator-App einrichten“ eine der folgenden Aktionen aus:
    - Scanne den QR-Code mit der App deines Mobilgeräts. Nach dem Scannen zeigt die App einen sechsstelligen Code an, den du auf {% data variables.product.product_name %} eingeben kannst.
    - Wenn du den QR-Code nicht scannen kannst, klicke auf **diesen Textcode eingeben**, um einen Code anzuzeigen, den du stattdessen manuell in deiner TOTP-App eingeben kannst.
    ![Klicke auf diesen Code](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. Die TOTP-Mobilanwendung speichert dein {% data variables.location.product_location %}-Konto und generiert alle paar Sekunden einen neuen Authentifizierungscode. Auf {% data variables.product.product_name %} gibst du den Code in das Feld unter "Gib den sechsstelligen Code aus der Anwendung ein". 
![TOTP-Codeeingabefeld](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. Wähle unter "Zweistufige Authentifizierung" die Option **Mithilfe einer App einrichten** aus, und klicke auf **Fortfahren**.
6. Führe unter „Authentifizierungsprüfung“ einen der folgenden Schritte aus:
    - Scanne den QR-Code mit der App deines Mobilgeräts. Nach dem Scannen zeigt die App einen sechsstelligen Code an, den du auf {% data variables.product.product_name %} eingeben kannst.
    - Wenn du den QR-Code nicht scannen kannst, klicke auf **diesen Textcode eingeben**, um einen Code anzuzeigen, den du stattdessen manuell in deiner TOTP-App eingeben kannst.
    ![Klicke auf diesen Code](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. Die TOTP-Mobilanwendung speichert dein {% data variables.location.product_location %}-Konto und generiert alle paar Sekunden einen neuen Authentifizierungscode. Auf {% data variables.product.product_name %} gibst du den Code in das Feld unter "Gib den sechsstelligen Code aus der Anwendung ein".
![TOTP-Codeeingabefeld](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Zwei-Faktor-Authentifizierung mit SMS konfigurieren

Wenn Dir die Authentifizierung per TOTP-Mobilanwendung nicht möglich ist, kannst du stattdessen SMS-Nachrichten zur Authentifizierung verwenden. Du kannst auch eine zweite Telefonnummer für ein Fallback-Gerät angeben. Wenn du weder auf dein primäres Gerät noch auf deine Wiederherstellungscodes zugreifen kannst, ermöglicht eine Ersatztelefonnummer für SMS den erneuten Zugriff auf dein Konto.

Bevor du diese Methode verwendest, stelle sicher, dass du SMS empfangen kannst. Möglicherweise fallen Gebühren des Mobilfunkanbieters an.

{% warning %}

**Warnung:** Es **wird dringend empfohlen**, eine TOTP-Anwendung für die Zwei-Faktor-Authentifizierung anstelle von SMS zu verwenden. {% data variables.product.product_name %} unterstützt den SMS-Versand an Telefone nicht für jedes Land. Bevor du die Authentifizierung per SMS konfigurierst, sieh dir die Liste der Länder an, in denen {% data variables.product.product_name %} die Authentifizierung per SMS unterstützt. Weitere Informationen findest du unter „[Länder, in denen die SMS-Authentifizierung unterstützt wird](/articles/countries-where-sms-authentication-is-supported).“

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. Wähle unter „Authentifikator-App einrichten“ die Option **SMS-Authentifizierung** aus.

  ![Alternative 2FA-Option per SMS](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. Wähle unter „SMS-Authentifizierung einrichten“ deine Landesvorwahl aus, und gib deine Mobiltelefonnummer einschließlich der Ortsvorwahl ein. Wenn deine Informationen korrekt sind, klicke auf **Authentifizierungscode** senden.

  ![2FA-SMS-Bild](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Du erhältst eine SMS mit einem Sicherheitscode. Auf {% data variables.product.product_name %} gibst du den Code in das Feld unter "Gib den sechsstelligen Code aus der Anwendung ein" und klicke auf **Weiter**.

  ![2FA-SMS-Feld (Forts.)](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Zwei-Faktor-Authentifizierung mit einem Sicherheitsschlüssel konfigurieren

{% data reusables.two_fa.after-2fa-add-security-key %}

Auf den meisten Geräten und Browsern kannst du einen physikalischen Sicherheitsschlüssel über USB oder NFC verwenden. Einige Browser können Fingerabdruckleser, Gesichtserkennung oder Passwort / PIN als Sicherheitsschlüssel auf deinem Gerät verwenden.

Die Authentifizierung mit einem Sicherheitsschlüssel ist *sekundär* für die Authentifizierung mit einer TOTP-Anwendung{% ifversion fpt or ghec %} oder einer Textnachricht{% endif %}. Wenn du deinen Sicherheitsschlüssel verlierst, kannst du immer noch den Code deines Telefons für die Anmeldung verwenden.

1. Du musst 2FA bereits über eine TOTP mobile App{% ifversion fpt or ghec %} oder per SMS{% endif %} konfiguriert haben.
2. Vergewissere dich, dass du einen WebAuthn-kompatiblen Sicherheitsschlüssel in deinem Computer hast.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. Klicke neben "Sicherheitsschlüssel" auf **Hinzufügen**.
  ![Option Sicherheitsschlüssel hinzufügen](/assets/images/help/2fa/add-security-keys-option.png)
6. Klicke unter "Sicherheitsschlüssel" auf **Neuen Sicherheitsschlüssel registrieren**.
  ![Registrierung eines neuen Sicherheitsschlüssels](/assets/images/help/2fa/security-key-register.png)
7. Gib einen Spitznamen für den Sicherheitsschlüssel ein und klicke dann auf **Hinzufügen**.
  ![Angabe eines Spitznamens für einen Sicherheitsschlüssel](/assets/images/help/2fa/security-key-nickname.png)
8. Aktiviere deinen Sicherheitsschlüssel gemäß den Anweisungen in der Dokumentation des Schlüssels.
  ![Eingabeaufforderung für einen Sicherheitsschlüssel](/assets/images/help/2fa/security-key-prompt.png)
9.  Bestätige, dass du deine Wiederherstellungscodes heruntergeladen hast und auf sie zugreifen kannst. Wenn du das noch nicht getan hast oder einen anderen Satz an Codes verwenden möchtest, lade deine Codes herunter und speichere sie an einem sicheren Ort. Weitere Informationen findest du unter [Herunterladen von 2FA-Wiederherstellungscodes](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Konfigurieren der Zwei-Faktor-Authentifizierung mit {% data variables.product.prodname_mobile %}

Du kannst {% data variables.product.prodname_mobile %} für 2FA verwenden, wenn du Dich in deinem {% data variables.product.prodname_dotcom %} -Konto in einem Webbrowser anmeldest. 2FA mit {% data variables.product.prodname_mobile %} verlässt sich nicht auf TOTP und verwendet stattdessen Kryptografie mit öffentlichem Schlüssel, um dein Konto zu sichern.

Wenn du eine TOTP-Anwendung oder eine SMS konfiguriert hast, kannst du auch {% data variables.product.prodname_mobile %} zur Authentifizierung verwenden. Falls du in Zukunft keinen Zugriff mehr auf {% data variables.product.prodname_mobile %} hast, kannst du Dich immer noch mit Sicherheitsschlüsseln oder TOTP-Anwendungen anmelden.

1. Du musst 2FA bereits über eine mobile TOTP-App oder per SMS konfiguriert haben.
2. Installiere [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Melde Dich bei deinem {% data variables.product.product_name %}-Konto über {% data variables.product.prodname_mobile %} an.

Nach der Anmeldung kannst du dein Gerät für 2FA verwenden.
{% endif %}

## Weiterführende Themen

- [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication)
- „[Konfigurieren von zweistufigen Authentifizierungswiederherstellungsmethoden](/articles/configuring-two-factor-authentication-recovery-methods)“
- „[Zugriff auf {% data variables.product.prodname_dotcom %} mit Zwei-Faktor-Authentifizierung](/articles/accessing-github-using-two-factor-authentication)“
- „[Dein Konto beim Verlust der 2FA-Anmeldeinformationen wiederherstellen](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“
- [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)
