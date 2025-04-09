---
title: Adding personal custom instructions for GitHub Copilot
shortTitle: Personal custom instructions
intro: 'Customize {% data variables.product.prodname_copilot_chat %} responses to match your personal preferences.'
versions:
  feature: copilot
topics:
  - Copilot
---

{% data reusables.copilot.personal-instructions-note %}

For an overview of the methods you can use to customize {% data variables.product.prodname_copilot_chat %} responses, see [AUTOTITLE](/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses?tool=webui).

## About personal custom instructions for {% data variables.product.prodname_copilot_chat %}

You can add custom instructions for {% data variables.product.prodname_copilot_chat %} in order to receive chat responses that are customized to your personal preferences, across your conversations on the {% data variables.product.github %} website. For example, you can choose to always have {% data variables.product.prodname_copilot_chat_short %} respond in a preferred language or with a particular style. Some examples of instructions you could add are:
* `Always respond in Spanish.`
* `Your style is a helpful colleague, minimize explanations but provide enough context to understand the code.`
* `Always provide examples in TypeScript.`

{% data reusables.copilot.custom-instructions-interactions-note %}

## Adding personal custom instructions

You can add personal custom instructions either in the Chat panel or in immersive mode. The same instructions will be applied in both modes.

1. In the top right of any page on {% data variables.product.github %}, either:
   * Click the **{% octicon "copilot" aria-label="Copilot" %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} panel.
   * Click {% octicon "triangle-down" aria-label="The downwards triangle icon" %} next to the **{% octicon "copilot" aria-label="Copilot" %}** icon, then click **Immersive** to open {% data variables.product.prodname_copilot_chat_short %} in the full-page, immersive mode.
1. Select the {% octicon "kebab-horizontal" aria-label="Open conversation options" %} dropdown menu at the top right of the Chat panel, or immersive page, then click **Personal instructions**.
1. Add natural language instructions to the text box.

   You can write your instructions in any format you prefer. For example, you can write them as a single block of text, each on a new line, or separated by blank lines.
1. Optionally, click {% octicon "light-bulb" aria-label="The light-bulb icon" %} to view templates you can use for common instructions. If you click on one of the boxes, such as "Communication", instructions will be added to the text box with placeholders, such as `{format}` that you can replace with your preferences.
1. Click **Save**. Your instructions are now active, and will stay active until you change or remove them.
