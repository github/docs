---
title: Zwischenspeichern von GitHub Anmeldeinformationen in Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Wenn du [{% data variables.product.product_name %}-Repositorys mithilfe von HTTPS klonst](/github/getting-started-with-github/about-remote-repositories), wird die Verwendung von {% data variables.product.prodname_cli %} oder Git Credential Manager (GCM) zum Speichern deiner Anmeldeinformationen empfohlen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102628'
---
{% tip %}

**Tipp:** Wenn du {% data variables.product.product_name %}-Repositorys mit SSH klonst, kannst du dich mit einem SSH-Schlüssel authentifizieren und brauchst keine weiteren Anmeldeinformationen. Informationen zum Einrichten einer SSH-Verbindung findest du unter "[Generieren eines SSH-Schlüssels](/articles/generating-an-ssh-key)".

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} speichert deine Git-Anmeldeinformationen automatisch für Dich, wenn du als bevorzugtes Protokoll für Git-Vorgänge `HTTPS` auswählst und mit "Ja" auf die Frage antwortest, ob du dich bei Git mit deinen {% data variables.product.product_name %}-Anmeldeinformationen authentifizieren möchtest.

1. [Installiere](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} auf macOS, Windows oder Linux.
2. Gib `gh auth login`in die Befehlszeile ein, und befolge die Eingabeaufforderungen.
   - Wenn du zur Eingabe deines bevorzugten Protokolls für Git-Vorgänge aufgefordert wirst, wähle `HTTPS` aus.
   - Wenn du gefragt wirst, ob du dich bei Git mit deinen {% data variables.product.product_name %}-Anmeldeinformationen authentifizieren möchtest, gib `Y` ein.

Weitere Informationen zur Authentifizierung mit {% data variables.product.prodname_cli %} findest du unter [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) ist eine weitere Möglichkeit, deine Anmeldeinformationen sicher zu speichern und eine Verbindung mit GitHub über HTTPS herzustellen. Mit GCM musst du keine PAT manuell [erstellen und speichern](/github/authenticating-to-github/creating-a-personal-access-token), da GCM die Authentifizierung einschließlich 2FA (zweistufige Authentifizierung) in deinem Namen verwaltet.

{% mac %}

1. Installieren von Git mit [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Installiere GCM mithilfe von Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Für MacOS muss `git config` nicht ausgeführt werden, da GCM Git automatisch für Dich konfiguriert.

{% data reusables.gcm-core.next-time-you-clone %}

Sobald du dich erfolgreich authentifiziert hast, werden deine Anmeldeinformationen in der macOS Keychain gespeichert und jedes Mal verwendet, wenn du eine HTTPS-URL klonst. Git erfordert nicht, dass du deine Anmeldeinformationen erneut in die Befehlszeile eingibst, es sei denn, du änderst deine Anmeldeinformationen.

{% endmac %}

{% windows %}

1. Installiere Git für Windows, das GCM enthält. Weitere Informationen findest du unter "[Git für Windows-Versionen](https://github.com/git-for-windows/git/releases/latest)" auf seiner [Release-Seite](https://github.com/git-for-windows/git/releases/latest).

Es wird empfohlen, immer die aktuelle Version zu installieren. Installiere mindestens Version 2.29, die erste Version, die OAuth-Support für GitHub bietet.

{% data reusables.gcm-core.next-time-you-clone %}

Sobald du dich erfolgreich authentifiziert hast, werden deine Anmeldeinformationen in der Windows-Anmeldeinformationsverwaltung gespeichert und jedes Mal verwendet, wenn du eine HTTPS-URL klonst. Git erfordert nicht, dass du deine Anmeldeinformationen erneut in die Befehlszeile eingibst, es sei denn, du änderst deine Anmeldeinformationen.

<br>

{% warning %}

**Warnung:** Ältere Versionen von Git für Windows enthalten Git Credential Manager für Windows. Dieses ältere Produkt wird nicht mehr unterstützt und kann über OAuth keine Verbindung mit GitHub herstellen. Es wird empfohlen, ein Upgrade auf [die neueste Version von Git für Windows](https://github.com/git-for-windows/git/releases/latest) auszuführen.

{% endwarning %}

{% warning %}

**Warnung:** Wenn du falsche oder veraltete Anmeldeinformationen in der Anmeldeinformationsverwaltung für Windows zwischengespeichert hast, kann Git nicht auf {% data variables.product.product_name %} zugreifen. Um deine zwischengespeicherten Anmeldeinformationen zurückzusetzen, damit Git dich auffordert, deine Anmeldeinformationen einzugeben, greife in der Windows-Systemsteuerung unter „Benutzerkonten“ > „Anmeldeinformationsverwaltung“ auf die Anmeldeinformationsverwaltung zu. Suche nach dem {% data variables.product.product_name %}-Eintrag und lösche ihn. 

{% endwarning %}

{% endwindows %}

{% linux %}

Installiere Git und GCM für Linux, und konfiguriere dann Git, um GCM zu verwenden.

1. Installiere Git aus dem Paketsystem deiner Distribution. Die Anweisungen variieren je nachdem, welche Variante von Linux du ausführst.

2. Installiere GCM. Lies dir die [Anweisungen im GCM-Repository](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions) durch, da sie je nachdem, welche Variante von Linux du ausführst, variieren.

3. Konfiguriere Git, um GCM zu verwenden. Es gibt mehrere Sicherungsspeicher, aus denen du wählen kannst. Informationen zum Abschließen der Einrichtung findest du in der GCM-Dokumentation. Für weitere Informationen siehe "[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)".

{% data reusables.gcm-core.next-time-you-clone %}

Sobald du dich erfolgreich authentifiziert hast, werden deine Anmeldeinformationen auf deinem System gespeichert und jedes Mal verwendet, wenn du eine HTTPS-URL klonst. Git erfordert nicht, dass du deine Anmeldeinformationen erneut in die Befehlszeile eingibst, es sei denn, du änderst deine Anmeldeinformationen.

Weitere Optionen zum Speichern deiner Anmeldeinformationen unter Linux findest du unter [Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) in Pro Git.

{% endlinux %}

<br>

Weitere Informationen oder Hinweise zum Melden von Problemen mit GCM findest du in der offiziellen GCM-Dokumentation unter "[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)".
