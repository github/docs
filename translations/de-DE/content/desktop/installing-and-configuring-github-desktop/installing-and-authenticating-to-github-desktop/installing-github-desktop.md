---
title: GitHub Desktop installieren
shortTitle: Installation
intro: Du kannst GitHub Desktop auf den unterstützten Betriebssystemen von Windows und macOS installieren.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882779'
---
## Informationen zur {% data variables.product.prodname_desktop %}-Installation

Du kannst {% data variables.product.prodname_desktop %} auf unterstützten Betriebssystemen installieren, derzeit {% data variables.desktop.mac-osx-versions %} und {% data variables.desktop.windows-versions %}. Wenn du über ein Konto auf {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} verfügst, kannst du dein Konto mit {% data variables.product.prodname_desktop %} verbinden. Weitere Informationen zum Erstellen eines Kontos findest du unter [Registrieren für ein neues {% data variables.product.prodname_dotcom %}-Konto](/articles/signing-up-for-a-new-github-account/), oder wende dich an den {% data variables.product.prodname_enterprise %}-Websiteadministrator.

{% windows %}

Als Netzwerkadministrator kannst du die Windows Installer-Paketdatei (`.msi`) mit Gruppenrichtlinie oder ein anderes Remote-Installationssystem verwenden, um {% data variables.product.prodname_desktop %} auf Computern bereitzustellen, die Windows auf einem mit Active Directory verwalteten Netzwerk ausführen.

Das Windows Installer-Paket extrahiert den eigenständigen Installer (`.exe`) und konfiguriert Windows so, dass {% data variables.product.prodname_desktop %} installiert wird, wenn sich ein Benutzer das nächste Mal bei seiner Arbeitsstation anmeldet. Benutzer müssen berechtigt sein, {% data variables.product.prodname_desktop %} in ihrem Benutzerverzeichnis zu installieren.

Wenn ein Benutzer das Windows Installer-Paket für {% data variables.product.prodname_desktop %} direkt ausführt, um die Installation durchzuführen, muss sich der Benutzer bei seiner Arbeitsstation abmelden und sich dann wieder anmelden.

{% endwindows %}

## {% data variables.product.prodname_desktop %} herunterladen und installieren

{% mac %}

Du kannst {% data variables.product.prodname_desktop %} auf {% data variables.desktop.mac-osx-versions %} installieren.

{% data reusables.desktop.download-desktop-page %}
2. Klicke auf **Download für macOS**.
  ![Schaltfläche „Download für macOS“](/assets/images/help/desktop/download-for-mac.png)
3. Doppelklicke auf deinem Computer im Ordner `Downloads` auf die **{% data variables.product.prodname_desktop %}**-ZIP-Datei.
  ![Die Datei „GitHubDesktop.zip“](/assets/images/help/desktop/mac-zipfile.png)
4. Doppelklicke nach dem Entzippen der Datei auf **{% data variables.product.prodname_desktop %}**.
5. {% data variables.product.prodname_desktop %} wird nach Abschluss der Installation gestartet.

{% endmac %}

{% windows %}

Du kannst {% data variables.product.prodname_desktop %} auf {% data variables.desktop.windows-versions %} installieren.

{% warning %}

**Warnung**: Du musst über ein 64-Bit-Betriebssystem verfügen, um {% data variables.product.prodname_desktop %} ausführen zu können.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Klicke auf **Download für Windows**.
  ![Schaltfläche „Download für Windows“](/assets/images/help/desktop/download-for-windows.png)
3. Doppelklicke auf deinem Computer im Ordner `Downloads` auf die **{% data variables.product.prodname_desktop %}**-Setupdatei.
  ![Die GitHubDesktopSetup-Datei](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} wird nach Abschluss der Installation gestartet.

{% endwindows %}
