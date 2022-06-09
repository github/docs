---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Visual Studio Code, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: 'copilot'
topics: 
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Visual Studio Code

{% data reusables.copilot.procedural-intro %}

ADD MORE HERE!

## Prerequisites

To use {% data variables.product.prodname_copilot %} in Visual Studio Code, you must have Visual Studio Code installed. For more information, see the [Visual Studio Code download page](https://code.visualstudio.com/Download).

## Installing the Visual Studio code extension

To use {% data variables.product.prodname_copilot %}, you must first install the Visual Studio Code extension.

1. In the Visual Studio Code Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
   ![Install {% data variables.product.prodname_copilot %} extension Visual Studio Code](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
2. A popup will appear, asking to open Visual Studio Code. Click **Open Visual Studio Code**.
3. In the "Extension: {% data variables.product.prodname_copilot %}" tab in Visual Studio Code, click **Install**.
   ![Install button in Visual Studio Code](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
4. 


## Seeing your first suggestion

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Screenshot of a first suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
3. Optionally, you can see alternative suggestions.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. Alternatively, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. To open a new tab with multiple additional options, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```
   
## Using a framework

You can also use {% data variables.product.prodname_copilot %} to generate suggestions for APIs and frameworks. The following example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>.
   ```javascript{:copy}
   // Express server on port 3000
   ```
   {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. To accept each line, press <kbd>Tab</kbd>.

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within Visual Studio Code. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the Visual Studio Code window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast with the color of the status bar.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the Visual Studio Code window.
   ![Screenshot of the status icon in Visual Studio Code](/assets/images/help/copilot/status-icon-visual-studio-code.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from {% data variables.product.prodname_copilot %} globally, click **Disable Globally**.
   - To disable suggestions from {% data variables.product.prodname_copilot %} for the specified language, click **Disable for _LANGUAGE_**.
   ![Screenshot of option to disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage.png)

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
