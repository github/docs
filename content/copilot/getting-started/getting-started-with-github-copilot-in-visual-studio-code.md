---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in Visual Studio Code, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - copilot
versions:
  versions:
  fpt: '*'
  ghec: '*'
---

## Prerequisites

- {% data variables.product.prodname_copilot %} is free to use for verified students and open source maintainers. 
- If you are not a student or open source maintainer, you can try {% data variables.product.prodname_copilot %} for free with a one-time 60 day trial. After the free trial, a paid subscription is required for continued use. You must provide billing information in order to start a free trial. For more information, see "[About billing for {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."
- To use {% data variables.product.prodname_copilot %} in Visual Studio Code, you must have Visual Studio Code installed. For more information, see the [Visual Studio Code](https://code.visualstudio.com/) documentation.


## Installing the Visual Studio code extension

To use {% data variables.product.prodname_copilot %}, you must first install the Visual Studio Code extension.

1. In the Visual Studio Code Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
   ![Install GitHub Copilot extension Visual Studio Code](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
2. A popup will appear, asking to open Visual Studio Code. Click **Open Visual Studio Code**.
3. In the "Extension: {% data variables.product.prodname_copilot %}" tab in Visual Studio Code, click **Install**.
   ![Install button in Visual Studio Code](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
4. 


## Seeing your first suggestion

{% data variables.product.prodname_copilot %} provides suggestions for numerous languages and a wide variety of frameworks, but works especially well for Python, JavaScript, TypeScript, Ruby, and Go. The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
   ![First suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
3. To accept the suggestion, press `Tab`.

## Seeing alternative suggestions

For any given input, {% data variables.product.prodname_copilot %} can offer multiple suggestions. You can select which suggestion to use, or reject them all.

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

You may not want any of the initial suggestions {% data variables.product.prodname_copilot %} offers. You can ask {% data variables.product.prodname_copilot %} to provide additional suggestions.

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
   {% data variables.product.prodname_copilot %} will suggestion an implementation of the function.

## Using a framework

## Enabling and disabling {% data variables.product.prodname_copilot %}