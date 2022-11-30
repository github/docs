---
title: Codespace でソースコントロールを使用する
intro: Codespace 内のファイルに変更を加えた後、変更をすばやくコミットして、更新をリモートリポジトリにプッシュできます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160000'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## {% data variables.product.prodname_github_codespaces %} でのソース管理について

必要なすべての Git アクションを codespace 内で直接実行できます。 たとえば、リモート リポジトリからの変更のフェッチ、ブランチの切り替え、新しいブランチの作成、変更のコミットとプッシュ、pull request の作成を行うことができます。 Codespace 内の統合ターミナルを使用して Git コマンドを入力するか、アイコンとメニューオプションをクリックして最も一般的な Git タスクをすべて完了することができます。 このガイドでは、ソースコントロールにグラフィカルユーザインターフェースを使用する方法について説明します。

{% vscode %}

{% data variables.product.prodname_vscode %} の Git サポートについて詳しくは、{% data variables.product.prodname_vscode %} ドキュメントの「[VS Code でのバージョン コントロールの使用](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)」をご覧ください。

{% endvscode %}

{% webui %}

{% data variables.product.prodname_vscode %} Web クライアントのソース管理では、{% data variables.product.prodname_vscode %} デスクトップ アプリケーションと同じワークフローが使用されます。 詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[VS Code でのバージョン管理の使用](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)」を参照してください。

{% endwebui %}

{% data variables.product.prodname_github_codespaces %} を使用してファイルを更新するための一般的なワークフローは次のとおりです。

* {% data variables.product.prodname_dotcom %} のリポジトリのデフォルトブランチから、codespace を作成します。 「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。
* Codespace で、作業する新しいブランチを作成します。
* 変更を加えて保存します。
* 変更をコミットします。
* プルリクエストを発行します。

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## ブランチの作成または切り替え

1. ステータス バーの右側にあるブランチ名をクリックします。

   ![ステータス バーのブランチ名のスクリーンショット](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. ポップアップ メニューで、次のいずれかを行います。
   * 現在のブランチに基づいて新しいブランチを作成するには、現在のブランチの名前をクリックし、 **[新しいブランチ]** を選びます。 

     ![新しいブランチ オプションのスクリーンショット](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     新しいブランチの名前を入力し、 **[作成]** をクリックします。

     ![ブランチの作成ダイアログ ボックスのスクリーンショット](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * 既存のブランチをチェックアウトするには、チェックアウトするブランチの名前の入力を始めます。一覧からブランチをクリックし、 **[チェックアウト]** をクリックします。

     ![チェックアウト オプションのスクリーンショット](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **ヒント**: 他のユーザーが最近、リモート リポジトリのファイルを変更した場合、切り替え後のブランチでは、変更を自分の codespace にプルするまで、それらの変更が表示されません。 

     {% endtip %}


## 変更をコミットする 

1. ナビゲーション バーの右側にあるチェック マークをクリックします。

   ![[コミット] チェック マークのスクリーンショット](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. [変更のコミット] ダイアログ ボックスで、コミット メッセージを入力します。
1. **[コミット]** をクリックします。

   または、 **[コミット]** の横にある下向き矢印をクリックし、 **[コミットしてプッシュ]** をクリックします。

   ![[コミットしてプッシュ] ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## リモートリポジトリから変更をプルする

リモート リポジトリ上の同じブランチから変更をプルし、codespace で作業しているリポジトリのコピーにそれらの変更を適用できます。

1. ナビゲーション バーの右側で、下向きの矢印をクリックします。

   ![プロジェクトの更新の下向き矢印ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. [プロジェクトの更新] ダイアログ ボックスで、受信した変更をマージまたはリベースするかどうかを選びます。

   ![[プロジェクトの更新] ダイアログ ボックスのスクリーン ショット](/assets/images/help/codespaces/jetbrains-update-options.png)

1. **[OK]** をクリックします。

## リモートリポジトリに変更をプッシュする

保存してコミットした変更をプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。

1. ナビゲーション バーの右側で、上向きの矢印をクリックします。

   ![コミットのプッシュの上向き矢印のスクリーンショット](/assets/images/help/codespaces/jetbrains-push-button.png)

1. [コミットのプッシュ] ダイアログ ボックスで、 **[プッシュ]** をクリックします。

{% endjetbrains %}
