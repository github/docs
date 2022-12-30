---
title: '{% data variables.product.prodname_github_codespaces %} のクイックスタート'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: '{% data variables.product.prodname_github_codespaces %} は 5 分以内で試すことができます。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158654'
---
## はじめに

このガイドでは、テンプレート リポジトリから codespace を作成し、codespace 内で使用できるいくつかの重要な機能について調べます。 ブラウザー バージョンの {% data variables.product.prodname_vscode %} で作業します。これは、最初は {% data variables.product.prodname_github_codespaces %} の既定のエディターです。 このクイックスタートを試した後、他のエディターで {% data variables.product.prodname_codespaces %} を使用し、既定のエディターを変更できます。 リンクは、このガイドの最後に示します。

このクイックスタートでは、codespace を作成し、転送されるポートに接続して実行中のアプリケーションを表示し、新しいリポジトリに codespace を発行し、拡張機能でセットアップをカスタマイズする方法について学習します。

{% data variables.product.prodname_github_codespaces %} の厳密なしくみの詳細については、コンパニオン ガイド「[{% data variables.product.prodname_github_codespaces %} の詳細情報](/codespaces/getting-started/deep-dive)」を参照してください。

## codespace を作成する

1. [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) テンプレート リポジトリに移動します。
{% data reusables.codespaces.open-template-in-codespace-step %}

## アプリケーションの実行

codespace が作成されると、そこにテンプレート リポジトリが自動的にクローンされます。 これで、アプリケーションを実行し、ブラウザーで起動できます。

1. ターミナルが使用可能になったら、コマンド `npm run dev` を入力します。 この例では Node.js プロジェクトを使用します。また、このコマンドは `package.json` ファイルで、サンプル リポジトリで定義されている Web アプリケーションを起動する "dev" というラベルの付いたスクリプトを実行します。
   
   ![ターミナルで dev を実行する npm](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   別のアプリケーションの種類を使用している場合は、そのプロジェクトの対応する開始コマンドを入力します。

2. アプリケーションが起動すると、アプリケーションが実行しているポートが codespace によって認識されて、転送されたことを知らせるプロンプトが表示されます。 

   ![ポート転送の "トースト" 通知](/assets/images/help/codespaces/quickstart-port-toast.png)

3. **[ブラウザーで開く]** をクリックして、実行中のアプリケーションを新しいタブで表示します。

## アプリケーションを編集して変更を表示する

1. codespace に戻り、エクスプローラーで `haikus.json` ファイルをクリックして開きます。

2. 最初の俳句の `text` フィールドを編集して、独自の俳句でアプリケーションをカスタマイズします。

3. ブラウザーで実行中のアプリケーションのタブに戻り、表示を更新して変更を確認します。
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} タブを閉じた場合は、[ポート] パネルを開き、実行中のポートの **[ブラウザーで開く]** アイコンをクリックします。

   ![ポート転送パネル](/assets/images/help/codespaces/quickstart-forward-port.png)

## 変更のコミットとプッシュ

いくつかの変更を加えたので、統合ターミナルまたはソース ビューを使って作業をリポジトリに公開できます。

{% data reusables.codespaces.source-control-display-dark %}
1. 変更をステージングするには、`haikus.json` ファイルの横の **[+]** をクリックします。複数のファイルを変更してすべてをステージングする場合は、 **[変更]** の横のものをクリックします。

   ![ステージング ボタンが強調表示されたソース コントロール サイドバー](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. ステージングされた変更をコミットするには、行った変更を説明するコミット メッセージを入力し、 **[コミット]** をクリックします。

   ![コミット メッセージがあるソース管理サイドバー](/assets/images/help/codespaces/vscode-commit-button.png)

3. **[ブランチを公開する]** をクリックします。
   
   ![VS Code の [ブランチの発行] ボタンのスクリーンショット](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. [リポジトリ名] ドロップダウンで、新しいリポジトリの名前を入力し、 **[{% data variables.product.company_short %} プライベート リポジトリに発行]** または **[{% data variables.product.company_short %} パブリック リポジトリに発行]** を選びます。
   
   ![VS Code の [リポジトリ名] ドロップダウンのスクリーンショット](/assets/images/help/codespaces/choose-new-repository.png)

   新しいリポジトリの所有者は、codespace を作成した {% data variables.product.prodname_dotcom %} アカウントになります。
5. エディターの右下隅に表示されるポップアップで、 **[{% data variables.product.company_short %} で開く]** をクリックして、{% data variables.product.prodname_dotcom_the_website %} の新しいリポジトリを表示します。 新しいリポジトリで `haikus.json` ファイルを表示し、codespace で加えた変更がリポジトリに正常にプッシュされたことを確認します。
   
   ![VS Code の [GitHub で開く] ポップアップのスクリーンショット](/assets/images/help/codespaces/open-on-github.png)

## 拡張機能を使用した個人用設定

ブラウザーまたは {% data variables.product.prodname_vscode %} デスクトップ アプリケーションを使用して codespace に接続すると、エディターから Visual Studio Code Marketplace に直接アクセスできます。 この例では、テーマを変更する {% data variables.product.prodname_vscode_shortname %} 拡張機能をインストールしますが、ご自分のワークフローにとって便利なあらゆる拡張機能をインストールすることができます。

1. 左サイトバーで、[Extensions] アイコンをクリックします。
1. 検索バーに「`fairyfloss`」と入力し、 **[インストール]** をクリックします。

   ![機能拡張を追加](/assets/images/help/codespaces/add-extension.png)

1. 一覧で `fairyfloss` テーマをクリックして選択します。

   ![fairyfloss のテーマを選択](/assets/images/help/codespaces/fairyfloss.png)

ブラウザーまたは {% data variables.product.prodname_vscode %} デスクトップ アプリケーションで codespace を使う場合で、[[Settings Sync]](https://code.visualstudio.com/docs/editor/settings-sync) が有効になっている場合、テーマやキーボード バインドの変更など、現在の codespace でエディターの設定に加えた変更はすべて、{% data variables.product.prodname_dotcom %} アカウントにサインインしている {% data variables.product.prodname_vscode %} のインスタンスと、ご自分で作成する他の codespace に自動的に同期されます。

## 次のステップ

codespace で最初のアプリケーションを正常に作成、パーソナライズ、および実行しましたが、その他にもできることはまだまだたくさんあります。 {% data variables.product.prodname_github_codespaces %} で次の手順を行うのに役立つリソースをいくつか以下に示します。

* 「[詳細情報](/codespaces/getting-started/deep-dive)」: このクイックスタートでは、{% data variables.product.prodname_github_codespaces %} の機能をいくつか説明しました。 詳細情報では、これらの領域について技術的な観点から説明します。
* 「[開発コンテナー構成をリポジトリに追加する](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」: これらのガイドでは、特定の言語で {% data variables.product.prodname_github_codespaces %} を使用するようにリポジトリを設定する方法について説明します。
* 「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」: このガイドではプロジェクト向けの {% data variables.product.prodname_codespaces %} のカスタム構成の作成について詳しい情報を提供します。

## 参考資料

* [Organization に対して {% data variables.product.prodname_github_codespaces %} を有効にする](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)
* [{% data variables.product.prodname_vscode %} での {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [JetBrains IDE で {% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %} で {% data variables.product.prodname_github_codespaces %} を使う](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)
* [{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)
* [Organization で {% data variables.product.prodname_github_codespaces %} のコストを管理する](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
