---
title: Adding repository custom instructions for GitHub Copilot
shortTitle: Repository custom instructions
intro: 'Create a file in a repository that gives {% data variables.product.prodname_copilot_short %} additional context for the work it does in that repository.'
redirect_from:
  - /copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
  - /copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
versions:
  feature: copilot
topics:
  - Copilot
---

{% webui %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions on the {% data variables.product.github %} website. Click the tabs above for information on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

## About repository custom instructions for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.repository-custom-instructions-support %}
* **{% data variables.copilot.copilot_coding_agent %}**
* **{% data variables.copilot.copilot_code-review_short %}**

{% data reusables.copilot.repository-custom-instructions-intro %} You can do this by creating a file in your repository that provides {% data variables.product.prodname_copilot_short %} with the contextual information it needs to generate higher quality responses.

The custom instructions file is used for chat responses, for code review, and also by {% data variables.product.prodname_copilot_short %} when you assign it to an issue or ask it to create a pull request. Instructions included in this file can help {% data variables.product.prodname_copilot_short %} to work on files in a way that matches your team's working practices and conforms to coding standards for your project. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

{% endwebui %}

{% vscode %}

This version of this article is for using repository custom instructions in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments.

## About repository custom instructions and prompt files for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.repository-custom-instructions-support %}
* **{% data variables.copilot.copilot_code-review_short %}**

{% data reusables.copilot.repository-custom-instructions-intro %} You can do this by creating a file in your repositories that provides {% data variables.product.prodname_copilot_short %} with the contextual information it needs to generate higher quality responses.

There are two types of files you can use to provide context and instructions to {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}:

* **Repository custom instructions** allow you to specify repository-wide instructions and preferences, in a single file, that {% data variables.product.prodname_copilot_short %} will use when working in this repository.
* **Prompt files** (public preview) allow you to save common prompt instructions and relevant context in Markdown files (`*.prompt.md`) that you can then reuse in your {% data variables.copilot.copilot_chat_short %} prompts. Prompt files are only available in {% data variables.product.prodname_vscode_shortname %}.

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific {% data variables.product.prodname_copilot_short %} interaction.

### Repository custom instructions example

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

### Prompt file examples

The following examples demonstrate how to use prompt files.

* `New React form.prompt.md` - contains instructions for a reusable task to generate a form using React.

  ```markdown
  Your goal is to generate a new React form component.

  Ask for the form name and fields if not provided.

  Requirements for the form:
  - Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
  - Use `react-hook-form` for form state management:
    - Always define TypeScript types for your form data
    - Prefer *uncontrolled* components using register
    - Use `defaultValues` to prevent unnecessary rerenders
  - Use `yup` for validation:
    - Create reusable validation schemas in separate files
    - Use TypeScript types to ensure type safety
    - Customize UX-friendly validation rules
  ```

* `API security review.prompt.md` - contains reusable information about security practices for REST APIs, which can be used to do security reviews of REST APIs.

  ```markdown
  Secure REST API review:
  - Ensure all endpoints are protected by authentication and authorization
  - Validate all user inputs and sanitize data
  - Implement rate limiting and throttling
  - Implement logging and monitoring for security events
  …
  ```

{% endvscode %}

{% visualstudio %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions in {% data variables.product.prodname_vs %}. Click the tabs above for instructions on using custom instructions in other environments.

## About repository custom instructions for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.repository-custom-instructions-support %}
* **{% data variables.copilot.copilot_code-review_short %}**

{% data reusables.copilot.repository-custom-instructions-intro %} You can do this by creating a file in your repositories that provides {% data variables.product.prodname_copilot_short %} with the contextual information it needs to generate higher quality responses.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% data reusables.copilot.repository-cust-instr-code-review %}

{% endvisualstudio %}

{% jetbrains %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions in JetBrains IDEs. Click the tabs above for instructions on using custom instructions in other environments.

## About repository custom instructions for {% data variables.copilot.copilot_chat %}

Repository custom instructions are currently supported for {% data variables.copilot.copilot_chat_short %} in JetBrains IDEs, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, Xcode, and on the {% data variables.product.github %} website.

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% endjetbrains %}

{% xcode %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

This version of this article is for using repository custom instructions in Xcode. Click the tabs above for instructions on using custom instructions in other environments.

## About repository custom instructions for {% data variables.copilot.copilot_chat %}

Repository custom instructions are currently supported for {% data variables.copilot.copilot_chat_short %} in Xcode, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %} JetBrains IDEs, and on the {% data variables.product.github %} website.

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

### Example

{% data reusables.copilot.repository-custom-instructions-example %}

{% endxcode %}

## Prerequisites for repository custom instructions

* You must have a custom instructions file (see the instructions below).

{% webui %}

* Your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

* During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} {% ifversion ghec %}or {% data variables.copilot.copilot_enterprise_short %}{% endif %} plan, the organization {% ifversion ghec %}or enterprise{% endif %} that provides your plan must have the **Opt in to preview features** setting enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom){% endif %}.

{% endwebui %}

{% vscode %}

* The **Use Instruction Files** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvscode %}

{% visualstudio %}

* The **Enable custom instructions** option must be enabled in your settings. This is disabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvisualstudio %}

{% jetbrains %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in your JetBrains IDE.

{% endjetbrains %}

{% xcode %}

* The latest version of the {% data variables.product.prodname_copilot_short %} extension must be installed in Xcode.

{% endxcode %}

## Creating a repository custom instructions file

{% jetbrains %}

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

You can create a custom instructions file in your repository via the {% data variables.product.prodname_copilot_short %} settings page.

Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

1. Open the {% data variables.product.prodname_copilot %} for Xcode application.
1. At the top of the application window, click **Advanced**.
1. To the right of "Custom Instructions", click **Current Workspace** or **Global** to choose whether the custom instructions apply to the current workspace or all workspaces.

{% endxcode %}

{% vscode %}

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

{% endvscode %}

{% visualstudio %}

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

{% endvisualstudio %}

{% webui %}

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

To see your instructions in action, go to [https://github.com/copilot](https://github.com/copilot), attach the repository containing the instructions file, and start a conversation.

{% endwebui %}

{% note %}

Did you successfully add a custom instructions file to your repository?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Writing effective repository custom instructions

The instructions you add to the `.github/copilot-instructions.md` file should be short, self-contained statements provide {% data variables.product.prodname_copilot_short %} with relevant information to help it work in this repository.

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

The instructions in the `.github/copilot-instructions.md` file are available for use by {% data variables.copilot.copilot_chat_short %} as soon as you save the file. The complete set of instructions will be automatically added to requests that you submit to {% data variables.product.prodname_copilot_short %} in the context of that repository. For example, they are added to the prompt you submit to {% data variables.copilot.copilot_chat_short %}.

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
1. Select or clear the checkbox for **(Preview) Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

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
