---
title: Prompt engineering for GitHub Copilot
shortTitle: Prompt engineering
intro: 'Follow these strategies to improve your {% data variables.product.prodname_copilot_short %} results.'
versions:
  feature: copilot
topics:
  - Copilot
---

A prompt is a request that you make to {% data variables.product.prodname_copilot %}. For example, a question that you ask {% data variables.product.prodname_copilot_chat_short %}, or a code snippet that you ask {% data variables.product.prodname_copilot_short %} to complete. In addition to your prompt, {% data variables.product.prodname_copilot_short %} uses additional context, like the code in your current file and the chat history, to generate a response.

Follow the tips in this article to write prompts that generate better responses from {% data variables.product.prodname_copilot_short %}.

## Start general, then get specific

When writing a prompt for {% data variables.product.prodname_copilot_short %}, first give {% data variables.product.prodname_copilot_short %} a broad description of the goal or scenario. Then list any specific requirements.

For example:

> Write a function that tells me if a number is prime
>
> The function should take an integer and return true if the integer is prime
>
> The function should error if the input is not a positive integer

## Give examples

Use examples to help {% data variables.product.prodname_copilot_short %} understand what you want. You can provide example input data, example outputs, and example implementations.

For example:

> Write a function that finds all dates in a string and returns them in an array. Dates can be formatted like:
>
> * 05/02/24
> * 05/02/2024
> * 5/2/24
> * 5/2/2024
> * 05-02-24
> * 05-02-2024
> * 5-2-24
> * 5-2-2024
>
> Example:
>
> findDates("I have a dentist appointment on 11/14/2023 and book club on 12-1-23")
>
> Returns: ["11/14/2023", "12-1-23"]

Unit tests can also serve as examples. Before writing your function, you can use {% data variables.product.prodname_copilot_short %} to write unit tests for the function. Then, you can ask {% data variables.product.prodname_copilot_short %} to write a function described by those unit tests.

## Break complex tasks into simpler tasks

If you want {% data variables.product.prodname_copilot_short %} to complete a complex or large task, break the task into multiple simple, small tasks.

For example, instead of asking {% data variables.product.prodname_copilot_short %} to generate a word search puzzle, break the process down into smaller tasks, and ask {% data variables.product.prodname_copilot_short %} to accomplish them one by one:

* Write a function to generate a 10 by 10 grid of letters.
* Write a function to find all words in a grid of letters, given a list of valid words.
* Write a function to that uses the previous functions to generate a 10 by 10 grid of letters that contains at least 10 words.
* Update the previous function to print the grid of letters and 10 random words from the grid.

## Avoid ambiguity

Avoid ambiguous terms. For example, don’t ask "what does this do" if "this" could be the current file, the last {% data variables.product.prodname_copilot_short %} response, or a specific code block. Instead, be specific:

* What does the `createUser` function do?
* What does the code in your last response do?

Ambiguity can also apply to libraries:

* If you are using an uncommon library, describe what the library does.
* If you want to use a specific library, set the import statements at the top of the file or specify what library you want to use.

## Indicate relevant code

If you are using {% data variables.product.prodname_copilot_short %} in your IDE to get suggestions as you code, open any relevant files and close irrelevant files. {% data variables.product.prodname_copilot_short %} will use the open files to understand your request.

If you are using {% data variables.product.prodname_copilot_chat_short %} in your IDE, open the file or highlight the code that you want {% data variables.product.prodname_copilot_short %} to reference. You can also specify which files {% data variables.product.prodname_copilot_chat_short %} should reference. For example, in {% data variables.product.prodname_vscode_shortname %}, use the `#file` variable or the `@workspace` participant. For instructions on how to reference files in your IDE, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)."

## Experiment and iterate

If you don’t get the result that you want, iterate on your prompt and try again.

If you are using {% data variables.product.prodname_copilot_short %} to get suggestions as you code, you can delete the suggestion entirely and start over. Or you can keep the suggestion and request modifications.

If you are using {% data variables.product.prodname_copilot_chat_short %}, you can reference the previous response in your next request. Or, you can delete the previous response and start over.

## Keep history relevant

{% data variables.product.prodname_copilot_chat_short %} uses the chat history to get context about your request. To give {% data variables.product.prodname_copilot_short %} only the relevant history:

* Use threads to start a new conversation for a new task
* Delete requests that are no longer relevant or that didn’t give you the desired result

## Follow good coding practices

If you aren't getting the responses you want when you ask {% data variables.product.prodname_copilot_short %} for suggestions or explanations in your codebase, make sure that your existing code follows best practices and is easy to read. For example:

* Use a consistent code style and patterns
* Use descriptive names for variables and functions
* Comment your code
* Structure your code into modular, scoped components
* Include unit tests

>[!Tip]
> Use {% data variables.product.prodname_copilot_short %} to help your code follow best practices. For example, ask {% data variables.product.prodname_copilot_short %} to add comments or to break a large function into smaller functions.

{% ifversion ghec %}

Similarly, if you aren't getting the responses you want when you use {% data variables.product.prodname_copilot_short %} with knowledge bases, apply these best practices to your knowledge base files:

* Organize the files into a logical hierarchy
* Use clear and concise language
* Include examples and use cases, if relevant
* Cross reference between related files

{% endif %}

## Further reading

* [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/) in the {% data variables.product.company_short %} blog
* [Using GitHub Copilot in your IDE: Tips, tricks, and best practices](https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/) in the {% data variables.product.company_short %} blog
* [A developer’s guide to prompt engineering and LLMs](https://github.blog/2023-07-17-prompt-engineering-guide-generative-ai-llms/)  in the {% data variables.product.company_short %} blog
* [Prompting GitHub Copilot Chat to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/)  in the {% data variables.product.company_short %} blog
