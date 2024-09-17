---
title: Getting code suggestions in your IDE with GitHub Copilot
shortTitle: Get code suggestions
intro: 'Use {% data variables.product.prodname_copilot %} to get code suggestions in your editor.'
redirect_from:
  - /copilot/getting-started-with-github-copilot
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-neovim
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-neovim
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio
  - /copilot/using-github-copilot/getting-started-with-github-copilot
  - /copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
---

<a href="https://github.com/github-copilot/signup?ref_cta=Copilot+trial&ref_loc=getting+started+with+github+copilot&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Start a free trial</span> {% octicon "link-external" height:16 %}</a>

{% jetbrains %}

## About {% data variables.product.prodname_copilot %} and JetBrains IDEs

This guide demonstrates how to get coding suggestions from {% data variables.product.prodname_copilot %} in a JetBrains IDE. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

The examples in this guide use Java, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

## Prerequisites

* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in JetBrains, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}

* **Compatible JetBrains IDE**. To use {% data variables.product.prodname_copilot %} in JetBrains, you must have a compatible JetBrains IDE installed. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}

{% data reusables.copilot.jetbrains-plugin-prerequisites %}

## Getting code suggestions

{% data variables.product.prodname_copilot %} offers coding suggestions as you type. For example, in a Java file, create a class by typing `class Test`.

{% data variables.product.prodname_copilot %} will automatically suggest a class body in grayed text. {% data reusables.copilot.accept-suggestion %}

You can also describe something you want to do using natural language within a comment, and {% data variables.product.prodname_copilot_short %} will suggest the code to accomplish your goal. For example, type this comment in a Java file:

```java copy
// find all images without alternate text
// and give them a red border
void process () {
```

{% data variables.product.prodname_copilot %} will automatically suggest code. {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} will attempt to match the context and style of your code. You can always edit the suggested code.

> [!TIP]
> If you receive limited or no suggestions from {% data variables.product.prodname_copilot_short %}, you may have duplication detection enabled. For more information about duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

## Showing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

For example, type the following line in a Java file, and press <kbd>Enter</kbd>:

{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

{% data variables.product.prodname_copilot %} will show you a suggestion.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To display next or previous suggestions, click the forward or back arrow button in the control.

You can also use keyboard shortcuts to show alternative suggestions:

| OS      | See next suggestion            | See previous suggestion        |
| :------ | :----------------------------- | :----------------------------- |
| macOS   | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
| Windows or Linux | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |

{% data reusables.copilot.accept-or-reject-suggestion %}

## Showing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

For example, type the following line in a Java file:

{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

{% data variables.product.prodname_copilot %} will show you a suggestion.

To open a new tab with multiple additional suggestions, use the following keyboard shortcut, then click **Open GitHub Copilot**:

| OS | Open multiple suggestions |
| :- | :- |
|macOS|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>|
|Windows or Linux |<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|

To accept a suggestion, below the suggestion, click **Accept suggestion NUMBER**. To reject all suggestions, close the tab.

## Accepting partial suggestions

If you don't want to accept an entire suggestion from {% data variables.product.prodname_copilot %}, you can accept the next word or the next line of a suggestion.

For example, type the following line in a Java file:

{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

{% data variables.product.prodname_copilot %} will show a suggestion in grayed text. The exact suggestion may vary.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To accept only the next word of the suggestion, click **Accept Word** in the control.

Alternatively, you can use a keyboard shortcut to accept the next word of a suggestion:

| OS | Accept Next Word | Accept Next Line |
| :- | :- | :- |
|macOS|<kbd>Command</kbd>+<kbd>→</kbd>|<kbd>Command</kbd>+<kbd>Control</kbd>+<kbd>→</kbd>|
|Windows or Linux|<kbd>Control</kbd>+<kbd>→</kbd>|<kbd>Control</kbd>+<kbd>Alt</kbd>+<kbd>→</kbd>|

If you want to accept the next line of a suggestion, you will need to set a custom keyboard shortcut for the command `editor.action.inlineSuggest.acceptNextLine`. For more information on setting custom keyboard shortcuts, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."

{% endjetbrains %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_vs %}

This guide demonstrates how to get coding suggestions from {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} for Windows. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

The examples in this guide use C#, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

## Prerequisites

* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in Visual Studio, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.visual-studio-prerequisites %}

## Getting code suggestions

{% data variables.product.prodname_copilot %} offers coding suggestions as you type. For example, type this function
signature in a C# file:

```csharp copy
int CalculateDaysBetweenDates(
```

{% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. {% data reusables.copilot.accept-suggestion %}

You can also describe something you want to do using natural language within a comment, and {% data variables.product.prodname_copilot_short %} will suggest the code to accomplish your goal. For example, type this comment in the C# file:

```csharp copy
using System.Xml.Linq;

var doc = XDocument.Load("index.xhml");

// find all images
```

{% data variables.product.prodname_copilot %} will suggest an implementation of the function. {% data reusables.copilot.accept-suggestion %}

> [!TIP]
> If you receive limited or no suggestions from {% data variables.product.prodname_copilot_short %}, you may have duplication detection enabled. For more information about duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

## Showing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

For example, type this function signature in a C# file:

```csharp copy
int CalculateDaysBetweenDates(
```

{% data variables.product.prodname_copilot %} will show you a suggestion.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To display next or previous suggestions, click the forward or back arrow button in the control.

Alternatively, you can show alternate suggestions by pressing <kbd>Alt</kbd>+<kbd>.</kbd> (or <kbd>Alt</kbd>+<kbd>,</kbd>) on your keyboard.

{% data reusables.copilot.accept-or-reject-suggestion %}

{% endvisualstudio %}

{% vscode %}

## About {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_vscode %}

This guide demonstrates how to get coding suggestions from {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

The examples in this guide use JavaScript, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

## Prerequisites

* **Subscription to {% data variables.product.prodname_copilot_short %}**.  To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}

* **{% data variables.product.prodname_vscode %}**. To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

* **{% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode %}**. To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must install the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot). For more information, see "[Set up {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/copilot/setup)" in the {% data variables.product.prodname_vscode %} documentation.

## Getting code suggestions

{% data variables.product.prodname_copilot %} offers coding suggestions as you type. For example, type this function header in a JavaScript file:

```javascript copy
function calculateDaysBetweenDates(begin, end) {
```

{% data variables.product.prodname_copilot %} will automatically suggest the rest of the function. {% data reusables.copilot.accept-suggestion %}

You can also describe something you want to do using natural language within a comment, and {% data variables.product.prodname_copilot_short %} will suggest the code to accomplish your goal. For example, type this comment in a JavaScript file:

```javascript copy
// write a function to
// find all images without alternate text
// and give them a red border
```

{% data variables.product.prodname_copilot %} will automatically suggest code. {% data reusables.copilot.accept-suggestion %}

> [!TIP]
> If you receive limited or no suggestions from {% data variables.product.prodname_copilot_short %}, you may have duplication detection enabled. For more information about duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

## Showing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

For example, type this function header in a JavaScript file, and press <kbd>Enter</kbd>:

```javascript copy
function calculateDaysBetweenDates(begin, end) {
```

{% data variables.product.prodname_copilot %} will show you a suggestion.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To display next or previous suggestions, click the forward or back arrow button in the control.

You can also use keyboard shortcuts to show alternative suggestions:

| OS      | See next suggestion                       | See previous suggestion                   |
| :------ | :---------------------------------------- | :---------------------------------------- |
| macOS   | <kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd> | <kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd> |
| Windows or Linux | <kbd>Alt</kbd>+<kbd>]</kbd>               | <kbd>Alt</kbd>+<kbd>[</kbd>               |

{% data reusables.copilot.accept-or-reject-suggestion %}

## Showing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

For example, type this function header in a JavaScript file, and press <kbd>Enter</kbd>:

```javascript copy
function calculateDaysBetweenDates(begin, end) {
```

{% data variables.product.prodname_copilot %} will show you a suggestion. Now press <kbd>Ctrl</kbd>+<kbd>Enter</kbd> to open a new tab with multiple additional options.

To accept a suggestion, below the suggestion, click **Accept suggestion NUMBER**. To reject all suggestions, close the tab.

## Accepting partial suggestions

If you don't want to accept an entire suggestion from {% data variables.product.prodname_copilot %}, you can accept the next word or the next line of a suggestion.

For example, type this function header in a JavaScript file, and press <kbd>Enter</kbd>:

```javascript copy
function calculateDaysBetweenDates(begin, end) {
```

{% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To accept only the next word of the suggestion, click **Accept Word** in the control.

Alternatively, you can use a keyboard shortcut to accept the next word of a suggestion:

| OS | Accept Next Word |
| :- | :- |
|macOS|<kbd>Command</kbd>+<kbd>→</kbd>|
|Windows or Linux |<kbd>Control</kbd>+<kbd>→</kbd>|

If you want to accept the next line of a suggestion, you will need to set a custom keyboard shortcut for the command `editor.action.inlineSuggest.acceptNextLine`. For more information on setting custom keyboard shortcuts, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."

{% endvscode %}

{% vimneovim %}

## About {% data variables.product.prodname_copilot %} and Vim/Neovim

This guide demonstrates how to get coding suggestions from {% data variables.product.prodname_copilot %} in Vim/Neovim. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Prerequisites

* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in Vim/Neovim, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}

* **Compatible version of Vim/Neovim**. To use {% data variables.product.prodname_copilot %} in Vim/Neovim you must have Vim version 9.0.0185 / Neovim version 0.6 or above and Node.js version 18 or above installed. For more information, see the [Vim](https://vimhelp.org/) / [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

* **{% data variables.product.prodname_copilot %} extension for Vim/Neovim**. To use {% data variables.product.prodname_copilot %} in Vim/Neovim, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment)."

## Learning to use {% data variables.product.prodname_copilot %} in Vim/Neovim

{% data variables.product.prodname_copilot %} provides suggestions inline as you type in Vim/Neovim. To accept a suggestion, press the <kbd>tab</kbd> key.

For more information and guidance on using {% data variables.product.prodname_copilot %} in Vim/Neovim run the following command to view the plugin documentation:

```shell copy
:help copilot
```

{% endvimneovim %}

{% azure_data_studio %}

## About {% data variables.product.prodname_copilot %} and Azure Data Studio

This guide demonstrates how to get coding suggestions from {% data variables.product.prodname_copilot %} in Azure Data Studio. To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Prerequisites

* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in Azure Data Studio, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}

* **Compatible version of Azure Data Studio**. To use {% data variables.product.prodname_copilot %} in Azure Data Studio, you must have Azure Data Studio version 1.44.0 or later installed. For more information, see the [Azure Data Studio download page](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio) in the Azure Data Studio documentation.

* **{% data variables.product.prodname_copilot %} extension for Azure Data Studio**. To use {% data variables.product.prodname_copilot %} in Azure Data Studio, you must install the {% data variables.product.prodname_copilot %} extension. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment)."

## Getting code suggestions

{% data variables.product.prodname_copilot %} can provide you with inline suggestions as you create SQL databases in Azure Data Studio. For example, if you're writing a query that joins two tables, {% data variables.product.prodname_copilot_short %} may suggest the join condition from columns in the open editor, other files in the workspace, and common syntax patterns.

In a SQL file, type the following query:

```sql copy
SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
FROM [Tag].[Scoreboard]
INNER JOIN
```

{% data variables.product.prodname_copilot %} will automatically suggest a join condition in grayed text. The exact suggestion may vary. {% data reusables.copilot.accept-suggestion %}

You can also describe something you want to do using natural language within a comment, and {% data variables.product.prodname_copilot_short %} will suggest the code to accomplish your goal. For example, type this comment in a SQL file:

```sql copy
SELECT TokenColor, COUNT(UserID) AS UserCount
FROM Tag.Users
GROUP BY TokenColor
-- pivot that query on tokencolor for Purple, Blue, Green, Yellow, Orange, Red
-- and rename the columns to match the colors
SELECT [Purple], [Blue], [Green], [Yellow], [Orange], [Red]
```

{% data variables.product.prodname_copilot %} will automatically suggest code. {% data reusables.copilot.accept-suggestion %}

   > [!TIP]
   > If you receive limited or no suggestions from {% data variables.product.prodname_copilot_short %}, you may have duplication detection enabled. For more information on duplication detection, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom#enabling-or-disabling-suggestions-matching-public-code)."

## Showing alternative suggestions

For some suggestions, {% data variables.product.prodname_copilot %} may provide multiple alternatives. You can select which suggestion you want to use, or reject all suggestions.

For example, type this query in a SQL file:

```sql copy
SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
FROM [Tag].[Scoreboard]
INNER JOIN
```

{% data variables.product.prodname_copilot %} will show you a suggestion.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To display next or previous suggestions, click the forward or back arrow button in the control.

You can also use keyboard shortcuts to show alternative suggestions:

| OS      | See next suggestion            | See previous suggestion        |
| :------ | :----------------------------- | :----------------------------- |
| macOS   | <kbd>Option</kbd>+<kbd>[</kbd> | <kbd>Option</kbd>+<kbd>]</kbd> |
| Windows or Linux | <kbd>Alt</kbd>+<kbd>[</kbd>    | <kbd>Alt</kbd>+<kbd>]</kbd>    |

To accept a suggestion, click "Accept" in the {% data variables.product.prodname_copilot_short %} control, or press <kbd>Tab</kbd>. To reject all suggestions, press <kbd>Esc</kbd>.

## Accepting partial suggestions

If you don't want to accept an entire suggestion from {% data variables.product.prodname_copilot %}, you can accept the next word or the next line of a suggestion.

For example, type this query in a SQL file:

```sql copy
SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
FROM [Tag].[Scoreboard]
INNER JOIN
```

{% data variables.product.prodname_copilot %} will show you a suggestion in grayed text. The exact suggestion may vary.

Now hover over the suggestion to show the {% data variables.product.prodname_copilot %} control for choosing suggestions. To accept only the next word of the suggestion, click **Accept Word** in the control.

Alternatively, you can use a keyboard shortcut to accept the next word of a suggestion:

| OS      | Accept Next Word                |
| :------ | :------------------------------ |
| macOS   | <kbd>Command</kbd>+<kbd>→</kbd> |
| Windows or Linux | <kbd>Control</kbd>+<kbd>→</kbd> |

If you want to accept the next line of the suggestion, you will need to set a custom keyboard shortcut for the command `editor.action.inlineSuggest.acceptNextLine`. For more information on setting custom keyboard shortcuts, see "[Keyboard shortcuts in Azure Data Studio](https://learn.microsoft.com/en-us/azure-data-studio/keyboard-shortcuts)" in the Microsoft documentation.

{% endazure_data_studio %}

## Next steps

* **Learn how to write effective prompts** - See "[AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)."
* **Configure {% data variables.product.prodname_copilot_short %} in your editor** - You can enable or disable {% data variables.product.prodname_copilot %} from within your editor, and create your own preferred keyboard shortcuts for {% data variables.product.prodname_copilot_short %}. See "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."
* **Get started with {% data variables.product.prodname_copilot_chat %}** - Learn how to ask {% data variables.product.prodname_copilot_short %} for information and assistance, using {% data variables.product.prodname_copilot_chat %}. See "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide)"{% ifversion ghec %} and "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"{% endif %}.
* **Troubleshoot issues** - Learn more about how to troubleshoot common issues with {% data variables.product.prodname_copilot %}. See "[AUTOTITLE](/copilot/troubleshooting-github-copilot)."
