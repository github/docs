---
title: Visual Studio での GitHub Copilot の構成
intro: '{% data variables.product.prodname_vs %} で {% data variables.product.prodname_copilot %} を有効、構成、無効化できます。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: cb24557b15eafd4a5be8ef1a991ae3c43f376c67
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786030'
---
## {% data variables.product.prodname_vs %} の {% data variables.product.prodname_copilot %} について

{% data variables.product.prodname_vs %} を使用する場合、{% data variables.product.prodname_copilot %} では、入力時にコードをオートコンプリートできます。 インストール後、{% data variables.product.prodname_copilot %} を有効または無効にしたり、{% data variables.product.prodname_vs %} または {% data variables.product.prodname_dotcom_the_website %} で詳細設定を構成したりできます。

## 前提条件

{% data variables.product.prodname_vs %} で {% data variables.product.prodname_copilot %} を構成するには、{% data variables.product.prodname_copilot %} プラグインをインストールする必要があります。 詳しくは、「[{% data variables.product.prodname_vs %} での {% data variables.product.prodname_copilot %} の概要](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)」を参照してください。

## {% data variables.product.prodname_copilot %} のキーボード ショートカット

{% data variables.product.prodname_copilot %} を使用する場合は、{% data variables.product.prodname_vs %} の既定のキーボード ショートカットを使用できます。 または、特定のコマンドごとに任意のキーボード ショートカットを使用して、{% data variables.product.prodname_vs %} の [ツール] 設定でショートカットを再バインドすることもできます。 各キーボード ショートカットは、キーボード ショートカット エディターのコマンド名で検索できます。

| アクション | ショートカット | [コマンド名] |
|:---|:---|:---|
|次のインライン提案を表示する|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|前のインライン提案を表示する|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|インライン提案をトリガーする|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## キーボード ショートカットの再バインド

{% data variables.product.prodname_copilot %} を使用するときに {% data variables.product.prodname_vs %} の既定のキーボード ショートカットを使用しない場合は、特定のコマンドごとに任意のキーボード ショートカットを使用してキーボード エディターでショートカットを再バインドできます。

1. {% data variables.product.prodname_vs %} ツール バーの **[ツール]** で、 **[オプション]** をクリックします。
   ![{% data variables.product.prodname_vs %} ツール バーの [オプション] オプションのスクリーンショット](/assets/images/help/copilot/vs-toolbar-options.png)
1. [オプション] ダイアログの **[環境]** で、 **[キーボード]** をクリックします。
   ![[オプション] ダイアログの [キーボード] オプションのスクリーンショット](/assets/images/help/copilot/vs-options-dialogue.png)
1. [以下の文字列を含むコマンドを表示] で、再バインドするコマンドを検索します。
   ![[以下の文字列を含むコマンドを表示] 検索バーのスクリーンショット](/assets/images/help/copilot/vs-show-commands-containing.png)
1. [ショートカット キー] で、コマンドに割り当てるショートカットを入力し、 **[割り当て]** をクリックします。
   ![キーボード ショートカットの割り当てのスクリーンショット](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## {% data variables.product.prodname_copilot %} の ReSharper の構成

ReSharper を使用する場合、{% data variables.product.prodname_copilot %} は、{% data variables.product.prodname_copilot %} のネイティブ IntelliSense を使用するように ReSharper を構成すると最適に動作できます。 ReSharper について詳しくは、[ReSharper のドキュメント](https://www.jetbrains.com/resharper/documentation/documentation.html)を参照してください。

1. {% data variables.product.prodname_vs %} ツール バーの **[ツール]** で、 **[オプション]** をクリックします。
   ![{% data variables.product.prodname_vs %} ツール バーの [オプション] オプションのスクリーンショット](/assets/images/help/copilot/vs-toolbar-options.png)
1. [オプション] ダイアログの **[環境]** で、 **[IntelliSense]** をクリックし、 **[全般]** をクリックします。
    ![[オプション] ダイアログの IntelliSense オプションのスクリーンショット](/assets/images/help/copilot/vs-options-intellisense.png)
1. [全般] で **[Visual Studio]** を選び、 **[保存]** をクリックします。

{% data reusables.copilot.dotcom-settings %}
