---
title: Adding repository custom instructions for GitHub Copilot
shortTitle: Add repository instructions
intro: 'Create repository custom instructions files that give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
redirect_from:
  - /copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
  - /copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/add-repository-instructions
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-coding-guidelines
category:
  - Configure Copilot
---

<!-- START WEB BROWSER TAB -->

{% webui %}

This version of this article is for using repository custom instructions on the {% data variables.product.github %} website. Click the tabs above for information on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* For {% data variables.copilot.copilot_code-review_short %}, your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-custom-instructions-for-copilot-code-review) later in this article.

## Creating custom instructions

{% data variables.product.prodname_copilot_short %} on {% data variables.product.github %} supports three types of repository custom instructions. For details of which {% data variables.product.prodname_copilot %} features support these types of instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#support-for-repository-custom-instructions).

* **Repository-wide custom instructions** apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions-2).

* **Path-specific custom instructions** apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions-2).

  If the path you specify matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

* **Agent instructions** are used by AI agents.

  You can create one or more `AGENTS.md` files, stored anywhere within the repository. When {% data variables.product.prodname_copilot_short %} is working, the nearest `AGENTS.md` file in the directory tree will take precedence over other agent instructions files. For more information, see the [openai/agents.md repository](https://github.com/openai/agents.md).

  Alternatively, you can use a single `CLAUDE.md` or `GEMINI.md` file stored in the root of the repository.

## Creating repository-wide custom instructions

You can create your own custom instructions file from scratch. See [Writing your own copilot-instructions.md file](#writing-your-own-copilot-instructionsmd-file). Alternatively, you can ask {% data variables.copilot.copilot_coding_agent %} to generate one for you.

### Asking {% data variables.copilot.copilot_coding_agent %} to generate a `copilot-instructions.md` file

1. Navigate to the agents tab at [github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).

    You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to generate custom instructions for.

1. Copy the following prompt, customizing it if needed:

   ```markdown copy
   Your task is to "onboard" this repository to Copilot coding agent by adding a .github/copilot-instructions.md file in the repository that contains information describing how a coding agent seeing it for the first time can work most efficiently.

   You will do this task only one time per repository and doing a good job can SIGNIFICANTLY improve the quality of the agent's work, so take your time, think carefully, and search thoroughly before writing the instructions.

   <Goals>
   - Reduce the likelihood of a coding agent pull request getting rejected by the user due to
   generating code that fails the continuous integration build, fails a validation pipeline, or
   having misbehavior.
   - Minimize bash command and build failures.
   - Allow the agent to complete its task more quickly by minimizing the need for exploration using grep, find, str_replace_editor, and code search tools.
   </Goals>

   <Limitations>
   - Instructions must be no longer than 2 pages.
   - Instructions must not be task specific.
   </Limitations>

   <WhatToAdd>

   Add the following high level details about the codebase to reduce the amount of searching the agent has to do to understand the codebase each time:
   <HighLevelDetails>

   - A summary of what the repository does.
   - High level repository information, such as the size of the repo, the type of the project, the languages, frameworks, or target runtimes in use.
   </HighLevelDetails>

   Add information about how to build and validate changes so the agent does not need to search and find it each time.
   <BuildInstructions>

   - For each of bootstrap, build, test, run, lint, and any other scripted step, document the sequence of steps to take to run it successfully as well as the versions of any runtime or build tools used.
   - Each command should be validated by running it to ensure that it works correctly as well as any preconditions and postconditions.
   - Try cleaning the repo and environment and running commands in different orders and document errors and misbehavior observed as well as any steps used to mitigate the problem.
   - Run the tests and document the order of steps required to run the tests.
   - Make a change to the codebase. Document any unexpected build issues as well as the workarounds.
   - Document environment setup steps that seem optional but that you have validated are actually required.
   - Document the time required for commands that failed due to timing out.
   - When you find a sequence of commands that work for a particular purpose, document them in detail.
   - Use language to indicate when something should always be done. For example: "always run npm install before building".
   - Record any validation steps from documentation.
   </BuildInstructions>

   List key facts about the layout and architecture of the codebase to help the agent find where to make changes with minimal searching.
   <ProjectLayout>

   - A description of the major architectural elements of the project, including the relative paths to the main project files, the location
   of configuration files for linting, compilation, testing, and preferences.
   - A description of the checks run prior to check in, including any GitHub workflows, continuous integration builds, or other validation pipelines.
   - Document the steps so that the agent can replicate these itself.
   - Any explicit validation steps that the agent can consider to have further confidence in its changes.
   - Dependencies that aren't obvious from the layout or file structure.
   - Finally, fill in any remaining space with detailed lists of the following, in order of priority: the list of files in the repo root, the
   contents of the README, the contents of any key source files, the list of files in the next level down of directories, giving priority to the more structurally important and snippets of code from key source files, such as the one containing the main method.
   </ProjectLayout>
   </WhatToAdd>

   <StepsToFollow>
   - Perform a comprehensive inventory of the codebase. Search for and view:
   - README.md, CONTRIBUTING.md, and all other documentation files.
   - Search the codebase for build steps and indications of workarounds like 'HACK', 'TODO', etc.
   - All scripts, particularly those pertaining to build and repo or environment setup.
   - All build and actions pipelines.
   - All project files.
   - All configuration and linting files.
   - For each file:
   - think: are the contents or the existence of the file information that the coding agent will need to implement, build, test, validate, or demo a code change?
   - If yes:
      - Document the command or information in detail.
      - Explicitly indicate which commands work and which do not and the order in which commands should be run.
      - Document any errors encountered as well as the steps taken to workaround them.
   - Document any other steps or information that the agent can use to reduce time spent exploring or trying and failing to run bash commands.
   - Finally, explicitly instruct the agent to trust the instructions and only perform a search if the information in the instructions is incomplete or found to be in error.
   </StepsToFollow>
      - Document any errors encountered as well as the steps taken to work-around them.

1. Click **Send now** or press <kbd>Return</kbd>.

{% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will create a draft pull request, write your custom instructions, push them to the branch, then add you as a reviewer when it has finished, triggering a notification.

### Writing your own `copilot-instructions.md` file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

> [!TIP]
> The first time you create a pull request in a given repository with {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot_short %} will leave a comment with a link to automatically generate custom instructions for the repository.

## Creating path-specific custom instructions

> [!NOTE]
> Currently, on {% data variables.product.prodname_dotcom_the_website %}, path-specific custom instructions are only supported for {% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_code-review_short %}.

{% data reusables.copilot.custom-instructions-path %}

{% data reusables.copilot.custom-instructions-note %}

In {% data variables.copilot.copilot_chat_short %} ([github.com/copilot](https://github.com/copilot)), you can start a conversation that uses repository custom instructions by adding, as an attachment, the repository that contains the instructions file.

Whenever repository custom instructions are used by {% data variables.copilot.copilot_chat_short %}, the instructions file is added as a reference for the response that's generated. To find out whether repository custom instructions were used, expand the list of references at the top of a chat response in the Chat panel and check whether the `.github/copilot-instructions.md` file is listed.

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-ref-in-github.png)

You can click the reference to open the file.

> [!NOTE]
> * {% data reusables.copilot.custom-instructions-chat-precedence %}
> * {% data reusables.copilot.custom-instructions-conflict %}

## Enabling or disabling custom instructions for {% data variables.copilot.copilot_code-review_short %}

Custom instructions are enabled for {% data variables.copilot.copilot_code-review_short %} by default but you can disable, or re-enable, them in the repository settings on {% data variables.product.prodname_dotcom_the_website %}. This applies to {% data variables.product.prodname_copilot_short %}'s use of custom instructions for all code reviews it performs in this repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. Toggle the “Use custom instructions when reviewing pull requests” option on or off.

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)

{% endwebui %}

<!-- end of web browser tab -->

<!-- START VS CODE TAB -->

{% vscode %}

This version of this article is for using repository custom instructions and prompt files in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments.

{% data reusables.copilot.repository-custom-instructions-about %}

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* Custom instructions must be enabled. This feature is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions-1) later in this article.

## Creating custom instructions

{% vscode %}

{% data variables.product.prodname_vscode_shortname %} supports three types of repository custom instructions. For details of which {% data variables.product.prodname_copilot %} features support these types of instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=vscode#support-for-repository-custom-instructions-1).

* **Repository-wide custom instructions**, which apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions-1).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions-1).

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

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions-2).

* **Path-specific custom instructions**, which apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions-2).

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
{% data reusables.copilot.jetbrains-tools %}
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
