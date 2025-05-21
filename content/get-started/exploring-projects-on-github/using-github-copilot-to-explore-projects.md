---
title: Using GitHub Copilot to explore projects
intro: 'This guide will help you use {% data variables.product.prodname_copilot_short %} to explore projects on {% data variables.product.prodname_dotcom %}.'
versions:
  feature: copilot
topics:
  - Copilot
  - Repositories
shortTitle: Use Copilot to explore projects
---

In this guide, you’ll learn how to use {% data variables.product.prodname_copilot_chat_dotcom_short %} to understand a repository’s purpose, examine files, and dive into specific lines of code. By following these steps, you’ll gain insights into any project faster—making onboarding, code review, and project exploration easier and more efficient.

## Prerequisites

{% data reusables.copilot.copilot-requires-subscription %}

## Understanding a repository

When you’re new to a project, it can be challenging to understand the purpose of a repository and its files. {% data variables.product.prodname_copilot_short %} can help you quickly understand the purpose of a repository, for example, by providing a summary of the repository’s README file.

1. On the {% data variables.product.prodname_dotcom %} website, go to the repository you want to chat about.

1. Click the **{% octicon "copilot" aria-hidden="true" %}** {% data variables.product.prodname_copilot %} icon at the top right of the page.
1. The heading at the top of the chat panel should read "Chatting about" followed by the name of the current repository.

   If the wrong repository name is displayed, because you were previously chatting about another repository, click **All repositories** then choose the repository you want to chat about.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, at the bottom of the chat panel, type "Summarize the purpose of this repository based on the README" and press <kbd>Enter</kbd>.  {% data variables.product.prodname_copilot_short %} replies in the chat panel.

You can also use {% data variables.product.prodname_copilot_short %} to understand the roles of different folders and files within the repository. For example, you can ask {% data variables.product.prodname_copilot_short %} to summarize the contents of a specific file, or to explain the purpose of a specific folder.

## Exploring files and code

When you’re exploring a project, you might want to understand the contents of a specific file. {% data variables.product.prodname_copilot_short %} can help you quickly understand the purpose of a file, for example, by providing a summary of the file’s contents. You can also ask {% data variables.product.prodname_copilot_short %} to explain specific lines of code within a file.

{% data reusables.copilot.chat-about-specific-lines %}

## Next steps

Now that you know how to use {% data variables.product.prodname_copilot_short %} to explore projects, you can use it to help you understand any repository, file, or line of code on {% data variables.product.prodname_dotcom %}.
