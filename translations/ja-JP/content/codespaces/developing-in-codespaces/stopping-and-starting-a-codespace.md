---
title: codespace の停止と開始
intro: codespace を停止して開始すると、リソースを保存し、作業を一時停止することができます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 5c34fd5b7d72f52e203cd8f8fdc1871ff6a2f014
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188249'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

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

{% jetbrains %}

codespace は、[Your codespaces] ページから ([Web ブラウザーの手順](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)を参照)、または {% data variables.product.prodname_cli %} を使って ([CLI の手順](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)を参照) 停止できます。

{% endjetbrains %}

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

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## 参考資料

- 「[codespace のライフサイクル](/codespaces/getting-started/the-codespace-lifecycle)」
