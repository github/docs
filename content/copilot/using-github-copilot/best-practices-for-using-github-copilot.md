---
title: Best practices for using GitHub Copilot
intro: 'Learn how to get the most out of {% data variables.product.prodname_copilot_short %}.'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: Best practices
---

## Understand {% data variables.product.prodname_copilot_short %}'s strengths and weaknesses

{% data variables.product.prodname_copilot %} is an AI coding assistant that helps you write code faster and with less effort, allowing you to focus more energy on problem solving and collaboration. Before you start working with {% data variables.product.prodname_copilot_short %}, it's important to understand when you should and shouldn't use it.

**Some of the things {% data variables.product.prodname_copilot_short %} does best include**:

* Writing tests and repetitive code
* Debugging and correcting syntax
* Explaining and commenting code
* Generating regular expressions

**{% data variables.product.prodname_copilot_short %} is not designed to**:

* Respond to prompts unrelated to coding and technology
* Replace your expertise and skills. Remember that you are in charge, and {% data variables.product.prodname_copilot_short %} is a powerful tool at your service.

## Choose the right {% data variables.product.prodname_copilot_short %} tool for the job

While {% data variables.product.prodname_copilot_short %} code completions and {% data variables.product.prodname_copilot_chat_short %} share some functionality, the two tools are best used in different circumstances.

**Code completions work best for**:

* Completing code snippets, variable names, and functions as you write them
* Generating repetitive code
* Generating code from inline comments in natural language
* Generating tests for test-driven development

**Alternatively, {% data variables.product.prodname_copilot_chat_short %} is best suited for**:

* Answering questions about code in natural language
* Generating large sections of code, then iterating on that code to meet your needs
* Accomplishing specific tasks with keywords and skills. {% data variables.product.prodname_copilot_chat_short %} has built-in keywords and skills designed to provide important context for prompts and accomplish common tasks quickly. Different types of keywords and skills are available in different {% data variables.product.prodname_copilot_chat_short %} platforms. See "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt){% ifversion fpt %}."{% else %}" and "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#powered-by-skills)."{% endif %}
* Completing a task as a specific persona. For example, you can tell {% data variables.product.prodname_copilot_chat_short %} that it is a Senior C++ Developer who cares greatly about code quality, readability, and efficiency, then ask it to review your code.

## Create thoughtful prompts

Prompt engineering, or structuring your request so {% data variables.product.prodname_copilot_short %} can easily understand and respond to it, plays a critical role in {% data variables.product.prodname_copilot_short %}'s ability to generate a valuable response. Here are a few quick tips you should remember while crafting your prompts:

* Break down complex tasks.
* Be specific about your requirements.
* Provide examples of things like input data, outputs, and implementations.
* Follow good coding practices.

To learn more, see "[AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)."

## Check {% data variables.product.prodname_copilot_short %}'s work

While {% data variables.product.prodname_copilot_short %} is very powerful, it is still a tool capable of making mistakes, and you should always validate the code it suggests. Use the following tips to ensure you are accepting accurate, secure suggestions:

* **Understand suggested code before you implement it.** To ensure you fully understand {% data variables.product.prodname_copilot_short %}'s suggestion, you can ask {% data variables.product.prodname_copilot_chat_short %} to explain the code.
* **Review {% data variables.product.prodname_copilot_short %}'s suggestions carefully.** Consider not just the functionality and security of the suggested code, but also the readability and maintainability of the code moving forward.
* **Use automated tests and tooling to check {% data variables.product.prodname_copilot_short %}'s work.** With the help of tools like linting, {% data variables.product.prodname_code_scanning %}, and IP scanning, you can automate an additional layer of security and accuracy checks.

> [!TIP] Optionally, you may want to check {% data variables.product.prodname_copilot_short %}'s work for similarities to existing public code. If you don't want to use similar code, you can turn off suggestions matching public code. See {% ifversion fpt %}"[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)" or "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching)."{% else %}"[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)," "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching)," or "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#suggestions-matching-public-code)."{% endif %}

## Guide {% data variables.product.prodname_copilot_short %} towards helpful outputs

There are several adjustments you can make to steer {% data variables.product.prodname_copilot_short %} towards more valuable responses:

* **Provide {% data variables.product.prodname_copilot_short %} with helpful context**:
  * If you are using {% data variables.product.prodname_copilot_short %} in your IDE, open relevant files and close irrelevant files.
  * In {% data variables.product.prodname_copilot_chat_short %}, if a particular request is no longer helpful context, delete that request from the conversation. Alternatively, if none of the context of a particular conversation is helpful, start a new conversation.
  * If you are using {% data variables.product.prodname_copilot_chat_dotcom_short %}, provide specific repositories, files, symbols, and more as context. See "[AUTOTITLE](/enterprise-cloud@latest/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
  * If you are using {% data variables.product.prodname_copilot_chat_short %} in your IDE, use keywords to focus {% data variables.product.prodname_copilot_short %} on a specific task or piece of context. See "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt)."
* **Rewrite your prompts to generate different responses.** If {% data variables.product.prodname_copilot_short %} is not providing a helpful response, try rephrasing your prompt, or even breaking your request down into multiple smaller prompts.
* **Pick the best available suggestion.** When you are using code completions, {% data variables.product.prodname_copilot_short %} might offer more than one suggestion. You can use keyboard shortcuts to quickly look through all available suggestions. For the default keyboard shortcuts for your operating system, see "[AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment#keyboard-shortcuts-for-github-copilot)."
* **Provide feedback to improve future suggestions.** You can provide feedback in many ways:
  * For code completions, accept or reject {% data variables.product.prodname_copilot_short %}'s suggestion.
  * For individual responses in {% data variables.product.prodname_copilot_chat_short %}, click the thumbs up or thumbs down icons next to the response.
  * For {% data variables.product.prodname_copilot_chat_short %} in your IDE, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#sharing-feedback)" for instructions specific to your environment.
  * For {% data variables.product.prodname_copilot_chat_dotcom_short %}, leave a comment on the [feedback discussion](https://github.com/orgs/community/discussions/110314).

## Stay up-to-date on {% data variables.product.prodname_copilot_short %}'s features

New features are regularly added to {% data variables.product.prodname_copilot_short %} to create new abilities, build on existing features, and improve the user experience. To stay up-to-date with {% data variables.product.prodname_copilot_short %}'s features, see the [changelog](https://github.blog/changelog/label/copilot/).
