---
title: デフォルトエディタの設定方法
intro: GitHub デスクトップを設定して、お好みのテキストエディタまたは統合開発環境 (IDE) でプロジェクト内のファイルを開くようにすることができます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-a-default-editor
  - /desktop/installing-and-configuring-github-desktop/configuring-a-default-editor
versions:
  fpt: '*'
shortTitle: Configure default editor
ms.openlocfilehash: 4316ed1b37b67e606f702cc4df805908b60c09cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146736614'
---
## サポートされているエディタ

{% data variables.product.prodname_desktop %} は、次のエディタをサポートしています。

{% mac %}

- [Atom](https://atom.io/)
- [MacVim](https://macvim-dev.github.io/macvim/)
- [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)
- [Visual Studio Codium](https://vscodium.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [BBEdit](http://www.barebones.com/products/bbedit/)
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
- [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
- [JetBrains Rider](https://www.jetbrains.com/rider/)
- [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
- [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
- [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [JetBrains GoLand](https://www.jetbrains.com/go/)
- [TextMate](https://macromates.com/)
- [Brackets](http://brackets.io/)
  - {% data variables.product.prodname_desktop %} でブラケットを使用するには、コマンドラインのショートカットをインストールする必要があります。 ショートカットをインストールするには、角かっこを開き、メニュー バーの **[ファイル]** をクリックし、 **[コマンド ライン ショートカットのインストール]** をクリックします。
- [Typora](https://typora.io/)
- [CodeRunner](https://coderunnerapp.com/)
- [SlickEdit](https://www.slickedit.com/)
- [Xcode](https://developer.apple.com/xcode/)
- [RStudio](https://rstudio.com/)
- [Nova](https://nova.app/)
- [Android Studio](https://developer.android.com/studio)
- [Aptana Studio](http://www.aptana.com/)

{% endmac %}

{% windows %}

- [Atom](https://atom.io/)
- [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)
- [Visual Studio Codium](https://vscodium.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [ColdFusion Builder](https://www.adobe.com/products/coldfusion-builder.html)
- [Typora](https://typora.io/)
- [SlickEdit](https://www.slickedit.com/)
- [JetBrains IntelliJ Idea](https://www.jetbrains.com/idea/)
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
- [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
- [JetBrains Rider](https://www.jetbrains.com/rider/)
- [JetBrains CLion](https://www.jetbrains.com/clion/)
- [JetBrains PyCharm](https://www.jetbrains.com/pycharm/)
- [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
- [JetBrains GoLand](https://www.jetbrains.com/go/)
- [Android Studio](https://developer.android.com/studio)
- [Brackets](http://brackets.io/)
- [Notepad++](https://notepad-plus-plus.org/)
- [RStudio](https://rstudio.com/)
- [Aptana Studio](http://www.aptana.com/)

{% endwindows %}

## デフォルトエディタの設定方法

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
3. [基本設定] ウィンドウで、 **[統合]** を選択します。
  ![[基本設定] ウィンドウの [統合] ペイン](/assets/images/help/desktop/mac-select-integrations-pane.png)
4. [External Editor] ドロップダウンメニューを使用して、デフォルトとして設定するエディタを選択します。
  ![[基本設定] メニュー バーの [External editor] メニュー](/assets/images/help/desktop/mac-editor-menu.png)
5. **[保存]** をクリックします。  

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
3. [オプション] ウィンドウで、 **[統合]** を選択します。
  ![[オプション] ウィンドウの [統合] ペイン](/assets/images/help/desktop/windows-select-integrations-pane.png)
4. [External Editor] ドロップダウンメニューを使用して、デフォルトとして設定するエディタを選択します。
  ![[オプション] メニュー バーの [External editor] メニュー](/assets/images/help/desktop/windows-editor-menu.png)
5. **[保存]** をクリックします。  

{% endwindows %}
