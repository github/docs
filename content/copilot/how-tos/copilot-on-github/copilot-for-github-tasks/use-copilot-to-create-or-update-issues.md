---
title: Using GitHub Copilot to create or update issues
shortTitle: Use Copilot to create or update issues
intro: Use {% data variables.product.prodname_copilot_short %} to quickly generate structured, high-quality issues from natural language or images, without filling out every field manually.
versions:
  feature: copilot-create-issues
redirect_from:
  - /copilot/using-github-copilot/using-github-copilot-to-create-issues
  - /copilot/how-tos/github-flow/using-github-copilot-to-create-issues
  - /copilot/how-tos/github-flow/use-copilot-to-create-issues
  - /copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-issues
  - /copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-or-update-issues
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

{% data variables.product.prodname_copilot_short %} can create or update issues from a natural-language prompt or a screenshot. It fills in the title, body, labels, assignees, and more—using your repository's issue forms or templates when available. Review and refine every draft before you submit.

## Create an issue

{% data reusables.copilot.access-chat-instructions %}
1. In the prompt box, describe the issue you want to create. Use `repo-owner/repo-name` to target a specific repository.

   For example:

   * {% prompt %}In OWNER/REPOSITORY, create a feature request to add fuzzy matching to search.{% endprompt %}
   * {% prompt %}Log a bug for a 500 error. This happens consistently when I try to log into the site.{% endprompt %}
   * {% prompt %}Create a task to change the application logo background to red and add the label "needs design review".{% endprompt %}

   > [!NOTE] You can only create issues in repositories where you already have permission to do so.

1. Optionally, paste, drag, or attach an image to your prompt. Add text to describe the issue, for example: `Create an issue because this error appears when trying to reset a password.`

1. {% data variables.product.prodname_copilot_short %} drafts an issue with a suggested title, body, and metadata (labels, assignees, issue type). If your repository has issue forms or templates, {% data variables.product.prodname_copilot_short %} maps your prompt to the relevant fields.

1. Review the draft. Edit any field, choose a different template, or ask {% data variables.product.prodname_copilot_short %} to make changes with a follow-up prompt.

1. Click **Create**.

## Create multiple issues

If your prompt includes multiple tasks or bugs, {% data variables.product.prodname_copilot_short %} drafts each one separately.

For example: {% prompt %}In OWNER/REPOSITORY, create 3 issues: 1) DETAILS OF ONE TASK, 2) DETAILS OF ANOTHER TASK, 3) DETAILS OF A THIRD TASK{% endprompt %}

Review and edit each draft individually, then click **Create** to publish.

## Create sub-issues

{% data variables.product.prodname_copilot_short %} can break a task into a parent issue with sub-issues.

For example:

`In octo-org/octo-repo, plan a new user dashboard. Break it down into an epic, and create sub-issues for each main feature and task.`

{% data variables.product.prodname_copilot_short %} generates a draft issue tree with a parent issue and sub-issues beneath it. Expand or collapse sub-issues, edit details, and use follow-up prompts to add or remove sub-issues.

When you're ready, click **Review and create**, then click **Create issues**.

## Update an existing issue

Prompt {% data variables.product.prodname_copilot_short %} to modify an issue that already exists. For example:

`In octo-org/octo-repo, update issue #123 to add more details about the bug and steps to reproduce it. Also, change the label to "bug" and assign it to @username.`

Review the draft in the workbench, then click **Update**.

## Link to existing parent or sub-issues

{% data variables.product.prodname_copilot_short %} can connect new issues to ones that already exist. For example:

* `Create a sub-issue for octo-org/octo-repo issue #456.`
* `Create a parent issue for octo-org/octo-repo issue #456.`
* `Create a parent issue for octo-org/octo-repo issues #456, #457, and #458.`

Review the draft in the workbench, then click **Review and create** > **Create issues**.

## Assign an issue to {% data variables.product.prodname_copilot_short %}

With {% data variables.copilot.copilot_cloud_agent %} enabled, you can assign an issue to {% data variables.product.prodname_copilot_short %} during creation. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management).

* **Natural language:** Include `Assign this issue to {% data variables.product.prodname_copilot_short %}.` in your prompt.
* **Manually:** Select "{% data variables.product.prodname_copilot_short %}" from the assignee list.

{% data variables.product.prodname_copilot_short %} starts working on the issue automatically after creation.

## Further reading

* [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
* [AUTOTITLE](/copilot/tutorials/plan-a-project)
