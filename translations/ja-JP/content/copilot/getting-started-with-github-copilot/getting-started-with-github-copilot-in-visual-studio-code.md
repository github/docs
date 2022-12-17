---
title: Visual Studio Code で GitHub Copilot の使用を開始する
shortTitle: Visual Studio Code
intro: '{% data variables.product.prodname_vscode %} に {% data variables.product.prodname_copilot %} をインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192770'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} と {% data variables.product.prodname_vscode %} について

{% data reusables.copilot.procedural-intro %}

{% data variables.product.prodname_vscode %} を使う場合、エディター内に {% data variables.product.prodname_copilot %} の候補を直接表示し、取り入れることができます。 このガイドでは、macOS、Windows、Linux 用の {% data variables.product.prodname_vscode %} 内で {% data variables.product.prodname_copilot %} を使う方法について説明します。

## 前提条件

{% data reusables.copilot.subscription-prerequisite %}

- {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} を使うには、{% data variables.product.prodname_vscode %} がインストールされている必要があります。 詳細については、[{% data variables.product.prodname_vscode %} のダウンロード ページ](https://code.visualstudio.com/Download)を参照してください。

## {% data variables.product.prodname_vscode %} 拡張機能をインストールする

{% data variables.product.prodname_copilot %} を使うには、最初に {% data variables.product.prodname_vscode %} 拡張機能をインストールする必要があります。

1. {% data variables.product.prodname_vscode %} Marketplace で、[{% data variables.product.prodname_copilot %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)ページに移動し、 **[Install]\(インストール\)** をクリックします。
   ![{% data variables.product.prodname_copilot %} 拡張機能 {% data variables.product.prodname_vscode %} をインストールする](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. ポップアップが表示され、{% data variables.product.prodname_vscode %} を開くように求められます。 **[Open {% data variables.product.prodname_vscode %}]** をクリックします。
1. {% data variables.product.prodname_vscode %} の [Extension: {% data variables.product.prodname_copilot %}] タブの **[Install]\(インストール\)** をクリックします。
   ![{% data variables.product.prodname_vscode %} の [Install]\(インストール\) ボタン](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. {% data variables.product.prodname_dotcom %} アカウントで {% data variables.product.prodname_vscode %} を以前に認可していない場合は、{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_dotcom %} にサインインするように求められます。
   - {% data variables.product.prodname_dotcom %} のアカウントで {% data variables.product.prodname_vscode %} を以前に認可している場合は、{% data variables.product.prodname_copilot %} は自動的に認可されます。
   ![{% data variables.product.prodname_vscode %} 認可画面のスクリーン ショット](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. ブラウザーで、{% data variables.product.prodname_dotcom %} から、{% data variables.product.prodname_copilot %} に必要なアクセス許可が要求されます。 これらのアクセス許可を承認するには、 **[{% data variables.product.prodname_vscode %} の認可]** をクリックします。
1. {% data variables.product.prodname_vscode %} の [{% data variables.product.prodname_vscode %}] ダイアログ ボックスで、認証を確認するには、 **[Open]\(開く\)** をクリックします。
   

## 最初の候補を表示する

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 次のサンプルは JavaScript で記述されていますが、他の言語も同様に動作します。

{% data reusables.copilot.create-js-file %}
1. JavaScript ファイルで、次の関数ヘッダーを入力します。 次に示すように、{% data variables.product.prodname_copilot %} から自動的に関数本文全体の候補が灰色のテキストで表示されます。 実際に表示される候補はこのとおりではない場合があります。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![最初の候補のスクリーンショット {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 代替候補の表示

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. JavaScript ファイルで、次の関数ヘッダーを入力します。 {% data variables.product.prodname_copilot %} による候補が表示されます。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | 次の候補を表示 | 前の候補を表示 |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) または Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) または Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. または、候補の上にマウス ポインターを置くと、候補を選択するための{% data variables.product.prodname_copilot %} コマンド パレットが表示されます。
{% data reusables.copilot.accept-or-reject-suggestion %}

## 新しいタブに複数の候補を表示する

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. JavaScript ファイルで、次の関数ヘッダーを入力します。 {% data variables.product.prodname_copilot %} による候補が表示されます。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. 複数の追加オプションを含む新しいタブを開くには、<kbd>Ctrl</kbd>+Enter<kbd> キーを押します</kbd>。
1. 候補を受け入れるには、候補の上にある **[Accept Solution]\(ソリューションの受入\)** をクリックします。 すべての候補を拒否するには、タブを閉じます。

## コメントからコード候補を生成する

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. JavaScript ファイルで、次のコメントを入力します。 {% data variables.product.prodname_copilot %} による関数の実装の候補が表示されます。
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## フレームワークの使用

{% data variables.product.prodname_copilot %} を使うと、API やフレームワークの候補を生成することもできます。 次の例では、{% data variables.product.prodname_copilot %} を使って、現在の時刻を返す単純な Express サーバーを作成しています。

{% data reusables.copilot.create-js-file %}
1. JavaScript ファイルで、次のコメントを入力し、<kbd>Enter</kbd> キーを押します。 {% data variables.product.prodname_copilot %} による Express アプリの実装の候補が表示されます。
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. 各行を受け入れるには、<kbd>Tab</kbd> キーを押します。

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 参考資料

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
