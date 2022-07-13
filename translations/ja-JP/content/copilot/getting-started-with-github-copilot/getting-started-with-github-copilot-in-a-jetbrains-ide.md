---
title: Getting started with GitHub Copilot in a JetBrains IDE
shortTitle: JetBrains IDE
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in a JetBrains IDE, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and JetBrains IDEs

{% data reusables.copilot.procedural-intro %}

If you use a JetBrains IDE, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within a JetBrains IDE for macOS, Windows, or Linux.

## 必要な環境

{% data reusables.copilot.jetbrains-ides %}

## Installing the JetBrains extension

To use {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} extension. The following procedure will guide you through installation of the {% data variables.product.prodname_copilot %} plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

1. In your JetBrains IDE, under the **File** menu, click **Settings**.
1. At the top of the "Settings" dialog box, click **Marketplace**. In the search bar, search for **{% data variables.product.prodname_copilot %}** and click **Install**. ![Screenshot of Marketplace search](/assets/images/help/copilot/jetbrains-marketplace.png)
1. After {% data variables.product.prodname_copilot %} is installed, click **Restart IDE**.
1. After your JetBrains IDE has restarted, click the **Tools** menu. Click **{% data variables.product.prodname_copilot %}**, then click **Login to {% data variables.product.prodname_dotcom %}**. ![Screenshot of JetBrains tools menu](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. In the "Sign in to {% data variables.product.prodname_dotcom %}" dialog box, to copy the device code and open the device activation window, click **Copy and Open**. ![Screenshot of device code copy and open](/assets/images/help/copilot/device-code-copy-and-open.png)
1. A device activation window will open in your browser. Paste the device code, then click **Continue**.

   - To paste the code in Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - To paste the code in macOS, press <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_copilot %} Plugin**.
1. After the permissions have been approved, your JetBrains IDE will show a confirmation. To begin using {% data variables.product.prodname_copilot %}, click **OK**. ![Screenshot of JetBrains IDE permissions confirmation](/assets/images/help/copilot/jetbrains-ide-confirmation.png)


## Seeing your first suggestion

{% data reusables.copilot.supported-languages %} The following samples are in Java, but other languages will work similarly.

{% data reusables.copilot.create-java-file %}
1. In the Java file, create a class by typing `class Test`.
   {% data variables.product.prodname_copilot %} will automatically suggest a class body in grayed text, as shown below. The exact suggestion may vary.
   ![Screenshot of the Java class body suggestion](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest a function body, type the following line below the bracket of the `main` function. The exact suggestion may vary.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Screenshot of the Java function body suggestion](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} will attempt to match the context and style of your code. You can always edit the suggested code.

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to show you a suggestion, type the following line in the Java file.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
{% data reusables.copilot.see-alternative-suggestions %}

   | OS      | See next suggestion            | See previous suggestion        |
   |:------- |:------------------------------ |:------------------------------ |
   | macOS   | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
   | Linux   | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to show you a suggestion, type the following line in the Java file.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Open a new tab with multiple additional suggestions.
    - On macOS, press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>, then click **Open GitHub Copilot**, or press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> to open the new tab immediately.
    - On Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, then click **Open GitHub Copilot**. ![Screenshot of dialogue to open Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest an implementation of a function in the Java file, type the following lines.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Screenshot of the Java function body suggestion](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} for all languages, or for individual languages. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of your JetBrains IDE window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window. ![Screenshot of the status icon in IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing.

   - To disable suggestions from {% data variables.product.prodname_copilot %} globally, click **Disable Completions**.
   - To disable suggestions from {% data variables.product.prodname_copilot %} for the specified language, click **Disable Completions for _LANGUAGE_**. ![Screenshot of option to disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## 参考リンク

- [{% data variables.product.prodname_copilot %} Web サイト](https://copilot.github.com/)
- [{% data variables.product.prodname_copilot %}について](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
