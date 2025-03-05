---
title: Adding repository custom instructions for GitHub Copilot
shortTitle: Repository custom instructions
intro: 'You can create a file in a repository that automatically adds information to all questions you ask {% data variables.product.prodname_copilot_chat_short %}.'
redirect_from:
   - /copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
versions:
  feature: copilot
topics:
  - Copilot
---


{% webui %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using repository custom instructions on the {% data variables.product.github %} website. Click the tabs above for information on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using repository custom instructions in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using repository custom instructions in {% data variables.product.prodname_vs %}. Click the tabs above for instructions on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endvisualstudio %}

## About repository custom instructions for {% data variables.product.prodname_copilot_chat %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a file in your repository that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

{% vscode %}

Additionally, you can create prompt files. With prompt files, you can specify common prompt instructions and relevant context in a Markdown file (`*.prompt.md`), that you can then reuse in your chat prompts. Prompt files are only available in {% data variables.product.prodname_vscode_shortname %}.

{% endvscode %}

{% webui %}

You can also create personal custom instructions, which apply to conversations you, as a user, have with {% data variables.product.prodname_copilot_chat_short %} across {% data variables.product.github %}. This differs from repository custom instructions, which apply to conversations in the context of a single repository. For more information on personal instructions, see [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot).

{% endwebui %}

## Prerequisites

* A custom instructions file (see the instructions below).

{% webui %}

* Your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.
* During the {% data variables.release-phases.public_preview %}, if you have a {% data variables.product.prodname_copilot_business_short %} {% ifversion ghec %}or {% data variables.product.prodname_copilot_enterprise_short %}{% endif %} subscription, then the organization {% ifversion ghec %}or enterprise{% endif %} from which you receive your subscription must have the **Opt in to preview features** setting enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom){% endif %}.

{% endwebui %}

{% vscode %}

* The **Use Instruction Files** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvscode %}

{% visualstudio %}

* The **Enable custom instructions** option must be enabled in your settings. This is disabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-repository-custom-instructions) later in this article.

{% endvisualstudio %}

## Creating a repository custom instructions file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

## Sample instructions

This example of a `.github/copilot-instructions.md` file contains three instructions that will be added to all chat questions.

```markdown
We use Bazel for managing our Java dependencies, not Maven, so when talking about Java packages, always give me instructions and code samples that use Bazel.

We always write JavaScript with double quotes and tabs for indentation, so when your responses include JavaScript code, please follow those conventions.

Our team uses Jira for tracking items of work.
```

## Writing effective repository custom instructions

The instructions you add to the `.github/copilot-instructions.md` file should be short, self-contained statements that add context or relevant information to supplement users' chat questions.

The following types of instructions are unlikely to work as desired and may cause problems with other areas of {% data variables.product.prodname_copilot_short %}:

* Requests to refer to external resources when formulating a response
* Instructions to answer in a particular style
* Requests to always respond with a certain level of detail

The following instructions are therefore unlikely to have the intended result:

```markdown
Always conform to the coding styles defined in styleguide.md in repo my-org/my-repo when generating code.

Use @terminal when answering questions about Git.

Answer all questions in the style of a friendly colleague, using informal language.

Answer all questions in less than 1000 characters, and words of no more than 12 characters.
```

## Repository custom instructions in use

{% webui %}

The instructions in the `.github/copilot-instructions.md` file are available for use by {% data variables.product.prodname_copilot_chat_short %} as soon as you save the file. The complete set of instructions will be automatically added to chat prompts that relate to the repository containing the instructions file.

In {% data variables.product.prodname_copilot_chat_short %}'s immersive view ([github.com/copilot](https://github.com/copilot)), you can start a conversation that uses custom instructions by adding, as an attachment, the repository that contains the instructions file.

Whenever custom instructions are used by {% data variables.product.prodname_copilot_chat_short %}, the instructions file is added as a reference for the response that's generated. To find out whether custom instructions were used, expand the list of references at the top of a chat response in the Chat panel and check whether the `.github/copilot-instructions.md` file is listed.

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark organge outline.](/assets/images/help/copilot/custom-instructions-ref-in-github.png)

You can click the reference to open the file.

{% data reusables.copilot.repository-vs-personal-instructions-note %} See [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot).

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-vscode.png)

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of the References popup, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instruction-ref-visual-studio.png)

{% endvisualstudio %}

## Enabling or disabling repository custom instructions

You can choose whether or not to have custom instructions added to your chat questions.

{% webui %}

1. Click the {% octicon "kebab-horizontal" aria-label="Conversation options" %} button at the top of the Chat panel, or the top right of the immersive page.
1. Click **Disable custom instructions** or **Enable custom instructions**.

   > [!NOTE]
   > In immersive mode, you will only see these options if you have attached a repository that contains a custom instructions file.

Your choice persists until you change it.

{% endwebui %}

{% vscode %}

1. Open the Setting editor by using the keyboard shortcut <kbd>Command</kbd>+<kbd>,</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows).
1. Type `instruction file` in the search box.
1. Select or clear the checkbox under **Code Generation: Use Instruction Files**.

{% endvscode %}

{% visualstudio %}

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.

   ![Screenshot of the {% data variables.product.prodname_vs %} menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, type `custom instructions` in the search box, then click **{% data variables.product.prodname_copilot_short %}**.
1. Select or clear the checkbox for **(Preview) Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

{% endvisualstudio %}

{% vscode %}

## About prompt files

> [!NOTE] Prompt files are {% data variables.release-phases.public_preview %} and subject to change.

Prompt files let you build and share reusable prompt instructions with additional context. A prompt file is a Markdown file that mimics the existing format of writing prompts in {% data variables.product.prodname_copilot_chat_short %} (for example, `Rewrite #file:x.ts`). This allows blending natural language instructions, additional context, and even linking to other prompt files as dependencies.

While custom instructions help to add codebase-wide context to each AI workflow, prompt files let you add instructions to a specific chat interaction.

Common use cases include:

* **Code generation**. Create reusable prompts for components, tests, or migrations (for example, React forms, or API mocks).
* **Domain expertise**. Share specialized knowledge through prompts, such as security practices, or compliance checks.
* **Team collaboration**. Document patterns and guidelines with references to specs and documentation.
* **Onboarding**. Create step-by-step guides for complex processes or project-specific patterns.

### Prompt file examples

The following examples demonstrate how to use prompt files.

* `react-form.prompt.md` - documents a reusable task for generating a form.

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

* `security-api.prompt.md` - documents reusable security practices for REST APIs, which can be used to do security reviews of REST APIs.

  ```markdown
  Secure REST API review:
  - Ensure all endpoints are protected by authentication and authorization
  - Validate all user inputs and sanitize data
  - Implement rate limiting and throttling
  - Implement logging and monitoring for security events
  …
  ```

### Using prompt files

To enable prompt files, configure the `chat.promptFiles` {% data variables.product.prodname_vscode_shortname %} setting. Set it to `true` or use the `{ "/path/to/folder": boolean }` notation to specify a different path. Relative paths are resolved from the root folder(s) of your workspace, and the default value of `.github/prompts` is used if no other path is provided. For more detailed instructions, see [{% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode_shortname %} settings reference](https://code.visualstudio.com/docs/copilot/copilot-settings) in the {% data variables.product.prodname_vscode %} documentation.

1. Create a `.prompt.md` file in the `.github/prompts` directory of your workspace.
1. Write prompt instructions by using Markdown formatting.

   Reference additional workspace files as Markdown links (`[index](../index.ts)`), or as `#file:../index.ts` references within the prompt file. You can also reference other `.prompt.md` files.

1. Select the attach icon, then select **Prompt...** and choose the prompt file to attach it in {% data variables.product.prodname_copilot_chat_short %} or {% data variables.product.prodname_copilot_edits_vscode_short %}.
1. Optionally, attach additional context files required for the task.
1. Send the chat prompt.

   * For reusable tasks, send the prompt without any additional instructions.
   * Include additional instructions to provide more context for the task at hand.

> [!TIP] Reference additional context files like API specs or documentation by using Markdown links to provide {% data variables.product.prodname_copilot_short %} with more complete information.

{% endvscode %}
