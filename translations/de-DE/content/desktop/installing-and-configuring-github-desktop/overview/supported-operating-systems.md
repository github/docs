---
title: Unterstützte Betriebssysteme
intro: 'Du kannst {% data variables.product.prodname_desktop %} unter jedem unterstützten Betriebssystem verwenden.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105232'
---
## Informationen zu unterstützten Betriebssystemen

Die folgenden Betriebssysteme werden für {% data variables.product.prodname_desktop %} unterstützt:
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Du musst über ein 64-Bit-Betriebssystem verfügen, um {% data variables.product.prodname_desktop %} ausführen zu können.

## Behandeln von Problemen unter macOS
Hier findest du einige Lösungen für den Fall, dass unter macOS Probleme bei der Verwendung von {% data variables.product.prodname_desktop %} auftreten. Weitere Informationen findest du unter [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### Fehler `The username or passphrase you entered is not correct` nach Anmeldung bei deinem Konto

Dieser Fehler kann auftreten, wenn {% data variables.product.prodname_desktop %} nicht auf deine gespeicherten Anmeldeinformationen in Keychain zugreifen kann.

Führe zur Behandlung dieses Fehlers die folgenden Schritte aus:

1. Öffne die App „Keychain Access“.
2. Klicke mit der rechten Maustaste auf **login**, und klicke anschließend auf **Keychain „login“ sperren**.
  ![Die Option zum Sperren der Keychain „login“](/assets/images/help/desktop/mac-lock-keychain.png)
3. Klicke mit der rechten Maustaste auf **login**, und klicke anschließend auf **Keychain „login“ entsperren**. Folge den Anweisungen auf dem Bildschirm, um das Entsperren der Keychain „login“ abzuschließen.
  ![Die Option zum Entsperren der Keychain „login“](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Authentifiziere dein Konto erneut für {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %}.

### Fehler `Could not create temporary directory: Permission denied` nach Überprüfung auf Updates

Dieser Fehler kann durch fehlende Berechtigungen für das Verzeichnis `~/Library/Caches/com.github.GitHubClient.ShipIt` verursacht werden. {% data variables.product.prodname_desktop %} verwendet dieses Verzeichnis zum Erstellen und Entpacken temporärer Dateien für die Anwendungsaktualisierung.

Führe zur Behandlung dieses Fehlers die folgenden Schritte aus:

1. Schließe {% data variables.product.prodname_desktop %}.
2. Öffne den Finder, und navigiere zu `~/Library/Caches/`.
3. Klicke mit der rechten Maustaste auf `com.github.GitHubClient.ShipIt`, und klicke anschließend auf **Informationen abrufen**.
4. Klicke auf den Pfeil links neben „Freigabe und Berechtigungen“.
5. Wenn rechts neben deinem Benutzerkonto nicht die Berechtigung zum Lesen und Schreiben angezeigt wird, klicke auf den Text und anschließend auf **Lesen und Schreiben**.
  ![Die Optionen für Freigabe und Berechtigungen](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Öffne {% data variables.product.prodname_desktop %}, und überprüfe, ob Updates vorhanden sind.

## Behandeln von Problemen unter Windows
Hier findest du einige Lösungen für den Fall, dass unter Windows Probleme bei der Verwendung von {% data variables.product.prodname_desktop %} auftreten. Weitere Informationen findest du unter [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` Fehler

Dieser Fehler kann auftreten, wenn du {% data variables.product.prodname_desktop %} in einem Unternehmensnetzwerk verwendest, in dem Windows den Sperrstatus eines Zertifikats nicht überprüfen kann.

Wende dich zur Problembehandlung an deinen Systemadministrator.

### Fehler `git clone failed` beim Klonen eines mit Ordnerumleitung konfigurierten Repositorys

Mit Ordnerumleitung konfigurierte Repositorys werden von {% data variables.product.prodname_desktop %} nicht unterstützt.

### `cygheap base mismatch detected` Fehler

Dieser Fehler kann auftreten, wenn die obligatorische zufällige Anordnung des Adressraumlayouts (Address Space Layout Randomization, ASLR) aktiviert ist. Das Aktivieren der obligatorischen ASLR wirkt sich auf die MSYS2-Kernbibliothek aus, die von {% data variables.product.prodname_desktop %} zum Emulieren von Prozessforking verwendet wird.

Deaktiviere zur Behandlung dieses Fehlers entweder die obligatorische ASLR, oder lasse explizit alle ausführbaren Dateien unter `<Git>\usr\bin` zu, die von MSYS2 abhängig sind.
