---
title: '{% data variables.product.prodname_github_codespaces %} のクイックスタート'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: '{% data variables.product.prodname_github_codespaces %} は 5 分以内で試すことができます。'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: ddf1e4ad5eff3b7c5be1638e424fb4a7493a3cd4
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147783120'
---
## はじめに

このガイドでは、テンプレート リポジトリから codespace を作成し、codespace 内で使用できるいくつかの重要な機能について調べます。

このクイックスタートでは、codespace を作成し、転送されるポートに接続して実行中のアプリケーションを表示し、codespace でバージョン コントロールを使用し、拡張機能でセットアップをカスタマイズする方法について学習します。

{% data variables.product.prodname_github_codespaces %} の厳密なしくみの詳細については、コンパニオン ガイド「[{% data variables.product.prodname_github_codespaces %} の詳細情報](/codespaces/getting-started/deep-dive)」を参照してください。

## codespace を作成する

1. [テンプレート リポジトリ](https://github.com/github/haikus-for-codespaces)に移動し、 **[このテンプレートを使用]** を選択します。 {% data reusables.codespaces.open-codespace-from-template-repo %}

## アプリケーションの実行

codespace が作成されると、それにリポジトリが自動的にクローンされます。 これで、アプリケーションを実行し、ブラウザーで起動できます。

1. ターミナルが使用可能になったら、コマンド `npm run dev` を入力します。 この例では Node.js プロジェクトを使用します。また、このコマンドは _package.json_ ファイルで、サンプル リポジトリで定義されている Web アプリケーションを起動する "dev" というラベルの付いたスクリプトを実行します。
   
   ![ターミナルで dev を実行する npm](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   別のアプリケーションの種類を使用している場合は、そのプロジェクトの対応する開始コマンドを入力します。

1. アプリケーションが起動すると、アプリケーションが実行しているポートが codespace によって認識されて、転送されたことを知らせるプロンプトが表示されます。 

  ![ポートフォワーディングトースト](/assets/images/help/codespaces/quickstart-port-toast.png)

1. **[ブラウザーで開く]** をクリックして、実行中のアプリケーションを新しいタブで表示します。

## アプリケーションを編集して変更を表示する

1. codespace に戻り、Explorer で _haikus.json_ ファイルをダブルクリックして開きます。

1. 最初の俳句の `text` フィールドを編集して、独自の俳句でアプリケーションをカスタマイズします。

1. ブラウザーで実行中のアプリケーションのタブに戻り、表示を更新して変更を確認します。
   
  {% octicon "light-bulb" aria-label="The lightbulb icon" %} タブを閉じた場合は、[ポート] パネルを開き、実行中のポートの **[ブラウザーで開く]** アイコンをクリックします。

  ![ポート転送パネル](/assets/images/help/codespaces/quickstart-forward-port.png)

## 変更のコミットとプッシュ

いくつかの変更を行ったので、統合ターミナルまたはソース ビューを使用して、変更をコミットしてリモートにプッシュできます。

{% data reusables.codespaces.source-control-display-dark %}
1. 変更をステージングするには、変更したファイルの横の **[+]** をクリックします。複数のファイルを変更してすべてをステージングする場合は、 **[変更]** の横のものをクリックします。

   ![ステージング ボタンが強調表示されたソース コントロール サイドバー](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. 行った変更について説明するコミットメッセージを入力します。

   ![コミット メッセージがあるソース管理サイドバー](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. ステージングされた変更をコミットするには、ソースコントロールサイドバーの上部にあるチェックマークをクリックします。

   ![チェックマーク アイコンをクリックする](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  

   行なった変更はプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。
1. サイドバーの上部にある省略記号 ( **...** ) をクリックします。
 
   ![[表示] および [その他のアクション] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. ドロップダウン メニューの **[プッシュ]** をクリックします。
1. {% data variables.product.prodname_dotcom %} の新しいリポジトリに戻り、_haikus.json_ ファイルを表示します。 codespace で行った変更がリポジトリに正常にプッシュされたことを確認します。

## 拡張機能を使用した個人用設定

codespace 内で、{% data variables.product.prodname_vscode_marketplace %} にアクセスできます。 この例では、テーマを変更する機能拡張をインストールしますが、ワークフローに役立つ任意の機能拡張をインストールできます。

{% note %}

**注**: [[Settings Sync]](https://code.visualstudio.com/docs/editor/settings-sync) が有効になっている場合、テーマやキーボード バインドの変更など、現在の codespace でエディターの設定に加えた変更はすべて、開いている他の codespace と、{% data variables.product.prodname_dotcom %} アカウントにサインインしている {% data variables.product.prodname_vscode %} のインスタンスに自動的に同期されます。

{% endnote %}

1. 左サイトバーで、[Extensions] アイコンをクリックします。

1. 検索バーに「`fairyfloss`」と入力して、fairyfloss 拡張機能をインストールします。

   ![機能拡張を追加](/assets/images/help/codespaces/add-extension.png)

1. **[Codespaces でインストール]** をクリックします。
1. 一覧で `fairyfloss` テーマをクリックして選択します。

   ![fairyfloss のテーマを選択](/assets/images/help/codespaces/fairyfloss.png)

## 次の手順

codespace で最初のアプリケーションを正常に作成、パーソナライズ、および実行しましたが、その他にもできることはまだまだたくさんあります。 {% data variables.product.prodname_codespaces %} で次のステップを実行するための役立つリソースは以下のとおりです。
  - [詳細情報](/codespaces/getting-started/deep-dive): このクイックスタートでは、{% data variables.product.prodname_codespaces %} の機能をいくつか説明しました。 詳細情報では、これらの領域について技術的な観点から説明します。
  - [{% data variables.product.prodname_codespaces %} 用のプロジェクトの設定](/codespaces/getting-started-with-codespaces): これらのガイドでは、特定の言語で {% data variables.product.prodname_codespaces %} を使用するようにプロジェクトを設定する方法について説明します。
  - [プロジェクトのための {% data variables.product.prodname_codespaces %} の構成](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): このガイドでは、プロジェクト用に {% data variables.product.prodname_codespaces %} のカスタム構成を作成する方法について詳しく説明します。

## 参考資料

- 「[Organization に対して {% data variables.product.prodname_codespaces %} を有効にする](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)」
- 「[Organization で {% data variables.product.prodname_codespaces %} の課金を管理する](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)」
