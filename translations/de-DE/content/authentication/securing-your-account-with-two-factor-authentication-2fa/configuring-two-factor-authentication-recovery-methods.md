---
title: Wiederherstellungsmethoden bei der Zwei-Faktor-Authentifizierung konfigurieren
intro: 'Du kannst verschiedene Wiederherstellungsmethoden einrichten, um auf dein Konto zuzugreifen, wenn du Deine Anmeldeinformation für die Zwei-Faktor-Authentifizierung verloren hast.'
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085932'
---
Neben der sicheren Speicherung Deiner Wiederherstellungscodes für die Zwei-Faktor-Authentifizierung (2FA) empfehlen wir außerdem dringend, mindestens eine zusätzliche Wiederherstellungsmethode zu konfigurieren.

## Wiederherstellungscode für die Zwei-Faktor-Authentifizierung herunterladen

{% data reusables.two_fa.about-recovery-codes %} Du kannst nach der Aktivierung der Zwei-Faktor-Authentifizierung deine Wiederherstellungscodes auch jederzeit herunterladen.

Um Dein Konto zu schützen, solltest Du diese Wiederherstellungscode nicht öffentlich machen und nicht weitergeben. Wir empfehlen, die Codes mit einem sicheren Passwort-Manager zu speichern, beispielsweise mit:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

Wenn Du neue Wiederherstellungscodes erzeugst oder die 2FA deaktivierst und erneut aktivierst, werden die Wiederherstellungscodes in Deinen Sicherheitseinstellungen automatisch aktualisiert.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. Speichere deine Wiederherstellungscodes an einem sicheren Ort. Mit deinen Wiederherstellungscodes kannst du wieder auf dein Konto zugreifen, wenn du den Zugriff darauf verlierst.
    - Um deine Wiederherstellungscodes auf deinem Gerät zu speichern, klicke auf **Download**.
    - Wenn du einen Ausdruck deines Wiederherstellungscodes speichern möchtest, klicke auf **Drucken**.
    - Wenn du deine Wiederherstellungscodes zur Speicherung in einem Passwortmanager kopieren möchtest, klicke auf **Kopieren**.
  ![Liste der Wiederherstellungscodes mit der Option, die Codes herunterzuladen, zu drucken oder zu kopieren](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Einen neuen Satz an Wiederherstellungscodes erzeugen

Wenn Du einen Wiederherstellungscode genutzt hast, um wieder Zugriff auf Dein Konto zu erhalten, kannst Du diesen Code nicht mehr verwenden. Wenn Du alle 16 Wiederherstellungscodes aufgebraucht hast, kannst Du eine neue Liste mit Codes erzeugen. Durch das Erstellen einer neuen Liste mit Wiederherstellungscodes werden alle zuvor erzeugten Codes ungültig.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. Um einen weiteren Satz an Wiederherstellungscodes zu erstellen, klicke auf **Neue Wiederherstellungscodes erzeugen**.
    ![Schaltfläche „Neue Wiederherstellungscodes erzeugen“](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Einen Sicherheitsschlüssel als zusätzliche Methode für die Zwei-Faktor-Authentifizierung konfigurieren

Du kannst einen Sicherheitsschlüssel als sekundäre Zwei-Faktor-Authentifizierungsmethode festlegen und diesen Schlüssel nutzen, um erneut Zugriff auf Dein Konto zu erhalten. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

{% ifversion fpt or ghec %}

## Eine Fallback-Authentifizierungsnummer festlegen

Du kannst eine zweite Nummer für ein Fallback-Gerät angeben. Wenn Du weder auf Dein primäres Gerät noch auf Deine Wiederherstellungscodes zugreifen kannst, ermöglicht eine Ersatztelefonnummer für SMS den erneuten Zugriff auf Dein Konto.

Du kannst eine Fallback-Nummer unabhängig davon verwenden, ob Du die Authentifizierung per SMS oder TOTP-Mobilanwendung konfiguriert hast.

{% warning %}

**Warnung:** Die Verwendung einer Fallback-Nummer ist die letzte Option. Wir empfehlen, zusätzliche Wiederherstellungsmethoden zu konfigurieren, wenn Du eine Fallback-Authentifizierungsnummer festlegst.
- Die Authentifizierung über SMS ist riskant, da Mobilfunkanbieter angreifbar sind.
- SMS-Nachrichten werden nur für bestimmte Länder außerhalb der USA unterstützt. Die Liste findest du unter [Länder, in denen SMS-Authentifizierung unterstützt wird](/articles/countries-where-sms-authentication-is-supported).

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Klicke neben „Fallback-SMS-Nummer“ auf **Hinzufügen**.
![Schaltfläche „Fallback-SMS-Nummer hinzufügen“](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. Klicke unter „Fallback-SMS-Nummer“ auf **Fallback-SMS-Nummer hinzufügen**.
![Text „Fallback-SMS-Nummer hinzufügen“](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Wähle Deinen Ländercode aus, und gib Deine Mobiltelefonnummer inklusive Vorwahl ein. Wenn deine Angaben korrekt sind, klicke auf **Fallback festlegen**.
    ![Festlegen der Fallback-SMS-Nummer](/assets/images/help/2fa/2fa-fallback-number.png)

Nach der Einrichtung wird eine Bestätigungs-SMS an Dein Backup-Gerät gesendet.

{% endif %}

## Weiterführende Themen

- [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication)
- [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication)
- [Zugriff auf {% data variables.product.prodname_dotcom %} mit zweistufiger Authentifizierung](/articles/accessing-github-using-two-factor-authentication)“
- [Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die zweistufige Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“
