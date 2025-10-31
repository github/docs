---
title: Using GitHub Copilot to explore a codebase
shortTitle: Explore a codebase
intro: '{% data variables.copilot.copilot_chat %} can help you gain an understanding of the content, structure, and functionality of a codebase.'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/guides-on-using-github-copilot/using-copilot-to-explore-a-codebase
  - /copilot/tutorials/using-copilot-to-explore-a-codebase
contentType: tutorials
category:
  - Scale institutional knowledge 
  - Author and optimize with Copilot
---

## Introduction

If you've been assigned to work on a project that you're not familiar with—or you've found an interesting open source project that you want to contribute to—you'll need some understanding of the codebase before you can start making changes. This guide will show you how to use {% data variables.copilot.copilot_chat %} to explore a codebase and quickly learn about the project.

## Working with {% data variables.copilot.copilot_chat_short %}

Throughout this guide, we'll work on {% data variables.product.prodname_dotcom_the_website %}, using {% data variables.copilot.copilot_chat_short %} in assistive mode, which displays a {% data variables.copilot.copilot_chat_short %} panel over the bottom right corner of your current page on {% data variables.product.prodname_dotcom_the_website %}.

You can expand the {% data variables.copilot.copilot_chat_short %} panel, to give more space for displaying {% data variables.product.prodname_copilot_short %}'s responses, by clicking and dragging the edges of the panel.

## Using the predefined prompts

{% data variables.copilot.copilot_chat_short %} comes with a set of predefined prompts that can help you get started with exploring a codebase. You can use the prompts by clicking a button in the chat panel. The buttons are displayed when you start a new conversation with {% data variables.copilot.copilot_chat_short %}. The selection of prompts varies depending on the currently displayed page on {% data variables.product.prodname_dotcom_the_website %}.

1. Open the repository you want to explore on {% data variables.product.prodname_dotcom_the_website %}.
1. Click the **Code** tab to display the main page of the repository.
1. {% data reusables.copilot.assistive-mode-instructions %}
1. Click the **Tell me about this repository** button in the chat panel.

   ![Screenshot of the chat panel with the 'Tell me about this repository' button highlighted.](/assets/images/help/copilot/tell-me-about-repo.png)

   > [!TIP]
   > If this button is not displayed, make sure you are on the main page of the repository and click the plus sign ({% octicon "plus" aria-hidden="true" aria-label="plus" %}) at the top right of the {% data variables.product.prodname_copilot_short %} panel to start a new conversation.

   A predefined prompt is submitted to {% data variables.product.prodname_copilot_short %} and the response is displayed in the chat panel.

1. Optionally, after reading the response, click the plus sign ({% octicon "plus" aria-hidden="true" aria-label="plus" %}) at the top right of the {% data variables.product.prodname_copilot_short %} panel to start a new conversation, then click **How to get started with this repository**.

## Example prompts

The following prompts are examples of the kind of questions you can ask {% data variables.product.prodname_copilot_short %} to help you find out about a codebase.

### General questions

<!-- Blank lines left between list items to space out the output slightly. -->

* `Based on the code in this repository, give me an overview of the architecture of the codebase. Provide evidence.`

* `Which languages are used in this repo? Show the percentages for each language.`

* `What are the core algorithms implemented in this repo?`

* `What design patterns are used in this repository? Give a brief explanation of each pattern that you find, and an example of code from this repository that uses the pattern, with a link to the file.`

### Specific questions

Whether these questions are useful will depend on the codebase you're exploring.

* `How do I build this project?`

* `Where is authentication handled in this codebase?`

* `Analyze the code in this repository and tell me about the entry points for this application.`

* `Describe the data flow in this application.`

* `Analyze the code in this repository and tell me what application-level security mechanisms are employed. Provide references.`

## Understanding the files in a directory

Use {% data variables.product.prodname_copilot_short %} to help you understand the purpose of the files in a directory, or individual files.

To find out about the files in a directory:

1. Navigate to the directory on {% data variables.product.prodname_dotcom_the_website %}.
1. {% data reusables.copilot.assistive-mode-instructions %}
1. Ask {% data variables.product.prodname_copilot_short %}: `Explain the files in this directory`.

To find out about a specific file:

1. Open the file on {% data variables.product.prodname_dotcom_the_website %}.
1. {% data reusables.copilot.assistive-mode-instructions %}
1. For a small file, ask {% data variables.product.prodname_copilot_short %}: `Explain this file`.
1. For a large file, ask: `Explain what this file does. Start with an overview of the purpose of the file. Then, in appropriately headed sections, go through each part of the file and explain what it does in detail.`

## Understanding specific lines of code

Use {% data variables.product.prodname_copilot_short %} to help you understand specific lines of code in a file.

To find out about a specific line of code:

1. On {% data variables.product.github %}, navigate to a repository and open a file.
1. Select the lines by clicking the line number for the first line you want to select, holding down <kbd>Shift</kbd> and clicking the line number for the last line you want to select.
1. To ask your own question about the selected lines, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to the right of your selection.
  This displays the {% data variables.copilot.copilot_chat %} panel with the selected lines indicated as the context of your question.
1. To ask a predefined question, click the downward-pointing button beside the {% data variables.product.prodname_copilot_short %} icon, then choose one of the options.

    ![Screenshot of the {% data variables.product.prodname_copilot_short %} buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the {% data variables.product.prodname_copilot_short %} icon, type a question in the prompt box at the bottom of the chat panel and press <kbd>Enter</kbd>.

## Understanding a specific file or symbol

Use {% data variables.product.prodname_copilot_short %} to help you understand the purpose of a specific file or symbol in the codebase. A symbol is a named entity in the code, such as a function, class, or variable.

1. Navigate to a repository on {% data variables.product.github %}.
{% data reusables.copilot.open-chat-panel %}
1. In the prompt box, click **{% octicon "paperclip" aria-label="Add attachments" %} Attach**, then click **Files, folders, and symbols**.
1. Search for and select one or more files, folders, or symbols.
1. In the prompt box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   > [!TIP]
   >
   > {% data reusables.copilot.semantic-index-info %}

## Finding out about commits

One good way to familiarize yourself with a project is to look at the recent work that's been happening. You can do this by browsing the recent commits.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. Click a commit message to display a diff view for that commit.
1. In the {% data variables.copilot.copilot_chat_short %} panel, enter: `What does this commit do?`.
1. If necessary, you can follow up by entering: `Explain in more detail`.

## Using the Insights tab

In addition to using {% data variables.product.prodname_copilot_short %} to help you become familiar with a project, you can also use the **Insights** tab on {% data variables.product.prodname_dotcom_the_website %}. This gives you a high-level overview of the repository.

For more information, see [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-pulse-to-view-a-summary-of-repository-activity) and [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors).

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github)
