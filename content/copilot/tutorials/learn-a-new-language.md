---
title: Learning a new programming language with GitHub Copilot
shortTitle: Learn a new language
intro: '{% data variables.copilot.copilot_chat %} can help you extend your programming skills by learning how to code in a new programming language.'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/tutorials/learning-a-new-programming-language-with-github-copilot
contentType: tutorials
category:
  - Scale institutional knowledge
  - Author and optimize with Copilot
---

## Introduction

{% data variables.product.prodname_copilot %} can help you learn how to code: whether you have no prior programming experience, or when you are learning an additional programming language. This guide is all about the latter use case: you already have a good knowledge of how to code in one or more programming languages, but now you want to learn a new language.

### Prerequisites

This guide assumes that you know how to use {% data variables.copilot.copilot_chat_short %} and {% data variables.product.prodname_copilot_short %} code completion in your IDE. See [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide) and [AUTOTITLE](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot).

## Start with the basics

Use {% data variables.copilot.copilot_chat_short %} to research the basics of the new language. Find out how this language differs from the languages you already know. Ask {% data variables.product.prodname_copilot_short %} to tell you the main things you need to be aware of before you start coding in the new language.

### Example prompts: language basics

These are some prompts that you can use in {% data variables.copilot.copilot_chat_short %} to help you learn the basics of a new programming language. Change `NEW-LANGUAGE` to the name of the language you want to find out about.

<!-- Note: spaces added between bulleted points to avoid the list looking cramped in the rendered page. -->

* {% prompt %}What is NEW-LANGUAGE best suited for? I am an experienced Python programmer, but I don't know anything about NEW-LANGUAGE.{% endprompt %}

* {% prompt %}What are the main ways in which NEW-LANGUAGE differs from other languages? Explain the most essential things I need to know as an experienced programmer who wants to learn to code in NEW-LANGUAGE.{% endprompt %}

* {% prompt %}How can I install NEW-LANGUAGE?{% endprompt %}

* {% prompt %}How does error handling work in NEW-LANGUAGE?{% endprompt %}

* {% prompt %}How do you manage dependencies and packages in NEW-LANGUAGE?{% endprompt %}

* {% prompt %}What are the most essential libraries or frameworks I should know about for NEW-LANGUAGE?{% endprompt %}

* {% prompt %}What testing frameworks does the NEW-LANGUAGE community typically use?{% endprompt %}

* {% prompt %}What are the biggest mistakes newcomers to NEW-LANGUAGE typically make with this language?{% endprompt %}

* {% prompt %}As an experienced programmer learning NEW-LANGUAGE, what are the things I should focus on first?{% endprompt %}

## Use {% data variables.product.prodname_copilot_short %} as your personal trainer

{% data variables.product.prodname_copilot %} can write code for you. You can ask it to create chunks of code, functions, or even entire programs. However, when you are learning a new language, you should avoid relying on {% data variables.product.prodname_copilot_short %} to write much of the code for you—especially if you accept the code it suggests without making sure you understand it. If you don't know the language, you won't know if the code {% data variables.product.prodname_copilot_short %} suggests is as good as it could be. Instead, you should treat {% data variables.product.prodname_copilot_short %} as your personalized training assistant.

When you ask {% data variables.product.prodname_copilot_short %} how to code something specific in the new language, you should ask it to explain the code it suggests. If you don't completely understand the code, or {% data variables.product.prodname_copilot_short %}'s description of it, ask for a simplified explanation—or ask for more detail—until you are sure you understand the code. Always avoid using any code that you are not completely confident that you understand.

### Example prompts: asking for an explanation

Change `NEW-LANGUAGE` to the name of the language you want to find out about.

<!-- Note: spaces added between bulleted points to avoid the list looking cramped in the rendered page. -->

* `Explain your previous suggestion in more detail. I am new to NEW-LANGUAGE and I don't understand the code you suggested.`

* {% prompt %}Show me how to write the following Ruby code in NEW-LANGUAGE: `people_over_50 = people.select { |person| person.age > 50 }`. Explain each part of the NEW-LANGUAGE code that you suggest.{% endprompt %}

* `Add comprehensive comments to this NEW-LANGUAGE file to explain what each part of the code does.`

## Write a simple program in the new language

To get started, write a simple program that you would be able to write easily in a language you already know. Ask {% data variables.product.prodname_copilot_short %} for help. If you prefer, you can ask {% data variables.product.prodname_copilot_short %} to write a very simple program for you, just to get you started. You can then examine the code, learn how it works, and then extend the program yourself.

### Example prompts: writing a simple program

<!-- Note: spaces added between bulleted points to avoid the list looking cramped in the rendered page. -->

* {% prompt %}Show me the Rust code for a simple, useful command line tool that asks for user input and returns some useful information based on what was entered.{% endprompt %}

* `Comment the suggested code more thoroughly. I want to understand what every part of this code does.`

* {% prompt %}Give me the code for a very small Android app written in Kotlin.{% endprompt %}

* `Suggests ways I could enhance this app.`

### Use comments and {% data variables.product.prodname_copilot_short %} code completion

As an alternative to asking {% data variables.copilot.copilot_chat_short %} to suggest the basic code for a new program, you can write comments in the editor and see what suggestions {% data variables.product.prodname_copilot_short %} code completion offers.

For example:

1. In your IDE, create a file with an appropriate file name extension for the language you are using. For example, if you are learning Rust, create a file called `example.rs`.
1. Copy and paste the following comment lines.

   ```rust copy
   // NEW-LANGUAGE command line program to find the day of the week for a date.
   // The program does the following:
   // Prompt user to input string in format YYYYMMDD
   // Parse the string to check that it is a valid date.
   // If it's not, print an error message and exit.
   // Calculate the day of the week for the given date.
   // Print the day of the week to the user.
   ```

1. If necessary, change the comment syntax to match the language you are using.
1. Change `NEW-LANGUAGE` to the name of the language you are using. This, and the file name extension, will tell {% data variables.product.prodname_copilot_short %} which language to use.
1. Press return and tab to see and accept the code completion suggestions that {% data variables.product.prodname_copilot_short %} offers. Continue accepting suggestions until you have a complete program.
1. Read through the code to see how it works. If you don't understand any part of the code, ask {% data variables.product.prodname_copilot_short %} to explain it. For example:

   1. Select one or more lines of code that you don't understand.
   1. **In {% data variables.product.prodname_vscode_shortname %}:**

        Right-click the selected code and choose **{% data variables.product.prodname_copilot_short %}** > **Explain**.

      **In JetBrains IDEs:**

        Right-click the selected code and choose **{% data variables.product.prodname_copilot %}** > **Explain This**.

      **In {% data variables.product.prodname_vs %}:**

        Open the {% data variables.copilot.copilot_chat_short %} panel and enter the prompt `Explain this code`.

## Ask {% data variables.product.prodname_copilot_short %} specific questions

While you are learning a new language, you should work on small units of code that perform a specific task. Ask {% data variables.product.prodname_copilot_short %} well-defined, narrowly scoped questions to help you become familiar with the syntax and idioms of the new language.

### Example prompts: specific questions

Change `NEW-LANGUAGE` to the name of the language you want to find out about.

<!-- Note: spaces added between bulleted points to avoid the list looking cramped in the rendered page. -->

* {% prompt %}Explain all of the various ways that conditionals can be coded in NEW-LANGUAGE.{% endprompt %}

* {% prompt %}In JavaScript I'd write: `The ${numCats === 1 ? 'cat is' : 'cats are'} hungry.`. How do I write this in NEW-LANGUAGE?{% endprompt %}

* {% prompt %}In NEW-LANGUAGE, how do I convert a string to all lowercase?{% endprompt %}

* {% prompt %}What is the equivalent of num++ in NEW-LANGUAGE?{% endprompt %}

* {% prompt %}How do I run a program written in the NEW-LANGUAGE programming language?{% endprompt %}

* {% prompt %}How can I compile a single executable file for my NEW-LANGUAGE project, that I can distribute as a release?{% endprompt %}

## Convert existing code to the new language

One effective way of leveraging your existing programming knowledge is to take some code you are familiar with in one language, convert it to the new language, and then examine how the same operation is done in the new language.

1. Find a self-contained piece of code. For example, a function.
1. Ask {% data variables.copilot.copilot_chat_short %} to convert it into the language you are learning.
1. Copy and paste the suggested code into a new file in your editor.
1. View the two pieces of code side by side and analyze how the same operation is done in the new language. What are the similarities and differences?
1. Get {% data variables.product.prodname_copilot_short %} to explain any of the code you don't understand.

## Read existing code in the new language

After you feel comfortable with the basics of the new language, spend time reading existing code written in that language.

Find a project that uses the new language and take a look at the code. Open a file and ask {% data variables.copilot.copilot_chat_short %} for a brief overview of the purpose of the file. Then read through the code line by line. Do you understand the techniques that have been used? Do you know how the library and built-in functions work? Can you follow the data flow through the code?

Ask {% data variables.product.prodname_copilot_short %} to explain any parts of the code that you don't understand.

When you have finished reading through the code, ask {% data variables.product.prodname_copilot_short %} whether it can suggest any ways to improve the code.

## Avoid assuming that {% data variables.product.prodname_copilot_short %} is always right

{% data variables.product.prodname_copilot_short %} is a tool that can help you learn a new language, but—like all AI assistants—it is not infallible. It can make mistakes, and it can suggest code that is not optimal.

{% data variables.product.prodname_copilot_short %} is trained on a large body of code but, for each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language. For example, JavaScript is well-represented in public repositories and {% data variables.product.prodname_copilot_short %} will therefore typically be able to provide accurate and helpful suggestions. The quality of {% data variables.product.prodname_copilot_short %}'s suggestions may be lower for languages that are less well-represented in public repositories.

Always check the code that {% data variables.product.prodname_copilot_short %} suggests, and make sure you understand it before you use it. When you're checking code suggested by {% data variables.product.prodname_copilot_short %}, you should look for ways you could make the code more performant, simpler, or easier to maintain.

If you think {% data variables.product.prodname_copilot_short %} has not suggested the best way of coding something you can ask it to try a different approach.

If you run the code and it generates an error, give {% data variables.product.prodname_copilot_short %} the details of the error and ask it to fix the code.

You should also check that {% data variables.product.prodname_copilot_short %} is following your coding style guidelines. If it is not, you can alter the repository's custom instructions to prompt {% data variables.product.prodname_copilot_short %} to adhere to your guidelines in future. See [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

### Example prompts: checking your work

<!-- Note: spaces added between bulleted points to avoid the list looking cramped in the rendered page. -->

* `Check this code for syntax errors.`

* `Assess whether this code is optimally performant.`

* `Suggest alternative ways this code could have been written.`
