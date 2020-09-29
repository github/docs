---
title: Installing GitHub Desktop
shortTitle: Установка
intro: You can install GitHub Desktop on supported Windows or macOS operating systems.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---

### About {% data variables.product.prodname_desktop %} installation

You can install {% data variables.product.prodname_desktop %} on supported operating systems. If you have an account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you can connect your account to {% data variables.product.prodname_desktop %}. For more information about creating an account, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account/)" or contact your {% data variables.product.prodname_enterprise %} site administrator.

{% windows %}

If you are a network administrator, you can deploy {% data variables.product.prodname_desktop %} to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install {% data variables.product.prodname_desktop %} the next time a user signs in to their workstation. Users must have permissions to install {% data variables.product.prodname_desktop %} in their user directory.

If a user runs the Windows Installer package for {% data variables.product.prodname_desktop %} directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

### Downloading and installing {% data variables.product.prodname_desktop %}

{% mac %}

You can install {% data variables.product.prodname_desktop %} on {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for macOS**. ![The Download for macOS button](/assets/images/help/desktop/download-for-mac.png)
3. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** zip file. ![The GitHubDesktop.zip file](/assets/images/help/desktop/mac-zipfile.png)
4. After the file has been unzipped, double-click **{% data variables.product.prodname_desktop %}**.
5. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endmac %}

{% windows %}

You can install {% data variables.product.prodname_desktop %} on {% data variables.desktop.windows-versions %}.

{% warning %}

**Warning**: You must have a 64-bit operating system to run {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for Windows**. ![The Download for Windows button](/assets/images/help/desktop/download-for-windows.png)
3. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** setup file. ![The GitHubDesktopSetup file](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endwindows %}
