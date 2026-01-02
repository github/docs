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
  - /copilot/how-tos/github-flow/using-github-copilot-to-create-issues
  - /copilot/how-tos/github-flow/use-copilot-to-create-issues
contentType: how-tos
---

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Creating issues manually can be repetitive and time-consuming. With {% data variables.product.prodname_copilot_short %}, you can create issues faster by prompting in natural language, or even by uploading a screenshot. {% data variables.product.prodname_copilot_short %} fills out the title, body, labels, assignees, and more, using your repository’s issue forms or templates.

You stay in control of the process. You can review and refine what {% data variables.product.prodname_copilot_short %} suggests before you submit the new issue.

## Creating an issue with {% data variables.product.prodname_copilot_short %}

You can create issues from {% data variables.copilot.copilot_chat_short %}'s immersive view.

1. Go to the immersive view of {% data variables.copilot.copilot_chat_short %} ([https://github.com/copilot](https://github.com/copilot)).
1. In the prompt box, describe the issue you want to create.

   If you contribute issues to multiple repositories, use the `organization/repository` format to specify the target repository for this issue. If you don't specify a repository, {% data variables.product.prodname_copilot_short %} will infer the repository based on the repository you last created an issue in.

   For example:

   * `In octo-org/octo-repo, create a feature request to add fuzzy matching to search.`
   * `Log a bug for a 500 error. This happens consistently when I try to log into the site.`
   * `Create a task to change the application logo background to red and add the label "needs design review".`

   > [!NOTE] You can only use {% data variables.product.prodname_copilot_short %} to create issues in repositories where you already have permission to create issues. This feature doesn't change your access or bypass repository permissions.

1. Alternatively, you can use one of the following methods to include an image in your prompt:

   * Copy an image and paste it into the prompt box at the bottom of the page.
   * Click {% octicon "paperclip" aria-label="Add attachment" %} in the prompt box, then click **Image**. Browse to the image file you want to attach, select it and click **Open**.
   * Drag and drop an image file from your operating system's file explorer into the prompt box.

   After you paste or upload the image, you can add text to your prompt, for example: `Create an issue because this error appears when trying to reset a password.`

1. {% data variables.product.prodname_copilot_short %} drafts an issue that includes:

   * A suggested title.
   * Details of the required changes.

     If your repository has issue forms or templates, {% data variables.product.prodname_copilot_short %} will choose an appropriate form or template based on your prompt. If there are no forms or templates, {% data variables.product.prodname_copilot_short %} will create a basic issue body for the details of the issue.

     If {% data variables.product.prodname_copilot_short %} uses an issue form, it will break up the information in your prompt into the relevant fields of the form, without losing any data. {% data variables.product.prodname_copilot_short %} will ask you to provide additional context if there are fields it does not have enough information to fill out.

   Based on your prompt, {% data variables.product.prodname_copilot_short %} can also suggest metadata such as labels, assignees, and issue type.

1. Review the draft. You can:

   * Edit any part of the issue manually.
   * Choose a different issue form or template without losing your input. {% data variables.product.prodname_copilot_short %} reformats the content according to the form or template you choose.
   * Ask {% data variables.product.prodname_copilot_short %} to make changes with a follow-up prompt.

1. Once the issue looks good, click **Create**.

## Creating multiple issues at once

If your prompt includes multiple tasks or bugs, {% data variables.product.prodname_copilot_short %} can draft more than one issue at a time.

For example:

`In octo-org/octo-repo, create 3 issues: 1) DETAILS OF ONE TASK, 2) DETAILS OF ANOTHER TASK, 3) DETAILS OF A THIRD TASK`

Each draft appears separately, and you can review and edit them individually. To publish the issues, click **Create** on each one you want to submit.

## Assigning issues to {% data variables.product.prodname_copilot_short %}

To assign an issue to {% data variables.product.prodname_copilot_short %}, you need to have {% data variables.copilot.copilot_coding_agent %} enabled. See [AUTOTITLE](/copilot/concepts/coding-agent/about-enabling-coding-agent).

You can assign the issue during creation in one of two ways:

* **Natural language:** Prompt {% data variables.product.prodname_copilot_short %} with something like “Assign this issue to {% data variables.product.prodname_copilot_short %}."
* **Manually:** Select "{% data variables.product.prodname_copilot_short %}" from the assignee list.

Once the issue is assigned and created, {% data variables.product.prodname_copilot_short %} will start working on it automatically. You’ll see a 👀 emoji reaction on the issue to indicate that {% data variables.product.prodname_copilot_short %} is working on it.

## Further reading

* [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
