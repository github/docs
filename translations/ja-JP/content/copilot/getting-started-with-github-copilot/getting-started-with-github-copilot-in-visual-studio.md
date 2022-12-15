---
title: Visual Studio で GitHub Copilot の使用を開始する
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: '{% data variables.product.prodname_vs %} に {% data variables.product.prodname_copilot %} をインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193018'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} と Visual Studio について

{% data reusables.copilot.procedural-intro %}

{% data variables.product.prodname_vs %} を使うと、エディター内に {% data variables.product.prodname_copilot %} による候補が直接表示されるので、取り入れることができます。 このガイドでは、{% data variables.product.prodname_vs %} for Windows 内で {% data variables.product.prodname_copilot %} を使う方法について説明します。

## 前提条件

{% data reusables.copilot.subscription-prerequisite %}

- {% data variables.product.prodname_vs %} で {% data variables.product.prodname_copilot %} を使うには、{% data variables.product.prodname_vs %} 2022 17.2 以降がインストールされている必要があります。 詳しい情報については、[Visual Studio IDE](https://visualstudio.microsoft.com/vs/) のドキュメントをご覧ください。

{% note %}

**注**: {% data variables.product.prodname_copilot %} は現在、Visual Studio for Mac で使うことはできません。

{% endnote %}

## {% data variables.product.prodname_vs %} 拡張機能をインストールする

{% data variables.product.prodname_copilot %} を使うには、最初に {% data variables.product.prodname_vs %} 拡張機能をインストールする必要があります。
1. Visual Studio ツール バーの **[拡張機能]** をクリックし、 **[拡張機能の管理]** をクリックします。
   ![Visual Studio ツール バーのスクリーンショット](/assets/images/help/copilot/visual-studio-toolbar.png)
1. [拡張機能の管理] ウィンドウで、**Visual Studio Marketplace** をクリックし、{% data variables.product.prodname_copilot %} 拡張機能を検索して、 **[ダウンロード]** をクリックします。
   ![Visual Studio 用 GitHub Copilot 拡張機能の [ダウンロード] ボタンが強調されたスクリーンショット](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. [拡張機能の管理] ウィンドウを閉じ、{% data variables.product.prodname_vs %} を終了してもう一度起動します。
1. 必要に応じて、{% data variables.product.prodname_copilot %} がインストールされ、有効になっていることを確認するには、 **[拡張機能の管理]** に戻り、 **[インストール済み]** をクリックして現在インストールされている拡張機能を表示し、 **{% data variables.product.prodname_copilot %}** をクリックして状態情報を表示します。
  ![Visual Studio でインストール済み拡張機能の GitHub Copilot が強調されているスクリーンショット](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. {% data variables.product.prodname_vs %} で新しいプロジェクトを開くか、作成します。 
1. デバイスのアクティブ化コードをコピーするには、[Microsoft {% data variables.product.prodname_vs %}] ダイアログ ボックスの **[OK]** をクリックします。
   ![[Microsoft {% data variables.product.prodname_vs %}] ダイアログ ボックスのスクリーンショット](/assets/images/help/copilot/vs-auth-dialogue.png)
1. ブラウザーにデバイスのアクティブ化ウィンドウが表示されます。 デバイス コードを貼り付け、 **[続行]** をクリックします。

   - Windows または Linux でコードを貼り付けるには、<kbd>Ctrl</kbd> + <kbd>v</kbd> キーを押します。
   - macOS でコードを貼り付けるには、<kbd>command</kbd> + <kbd>v</kbd> キーを押します。
1. {% data variables.product.prodname_dotcom %} から、{% data variables.product.prodname_copilot %} に必要なアクセス許可が要求されます。 これらのアクセス許可を承認するには、 **[{% data variables.product.prodname_copilot %} プラグインの認可]** をクリックします。
1. アクセス許可を承認すると、{% data variables.product.prodname_vs %} に確認が表示されます。
   ![{% data variables.product.prodname_vs %} アクセス許可確認のスクリーンショット](/assets/images/help/copilot/vs-confirmation.png)

## 最初の候補を表示する

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %}次のサンプルは C# で記述されていますが、他の言語でも同様に動作します。

{% data reusables.copilot.create-c-file %}
1. C# ファイルに、次の関数シグネチャを入力します。 次に示すように、{% data variables.product.prodname_copilot %} による関数本体全体の候補が自動的に灰色のテキストで表示されます。 実際に表示される候補はこのとおりではない場合があります。
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Visual Studio Code の最初の候補のスクリーンショット](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## 代替候補を表示する
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. C# ファイルに、次の関数シグネチャを入力します。 {% data variables.product.prodname_copilot %} による候補が表示されます。

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. 代替候補が利用可能な場合、これらの代替候補は、<kbd>Alt</kbd> + <kbd>]</kbd> (または <kbd>Alt</kbd> + <kbd>[</kbd>) キーを押して表示できます。
1. 必要に応じて、候補の上にマウス ポインターを置くと、候補を選べるように {% data variables.product.prodname_copilot %} コマンド パレットが表示されます。
{% data reusables.copilot.accept-or-reject-suggestion %}

## コメントからコード候補を生成する

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. C# ファイルに、次のコメントを入力します。 {% data variables.product.prodname_copilot %} による関数の実装の候補が表示されます。
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## 参考資料

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
