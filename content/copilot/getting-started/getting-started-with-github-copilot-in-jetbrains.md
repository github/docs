---
title: Getting started with GitHub Copilot in JetBrains
shortTitle: JetBrains
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in JetBrains, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  versions:
  fpt: '*'
  ghec: '*'
---

## Prerequisites

{% data reusables.copilot.copilot-prerequisites %}
- To use {% data variables.product.prodname_copilot %} in JetBrains, you must have JetBrains IDEs installed. For more information, see the [JetBrains IDEs](https://www.jetbrains.com/idea/download/) documentation.

## Installing the Visual Studio code extension


## Seeing your first suggestion

{% data reusables.copilot.supported-languages %} The following samples are in Java, but other languages will work similarly.

{% data reusables.copilot.create-java-file %}
1. In the Java file, create a class by typing `class Test`.
   {% data variables.product.prodname_copilot %} will automatically suggest a class body in grayed text, as shown below. The exact suggestion may vary.
   ![Java class body suggestion](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}
1. Below the bracket of the `main` function, type the following function header:
    ```
    int calculateDaysBetweenDates
    ```
    {% data variables.product.prodname_copilot %} will automatically suggest a function body in grayed text, as shown below. The exact suggestion may vary.
    ![Java function body suggestion](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} will attempt to match your code's context and style. You can edit the suggested code as is necessary.

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. In the Java file, type the following:
    ```
    int calculateDaysBetweenDates(
    ```
  {% data variables.product.prodname_copilot %} will show you a suggestion.
1. To see alternative suggestions:
    - On macOS, press `Option`+`]` for the next suggestion, or `Option`+`[` for the previous suggestion.
    - On Windows or Linux, press `Alt`+`]` for the next suggestion, or `Alt`+`[` for the previous suggestion.
1. If {% data variables.product.prodname_copilot %} offers a suggestion you want to accept, press `Tab`.
1. Alternatively, to reject all suggestions, press `Esc`.

## Getting more suggestions

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. In the Java file, type the following:
    ```
    int calculateDaysBetweenDates(
    ```
  {% data variables.product.prodname_copilot %} will show you a suggestion.
1. To open a new tab with multiple additional options: 
    - On macOS, press `Option`+`Enter`, and select **Open Copilot**.
    - On Windows or Linux, press `Ctrl`+`Enter`, and select **Open Copilot**.
  ![Open Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
  {% data variables.product.prodname_copilot %} will open a new tab and suggest multiple options.
1. If you want to accept one of the suggestions, above that suggestion, click **Accept Solution**.
  ![Accept Solution](/assets/images/help/copilot/copilot-tab-jetbrains.png)
1. Alternatively, to reject all suggestions, close the suggestions tab.

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
  ![Java function body suggestion](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within JetBrains. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window.
   ![Status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the button to disable completions for the language of the file you are currently editing.
   ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Further reading

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
[About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)