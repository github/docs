---
title: Using knowledge bases
shortTitle: Use knowledge bases
intro: 'Learn how to provide predefined context for {% data variables.copilot.copilot_chat %} with knowledge bases.'
topics:
  - Copilot
versions:
  feature: copilot-enterprise
redirect_from:
  - /copilot/how-tos/context/using-knowledge-bases
  - /copilot/how-tos/context/use-knowledge-bases
contentType: how-tos
---

## Introduction

Knowledge bases are collections of documentation that you can use to provide context for your questions in {% data variables.copilot.copilot_chat %}. Knowledge bases are useful when you want to ask questions about a specific topic or set of topics, and you want the answers to be informed by the relevant documentation.

Organization owners (with a {% data variables.copilot.copilot_enterprise_short %} subscription) can create knowledge bases, grouping together Markdown documentation across one or more repositories. You can use a knowledge base to ask questions with that context in mind.

When you enter a query, {% data variables.product.prodname_copilot_short %} searches for relevant documentation snippets, synthesizes a summary of the relevant snippets to answer your question, and provides links to the source documentation for additional context.

## Asking {% data variables.copilot.copilot_chat_short %} questions about a knowledge base

{% data reusables.copilot.immersive-mode-instructions %}
1. To select a knowledge base for context, click **{% octicon "paperclip" aria-label="Add attachments" %} Attach** at the bottom of the chat panel, then click **Knowledge bases**.
1. In the "Select knowledge bases" dialog, type the name of the knowledge base you want to use as context, select the knowledge bases you want to use, and click **Save**.
1. In the prompt box, type a question and press <kbd>Enter</kbd>.

   You can click the **_n_ references** link at the top of the response to see the sources that {% data variables.product.prodname_copilot_short %} used to answer your question.

1. Within a conversation thread, you can ask follow-up questions. Follow-up questions will continue to use the selected knowledge base as context until you explicitly detach the knowledge base or select a different one.

## Further reading

* [AUTOTITLE](//copilot/tutorials/using-copilot-to-explore-a-codebase)
