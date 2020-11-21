---
title: GitHub Desktopのインストール方法
shortTitle: インストール
intro: サポートされている Windows または macOS オペレーティングシステムに GitHub デスクトップをインストールできます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_desktop %} のインストールについて

サポートされているオペレーティングシステムに {% data variables.product.prodname_desktop %} をインストールできます。 {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にアカウントをお持ちの場合は、アカウントを {% data variables.product.prodname_desktop %} に接続できます。 アカウントの作成の詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account/)」を参照するか、{% data variables.product.prodname_enterprise %} のサイト管理者にお問い合わせください。

{% windows %}

If you are a network administrator, you can deploy {% data variables.product.prodname_desktop %} to computers running Windows on an Active Directory-managed network by using the Windows Installer package file (`.msi`) with Group Policy or another remote installation system.

The Windows Installer package extracts the standalone installer (`.exe`) and configures Windows to install {% data variables.product.prodname_desktop %} the next time a user signs in to their workstation. ユーザがユーザディレクトリに{% data variables.product.prodname_desktop %}をインストールするには、権限が必要です。

If a user runs the Windows Installer package for {% data variables.product.prodname_desktop %} directly, to complete the installation, the user must sign out of their workstation and then sign back in.

{% endwindows %}

### {% data variables.product.prodname_desktop %}のダウンロード、およびインストール方法

{% mac %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.mac-osx-versions %}にインストールできます。

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for macOS**. ![The Download for macOS button](/assets/images/help/desktop/download-for-mac.png)
3. お使いのコンピュータの`Downloads`フォルダで、**{% data variables.product.prodname_desktop %}** zipファイルをダブルクリックします。 ![The GitHubDesktop.zip file](/assets/images/help/desktop/mac-zipfile.png)
4. ファイルが解凍された後、**{% data variables.product.prodname_desktop %}**をダブルクリックします。
5. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endmac %}

{% windows %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.windows-versions %}にインストールできます。

{% warning %}

**警告**：{% data variables.product.prodname_desktop %}を使用するには64ビットのオペレーティングシステムが必要です。

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Click **Download for Windows**. ![The Download for Windows button](/assets/images/help/desktop/download-for-windows.png)
3. In your computer's `Downloads` folder, double-click the **{% data variables.product.prodname_desktop %}** setup file. ![The GitHubDesktopSetup file](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} will launch after installation is complete.

{% endwindows %}
