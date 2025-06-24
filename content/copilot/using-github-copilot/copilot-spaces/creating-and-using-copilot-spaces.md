---
title: Creating and using Copilot Spaces
shortTitle: Create and use Copilot Spaces
intro: 'Create spaces to organize and centralize relevant content that grounds {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
---

{% data reusables.copilot.copilot-spaces.preview-note %}

1. To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces), and click **Create space**.
1. Give your space a name.
1. Choose whether the space is owned by you or by an organization you belong to. Organization-owned {% data variables.copilot.copilot_spaces_short %} can be shared using {% data variables.product.github %}’s built-in permission model.
1. Optionally, add a description. This does not affect the responses {% data variables.product.prodname_copilot_short %} gives in the space, but it can help others understand the context of the space.

   >[!NOTE] You can change the name and description of your space at any time by clicking **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit** in the top right corner of the space.

1. Click **Save** in the top right corner of the page.

## Adding context to {% data variables.copilot.copilot_spaces_short %}

You can add two types of context to your space:

* **Instructions**: Free text that describes what {% data variables.product.prodname_copilot_short %} should focus on within this space. Include its areas of expertise, what kinds of tasks it should help with, and what it should avoid. This helps {% data variables.product.prodname_copilot_short %} give more relevant responses based on your intent.

   For example:

   > You are a SQL generator. Your job is to take the sample queries and data schemas defined in the attached files and and generate SQL queries based on the user's goals.

* **Attachments**: This context will be used to provide more relevant answers to your questions. Additionally, {% data variables.copilot.copilot_spaces_short %} will always refer to the latest version of the code on the `main` branch of the repository.

  To add attachments, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add** to the right of "Attachments", then choose one of the following options:

  * **{% octicon "file-code" aria-hidden="true" aria-label="file-code" %} Add files, folders...**: You can add files and folders from your {% data variables.product.github %} repositories. This includes code files, documentation, and other relevant content that can help {% data variables.product.prodname_copilot_short %} understand the context of your space.
  * **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a text file...**: You can add free-text content, such as transcripts, notes, or any other relevant information that can help {% data variables.product.prodname_copilot_short %} understand the context of your space.
  * **{% octicon "paste" aria-hidden="true" aria-label="paste" %} Add via {% data variables.product.github %} URL...**: You can paste the URLs of the {% data variables.product.github %} content you want to add. This can include issues and pull requests.

## Using {% data variables.copilot.copilot_spaces_short %}

Once you've added context to your space, you can ask {% data variables.product.prodname_copilot_short %} questions in the chat interface. Your chat will be grounded in the context you've added.

You can also change the large language model (LLM) used for your space by selecting the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then clicking the AI model of your choice. For more information about choosing the right AI model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Next steps

* To learn more about how to use {% data variables.copilot.copilot_spaces_short %} to help you with development work, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
* To learn how to share your space with your team, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).
