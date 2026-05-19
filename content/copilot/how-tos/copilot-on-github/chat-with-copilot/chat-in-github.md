---
title: Asking GitHub Copilot questions in GitHub
shortTitle: Chat in GitHub
intro: 'Get instant answers about your code, repositories, and development questions — right from {% data variables.product.github %}.'
versions:
  feature: copilot
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
  - /copilot/how-tos/chat-with-copilot/chat-in-github
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Submitting a question to {% data variables.copilot.copilot_chat_short %}

{% data variables.copilot.copilot_chat_short %} is available from any page on {% data variables.product.github %}. Some questions work best in a specific context, such as a repository, issue, or pull request.

{% data reusables.copilot.access-chat-instructions %}
1. In the prompt box, type a question and press <kbd>Enter</kbd>.

   Some examples of general questions you could ask are:

   * {% prompt %}What are the advantages of the Go programming language?{% endprompt %}
   * {% prompt %}What is Agile software development?{% endprompt %}
   * {% prompt %}What is the most popular JavaScript framework?{% endprompt %}
   * {% prompt %}Give me some examples of regular expressions.{% endprompt %}
   * {% prompt %}Write a bash script to output today's date.{% endprompt %}

{% data reusables.copilot.stop-response-generation %}
1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation.

### Viewing an editing generated files

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

{% data variables.product.prodname_copilot_short %} may generate files as part of its response, which you can view, edit, and download from the side panel.

### Changing and comparing AI models

You can choose from a selection of AI models, each with different strengths. Different models have different premium request multipliers, which affect your monthly usage allowance. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% data reusables.copilot.model-picker-enable-alternative-models %}

1. At the bottom of {% data variables.copilot.copilot_chat_short %}, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

After submitting a prompt, you can also regenerate a response using a different model by clicking the retry icon ({% octicon "sync" aria-label="The re-run icon" %}) below the response. You can switch between responses to compare results.

### Using subthreads in a conversation

Subthreads are branches of a conversation that let you explore aspects of a topic, or new topics, all within the same thread.

To create a subthread, hover over one of your previous questions and click the {% octicon "pencil" aria-label="Edit message" %} button. Edit the question, then click **Send**. You cannot edit any attachments.

The response to your edited question is displayed in a new subthread. An edit counter appears below the question. Hover over the counter, then click {% octicon "chevron-left" aria-label="Previous response" %} or {% octicon "chevron-right" aria-label="Next response" %} to navigate between subthreads.

### Using images in {% data variables.copilot.copilot_chat_short %}

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

You can attach images to your prompts by pasting, dragging, or clicking {% octicon "plus" aria-label="Add attachment" %} in the prompt box and then selecting **{% octicon "file-code" aria-hidden="true" %} Upload from computer**. Select a model that supports images from the model picker. For supported file types and example questions, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/provide-visual-inputs).

## Further reading

* [AUTOTITLE](/copilot/tutorials/using-copilot-to-explore-a-codebase)
