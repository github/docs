---
title: Getting started with GitHub Copilot in Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, and start seeing suggestions as you write comments and code.'
versions:
  feature: 'copilot'
topics: 
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Visual Studio

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vs %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vs %} for Windows.

## Prerequisites

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must have {% data variables.product.prodname_vs %} 2022 17.1 or later installed. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

{% note %}

**Note**: {% data variables.product.prodname_copilot %} is not currently available for use with Visual Studio for Mac.

{% endnote %}

## Installing the {% data variables.product.prodname_vs %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vs %} extension.
1. In the Visual Studio toolbar, under **Extensions**, click **Manage Extensions**.
   ![Screenshot of the Visual Studio toolbar](/assets/images/help/copilot/visual-studio-toolbar.png)
1. In the "Manage Extensions" dialogue, click **Visual Studio Marketplace**, search for the {% data variables.product.prodname_copilot %} extension and click **Download**.
   ![Screenshot of GitHub Copilot extension for Visual Studio with the download button emphasized](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
2. Close the "Manage Extensions" dialog, then exit and relaunch {% data variables.product.prodname_vs %}.
3. Optionally, to check that {% data variables.product.prodname_copilot %} is installed and enabled, go back to **Manage Extensions**, click **Installed** to view your currently installed extensions and click **{% data variables.product.prodname_copilot %}** to see status information.
  ![Screenshot of installed extensions in Visual Studio with GitHub Copilot emphasized](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)

## Authorizing {% data variables.product.prodname_copilot %}

1. Create a new C# Console App project. For more information, see steps 1 and 2 in "[Tutorial: Create a simple C# console app in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-console?view=vs-2022)" in the Microsoft Visual Studio documentation. 
2. Name your project "Copilot Demo" and click **Next**.
   ![Screenshot of the new project window with the project name emphasized](/assets/images/help/copilot/visual-studio-new-project.png)
3. Click **Create** to create the project.
    ![Screenshot of the new project window with the "create" button emphasized](/assets/images/help/copilot/visual-studio-create-new-project.png)
4. To copy your device activation code, in the dialog box about authorizing {% data variables.product.prodname_copilot %}, click **OK**.
    ![Screenshot of the popup with the message to active your connection to GitHub](/assets/images/help/copilot/first-run-authorize-visual-studio.png)
5. A device code will be copied automatically to the clipboard. Paste it on the {% data variables.product.company_short %} device authorization page that will open. If you miss the device code, you will find it in the status bar, at the bottom left of {% data variables.product.prodname_vs %}, as well as on the {% data variables.product.prodname_copilot %} output window pane.
6. After successful authorization, proceed to read and approve the [{% data variables.product.prodname_copilot %} Telemetry Terms](/free-pro-team@latest/site-policy/github-terms/github-copilot-telemetry-terms).
   ![Screenshot of the GitHub Copilot Telemetry Terms popup with "yes" button emphasized](/assets/images/help/copilot/telemetry-terms-visual-studio.png)
   
After installation, a {% data variables.product.prodname_copilot %} icon will appear within the margin for the editor, in the lower-left corner of your {% data variables.product.prodname_vs %} window.  

![Screenshot of editor margin in Visual Studio with the GitHub Copilot icon emphasized](/assets/images/help/copilot/editor-margin-visual-studio.png)

## Seeing your first suggestion
{% data reusables.copilot.supported-languages %} The following samples are in C#, but other languages will work similarly.

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function header. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
  ```csharp{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
  ![Screenshot of a first suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png)
{% data reusables.copilot.accept-suggestion %}
 
## Seeing alternative suggestions
{% data reusables.copilot.alternative-suggestions %}
{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.
```csharp{:copy}
  function calculateDaysBetweenDates(begin, end) {
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


## Enabling and disabling {% data variables.product.prodname_copilot %}

The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the {% data variables.product.prodname_vs %} window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, it will have a diagonal line through it.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the {% data variables.product.prodname_copilot %} icon in the bottom panel of the {% data variables.product.prodname_vs %} window.
  ![Screenshot of editor margin in Visual Studio with the GitHub Copilot icon emphasized](/assets/images/help/copilot/editor-margin-visual-studio.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable suggestions globally, or for the language of the file you are currently editing.

   - To disable suggestions from {% data variables.product.prodname_copilot %} globally, click **Enable Globally**.
   - To disable suggestions from {% data variables.product.prodname_copilot %} for the specified language, click **Enable for _LANGUAGE_**.

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
