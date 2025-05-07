---
title: Asking GitHub Copilot questions in Windows Terminal
intro: 'You can use {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_windows_terminal %} to get suggestions and explanations for the command line.'
topics:
  - Copilot
shortTitle: Copilot in Windows Terminal
versions:
  feature: copilot
---

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. See [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
* **{% data variables.product.prodname_windows_terminal %} Canary installed**. For installation instructions, see [Installing {% data variables.product.prodname_windows_terminal %} Canary](https://github.com/microsoft/terminal?tab=readme-ov-file#installing-windows-terminal-canary).
* **{% data variables.product.prodname_copilot %} connected to Terminal Chat**. See [AUTOTITLE](/copilot/quickstart?tool=windowsterminal).

If you have access to {% data variables.product.prodname_copilot %} via your organization or enterprise, you cannot use {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_windows_terminal %} if your organization owner or enterprise administrator has disabled {% data variables.product.prodname_copilot_cli_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## Getting command explanations and suggestions

In the Terminal Chat chat window, type a question (for example, `how do i list all markdown files in my directory`) then press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %}'s answer is displayed below your question.

Click on an answer to insert it to the command line.

## Sharing feedback

To send feedback to {% data variables.product.prodname_windows_terminal %} about the quality of a suggestion, open an issue in the [{% data variables.product.prodname_windows_terminal %} repository](https://github.com/microsoft/terminal/issues).

## Further reading

* [Terminal Chat](https://learn.microsoft.com/windows/terminal/terminal-chat#setting-up-terminal-chat) in the Microsoft Learn documentation
