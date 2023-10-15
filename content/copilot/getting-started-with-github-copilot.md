---
title: Getting started with GitHub Copilot
shortTitle: Getting started
intro: 'You can start using {% data variables.product.prodname_copilot %} by installing the extension in your preferred environment.'
product: '{% data reusables.gated-features.copilot %}'
redirect_from:
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-neovim
  - /github/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-neovim
  - /copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
---

{% data reusables.copilot.copilot-cta-button %}

{% jetbrains %}

## About {% data variables.product.prodname_copilot %} and JetBrains IDEs

{% data reusables.copilot.procedural-intro %}

If you use a JetBrains IDE, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within a JetBrains IDE for macOS, Windows, or Linux.

## Prerequisites

{% data reusables.copilot.subscription-prerequisite %}
- To use {% data variables.product.prodname_copilot %} in JetBrains, you must have a compatible JetBrains IDE installed. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:
  - IntelliJ IDEA (Ultimate, Community, Educational)
  - Android Studio
  - AppCode
  - CLion
  - Code With Me Guest
  - DataGrip
  - DataSpell
  - GoLand
  - JetBrains Client
  - MPS
  - PhpStorm
  - PyCharm (Professional, Community, Educational)
  - Rider
  - RubyMine
  - RustRover
  - WebStorm

  For more information, see the [JetBrains IDEs](https://www.jetbrains.com/products/) tool finder.

## Installing the {% data variables.product.prodname_copilot %} extension in your JetBrains IDE

To use {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} extension. The following procedure will guide you through installation of the {% data variables.product.prodname_copilot %} plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

1. In your JetBrains IDE, under the **File** menu for Windows or under the name of your IDE for Mac (for example, **PyCharm** or **IntelliJ**), click **Settings** for Windows or **Preferences** for Mac.
1. In the left-side menu of the **Settings/Preferences** dialog box, click **Plugins**.
1. At the top of the **Settings/Preferences** dialog box, click **Marketplace**. In the search bar, search for **{% data variables.product.prodname_copilot %}**, then click **Install**.

   ![Screenshot of the "Preferences" window. A tab labeled "Marketplace" is highlighted with an orange outline. In a list of search results, the installed "GitHub Copilot" plugin is marked by a selected checkbox.](/assets/images/help/copilot/jetbrains-marketplace.png)
1. After {% data variables.product.prodname_copilot %} is installed, click **Restart IDE**.
1. After your JetBrains IDE has restarted, click the **Tools** menu. Click **{% data variables.product.prodname_copilot %}**, then click **Login to {% data variables.product.prodname_dotcom %}**.

    ![Screenshot of the expanded "Tools" menu and "{% data variables.product.prodname_copilot %}" sub-menu. The "Login to {% data variables.product.prodname_dotcom %}" option is highlighted in blue.](/assets/images/help/copilot/jetbrains-tools-menu.png)

1. In the "Sign in to {% data variables.product.prodname_dotcom %}" dialog box, to copy the device code and open the device activation window, click **Copy and Open**.

    ![Screenshot of the "Sign in to {% data variables.product.prodname_dotcom %}" dialog. A device code is displayed above a button labeled "Copy and Open".](/assets/images/help/copilot/device-code-copy-and-open.png)
1. A device activation window will open in your browser. Paste the device code, then click **Continue**.
1. {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_copilot %} Plugin**.
1. After the permissions have been approved, your JetBrains IDE will show a confirmation. To begin using {% data variables.product.prodname_copilot %}, click **OK**.

## Seeing your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in Java, but other languages will work similarly.

{% data reusables.copilot.create-java-file %}
1. In the Java file, create a class by typing `class Test`.
   {% data variables.product.prodname_copilot %} will automatically suggest a class body in grayed text. The exact suggestion may vary.
{% data reusables.copilot.accept-suggestion %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest a function body, type the following line below the bracket of the `main` function. The exact suggestion may vary.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} will attempt to match the context and style of your code. You can always edit the suggested code.

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to show you a suggestion, type the following line in the Java file.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to show you a suggestion, type the following line in the Java file.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Open a new tab with multiple additional suggestions.
    - On macOS, press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>, then click **Open GitHub Copilot**, or press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> to open the new tab immediately.
    - On Windows or Linux, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, then click **Open GitHub Copilot**.

1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest an implementation of a function in the Java file, type the following lines.

    ```java copy
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} for all languages, or for individual languages. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of your JetBrains IDE window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window.

   ![Screenshot of the IntelliJ IDEA toolbar. The {% data variables.product.prodname_copilot %} logo is highlighted with an orange outline.](/assets/images/help/copilot/status-icon-jetbrains.png)
1. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing.

   - To disable suggestions from {% data variables.product.prodname_copilot %} globally, click **Disable Completions**.
   - To disable suggestions from {% data variables.product.prodname_copilot %} for the specified language, click **Disable Completions for _LANGUAGE_**.

   ![Screenshot of option to disable {% data variables.product.prodname_copilot %} globally or for the current language.](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

{% endjetbrains %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_vs %}

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vs %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vs %} for Windows.

## Prerequisites

{% data reusables.copilot.subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must have {% data variables.product.prodname_vs %} 2022 17.6 or later installed. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

{% data reusables.copilot.vs-for-mac-note %}

## Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vs %}

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_copilot %} extension.

{% data reusables.copilot.vs-extensions %}
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for the {% data variables.product.prodname_copilot %} extension, then click **Download**.

   ![Screenshot of a list of search results. Next to the {% data variables.product.prodname_copilot %} extension, the "Download" button is highlighted with an orange outline.](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
{% data reusables.copilot.vs-exit-and-relaunch %}
1. Optionally, to check that {% data variables.product.prodname_copilot %} is installed and enabled, go back to **Manage Extensions**, click **Installed** to view your currently installed extensions, then click **{% data variables.product.prodname_copilot %}** to see status information.

   ![Screenshot of a list of installed extensions in {% data variables.product.prodname_vs %}. The "{% data variables.product.prodname_copilot %}" extension is highlighted with an orange outline.](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Open or create a new project in {% data variables.product.prodname_vs %}.
1. To enable {% data variables.product.prodname_copilot %}, ensure you have added your {% data variables.product.prodname_dotcom %} account to {% data variables.product.prodname_vs %}. For more information, see [Work with {% data variables.product.prodname_dotcom %} accounts in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts) in the Microsoft documentation.

## Seeing your first suggestion

{% data reusables.copilot.code-examples-limitations %}
{% data reusables.copilot.supported-languages %} The following samples are in C#, but other languages will work similarly.

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.

   ```csharp copy
   int CalculateDaysBetweenDates(
   ```

{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}
{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```csharp copy
   int CalculateDaysBetweenDates(
   ```

1. If alternative suggestions are available, you can see these alternatives by pressing <kbd>Alt</kbd>+<kbd>.</kbd> (or <kbd>Alt</kbd>+<kbd>,</kbd>).
1. Optionally, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.

   ```csharp copy
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");

   // find all images
   ```

{% data reusables.copilot.accept-suggestion %}

{% data reusables.copilot.enabling-or-disabling-vs %}

{% endvisualstudio %}

{% vscode %}

## About {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vscode %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vscode %} for macOS, Windows, or Linux.

## Prerequisites

{% data reusables.copilot.subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

## Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_copilot %} extension.

1. In the {% data variables.product.prodname_vscode_marketplace %}, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**.
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.

   - If you have previously authorized {% data variables.product.prodname_vscode %} for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized.
   - If you don't get the prompt to authorize, click the bell icon in the bottom panel of the {% data variables.product.prodname_vscode %} window.

     ![Screenshot of the {% data variables.product.prodname_vscode %} task bar with {% data variables.product.prodname_copilot %} icons. The bell icon is outlined in dark orange.](/assets/images/help/copilot/copilot-activate.png)

1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. To confirm the authentication, in {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialog box, click **Open**.

## Seeing your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

{% data reusables.copilot.see-alternative-suggestions %}

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

   ```javascript copy
   function calculateDaysBetweenDates(begin, end) {
   ```

1. To open a new tab with multiple additional options, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.

   ```javascript copy
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Using a framework

You can also use {% data variables.product.prodname_copilot %} to generate suggestions for APIs and frameworks. The following example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.

   ```javascript copy
   // Express server on port 3000
   ```

1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler.

   ```javascript copy
   // Return the current time
   ```

1. To accept each line, press <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

{% endvscode %}

{% vimneovim %}

## About {% data variables.product.prodname_copilot %} and Vim/Neovim

{% data reusables.copilot.procedural-intro %}

If you use Vim/Neovim, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor.

## Prerequisites

{% data reusables.copilot.subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot %} in Vim/Neovim you must have Vim version 9.0.0185 / Neovim version 0.6 or above and Node.js version 17 or below installed. For more information, see the [Vim](https://vimhelp.org/) / [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

## Installing the {% data variables.product.prodname_copilot %} extension in Vim/Neovim on macOS

{% data reusables.copilot.install-copilot-in-vimneovim %}
   - To install {% data variables.product.prodname_copilot %} with Vim's built-in plugin manager, enter the following command in Terminal:

         git clone https://github.com/github/copilot.vim \
            ~/.vim/pack/github/start/copilot.vim

   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command in Terminal:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-vimneovim %}

## Installing the {% data variables.product.prodname_copilot %} extension in Vim/Neovim on Windows

{% data reusables.copilot.install-copilot-in-vimneovim %}
   - To install {% data variables.product.prodname_copilot %} with Vim's built-in plugin manager, enter the following command in Git Bash:

           git clone https://github.com/github/copilot.vim.git \
            $HOME/vimfiles/pack/github/start/copilot.vim

   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command in Git Bash:

           git clone https://github.com/github/copilot.vim.git \
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-vimneovim %}

## Installing the {% data variables.product.prodname_copilot %} extension in Vim/Neovim on Linux

{% data reusables.copilot.install-copilot-in-vimneovim %}
   - To install {% data variables.product.prodname_copilot %} with Vim's built-in plugin manager, enter the following command:

         git clone https://github.com/github/copilot.vim \
            ~/.vim/pack/github/start/copilot.vim

   - To install {% data variables.product.prodname_copilot %} with Neovim's built-in plugin manager, enter the following command:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-vimneovim %}

## Learning to use {% data variables.product.prodname_copilot %} in Vim/Neovim

For guidance on using {% data variables.product.prodname_copilot %} in Vim/Neovim, you can view the plugin documentation. To see the documentation, open Vim/Neovim and run the following command:

```shell
:help copilot
```

{% endvimneovim %}

{% azure_data_studio %}

## About {% data variables.product.prodname_copilot %} and Azure Data Studio

{% data reusables.copilot.procedural-intro %}

If you use Azure Data Studio, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within Azure Data Studio for macOS, Windows, or Linux.

## Prerequisites

{% data reusables.copilot.subscription-prerequisite %}
- To use {% data variables.product.prodname_copilot %} in Azure Data Studio, you must have Azure Data Studio version 1.44.0 or later installed. For more information, see the [Azure Data Studio download page](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio) in the Azure Data Studio documentation.

## Installing the {% data variables.product.prodname_copilot %} extension in Azure Data Studio

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_copilot %} extension.

1. In Azure Data Studio, click the **Extensions** icon in the left-side menu.
   ![Screenshot of the Azure Data Studio left-side menu. The "Extensions" icon is highlighted with an orange outline.](/assets/images/help/copilot/azure-data-studio-extensions-icon.png)
1. In the "Extensions" tab, search for **{% data variables.product.prodname_copilot %}** and then click **Install**.
1. If a popup window in Azure Data Studio prompts you to sign in to use {% data variables.product.prodname_copilot %}, click **Sign in to {% data variables.product.prodname_dotcom %}** and follow the instructions on screen.

   - If you have previously authorized Azure Data Studio for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized.
   - If you don't get the prompt to authorize, you can view notifications by clicking the bell icon in the bottom panel of the Azure Data Studio window.

1. If you are following the authorization steps, in your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize Azure Data Studio**.

## Seeing your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data variables.product.prodname_copilot %} can provide you with inline suggestions as you create SQL databases in Azure Data Studio. For example, if you're writing a query that joins two tables, {% data variables.product.prodname_copilot_short %} may suggest the join condition from columns in the open editor, other files in the workspace, and common syntax patterns.

{% data reusables.copilot.create-sql-file %}
1. In the SQL file, type the following query. {% data variables.product.prodname_copilot %} will automatically suggest a join condition in grayed text. The exact suggestion may vary.

   ```sql copy
   SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
   FROM [Tag].[Scoreboard]
   INNER JOIN 
   ```

{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

For some suggestions, {% data variables.product.prodname_copilot %} may provide multiple alternatives. You can select which suggestion you want to use, or reject all suggestions.

{% data reusables.copilot.create-sql-file %}
1. In the SQL file, type the following query. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```sql copy
   SELECT [UserId], [Red], [Orange], [Yellow], [Green], [Blue], [Purple], [Rainbow]
   FROM [Tag].[Scoreboard]
   INNER JOIN 
   ```

1. Optionally, you can see alternative suggestions, if any are available.

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   | Windows | <kbd>Alt</kbd>+<kbd>[</kbd> | <kbd>Alt</kbd>+<kbd>]</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>[</kbd> | <kbd>Alt</kbd>+<kbd>]</kbd> |
   | macOS | <kbd>Option</kbd>+<kbd>[</kbd> | <kbd>Option</kbd>+<kbd>]</kbd> |

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-sql-file %}
1. In the SQL file, type the following query and comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the query.

   ```sql copy
   SELECT TokenColor, COUNT(UserID) AS UserCount
   FROM Tag.Users
   GROUP BY TokenColor
   -- pivot that query on tokencolor for Purple, Blue, Green, Yellow, Orange, Red
   -- and rename the columns to match the colors
   SELECT [Purple], [Blue], [Green], [Yellow], [Orange], [Red]
   ```

{% data reusables.copilot.enabling-or-disabling-in-ads %}

{% endazure_data_studio %}

## Next steps

{% data reusables.copilot.next-steps %}

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- [AUTOTITLE](/copilot/configuring-github-copilot): These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.
- [AUTOTITLE](/billing/managing-billing-for-github-copilot): Learn more about billing for {% data variables.product.prodname_copilot %}.
- [AUTOTITLE](/copilot/troubleshooting-github-copilot): These guides provide information for troubleshooting {% data variables.product.prodname_copilot %}.

## Further reading

- [The {% data variables.product.prodname_copilot %} website](https://copilot.github.com/)
- [About {% data variables.product.prodname_copilot_for_individuals %}](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
