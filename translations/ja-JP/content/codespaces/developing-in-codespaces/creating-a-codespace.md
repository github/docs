---
title: codespace を作成する
intro: リポジトリのブランチの codespace を作成して、オンラインで開発できます。
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106734"
---
## codespace の作成について

codespace は、{% data variables.product.prodname_dotcom_the_website %}、{% data variables.product.prodname_vscode %}、または {% data variables.product.prodname_cli %} を使用して作成できます。 {% data reusables.codespaces.codespaces-are-personal %}

Codespaces はリポジトリの特定のブランチに関連付けられており、リポジトリを空にすることはできません。 リポジトリごと、さらにはブランチごとに1つ以上のcodespaceを作成できます。

codespace を作成すると、開発環境を作成して開発環境に接続するためのいくつかの手順が発生します。

- 手順 1: VM とストレージが codespace に割り当てられます。
- 手順 2: コンテナーが作成され、リポジトリが複製されます。
- 手順 3: codespace に接続できます。
- 手順 4: codespace では、作成後のセットアップが続行されます。

codespace を作成した場合に起きることの詳細については、[詳細情報](/codespaces/getting-started/deep-dive)に関するページを参照してください。

codespace のライフサイクルの詳細については、「[Codespace のライフサイクル](/codespaces/developing-in-codespaces/codespaces-lifecycle)」を参照してください。

codespace に Git フックを使用する場合は、手順 4. で [`devcontainer.json`ライフサイクル スクリプト](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) (例: `postCreateCommand`) を使用してフックを設定する必要があります。 リポジトリの複製後に codespace コンテナーが作成されるため、コンテナー イメージで構成された [Git テンプレート ディレクトリ](https://git-scm.com/docs/git-init#_template_directory) は codespace には適用されません。 代わりに、codespace の作成後にフックをインストールする必要があります。 `postCreateCommand` の使用について詳しくは、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[`devcontainer.json` リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)」を参照してください。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## {% data variables.product.prodname_github_codespaces %} へのアクセス

{% data variables.product.prodname_github_codespaces %} へのアクセスがある場合、リポジトリを表示すると、 **{% octicon "code" aria-label="The code icon" %} [コード]** ドロップダウン メニューに [Codespaces] タブが表示されます。

次の条件の下で、{% data variables.product.prodname_github_codespaces %} にアクセスできます。

次のすべてが当てはまります。
* あなたは、{% data variables.product.prodname_codespaces %} が有効になっていて、使用制限が設定されている Organization のメンバーまたは外部コラボレーターです。
* Organization の所有者から、Organization の費用で codespace を作成する許可を得ました。
* Codespace を作成する対象のリポジトリは、この Organization によって所有されています。

または、次の両方が当てはまります。
* 個々のユーザー向けの {% data variables.product.prodname_codespaces %} のベータ版に参加しています。
* Codespace を作成する対象のリポジトリを所有しているか、ご自分がメンバーまたは外部コラボレーターである Organization によってこのリポジトリが所有されています。

{% data variables.product.prodname_codespaces %} を Organization 内で使用するには、所有者または支払いマネージャーが使用制限を設定しておく必要があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces)」をご覧ください。

Organization の所有者は、Organization の費用で codespace を作成して使うことができるユーザーを指定できます。 また、Organization の所有者は、Organization が codespace の使用について請求されないようにすることもできます。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)」をご覧ください。

## codespace を作成する

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で、[Branch] ドロップダウンメニューを使用して、codespace を作成するブランチを選択します。

   ![[Branch] ドロップダウンメニュー](/assets/images/help/codespaces/branch-drop-down.png)

1. **[{% octicon "code" aria-label="The code icon" %} コード]** ボタンをクリックし、 **[Codespaces]** タブをクリックします。

   ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

   このリポジトリの codespace が課金可能な場合は、 **[<ブランチ名> で codespace を作成する]** ボタンの下に、codespace の料金を支払うユーザーを示すメッセージが表示されます。

1. 既定のオプションを使用するか、詳細オプションを構成した後に、codespace を作成します。
 
   * **既定のオプションを使用する**

      既定のオプションを使用して codespace を作成するには、 **[ブランチで codespace を作成する]** をクリックします。

      必要に応じて、 **[ブランチで codespace を作成する]** をクリックする前に、ボタンの横にある下矢印をクリックして、codespace に使用されるマシンの種類を確認できます。

      ![既定のマシンの種類を表示する](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **注**: 既定では、リポジトリに対する有効なリソースが最も少ないマシンの種類が選択されます。

      {% endnote %}

   * **構成オプション**

      別のマシンの種類や特定の `devcontainer.json` ファイルなど、codespace の詳細オプションを構成するには:

      1. **[ブランチで codespace を作成する]** ボタンの横にある下矢印をクリックし、 **[Configure and create codespace]\(codespace の構成と作成\)** をクリックします。
      1. **[Configure and create codespace]\(codespace の構成と作成\)** ボタンをクリックします。
      1. codespace のオプション ページで、ドロップダウン メニューから任意のオプションを選択します。

         ![codespace のオプション ページ](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **メモ**
      
         * オプション ページをブックマークすると、このリポジトリとブランチの codespace をすばやく作成できるようになります。
         * [https://github.com/codespaces/new](https://github.com/codespaces/new) ページでは、リポジトリとブランチの codespace をすばやく作成できます。 ブラウザーのアドレス バーに「`codespace.new`」と入力すると、このページにすばやくアクセスできます。
         * `devcontainer.json` ファイルの詳細については、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)」をご覧ください。
         * マシンの種類について詳しくは、「[codespace のマシンの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)」をご覧ください。
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. **[セッションの開始]** をクリックします。

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

新しい codespace を作成するには、`gh codespace create` サブコマンドを使用します。 

```shell
gh codespace create 
```

リポジトリの選択を求められます。 このリポジトリの codespace が課金可能な場合は、codespace の料金を支払うユーザーを示すメッセージが表示されます。 その場合、ブランチ、開発コンテナー構成ファイル (複数ある場合)、コンピューターの種類 (複数ある場合) を選ぶように求められます。

または、フラグを使用して、次に示すオプションの一部またはすべてを特定することもできます。

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

この例の `owner/repo` をリポジトリ識別子に置き換えます。 `branch` を codespace で最初にチェックアウトするブランチの名前、またはコミットの完全な SHA ハッシュに置き換えます。 `b` フラグなしで `-r` フラグを使用する場合、codespace は既定のブランチから作成されます。

新しいコードスペースで使用する開発コンテナー構成ファイルへのパスに `path` を置き換えます。 このフラグを省略し、複数の開発コンテナー ファイルを使用できる場合は、リストから 1 つを選ぶダイアログが表示されます。 開発コンテナーの構成ファイルについて詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」を参照してください。

`machine-type` を使用可能なマシンの種類の有効な識別子に置き換えます。 識別子は、`basicLinux32gb` や `standardLinux32gb` のような文字列です。 使用可能なマシンの種類は、リポジトリ、個人用アカウント、場所によって異なります。 無効または使用できないマシンの種類を入力すると、使用可能な種類がエラー メッセージに表示されます。 このフラグを省略し、複数のマシンの種類を使用できる場合は、リストから 1 つを選択するダイアログが表示されます。

このコマンドのオプションについて詳しくは、[{% data variables.product.prodname_cli %} マニュアル](https://cli.github.com/manual/gh_codespace_create)を参照してください。

{% endcli %}

## 参考資料
- [既存の codespace を開く](/codespaces/developing-in-codespaces/opening-an-existing-codespace)
- 「[[GitHub Codespaces で開く] バッジを追加する](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)」
