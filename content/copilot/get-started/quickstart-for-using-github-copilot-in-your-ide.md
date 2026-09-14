---
title: Quickstart for using GitHub Copilot in your IDE
shortTitle: Copilot in your IDE
intro: 'Use {% data variables.product.prodname_copilot_short %} in your IDE to explain concepts, complete code, propose edits, and validate files with agent mode.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
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
  - /copilot/quickstart
contentType: get-started
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} is available in supported IDEs: {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_jetbrains_ides %}, Eclipse, and XCode. It can answer questions and explain concepts, and suggest or complete code as you work. In IDEs that support agent mode, it can also propose edits and validate files.

This quickstart shows you how to use these capabilities. It takes about ten minutes.

## Prerequisites

* **An active {% data variables.product.prodname_copilot_short %} plan.** See [AUTOTITLE](/copilot/get-started/what-is-github-copilot#get-access).
* **The {% data variables.product.prodname_copilot_short %} extension for your IDE.** See [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension).
* **Signed in to {% data variables.product.company_short %} in your IDE.** If you have authentication problems, see [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues).

## Ask a question about your code

1. Open an existing code file in your editor.
1. Open the {% data variables.copilot.copilot_chat_short %} window.

   The way you do this depends on your IDE.
   * In {% data variables.product.prodname_vscode %}, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd> (Windows/Linux) or <kbd>Control</kbd>+<kbd>Command</kbd>+<kbd>I</kbd> (macOS).
   * In other IDEs, look for {% data variables.copilot.copilot_chat_short %} in the menu bar or sidebar. See [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide).

1. Type `what does this file do`, then press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %}'s answer displays below your question.

1. Select a line of code in the editor, then type `explain this line` in the chat window.

{% data variables.product.prodname_copilot_short %} can see the file you have open, so you can ask about your code instead of describing it first.

## Let {% data variables.product.prodname_copilot_short %} work through a task

Most IDEs support **agent mode**. In agent mode, you describe what you want, and {% data variables.product.prodname_copilot_short %} decides which files to change, makes the edits, and runs commands with your approval.

To check whether your IDE supports agent mode, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix?tool=ides).

1. In the chat window, select **Agent**, then describe a task. For example, `Create a task manager web app with the ability to add, delete, and mark tasks as completed`.
1. Press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} generates the files and code needed.

1. Review the changes, then use your IDE's controls to accept them.

When you're ready, save your changes, and commit when everything looks good.

## Get your first inline suggestion

{% data variables.product.prodname_copilot %} can suggest code as you work and supports many programming languages. This example uses JavaScript, but you can follow along in your preferred language.

1. In your IDE, create a new JavaScript (_*.js_) file.
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot_short %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. {% data reusables.copilot.accept-suggestion %}

When you're ready, save your changes, and commit when everything looks good.

## Next steps

* Customize {% data variables.product.prodname_copilot_short %} in your IDE with custom instructions. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide#further-reading).
* Try the {% data variables.copilot.github_copilot_app %}. See [AUTOTITLE](/copilot/get-started/quickstart-copilot-app).
