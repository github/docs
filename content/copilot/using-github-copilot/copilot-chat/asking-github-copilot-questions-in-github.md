---
title: Asking GitHub Copilot questions in GitHub
shortTitle: Chat in GitHub
intro: 'You can use {% data variables.product.prodname_copilot_chat_dotcom %} to answer general questions about software development, or specific questions about the issues or code in a repository.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-github
---

## Overview

{% data variables.product.prodname_copilot_chat_dotcom %} is a chat interface that lets you ask and receive answers to coding-related questions on the {% data variables.product.github %} website.

{% data variables.product.prodname_copilot_chat_short %} can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/about-github-copilot-chat-in-githubcom).

On {% data variables.product.github %}, you can use {% data variables.product.prodname_copilot_chat_short %} to ask different questions in different contexts. For example, you can ask about a specific repository, a specific issue, or a specific pull request. You can also ask general questions about software development, or about a specific programming language.

### Limitations

The quality of the results from {% data variables.product.prodname_copilot_chat_short %} may, in some situations, be degraded if very large files, or a large number of files, are used as a context for a question.

### Viewing generated files within {% data variables.product.prodname_copilot_chat_short %}

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

When you ask a question, {% data variables.product.prodname_copilot_short %} may generate one or more files as part of its response. In the {% data variables.product.prodname_copilot_chat_short %} panel, the files are displayed inline, within the chat response. In immersive view (that is, at [https://github.com/copilot](https://github.com/copilot)), the generated files are displayed in a side panel. You can view the files in the panel, or download them to your computer.

For example, asking `Generate a simple calculator using HTML, CSS, and JavaScript` may generate multiple files, such as `index.html`, `styles.css`, and `script.js`.

## Powered by skills

When using the GPT-4o and {% data variables.copilot.copilot_claude_sonnet %} models, {% data variables.product.prodname_copilot_short %} has access to a collection of skills to fetch data from {% data variables.product.github %}, which are dynamically selected based on the question you ask. You can tell which skill {% data variables.product.prodname_copilot_short %} used by clicking {% octicon "chevron-down" aria-label="the down arrow" %} to expand the status information in the chat window.

![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel with the status information expanded and the skill that was used highlighted with an orange outline.](/assets/images/help/copilot/chat-show-skill.png)

You can explicitly ask {% data variables.product.prodname_copilot_chat_dotcom %} to use a particular skill - for example, `Use the Bing skill to find the latest GPT4 model from OpenAI`.

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `What skills are available?`

## Customizing {% data variables.product.prodname_copilot_chat_short %} responses

{% data variables.product.prodname_copilot %} can provide chat responses that are tailored to the way your team works, the tools you use, the specifics of your project, or your personal preferences, if you provide it with enough context to do so. Instead of repeating instructions in each prompt, you can create and save instructions for {% data variables.product.prodname_copilot_chat_short %} to customize what responses you receive.

There are two types of custom instructions you can add for {% data variables.product.prodname_copilot_chat_short %}:
* Repository instructions: You can create a custom instructions file for a repository, so that all prompts asked in the context of the repository automatically include the instructions you've defined
* Personal instructions: You can add personal instructions so that all the chat responses you, as a user, receive are tailored to your preferences

For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot) and [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot).

## AI models for {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Submitting a question to {% data variables.product.prodname_copilot_chat_short %}

You can open {% data variables.product.prodname_copilot_chat_short %} from any page on {% data variables.product.github %}. Certain questions may require you to be in a specific context, such as a repository, issue, or pull request. The following procedure describes how to ask a general software related question, and demonstrates the core functionality of {% data variables.product.prodname_copilot_chat_short %} on {% data variables.product.github %}. For more information on other scenarios, see [Asking {% data variables.product.prodname_copilot_chat_short %} questions in different contexts](/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-in-different-contexts).

Depending on the question you ask, and your enterprise and organization settings, {% data variables.product.prodname_copilot_short %} may respond using information based on the results of a Bing search. By using Bing search, {% data variables.product.prodname_copilot_short %} can answer a broad range of tech-related questions with up-to-date details based on information currently available on the internet. For information on how to enable or disable Bing search integration, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-web-search-for-github-copilot-chat) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

1. At the top right of any page on {% data variables.product.github %}, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %} beside the **{% octicon "copilot" aria-hidden="true" %}** icon and click **Immersive** in the dropdown menu.

   ![Screenshot of the 'Immersive' button, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-immersive-button.png)

1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   Some examples of general questions you could ask are:

   * `What are the advantages of the Go programming language?`
   * `What is Agile software development?`
   * `What is the most popular JavaScript framework?`
   * `Give me some examples of regular expressions.`
   * `Write a bash script to output today's date.`

{% data reusables.copilot.stop-response-generation %}
1. If {% data variables.product.prodname_copilot_short %} uses a Bing search to answer your question, "Using web search results for 'SEARCH QUERY'" is displayed above the response. Click this to see the search results that {% data variables.product.prodname_copilot_short %} used to answer your question.
1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.

   You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help {% data variables.product.prodname_copilot_short %} provide more relevant answers to your follow-up questions. For more information, see [Prompting {% data variables.product.prodname_copilot_chat %} to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) on the {% data variables.product.prodname_dotcom %} Blog.

1. To start a new conversation, click {% data reusables.copilot.pencil-paper-icon %} at the top left of the page.
1. To see a list of your previous conversations, click {% octicon "sidebar-collapse" aria-label="Open sidebar" %} at the top left of the page.

### Using subthreads in a conversation

> [!NOTE]
> Subthreading in {% data variables.product.prodname_copilot_chat_short %} is currently in {% data variables.release-phases.public_preview %} and is subject to change.

Subthreads are branches of a conversation that are created from a point in a conversation where you asked a question. Subthreads offer more control and flexibility for exploring aspects of a topic, or new topics, all within the same thread.

You can create and navigate through subthreads in {% data variables.product.prodname_copilot_chat_short %}'s immersive view. In the {% data variables.product.prodname_copilot_chat_short %} panel, if you open a conversation that contains subthreads, only the most recently edited subthread is displayed.

You can create a subthread in immersive mode by either editing or retrying any of your questions in the conversation.

To edit a question:

1. Hover over the question you want to edit.
1. Click the {% octicon "pencil" aria-label="Edit message" %} button that's displayed.

   ![Screenshot of the 'Edit message' button, highlighted with a dark orange outline.](/assets/images/help/copilot/subthread-edit-button.png)

1. Edit the question, then click **Send**.

> [!NOTE]
> You can only edit the text of a question. You can't edit any attachments.

To retry a question:

1. Hover over the response to a question you want to retry. Resubmitting a question to {% data variables.product.prodname_copilot_short %} may generate a different response.
1. Click the {% octicon "sync" aria-label="Retry" %} button.

   ![Screenshot of the 'Retry' button, highlighted with a dark orange outline.](/assets/images/help/copilot/subthread-retry-button.png)

The response to your edited or retried question is displayed in a new subthread.

To navigate between subthreads:

* If you have retried a question, a retry counter is displayed under the response, alongside the retry button.

  ![Screenshot of the retry counter, highlighted with a dark orange outline.](/assets/images/help/copilot/subthread-retry-counter.png)

  Click {% octicon "chevron-left" aria-label="Previous response" %} or {% octicon "chevron-right" aria-label="Next response" %} to navigate to the previous or next subthread.

* If you have edited a question, an edit counter is added below the question.

  ![Screenshot of the edit counter, highlighted with a dark orange outline.](/assets/images/help/copilot/subthread-edit-counter.png)

  Hover over the counter to display the edit and navigation buttons, then click {% octicon "chevron-left" aria-label="Previous response" %} or {% octicon "chevron-right" aria-label="Next response" %} to navigate to the previous or next subthread.

## Asking {% data variables.product.prodname_copilot_chat_short %} questions in different contexts

You can ask {% data variables.product.prodname_copilot_chat_short %} different types of questions depending on where you are on {% data variables.product.github %}. For example, to ask a question about a specific repository, you must be in the context of that repository. The following sections describe how to access the different contexts.

   For examples of the types of questions you can ask in different contexts, see [AUTOTITLE](/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat?tool=webui).

## Asking {% data variables.product.prodname_copilot_chat_short %} questions in a repository

To ask a question about a specific repository, you must be viewing the repository on {% data variables.product.github %}.

1. Navigate to a repository on {% data variables.product.github %}.
{% data reusables.copilot.open-chat-panel %}
1. The heading at the top of the panel should read "Chatting about" followed by the name of the current repository.

   If the wrong repository name is displayed, because you were previously chatting about another repository, click All repositories then choose the repository you want to chat about.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. At the bottom of the panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   > [!NOTE]
   >
   > {% data variables.product.prodname_copilot_short %}'s ability to answer natural language questions in a repository context is improved when the repository has been indexed for semantic code search. The indexing status of the repository is displayed when you start a conversation that has a repository context. For more information, see [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat).

## Asking {% data variables.product.prodname_copilot_chat_short %} questions about a specific file or symbol

You can ask {% data variables.product.prodname_copilot_short %} about a specific file, folder, or symbol within a repository.

> [!NOTE] A "symbol" is a named entity in code. This could be a variable, function, class, module, or any other identifier that's part of a codebase.

{% data reusables.copilot.open-chat-panel %}
1. To select a repository for context, click {% octicon "paperclip" aria-label="Add attachments" %} at the bottom of the chat panel, then select "Repositories".

   ![Screenshot of the "Attach files or symbols" button, highlighted with a dark orange outline.](/assets/images/help/copilot/chat-paperclip-icon.png)

1. Once the repository has been attached, click {% octicon "paperclip" aria-label="Add attachments" %} again, then select "Files, folders, and symbols".

1. Search for and select one or more files, folders, or symbols.

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   > [!TIP]
   >
   > {% data reusables.copilot.semantic-index-info %}

{% ifversion ghec %}

## Asking {% data variables.product.prodname_copilot_chat_short %} questions about a knowledge base

Organization owners (with a {% data variables.product.prodname_copilot_enterprise_short %} subscription) can create knowledge bases, grouping together Markdown documentation across one or more repositories. You can use a knowledge base to ask questions with that context in mind.

When you enter a query, {% data variables.product.prodname_copilot_short %} searches for relevant documentation snippets, synthesizes a summary of the relevant snippets to answer your question, and provides links to the source documentation for additional context.

{% data reusables.copilot.open-chat-panel %}
1. If the "Ask {% data variables.product.prodname_copilot_short %}" page is not displayed in the panel, click **All repositories**.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. Start a conversation with {% data variables.product.prodname_copilot_short %} by either selecting a repository or clicking **General purpose chat**.
1. Click the "Attach knowledge" button (a book icon) at the bottom of the chat panel, to view a list of the knowledge bases that you have access to.

   ![Screenshot of the "Attach knowledge" icon, highlighted with a dark orange outline.](/assets/images/help/copilot/chat-book-icon.png)

1. Click the knowledge base that you want to use as context.

   For example, you could choose a knowledge base containing your organization's internal developer documentation.

   You can search for a knowledge base if you don't see one you want to use.

   ![Screenshot showing the "Attach knowledge" popover with a list of knowledge bases.](/assets/images/help/copilot/attach-knowledge-popover.png)

1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

1. The response will typically contain numbered references to files that {% data variables.product.prodname_copilot_short %} uses to generate the answer, from the knowledge base you selected. To list the sources that were used, click **NUMBER references**.

   ![Screenshot showing an expanded list of source references.](/assets/images/help/copilot/chat-sources-list.png)

1. To display information about a source reference, click its entry in the list.

   Alternatively, to open the complete file, click the ellipsis (**...**), then select **Open**.

1. Within a conversation thread, you can ask follow-up questions. Follow-up questions will continue to use the selected knowledge base as context until you explicitly detach the knowledge base or select a different one.

{% endif %}

## Asking {% data variables.product.prodname_copilot_chat_short %} questions about specific pieces of code

You can chat with {% data variables.product.prodname_copilot_short %} about a file in your repository, or about specific lines of code within a file.

1. On {% data variables.product.github %}, navigate to a repository and open a file.
1. Do one of the following:
   * To ask a question about the entire file, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" %}) at the top right of the file view.

     ![Screenshot of the {% data variables.product.prodname_copilot_short %} button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

   * To ask a question about specific lines within the file:

     1. Select the lines by clicking the line number for the first line you want to select, holding down <kbd>Shift</kbd> and clicking the line number for the last line you want to select.
     1. To ask your own question about the selected lines, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" %}) to the right of your selection.
        This displays the {% data variables.product.prodname_copilot_chat %} panel with the selected lines indicated as the context of your question.
     1. To ask a predefined question, click the downward-pointing button beside the {% data variables.product.prodname_copilot_short %} icon, then choose one of the options.

     ![Screenshot of the {% data variables.product.prodname_copilot_short %} buttons, highlighted with a dark orange outline, to the right of some selected code.](/assets/images/help/copilot/copilot-buttons-inline-code.png)

1. If you clicked the {% data variables.product.prodname_copilot_short %} icon, type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

   ![Screenshot of a response to the question "What does the function at the selected lines do?"](/assets/images/help/copilot/copilot-sample-chat-response.png)

## Asking questions about {% data variables.product.prodname_GH_advanced_security %} alerts

{% data variables.product.prodname_copilot_short %} allows you to use natural language questions to ask about security alerts in repositories in your organization when these alerts are generated by {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}).

{% data reusables.copilot.open-chat-panel %}
1. If the "Ask {% data variables.product.prodname_copilot_short %}" page is not displayed in the panel, click **All repositories**.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. On the "Ask {% data variables.product.prodname_copilot_short %}" page, select a repository to provide a context for your question.

   For example, you could choose a repository with security alerts you want to understand better.

   You can search for a repository if you don't see one you want to use.

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   <a id="repo-indexing-note"></a>

   > [!TIP]
   >
   > {% data reusables.copilot.semantic-index-info %}

## Asking questions about a specific pull request

You can ask {% data variables.product.prodname_copilot_short %} different questions about a pull request, from different views within the pull request. For example, you can ask {% data variables.product.prodname_copilot_short %} to summarize a pull request, or explain what has changed within specific files or lines of code in a pull request.

### Get a summary of a pull request

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
{% data reusables.copilot.open-chat-panel %}
{% data reusables.copilot.chat-previous-conversation %}
1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

### Ask about changes to a specific file in a pull request

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click {% octicon "kebab-horizontal" aria-label="Show options" %} at the top right of the file, then click **Ask {% data variables.product.prodname_copilot_short %} about this diff**.
1. Type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

### Ask about specific lines within a file in a pull request

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click the line number for the first line you want to select, then hold down <kbd>Shift</kbd> and click the line number for the last line you want to select.
1. Ask {% data variables.product.prodname_copilot_short %} a question, or choose from a list of predefined questions.
   * _To ask your own question about the selected lines_, to the right of your selection, click the {% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %} icon.
   This displays the {% data variables.product.prodname_copilot_chat %} panel with the selected lines indicated as the context of your question.

### Ask why a workflow has failed

1. On {% data variables.product.github %}, navigate to a pull request in a repository.
1. Scroll to the bottom of the page, then, next to one of the failing checks, click **Details**.
{% data reusables.copilot.open-chat-panel %}
{% data reusables.copilot.chat-previous-conversation %}
1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, ask {% data variables.product.prodname_copilot_short %} why the pull request has failed and press <kbd>Enter</kbd>.

{% data variables.product.prodname_copilot_short %} will respond with information about why the pull request failed. {% data variables.product.prodname_copilot_short %} may also provide suggestions for how to fix the issue.

1. If {% data variables.product.prodname_copilot_short %} has provided steps to fix the issue, you can follow the steps to resolve the problem.

## Asking a question about a specific issue or discussion

You can ask {% data variables.product.prodname_copilot_short %} to summarize or answer questions about a specific issue or discussion.

> [!NOTE] The quality of {% data variables.product.prodname_copilot_chat_short %}'s responses may be degraded when working with issues or discussions that have very long bodies or a large number of comments. For example, this may occur if you ask {% data variables.product.prodname_copilot_short %} to summarize a long-running discussion. Where this happens, {% data variables.product.prodname_copilot_short %} will warn you so you can double check its output.

1. Navigate to an issue or discussion on {% data variables.product.github %}.
{% data reusables.copilot.open-chat-panel %}
{% data reusables.copilot.chat-previous-conversation %}
1. At the bottom of the {% data variables.product.prodname_copilot_short %} chat panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

   > [!TIP] Instead of navigating to an issue or discussion in your browser to ask a question, you can include the relevant URL in your message. For example, `Summarize https://github.com/monalisa/octokit/issues/1`.

## Asking a question about a specific commit

You can ask {% data variables.product.prodname_copilot_short %} to explain the changes in a commit.

1. Navigate to a commit on {% data variables.product.github %}.
{% data reusables.copilot.open-chat-panel %}
{% data reusables.copilot.chat-previous-conversation %}
1. At the bottom of the {% data variables.product.prodname_copilot_short %} chat panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   > [!TIP]
   > If you know the SHA for a commit, instead of navigating to the commit, you can ask {% data variables.product.prodname_copilot_short %} about the commit from any page in the repository on {% data variables.product.github %} by including the SHA in your message. For example, `What changed in commit a778e0eab?`

{% data reusables.copilot.stop-response-generation %}

## Accessing {% data variables.product.prodname_copilot_chat_short %} from the search bar

You can ask {% data variables.product.prodname_copilot_short %} a question about an entire repository by typing your question in the main search box of the repository.

1. Navigate to a repository on {% data variables.product.github %}.
1. Press <kbd>/</kbd>, or click in the main search box at the top of the page.
1. In the search box, after `repo:OWNER/REPO`, type the question you want to ask {% data variables.product.prodname_copilot_short %}.

   For example, you could enter:

   * What does this repo do?
   * Where is authentication implemented in this codebase?
   * How does license file detection work in this repo?

1. Click **Ask {% data variables.product.prodname_copilot_short %}**.

   ![Screenshot of the main search box on {% data variables.product.prodname_dotcom %}. The drop-down option "Ask {% data variables.product.prodname_copilot_short %}" is highlighted with an orange outline.](/assets/images/help/copilot/ask-copilot-from-search-bar.png)

   The {% data variables.product.prodname_copilot_chat %} panel is displayed and {% data variables.product.prodname_copilot_short %} responds to your request.

{% data reusables.copilot.stop-response-generation %}

## Extending {% data variables.product.prodname_copilot_chat_dotcom_short %}

{% data reusables.copilot.copilot-extensions.extending-copilot-chat %}

## Sharing {% data variables.product.prodname_copilot_chat_short %} conversations

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and subject to change. During the {% data variables.release-phases.public_preview %}, this feature is only available to users without enterprise or team memberships.

You can share {% data variables.product.prodname_copilot_chat_short %} conversations from the immersive view ([https://github.com/copilot](https://github.com/copilot)). Shared conversations are public or private (i.e. permission-based), for example, a conversation about a private repository. If you share a private conversation, the recipient must have the necessary permissions to view the content. Shared conversations are read-only—the recipient can view the conversation but cannot interact.

1. In the top right of any page on {% data variables.product.github %}, click the **{% octicon "copilot" aria-hidden="true" %}** {% data variables.product.prodname_copilot %} icon next to the search bar.
1. To view a conversation in immersive mode, click **{% octicon "screen-full" aria-hidden="true" %} Immersive**.
1. Once you submit your first prompt, a share button will appear in the upper right corner. Click {% octicon "share" aria-label="Share" %} to open the share dialog.

   ![Screenshot of the main search box on {% data variables.product.prodname_dotcom %}. The share button is highlighted with an orange outline.](/assets/images/help/copilot/chat-share-button.png)

1. To copy the conversation link, click **{% octicon "link" aria-label="Copy conversation link" %} Create link**. The link is copied to your clipboard.

## Sharing feedback about {% data variables.product.prodname_copilot_chat_dotcom %}

{% data reusables.rai.copilot-dotcom-feedback-collection %}

To give feedback about a particular {% data variables.product.prodname_copilot_chat_short %} response, click either the thumbs up or thumbs down icon at the bottom of each chat response.

To give feedback about {% data variables.product.prodname_copilot_chat_short %} in general, click the ellipsis (**...**) at the top right of the chat panel, then click **{% octicon "comment-discussion" aria-hidden="true" %} Give feedback**.

## Further reading

* [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide).
* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile).
