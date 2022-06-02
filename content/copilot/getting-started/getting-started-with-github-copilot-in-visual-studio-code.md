---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Visual Studio Code, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - copilot
versions:
  feature: 'copilot'
---

## Prerequisites

{% data reusables.copilot.copilot-prerequisites %}
- To use {% data variables.product.prodname_copilot %} in Visual Studio Code, you must have Visual Studio Code installed. For more information, see the [Visual Studio Code](https://code.visualstudio.com/) documentation.


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
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
   ![First suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
  {% data variables.product.prodname_copilot %} will show you a suggestion.
3. To see alternate suggestions:
   - On macOS, press `Option (⌥) or Alt`+`]` (or `Option (⌥) or Alt`+`[`).
   - On Windows, press `Alt`+`]` (or `Alt`+`[`).
4. If {% data variables.product.prodname_copilot %} offers a suggestion you want to accept, press `Tab`.
5. Alternatively, to reject all suggestions, press `Esc`.
6. Optionally, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.

## Getting more suggestions

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
  {% data variables.product.prodname_copilot %} will show you a suggestion.
2. To open a new tab with multiple additional options, press `Ctrl`+`Enter`.
3. To accept a suggestion from the new tab, above the suggestion you want to accept, click **Accept solution**.
   ![Suggestions pane in Visual Studio Code](/assets/images/help/copilot/suggestions-pane-visual-studio-code.png)
4. Alternatively, to reject all the suggestions, close the "Copilot" tab.

## Generating code suggestions from comments

{% data variables.product.prodname_copilot %} can also generate code suggestions from comments.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment:
   ```
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```
   {% data variables.product.prodname_copilot %} will suggest an implementation of the function.

## Using a framework

You can also use {% data variables.product.prodname_copilot %} to generate suggestions for APIs and frameworks.This example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press `Enter`:
   ```
   // Express server on port 3000
   ```
   {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.
1. To accept each line, press `Tab`, then `Enter`.
1. Type the following comment and then press `Enter`:
   ```
   // Return the current time
   ```
   {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
1. To accept each line, press `Tab`.

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within Visual Studio Code. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the Visual Studio Code window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast the color of the status bar.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the Visual Studio Code window.
   ![Status icon in Visual Studio Code](/assets/images/help/copilot/status-icon-visual-studio-code.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable globally**. Alternatively, click the button to disable for the language of the file you are editing.
   ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage.png)

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
