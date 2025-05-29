---
title: Creating and using Copilot Spaces
shortTitle: Create and use Copilot Spaces
intro: 'Create spaces to organize and centralize relevant content that grounds {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.product.prodname_copilot_spaces_short %}.'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
---

{% data reusables.copilot.copilot-spaces.preview-note %}

1. To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces), and click **Create space**.
1. Give your space a name.
1. Choose whether the space is owned by you or by an organization you belong to. Organization-owned {% data variables.product.prodname_copilot_spaces_short %} can be shared using {% data variables.product.github %}’s built-in permission model.
1. Optionally, add a description to help others understand the purpose of the space.
1. Click **Create**.

## Adding context to {% data variables.product.prodname_copilot_spaces_short %}

You can add two types of context to your space:

* **Instructions**: Free text that describes what {% data variables.product.prodname_copilot_short %} should focus on within this space. Include its areas of expertise, what kinds of tasks it should help with, and what it should avoid. This helps {% data variables.product.prodname_copilot_short %} give more relevant responses based on your intent.

   For example:

   > You are a SQL generator. Your job is to take the sample queries and data schemas defined in the attached files and and generate SQL queries based on the user's goals.

* **References**: You can add any code hosted in {% data variables.product.github %} repositories, including public and private repositories. You can also add free-text content, such as transcripts or notes.

   >[!TIP] You don’t need formal docs to get value from {% data variables.product.prodname_copilot_spaces_short %}. Try pasting in a Slack thread, a video call summary, or even bullet-point notes.

This context will be used to provide more relevant answers to your questions. Additionally, {% data variables.product.prodname_copilot_spaces_short %} will always refer to the latest version of the code on the `main` branch of the repository.

## Using {% data variables.product.prodname_copilot_spaces_short %}

Once you've added context to your space, you can ask {% data variables.product.prodname_copilot_short %} questions in the chat interface. Your chat will be grounded in the context you've added.

You can also change the large language model (LLM) used for your space by selecting the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then clicking the AI model of your choice. For more information about choosing the right AI model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Next steps

* To learn more about how to use {% data variables.product.prodname_copilot_spaces_short %} to help you with development work, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
* To learn how to share your space with your team, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).
