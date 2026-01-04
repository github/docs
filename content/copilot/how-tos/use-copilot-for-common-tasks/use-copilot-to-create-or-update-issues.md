---
title: Using GitHub Copilot to create or update issues
shortTitle: Use Copilot to create or update issues
intro: Use {% data variables.product.prodname_copilot_short %} to quickly generate structured, high-quality issues from natural language or images, without filling out every field manually.
permissions: Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.product.prodname_copilot_short %} to create issues or update existing issues. <br> <a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try {% data variables.product.prodname_copilot_short %} for free</span> {% octicon "link-external" height:16 %}</a>
versions:
  feature: copilot-create-issues
topics:
  - Copilot
  - Issues
  - Project management
redirect_from:
  - /copilot/using-github-copilot/using-github-copilot-to-create-issues
  - /copilot/how-tos/github-flow/using-github-copilot-to-create-issues
  - /copilot/how-tos/github-flow/use-copilot-to-create-issues
  - /copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-issues
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Creating or updating issues manually can be repetitive and time-consuming. With {% data variables.product.prodname_copilot_short %}, you can create or update issues faster by prompting in natural language, or even by uploading a screenshot. {% data variables.product.prodname_copilot_short %} fills out the title, body, labels, assignees, and more, using your repository’s issue forms or templates.

You stay in control of the process. You can review and refine what {% data variables.product.prodname_copilot_short %} suggests before you submit the new or updated issue.

## Creating an issue with {% data variables.product.prodname_copilot_short %}

You can create issues from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.github %}.

1. Go to {% data variables.copilot.copilot_chat_short %} ([https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)).
1. In the prompt box, describe the issue you want to create.

   If you contribute issues to multiple repositories, use the `repo-owner/repo-name` format to specify the target repository for this issue. If you don't specify a repository, {% data variables.product.prodname_copilot_short %} will infer the repository based on the repository you last created an issue in.

   For example:

   * {% prompt %}In OWNER/REPOSITORY, create a feature request to add fuzzy matching to search.{% endprompt %}
   * {% prompt %}Log a bug for a 500 error. This happens consistently when I try to log into the site.{% endprompt %}
   * {% prompt %}Create a task to change the application logo background to red and add the label "needs design review".{% endprompt %}
   * {% prompt %}In octo-org/octo-repo, create an issue and add relevant code snippets to improve the API response format.{% endprompt %}

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

For example: {% prompt %}In OWNER/REPOSITORY, create 3 issues: 1) DETAILS OF ONE TASK, 2) DETAILS OF ANOTHER TASK, 3) DETAILS OF A THIRD TASK{% endprompt %}

Each draft appears separately, and you can review and edit them individually. To publish the issues, click **Create** on each one you want to submit.

## Creating sub-issues

You can use {% data variables.product.prodname_copilot_short %} to draft multiple sub-issues.

For example:

`In octo-org/octo-repo, plan a new user dashboard. Break it down into an epic, and create sub-issues for each main feature and task.`

{% data variables.product.prodname_copilot_short %} generates a draft issue tree, with a parent issue at the top level and sub-issues beneath it.

You can review the issue tree, expand or collapse sub-issues, and edit the details of each issue.

Click the parent issue to view its details in the workbench. The parent issue displays a list of sub-issues, and you can click each one to view and edit its details in the workbench. From a sub-issue, use the "Parent" dropdown to navigate through the issue tree. You can also click **Review and create** at the top of the workbench to see the full issue tree and navigate directly to any issue.

{% data variables.product.prodname_copilot_short %} can modify the tree, by unlinking issues or by attaching new drafts.

For example, you can:
* Remove a sub-issue from the issue tree:
   `Remove sub-issue NAME_OF_ISSUE from the issue tree`
* Add an additional sub-issue to the issue tree:
   `Add an additional sub-issue with ISSUE_DETAILS to the issue tree`

Once you've finished editing the drafts and are ready to publish the issues, click **Review and create** then click **Create issues**.

## Updating an existing issue

You can use {% data variables.product.prodname_copilot_short %} to update existing issues in your repository.

For example:

`In octo-org/octo-repo, update issue #123 to add more details about the bug and steps to reproduce it. Also, change the label to "bug" and assign it to @username.`

{% data variables.product.prodname_copilot_short %} drafts the updated issue, which you can review and edit in the workbench. To publish the changes, click **Update**.

## Working with existing parent issues and sub-issues

You can use {% data variables.product.prodname_copilot_short %} to connect new issues with issues that already exist in your repository.

For example, you can:
* Add a sub-issue to an existing parent issue:
   `Create a sub-issue for octo-org/octo-repo issue #456.`
* Add a parent issue to an existing issue:
   `Create a parent issue for octo-org/octo-repo issue #456.`
* Add a parent issue to multiple existing issues:
   `Create a parent issue for octo-org/octo-repo issues #456, #457, and #458.`

The draft appears in the workbench, where you can review and edit it. To publish the issue, click **Review and create**, then click **Create issues**.

## Assigning issues to {% data variables.product.prodname_copilot_short %}

To assign an issue to {% data variables.product.prodname_copilot_short %}, you need to have {% data variables.copilot.copilot_coding_agent %} enabled. See [AUTOTITLE](/copilot/concepts/coding-agent/about-enabling-coding-agent).

You can assign the issue during creation in one of two ways:

* **Natural language:** Prompt {% data variables.product.prodname_copilot_short %} with something like `Assign this issue to {% data variables.product.prodname_copilot_short %}.`
* **Manually:** Select "{% data variables.product.prodname_copilot_short %}" from the assignee list.

Once the issue is assigned and created, {% data variables.product.prodname_copilot_short %} will start working on it automatically. You’ll see a 👀 emoji reaction on the issue to indicate that {% data variables.product.prodname_copilot_short %} is working on it.

## Further reading

* [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
* [AUTOTITLE](/copilot/tutorials/plan-a-project)
