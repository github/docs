---
title: Example prompts for Copilot Chat
intro: 'Get example prompts and use cases for {% data variables.product.prodname_copilot_chat_short %}.'
topics:
  - Copilot
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Example prompts for chat
---

You can ask {% data variables.product.prodname_copilot_chat_short %} specific questions about your project or general software questions. You can also ask {% data variables.product.prodname_copilot_chat_short %} to write code, fix errors, write tests, and document code.

Use the tabs above to select the environment where you are using {% data variables.product.prodname_copilot_chat_short %}.

{% vscode %}

Some of the following example prompts use chat participants (preceded by `@`), slash commands (preceded by `/`), or chat variables (preceded by `#`). For more information on keywords in prompts, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt)."

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

* Highlight relevant lines of code
* Use chat variables like `#selection`, `#file`, `#editor`, `#codebase`, or `#git`
* Use the `@workspace` chat participant

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

* Highlight relevant lines of code
* Open the relevant file
* Use `#file` to tell {% data variables.product.prodname_copilot_short %} to reference specific files
* Use `#solution` to tell {% data variables.product.prodname_copilot_short %} to reference the active file

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
* Add the file as a reference. For information about how to use file references, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide?tool=jetbrains#file-references)."

For example:

* `what sorting algorithm does this function use`
* `how are these files related` (with references to the files in question)

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
