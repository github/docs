---
title: GitHub Desktopのインストール方法
shortTitle: インストール
intro: You can install GitHub Desktop on supported Windows or macOS operating systems.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---

### About {{ site.data.variables.product.prodname_desktop }} installation

You can install {{ site.data.variables.product.prodname_desktop }} on supported operating systems. If you have an account on {{ site.data.variables.product.prodname_dotcom }} or {{ site.data.variables.product.prodname_enterprise }}, you can connect your account to {{ site.data.variables.product.prodname_desktop }}. For more information about creating an account, see "[Signing up for a new {{ site.data.variables.product.prodname_dotcom }} account](/articles/signing-up-for-a-new-github-account/)" or contact your {{ site.data.variables.product.prodname_enterprise }} site administrator.

{% windows %}

If you are a network administrator, you can deploy {{ site.data.variables.product.prodname_desktop }} to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install {{ site.data.variables.product.prodname_desktop }} the next time a user signs in to their workstation. ユーザがユーザディレクトリに{{ site.data.variables.product.prodname_desktop }}をインストールするには、権限が必要です。

If a user runs the Windows Installer package for {{ site.data.variables.product.prodname_desktop }} directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

### {{ site.data.variables.product.prodname_desktop }}のダウンロード、およびインストール方法

{% mac %}

{{ site.data.variables.product.prodname_desktop }}は、{{ site.data.variables.desktop.mac-osx-versions }}にインストールできます。

{{ site.data.reusables.desktop.download-desktop-page }}
2. Click **Download for macOS**. ![The Download for macOS button](/assets/images/help/desktop/download-for-mac.png)
3. お使いのコンピュータの`Downloads`フォルダで、**{{ site.data.variables.product.prodname_desktop }}** zipファイルをダブルクリックします。 ![The GitHubDesktop.zip file](/assets/images/help/desktop/mac-zipfile.png)
4. ファイルが解凍された後、**{{ site.data.variables.product.prodname_desktop }}**をダブルクリックします。
5. {{ site.data.variables.product.prodname_desktop }} will launch after installation is complete.

{% endmac %}

{% windows %}

{{ site.data.variables.product.prodname_desktop }}は、{{ site.data.variables.desktop.windows-versions }}にインストールできます。

{% warning %}

**警告**：{{ site.data.variables.product.prodname_desktop }}を使用するには64ビットのオペレーティングシステムが必要です。

{% endwarning %}

{{ site.data.reusables.desktop.download-desktop-page }}
2. Click **Download for Windows**. ![The Download for Windows button](/assets/images/help/desktop/download-for-windows.png)
3. In your computer's `Downloads` folder, double-click the **{{ site.data.variables.product.prodname_desktop }}** setup file. ![The GitHubDesktopSetup file](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {{ site.data.variables.product.prodname_desktop }} will launch after installation is complete.

{% endwindows %}
