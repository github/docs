---
title: Visual Studio Code での GitHub Copilot の構成
intro: '{% data variables.product.prodname_vscode %} で {% data variables.product.prodname_copilot %} を有効化、構成、無効化できます。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080182'
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

1. **[File]\(ファイル\)** メニューで **[Preferences]\(基本設定\)** に移動し、 **[Settings]\(設定\)** をクリックします。
![{% data variables.product.prodname_vscode %} 設定のスクリーンショット](/assets/images/help/copilot/vsc-settings.png)
1. [Settings]\(設定\) タブの左側のパネルで、 **[Extensions]\(拡張機能\)** をクリックし **[Copilot]** を選びます。
1. [Inline Suggest:Enable]\(インライン候補:有効\) の下にあるチェックボックスをオンまたはオフにして、インライン候補の有効または無効を設定します。

## 特定の言語に対する {% data variables.product.prodname_copilot %} の有効化または無効化

どの言語に対して {% data variables.product.prodname_copilot %} を有効にするか無効にするかを指定できます。

1. {% data variables.product.prodname_vscode %} から **[Extensions]\(拡張機能\)** タブをクリックし、 **[Copilot]** セクションに移動します。 詳細については、[インライン候補の有効化と無効化](#enabling-and-disabling-inline-suggestions)に関するページを参照してください。
1. [指定した言語に対して Copilot を有効または無効にする] で、 **[settings.json で編集]** をクリックします。
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

{% data reusables.copilot.dotcom-settings %}
