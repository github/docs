---
title: Creating GitHub Copilot Spaces
shortTitle: Create Copilot Spaces
intro: 'Create spaces to organize and centralize relevant content that grounds {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/how-tos/provide-context/use-copilot-spaces/create-and-use-copilot-spaces
  - /copilot/using-github-copilot/copilot-spaces/creating-and-using-copilot-spaces
  - /copilot/how-tos/context/copilot-spaces/creating-and-using-copilot-spaces
  - /copilot/how-tos/context/copilot-spaces/create-and-use-copilot-spaces
  - /copilot/how-tos/context/use-copilot-spaces/create-and-use-copilot-spaces
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

For an overview of {% data variables.copilot.copilot_spaces %}, see [AUTOTITLE](/copilot/concepts/about-organizing-and-sharing-context-with-copilot-spaces).

## Creating a space

1. To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text), and click **Create space**.
1. Give your space a name.
1. Choose whether the space is owned by you or by an organization you belong to. Organization-owned {% data variables.copilot.copilot_spaces_short %} can be shared using {% data variables.product.github %}’s built-in permission model.
1. Click **Create Space**.
1. Optionally, once you are in the space, under the space name, add a description. This does not affect the responses {% data variables.product.prodname_copilot_short %} gives in the space, but it can help others understand the context of the space.

   >[!NOTE] You can change the name and description of your space at any time by hovering over them and clicking **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %}**.

## Adding context to a space

You can add two types of context to your space:

* **Instructions**: Free text that describes what {% data variables.product.prodname_copilot_short %} should focus on within this space. Include its areas of expertise, what kinds of tasks it should help with, and what it should avoid. This helps {% data variables.product.prodname_copilot_short %} give more relevant responses based on your intent.

   For example:

   > You are a SQL generator. Your job is to take the sample queries and data schemas defined in the attached files and generate SQL queries based on the user's goals.

* **Sources**: This context will be used to provide more relevant answers to your questions. Additionally, {% data variables.copilot.copilot_spaces_short %} will always refer to the latest version of the code on the `main` branch of the repository.

  To add sources, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add sources**, then choose one of the following options:

  * **{% octicon "file-code" aria-hidden="true" aria-label="file-code" %} Add files and repositories**: You can add files, folders, and entire {% data variables.product.github %} repositories. When you add a repository, {% data variables.product.prodname_copilot_short %} searches its contents to find relevant information, but adding specific files or folders that are most relevant to your work will give you the best results. This can include code files, documentation, and other content that helps {% data variables.product.prodname_copilot_short %} understand the context of your space.
  * **{% octicon "link" aria-hidden="true" aria-label="link" %} Link files, pull requests, and issues**: You can paste the URLs of the {% data variables.product.github %} content, including pull requests and issues.
  * **{% octicon "upload" aria-hidden="true" aria-label="upload" %} Upload a file**: You can upload files directly from your local machine. This includes images, text files, rich documents, and spreadsheets.
  * **{% octicon "paste" aria-hidden="true" aria-label="paste" %} Add text content**: You can type or paste free-text content, such as transcripts, notes, or any other relevant information that can help {% data variables.product.prodname_copilot_short %} understand the context of your space.

## Choosing repositories or files as context

When adding sources to your space, you can choose to attach entire repositories or individual files. Understanding how each option works can help you get the best results from {% data variables.product.prodname_copilot_short %}.

* **Attach a repository**: When you attach a repository, {% data variables.product.prodname_copilot_short %} doesn't load the entire project into memory. Instead, it searches the repository and retrieves only the most relevant content needed to answer your question. This is recommended for large-scale use cases (for example, answering questions across all documentation in a repository).

* **Attach individual files**: When you attach a file, its full contents are loaded into {% data variables.product.prodname_copilot_short %}'s context window and considered for every query in that space. This is best when you want {% data variables.product.prodname_copilot_short %} to consistently prioritize a specific document or small set of files.

## Adding context as you're working

You can add files to a space directly from the code view on {% data variables.product.github %}, so you don't need to break your flow when building context for your space.

1. At the top of any file in the code view, click **{% octicon "space" aria-label="Add to space" %}**.

   ![Screenshot of a file in the code view. The "Add to space" icon is highlighted in orange.](/assets/images/help/copilot/add-to-copilot-space.png)

1. From the dropdown, select the space you want to add the file to, or create a new space.

## Next steps

* To learn more about using {% data variables.copilot.copilot_spaces_short %} in {% data variables.product.github %} and your IDE, see [AUTOTITLE](/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces).
* To learn more about how to use {% data variables.copilot.copilot_spaces_short %} to help you with development work, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
* To learn how to share your space with your team, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).
