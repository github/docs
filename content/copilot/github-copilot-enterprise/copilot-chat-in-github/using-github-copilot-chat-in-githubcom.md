---
title: Using GitHub Copilot Chat in GitHub.com
shortTitle: Using Chat in GitHub.com
intro: 'You can use {% data variables.product.prodname_copilot_chat_short %} to answer general questions about software development, or specific questions about the code in a repository.'
product: '{% data reusables.gated-features.copilot-chat-in-github %}'
versions:
  feature: 'copilot-on-dotcom'
topics:
  - Copilot
---

## Overview

{% data variables.product.prodname_copilot_chat %} is a chat interface that lets you ask and receive answers to coding-related questions either on {% data variables.product.prodname_dotcom_the_website %} or within a supported IDE. For information on using {% data variables.product.prodname_copilot_chat %} in an IDE, see "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide)."

{% data variables.product.prodname_copilot_chat_short %} can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

On {% data variables.product.prodname_dotcom_the_website %}, you can use {% data variables.product.prodname_copilot_chat_short %} to ask:

- General software-related questions, without a particular context. For more information, see "[Asking a general question about software development](#asking-a-general-question-about-software-development)."
- Questions asked in the context of your project, or a documentation set. For more information, see "[Asking a question with a specific context](#asking-a-question-with-a-specific-context)."
- Questions about a specific file or specified lines of code within a file. For more information, see "[Asking questions about specific pieces of code](#asking-questions-about-specific-pieces-of-code)."

### Limitations

The following limitations apply to this beta release of {% data variables.product.prodname_copilot_chat_dotcom %}:

- {% data reusables.copilot.chat-limited-docset-availability %}
- Chat responses may be suboptimal if you ask questions about a specific repository that you've selected as a context, and the repository has not been indexed for semantic code search. Anyone who gets access to {% data variables.product.prodname_copilot_short %} from the organization that owns a repository can index that repository. Up to {% data variables.copilot.max-chat-indexed-repos %} repositories can be indexed for each organization.
- The quality of the results from {% data variables.product.prodname_copilot_chat_short %} may, in some situations, be degraded if very large files, or a large number of files, are used as a context for a question.

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}
- To use {% data variables.product.prodname_copilot_chat_dotcom %}, you must have been granted access to {% data variables.product.prodname_copilot_chat %} as part of {% data variables.product.prodname_copilot_enterprise %}. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise)."

## Asking a general question about software development

You can ask a general question about software development that is not focused on a particular context, such as a repository or a documentation set.

{% data reusables.copilot.go-to-copilot-page %}

1. On the "Chat with {% data variables.product.prodname_copilot_short %}" page, click **General coding chat**.

   ![Screenshot of the main {% data variables.product.prodname_copilot_short %} page with 'General coding chat' highlighted.](/assets/images/help/copilot/general-coding-chat.png)

1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   Some examples of general questions you could ask are:
   - What are the advantages of the Go programming language?
   - What is Agile software development?
   - What is the most popular JavaScript framework?
   - Give me some examples of regular expressions.
   - Write a bash script to output today's date.

1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.

   You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help {% data variables.product.prodname_copilot_short %} provide more relevant answers to your follow-up questions. For more information, see "[Prompting {% data variables.product.prodname_copilot_chat %} to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/)" on the {% data variables.product.prodname_dotcom %} Blog.

{% data reusables.copilot.chat-conversation-buttons %}

## Asking a question with a specific context

You can choose a specific context, such as a particular repository or a documentation set (docset), and then ask a question with that context in mind. Organization owners can create organization-visible docsets from repositories within their organization. Organization members can then set those docsets as the context for {% data variables.product.prodname_copilot_chat_dotcom %}. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-docset-management/creating-private-docsets)."

{% data reusables.copilot.go-to-copilot-page %}
1. Click a docset or a repository to provide a context for your question.

   For example, you could choose a repository whose code you want to understand better, or the documentation for a technology you want to learn more about.

   You can search for a docset or repository, if you don't see one you want to use.

1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   For example, if you chose the repository you are working in as the context, you could ask:

   - What is the main purpose of this repo? What problem does it solve or what functionality does it provide?
   - What web frameworks are used in this project?
   - Where is rate limiting implemented in our API?
   - How is the code organized? Explain the project architecture.
   - Are there any specific environment requirements for working on this project?

   {% note %}

   **Note**:

   {% data variables.product.prodname_copilot_short %}'s ability to answer natural language questions like these in a repository context is improved when the repository has been indexed for semantic code search. The indexing status of the repository is displayed when you start a conversation that has a repository context.

   If you get access to {% data variables.product.prodname_copilot_short %} from the organization that owns the repository, and the repository has not been indexed, an **Index this repository** button is displayed. Click this button to start the indexing process. Up to {% data variables.copilot.max-chat-indexed-repos %} repositories can be indexed for each organization.

   ![Screenshot showing the 'Index this repository' button highlighted with a dark orange outline.](/assets/images/help/copilot/index-this-repo.png)

   {% endnote %}

   If you chose a documentation set as the context - for example, the Azure documentation - you could ask:

   - What advantages does Azure have over other types of cloud storage?
   - How do I block Azure from accessing locations on my network?
   - How can I reduce the cost of a hosted website?
   - How do I enable MFA?

1. The response typically contains numbered references to files that {% data variables.product.prodname_copilot_short %} used to generate the answer, from the repository or docset you selected. To list the sources that were used, click **Search results from DOCSET**.

   ![Screenshot showing an expanded list of source references.](/assets/images/help/copilot/chat-sources-list.png)

1. To display information about a source reference, click its entry in the list.

   Alternatively, to open the complete file, click the ellipsis (**...**), then select **Open**.

1. To display the complete list of references, click the "Reference list" icon at the top right of the page.

   ![Screenshot of the "Reference list" icon, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-references-button.png)

{% data reusables.copilot.chat-conversation-buttons %}

## Asking questions about specific pieces of code

You can chat with {% data variables.product.prodname_copilot_short %} about a file in your repository, or about specific lines of code within a file.

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a repository and open a file.
1. Do one of the following:
   - To ask a question about the entire file, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" %}) at the top right of the file view.

     ![Screenshot of the {% data variables.product.prodname_copilot_short %} button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

   - To ask a question about specific lines within the file:

     1. Select the lines by clicking the line number for the first line you want to select, holding down <kbd>Shift</kbd> and clicking the line number for the last line you want to select.
     1. To ask your own question about the selected lines, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" %}) to the right of your selection.
        This displays the {% data variables.product.prodname_copilot_chat %} panel with the selected lines indicated as the context of your question.
     1. To ask a predefined question, click the downward-pointing button beside the {% data variables.product.prodname_copilot_short %} icon, then choose one of the options.

     ![Screenshot of the {% data variables.product.prodname_copilot_short %} buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the {% data variables.product.prodname_copilot_short %} icon, type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, if you are asking about the entire file, you could enter:

   - Explain this file.
   - How could I improve this code?
   - How can I test this script?

   If you are asking about specific lines, you could enter:
   - Explain the function at the selected lines.
   - How could I improve this class?
   - Add error handling to this code.
   - Write a unit test for this method.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

   ![Screenshot of a response to the question "What does the function at the selected lines do?"](/assets/images/help/copilot/copilot-sample-chat-response.png)

1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.
1. To clear, delete, or rename the current conversation thread, or to start a new thread, type `/` in the "Ask {% data variables.product.prodname_copilot_short %}" box, select from the options that are displayed, then press <kbd>Enter</kbd>.

1. To view a conversation in immersive mode, displaying just the conversation thread, click the dashed box icon at the top right of the conversation thread.

   ![Screenshot of the immersive mode button at the top right of the {% data variables.product.prodname_copilot_short %} panel. The button is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-immersive-view-button.png)

## Sharing feedback about {% data variables.product.prodname_copilot_chat_dotcom %}

To give feedback about a particular {% data variables.product.prodname_copilot_chat_short %} response:

1. Click either the thumbs up or thumbs down icon at the bottom of each chat response.
1. Optionally, provide information about why you liked or disliked the response.

   ![Screenshot of the feedback form for {% data variables.product.prodname_copilot_chat_short %}.](/assets/images/help/copilot/feedback-form.png)

1. Click **Submit feedback**.

To give feedback about {% data variables.product.prodname_copilot_chat_short %} in general, click the "Give feedback" link at the top right of any {% data variables.product.prodname_copilot_short %} page on {% data variables.product.prodname_dotcom_the_website %}.
