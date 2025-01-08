---
title: Adding custom instructions for GitHub Copilot
shortTitle: Custom instructions
intro: 'You can create a file that automatically adds information to all questions you ask {% data variables.product.prodname_copilot_chat_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
---

> [!NOTE]
> * This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.
> * Custom instructions are currently only supported for {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %}.

## About custom instructions for {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, or the specifics of your project, if you provide it with enough context to do so. Instead of repeatedly adding this contextual detail to your chat questions, you can create a file that automatically adds this information for you. The additional information is not displayed in the chat, but is available to {% data variables.product.prodname_copilot_short %} to allow it to generate higher quality responses.

## Prerequisites

* A custom instructions file (see the instructions below).
* The **Use Instruction Files** ({% data variables.product.prodname_vscode_shortname %}) or **Enable custom instructions** ({% data variables.product.prodname_vs %}) option enabled in your settings. See [Enabling or disabling custom instructions](#enabling-or-disabling-custom-instructions) later in this article.

  > [!NOTE] The setting is enabled by default in {% data variables.product.prodname_vscode_shortname %} and disabled by default in {% data variables.product.prodname_vs %}.

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

The instructions in the `.github/copilot-instructions.md` file are available for use by {% data variables.product.prodname_copilot_chat_short %} as soon as you save the file. The complete set of instructions will be automatically attached to requests that you submit in either the {% data variables.product.prodname_copilot_chat_short %} view, or in inline chat, in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %}.

Custom instructions are not visible in the Chat view or inline chat, but you can verify that they are being used by {% data variables.product.prodname_copilot_short %} by looking at the References list of a response. If custom instructions were added to the prompt that was sent to the model, the `.github/copilot-instructions.md` file is listed as a reference. You can click the reference to open the file.

![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} view in {% data variables.product.prodname_vscode_shortname %} with a reference for the copilot-instructions.md file.](/assets/images/help/copilot/custom-instructions-vscode.png)

## Enabling or disabling custom instructions

You can choose whether or not to have custom instructions added to your chat questions. To do this, select or clear the option in the settings for the {% data variables.product.prodname_copilot_short %} extension.

### In {% data variables.product.prodname_vscode_shortname %}

1. Open the Setting editor by using the keyboard shortcut <kbd>Command</kbd>+<kbd>,</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows).
1. Type `instruction file` in the search box.
1. Select or clear the checkbox under **Code Generation: Use Instruction Files**.

### In {% data variables.product.prodname_vs %}

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.

   ![Screenshot of the {% data variables.product.prodname_vs %} menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, type `custom instructions` in the search box.
1. Select or clear the checkbox for **(Preview) Enable custom instructions to be loaded from .github/copilot-instructions.md files and added to requests**.
