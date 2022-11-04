---
title: codespace のマシンの種類を変更する
shortTitle: Change the machine type
intro: codespace を実行しているマシンの種類を変更し、実行している作業に適したリソースを使用できます。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 618b031ce0c23c2b4eba52157fca2a6625fe3dfd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108839'
---
## マシンの種類について

{% note %}

**注:** {% data variables.product.prodname_github_codespaces %} を使用する Organization のメンバーであり、その Organization が所有するリポジトリで codespace を作成している場合にのみ、マシンの種類を選んだり、変えたりできます。

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} codespace を作るときは、あるいは codespace の作成後はいつでも、代替マシンの種類を選べます。 

codespace の作成時にマシンの種類を選ぶ方法については、「[codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。

## マシンの種類の変更

{% note %}

**注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   各 codespace の現在のコンピューターの種類が表示されます。

   !["あなたの codespace" リスト](/assets/images/help/codespaces/your-codespaces-list.png)

1. 変更する codespace の右側にある省略記号 ( **...** ) をクリックします。
1. **[マシンの種類を変更する]** をクリックします。

   ![[マシンの種類の変更] メニュー オプション](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. codespace で複数のコンピューターの種類を使える場合、使うマシンの種類を選びます。

   ![選べるマシンの種類を示すダイアログ ボックス](/assets/images/help/codespaces/change-machine-type-choice.png)
1. **[codespace の更新]** をクリックします。 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

`gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} コマンドを使用して、codespace のマシンの種類を変更できます。 このコマンドを使用するには、まず codespace で使用可能なマシンの種類を確認する必要があります。

1. codespaces の一覧を表示するには、ターミナルで次のコマンドを入力します。
   
   ```
   gh codespace list
   ```
1. 必要に応じて、codespace 用の現在のマシンの種類を検索するには、次のコマンドを入力します。
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   `CODESPACE-NAME` を codespace の永続的な名前に置き換えます (例: `octocat-myrepo-gmc7`)。 永続的な名前は、`gh codespace list` によって返される一覧の **NAME** 列の下に一覧表示されます。

   `codespace` スコープを要求するように求められた場合は、ターミナルの指示に従います。

   現在のマシンについて詳しくは、`machine` フィールドの下に一覧表示されます。
1. codespace で使用可能なマシンの種類を見つけるには、次のコマンドを入力します。
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   `CODESPACE-NAME` を codespace の永続的な名前に置き換えます (例: `octocat-myrepo-gmc7`)。
1. codespace 用のマシンの種類を変更するには、次のコマンドを入力します。

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   `MACHINE-TYPE-NAME` を codespace で使用できるマシンの種類の名前に置き換えます (例: `standardLinux32gb`)。 
1. 方向キーを使用して、変更する codespace に移動して、<kbd>Enter</kbd> キーを押します。

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## 参考資料

- REST API ドキュメント内の「[codespaces マシン](/rest/codespaces/machines)」
- {% data variables.product.prodname_cli %} マニュアル内の「[`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit)」

{% endcli %}
