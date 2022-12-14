---
title: Authentifizierung bei GitHub
shortTitle: Authentication
intro: 'Du kannst sicher auf die Ressourcen deines Kontos auf {% data variables.product.prodname_desktop %} zugreifen, indem du dich bei {% data variables.product.prodname_dotcom %} authentifizierst.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  fpt: '*'
ms.openlocfilehash: e88d59a03d876b23d8eb72aae7324db64981096f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105272'
---
## Informationen zur Authentifizierung

Damit die Sicherheit deines Kontos gewahrt bleibt, musst du dich authentifizieren, bevor du mit {% data variables.product.prodname_desktop %} auf Ressourcen auf {% data variables.product.prodname_dotcom %} zugreifen kannst.

Vor der Authentifizierung bei {% data reusables.desktop.get-an-account %}

{% mac %}

## Authentifizieren eines Kontos auf {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %}
3. Klicke rechts neben „{% data variables.product.prodname_dotcom_the_website %}“ auf **Sign in** (Anmelden).
  ![Die Schaltfläche „Anmelden“ für GitHub](/assets/images/help/desktop/mac-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}


{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Befolge nach Authentifizierung des Kontos durch {% data variables.product.prodname_dotcom %} die Aufforderungen, um zu {% data variables.product.prodname_desktop %} zurückzukehren.

## Authentifizieren eines Kontos in {% data variables.product.prodname_ghe_server %}


{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Um ein Konto auf {% data variables.product.product_location_enterprise %} hinzuzufügen, gibst du die URL für deine Instanz unter „Unternehmensadresse“ ein und klickst dann auf **Weiter**.
  ![Die Schaltfläche „Anmelden“ für GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png) {% data reusables.desktop.sign-in-browser %}
1. Um dich beim {% data variables.product.product_location_enterprise %}-Konto zu authentifizieren, gibst du deine Anmeldeinformationen für das Konto ein und klickst auf **Anmelden**.
  ![Die Schaltfläche „Anmelden“ für {% data variables.product.prodname_ghe_server %} im Browser](/assets/images/help/desktop/enterprise-sign-in-button-browser.png)

  Wenn du bereits bei deinem {% data variables.product.product_location_enterprise %}-Konto angemeldet warst, kannst du auch zu {% data variables.product.prodname_desktop %} zurückkehren, um die Authentifizierung abzuschließen. 

{% endmac %}

{% windows %}

## Authentifizieren eines Kontos auf {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %}
3. Klicke rechts neben „GitHub.com“ auf **Sign in** (Anmelden).
  ![Die Schaltfläche „Anmelden“ für GitHub](/assets/images/help/desktop/windows-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}

  {% data reusables.user-settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Befolge nach Authentifizierung des Kontos durch {% data variables.product.prodname_dotcom %} die Aufforderungen, um zu {% data variables.product.prodname_desktop %} zurückzukehren.

## Authentifizieren eines Kontos in {% data variables.product.prodname_enterprise %}


{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Um ein {% data variables.product.prodname_enterprise %}-Konto hinzuzufügen, gibst du deine Anmeldeinformationen unter „Unternehmensadresse“ ein und klickst dann auf **Weiter**.
  ![Schaltfläche „Sign in“ (Anmelden) für GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png) {% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

## Problembehandlung bei Authentifizierungsproblemen

Wenn in {% data variables.product.prodname_desktop %} ein Authentifizierungsfehler auftritt, kannst du Fehlermeldungen zur Problembehandlung verwenden.

Wenn ein Authentifizierungsfehler auftritt, versuche zunächst, sich in deinem Konto bei {% data variables.product.prodname_desktop %} abzumelden und dann wieder anzumelden.

Bei einigen Fehlern wird von {% data variables.product.prodname_desktop %} eine Aufforderung mit einer Fehlermeldung angezeigt. Wenn du keine Aufforderung erhalten oder weitere Informationen zu einem Fehler finden möchtest, zeige die {% data variables.product.prodname_desktop %}-Protokolldateien mithilfe der folgenden Schritte an.

{% mac %}

1. Verwende das Dropdownmenü **Help** (Hilfe), und klicke auf **Show Logs in Finder** (Protokolle im Finder anzeigen).
  ![Schaltfläche „Show Logs in Finder“ (Protokolle im Finder anzeigen)](/assets/images/help/desktop/mac-show-logs.png)
2. Wähle die Protokolldatei mit dem Datum aus, an dem der Authentifizierungsfehler aufgetreten ist.

{% endmac %}

{% windows %}

1. Verwende das Dropdownmenü **Help** (Hilfe), und klicke auf **Show Logs in Explorer** (Protokolle im Explorer anzeigen).
  ![Schaltfläche „Show Logs in Explorer“ (Protokolle im Explorer anzeigen)](/assets/images/help/desktop/windows-show-logs.png)
2. Wähle die Protokolldatei mit dem Datum aus, an dem der Authentifizierungsfehler aufgetreten ist.

{% endwindows %}

Lies sich die nachstehenden Problembehandlungsinformationen für die aufgetretene Fehlermeldung durch.

### Ungültige Anmeldeinformationen

```shell
Error: Bad credentials
```

Dieser Fehler bedeutet, dass es ein Problem mit deinen gespeicherten Kontoanmeldeinformationen gibt.

Melde dich zur Problembehandlung bei deinem {% data variables.product.prodname_desktop %}-Konto ab, und melde dich dann wieder an.

### Leeres Token

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - <username> (empty token)
```

Dieser Fehler bedeutet, dass das in der Systemkeychain generierte Zugriffstoken von {% data variables.product.prodname_desktop %} nicht gefunden wurde.

Melde dich zur Problembehandlung bei deinem {% data variables.product.prodname_desktop %}-Konto ab, und melde dich dann wieder an.

### Repository nicht gefunden

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

Dieser Fehler bedeutet, dass du nicht über die Berechtigung zum Zugreifen auf das Repository verfügst, das du zu klonen versuchst.

Wende dich zur Problembehandlung an die Person in deiner Organisation, die Berechtigungen verwaltet.

### Remoterepository konnte nicht gelesen werden

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

Dieser Fehler bedeutet, dass du keinen gültigen SSH-Schlüssel eingerichtet hast.

Weitere Informationen zur Problembehandlung findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Fehler beim Klonen

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

Dieser Fehler bedeutet, dass entweder das Repository, das du klonen möchtest, über Untermodule verfügt, auf die du keinen Zugriff hast, oder dass du keinen gültigen SSH-Schlüssel eingerichtet hast.

Wenn du keinen Zugriff auf die Untermodule hast, wende dich zur Problembehandlung an die Person, die Berechtigungen für das Repository verwaltet.

Wenn du keinen gültigen SSH-Schlüssel eingerichtet hast, lies die Beschreibung unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% windows %}

### AskPass-Antwort kann nicht gelesen werden

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

Dieser Fehler kann durch mehrere Ereignisse verursacht werden.

Wenn die `Command Processor`-Registrierungseinträge geändert werden, reagiert {% data variables.product.prodname_desktop %} mit einem `Authentication failed`-Fehler. Führe die folgenden Schritte aus, um zu überprüfen, ob diese Registrierungseinträge geändert wurden.

1. Öffne den Registrierungs-Editor (`regedit.exe`), und navigiere zu den folgenden Speicherorten.
  `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\`
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. Überprüfen, ob an einem der beiden Speicherorte ein `Autorun`-Wert vorhanden ist.
3. Wenn ein `Autorun`-Wert vorhanden ist, lösche ihn.

Wenn dein Windows-Benutzername erweiterte Unicode-Zeichen beinhaltet, kann ein AskPass-Antwortfehler ausgelöst werden. Erstelle zur Problembehandlung ein neues Windows-Benutzerkonto, und migriere deine Dateien zu diesem Konto. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Erstellen eines Benutzerkontos in Windows](https://support.microsoft.com/en-us/help/13951/windows-create-user-account).

{% endwindows %}

## Weitere Informationsquellen
- [Informationen zur Authentifizierung für GitHub](/github/authenticating-to-github/about-authentication-to-github)
