---
title: Git に GitHub の認証情報をキャッシュする
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: '[HTTPS を使用して {% data variables.product.product_name %} リポジトリをクローン](/github/getting-started-with-github/about-remote-repositories)する場合は、{% data variables.product.prodname_cli %} または Git Credential Manager (GCM) を使用して資格情報を記憶することをお勧めします。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112069'
---
{% tip %}

**ヒント**: SSH で {% data variables.product.product_name %} リポジトリをクローンすると、他の資格情報ではなく SSH キーで認証することができます。 SSH 接続の設定については、[SSH キーの生成](/articles/generating-an-ssh-key)に関するページを参照してください。

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} は、Git 操作の優先プロトコルとして `HTTPS` を選択すると自動的に Git 資格情報を格納し、{% data variables.product.product_name %} 資格情報で Git に対して認証するかどうかを尋ねるプロンプトに対して "はい" と答えます。

1. macOS、Windows、または Linux に {% data variables.product.prodname_cli %} を[インストール](https://github.com/cli/cli#installation)します。
2. コマンド ラインで、「`gh auth login`」と入力し、プロンプトに従います。
   - Git 操作の優先プロトコルの入力を求められたら、`HTTPS` を選択します。
   - {% data variables.product.product_name %} 資格情報を使用して Git に対する認証を行うかどうかを確認するメッセージが表示されたら、「`Y`」を入力します。

{% data variables.product.prodname_cli %} を使用した認証の詳細については、「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。

## Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) は、資格情報を安全に保存し、HTTPS 経由で GitHub に接続するもう 1 つの方法です。 GCM を使用すると、2FA (2 要素認証) を含む認証をユーザーの代わりに GCM が管理するため、手動で [PAT を作成して格納する](/github/authenticating-to-github/creating-a-personal-access-token)必要はありません。

{% mac %}

1. [Homebrew](https://brew.sh/) を使用して Git をインストールします。
  ```shell
  $ brew install git
  ```

2. Homebrew を使用して GCM をインストールします。
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  MacOS の場合は、GCM によって Git が自動的に構成されるため、`git config` を実行する必要はありません。

{% data reusables.gcm-core.next-time-you-clone %}

認証に成功すると、認証情報は macOS のキーチェーンに保存され、HTTPS URL をクローンするたびに使用されます。 Git では、資格情報を変更しない限り、コマンド ラインに資格情報を再入力する必要はありません。

{% endmac %}

{% windows %}

1. GCM を含む Git for Windows をインストールします。 詳細については、[リリース ページ](https://github.com/git-for-windows/git/releases/latest)の「[Git for Windows のリリース](https://github.com/git-for-windows/git/releases/latest)」を参照してください。

常に最新バージョンをインストールすることをお勧めします。 少なくとも、バージョン 2.29 以降をインストールします。これは、GitHub の OAuth サポートを提供する最初のバージョンです。

{% data reusables.gcm-core.next-time-you-clone %}

認証に成功すると、資格情報は Windows の資格情報マネージャーに保存され、HTTPS URL を複製するたびに使用されます。 Git では、資格情報を変更しない限り、コマンド ラインに資格情報を再入力する必要はありません。

<br>

{% warning %}

**警告:** 以前のバージョンの Git for Windows には、Windows 用の Git Credential Manager が付属しています。 この古い製品はサポートが終了しており、OAuth を使用して GitHub に接続することはできません。 [Git for Windows の最新バージョン](https://github.com/git-for-windows/git/releases/latest)にアップグレードすることをお勧めします。

{% endwarning %}

{% warning %}

**警告:** Windows の資格情報マネージャーで正しくない、または期限切れの資格情報をキャッシュした場合、Git は {% data variables.product.product_name %} にアクセスできません。 キャッシュされた資格情報をリセットして、Git から資格情報の入力を求めるダイアログが表示されるようにするには、資格情報マネージャーにアクセスします (Windows の [コントロール パネル] の [ユーザー アカウント] > [資格情報マネージャー])。 {% data variables.product.product_name %} エントリを探して削除します。 

{% endwarning %}

{% endwindows %}

{% linux %}

Linux の場合は、Git と GCM をインストールし、GCM を使用するように Git を構成します。

1. ディストリビューションのパッケージ システムから Git をインストールします。 手順は、実行している Linux のフレーバーによって異なります。

2. GCM をインストールします。 実行している Linux のフレーバーによって異なるため、[GCM リポジトリの手順](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions)を参照してください。

3. GCM を使用するように Git を構成します。 選択できるバッキング ストアがいくつかあるため、GCM のドキュメントを参照してセットアップを完了してください。 詳細については、[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)に関するページを参照してください。

{% data reusables.gcm-core.next-time-you-clone %}

認証に成功すると、認証情報はお使いのシステムに保存され、HTTPS URL をクローンするたびに使用されます。 Git では、資格情報を変更しない限り、コマンド ラインに資格情報を再入力する必要はありません。

Linux に資格情報を格納するためのその他のオプションについては、Pro Git の「[資格情報のストレージ](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)」を参照してください。

{% endlinux %}

<br>

GCM の詳細や問題の報告については、「[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)」の公式 GCM ドキュメントを参照してください。
