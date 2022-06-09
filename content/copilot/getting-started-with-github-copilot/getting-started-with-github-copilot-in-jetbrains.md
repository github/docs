---
title: Getting started with GitHub Copilot in JetBrains
shortTitle: JetBrains
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in JetBrains, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: 'copilot'
topics: 
  - Copilot
---

## Prerequisites

- To use {% data variables.product.prodname_copilot %} in JetBrains, you must have JetBrains IDEs installed. For more information, see the [JetBrains IDEs](https://www.jetbrains.com/idea/download/) documentation.

## Installing the JetBrains extension


## Seeing your first suggestion

{% data reusables.copilot.supported-languages %} The following samples are in Java, but other languages will work similarly.

{% data reusables.copilot.create-java-file %}
1. In the Java file, create a class by typing `class Test`.
   {% data variables.product.prodname_copilot %} will automatically suggest a class body in grayed text, as shown below. The exact suggestion may vary.
   ![Screenshot of the Java class body suggestion](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest a function body, type the following line below the bracket of the `main` function. The exact suggestion may vary.
    ```java{:copy}
    int calculateDaysBetweenDates
    ```
    ![Screenshot of the Java function body suggestion](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} will attempt to match the context and style of your code. You can always edit the suggested code.

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to show you a suggestion, type the following line in the Java file.

   ```java{:copy}
    int calculateDaysBetweenDates(
    ```
1. Optionally, you can see alternative suggestions.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
1. To accept a suggestion, press <kbd>Tab</kbd>. To reject all suggestions, press <kbd>Esc</kbd>.

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. In the Java file, type the following:
    ```
    int calculateDaysBetweenDates(
    ```
  {% data variables.product.prodname_copilot %} will show you a suggestion.
1. Open a new tab with multiple additional suggestions.
    - On macOS, press <kbd>Option</kbd>+<kbd>Enter</kbd>, then click **Open GitHub Copilot**.
    - On Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, then click **Open GitHub Copilot**.
  ![Screenshot of dialogue to open Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data variables.product.prodname_copilot %} can also generate code suggestions from comments.

{% data reusables.copilot.create-java-file %}
1. In the Java file, type the following:
    ```
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  {% data variables.product.prodname_copilot %} will suggest an implementation of the function.
  ![Screenshot of the Java function body suggestion](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within JetBrains. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window.
   ![Screenshot of the status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable completions for the specified language.
   ![Screenshot of option to disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
