---
title: Asking GitHub Copilot questions in GitHub Mobile
intro: 'Ask coding questions, explore repositories, and get help with pull requests in {% data variables.product.prodname_mobile %}.'
versions:
  feature: copilot-chat-for-mobile
shortTitle: Chat in Mobile
redirect_from:
  - /copilot/github-copilot-chat/using-github-copilot-chat-in-github-mobile
  - /copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile
  - /copilot/github-copilot-chat/copilot-chat-in-github-mobile
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile
  - /copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github-mobile
  - /copilot/how-tos/chat/asking-github-copilot-questions-in-github-mobile
  - /copilot/how-tos/chat/use-chat-in-mobile
  - /copilot/how-tos/use-chat/use-chat-in-mobile
  - /copilot/how-tos/chat-with-copilot/use-chat-in-mobile
  - /copilot/how-tos/chat-with-copilot/chat-in-mobile
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

## Limitations

The following limitations apply to {% data variables.copilot.copilot_mobile_short %}:

* If you're a member of an organization{% ifversion ghec %} or enterprise{% endif %}, your access to {% data variables.copilot.copilot_mobile_short %} may depend on policies set by your administrator. See [AUTOTITLE](/copilot/concepts/policies).
* If you reach your premium request limit on mobile, {% data variables.product.prodname_copilot_short %} will automatically fall back to a free, non-premium model. Your access to premium models will reset at the start of the next billing cycle.
* If you purchased {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} through an in-app purchase on iOS or Android, you cannot enable additional premium requests. To do so, cancel your mobile subscription and re-subscribe on {% data variables.product.prodname_dotcom_the_website %} through a web browser.

## Asking a general question about software development

{% data reusables.copilot.chat-mobile-start-chat %}
1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and send the message.

   Some examples of general questions you could ask are:
   * `What are the advantages of the Go programming language?`
   * `What is Agile software development?`
   * `What is the most popular JavaScript framework?`
   * `Give me some examples of regular expressions.`
   * `Write a bash script to output today's date.`

1. Within a conversation thread, you can ask follow-up questions. {% data variables.product.prodname_copilot_short %} will answer within the context of the conversation.

## Asking exploratory questions about a repository

You can ask questions about a specific repository, to get help with understanding the code, or to get help with a specific task you're working on.

1. In {% data variables.product.prodname_mobile %}, navigate to a repository, and tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.
1. At the bottom of the page, use the "Ask {% data variables.product.prodname_copilot_short %}" box, type a question and send the message.

   For example, if you chose the repository you are working in as the context, you could ask:

   * `What is the main purpose of this repo? What problem does it solve or what functionality does it provide?`
   * `What web frameworks are used in this project?`
   * `Where is rate limiting implemented in our API?`
   * `How is the code organized? Explain the project architecture.`
   * `Are there any specific environment requirements for working on this project?`

## Asking questions about specific pieces of code

You can chat with {% data variables.product.prodname_copilot_short %} about a file in your repository, or about specific lines of code within a file.

1. In {% data variables.product.prodname_mobile %}, navigate to a repository and open a file.
1. Do one of the following:
   * To ask a question about the entire file, tap the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the bottom right corner of the file view.
   * To ask a question about specific lines within the file, select and copy the lines you want to ask about. Then tap the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) and paste the copied lines in the {% data variables.copilot.copilot_chat_short %} input field.

1. Type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and send the message.

{% ifversion ghec %}

## Asking questions about pull requests, issues, and discussions

Navigate to any pull request, issue, or discussion in {% data variables.product.prodname_mobile %} and tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon to ask {% data variables.product.prodname_copilot_short %} about it.

{% endif %}

## Extending {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_mobile %}

{% data reusables.copilot.copilot-extensions.extending-copilot-chat %}
