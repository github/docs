---
title: GitHub Desktopのインストール方法
shortTitle: Installation
intro: サポートされている Windows または macOS オペレーティングシステムに GitHub デスクトップをインストールできます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882780'
---
## {% data variables.product.prodname_desktop %} のインストールについて

現在、{% data variables.desktop.mac-osx-versions %} と {% data variables.desktop.windows-versions %} を含む、サポートされているオペレーティング システムに {% data variables.product.prodname_desktop %} をインストールできます。 {% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にアカウントをお持ちの場合は、アカウントを {% data variables.product.prodname_desktop %} に接続できます。 アカウントの作成の詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account/)」を参照するか、{% data variables.product.prodname_enterprise %} のサイト管理者にお問い合わせください。

{% windows %}

ネットワーク管理者は、グループ ポリシーまたは別のリモート インストール システムで Windows インストーラー パッケージ ファイル (`.msi`) を使用して、Active Directory 管理のネットワーク上で Windows を実行しているコンピューターに {% data variables.product.prodname_desktop %} を展開できます。

Windows インストーラー パッケージを使用すると、スタンドアロンのインストーラー (`.exe`) が抽出され、ユーザーが次にワークステーションにサインインしたときに {% data variables.product.prodname_desktop %} をインストールするように Windows が設定されます。 ユーザがユーザディレクトリに{% data variables.product.prodname_desktop %}をインストールするには、権限が必要です。

ユーザが {% data variables.product.prodname_desktop %} の Windows インストーラーパッケージを直接実行する場合、インストールを完了するには、ワークステーションからサインアウトし再度サインインする必要があります。

{% endwindows %}

## {% data variables.product.prodname_desktop %}のダウンロード、およびインストール方法

{% mac %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.mac-osx-versions %}にインストールできます。

{% data reusables.desktop.download-desktop-page %}
2. **[ダウンロード (macOS)]** をクリックします。
  ![[ダウンロード (macOS)] ボタン](/assets/images/help/desktop/download-for-mac.png)
3. ご利用のコンピューターの `Downloads` フォルダーで、 **{% data variables.product.prodname_desktop %}** ZIP ファイルをダブルクリックします。
  ![GitHubDesktop.zip ファイル](/assets/images/help/desktop/mac-zipfile.png)
4. ファイルが解凍されたら、 **{% data variables.product.prodname_desktop %}** をダブルクリックします。
5. インストールが完了すると、{% data variables.product.prodname_desktop %} が起動します。

{% endmac %}

{% windows %}

{% data variables.product.prodname_desktop %}は、{% data variables.desktop.windows-versions %}にインストールできます。

{% warning %}

**警告**: {% data variables.product.prodname_desktop %} を実行するには、64 ビットのオペレーティング システムが必要です。

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. **[ダウンロード (Windows)]** をクリックします。
  ![[ダウンロード (Windows)] ボタン](/assets/images/help/desktop/download-for-windows.png)
3. ご利用のコンピューターの `Downloads` フォルダーで、 **{% data variables.product.prodname_desktop %}** セットアップ ファイルをダブルクリックします。
  ![GitHubDesktopSetup ファイル](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. インストールが完了すると、{% data variables.product.prodname_desktop %} が起動します。

{% endwindows %}
