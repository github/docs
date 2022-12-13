---
title: アカウントの Codespaces をパーソナライズする
shortTitle: Personalize your codespaces
intro: '{% data variables.product.product_name %} の `dotfiles` リポジトリか Settings Sync を使用して、{% data variables.product.prodname_codespaces %} をパーソナライズできます。'
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681350"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} のパーソナライズについて

開発環境を使用する場合、設定とツールを好みやワークフローに合わせてカスタマイズすることが重要です。 {% data variables.product.prodname_codespaces %} では、Codespaces をパーソナライズするときに使用できる方法は主に 2 つあります。

- [設定の同期](#settings-sync) - {% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_vscode %} の他のインスタンス間で {% data variables.product.prodname_vscode %} 設定を使用および共有できます。
- [ドットファイル](#dotfiles) - `dotfiles` リポジトリを使用して、スクリプト、シェル設定、およびその他の構成を指定できます。

{% data variables.product.prodname_codespaces %} で行ったパーソナライズは、作成するすべての codespace に適用されます。

プロジェクトのメンテナは、ユーザが作成したリポジトリのすべての codespace に適用されるデフォルト設定を定義することもできます。 詳細については、[プロジェクト用の {% data variables.product.prodname_codespaces %} の構成](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)に関する記事をご覧ください。

## <a name="settings-sync"></a>Settings Sync

Settings Sync を使用すると、設定、キーボードショートカット、スニペット、機能拡張、UI の状態などの設定をマシンと {% data variables.product.prodname_vscode %} のインスタンス間で共有できます。

設定の同期を有効にするには、アクティビティ バーの左下隅にある {% octicon "gear" aria-label="The gear icon" %} を選択し、 **[設定の同期をオンにする...]** をクリックします。 ダイアログ ボックスで同期する設定を選択します。

![管理メニューの Setting Sync オプション](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

詳細については、{% data variables.product.prodname_vscode %} ドキュメントの[同期の設定](https://code.visualstudio.com/docs/editor/settings-sync)に関するガイドを参照してください。

## <a name="dotfiles"></a>Dotfiles

ドットファイルは、`.` で始まる Unix ライクなシステム上のファイルとフォルダーであり、システム上のアプリケーションとシェルの設定を制御します。 ドットファイルは、{% data variables.product.prodname_dotcom %} のリポジトリに保存して管理できます。 ドットファイル リポジトリに含める内容に関するアドバイスとチュートリアルについては、[GitHub does dotfiles](https://dotfiles.github.io/) を参照してください。

ドットファイル リポジトリには、シェルのエイリアスと設定、インストールするツール、またはその他の codespace のパーソナル化を含めることができます。

[個人の {% data variables.product.prodname_codespaces %} 設定](https://github.com/settings/codespaces)でそのリポジトリを選択することで、所有している任意のリポジトリのドットファイルを使用するように {% data variables.product.prodname_codespaces %} を構成できます。

新しい codespace を作成すると、{% data variables.product.prodname_dotcom %} は選択したリポジトリを codespace 環境に複製し、次のいずれかのファイルを探して環境をセットアップします。

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

**注:** 現在、{% data variables.product.prodname_codespaces %} は、`dotfiles` リポジトリを使用した {% data variables.product.prodname_vscode %} エディターの _ユーザー_ 設定のパーソナライズをサポートしていません。 プロジェクトのリポジトリ内の特定のプロジェクトに対して、既定の "_ワークスペース_" と "_リモート [Codespaces]_ " 設定を設定できます。 詳細については、[開発コンテナーの概要](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)に関するページをご覧ください。

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} のドットファイル リポジトリを有効にする

選択したドットファイル リポジトリを使用して、{% data variables.product.prodname_codespaces %} 環境をパーソナライズできます。 ドットファイル リポジトリを選択したら、スクリプト、基本設定、構成を追加できます。 その後、個人の {% data variables.product.prodname_codespaces %} 設定ページからドットファイルを有効にする必要があります。

{% warning %}

**警告:** ドットファイルには、予期しないコードや悪意のあるコードが含まれている可能性がある任意のスクリプトを実行する機能があります。 ドットファイル リポジトリをインストールする前に、スクリプトをチェックして、予期しないアクションが実行されないようにすることをお勧めします。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [ドットファイル] の下で **[ドットファイルを自動的にインストールする]** を選択すると、{% data variables.product.prodname_codespaces %} によって、作成したすべての新しい codespace にドットファイルが自動的にインストールされます。
   ![ドットファイルをインストールする](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. インストールするドットファイルをリポジトリから選択します。
   ![ドットファイル リポジトリを選択する](/assets/images/help/codespaces/select-dotfiles-repo.png)

ドットファイル リポジトリにスクリプト、基本設定、構成ファイルをさらに追加したり、必要に応じて既存のファイルを編集したりできます。 設定の変更は、新しい codespace によってのみ取得されます。

codespace でドットファイルから構成設定を取得できない場合は、「[{% data variables.product.prodname_codespaces %} のドットファイルのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)」を参照してください。

## <a name="other-available-settings"></a>その他の使用可能な設定

追加の [{% data variables.product.prodname_codespaces %} 設定](https://github.com/settings/codespaces)を使用して、{% data variables.product.prodname_codespaces %} をパーソナライズすることもできます。

- 既定のリージョンを設定するには、「[{% data variables.product.prodname_codespaces %} の既定のリージョンの設定](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)」を参照してください。
- エディターを設定するには、「[{% data variables.product.prodname_codespaces %} の既定のエディターの設定](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)」を参照してください。
- 暗号化したシークレットを追加するには、「[{% data variables.product.prodname_codespaces %} の暗号化されたシークレットを管理する](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)」を参照してください。
- GPG 検証を有効にするには、「[{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)」を参照してください。
- codespace が他のリポジトリにアクセスできるようにするには、「[{% data variables.product.prodname_codespaces %} のアクセスとセキュリティを管理する](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)」を参照してください。

## <a name="further-reading"></a>参考資料

* 「[新しいリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」
