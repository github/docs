---
title: アカウントの GitHub Codespaces をパーソナライズする
shortTitle: Personalize your codespaces
intro: '{% data variables.product.product_name %} の `dotfiles` リポジトリを使用するか、Settings Sync を使用して、{% data variables.product.prodname_github_codespaces %} をパーソナライズできます。'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160259'
---
## {% data variables.product.prodname_codespaces %} のパーソナライズについて

開発環境を使用する場合、設定とツールを好みやワークフローに合わせてカスタマイズすることが重要です。 {% data variables.product.prodname_github_codespaces %} では、Codespaces をパーソナライズするときに使用できる方法は主に 2 つあります。

- [設定の同期](#settings-sync) - デスクトップ アプリケーションと {% data variables.product.prodname_vscode_shortname %} Web クライアントの間で {% data variables.product.prodname_vscode %} 設定を同期できます。
- [ドットファイル](#dotfiles) - `dotfiles` リポジトリを使用して、スクリプト、シェル設定、およびその他の構成を指定できます。

{% data variables.product.prodname_github_codespaces %} で行ったパーソナル化は、作成するすべての codespace に適用されます。

プロジェクトのメンテナは、ユーザが作成したリポジトリのすべての codespace に適用されるデフォルト設定を定義することもできます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

## Settings Sync

"設定の同期" を使用すると、設定、キーボードショートカット、スニペット、機能拡張、UI の状態などの設定をマシンと {% data variables.product.prodname_vscode_shortname %} のインスタンスとの間で同期できます。

"設定の同期" を有効にするには、{% data variables.product.prodname_vscode %} のアクティビティ バーの左下隅にある {% octicon "gear" aria-label="The gear icon" %} を選び、 **[設定の同期をオンにする...]** をクリックします。 ダイアログ ボックスで同期する設定を選択します。

![管理メニューの Setting Sync オプション](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

詳しくは、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[同期の設定](https://code.visualstudio.com/docs/editor/settings-sync)」ガイドをご覧ください。

## Dotfiles

ドットファイルは、`.` で始まる Unix ライクなシステム上のファイルとフォルダーであり、システム上のアプリケーションとシェルの設定を制御します。 ドットファイルは、{% data variables.product.prodname_dotcom %} のリポジトリに保存して管理できます。 ドットファイル リポジトリに含める内容に関するアドバイスとチュートリアルについては、[GitHub does dotfiles](https://dotfiles.github.io/) を参照してください。

ドットファイル リポジトリには、シェルのエイリアスと設定、インストールするツール、またはその他の codespace のパーソナル化を含めることができます。

[個人の {% data variables.product.prodname_github_codespaces %} 設定](https://github.com/settings/codespaces)でそのリポジトリを選ぶことで、所有している任意のリポジトリのドットファイルを使用するように {% data variables.product.prodname_github_codespaces %} を構成できます。

新しい codespace を作成すると、{% data variables.product.prodname_dotcom %} は選択したドットファイルのリポジトリを codespace 環境にクローンし、次のいずれかのファイルを探して環境を設定します。

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

これらのファイルが見つからない場合は、`.` で始まる選択したドットファイル リポジトリ内のすべてのファイルまたはフォルダーが codespace の `~` または `$HOME` ディレクトリにシンボリック リンクされます。

選択したドットファイル リポジトリへの変更は、新しい codespace にのみそれぞれ適用され、既存の codespace には影響しません。

{% note %}

**注:** 現在、{% data variables.product.prodname_codespaces %} は、`dotfiles` リポジトリを使用した {% data variables.product.prodname_vscode_shortname %} に対するユーザー スコープの設定のパーソナライズをサポートしていません。 プロジェクトのリポジトリ内の特定のプロジェクトに対して、既定の "ワークスペース" と "リモート [Codespaces] " 設定を設定できます。 詳細については、[開発コンテナーの概要](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)に関するページをご覧ください。

{% endnote %}

### {% data variables.product.prodname_codespaces %} のドットファイル リポジトリを有効にする

選んだドットファイル リポジトリを使用して、{% data variables.product.prodname_github_codespaces %} 環境をパーソナライズできます。 ドットファイル リポジトリを選択したら、スクリプト、基本設定、構成を追加できます。 その後、個人の {% data variables.product.prodname_github_codespaces %} 設定ページからドットファイルを有効にする必要があります。

{% warning %}

**警告:** ドットファイルには、予期しないコードや悪意のあるコードが含まれている可能性がある任意のスクリプトを実行する機能があります。 ドットファイル リポジトリをインストールする前に、スクリプトをチェックして、予期しないアクションが実行されないようにすることをお勧めします。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. "ドットファイル" の下で **[ドットファイルを自動的にインストールする]** を選ぶと、{% data variables.product.prodname_github_codespaces %} によって、作成したすべての新しい codespace にドットファイルが自動的にインストールされます。
   ![ドットファイルをインストールする](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. インストールするドットファイルをリポジトリから選択します。
   ![ドットファイル リポジトリを選択する](/assets/images/help/codespaces/select-dotfiles-repo.png)

ドットファイル リポジトリにスクリプト、基本設定、構成ファイルをさらに追加したり、必要に応じて既存のファイルを編集したりできます。 設定の変更は、新しい codespace によってのみ取得されます。

codespace でドットファイルから構成設定を取得できない場合は、「[{% data variables.product.prodname_github_codespaces %} のドットファイルのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)」をご覧ください。

## その他の使用可能な設定

[個人用設定](https://github.com/settings/codespaces)の追加オプションを使用して、{% data variables.product.prodname_github_codespaces %} をカスタマイズすることもできます。

- GPG 検証を有効にするには、「[{% data variables.product.prodname_github_codespaces %} の GPG 検証を管理する](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)」を参照してください。
- エディターを設定するには、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」を参照してください。
- Codespace が未使用の状態となって自動的に停止するまでの期間を確認するには、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」をご覧ください。
- 未使用の codespace を保持する期間を設定するには、「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」を参照してください。
- 既定のリージョンを設定するには、「[{% data variables.product.prodname_github_codespaces %} の既定のリージョンを設定する](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)」を参照してください。

## 参考資料

* 「[新しいリポジトリの作成](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」
* [{% data variables.product.prodname_github_codespaces %} の詳細](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)
