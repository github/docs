---
title: Настройка GitHub Copilot в Visual Studio Code
intro: 'Вы можете включить, настроить и отключить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080601'
---
## Сведения о {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}

Если вы используете {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} может автоматически завершать код по мере ввода. После установки можно включить или отключить {% data variables.product.prodname_copilot %}, а также настроить дополнительные параметры в {% data variables.product.prodname_vscode %} или на {% data variables.product.prodname_dotcom_the_website %}.

## Предварительные требования

Чтобы настроить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}, установите подключаемый модуль {% data variables.product.prodname_copilot %}. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code).

## Сочетания клавиш для {% data variables.product.prodname_copilot %}

Сочетания клавиш по умолчанию можно использовать в {% data variables.product.prodname_vscode %} при использовании {% data variables.product.prodname_copilot %}. Кроме того, можно изменить привязку сочетаний клавиш в редакторе сочетаний клавиш, указав предпочитаемые сочетания клавиш для каждой конкретной команды. Вы можете найти каждое сочетание клавиш по имени команды в редакторе сочетаний клавиш.

{% mac %}

| Действие | Сочетание клавиш | Имя команды |
|:---|:---|:---|
|Принять встроенное предложение|<kbd>Вкладка</kbd>|editor.action.inlineSuggest.commit|
|Отклонить встроенное предложение|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Показать следующее встроенное предложение| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Показать предыдущее встроенное предложение| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Активировать встроенное предложение| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Открыть {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>CTRL</kbd>+<kbd>RETURN</kbd>|github.copilot.generate|
|Включить/отключить {% data variables.product.prodname_copilot %}|_Нет сочетания клавиш по умолчанию_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Действие | Сочетание клавиш | Имя команды |
|:---|:---|:---|
|Принять встроенное предложение|<kbd>Вкладка</kbd>|editor.action.inlineSuggest.commit|
|Отклонить встроенное предложение|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Показать следующее встроенное предложение|<kbd>ALT</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Показать предыдущее встроенное предложение|<kbd>ALT</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Активировать встроенное предложение|<kbd>ALT</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Открыть {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>CTRL</kbd>+<kbd>ВВОД</kbd>|github.copilot.generate|
|Включить/отключить {% data variables.product.prodname_copilot %}|_Нет сочетания клавиш по умолчанию_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Действие | Сочетание клавиш | Имя команды |
|:---|:---|:---|
|Принять встроенное предложение|<kbd>Вкладка</kbd>|editor.action.inlineSuggest.commit|
|Отклонить встроенное предложение|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Показать следующее встроенное предложение|<kbd>ALT</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Показать предыдущее встроенное предложение|<kbd>ALT</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Активировать встроенное предложение|<kbd>ALT</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Открыть {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>CTRL</kbd>+<kbd>ВВОД</kbd>|github.copilot.generate|
|Включить/отключить {% data variables.product.prodname_copilot %}|_Нет сочетания клавиш по умолчанию_|github.copilot.toggleCopilot|

{% endlinux %}

## Повторное связывание сочетаний клавиш

Если вы не хотите использовать сочетания клавиш по умолчанию в {% data variables.product.prodname_vscode %} при использовании {% data variables.product.prodname_copilot %}, можно повторно привязать сочетания клавиш в редакторе сочетаний клавиш, указав предпочитаемые сочетания клавиш для каждой конкретной команды.

1. В меню **Файл** выберите пункт **Параметры** и щелкните **Сочетания клавиш**.
![Снимок экрана: сочетания клавиш Visual Studio Code](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. В редакторе сочетаний клавиш найдите имя команды, которую нужно изменить.
![Снимок экрана: панель поиска сочетаний клавиш](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Рядом с командой, которую нужно изменить, щелкните значок карандаша.
![Снимок экрана: редактор сочетаний клавиш](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Введите сочетание клавиш, которое вы хотите использовать для команды, а затем нажмите клавишу <kbd>ВВОД</kbd>/<kbd>RETURN</kbd>.
![Снимок экрана: текстовое поле "Изменить сочетание клавиш"](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Включение или отключение встроенных предложений

Вы можете включить или отключить встроенные предложения для {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}. 

1. В меню **Файл** перейдите к разделу **Параметры** и выберите пункт **Параметры**.
![Снимок экрана: параметры {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. На левой панели вкладки "Параметры" щелкните **Расширения** и выберите **Copilot**.
1. В разделе "Встроенные предложения: включить" установите или снимите флажок, чтобы включить или отключить встроенные предложения.

## Включение или отключение {% data variables.product.prodname_copilot %} для конкретных языков

Вы можете указать языки, для которых требуется включить или отключить {% data variables.product.prodname_copilot %}.

1. В {% data variables.product.prodname_vscode %} перейдите на вкладку **Расширения**, а затем перейдите к разделу **Copilot**. Дополнительные сведения см. в разделе [Включение и отключение встроенных предложений](#enabling-and-disabling-inline-suggestions).
1. В разделе "Включить или отключить Copilot для указанных языков" нажмите кнопку **Изменить в файле settings.json**.
1. В файле _settings.json_ добавьте или удалите языки, для которого требуется включить или отключить {% data variables.product.prodname_copilot %}. Например, чтобы включить Python в {% data variables.product.prodname_copilot %}, добавьте в список `"python": true`, убедившись, что после всех элементов списка, кроме последнего, стоит запятая.

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
