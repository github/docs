---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165461"
---
## テンプレートから作成された codespace の発行

テンプレート リポジトリまたは "あなたの codespaces" ページのテンプレートから codespace を作成する場合、codespace を発行するまで、{% data variables.product.prodname_dotcom %} のリポジトリに作業は格納されません。 詳しくは、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)」を参照してください。

{% data reusables.codespaces.publishing-template-codespaces %}

## ブランチの作成または切り替え

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**ヒント**: 他のユーザーが最近、リモート リポジトリのファイルを変更した場合、切り替え後のブランチでは、変更を自分の codespace にプルするまで、それらの変更が表示されません。 

{% endtip %}

## 変更をコミットする 

{% data reusables.codespaces.source-control-commit-changes %} 

## リモートリポジトリから変更をプルする

リモートリポジトリからいつでも codespace に変更をプルできます。 

{% data reusables.codespaces.source-control-display-dark %}
1. サイドバーの上部にある省略記号 **[...]** をクリックします。![[表示] および [その他のアクション] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. ドロップダウン メニューの **[プル]** をクリックします。

codespace の作成後に開発コンテナー構成が変更された場合は、codespace のコンテナーを再構築することで変更を適用できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)に関するページをご覧ください。

## 新しい変更を自動的にフェッチするように codespace を設定する 

リモートリポジトリに対して行われた新しいコミットの詳細を自動的にフェッチするように codespace を設定できます。 これにより、リポジトリのローカルコピーが古くなっているかどうかを確認できます。古くなっている場合は、新しい変更をプルすることができます。 

フェッチ操作でリモートリポジトリの新しい変更が検出されると、ステータスバーに新しいコミットの数が表示されます。 その後、変更をローカルコピーにプルできます。

1. アクティビティ バーの下部にある **[管理]** ボタンをクリックします。
![[管理] ボタン](/assets/images/help/codespaces/manage-button.png)
1. メニューで、[**設定**] をクリックします。
1. [設定] ページで、次を検索します: `autofetch`。
![autofetch を検索する](/assets/images/help/codespaces/autofetch-search.png)
1. 現在のリポジトリに登録されているすべてのリモートの更新の詳細をフェッチするには、**Git: Autofetch** を `all` に設定します。
![Git autofetch を有効にする](/assets/images/help/codespaces/autofetch-all.png)
1. 各自動フェッチ間の秒数を変更する場合は、**Git: Autofetch Period** の値を編集します。

## プルリクエストを発行する

{% data reusables.codespaces.source-control-pull-request %} 

## リモートリポジトリに変更をプッシュする

保存してコミットした変更をプッシュできます。 それにより、変更がリモートリポジトリの上流ブランチに適用されます。 プルリクエストの作成準備が整っていない場合、または {% data variables.product.prodname_dotcom %} でプルリクエストを作成する場合は、この操作を行うことをお勧めします。

1. サイドバーの上部にある省略記号 **[...]** をクリックします。![[表示] および [その他のアクション] の省略記号ボタン](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. ドロップダウン メニューの **[プッシュ]** をクリックします。
