---
title: 配置默认编辑器
intro: 您可以配置 GitHub Desktop 在项目中使用您首选的文本编辑器或集成开发环境 (IDE) 打开文件。
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-a-default-editor
  - /desktop/installing-and-configuring-github-desktop/configuring-a-default-editor
versions:
  fpt: '*'
shortTitle: Configure default editor
ms.openlocfilehash: 4316ed1b37b67e606f702cc4df805908b60c09cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146736611'
---
## 支持的编辑器

{% data variables.product.prodname_desktop %} 支持以下编辑器。

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
  - 要将 Brackets 与 {% data variables.product.prodname_desktop %} 一起使用，您必须安装命令行快捷方式。 若要安装快捷方式，请打开方括号，单击菜单栏中的“文件”，然后单击“安装命令行快捷方式” 。
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

## 配置默认编辑器

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
3. 在“首选项”窗口中，选择“集成”。
  ![“首选项”窗口中的“集成”窗格](/assets/images/help/desktop/mac-select-integrations-pane.png)
4. 使用“External Editor（外部编辑器）”下拉菜单，选择要设为默认的编辑器。
  ![“首选项”菜单栏中的“外部编辑器”菜单](/assets/images/help/desktop/mac-editor-menu.png)
5. 单击“ **保存**”。  

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
3. 在“选项”窗口中，选择“集成”。
  ![“选项”窗口中的“集成”窗格](/assets/images/help/desktop/windows-select-integrations-pane.png)
4. 使用“External Editor（外部编辑器）”下拉菜单，选择要设为默认的编辑器。
  ![“选项”菜单栏中的“外部编辑器”菜单](/assets/images/help/desktop/windows-editor-menu.png)
5. 单击“ **保存**”。  

{% endwindows %}
