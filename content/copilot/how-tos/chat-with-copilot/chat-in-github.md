---
title: Asking GitHub Copilot questions in GitHub
shortTitle: Chat in GitHub
intro: You can use {% data variables.copilot.copilot_chat_dotcom %} to answer general questions about software development, or specific questions about the issues or code in a repository.
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/about-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github/about-github-copilot-chat-in-githubcom
  - /copilot/github-copilot-chat/copilot-chat-in-github
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-github
  - /copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github
  - /copilot/how-tos/chat/asking-github-copilot-questions-in-github
  - /copilot/how-tos/chat/use-chat-in-github
  - /copilot/how-tos/use-chat/use-chat-in-github
  - /copilot/how-tos/chat-with-copilot/use-chat-in-github
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Introduction

This guide describes how to use {% data variables.copilot.copilot_chat_short %} to ask questions about software development in {% data variables.product.github %}. You can ask general questions about software development, or specific questions about the issues or code in a repository. For more information, see [AUTOTITLE](/copilot/concepts/about-github-copilot-chat).

## Submitting a question to {% data variables.copilot.copilot_chat_short %}

You can open {% data variables.copilot.copilot_chat_short %} from any page on {% data variables.product.github %}. Certain questions may require you to be in a specific context, such as a repository, issue, or pull request. The following procedure describes how to ask a general software related question, and demonstrates the core functionality of {% data variables.copilot.copilot_chat_short %} on {% data variables.product.github %}. For more information on other scenarios, see [Asking {% data variables.copilot.copilot_chat_short %} questions in different contexts](/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-in-different-contexts).

Depending on the question you ask, and your enterprise and organization settings, {% data variables.product.prodname_copilot_short %} may respond using information based on the results of a Bing search. By using Bing search, {% data variables.product.prodname_copilot_short %} can answer a broad range of tech-related questions with up-to-date details based on information currently available on the internet. For information on how to enable or disable Bing search integration, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-web-search-for-github-copilot-chat) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

{% data reusables.copilot.immersive-mode-instructions %}
1. In the prompt box, type a question and press <kbd>Enter</kbd>.

   Some examples of general questions you could ask are:

   * {% prompt %}What are the advantages of the Go programming language?{% endprompt %}
   * {% prompt %}What is Agile software development?{% endprompt %}
   * {% prompt %}What is the most popular JavaScript framework?{% endprompt %}
   * {% prompt %}Give me some examples of regular expressions.{% endprompt %}
   * {% prompt %}Write a bash script to output today's date.{% endprompt %}

{% data reusables.copilot.stop-response-generation %}
1. If {% data variables.product.prodname_copilot_short %} uses a Bing search to answer your question, you can click the **_n_ references** link at the top of the response to see the search results that {% data variables.product.prodname_copilot_short %} used to answer your question.
1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.

   You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help {% data variables.product.prodname_copilot_short %} provide more relevant answers to your follow-up questions. For more information, see [Prompting {% data variables.copilot.copilot_chat %} to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) on the {% data variables.product.prodname_dotcom %} Blog.

1. To start a new conversation, click {% data reusables.copilot.pencil-paper-icon %} at the top left of the page.
1. To see a list of your previous conversations, click {% octicon "sidebar-collapse" aria-label="Open sidebar" %} at the top left of the page.

{% data variables.copilot.copilot_chat_short %} retains each conversation for up to 28 days from the last activity. After 28 days, the conversation is permanently deleted. You can view up to 100 previous conversations.

### Viewing and editing generated files within {% data variables.copilot.copilot_chat_short %}

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

When you ask a question, {% data variables.product.prodname_copilot_short %} may generate one or more files as part of its response. In the {% data variables.copilot.copilot_chat_short %} panel, the files are displayed inline, within the chat response. In immersive view (that is, at [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)), the generated files are displayed in a side panel. You can view and edit the files in the panel, or download them to your computer.

For example, asking {% prompt %}Generate a simple calculator using HTML, CSS, and JavaScript{% endprompt %} may generate multiple files, such as `index.html`, `styles.css`, and `script.js`.

In immersive view, you can also preview how some file formats, such as Markdown, render by toggling to the "Preview" tab in the side panel.

### Regenerating a response with a different model

After {% data variables.product.prodname_copilot_short %} responds to your question, you can regenerate the same prompt using a different model by clicking the retry icon ({% octicon "sync" aria-label="The re-run icon" %}) below the response. The new response will use your selected model and maintain the full context of the conversation.

You can switch between responses to compare the results from different models.

For help deciding which model to use, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

### Using subthreads in a conversation

Subthreads are branches of a conversation that are created from a point in a conversation where you asked a question. Subthreads offer more control and flexibility for exploring aspects of a topic, or new topics, all within the same thread.

You can create and navigate through subthreads in {% data variables.copilot.copilot_chat_short %}'s immersive view. In the {% data variables.copilot.copilot_chat_short %} panel, if you open a conversation that contains subthreads, only the most recently edited subthread is displayed.

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

## Powered by skills

{% data variables.product.prodname_copilot_short %} has access to a collection of skills to fetch data from {% data variables.product.github %}, which are dynamically selected based on the question you ask.

You can explicitly ask {% data variables.copilot.copilot_chat_dotcom %} to use a particular skill - for example, {% prompt %}Use the Bing skill to find the latest GPT4 model from OpenAI.{% endprompt %}

Generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: {% prompt %}What skills are available?{% endprompt %}

## Asking {% data variables.copilot.copilot_chat_short %} questions in different contexts

You can ask {% data variables.copilot.copilot_chat_short %} different types of questions depending on where you are on {% data variables.product.github %}. For example, to ask a question about a specific repository, you must be in the context of that repository. The following sections describe how to access the different contexts.

   For examples of the types of questions you can ask in different contexts, see [AUTOTITLE](/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat?tool=webui).

## Using images in {% data variables.copilot.copilot_chat_short %}

> [!NOTE]
> * Attaching images to chat prompts is currently in {% data variables.release-phases.public_preview %} and is subject to change.
> * You can only attach an image in the immersive view of {% data variables.copilot.copilot_chat_short %} ([https://github.com/copilot](https://github.com/copilot)), not in the chat panel.

You can attach an image to {% data variables.product.prodname_copilot_short %} and then ask about the image. For example, you can attach:

{% data reusables.copilot.image-questions-and-file-types %}

### Attaching an image to your chat prompt

1. Go to the immersive view of {% data variables.copilot.copilot_chat_short %} ([https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. If you see the AI model picker at the top of the page, select one of the models that supports adding images to prompts:

   ![Screenshot of the model picker with the list of models expanded.](/assets/images/help/copilot/model-picker-copilot-immersive.png)

1. Do one of the following:

   * Copy an image and paste it into the prompt box at the bottom of the page.
   * Click {% octicon "paperclip" aria-label="Add attachment" %} in the prompt box, then click **Image**. Browse to the image file you want to attach, select it and click **Open**.
   * Drag and drop an image file from your operating system's file explorer into the prompt box.

{% data reusables.copilot.type-prompt-for-image %}

## Accessing {% data variables.copilot.copilot_chat_short %} from the search bar

You can ask {% data variables.product.prodname_copilot_short %} a question about an entire repository by typing your question in the main search box of the repository.

1. Navigate to a repository on {% data variables.product.github %}.
1. Press <kbd>/</kbd>, or click in the main search box at the top of the page.
1. In the search box, after `repo:OWNER/REPO`, type the question you want to ask {% data variables.product.prodname_copilot_short %}.

   For example, you could enter:

   * `What does this repo do?`
   * `Where is authentication implemented in this codebase?`
   * `How does license file detection work in this repo?`

1. Click **Ask {% data variables.product.prodname_copilot_short %}**.

   ![Screenshot of the main search box on {% data variables.product.prodname_dotcom %}. The drop-down option "Ask {% data variables.product.prodname_copilot_short %}" is highlighted with an orange outline.](/assets/images/help/copilot/ask-copilot-from-search-bar.png)

   The {% data variables.copilot.copilot_chat %} panel is displayed and {% data variables.product.prodname_copilot_short %} responds to your request.

{% data reusables.copilot.stop-response-generation %}

## Accessing {% data variables.copilot.copilot_chat_short %} from the dashboard

You can access {% data variables.product.prodname_copilot_short %}'s immersive view from the dashboard. The dashboard is your personalized overview of your activity on {% data variables.product.github %}, seen when you visit https://github.com while logged in.

1. Go to the dashboard at [https://github.com](https://github.com).
1. In the prompt box, type a question and press <kbd>Enter</kbd>.

   ![Screenshot of the dashboard with the Copilot Chat prompt box.](/assets/images/help/copilot/copilot-chat-dashboard.png)

   You will be taken to the immersive view where {% data variables.product.prodname_copilot_short %} responds to your request.

> [!NOTE]
> If you don't see the {% data variables.copilot.copilot_chat_short %} prompt box on your dashboard, check that **Dashboard entry point** in enabled in your {% data variables.product.prodname_copilot %} settings.

## Sharing {% data variables.copilot.copilot_chat_short %} conversations

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and subject to change. During the {% data variables.release-phases.public_preview %}, this feature is only available to users without enterprise or team memberships.

You can share {% data variables.copilot.copilot_chat_short %} conversations from the immersive view ([https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)). Shared conversations are public or private (i.e. permission-based), depending on the referenced content, for example, a conversation about a private repository. If you share a private conversation, the recipient must have the necessary permissions to view the content.

Once you share a conversation, the conversation and future messages will be visible to anyone with the link.

{% data reusables.copilot.immersive-mode-instructions %}
1. After you submit your first prompt, a share button is displayed in the upper right corner.
1. Click **{% octicon "lock" aria-hidden="true" aria-label="lock" %} Share** to open the share dialog.

   ![Screenshot of the main search box on {% data variables.product.prodname_dotcom %}. The share button is highlighted with an orange outline.](/assets/images/help/copilot/chat-share-button.png)

1. To share the conversation, click **Share**. This will generate a link to the conversation.
1. To copy the conversation link, click the **{% octicon "copy" aria-label="Copy conversation icon" %}** copy icon. The link is copied to your clipboard.

## Sharing feedback about {% data variables.copilot.copilot_chat_dotcom %}

{% data reusables.rai.copilot-dotcom-feedback-collection %}

To give feedback about a particular {% data variables.copilot.copilot_chat_short %} response, click either the thumbs up or thumbs down icon at the bottom of each chat response.

To give feedback about {% data variables.copilot.copilot_chat_short %} in general, click the ellipsis (**...**) at the top right of the chat panel, then click **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Give feedback**.

## Further reading

* [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)
* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile)
* [AUTOTITLE](/copilot/tutorials/using-copilot-to-explore-a-codebase)
