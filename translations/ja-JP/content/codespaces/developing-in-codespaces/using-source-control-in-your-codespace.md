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
shortTitle: Source control
ms.openlocfilehash: 39913ef49f6c404a95debc3f4ee7b30e9187ddf6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110596'
---
## {% data variables.product.prodname_github_codespaces %} でのソース管理について

必要なすべての Git アクションを codespace 内で直接実行できます。 たとえば、リモートリポジトリから変更をフェッチしたり、ブランチを切り替えたり、新しいブランチを作成したり、変更をコミットしてプッシュしたり、プルリクエストを作成したりすることができます。 Codespace 内の統合ターミナルを使用して Git コマンドを入力するか、アイコンとメニューオプションをクリックして最も一般的な Git タスクをすべて完了することができます。 このガイドでは、ソースコントロールにグラフィカルユーザインターフェースを使用する方法について説明します。

{% data variables.product.prodname_github_codespaces %} 内のソースコントロールは、{% data variables.product.prodname_vscode %} と同じワークフローを使用します。 詳しくは、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[{% data variables.product.prodname_vscode_shortname %} でのバージョン コントロールの使用](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)」をご覧ください。

{% data variables.product.prodname_github_codespaces %} を使用してファイルを更新するための一般的なワークフローは次のとおりです。

* {% data variables.product.prodname_dotcom %} のリポジトリのデフォルトブランチから、codespace を作成します。 「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace)」を参照してください。
* Codespace で、作業する新しいブランチを作成します。
* 変更を加えて保存します。
* 変更をコミットします。
* プルリクエストを発行します。

## ブランチの作成または切り替え

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**ヒント**: 他のユーザーがリモート リポジトリのファイルを変更した場合、切り替え後のブランチでは、変更を自分の codespace にプルするまで、それらの変更が表示されません。 

{% endtip %}

## リモートリポジトリから変更をプルする

リモートリポジトリからいつでも codespace に変更をプルできます。 

{% data reusables.codespaces.source-control-display-dark %}
1. サイド バーの上部にある省略記号 **[...]** をクリックします。 ![[表示] および [その他のアクション] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. ドロップダウン メニューの **[プル]** をクリックします。

codespace の作成後に開発コンテナー構成が変更された場合は、codespace のコンテナーを再構築することで変更を適用できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)に関するページをご覧ください。

## 新しい変更を自動的にフェッチするように codespace を設定する 

リモートリポジトリに対して行われた新しいコミットの詳細を自動的にフェッチするように codespace を設定できます。 これにより、リポジトリのローカルコピーが古くなっているかどうかを確認できます。古くなっている場合は、新しい変更をプルすることができます。 

フェッチ操作でリモートリポジトリの新しい変更が検出されると、ステータスバーに新しいコミットの数が表示されます。 その後、変更をローカルコピーにプルできます。

1. アクティビティ バーの下部にある **[管理]** ボタンをクリックします。
![[管理] ボタン](/assets/images/help/codespaces/manage-button.png)
1. メニューで **[設定]** をクリックします。
1. [設定] ページで、次を検索します: `autofetch`。
![autofetch を検索する](/assets/images/help/codespaces/autofetch-search.png)
1. 現在のリポジトリに登録されているすべてのリモートの更新の詳細をフェッチするには、**Git: Autofetch** を `all` に設定します。
![Git autofetch を有効にする](/assets/images/help/codespaces/autofetch-all.png)
1. 各自動フェッチ間の秒数を変更する場合は、**Git: Autofetch Period** の値を編集します。

## 変更をコミットする 

{% data reusables.codespaces.source-control-commit-changes %} 

## プルリクエストを発行する

{% data reusables.codespaces.source-control-pull-request %} 

## リモートリポジトリに変更をプッシュする

行なった変更はプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。

1. サイド バーの上部にある省略記号 **[...]** をクリックします。 ![[表示] および [その他のアクション] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. ドロップダウン メニューの **[プッシュ]** をクリックします。
