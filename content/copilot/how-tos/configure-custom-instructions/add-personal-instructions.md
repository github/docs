---
title: Adding personal custom instructions for GitHub Copilot
shortTitle: Add personal instructions
intro: 'Customize {% data variables.copilot.copilot_chat %} responses to match your personal preferences.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/adding-personal-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/add-personal-instructions
contentType: how-tos
category: 
  - Configure Copilot
---

{% data reusables.copilot.personal-instructions-note %}

You can customize {% data variables.copilot.copilot_chat %} responses in several ways. For an overview, see [AUTOTITLE](/copilot/concepts/about-customizing-github-copilot-chat-responses?tool=webui).

## About personal custom instructions for {% data variables.copilot.copilot_chat_short %}

Add custom instructions to receive personalized chat responses. Your instructions apply to all your conversations on the {% data variables.product.github %} website. Custom instructions let you specify preferences such as your preferred language or response style. 

Examples of instructions you can add:

* `Always respond in Spanish.`
* `Use a helpful, collegial tone. Keep explanations brief, but provide enough context to understand the code.`
* `Always provide examples in TypeScript.`

> [!NOTE]
> * {% data reusables.copilot.custom-instructions-chat-precedence %}
> * {% data reusables.copilot.custom-instructions-conflict %}

## Adding personal custom instructions

To add personal custom instructions in {% data variables.copilot.copilot_chat_short %} on {% data variables.product.github %}:

1. Open [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. In the bottom left corner, click your profile picture. Then click **{% octicon "note" aria-hidden="true" aria-label="note" %} Personal instructions**.
1. Add natural language instructions to the text box.
  
   Use any format. For example, a single block of text, each instruction on a new line, or instructions separated by blank lines.

1. Optionally, use a template for common instructions. Click {% octicon "light-bulb" aria-label="The light-bulb icon" %} and select a template. 

   When you select a template, placeholder text appears. Replace placeholders like `{format}` with your preferences.
1. Click **Save**.

Your instructions are now active. They will remain active until you change or remove them.

{% note %}

Did you successfully add personal custom instructions?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Further reading

* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
