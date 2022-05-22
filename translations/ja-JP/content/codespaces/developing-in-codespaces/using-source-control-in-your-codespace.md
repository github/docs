---
title: Codespace でソースコントロールを使用する
intro: Codespace 内のファイルに変更を加えた後、変更をすばやくコミットして、更新をリモートリポジトリにプッシュできます。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: ソースコントロール
---

 

## {% data variables.product.prodname_codespaces %} のソースコントロールについて

必要なすべての Git アクションを codespace 内で直接実行できます。 たとえば、リモートリポジトリから変更をフェッチしたり、ブランチを切り替えたり、新しいブランチを作成したり、変更をコミットしてプッシュしたり、プルリクエストを作成したりすることができます。 Codespace 内の統合ターミナルを使用して Git コマンドを入力するか、アイコンとメニューオプションをクリックして最も一般的な Git タスクをすべて完了することができます。 このガイドでは、ソースコントロールにグラフィカルユーザインターフェースを使用する方法について説明します。

{% data variables.product.prodname_github_codespaces %} 内のソースコントロールは、{% data variables.product.prodname_vscode %} と同じワークフローを使用します。 詳しい情報については、{% data variables.product.prodname_vscode %} のドキュメント「[VS Code でバージョン管理を使用する](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)」を参照してください。

{% data variables.product.prodname_github_codespaces %} を使用してファイルを更新するための一般的なワークフローは次のとおりです。

* {% data variables.product.prodname_dotcom %} のリポジトリのデフォルトブランチから、codespace を作成します。 「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace)」を参照してください。
* Codespace で、作業する新しいブランチを作成します。
* 変更を加えて保存します。
* 変更をコミットします。
* プルリクエストを発行します。

## ブランチの作成または切り替え

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**ヒント**: リモートリポジトリのファイルを変更すると、変更を codespace にプルするまで切り替えたブランチに変更が表示されません。

{% endtip %}

## リモートリポジトリから変更をプルする

リモートリポジトリからいつでも codespace に変更をプルできます。

{% data reusables.codespaces.source-control-display-dark %}
1. サイドバーの上部にある省略記号(**...**) をクリックします。 ![[View] および [More Actions] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. ドロップダウンメニューで、[**Pull**] をクリックします。

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. 詳しい情報については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)」を参照してください。

## 新しい変更を自動的にフェッチするように codespace を設定する

リモートリポジトリに対して行われた新しいコミットの詳細を自動的にフェッチするように codespace を設定できます。 これにより、リポジトリのローカルコピーが古くなっているかどうかを確認できます。古くなっている場合は、新しい変更をプルすることができます。

フェッチ操作でリモートリポジトリの新しい変更が検出されると、ステータスバーに新しいコミットの数が表示されます。 その後、変更をローカルコピーにプルできます。

1. アクティビティバーの下部にある [**Manage**] ボタンをクリックします。 ![ボタンを管理する](/assets/images/help/codespaces/manage-button.png)
1. メニューで [**Settings**] をクリックします。
1. [Settings] ページで `autofetch` を検索します。 ![自動フェッチを検索する](/assets/images/help/codespaces/autofetch-search.png)
1. 現在のリポジトリに登録されているすべてのリモートの更新の詳細をフェッチするには、**Git: Autofetch** を `all` に設定します。 ![Git 自動フェッチを有効にする](/assets/images/help/codespaces/autofetch-all.png)
1. 各自動フェッチ間の秒数を変更する場合は、**Git: Autofetch Period** の値を編集します。

## 変更をコミットする

{% data reusables.codespaces.source-control-commit-changes %}

## プルリクエストを発行する

{% data reusables.codespaces.source-control-pull-request %}

## リモートリポジトリに変更をプッシュする

行なった変更はプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。

1. サイドバーの上部にある省略記号(**...**) をクリックします。 ![[View] および [More Actions] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. ドロップダウンメニューで、[**Push**] をクリックします。
