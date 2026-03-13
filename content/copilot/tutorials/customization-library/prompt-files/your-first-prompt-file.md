---
title: Your first prompt file
intro: 'Create your first {% data variables.product.prodname_copilot_short %} prompt file with this simple code explanation example that works for any programming language.'
versions:
  feature: copilot
category:
  - Prompt files
  - Getting started
  - Configure Copilot
complexity:
  - Simple
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.prompt-files-preview-note %}

## About customizations

You can customize {% data variables.product.prodname_copilot %}'s responses using two types of files:

* **Custom instructions** provide ongoing guidance for how {% data variables.product.prodname_copilot %} should behave across all your interactions. For an introductory example, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions).
* **Prompt files (public preview)** define reusable prompts for specific tasks that you can invoke when needed. {% data reusables.copilot.prompt-files-available-in-editors %}

## Your first prompt file

Start with this simple prompt file that helps you write clear, well-documented code explanations.

### Code explanation prompt

```text copy
---
agent: 'agent'
description: 'Generate a clear code explanation with examples'
---

Explain the following code in a clear, beginner-friendly way:

Code to explain: ${input:code:Paste your code here}
Target audience: ${input:audience:Who is this explanation for? (e.g., beginners, intermediate developers, etc.)}

Please provide:

* A brief overview of what the code does
* A step-by-step breakdown of the main parts
* Explanation of any key concepts or terminology
* A simple example showing how it works
* Common use cases or when you might use this approach

Use clear, simple language and avoid unnecessary jargon.
```

## Test it out

1. Save the prompt file above as `explain-code.prompt.md` in your `.github/prompts` folder.
1. In {% data variables.product.prodname_vscode %}, display the {% data variables.copilot.copilot_chat_short %} view and enter `/explain-code`.

   {% data variables.product.prodname_copilot_short %} will switch to agent mode, if this is not already selected, and will prompt you to enter some code and an audience type.

1. Enter:

   ```text copy
   The code is `function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }`. The audience is beginners.
   ```

{% data reusables.copilot.prompt-files-further-reading %}
