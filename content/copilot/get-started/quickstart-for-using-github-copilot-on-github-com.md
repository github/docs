---
title: Quickstart for using GitHub Copilot on GitHub.com
shortTitle: Copilot on GitHub.com
intro: 'Understand code and work faster by asking questions and assigning coding tasks to {% data variables.copilot.copilot_cloud_agent %} without leaving {% data variables.product.github %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
redirect_from:
  - /copilot/get-started/quickstart
contentType: get-started
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} is built into {% data variables.product.github %}, so you can use it without installing anything.

This quickstart shows how to ask questions about code and assign a coding task to {% data variables.copilot.copilot_cloud_agent %}. It takes about ten minutes.

## Step 1: Ask {% data variables.product.prodname_copilot_short %} about a file

1. Try these prompts to explore specific files in the `github/docs` repository.

   ```copilot prompt
   In `github/docs`, look at `/package.json` and explain what this file does.
   ```

   ```copilot prompt
   In `github/docs`, look at `/src/color-schemes/tests/color-mode-script.ts` and share how I could improve this code.
   ```

Next, open a file in a repository of your choice and ask {% data variables.product.prodname_copilot_short %} questions about it.

1. Navigate to any repository you want to explore. It doesn't need to be your own.
1. Open any file in the repository.
1. Click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) at the top right of the file view.
1. In the prompt box, type a question and press <kbd>Enter</kbd>. For example:
   * {% prompt %}Explain what this file does.{% endprompt %}
   * {% prompt %}How could I improve this code?{% endprompt %}
   * {% prompt %}What tests would cover this function?{% endprompt %}
   * {% prompt %}What was the last change and why was it made?{% endprompt %}

   {% data variables.product.prodname_copilot_short %} responds in the chat panel.
1. Ask follow-up questions to explore the code further. For example:
   * {% prompt %}Tell me more{% endprompt %} to get {% data variables.product.prodname_copilot_short %} to expand on its last comment
   * Ask exploratory questions about a repository
   * Explain the changes in a pull request
   * Ask a question about a specific issue or commit

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github).

## Step 2: Assign an issue to {% data variables.product.prodname_copilot_short %}

> [!NOTE]
> To use {% data variables.copilot.copilot_cloud_agent %} in this quickstart, upgrade to a paid plan such as [{% data variables.copilot.copilot_pro_short %}](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).
>
> Without access to a paid plan, you can instead learn about the remaining steps by using {% data variables.product.prodname_copilot_short %} in your preferred editor. See [AUTOTITLE](/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).

{% data variables.copilot.copilot_cloud_agent %} can work on coding tasks autonomously. Assigning an issue is the easiest way to start, and {% data variables.product.prodname_copilot_short %} creates a pull request when it finishes.

1. In a personal repository you have write access to, enable {% data variables.copilot.copilot_cloud_agent %} from your [{% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

   * To enable {% data variables.copilot.copilot_cloud_agent %} for repositories in an organization or enterprise instead, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot) for further instructions.

1. Find an existing issue you'd like {% data variables.product.prodname_copilot_short %} to work on, or create a new issue.
1. Open the issue. In the right sidebar of the issue, click **Assignees**.
1. Click **Copilot** from the assignees list.
1. Optionally, add context in the **Optional prompt** field—for example, coding patterns, files to modify, or testing requirements.

{% data variables.product.prodname_copilot_short %} uses the issue title, description, and existing comments. Add follow-up information directly to the pull request after it opens.

## Step 3: Review the resulting pull request

When {% data variables.product.prodname_copilot_short %} finishes the task, it opens a pull request and requests your review.

1. Open the pull request that {% data variables.product.prodname_copilot_short %} created.
1. Review the diff and verify the changes match what you intended.
1. To request changes, mention `@copilot` in a comment on the pull request, or push commits directly to the branch.
1. When you're satisfied with the changes, merge the pull request.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output).

## Next steps

* **Experiment with using {% data variables.copilot.copilot_cloud_agent %}** for research and multitasking. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/overview)
