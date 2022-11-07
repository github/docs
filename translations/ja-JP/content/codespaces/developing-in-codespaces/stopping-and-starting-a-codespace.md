---
title: codespace の停止と開始
intro: codespace を停止して開始すると、リソースを保存し、作業を一時停止することができます。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 82e547b62593a74bb201dddd4992f41417d686f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109660'
---
## codespace の停止と開始について

{% data reusables.codespaces.stopping-a-codespace %}

codespaces は、作成またはアクセスした場所に関係なく、 https://github.com/codespaces で表示および管理できます。 

## codespace を停止する

 {% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. 停止する codespace の右側にある省略記号 ( **...** ) をクリックします。
 1. **[codespace の停止]** をクリックします。
   ![codespace を停止するオプションのスクリーンショット](/assets/images/help/codespaces/stop-codespace-webui.png)

 {% endwebui %}


 {% cli %}

 {% data reusables.cli.cli-learn-more %}

 codespace を停止するには、`gh codespace stop` サブコマンドを使用し、表示される一覧から停止する codespace を選びます。

 ```shell{:copy}
 gh codespace stop
 ```

 {% endcli %}


 {% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. 「`stop`」と入力し、オプションの一覧から **[codespace: codespace の停止]** を選びます。
1. codespace の一覧で、停止する codespace を選びます。

 {% endvscode %}


## codespace の再起動

 {% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. 再起動する codespace の名前をクリックします。
![停止した codespace のスクリーンショット](/assets/images/help/codespaces/restart-codespace-webui.png)

 {% endwebui %}

 {% cli %}

codespace を再起動するとき、{% data variables.product.prodname_vscode %} で開くか、ブラウザーで開くかを選ぶことができます。 

 - codespace を再起動し、{% data variables.product.prodname_vscode %} で開くには、`gh codespace code` サブコマンドを使用し、表示される一覧から再起動する codespace を選びます。

 ```shell{:copy} 
 gh codespace code
 ```

 - codespace を再起動してブラウザーで開くには、`gh codespace open --web` サブコマンドを使用し、表示される一覧から再起動する codespace を選びます。

 ```shell{:copy}
 gh codespace open --web
 ```

 {% endcli %}


 {% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. 「`connect`」と入力し、オプションの一覧から **[codespaces: codespace に接続]** を選びます。
1. codespace の一覧で、再起動する codespace を選びます。

 {% endvscode %}

 ## 参考資料
- 「[Codespaces のライフサイクル](/codespaces/developing-in-codespaces/codespaces-lifecycle)」
