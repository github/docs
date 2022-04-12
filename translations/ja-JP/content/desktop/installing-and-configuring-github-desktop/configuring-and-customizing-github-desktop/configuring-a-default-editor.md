---
title: デフォルトエディタの設定方法
intro: GitHub デスクトップを設定して、お好みのテキストエディタまたは統合開発環境 (IDE) でプロジェクト内のファイルを開くようにすることができます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-a-default-editor
  - /desktop/installing-and-configuring-github-desktop/configuring-a-default-editor
versions:
  fpt: '*'
shortTitle: Configure default editor
---

## サポートされているエディタ

{% data variables.product.prodname_desktop %} は、次のエディタをサポートしています。

{% mac %}

- [Atom](https://atom.io/)
- [MacVim](https://macvim-dev.github.io/macvim/)
- [Visual Studio Code](https://code.visualstudio.com/)
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
  - {% data variables.product.prodname_desktop %} でブラケットを使用するには、コマンドラインのショートカットをインストールする必要があります。 ショートカットをインストールするには、Brackets を開き、メニューバーの [**File**] をクリックして、[**Install Command Line Shortcut**] をクリックします。
- [Typora](https://typora.io/)
- [CodeRunner](https://coderunnerapp.com/)
- [SlickEdit](https://www.slickedit.com/)
- [Xcode](https://developer.apple.com/xcode/)
- [RStudio](https://rstudio.com/)
- [Nova](https://nova.app/)
- [Android Studio](https://developer.android.com/studio)

{% endmac %}

{% windows %}

- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
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

{% endwindows %}

## デフォルトエディタの設定方法

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
3. Preferences（環境設定）ウィンドウで** Integrations（インテグレーション）**を選択してください。 ![環境設定ウィンドウのインテグレーションペイン](/assets/images/help/desktop/mac-select-integrations-pane.png)
4. [External Editor] ドロップダウンメニューを使用して、デフォルトとして設定するエディタを選択します。 ![Preferencesメニューバー内のExternal editorメニュー](/assets/images/help/desktop/mac-editor-menu.png)
5. [**Save**] をクリックします。

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
3. Options（オプション）ウィンドウで** Integrations（インテグレーション）**を選択してください。 ![オプションウィンドウのインテグレーションペイン](/assets/images/help/desktop/windows-select-integrations-pane.png)
4. [External Editor] ドロップダウンメニューを使用して、デフォルトとして設定するエディタを選択します。 ![Optionsメニューバー内のExternal editorメニュー](/assets/images/help/desktop/windows-editor-menu.png)
5. [**Save**] をクリックします。

{% endwindows %}
