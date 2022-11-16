---
title: Настройка редактора по умолчанию
intro: Вы можете настроить GitHub Desktop для открытия файлов в проекте с помощью предпочтительного текстового редактора или интегрированной среды разработки (IDE).
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-a-default-editor
  - /desktop/installing-and-configuring-github-desktop/configuring-a-default-editor
versions:
  fpt: '*'
shortTitle: Configure default editor
ms.openlocfilehash: 0d0dbae9fce67d7bda890fa5a72ea3b5b92de46b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009864'
---
## Поддерживаемые редакторы

{% data variables.product.prodname_desktop %} поддерживает следующие редакторы.

{% mac %}

- [MacVim](https://macvim-dev.github.io/macvim/)
- [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)
- [Visual Studio Codium](https://vscodium.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [BBEdit](http://www.barebones.com/products/bbedit/)
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
- [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
- [JetBrains Rider;](https://www.jetbrains.com/rider/)
- [JetBrains PyCharm;](https://www.jetbrains.com/pycharm/)
- [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
- [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [JetBrains GoLand](https://www.jetbrains.com/go/)
- [TextMate](https://macromates.com/)
- [Brackets](http://brackets.io/)
  - Чтобы использовать Brackets с {% data variables.product.prodname_desktop %}, необходимо установить ярлык командной строки. Чтобы установить ярлык, откройте Brackets, щелкните **Файл** в строке меню, затем щелкните **Установить ярлык командной строки**.
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

- [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)
- [Visual Studio Codium](https://vscodium.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [ColdFusion Builder](https://www.adobe.com/products/coldfusion-builder.html)
- [Typora](https://typora.io/)
- [SlickEdit](https://www.slickedit.com/)
- [JetBrains IntelliJ Idea](https://www.jetbrains.com/idea/)
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
- [JetBrains PhpStorm](https://www.jetbrains.com/phpstorm/)
- [JetBrains Rider;](https://www.jetbrains.com/rider/)
- [JetBrains CLion](https://www.jetbrains.com/clion/)
- [JetBrains PyCharm;](https://www.jetbrains.com/pycharm/)
- [JetBrains RubyMine](https://www.jetbrains.com/rubymine/)
- [JetBrains GoLand](https://www.jetbrains.com/go/)
- [Android Studio](https://developer.android.com/studio)
- [Brackets](http://brackets.io/)
- [Notepad++](https://notepad-plus-plus.org/)
- [RStudio](https://rstudio.com/)
- [Aptana Studio](http://www.aptana.com/)

{% endwindows %}

## Настройка редактора по умолчанию

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
3. В окне "Настройки" выберите **Интеграции**.
  ![Панель "Интеграции" в окне "Настройки"](/assets/images/help/desktop/mac-select-integrations-pane.png)
4. Используйте раскрывающееся меню "Внешний редактор" и выберите редактор, который необходимо установить по умолчанию.
  ![Меню внешнего редактора в строке меню "Настройки"](/assets/images/help/desktop/mac-editor-menu.png)
5. Выберите команду **Сохранить**.  

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
3. В окне "Параметры" выберите **Интеграции**.
  ![Панель "Интеграции" в окне "Параметры"](/assets/images/help/desktop/windows-select-integrations-pane.png)
4. Используйте раскрывающееся меню "Внешний редактор" и выберите редактор, который необходимо установить по умолчанию.
  ![Меню внешнего редактора в строке меню "Параметры"](/assets/images/help/desktop/windows-editor-menu.png)
5. Выберите команду **Сохранить**.  

{% endwindows %}
