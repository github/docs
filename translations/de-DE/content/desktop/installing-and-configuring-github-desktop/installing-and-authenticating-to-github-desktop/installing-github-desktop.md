---
title: GitHub Desktop installieren
shortTitle: Installation
intro: You can install GitHub Desktop on supported Windows or macOS operating systems.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---

### About {% data variables.product.prodname_desktop %} installation

You can install {% data variables.product.prodname_desktop %} on supported operating systems, which currently include {% data variables.desktop.mac-osx-versions %} and {% data variables.desktop.windows-versions %}. If you have an account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you can connect your account to {% data variables.product.prodname_desktop %}. For more information about creating an account, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account/)" or contact your {% data variables.product.prodname_enterprise %} site administrator.

{% windows %}

If you are a network administrator, you can deploy {% data variables.product.prodname_desktop %} to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install {% data variables.product.prodname_desktop %} the next time a user signs in to their workstation. Benutzer müssen berechtigt sein, {% data variables.product.prodname_desktop %} in ihrem Benutzerverzeichnis zu installieren.

If a user runs the Windows Installer package for {% data variables.product.prodname_desktop %} directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

### {% data variables.product.prodname_desktop %} herunterladen und installieren

{% mac %}

Sie können {% data variables.product.prodname_desktop %} auf {% data variables.desktop.mac-osx-versions %} installieren.

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for macOS**. ![The Download for macOS button](/assets/images/help/desktop/download-for-mac.png)
3. Doppelklicken Sie im Ordner `Downloads` Ihres Computers auf die ZIP-Datei **{% data variables.product.prodname_desktop %}**. ![The GitHubDesktop.zip file](/assets/images/help/desktop/mac-zipfile.png)
4. Doppelklicken Sie nach dem Entzippen der Datei auf **{% data variables.product.prodname_desktop %}**.
5. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endmac %}

{% windows %}

Sie können {% data variables.product.prodname_desktop %} auf {% data variables.desktop.windows-versions %} installieren.

{% warning %}

**Warnung**: Sie müssen über ein 64-Bit-Betriebssystem verfügen, um {% data variables.product.prodname_desktop %} ausführen zu können.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for Windows**. ![The Download for Windows button](/assets/images/help/desktop/download-for-windows.png)
3. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** setup file. ![The GitHubDesktopSetup file](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endwindows %}
