---
title: Using GitHub Copilot to create issues
shortTitle: Use Copilot to create issues
intro: 'Use {% data variables.product.prodname_copilot_short %} to quickly generate structured, high-quality issues from natural language or images, without filling out every field manually.'
versions:
  feature: copilot
topics:
  - Copilot
  - Issues
  - Project management
redirect_from:
  - /copilot/using-github-copilot/using-github-copilot-to-create-issues
---

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Creating issues manually can be repetitive and time-consuming. With {% data variables.product.prodname_copilot_short %}, you can create issues faster by prompting in natural language, or even by uploading a screenshot. {% data variables.product.prodname_copilot_short %} fills out the title, body, labels, assignees, and more, using your repository’s templates and structure.

You stay in control: review and refine what {% data variables.product.prodname_copilot_short %} suggests, or make changes directly in the issue form.

## Creating an issue with {% data variables.product.prodname_copilot_short %}

You can create issues from {% data variables.copilot.copilot_chat_short %}'s immersive view.

1. Go to the immersive view of {% data variables.copilot.copilot_chat_short %} ([https://github.com/copilot](https://github.com/copilot)).
1. At the bottom of the page, in the "Ask {% data variables.product.prodname_copilot_short %}" box, describe what you want to file.  Specify the repository you would like to create your issue in using the org/repository format. If you do not specify a repository, {% data variables.product.prodname_copilot_short %} will infer the repository based on the repository you last created an issue in. You can try:

   * "Create a feature request to add fuzzy matching to search."
   * "Log a bug for a 500 error when submitting the login form."
   * "Create a task and add a label for ‘needs design review’."

   > [!NOTE] You can only use {% data variables.product.prodname_copilot_short %} to create issues in repositories where you already have permission to create issues. This feature doesn't change your access or bypass repository permissions.

1. Or, you can use one of the following methods to include an image in your prompt:

   * Copy an image and paste it into the prompt box at the bottom of the page.
   * Click {% octicon "paperclip" aria-label="Add attachment" %} in the prompt box, then click **Image**. Browse to the image file you want to attach, select it and click **Open**.
   * Drag and drop an image file from your operating system's file explorer into the prompt box.

   After you paste or upload the image, you can add text to your prompt, for example: "Create an issue because this error appears when trying to reset a password."

1. {% data variables.product.prodname_copilot_short %} will draft an issue that includes:

   * A suggested title.
   * A formatted body (based on your repository’s template)

    Based on your prompt, {% data variables.product.prodname_copilot_short %} will also suggest metadata such as labels, assignee, and issue type.

1. Review the draft. You can:

   * Edit any part of the issue manually.
   * Ask {% data variables.product.prodname_copilot_short %} to make changes with a follow-up prompt.
   * Switch templates without losing your input.

1. Once the issue looks good, click **Create**.

{% data variables.product.prodname_copilot_short %} tailors its suggestions based on the repository where you're creating the issue. It selects the most relevant template for your prompt and applies associated metadata, like labels or issue type. If you choose a different template, {% data variables.product.prodname_copilot_short %} automatically reformats the content to match the new structure.

## Creating multiple issues at once

If your prompt includes multiple tasks or bugs, {% data variables.product.prodname_copilot_short %} can draft more than one issue at a time.

Each draft appears separately, and you can review and edit them individually. To publish the issues, click **Create** on each one you want to submit.

## Assigning issues to {% data variables.product.prodname_copilot_short %}

To assign an issue to {% data variables.product.prodname_copilot_short %}, you need to have {% data variables.copilot.copilot_coding_agent %} enabled. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/enabling-copilot-coding-agent).

You can assign the issue during creation in one of two ways:

* **Natural language:** Prompt {% data variables.product.prodname_copilot_short %} with something like “Assign this issue to {% data variables.product.prodname_copilot_short %}."
* **Manually:** Select "{% data variables.product.prodname_copilot_short %}" from the assignee list.

Once the issue is assigned and created, {% data variables.product.prodname_copilot_short %} will start working on it automatically. You’ll see a 👀 emoji reaction on the issue to indicate that {% data variables.product.prodname_copilot_short %} is working on it.
