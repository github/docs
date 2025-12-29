---
title: Using GitHub Copilot to explore pull requests
shortTitle: Explore pull requests
intro: '{% data variables.copilot.copilot_chat %} can help you understand the content, functionality, and status of a pull request.'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/tutorials/using-copilot-to-explore-pull-requests
contentType: tutorials
category:
  - Accelerate PR velocity
  - Author and optimize with Copilot
---

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} different questions about a pull request, from different views within the pull request. For example, you can ask {% data variables.product.prodname_copilot_short %} to summarize a pull request, or explain what has changed within specific files or lines of code in a pull request.

## Get a summary of a pull request

You can ask {% data variables.product.prodname_copilot_short %} to summarize a pull request, or to provide information about the status of a pull request.

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. In the top right corner of the page, click the {% data variables.product.prodname_copilot_short %} icon (**{% octicon "copilot" aria-label="Copilot icon" %}**) to open {% data variables.copilot.copilot_chat_short %}.

    {% data variables.product.prodname_copilot_short %} will use the pull request as context for your question.
1. At the bottom of the {% data variables.copilot.copilot_chat_short %} panel, in the prompt box, type a question and press <kbd>Enter</kbd>.

### Example prompts

The following prompts are examples of the kind of questions you can ask {% data variables.product.prodname_copilot_short %} to help you find out about a pull request.

* `Summarize this pull request`
* `What is the current status of this pull request?`
* `What are the main changes in this pull request?`

## Ask about changes to a specific file in a pull request

You can ask {% data variables.product.prodname_copilot_short %} to explain the changes made to a specific file in a pull request, or to provide information about the status of a file in a pull request.

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. To the right side of a line in the file you want to ask about, click the {% octicon "triangle-down" aria-hidden="true" aria-label="Show file actions" %} icon, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, and select **Ask about this diff**.

    This opens {% data variables.copilot.copilot_chat_short %} with the file changes indicated as the context of your question.
1. Type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

### Example prompts

* `What are the changes in this file?`
* `What is the status of this file in the pull request?`

## Ask about specific lines within a file in a pull request

You can ask {% data variables.product.prodname_copilot_short %} to explain specific lines of code in a pull request, or to provide information about the status of those lines.

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click the line number for the first line you want to select, then hold down <kbd>Shift</kbd> and click the line number for the last line you want to select.
1. To the right side of one of the selected lines, click the {% octicon "triangle-down" aria-hidden="true" aria-label="Show file actions" %} icon, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, and select **Ask about this diff**.

    This opens {% data variables.copilot.copilot_chat_short %} with the selected lines indicated as the context of your question.
1. Type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

### Example prompts

* `Explain the selected lines of code`
* `What do these lines of code do?`

## Ask why a workflow has failed

You can ask {% data variables.product.prodname_copilot_short %} to explain why a workflow has failed in a pull request, and provide suggestions for how to fix the issue.

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Scroll to the bottom of the page, then, next to one of the failing checks, click the ellipsis, and then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Explain error.**

    This opens {% data variables.copilot.copilot_chat_short %} with the workflow failure indicated as the context of your question and a prompt pre-filled in the chat input box. {% data variables.product.prodname_copilot_short %} responds with information about why the pull request failed. {% data variables.product.prodname_copilot_short %} may also provide suggestions for how to fix the issue.

1. If {% data variables.product.prodname_copilot_short %} has provided steps to fix the issue, you can follow the steps to resolve the problem.

### Example prompts

* `Why has this workflow failed?`
* `What can I do to fix this issue?`

## Further reading

* [AUTOTITLE](//copilot/tutorials/using-copilot-to-explore-a-codebase)
