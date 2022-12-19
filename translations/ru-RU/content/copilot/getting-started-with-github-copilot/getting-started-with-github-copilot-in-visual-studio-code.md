---
title: Начало работы с GitHub Copilot в Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Узнайте, как установить {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %} и начать видеть предложения при написании комментариев и кода.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192772'
---
{% data reusables.copilot.copilot-cta-button %}

## Сведения о {% data variables.product.prodname_copilot %} и {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

Если вы используете {% data variables.product.prodname_vscode %}, вы можете просматривать и включать предложения из {% data variables.product.prodname_copilot %} непосредственно в редакторе. В этом руководстве описано, как использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %} для macOS, Windows или Linux.

## Предварительные требования

{% data reusables.copilot.subscription-prerequisite %}

- Чтобы использовать {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_vscode %}, необходимо установить {% data variables.product.prodname_vscode %}. Дополнительные сведения см. на [странице загрузки {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/Download).

## Установка расширения {% data variables.product.prodname_vscode %}

Чтобы использовать {% data variables.product.prodname_copilot %}, сначала установите {% data variables.product.prodname_vscode %}.

1. В {% data variables.product.prodname_vscode %} Marketplace перейдите на страницу [Расширение {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) и щелкните **Установить**.
   ![Установка расширения {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Появится всплывающее окно с просьбой открыть {% data variables.product.prodname_vscode %}. Щелкните **Открыть {% data variables.product.prodname_vscode %}** .
1. На вкладке "Расширение: {% data variables.product.prodname_copilot %}" в {% data variables.product.prodname_vscode %} щелкните **Установить**.
   ![Кнопка установки в {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Если вы еще не авторизовали {% data variables.product.prodname_vscode %} в учетной записи {% data variables.product.prodname_dotcom %}, появится запрос на вход в {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_vscode %}.
   - Если вы уже авторизовали {% data variables.product.prodname_vscode %} для учетной записи на {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} будет авторизован автоматически.
   ![Снимок экрана: экран авторизации {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. В браузере {% data variables.product.prodname_dotcom %} запросит необходимые разрешения для {% data variables.product.prodname_copilot %}. Чтобы одобрить эти разрешения, щелкните **Авторизовать {% data variables.product.prodname_vscode %}** .
1. В {% data variables.product.prodname_vscode %} в диалоговом окне "{% data variables.product.prodname_vscode %}" для подтверждения подлинности щелкните **Открыть**.
   

## Просмотр первого предложения

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Следующие примеры находятся на JavaScript, но другие языки будут работать аналогичным образом.

{% data reusables.copilot.create-js-file %}
1. В файле JavaScript введите следующий заголовок функции. {% data variables.product.prodname_copilot %} автоматически предложит весь текст функции, выделенный серым цветом, как показано ниже. Точное предложение может отличаться.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Снимок экрана: первое предложение {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Просмотр альтернативных предложений

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. В файле JavaScript введите следующий заголовок функции. {% data variables.product.prodname_copilot %} покажет предложение.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | Смотреть следующее предложение | Смотреть предыдущее предложение |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) или ALT</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) или ALT</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>ALT</kbd>+<kbd>]</kbd>|<kbd>ALT</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>ALT</kbd>+<kbd>]</kbd>|<kbd>ALT</kbd>+<kbd>[</kbd>|
1. Кроме того, можно навести указатель мыши на предложение, чтобы просмотреть палитру команд {% data variables.product.prodname_copilot %} для выбора предложений.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Просмотр нескольких предложений на новой вкладке

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. В файле JavaScript введите следующий заголовок функции. {% data variables.product.prodname_copilot %} покажет предложение.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. Чтобы открыть новую вкладку с несколькими дополнительными параметрами, нажмите <kbd>CTRL</kbd>+<kbd>ВВОД</kbd>.
1. Чтобы принять предложение, над предложением нажмите кнопку **Принять решение**. Чтобы отклонить все предложения, закройте вкладку.

## Создание предложений кода из комментариев

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. В файле JavaScript введите следующий комментарий. {% data variables.product.prodname_copilot %} предложит реализацию функции.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Использование платформы

Вы также можете использовать {% data variables.product.prodname_copilot %} для создания предложений для API и платформ. В следующем примере для создания простого сервера Express, возвращающего текущее время, используется {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.create-js-file %}
1. В файле JavaScript введите следующий комментарий и нажмите клавишу <kbd>ВВОД</kbd>. {% data variables.product.prodname_copilot %} предложит реализацию приложения Express.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. Чтобы принять каждую строку, нажмите клавишу <kbd>TAB</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Дополнительные сведения

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
