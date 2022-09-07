---
title: Getting started with GitHub Copilot in Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, and start seeing suggestions as you write comments and code.'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Visual Studio

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vs %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vs %} for Windows.

## Prerequisites

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must have {% data variables.product.prodname_vs %} 2022 17.2 or later installed. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

{% note %}

**Note**: {% data variables.product.prodname_copilot %} is not currently available for use with Visual Studio for Mac.

{% endnote %}

## Installing the {% data variables.product.prodname_vs %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vs %} extension.
1. In the Visual Studio toolbar, click **Extensions**, then click **Manage Extensions**.
   ![Screenshot of the Visual Studio toolbar](/assets/images/help/copilot/visual-studio-toolbar.png)
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for the {% data variables.product.prodname_copilot %} extension, then click **Download**.
   ![Screenshot of GitHub Copilot extension for Visual Studio with the download button emphasized](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Close the "Manage Extensions" window, then exit and relaunch {% data variables.product.prodname_vs %}.
1. Optionally, to check that {% data variables.product.prodname_copilot %} is installed and enabled, go back to **Manage Extensions**, click **Installed** to view your currently installed extensions, then click **{% data variables.product.prodname_copilot %}** to see status information.
  ![Screenshot of installed extensions in Visual Studio with GitHub Copilot emphasized](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Open or create a new project in {% data variables.product.prodname_vs %}. 
1. In the "Microsoft {% data variables.product.prodname_vs %}" dialog box, to copy your device activation code, click **OK**.
   ![Screenshot of the Microsoft {% data variables.product.prodname_vs %} dialogue box](/assets/images/help/copilot/vs-auth-dialogue.png)
1. A device activation window will open in your browser. Paste the device code, then click **Continue**.

   - To paste the code in Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - To paste the code in macOS, press <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_copilot %} Plugin**.
1. After you approve the permissions, {% data variables.product.prodname_vs %} will show a confirmation.
   ![Screenshot of {% data variables.product.prodname_vs %} permissions confirmation](/assets/images/help/copilot/vs-confirmation.png)

## Seeing your first suggestion
{% data reusables.copilot.supported-languages %} The following samples are in C#, but other languages will work similarly.

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Screenshot of a first suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png)
{% data reusables.copilot.accept-suggestion %}
 
## Seeing alternative suggestions
{% data reusables.copilot.alternative-suggestions %}
{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. If alternative suggestions are available, you can see these alternatives by pressing <kbd>Alt</kbd>+<kbd>]</kbd> (or <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Optionally, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
