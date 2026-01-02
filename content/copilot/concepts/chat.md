---
title: About GitHub Copilot Chat
shortTitle: Chat
intro: 'Learn how you can use {% data variables.copilot.copilot_chat %} to enhance your coding experience.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/about-github-copilot-chat
contentType: concepts
---

# Overview

{% data variables.copilot.copilot_chat %} is the AI-powered chat interface for {% data variables.product.prodname_copilot %}. It allows you to interact with AI models to get coding assistance, explanations, and suggestions in a conversational format.

{% data variables.copilot.copilot_chat_short %} can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code.

{% data variables.copilot.copilot_chat %} is available in various environments:

* {% data variables.product.github %} (the website).
* A range of IDEs such as {% data variables.product.prodname_vscode %}, Xcode, and JetBrains IDEs.
* {% data variables.product.prodname_mobile %}.

Different environments may have different features and capabilities, but the core functionality remains consistent across platforms. To explore the functionality available in each environment, see the [AUTOTITLE](/copilot/how-tos/chat) how-to guides and the [AUTOTITLE](/copilot/tutorials).

## Limitations

{% data variables.copilot.copilot_chat_short %} is designed to assist with coding tasks, but you remain responsible for reviewing and validating the code it generates. It may not always produce correct or optimal solutions, and it can sometimes generate code that contains security vulnerabilities or other issues. Always test and review the code before using it in production.

## Customizing {% data variables.copilot.copilot_chat_short %} responses

{% data variables.product.prodname_copilot %} in {% data variables.product.github %}, {% data variables.product.prodname_vscode %}, and {% data variables.product.prodname_vs %} can provide chat responses that are tailored to the way your team works, the tools you use, the specifics of your project, or your personal preferences, if you provide it with enough context to do so. Instead of repeating instructions in each prompt, you can create and save instructions for {% data variables.copilot.copilot_chat_short %} to customize what responses you receive.

There are two types of custom instructions you can add for {% data variables.copilot.copilot_chat_short %}:
* Repository instructions: You can create a custom instructions file for a repository, so that all prompts asked in the context of the repository automatically include the instructions you've defined
* Personal instructions: You can add personal instructions so that all the chat responses you, as a user, receive are tailored to your preferences

For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot) and [AUTOTITLE](/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot).

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Extending {% data variables.copilot.copilot_chat_dotcom_short %}

{% data reusables.copilot.copilot-extensions.extending-copilot-chat %}
