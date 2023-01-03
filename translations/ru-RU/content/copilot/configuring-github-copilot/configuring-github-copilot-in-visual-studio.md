---
title: Настройка GitHub Copilot в Visual Studio
intro: 'Вы можете включить, настроить и отключить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: 05ac86405caadf3085b15a2aed9b54acb84f91f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193472'
---
## Сведения о {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %}

Если вы используете {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} может автоматически завершать код по мере ввода. После установки можно включить или отключить {% data variables.product.prodname_copilot %}, а также настроить дополнительные параметры в {% data variables.product.prodname_vs %} или на сайте {% data variables.product.prodname_dotcom_the_website %}.

## Предварительные требования

Чтобы настроить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %}, установите подключаемый модуль {% data variables.product.prodname_copilot %}. Дополнительные сведения см. в статье [Начало работы с {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio).

## Сочетания клавиш для {% data variables.product.prodname_copilot %}

Вы можете использовать сочетания клавиш по умолчанию в {% data variables.product.prodname_vs %} при использовании {% data variables.product.prodname_copilot %}. Кроме того, можно изменить привязку сочетаний клавиш в параметрах {% data variables.product.prodname_vs %} на вкладке "Средства", указав предпочитаемые сочетания клавиш для каждой конкретной команды. Вы можете найти каждое сочетание клавиш по имени команды в редакторе сочетаний клавиш.

| Действие | Сочетание клавиш | Имя команды |
|:---|:---|:---|
|Показать следующее встроенное предложение|<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Показать предыдущее встроенное предложение|<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Активировать встроенное предложение|<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Повторная привязка сочетаний клавиш

Если вы не хотите использовать сочетания клавиш по умолчанию в {% data variables.product.prodname_vs %} при использовании {% data variables.product.prodname_copilot %}, можно повторно привязать сочетания клавиш в редакторе сочетаний клавиш, указав предпочитаемые сочетания клавиш для каждой конкретной команды.

1. На панели инструментов {% data variables.product.prodname_vs %} в разделе **Средства** щелкните **Параметры**.
   
   ![Снимок экрана: элемент "Параметры" на панели инструментов {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)

1. В диалоговом окне "Параметры" в разделе **Среда** щелкните **Клавиатура**.
   
   ![Снимок экрана: пункт "Клавиатура" в диалоговом окне "Параметры"](/assets/images/help/copilot/vs-options-dialogue.png)

1. В поле "Показать команды, содержащие:" найдите команду, которую требуется повторно привязать.
   
   ![Снимок экрана: отображение команд, содержащих панель поиска](/assets/images/help/copilot/vs-show-commands-containing.png)

1. В разделе "Нажатие сочетаний клавиш" введите ярлык, который нужно назначить команде, а затем нажмите кнопку **Назначить**.

   ![Снимок экрана: назначение сочетания клавиш](/assets/images/help/copilot/vs-rebind-shortcut.png)```

{% data reusables.copilot.enabling-or-disabling-vs %}

## Настройка ReSharper для {% data variables.product.prodname_copilot %}

Если вы используете ReSharper, {% data variables.product.prodname_copilot %} будет лучше работать при настройке ReSharper для использования собственной технологии IntelliSense компонента {% data variables.product.prodname_copilot %}. Дополнительные сведения о ReSharper см. в [документации по ReSharper](https://www.jetbrains.com/resharper/documentation/documentation.html).

1. На панели инструментов {% data variables.product.prodname_vs %} в разделе **Средства** щелкните **Параметры**.
   ![Снимок экрана: элемент "Параметры" на панели инструментов {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. В диалоговом окне "Параметры" в разделе **Среда** щелкните **IntelliSense** и выберите **Общие**.
    ![Снимок экрана: пункт IntelliSense в диалоговом окне "Параметры"](/assets/images/help/copilot/vs-options-intellisense.png)
1. В разделе "Общие" выберите **Visual Studio** и нажмите кнопку **Сохранить**.

{% data reusables.copilot.dotcom-settings %}
