---
title: Adding repository custom instructions for GitHub Copilot in your IDE
shortTitle: Add repository instructions in your IDE
intro: 'Create repository custom instructions files that give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
---

<!-- START VS CODE TAB -->

{% vscode %}

This version of this article is for using repository custom instructions and prompt files in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* Custom instructions must be enabled. This feature is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

## Creating custom instructions

{% vscode %}

{% data variables.product.prodname_vscode_shortname %} supports three types of repository custom instructions. For details of which {% data variables.product.prodname_copilot %} features support these types of instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=vscode#support-for-repository-custom-instructions-1).

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions).

  If the path you specify matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

* **Agent instructions** are used by AI agents.

   {% data reusables.copilot.custom-instructions-agents %}

   > [!NOTE]
   > Support of `AGENTS.md` files outside of the workspace root is currently turned off by default. For details of how to enable this feature, see [Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_use-an-agentsmd-file) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Creating path-specific custom instructions

{% data reusables.copilot.custom-instructions-path %}

{% endvscode %}

{% data reusables.copilot.custom-instructions-note %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-vscode.png)

{% data reusables.copilot.custom-instructions-enabling %}

1. Open the Setting editor by using the keyboard shortcut <kbd>Command</kbd>+<kbd>,</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows).
1. Type `instruction file` in the search box.
1. Select or clear the checkbox under **Code Generation: Use Instruction Files**.

{% data reusables.copilot.custom-instructions-enabling-for-ccr %}

## Enabling and using prompt files

{% data reusables.copilot.prompt-files-preview-note %}

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Enabling prompt files

To enable prompt files, configure the workspace settings.

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type "Open Workspace Settings (JSON)" and select the option that's displayed.
1. In the `settings.json` file, add `"chat.promptFiles": true` to enable the `.github/prompts` folder as the location for prompt files. This folder will be created if it does not already exist.

### Creating prompt files

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type "prompt" and select **Chat: Create Prompt**.
1. Enter a name for the prompt file, excluding the `.prompt.md` file name extension. The name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Write the prompt instructions, using Markdown formatting.

   You can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:../../web/index.ts` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

### Using prompt files

1. At the bottom of the {% data variables.copilot.copilot_chat_short %} view, click the **Attach context** icon ({% octicon "paperclip" aria-hidden="true" aria-label="paperclip" %}).
1. In the dropdown menu, click **Prompt...** and choose the prompt file you want to use.
1. Optionally, attach additional files, including prompt files, to provide more context.
1. Optionally, type additional information in the chat prompt box.

   Whether you need to do this or not depends on the contents of the prompt you are using.

1. Submit the chat prompt.

For more information about prompt files, see [Use prompt files in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the {% data variables.product.prodname_vscode %} documentation.

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endvscode %}

<!-- end of VS Code tab -->

<!-- START VISUAL STUDIO TAB -->

{% visualstudio %}

This version of this article is for using repository custom instructions and prompt files in {% data variables.product.prodname_vs %}. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* The **Enable custom instructions...** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions-1) later in this article.

## Creating custom instructions

{% data variables.product.prodname_vs %} supports two types of custom instructions. For details of which {% data variables.product.prodname_copilot %} features support these types of instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=visualstudio#support-for-repository-custom-instructions-2).

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions-1).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions-1).

  If the path you specify matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

## Creating repository-wide custom instructions

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Creating path-specific custom instructions

{% data reusables.copilot.custom-instructions-path %}

{% data reusables.copilot.custom-instructions-note %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of the References popup, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instruction-ref-visual-studio.png)

{% data reusables.copilot.custom-instructions-enabling %}

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.

   ![Screenshot of the {% data variables.product.prodname_vs %} menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, type `custom instructions` in the search box, then click **{% data variables.product.prodname_copilot_short %}**.
1. Select or clear the checkbox for **Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

   ![Screenshot of the {% data variables.product.prodname_vs %} Options dialog showing the "Enable custom instructions" option checkbox selected.](/assets/images/help/copilot/vs-custom-instructions-option.png)

{% data reusables.copilot.custom-instructions-enabling-for-ccr %}

## Using prompt files

{% data reusables.copilot.prompt-files-preview-note %}

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

### Creating prompt files

1. Add a prompt file, including the `.prompt.md` file name extension inside the `.github/prompts` folder in the root of the repository. The name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Write the prompt instructions, using Markdown formatting.

   You can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:'../../web/index.ts'` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

For more information about prompt files, see [Use prompt files in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#use-prompt-files) in the {% data variables.product.prodname_vs %} documentation.

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endvisualstudio %}

<!-- end of Visual Studio tab -->

<!-- START JETBRAINS TAB -->

{% jetbrains %}

This version of this article is for using repository custom instructions in JetBrains IDEs. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in your JetBrains IDE.

## Creating custom instructions

JetBrains IDEs support a single `.github/copilot-instructions.md` custom instructions file stored in the repository, and a locally stored `global-copilot-instructions.md` file.

You can create the `.github/copilot-instructions.md` file in your repository using the {% data variables.product.prodname_copilot_short %} settings page, or you can create the file manually.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Using the settings page

{% data reusables.copilot.jetbrains-settings %}
{% data reusables.copilot.jetbrains-tools %}, then click **Customizations**.
1. Under "{% data variables.product.prodname_copilot_short %} Instructions", click **Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

### Manually creating a workspace custom instructions file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

Once saved, these instructions will apply to the current workspace in JetBrains IDEs that you open with {% data variables.product.prodname_copilot_short %} enabled.

### Manually creating a global custom instructions file

To apply the same instructions across all workspaces in JetBrains IDEs, you can create a global custom instructions file on your local machine.

1. Open your file explorer or terminal.
1. Navigate to the appropriate location for your operating system:

   * **macOS**:
     `/Users/YOUR-USERNAME/.config/github-copilot/intellij/`
   * **Windows**:
     `C:\Users\YOUR-USERNAME\AppData\Local\github-copilot\intellij\`

1. Create a file named `global-copilot-instructions.md` in that directory.
1. Add your custom instructions in natural language, using Markdown format.

Once saved, these instructions will apply globally across all workspaces in JetBrains IDEs that you open with {% data variables.product.prodname_copilot_short %} enabled.

{% data reusables.copilot.custom-instructions-note %}

{% data reusables.copilot.custom-instructions-reference %}

## Using prompt files

{% data reusables.copilot.prompt-files-preview-note %}

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts in {% data variables.copilot.copilot_chat_short %} (for example, `Rewrite #file:x.ts`). You can have multiple prompt files in your workspace, each of which defines a prompt for a different purpose.

When writing prompt instructions, you can reference other files in the workspace by using Markdown links—for example, `[index](../../web/index.ts)`—or by using the `#file:../../web/index.ts` syntax. Paths are relative to the prompt file. Referencing other files allows you to provide additional context, such as API specifications or product documentation.

Once prompt files are saved, their instructions will apply to the current workspace in JetBrains IDEs that you open with {% data variables.product.prodname_copilot_short %} enabled.

### Creating prompt files using the command line

1. Create the `.github/prompts` directory if it doesn't already exist in your workspace. This directory will be the location for your prompt files.
1. Create a prompt file in the `.github/prompts` directory. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain. The file name must end with the `.prompt.md` file name extension, for example `TESTPROMPT.prompt.md`.
1. Write the prompt instructions using Markdown formatting, and save the file.

### Creating prompt files using the settings page

{% data reusables.copilot.jetbrains-settings %}
1. Under **Tools**, under **{% data variables.product.prodname_copilot %}**, click **Edit Settings**.
1. Under "Settings Categories", click **Customizations**.
1. Under "Prompt Files", click **Workspace**, to create a prompt file in your workspace.
1. Enter a name for the prompt file, excluding the `.prompt.md` file name extension. The prompt file name can contain alphanumeric characters and spaces and should describe the purpose of the prompt information the file will contain.
1. Click **Ok** to save the prompt file name.
1. Write the prompt instructions using Markdown formatting, and save the file.

### Using prompt files

1. In the chat input box, type `/` followed by the name of the prompt file. For example, `/TESTPROMPT`.
1. Optionally, attach additional files, to provide more context.
1. Optionally, type additional information in the chat prompt box.

   Whether you need to do this or not depends on the contents of the prompt you are using.

1. Submit the chat prompt.

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endjetbrains %}

<!-- end of JetBrains tab -->

<!-- START XCODE TAB -->

{% xcode %}

This version of this article is for using repository custom instructions in Xcode. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in Xcode.

## Creating custom instructions

Xcode supports a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

You can create a custom instructions file in your repository via the {% data variables.product.prodname_copilot_short %} settings page.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Open the {% data variables.product.prodname_copilot %} for Xcode application.
1. At the top of the application window, under **Settings**, click **Advanced**.
1. To the right of "Custom Instructions", click **Current Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

{% data reusables.copilot.custom-instructions-note %}

{% data reusables.copilot.custom-instructions-reference %}

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endxcode %}

<!-- end of Xcode tab -->

<!-- START ECLIPSE TAB -->

{% eclipse %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions in Eclipse. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in Eclipse.

## Creating custom instructions

Eclipse supports two types of repository custom instructions: workspace and project custom instructions.

To create a workspace custom instructions file, you can use the {% data variables.product.prodname_copilot_short %} settings page. To create a project custom instructions file, you can create the file manually in the project directory.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Creating a workspace custom instructions file

1. To open the {% data variables.copilot.copilot_chat_short %} panel, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse.
1. From the menu, select "Edit preferences".
1. In the left pane, expand {% data variables.product.prodname_copilot %} and click **Custom Instructions**.
1. Select **Enable workspace instructions**.
1. In the "Workspace" section, under "Set custom instructions to guide {% data variables.product.prodname_copilot_short %}'s code suggestions in this workspace", add natural language instructions to the file, in Markdown format.

### Creating a project custom instructions file

1. In the root of your project directory, create a file named `.github/copilot-instructions.md`.
1. Add your custom instructions in natural language, using Markdown format.

Once saved, these instructions will apply to the current project in Eclipse that you open with {% data variables.product.prodname_copilot_short %} enabled.

{% data reusables.copilot.custom-instructions-note %}

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples

{% endeclipse %}
