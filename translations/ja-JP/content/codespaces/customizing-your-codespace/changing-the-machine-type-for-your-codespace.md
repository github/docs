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
ms.openlocfilehash: f3669e7addefbf46c3f2af978e746e0c3e634bb0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110763'
---
## マシンの種類について

{% note %}

**注:** {% data variables.product.prodname_github_codespaces %} を使用する Organization のメンバーであり、その Organization が所有するリポジトリで codespace を作成している場合にのみ、マシンの種類を選んだり、変えたりできます。

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} codespace を作るときは、あるいは codespace の作成後はいつでも、代替マシンの種類を選べます。 

codespace の作成時にマシンの種類を選ぶ方法については、「[codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。 {% data variables.product.prodname_vscode %} 内のマシンの種類の変更について詳しくは、「[{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_codespaces %} を使用する](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)」を参照してください。

## {% data variables.product.prodname_dotcom %} のマシンの種類の変更

{% data reusables.codespaces.your-codespaces-procedure-step %}

   各 codespace の現在のコンピューターの種類が表示されます。

   !["あなたの codespace" リスト](/assets/images/help/codespaces/your-codespaces-list.png)

1. 変更する codespace の右側にある省略記号 ( **...** ) をクリックします。
1. **[マシンの種類を変更する]** をクリックします。

   ![[マシンの種類の変更] メニュー オプション](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. codespace で複数のコンピューターの種類を使える場合、使うマシンの種類を選びます。

   ![選べるマシンの種類を示すダイアログ ボックス](/assets/images/help/codespaces/change-machine-type-choice.png)

   {% note %}

   **注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

2. **[codespace の更新]** をクリックします。 

   変更は、codespace が次回、再起動したときに有効になります。

## 現在実行中の codespace の即時更新を強制する

現在使っている codespace のマシンの種類を変更し、変更を直ちに適用する場合、強制的に codespace を再起動できます。

1. codespace ウィンドウの左下にある **[{% data variables.product.prodname_codespaces %}]** をクリックします。 

   ![[{% data variables.product.prodname_codespaces %}] をクリックします。](/assets/images/help/codespaces/codespaces-button.png)

1. ページの上部に表示されているオプションから、 **[codespace: 現在の codespace を停止する]** を選択します。

   ![[現在の codespace を一時停止する] オプション](/assets/images/help/codespaces/suspend-current-codespace.png)

1. codespace の停止後、 **[codespace の再起動]** をクリックします。

   ![[再開] をクリックします。](/assets/images/help/codespaces/resume-codespace.png)
