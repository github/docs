---
title: Asking GitHub Copilot questions in GitHub.com
shortTitle: Chat in GitHub.com
intro: 'You can use {% data variables.product.prodname_copilot_chat_dotcom %} to answer general questions about software development, or specific questions about the issues or code in a repository.'
versions:
  feature: copilot-on-dotcom
permissions: 'Members of an enterprise with a subscription to {% data variables.product.prodname_copilot_enterprise %}'
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github
---

## Overview

{% data variables.product.prodname_copilot_chat_dotcom %} is a chat interface that lets you ask and receive answers to coding-related questions on {% data variables.product.prodname_dotcom_the_website %}.

> [!NOTE] {% data variables.product.prodname_copilot_chat_short %} is also available in selected IDEs. For information on using {% data variables.product.prodname_copilot_chat %} in an IDE, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)."

{% data variables.product.prodname_copilot_chat_short %} can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/about-github-copilot-chat-in-githubcom)."

On {% data variables.product.prodname_dotcom_the_website %}, you can use {% data variables.product.prodname_copilot_chat_short %} to ask:

* General software-related questions, without a particular context. For more information, see "[Asking a general question about software development](#asking-a-general-question-about-software-development)."
* Exploratory questions asked in the context of a specific repository. For more information, see "[Asking exploratory questions about a repository](#asking-exploratory-questions-about-a-repository)."
* Questions asked in the context of a specific repository, file or symbol. For more information, see "[Asking a question about a specific file or symbol](#asking-a-question-about-a-specific-file-or-symbol)."
* Questions asked in the context of a knowledge base (that is, Markdown documentation across one or more repositories). For more information, see "[Asking a question about a knowledge base](#asking-a-question-about-a-knowledge-base)."
* Questions about a specific file or specified lines of code within a file. For more information, see "[Asking questions about specific pieces of code](#asking-questions-about-specific-pieces-of-code)."
* Questions about a pull request diff. For more information, see "[Finding out about the changes in a pull request](#asking-questions-about-a-specific-pull-request)."
* Questions about a specific issue. For more information, see "[Asking a question about a specific issue or discussion](#asking-a-question-about-a-specific-issue-or-discussion)."

### Limitations

* Chat responses may be suboptimal if you ask questions about a specific repository that you've selected as a context, and the repository has not been indexed for semantic code search. {% data reusables.copilot.indexing-who-can-do-this %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat)."
* The quality of the results from {% data variables.product.prodname_copilot_chat_short %} may, in some situations, be degraded if very large files, or a large number of files, are used as a context for a question.

## Prerequisites

{% data reusables.copilot.chat-dotcom-prerequisites %}

## Powered by skills

{% data variables.product.prodname_copilot_short %} is powered by a collection of skills that are dynamically selected based on the question you ask. You can tell which skill {% data variables.product.prodname_copilot_short %} used by clicking {% octicon "chevron-down" aria-label="the down arrow" %} to expand the status information in the chat window.

![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel with the status information expanded and the skill that was used highlighted with an orange outline.](/assets/images/help/copilot/chat-show-skill.png)

You can explicitly ask {% data variables.product.prodname_copilot_chat_dotcom %} to use a particular skill - for example, `Use the Bing skill to find the latest GPT4 model from OpenAI`.

### Currently available skills

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `What skills are available?`

The skills you can use in {% data variables.product.prodname_copilot_chat_dotcom_short %} include those shown in the table below.

| Skill | Description | Enabled by default? | Example question |
| ----- | ----------- | ------------------- | ---------------- |
| **Bing web search** (in beta and subject to change) | Searches the web using the Bing search engine. This skill is useful for teaching {% data variables.product.prodname_copilot_short %} about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects. | No (requires admin approval - see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)")| _What are some recent articles about SAT tokens securing against vulnerabilities in Node?_ |
| **Code search** | Natural language code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. Note: this requires indexing to be enabled for the repository (see "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat)"). | Yes | _Where is the logic that controls the user session management, and how does it work?_ |
| **Commit details** | Retrieves a list of commits, or the contents of a specific commit, to provide answers to commit-related questions. | Yes | _Explain the changes in the code of this commit_ |
| **Discussion details** | Retrieves a specific {% data variables.product.prodname_dotcom %} discussion. This is useful for quickly getting the gist of the conversation in a discussion. | Yes | _Summarize this discussion_ |
| **Issue details** | Retrieves a specific {% data variables.product.prodname_dotcom %} issue, including the issue's title, number, author, status, body, linked pull requests, comments, and timestamps. | Yes | _Summarize the conversation on this issue and suggest next steps_ |
| **File details** | Retrieves a specific file in the default branch of the Git repository, allowing you to ask questions about the file and the recent changes made to it. This skill is useful when you provide the exact path of a file in the repository. | Yes | _What logic does user_auth.js encapsulate?_ <br> <br> _What is the file history of user_auth.js?_ |
| **Pull request details** | Retrieves a specific pull request. This allows you to ask questions about the pull request, including getting a summary of the pull request, its comments, or the code it changes. | Yes | _Summarize this PR for me_ <br><br> _Summarize the changes in this PR_ |
| **{% data variables.product.prodname_GH_advanced_security %}** | Retrieves information about security alerts within your organization from {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). | Yes | _How would I fix this {% data variables.product.prodname_code_scanning %} alert?_ |
| **Release details** | Retrieves the latest, or specified, release. This allows you to find out who created a release, when it happened, and information included in the release notes. | Yes | _When was the latest release?_ |
| **Repository details** | Retrieves a specific {% data variables.product.prodname_dotcom %} repository. This is useful for finding out details such as the repository owner and the main language used. | Yes | _Tell me about this repo_ |
| **Symbol definition** | Retrieves the lines of code that define a specific code symbol (function, class, or struct) in the default branch of the Git repository. This skill is useful when you have the exact name of a symbol, and want to understand it. | Yes | _Write unit tests for the AuthUser method_ |
| **Support search** | Retrieves information from the {% data variables.contact.contact_support_portal %}. This skill is useful for asking {% data variables.product.prodname_copilot_chat_short %} about {% data variables.product.prodname_dotcom %} products and support related questions. | Yes | _Can I use {% data variables.product.prodname_copilot_short %} knowledge bases with {% data variables.product.prodname_copilot_individuals_short %}?_ |

## Asking a general question about software development

You can ask a general question about software development that is not focused on a particular context, such as a repository or a knowledge base.

Depending on the question you ask, and your enterprise and organization settings, {% data variables.product.prodname_copilot_short %} may respond using information based on the results of a Bing search. By using Bing search, {% data variables.product.prodname_copilot_short %} can answer a broad range of tech-related questions with up-to-date details based on information currently available on the internet. For information on how to enable or disable Bing search integration, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)."

> [!NOTE] Bing search integration into {% data variables.product.prodname_copilot_chat_dotcom_short %} is currently in beta and is subject to change.

{% data reusables.copilot.go-to-copilot-page %}

1. If the panel is headed "Chatting about OWNER/REPOSITORY," click **All repositories**.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. If the "Ask {% data variables.product.prodname_copilot_short %}" page is displayed in the panel, click **General purpose chat**.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel with "General purpose chat" highlighted with a dark orange outline.](/assets/images/help/copilot/chat-general-purpose-button.png)

1. At the bottom of the panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   Some examples of general questions you could ask are:
   * What are the advantages of the Go programming language?
   * What is Agile software development?
   * What is the most popular JavaScript framework?
   * Give me some examples of regular expressions.
   * Write a bash script to output today's date.

{% data reusables.copilot.stop-response-generation %}
1. If {% data variables.product.prodname_copilot_short %} uses a Bing search to answer your question, "Results from Bing" is displayed above the response. Click this to see the search results that {% data variables.product.prodname_copilot_short %} used to answer your question.
1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.

   You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help {% data variables.product.prodname_copilot_short %} provide more relevant answers to your follow-up questions. For more information, see "[Prompting {% data variables.product.prodname_copilot_chat %} to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/)" on the {% data variables.product.prodname_dotcom %} Blog.

{% data reusables.copilot.chat-conversation-buttons %}

## Asking exploratory questions about a repository

{% data variables.product.prodname_copilot_short %} allows you to use natural language questions to explore repositories on {% data variables.product.prodname_dotcom %}. This can help you get a better understanding of where specific aspects of a codebase are implemented.

1. On the {% data variables.product.prodname_dotcom %} website, go to the repository you want to chat about.

1. Click the **{% octicon "copilot" aria-hidden="true" %}** {% data variables.product.prodname_copilot %} icon at the top right of the page.

   The {% data variables.product.prodname_copilot_chat %} panel is displayed. To resize the panel, click and drag the top or left edge.

1. The heading at the top of the panel should read "Chatting about" followed by the name of the current repository.

   If the wrong repository name is displayed, because you were previously chatting about another repository, click **All repositories** then choose the repository you want to chat about.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, at the bottom of the chat panel, type a question and press <kbd>Enter</kbd>.

   For example, you could ask:

   * When was the most recent release?
   * Where is rate limiting implemented in our API?
   * How does the WidgetFactory class work?
   * Where is the code for updating a phone number?
   * Where are SAT tokens generated?
   * Show the most recently updated issues assigned to USERNAME
   * List open issues about SUBJECT
   * What was the last merged PR by USERNAME
   * What are the latest commits to the main branch by USERNAME

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   <a id="repo-indexing-note"></a>

   > [!NOTE]
   >
   > {% data variables.product.prodname_copilot_short %}'s ability to answer natural language questions like these in a repository context is improved when the repository has been indexed for semantic code search. The indexing status of the repository is displayed when you start a conversation that has a repository context. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat)."

{% data reusables.copilot.stop-response-generation %}
{% data reusables.copilot.chat-conversation-buttons %}

## Asking a question about a specific file or symbol

You can ask {% data variables.product.prodname_copilot_short %} about a specific file or symbol within a repository.

> [!NOTE] A "symbol" is a named entity in code. This could be a variable, function, class, module, or any other identifier that's part of a codebase.

{% data reusables.copilot.go-to-copilot-page %}

{% data reusables.copilot.ask-copilot-not-displayed %}

1. Click the "Attach files or symbols" button (a paperclip icon) at the bottom of the chat panel, then search for and select one or more files and symbols.

   ![Screenshot of the "Attach files or symbols" button, highlighted with a dark orange outline.](/assets/images/help/copilot/chat-paperclip-icon.png)

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   > [!NOTE]
   >
   > {% data variables.product.prodname_copilot_short %}'s ability to answer natural language questions in the context of a repository is improved when the repository has been indexed for semantic code search. The indexing status of the repository is displayed when you start a conversation that has a repository context. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat)."

{% data reusables.copilot.stop-response-generation %}
{% data reusables.copilot.chat-conversation-buttons %}

## Asking a question about a knowledge base

Organization owners can create knowledge bases, grouping together Markdown documentation across one or more repositories. You can use a knowledge base to ask questions with that context in mind.

When you enter a query, {% data variables.product.prodname_copilot_short %} searches for relevant documentation snippets, synthesizes a summary of the relevant snippets to answer your question, and provides links to the source documentation for additional context.

{% data reusables.copilot.go-to-copilot-page %}

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

   For example, if you chose a knowledge base with your organization's internal developer documentation, you could ask:

   * How do I deploy a new application?
   * What's the process for creating a new REST API?
   * What are our best practices for logging?

{% data reusables.copilot.stop-response-generation %}
1. The response will typically contain numbered references to files that {% data variables.product.prodname_copilot_short %} uses to generate the answer, from the knowledge base you selected. To list the sources that were used, click **NUMBER references**.

   ![Screenshot showing an expanded list of source references.](/assets/images/help/copilot/chat-sources-list.png)

1. To display information about a source reference, click its entry in the list.

   Alternatively, to open the complete file, click the ellipsis (**...**), then select **Open**.

1. Within a conversation thread, you can ask follow-up questions. Follow-up questions will continue to use the selected knowledge base as context until you explicitly detach the knowledge base or select a different one.

{% data reusables.copilot.chat-conversation-buttons %}

## Asking questions about specific pieces of code

You can chat with {% data variables.product.prodname_copilot_short %} about a file in your repository, or about specific lines of code within a file.

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a repository and open a file.
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

   For example, if you are asking about the entire file, you could enter:

   * Explain this file.
   * How could I improve this code?
   * How can I test this script?

   If you are asking about specific lines, you could enter:
   * Explain the function at the selected lines.
   * How could I improve this class?
   * Add error handling to this code.
   * Write a unit test for this method.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

   ![Screenshot of a response to the question "What does the function at the selected lines do?"](/assets/images/help/copilot/copilot-sample-chat-response.png)

{% data reusables.copilot.stop-response-generation %}
1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.
1. To clear, delete, or rename the current conversation thread, or to start a new thread, type `/` in the "Ask {% data variables.product.prodname_copilot_short %}" box, select from the options that are displayed, then press <kbd>Enter</kbd>.

1. To view a conversation in immersive mode, displaying just the conversation thread, click the dashed box icon at the top right of the conversation thread.

   ![Screenshot of the immersive mode button at the top right of the {% data variables.product.prodname_copilot_short %} panel. The button is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-immersive-view-button.png)

## Asking questions about {% data variables.product.prodname_GH_advanced_security %} alerts

{% data variables.product.prodname_copilot_short %} allows you to use natural language questions to ask about security alerts in repositories in your organization when these alerts are generated by {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}).

{% data reusables.copilot.go-to-copilot-page %}

1. If the "Ask {% data variables.product.prodname_copilot_short %}" page is not displayed in the panel, click **All repositories**.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} chat panel page with "All repositories" highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-chat-all-repositories.png)

1. On the "Ask {% data variables.product.prodname_copilot_short %}" page, select a repository to provide a context for your question.

   For example, you could choose a repository with security alerts you want to understand better.

   You can search for a repository if you don't see one you want to use.

1. In the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   For example, you could ask:

   * How would I fix this alert?
   * How many alerts do I have on this pull request?
   * Which line of code is this {% data variables.product.prodname_code_scanning %} alert referencing?
   * What library is affected by this {% data variables.product.prodname_dependabot %} alert?

   {% data variables.product.prodname_copilot_short %} replies in the chat panel.

   <a id="repo-indexing-note"></a>

{% data reusables.copilot.stop-response-generation %}
{% data reusables.copilot.chat-conversation-buttons %}

## Asking questions about a specific pull request

You can ask {% data variables.product.prodname_copilot_short %} to summarize a pull request, or explain what has changed within specific files or lines of code in a pull request.

### Get a summary of a pull request

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a pull request in a repository.

{% data reusables.copilot.open-copilot %}

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>.

   For example, you could ask:

   * Summarize this PR for me.
   * Summarize the comments in this PR.
   * Summarize the changes in this PR.

{% data reusables.copilot.stop-response-generation %}

### Ask about changes to a specific file in a pull request

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click {% octicon "kebab-horizontal" aria-label="Show options" %} at the top right of the file, then click **Ask {% data variables.product.prodname_copilot_short %} about this diff**.
1. Type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, you could ask:

   * What's the purpose of this file?
   * Why has this module been included?

{% data reusables.copilot.stop-response-generation %}

### Ask about specific lines within a file in a pull request

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a pull request in a repository.
1. Click the **Files changed** tab.
1. Click the line number for the first line you want to select, then hold down <kbd>Shift</kbd> and click the line number for the last line you want to select.
1. Ask {% data variables.product.prodname_copilot_short %} a question, or choose from a list of predefined questions.
   * _To ask your own question about the selected lines_, to the right of your selection, click the {% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %} icon.
   This displays the {% data variables.product.prodname_copilot_chat %} panel with the selected lines indicated as the context of your question.

      For example, you could ask:

      * What is &#96;actorData&#96; in this line?
      * Explain this &#96;do..end&#96; block.

   * _To ask a predefined question_, to the right of your selection, beside the {% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %} icon, click {% octicon "triangle-down" aria-label="Copilot menu" %}, then click **Explain**.

{% data reusables.copilot.stop-response-generation %}

### Ask why a workflow has failed

> [!NOTE]This feature is currently in beta and subject to change.

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a pull request in a repository.
1. Scroll to the bottom of the page, then, next to one of the failing checks, click **Details**.

{% data reusables.copilot.open-copilot %}

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, ask {% data variables.product.prodname_copilot_short %} why the pull request has failed and press <kbd>Enter</kbd>.

      For example, you could ask:

      * Tell me why this job failed
      * Suggest a fix for this error

{% data variables.product.prodname_copilot_short %} will respond with information about why the pull request failed. {% data variables.product.prodname_copilot_short %} may also provide suggestions for how to fix the issue.

1. If {% data variables.product.prodname_copilot_short %} has provided steps to fix the issue, you can follow the steps to resolve the problem.
{% data reusables.copilot.stop-response-generation %}

## Asking a question about a specific issue or discussion

You can ask {% data variables.product.prodname_copilot_short %} to summarize or answer questions about a specific issue or discussion.

> [!NOTE] The quality of {% data variables.product.prodname_copilot_chat_short %}'s responses may be degraded when working with issues or discussions that have very long bodies or a large number of comments. For example, this may occur if you ask {% data variables.product.prodname_copilot_short %} to summarize a long-running discussion. Where this happens, {% data variables.product.prodname_copilot_short %} will warn you so you can double check its output.

1. Navigate to an issue or discussion on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.copilot.open-copilot %}

1. At the bottom of the {% data variables.product.prodname_copilot_short %} chat panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>. For example, you could enter:

   * Explain this issue
   * Summarize this discussion
   * Recommend next steps for this issue
   * What are the acceptance criteria for this issue?
   * What are the main points made by PERSON in this discussion?

   > [!TIP] Instead of navigating to an issue or discussion in your browser to ask a question, you can include the relevant URL in your message. For example, `Summarize https://github.com/monalisa/octokit/issues/1`.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

{% data reusables.copilot.stop-response-generation %}

## Asking a question about a specific commit

You can ask {% data variables.product.prodname_copilot_short %} to explain the changes in a commit.

1. Navigate to a commit on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.copilot.open-copilot %}

1. At the bottom of the {% data variables.product.prodname_copilot_short %} chat panel, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and press <kbd>Enter</kbd>. For example, you could enter:

   * Summarize the changes in this commit
   * Who committed these changes?
   * When was this commit made?

   > [!TIP]
   > If you know the SHA for a commit, instead of navigating to the commit, you can ask {% data variables.product.prodname_copilot_short %} about the commit from any page in the repository on {% data variables.product.prodname_dotcom_the_website %} by including the SHA in your message. For example, `What changed in commit a778e0eab?`

{% data reusables.copilot.stop-response-generation %}

## Accessing {% data variables.product.prodname_copilot_chat_short %} from the search bar

You can ask {% data variables.product.prodname_copilot_short %} a question about an entire repository by typing your question in the main search box of the repository.

1. Navigate to a repository on {% data variables.product.prodname_dotcom_the_website %}.
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

## Sharing feedback about {% data variables.product.prodname_copilot_chat_dotcom %}

{% data reusables.rai.copilot-dotcom-feedback-collection %}

To give feedback about a particular {% data variables.product.prodname_copilot_chat_short %} response, click either the thumbs up or thumbs down icon at the bottom of each chat response.

To give feedback about {% data variables.product.prodname_copilot_chat_short %} in general, click the ellipsis (**...**) at the top right of the chat panel, then click **Give feedback**.
