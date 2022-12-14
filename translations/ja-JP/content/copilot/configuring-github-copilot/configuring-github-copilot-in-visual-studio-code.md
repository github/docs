---
title: Visual Studio Code での GitHub Copilot の構成
intro: '{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} を有効化、構成、無効化できます。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: ab043d4eeca2003deaf77aa80be46fc79acf8649
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193572'
---
## {% data variables.product.prodname_vscode %} の{% data variables.product.prodname_copilot %} について

{% data variables.product.prodname_vscode %} を使うと、{% data variables.product.prodname_copilot %} で入力時にコードをオートコンプリートできます。 インストール後、{% data variables.product.prodname_copilot %} を有効または無効にしたり、{% data variables.product.prodname_vscode %} または {% data variables.product.prodname_dotcom_the_website %} で詳細設定を構成したりできます。

## 前提条件

{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} を構成するには、{% data variables.product.prodname_copilot %} プラグインをインストールする必要があります。 詳しくは、「[{% data variables.product.prodname_vscode %} での {% data variables.product.prodname_copilot %} の概要](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)」を参照してください。

## {% data variables.product.prodname_copilot %} のキーボード ショートカット

{% data variables.product.prodname_copilot %} を使用する場合は、{% data variables.product.prodname_vscode %} の既定のキーボード ショートカットを使用できます。 または、キーボード ショートカット エディターで、特定のコマンドごとに好みのキーボード ショートカットを使い、ショートカットを再バインドすることもできます。 キーボード ショートカット エディターでは、コマンド名から各キーボード ショートカットを検索できます。

{% mac %}

| アクション | ショートカット | [コマンド名] |
|:---|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|editor.action.inlineSuggest.commit|
|インライン候補を無視する|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|次のインライン候補を表示する| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|前のインライン候補を表示する| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|インライン候補をトリガーする| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} のオン/オフを切り替える|_"既定のショートカットなし"_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| アクション | ショートカット | [コマンド名] |
|:---|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|editor.action.inlineSuggest.commit|
|インライン候補を無視する|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|次のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|前のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|インライン候補をトリガーする|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} のオン/オフを切り替える|_"既定のショートカットなし"_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| アクション | ショートカット | [コマンド名] |
|:---|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|editor.action.inlineSuggest.commit|
|インライン候補を無視する|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|次のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|前のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|インライン候補をトリガーする|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} のオン/オフを切り替える|_"既定のショートカットなし"_|github.copilot.toggleCopilot|

{% endlinux %}

## キーボード ショートカットの再バインド

{% data variables.product.prodname_copilot %} を使用するときに {% data variables.product.prodname_vscode %} の既定のキーボード ショートカットを使わない場合は、キーボード ショートカット エディターで特定のコマンドごとに任意のキーボード ショートカットを使い、ショートカットを再バインドできます。

1. **[File]\(ファイル\)** メニューをクリックし、 **[Preferences]\(基本設定\)** をクリックし、 **[Keyboard Shortcuts]\(キーボード ショートカット\)** をクリックします。
![Visual Studio Code のキーボード ショートカットのスクリーンショット](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. "キーボード ショートカット" エディターで、変更するキーボード ショートカットのコマンド名を検索します。
![キーボード ショートカット検索バーのスクリーンショット](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. 変更するコマンドの横にある鉛筆アイコンをクリックします。
![キーボード ショートカット エディターのスクリーンショット](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. コマンドに使うキーストロークを入力し、<kbd>Enter</kbd>/<kbd>Return</kbd> キーを押します。
![キーボード ショートカットの編集テキストボックスのスクリーンショット](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## インライン候補の有効化または無効化

{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} のインライン候補を有効にするか無効にするかを選択できます。 

{% data reusables.copilot.vscode-settings %}
1. [設定] タブの左側のパネルで、 **[拡張機能]** をクリックし **[{% data variables.product.prodname_copilot_short %}]** を選びます。
1. [インライン候補:有効] の下にあるチェックボックスをオンまたはオフにして、インライン候補の有効または無効を設定します。

## 特定の言語に対する {% data variables.product.prodname_copilot %} の有効化または無効化

どの言語に対して {% data variables.product.prodname_copilot %} を有効にするか無効にするかを指定できます。

1. {% data variables.product.prodname_vscode %} から **[Extensions]\(拡張機能\)** タブをクリックし、 **[Copilot]** セクションに移動します。 詳細については、[インライン候補の有効化と無効化](#enabling-and-disabling-inline-suggestions)に関するページを参照してください。
1. [指定した言語に対して {% data variables.product.prodname_copilot_short %} を有効または無効にする] で、 **[settings.json で編集]** をクリックします。
1. _settings.json_ ファイルで、{% data variables.product.prodname_copilot %} を有効または無効にする言語を、追加または削除します。 たとえば、{% data variables.product.prodname_copilot %}で Python を有効にするには、リストに `"python": true` を追加し、最後以外のすべてのリスト項目の末尾にコンマがあることを確認します。

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

## {% data variables.product.prodname_copilot %} のプロキシ設定を構成する

{% data variables.product.prodname_vscode %} で HTTP プロキシ サーバー経由で接続するように {% data variables.product.prodname_copilot %} を構成できます。 {% data variables.product.prodname_copilot %} では、基本認証の有無にかかわらず、基本的な HTTP プロキシ設定がサポートされています。 

{% data reusables.copilot.vscode-settings %}
1. [設定] タブの左側のパネルで、 **[アプリケーション]** をクリックし **[プロキシ]** を選びます。
1. [プロキシ] の下のテキスト ボックスに、プロキシ サーバーのアドレスを入力します (例: `http://localhost:3128`)。 または、{% data variables.product.prodname_copilot %} では、お使いの環境の `http_proxy` 変数と `https_proxy` 変数を使用します。

   ![Visual Studio Code プロキシ テキスト ボックスのスクリーンショット](/assets/images/help/copilot/proxy-textbox.png)

1. 必要に応じて、[Http: プロキシ承認] で **[settings.json で編集]** をクリックし、すべてのネットワーク要求の `Proxy-Authorization` ヘッダーとして送信する必須の値を追加します。

   ![Visual Studio Code プロキシ承認テキスト ボックスのスクリーンショット](/assets/images/help/copilot/proxy-authorization.png)

1. 必要に応じて、[Http: Proxy Strict SSL] の下で、チェック ボックスをオンまたはオフにして、厳密な SSL を有効または無効にします。

   ![Visual Studio Code プロキシの厳密な SSL チェック ボックスのスクリーンショット](/assets/images/help/copilot/proxy-strict-ssl.png)

{% data reusables.copilot.dotcom-settings %}
