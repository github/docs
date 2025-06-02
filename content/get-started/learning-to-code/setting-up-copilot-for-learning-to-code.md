---
title: Setting up Copilot for learning to code
intro: 'Configure {% data variables.product.prodname_copilot_short %} to help you learn coding concepts and actively build your programming skills.'
versions:
  fpt: '*'
topics:
  - Copilot
shortTitle: Set up Copilot for learning
---

## Can {% data variables.product.prodname_copilot_short %} help me learn to code?

Yes! {% data variables.product.prodname_copilot_short %} can adapt to meet your changing needs throughout your coding journey. When you're an experienced developer, you'll use {% data variables.product.prodname_copilot_short %} as a coding assistant. While you're learning to code, it's more beneficial as a **supportive companion**.

In this guide, you’ll learn how to set up {% data variables.product.prodname_copilot_short %} to act as a **tutor** that will help you build a deep understanding of programming concepts, rather than relying on it to write your code for you. To optimize your learning, follow these steps for each repository you work on!

## Prerequisites

This guide assumes that you'll use {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}. To get set up, see [Set up Copilot in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/setup-simplified) in the {% data variables.product.prodname_vscode %} documentation.

## Step 1: Disable code completion

First, let's disable code completion. This will give you the opportunity to deepen your understanding of programming concepts by writing more code yourself.

1. In {% data variables.product.prodname_vscode_shortname %}, open your project.
1. Create a folder in the root directory called `.vscode`.
1. Inside `.vscode`, create a file called `settings.json`.
1. Add the following text to the file:

   ```json copy
   {
       "github.copilot.enable": {
           "*": false
       }
   }
   ```

1. Save the file. {% data variables.product.prodname_copilot_short %} code completion is now disabled for this project in {% data variables.product.prodname_vscode_shortname %}.

## Step 2: Add learning instructions

Now, let's provide {% data variables.copilot.copilot_chat_short %} with instructions to act like a tutor that supports your learning.

1. In the root folder of your project, create a file called `copilot-instructions.md`.
1. Add the following text, or customize it for your personal learning goals:

   ```markdown copy
   I am learning to code. You are to act as a tutor; assume I am a beginning coder. Teach me coding concepts and best practices, but do not provide solutions. Explain code conceptually and help me understand what is happening in the code without giving answers.

   Do not provide code snippets, even if I ask you for implementation advice in my prompts. Teach me all the basic coding concepts in your answers. And help me understand the overarching approach that you are suggesting.

   Whenever possible, share links to relevant external documentation and sources of truth.

   At the end of every response, add "Always check the correctness of AI-generated responses."
   ```

1. Save the file. {% data variables.product.prodname_copilot_short %} will use these instructions when you ask questions in {% data variables.copilot.copilot_chat_short %}.

## Step 3: Use {% data variables.copilot.copilot_chat_short %} to learn

You're ready to start building real coding skills with {% data variables.product.prodname_copilot_short %}'s help!

Throughout your work on the project, engage in a long-running conversation with **{% data variables.copilot.copilot_chat_short %}**. Treat it as your **personal tutor**, asking questions as they arise and using it to navigate challenges or clarify concepts.

<a href="vscode://GitHub.Copilot-Chat" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline" aria-label="Open Copilot Chat in Visual Studio Code">
<span>Open {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}
</a><br></br>

{% data variables.copilot.copilot_chat_short %} is especially helpful for debugging your code. For step-by-step guidance, see [AUTOTITLE](/get-started/learning-to-code/learning-to-debug-with-github-copilot).
