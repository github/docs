---
title: Adding repository custom instructions for GitHub Copilot
shortTitle: Add repository instructions
intro: 'Create a file in a repository that gives {% data variables.product.prodname_copilot_short %} additional context for the work it does in that repository.'
redirect_from:
  - /copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
  - /copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/add-repository-instructions
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
---

{% webui %}

This version of this article is for using repository custom instructions on the {% data variables.product.github %} website. Click the tabs above for information on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endwebui %}

{% vscode %}

This version of this article is for using repository custom instructions and prompt files in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments.

{% endvscode %}

{% visualstudio %}

This version of this article is for using repository custom instructions in {% data variables.product.prodname_vs %}. Click the tabs above for instructions on using custom instructions in other environments.

{% endvisualstudio %}

{% jetbrains %}

This version of this article is for using repository custom instructions in JetBrains IDEs. Click the tabs above for instructions on using custom instructions in other environments.

{% endjetbrains %}

{% xcode %}

This version of this article is for using repository custom instructions in Xcode. Click the tabs above for instructions on using custom instructions in other environments.

{% endxcode %}

{% eclipse %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions in Eclipse. Click the tabs above for instructions on using custom instructions in other environments.

{% endeclipse %}

## About repository custom instructions for {% data variables.product.prodname_copilot_short %}

Repository custom instructions let you provide {% data variables.product.prodname_copilot_short %} with repository-specific guidance and preferences.

{% data reusables.copilot.repository-custom-instructions-support %}

## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).

{% webui %}

* Your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endwebui %}

{% vscode %}

* The **Use Instruction Files** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvscode %}

{% visualstudio %}

* The **Enable custom instructions...** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvisualstudio %}

{% jetbrains %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in your JetBrains IDE.

{% endjetbrains %}

{% xcode %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in Xcode.

{% endxcode %}

{% eclipse %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in Eclipse.

{% endeclipse %}

## Creating a repository custom instructions file

{% jetbrains %}

JetBrains IDEs support a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

You can create a custom instructions file in your repository using the {% data variables.product.prodname_copilot_short %} settings page, or you can create the file manually.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Using the settings page

{% data reusables.copilot.jetbrains-settings %}
{% data reusables.copilot.jetbrains-languages-and-frameworks %}
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

{% endjetbrains %}

{% xcode %}

Xcode supports a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

You can create a custom instructions file in your repository via the {% data variables.product.prodname_copilot_short %} settings page.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Open the {% data variables.product.prodname_copilot %} for Xcode application.
1. At the top of the application window, under **Settings**, click **Advanced**.
1. To the right of "Custom Instructions", click **Current Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

{% endxcode %}

{% eclipse %}

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

{% endeclipse %}

{% vscode %}

{% data variables.product.prodname_vscode_shortname %} supports either:

* A single `.github/copilot-instructions.md` custom instructions file stored in the repository
* One or more `.instructions.md` files stored within `.github/instructions` in the repository. Each file can specify `applyTo` frontmatter to define what files or directories its instructions apply to.

### Using a single `.github/copilot-instructions.md` file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

### Using one or more `.instructions.md` files

1. Create the `.github/instructions` directory if it does not already exist.

1. Create one or more `.instructions.md` files, adding natural language instructions to the file(s).

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Specify what files or directories the instructions apply to by adding `applyTo` frontmatter to the Markdown files, using glob syntax.

   ```markdown
   ---
   applyTo: "app/models/**/*.rb"
   ---

   Add custom instructions here
   ```

   To apply the instructions to all files, use the `**` pattern.

{% endvscode %}

{% visualstudio %}

{% data variables.product.prodname_vs %} supports a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

{% endvisualstudio %}

{% webui %}

**{% data variables.copilot.copilot_chat_short %}** on the {% data variables.product.github %} website, **{% data variables.copilot.copilot_coding_agent %}** and **{% data variables.copilot.copilot_code-review_short %}** support a single `.github/copilot-instructions.md` custom instructions file stored in the repository.

In addition, **{% data variables.copilot.copilot_coding_agent %}** supports one or more `.instructions.md` files stored within `.github/instructions` in the repository. Each file can specify `applyTo` frontmatter to define what files or directories its instructions apply to.

### Using a single `.github/copilot-instructions.md` file

You can ask {% data variables.copilot.copilot_coding_agent %} to generate a `.github/copilot-instructions.md` file, or you can write your own instructions file.

#### Asking {% data variables.copilot.copilot_coding_agent %} to generate a `.github/copilot-instructions.md` file

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}

1. Navigate to the Agents page at [github.com/copilot/agents](https://github.com/copilot/agents).

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
   - Try cleaning the repo and environment and running commands in different orders and document errors and and misbehavior observed as well as any steps used to mitigate the problem.
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

#### Writing your own `.github/copilot-instructions.md` file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

> [!TIP]
> The first time you create a pull request in a given repository with {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot_short %} will leave a comment with a link to automatically generate custom instructions for the repository.

### Using one or more `.instructions.md` files

1. Create the `.github/instructions` directory if it does not already exist.

1. Create one or more `.instructions.md` files, adding natural language instructions to the file(s).

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Specify what files or directories the instructions apply to by adding `applyTo` frontmatter to the Markdown files, using glob syntax.

   ```markdown
   ---
   applyTo: "app/models/**/*.rb"
   ---

   Add custom instructions here
   ```

   To apply the instructions to all files, use the `**` pattern.

{% endwebui %}

{% note %}

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Writing effective repository custom instructions

The instructions you add to your custom instruction file(s) should be short, self-contained statements that provide {% data variables.product.prodname_copilot_short %} with relevant information to help it work in this repository. Because the instructions are sent with every chat message, they should be broadly applicable to most requests you will make in the context of the repository.

The exact structure you utilize for your instructions file(s) will vary by project and need, but the following guidelines provide a good starting point:

* Provide an overview of the project you're working on, including its purpose, goals, and any relevant background information.
* Include the folder structure of the repository, including any important directories or files that are relevant to the project.
* Specify the coding standards and conventions that should be followed, such as naming conventions, formatting rules, and best practices.
* Include any specific tools, libraries, or frameworks that are used in the project, along with any relevant version numbers or configurations.

The following instructions file(s) is an example of these practices in action:

```markdown
# Project Overview

This project is a web application that allows users to manage their tasks and to-do lists. It is built using React and Node.js, and uses MongoDB for data storage.

## Folder Structure

- `/src`: Contains the source code for the frontend.
- `/server`: Contains the source code for the Node.js backend.
- `/docs`: Contains documentation for the project, including API specifications and user guides.

## Libraries and Frameworks

- React and Tailwind CSS for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.

## Coding Standards

- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function based components in React.
- Use arrow functions for callbacks.

## UI guidelines

- A toggle is provided to switch between light and dark mode.
- Application should have a modern and clean design.
```

You should also consider the size and complexity of your repository. The following types of instructions may work for a small repository with only a few contributors, but for a large and diverse repository, **these may cause problems**:

* Requests to refer to external resources when formulating a response
* Instructions to answer in a particular style
* Requests to always respond with a certain level of detail

For example, the following instructions **may not have the intended results**:

```markdown
Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
```

## Repository custom instructions in use

The instructions in the file(s) are available for use by {% data variables.copilot.copilot_chat_short %} as soon as you save the file(s). The complete set of instructions will be automatically added to requests that you submit to {% data variables.product.prodname_copilot_short %} in the context of that repository. For example, they are added to the prompt you submit to {% data variables.copilot.copilot_chat_short %}.

{% webui %}

In {% data variables.copilot.copilot_chat_short %}'s immersive view ([github.com/copilot](https://github.com/copilot)), you can start a conversation that uses repository custom instructions by adding, as an attachment, the repository that contains the instructions file.

Whenever repository custom instructions are used by {% data variables.copilot.copilot_chat_short %}, the instructions file is added as a reference for the response that's generated. To find out whether repository custom instructions were used, expand the list of references at the top of a chat response in the Chat panel and check whether the `.github/copilot-instructions.md` file is listed.

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-ref-in-github.png)

You can click the reference to open the file.

{% data reusables.copilot.custom-instructions-interactions-note %}

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-vscode.png)

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of the References popup, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instruction-ref-visual-studio.png)

{% endvisualstudio %}

{% jetbrains %}

{% data reusables.copilot.custom-instructions-reference %}

{% endjetbrains %}

{% xcode %}

{% data reusables.copilot.custom-instructions-reference %}

{% endxcode %}

{% webui %}

{% data reusables.copilot.custom-instructions-enabling %}

1. On {% data variables.product.prodname_dotcom_the_website %}, do one of the following:
   * Go to a repository with a custom instructions file and open the assistive chat panel.
   * Go to the immersive view of {% data variables.copilot.copilot_chat_short %} ([github.com/copilot](https://github.com/copilot)) and attach a repository that contains a custom instructions file.
1. Click the {% octicon "kebab-horizontal" aria-label="Conversation options" %} button at the top of the Chat panel, or the top right of the immersive page.
1. Click **Disable custom instructions** or **Enable custom instructions**.

   > [!NOTE]
   > You will only see these options in the context of a repository that contains a custom instructions file.

Your choice persists, for all repositories containing a custom instructions file, until you change it.

{% data reusables.copilot.custom-instructions-enabling-for-ccr %}

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-enabling %}

1. Open the Setting editor by using the keyboard shortcut <kbd>Command</kbd>+<kbd>,</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows).
1. Type `instruction file` in the search box.
1. Select or clear the checkbox under **Code Generation: Use Instruction Files**.

{% data reusables.copilot.custom-instructions-enabling-for-ccr %}

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-enabling %}

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.

   ![Screenshot of the {% data variables.product.prodname_vs %} menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, type `custom instructions` in the search box, then click **{% data variables.product.prodname_copilot_short %}**.
1. Select or clear the checkbox for **Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

{% data reusables.copilot.custom-instructions-enabling-for-ccr %}

{% endvisualstudio %}

{% vscode %}

## Enabling and using prompt files

> [!NOTE] Prompt files are {% data variables.release-phases.public_preview %} and subject to change.

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

For more information about prompt files, see [Custom instructions for {% data variables.product.prodname_copilot %} in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files-experimental) in the {% data variables.product.prodname_vscode %} documentation.

{% endvscode %}
