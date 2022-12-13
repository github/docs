---
title: Mit Zwei-Faktor-Authentifizierung auf GitHub zugreifen
intro: 'Wenn die Zwei-Faktor-Authentifizierung (2FA) aktiviert ist, wirst du aufgefordert, deinen 2FA-Authentifizierungscode sowie dein Passwort anzugeben, wenn du dich bei {% data variables.product.product_name %} anmeldest.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 244cc4b45165cbc327729fd6d1c5ac519a6a6d7a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085951'
---
Wenn die Zwei-Faktor-Authentifizierung aktiviert ist, musst du beim Zugreifen auf {% data variables.product.product_name %} über deinen Browser einen Authentifizierungscode angeben. Wenn du auf {% data variables.product.product_name %} mit anderen Methoden, z. B. der API oder der Befehlszeile, zugreifen, musst du eine alternative Form der Authentifizierung verwenden. Weitere Informationen findest du unter „[Informationen zur Authentifizierung bei {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)“.

## Einen 2FA-Code bei der Anmeldung in die Website bereitstellen

Nachdem du dich mit deinem Passwort bei {% data variables.product.product_name %} angemeldet hast, wirst du aufgefordert, einen Authentifizierungscode aus {% ifversion fpt or ghec %}einer SMS oder{% endif %} deiner TOTP-App einzugeben.

Nachdem du dich mit deinem Passwort bei {% data variables.product.product_name %} angemeldet hast, wirst du erst dann wieder aufgefordert, deinen Authentifizierungscode für die Zwei-Faktor-Authentifizierung anzugeben, wenn du dich abgemeldet hast, ein neues Gerät verwenden oder deine Sitzung abläuft.

### Einen Code über eine TOTP-Anwendung generieren

Wenn du dich dafür entschieden hast, die Zwei-Faktor-Authentifizierung mit einer TOTP-Anwendung auf deinem Smartphone einzurichten, kannst du jederzeit einen Authentifizierungscode für {% data variables.product.product_name %} generieren. In den meisten Fällen wird beim bloßen Starten der Anwendung ein neuer Code generiert. Spezifische Anweisungen findest du in der Dokumentation deiner Anwendung.

Wenn du die mobile Anwendung nach der Konfiguration der Zwei-Faktor-Authentifizierung löschst, musst du deinen Wiederherstellungscode angeben, um Zugriff auf dein Konto zu erhalten. Weitere Informationen findest du unter „[Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“.

{% ifversion fpt or ghec %}

### Eine SMS empfangen

Wenn du die Zwei-Faktor-Authentifizierung per SMS einrichtest, sendet dir {% data variables.product.product_name %} eine SMS mit deinem Authentifizierungscode.

### Überprüfen mit {% data variables.product.prodname_mobile %}

Wenn du {% data variables.product.prodname_mobile %} installiert hast und dich angemeldet hast, kannst du die Authentifizierung bei {% data variables.product.prodname_mobile %} unter Verwendung der Zwei-Faktor-Authentifizierung wählen.

1. Melde dich mit deinem Browser unter Verwendung deines Benutzernamens und Kennworts bei {% data variables.product.product_name %} an.
2. Wenn du deinem Konto einen Sicherheitsschlüssel hinzugefügt hast, wirst du zuerst aufgefordert, einen Sicherheitsschlüssel einzufügen und zu verwenden. Um den Sicherheitsschlüssel zu überspringen, klicke auf **Authentifizieren mit {% data variables.product.prodname_mobile %}**.
  ![Abfrage zur Zwei-Faktor-Authentifizierung bei {% data variables.product.product_name %}, wobei „Bei {% data variables.product.prodname_mobile %} authentifizieren“ hervorgehoben ist](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} sendet dir eine Pushbenachrichtigung zum Verifizieren deines Anmeldeversuchs. Wenn du die Pushbenachrichtigung oder die {% data variables.product.prodname_mobile %}-App öffnest, wirst du aufgefordert, den Anmeldeversuch zu bestätigen oder abzulehnen.
  {% note %}

  **Hinweis**: Diese Eingabeaufforderung erfordert möglicherweise die Eingabe einer zweistellige Zahl, die im Browser angezeigt wird, bei dem du dich anmeldest.

  {% endnote %}

  ![Abfrage zur Zwei-Faktor-Authentifizierung bei {% data variables.product.prodname_mobile %}, wobei eine zweistellige Eingabe erforderlich ist](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Nach der Genehmigung des Anmeldeversuchs bei {% data variables.product.prodname_mobile %} führt dein Browser die Anmeldung automatisch aus.
    - Wenn du den Anmeldeversuch ablehnst, wird verhindert, dass die Authentifizierung abgeschlossen wird. Weitere Informationen findest du unter [Schützen deines Kontos und deiner Daten](/authentication/keeping-your-account-and-data-secure).

{% endif %}

## Zwei-Faktor-Authentifizierung mit der Befehlszeile verwenden

Nachdem du die Zwei-Faktor-Authentifizierung (2FA) aktiviert hast, verwende dein Kennwort nicht mehr, um auf {% data variables.product.product_name %} in der Befehlszeile zuzugreifen. Verwende stattdessen Git Credential Manager, ein persönliches Zugriffstoken oder einen SSH-Schlüssel.

### Authentifizieren in der Befehlszeile mithilfe von Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) ist eine sichere Git-Anmeldeinformationshilfe für Windows, macOS und Linux. Weitere Informationen zu Hilfsprogrammen für Git-Anmeldeinformationen findest du unter [Vermeiden von Wiederholungen](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) im Pro Git-Buch.

Setupanweisungen variieren je nach Betriebssystem deines Computers. Weitere Informationen findest du unter [Herunterladen und Installieren](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) im Repository „GitCredentialManager/git-credential-manager“.

### In der Befehlszeile mit HTTPS authentifizieren

Nachdem du die Zwei-Faktor-Authentifizierung aktiviert hast, musst du bei der Authentifizierung bei {% data variables.product.product_name %} in der Befehlszeile über HTTPS-URLs ein persönliches Zugriffstoken erstellen, das du als Passwort verwenden kannst.

Wenn du in der Befehlszeile nach einem Benutzernamen und einem Passwort gefragt wirst, verwende deinen {% data variables.product.product_name %}-Benutzernamen und dein persönliches Zugriffstoken. In der Eingabeaufforderung wird nicht angegeben, dass du dein persönliches Zugriffstoken eingeben sollst, wenn du nach deinem Passwort gefragt wirst.

Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

### In der Befehlszeile mit SSH authentifizieren

Die Aktivierung der Zwei-Faktor-Authentifizierung ändert nichts daran, wie du dich in der Befehlszeile über SSH-URLs bei {% data variables.product.product_name %} authentifizierst. Weitere Informationen zum Einrichten und Verwenden eines SSH-Schlüssels findest du unter [Herstellen der Verbindung mit {% data variables.product.prodname_dotcom %} mit SSH](/articles/connecting-to-github-with-ssh/).

## Zwei-Faktor-Authentifizierung für den Zugriff auf ein Repository mittels Subversion verwenden

Wenn du mittels Subversion auf ein Repository zugreifst, musst du anstelle der Eingabe deines Passworts ein persönliches Zugriffstoken angeben. Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

## Problembehandlung

Wenn du den Zugriff auf deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst, kannst du deine Wiederherstellungscodes oder eine andere Wiederherstellungsmethode (sofern du eine eingerichtet hast) verwenden, um wieder Zugriff auf dein Konto zu erhalten. Weitere Informationen findest du unter „[Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“.

Wenn deine Authentifizierung mehrmals fehlschlägt, solltest du möglicherweise die Uhrzeit auf deinem Telefon mit deinem Mobilfunkanbieter synchronisieren. Häufig wird dabei die Option zum automatischen Einstellen der Uhrzeit auf deinem Telefon aktiviert, anstatt deine eigene Zeitzone anzugeben.

## Weitere Informationsquellen

- [Informationen zur zweistufigen Authentifizierung](/articles/about-two-factor-authentication)
- [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication)
- „[Konfigurieren der Wiederherstellungsmethoden bei der Zwei-Faktor-Authentifizierung](/articles/configuring-two-factor-authentication-recovery-methods)“
- „[Wiederherstellen deines Kontos, wenn du deine Anmeldeinformationen für die Zwei-Faktor-Authentifizierung verlierst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)“
