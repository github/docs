---
title: GitHub Desktopのインストール方法
shortTitle: インストール
intro: サポートされている Windows または macOS オペレーティングシステムに GitHub デスクトップをインストールできます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---
### {% data variables.product.prodname_desktop %} のインストールについて

サポートされているオペレーティングシステムに {% data variables.product.prodname_desktop %} をインストールできます。 {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にアカウントをお持ちの場合は、アカウントを {% data variables.product.prodname_desktop %} に接続できます。 アカウントの作成の詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account/)」を参照するか、{% data variables.product.prodname_enterprise %} のサイト管理者にお問い合わせください。

{% windows %}

ネットワーク管理者は、グループポリシーまたは別のリモートインストールシステムで Windows インストーラーパッケージファイル (`.msi`) を使用して、Active Directory 管理のネットワーク上でWindowsを実行しているコンピューターに {% data variables.product.prodname_desktop %} を展開できます。

Windows インストーラーパッケージは、単独のインストーラー (`.exe`) を抽出し、ユーザが次にワークステーションにサインインしたときに {% data variables.product.prodname_desktop %} をインストールされるように Windows を設定します。 ユーザがユーザディレクトリに{% data variables.product.prodname_desktop %}をインストールするには、権限が必要です。

ユーザが {% data variables.product.prodname_desktop %} の Windows インストーラーパッケージを直接実行する場合、インストールを完了するには、ワークステーションからサインアウトし再度サインインする必要があります。

{% endwindows %}

### {% data variables.product.prodname_desktop %}のダウンロード、およびインストール方法

{% mac %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.mac-osx-versions %}にインストールできます。

{% data reusables.desktop.download-desktop-page %}
2. [**Download for macOS**] をクリックします。 ![[Download for macOS] ボタン](/assets/images/help/desktop/download-for-mac.png)
3. お使いのコンピュータの`Downloads`フォルダで、**{% data variables.product.prodname_desktop %}** zipファイルをダブルクリックします。 ![[GitHubDesktop.zip] ファイル](/assets/images/help/desktop/mac-zipfile.png)
4. ファイルが解凍された後、**{% data variables.product.prodname_desktop %}**をダブルクリックします。
5. インストールが完了すると、{% data variables.product.prodname_desktop %} が起動します。

{% endmac %}

{% windows %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.windows-versions %}にインストールできます。

{% warning %}

**警告**：{% data variables.product.prodname_desktop %}を使用するには64ビットのオペレーティングシステムが必要です。

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. [**Download for Windows**] をクリックします。 ![[Download for Windows] ボタン](/assets/images/help/desktop/download-for-windows.png)
3. コンピューターの [`Downloads`] フォルダで、[**{% data variables.product.prodname_desktop %}**] セットアップファイルをダブルクリックします。 ![[GitHubDesktopSetup] ファイル](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. インストールが完了すると、{% data variables.product.prodname_desktop %} が起動します。

{% endwindows %}
