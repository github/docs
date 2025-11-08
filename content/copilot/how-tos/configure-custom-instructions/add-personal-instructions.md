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

For an overview of the methods you can use to customize {% data variables.copilot.copilot_chat %} responses, see [AUTOTITLE](/copilot/concepts/about-customizing-github-copilot-chat-responses?tool=webui).

## About personal custom instructions for {% data variables.copilot.copilot_chat %}

You can add custom instructions for {% data variables.copilot.copilot_chat %} in order to receive chat responses that are customized to your personal preferences, across your conversations on the {% data variables.product.github %} website. For example, you can choose to always have {% data variables.copilot.copilot_chat_short %} respond in a preferred language or with a particular style. Some examples of instructions you could add are:
* `Always respond in Spanish.`
* `Your style is a helpful colleague, minimize explanations but provide enough context to understand the code.`
* `Always provide examples in TypeScript.`

> [!NOTE]
> * {% data reusables.copilot.custom-instructions-chat-precedence %}
> * {% data reusables.copilot.custom-instructions-conflict %}

## Adding personal custom instructions

You can add personal custom instructions in {% data variables.copilot.copilot_chat_short %}'s immersive view.

1. Open [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. In the bottom left corner, click your profile picture, then click **{% octicon "note" aria-hidden="true" aria-label="note" %} Personal instructions**.
1. Add natural language instructions to the text box.

   You can write your instructions in any format you prefer. For example, you can write them as a single block of text, each on a new line, or separated by blank lines.
1. Optionally, click {% octicon "light-bulb" aria-label="The light-bulb icon" %} to view templates you can use for common instructions. If you click on one of the boxes, such as "Communication", instructions will be added to the text box with placeholders, such as `{format}` that you can replace with your preferences.
1. Click **Save**. Your instructions are now active, and will stay active until you change or remove them.

{% note %}

Did you successfully add personal custom instructions?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}
