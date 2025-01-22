---
title: Adding custom instructions for GitHub Copilot
shortTitle: Custom instructions
intro: 'You can create a file that automatically adds information to all questions you ask {% data variables.product.prodname_copilot_chat_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
---


{% webui %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using custom instructions on the {% data variables.product.github %} website. Click the tabs above for information on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using custom instructions in {% data variables.product.prodname_vscode_shortname %}. Click the tabs above for instructions on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-note %}
>
>   This version of this article is for using custom instructions in {% data variables.product.prodname_vs %}. Click the tabs above for instructions on using custom instructions in other environments. <!-- markdownlint-disable-line MD027 -->

{% endvisualstudio %}

## About custom instructions for {% data variables.product.prodname_copilot_chat %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a file that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

## Prerequisites

* A custom instructions file (see the instructions below).

{% webui %}

* Your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling custom instructions](#enabling-or-disabling-custom-instructions) later in this article.
* During the {% data variables.release-phases.public_preview %}, if you have a {% data variables.product.prodname_copilot_business_short %} {% ifversion ghec %}or {% data variables.product.prodname_copilot_enterprise_short %}{% endif %} subscription, then the organization {% ifversion ghec %}or enterprise{% endif %} from which you receive your subscription must have the **Opt in to preview features** setting enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom){% endif %}.

{% endwebui %}

{% vscode %}

* The **Use Instruction Files** option must be enabled in your settings. This is enabled by default. See [Enabling or disabling custom instructions](#enabling-or-disabling-custom-instructions) later in this article.

{% endvscode %}

{% visualstudio %}

* The **Enable custom instructions** option must be enabled in your settings. This is disabled by default. See [Enabling or disabling custom instructions](#enabling-or-disabling-custom-instructions) later in this article.

{% endvisualstudio %}

## Creating a custom instructions file

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

## Writing effective custom instructions

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

## Custom instructions in use

{% webui %}

The instructions in the `.github/copilot-instructions.md` file are available for use by {% data variables.product.prodname_copilot_chat_short %} as soon as you save the file. The complete set of instructions will be automatically added to chat prompts that relate to the repository containing the instructions file.

In immersive mode (the [https://github.com/copilot](https://github.com/copilot) page), you can start a conversation that uses custom instructions by adding, as an attachment, the repository that contains the instructions file.

Custom instructions are not visible in {% data variables.product.prodname_copilot_chat_short %}, but you can verify that they are being used by {% data variables.product.prodname_copilot_short %} by expanding the list of references at the top of a chat response in the Chat panel. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference.

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark organge outline.](/assets/images/help/copilot/custom-instructions-ref-in-github.png)

You can click the reference to open the file.

{% endwebui %}

{% vscode %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark organge outline.](/assets/images/help/copilot/custom-instructions-vscode.png)

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.custom-instructions-reference %}

![Screenshot of the References popup, showing the 'copilot-instructions.md' file highlighted with a dark organge outline.](/assets/images/help/copilot/custom-instruction-ref-visual-studio.png)

{% endvisualstudio %}

## Enabling or disabling custom instructions

You can choose whether or not to have custom instructions added to your chat questions.

{% webui %}

1. Click the {% octicon "kebab-horizontal" aria-label="Conversation options" %} button at the top of the Chat panel, or the top right of the immersive page.
1. Click **Disable custom instructions** or **Enable custom instructions**.

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

1. In the "Options" dialog, type `custom instructions` in the search box.
1. Select or clear the checkbox for **(Preview) Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.

{% endvisualstudio %}
