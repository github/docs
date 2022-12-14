---
title: Aktualisieren der Anmeldeinformationen über die macOS Keychain
intro: 'Du musst die gespeicherten Anmeldeinformationen im `git-credential-osxkeychain`-Hilfsprogramm aktualisieren, wenn du {% ifversion not ghae %} deinen Benutzernamen, dein Kennwort oder{% endif %} dein persönliches Zugriffstoken in {% data variables.product.product_name %} änderst.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131266'
---
{% tip %}

**Hinweis:** Das Aktualisieren von Anmeldeinformationen aus der macOS Keychain gilt nur für Benutzer, die manuell einen PAT mit dem `osxkeychain`-Hilfsprogramm konfiguriert haben, das in macOS integriert ist. 

Es wird empfohlen, [SSH zu konfigurieren](/articles/generating-an-ssh-key) oder stattdessen ein Upgrade auf den [Git Credential Manager](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM) durchzuführen. Mit GCM kann die Authentifizierung in deinem Namen (keine manuellen PATs mehr) einschließlich 2FA (zweistufiger Auth) verwaltet werden.

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Anmeldeinformationen über Keychain Access aktualisieren

1. Klicke auf das Spotlight-Symbol (Lupe) auf der rechten Seite der Menüleiste. Gib `Keychain access` ein und drücke dann die Eingabetaste, um die Anwendung zu starten.
   ![Spotlight-Suchleiste](/assets/images/help/setup/keychain-access.png)
2. Suche in Keychain Access nach **{% data variables.command_line.backticks %}**.
3. Suche den Eintrag "Internet password" (Internetkennwort) für `{% data variables.command_line.backticks %}`.
4. Bearbeite oder lösche den Eintrag je nach Bedarf.

## Anmeldeinformationen über die Befehlszeile löschen

In der Befehlszeile kannst du den Keychain-Eintrag direkt über das Hilfsprogramm für Anmeldeinformationen löschen.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Wenn dies erfolgreich ist, wird nichts gedruckt. Um zu testen, ob es funktioniert, versuche, ein privates Repository aus {% data variables.product.product_location %} zu klonen. Wenn du nach einem Kennwort gefragt wirst, wurde der Keychain-Eintrag gelöscht.

## Weitere Informationsquellen

- "[Zwischenspeichern von {% data variables.product.prodname_dotcom %}-Anmeldeinformationen in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
