---
title: Настройка GitHub Copilot в Visual Studio Code
intro: 'Вы можете включить, настроить и отключить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: ab043d4eeca2003deaf77aa80be46fc79acf8649
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193571'
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

{% data reusables.copilot.vscode-settings %}
1. На левой панели вкладки параметров щелкните **Расширения** , а затем выберите **{% data variables.product.prodname_copilot_short %}**.
1. В разделе "Встроенное предложение:включить" установите или снимите флажок, чтобы включить или отключить встроенные предложения.

## Включение или отключение {% data variables.product.prodname_copilot %} для конкретных языков

Вы можете указать языки, для которых требуется включить или отключить {% data variables.product.prodname_copilot %}.

1. В {% data variables.product.prodname_vscode %} перейдите на вкладку **Расширения**, а затем перейдите к разделу **Copilot**. Дополнительные сведения см. в разделе [Включение и отключение встроенных предложений](#enabling-and-disabling-inline-suggestions).
1. В разделе "Включить или отключить {% data variables.product.prodname_copilot_short %} для указанных языков" щелкните **Изменить в файле settings.json**.
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

## Настройка параметров прокси-сервера для {% data variables.product.prodname_copilot %}

Вы можете настроить {% data variables.product.prodname_copilot %} для подключения через прокси-сервер HTTP в {% data variables.product.prodname_vscode %}. {% data variables.product.prodname_copilot %} поддерживает базовую настройку прокси-сервера HTTP с обычной проверкой подлинности или без нее. 

{% data reusables.copilot.vscode-settings %}
1. На левой панели вкладки параметров щелкните **Приложение** , а затем выберите **Прокси-сервер**.
1. В текстовом поле в разделе "Прокси-сервер" введите адрес прокси-сервера, например `http://localhost:3128`. Кроме того, {% data variables.product.prodname_copilot %} будет использовать `http_proxy` переменные и `https_proxy` из вашей среды.

   ![Снимок экрана: текстовое поле прокси-сервера Visual Studio Code](/assets/images/help/copilot/proxy-textbox.png)

1. При необходимости в разделе "Http: авторизация прокси-сервера" щелкните **Изменить в файле settings.json** и добавьте необходимое значение для отправки в качестве заголовка `Proxy-Authorization` для каждого сетевого запроса.

   ![Снимок экрана: текстовое поле авторизации прокси-сервера Visual Studio Code](/assets/images/help/copilot/proxy-authorization.png)

1. При необходимости в разделе "Http: прокси-сервер строгий SSL" установите или снимите флажок, чтобы включить или отключить строгий SSL.

   ![Снимок экрана: Visual Studio Code флажок SSL строгого прокси-сервера](/assets/images/help/copilot/proxy-strict-ssl.png)

{% data reusables.copilot.dotcom-settings %}
