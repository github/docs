---
title: Getting started with prompts for Copilot Chat
intro: 'Get an overview of ways to use {% data variables.product.prodname_copilot_chat_short %}.'
topics:
  - Copilot
defaultTool: vscode
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat
  - /copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat
shortTitle: Getting started with chat
---

You can ask {% data variables.product.prodname_copilot_chat_short %} specific questions about your project or general software questions. You can also ask {% data variables.product.prodname_copilot_chat_short %} to write code, fix errors, write tests, and document code.

Use the tabs above to select the environment where you are using {% data variables.product.prodname_copilot_chat_short %}.

{% vscode %}

Some of the following example prompts use chat participants (preceded by `@`), slash commands (preceded by `/`), or chat variables (preceded by `#`). For more information on keywords in prompts, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt).

## Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how to create an express app`
* `@terminal how to update an npm package`

## Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project.

* `what sorting algorithm does this function use`
* `@workspace how are notifications scheduled`
* `#file:gameReducer.js #file:gameInit.js how are these files related`

To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Use chat variables like `#selection`, `#file`, `#editor`, `#codebase`, or `#git`.
* Use the `@workspace` chat participant.

## Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`
* `@workspace add form validation, similar to the newsletter page`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code, or to insert the code at your cursor, into a new file, or into the terminal.

## Ask questions about alerts from {% data variables.product.prodname_GH_advanced_security %} features

You can ask {% data variables.product.prodname_copilot_short %} about security alerts in repositories in your organization from {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). For example:

* `How would I fix this alert?`
* `How many alerts do I have on this pull request?`
* `Which line of code is this {% data variables.product.prodname_code_scanning %} alert referencing?`
* `What library is affected by this {% data variables.product.prodname_dependabot %} alert?`

## Set up a new project

Use the `/new` slash command to set up a new project. For example:

* `/new react app with typescript`
* `/new python django web application`
* `/new node.js express server`

Copilot will suggest a directory structure and provide a button to create the suggested files and contents. To preview a suggested file, select the file name in the suggested directory structure.

Use the `/newNotebook` slash command to set up a new Jupyter notebook. For example:

* `/newNotebook retrieve the titanic dataset and use Seaborn to plot the data`

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

## Ask questions about {% data variables.product.prodname_vscode %}

Use the `@vscode` chat participant to ask specific questions about {% data variables.product.prodname_vscode %}. For example:

* `@vscode tell me how to debug a node.js app`
* `@vscode how do I change my {% data variables.product.prodname_vscode %} colors`
* `@vscode how can I change key bindings`

## Ask questions about the command line

Use the `@terminal` chat participant to ask specific questions about the command line. For example:

* `@terminal find the largest file in the src directory`
* `@terminal #terminalLastCommand` to explain the last command and any errors

{% endvscode %}

{% visualstudio %}

## Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how to create an express app`
* `how to update an npm package`

## Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project. To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Open the relevant file.
* Use `#file` to tell {% data variables.product.prodname_copilot_short %} to reference specific files.
* Use `#solution` to tell {% data variables.product.prodname_copilot_short %} to reference the active file.

For example:

* `what sorting algorithm does this function use`
* `#file:gameReducer.js what happens when a new game is requested`

## Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code, insert the code into a new file, or preview the code output.

## Ask questions about alerts from {% data variables.product.prodname_GH_advanced_security %} features

You can ask {% data variables.product.prodname_copilot_short %} about security alerts in repositories in your organization from {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). For example:

* `How would I fix this alert?`
* `How many alerts do I have on this pull request?`
* `Which line of code is this {% data variables.product.prodname_code_scanning %} alert referencing?`
* `What library is affected by this {% data variables.product.prodname_dependabot %} alert?`

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

{% endvisualstudio %}

{% jetbrains %}

## Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how to create an express app`
* `how to update an npm package`

## Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project. To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

* Highlight relevant lines of code.
* Open the relevant file.
* Add the file as a reference. For information about how to use file references, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide?tool=jetbrains#file-references).
* Use the `@project` chat participant.

For example:

* `what sorting algorithm does this function use`
* `how are these files related` (with references to the files in question)
* `@project how are notifications scheduled`

## Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

* `write a function to sum all numbers in a list`
* `add error handling to this function`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code or to insert the code at your cursor.

## Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

* `how would you improve this code?`
* `translate this code to C#`
* `add error handling to this function`

## Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

* `/tests`
* `/tests using the Jest framework`
* `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

* `Add tests for a JavaScript function that should sum a list of integers`

{% endjetbrains %}

{% webui %}

Some of the example prompts require you to be in a specific context on the {% data variables.product.github %} website. For more information on how to access those contexts, see [Asking {% data variables.product.prodname_copilot_chat_short %} questions in different contexts](/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-in-different-contexts).

## Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

* `tell me about nodejs web server frameworks`
* `how to create an express app`
* `what is the best way to update an npm package`

## Ask questions about a repository

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a repository. For example:

* `what is the purpose of this repository?`
* `When was the most recent release?`
* `Where is rate limiting implemented in our API?`
* `What was the last merged PR by USERNAME`

## Ask questions about a specific file or symbol

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific file or symbol. For example:

* `what sorting algorithm does this function use`
* `how are these files related`
* `what is the purpose of this function`

## Ask questions about a knowledge base

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a knowledge base. For example:

* `How do I deploy a new application?`
* `What's the process for creating a new REST API?`
* `What are our best practices for logging?`

## Ask questions about a specific piece of code

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific piece of code. You might ask a question about a whole file, or a specific line. For example:

If you are asking about a whole file, you could enter:

* `Explain this file.`
* `How could I improve this code?`
* `How can I test this script?`

If you are asking about specific lines, you could enter:
* `Explain the function at the selected lines.`
* `How could I improve this class?`
* `Add error handling to this code.`
* `Write a unit test for this method.`

## Ask questions about {% data variables.product.prodname_GH_advanced_security %} alerts

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about security alerts in repositories in your organization from {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). For example:

* `How would I fix this alert?`
* `How many alerts do I have on this pull request?`
* `Which line of code is this {% data variables.product.prodname_code_scanning %} alert referencing?`
* `What library is affected by this {% data variables.product.prodname_dependabot %} alert?`

## Ask {% data variables.product.prodname_copilot_chat_short %} questions in a pull request

You can ask {% data variables.product.prodname_copilot_chat_short %} questions in a pull request. Your question could relate to various elements of the pull request For example:

You might ask for a summary of the changes in the pull request:

* `Summarize this PR for me.`
* `Summarize the comments in this PR.`
* `Summarize the changes in this PR.`

You might ask about the changes in a specific file in the pull request:

* `What's the purpose of this file?`
* `Why has this module been included?`

You might ask about the changes in a specific line in the pull request:

* `What is "actorData" in this line?`
* `Explain this "do..end" block.`

You might ask why a workflow failed:

* `Tell me why this job failed`
* `Suggest a fix for this error`

## Ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific issue or discussion

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific issue or discussion. For example:

* `what is the purpose of this issue?`

## Ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific commit

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about a specific commit. For example:

* `what is the purpose of this commit?`
* `what is the expected output of this commit?`
* `what is the best way to test this commit?`

{% endwebui %}
