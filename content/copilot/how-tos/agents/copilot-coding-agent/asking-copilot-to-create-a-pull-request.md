---
title: Asking Copilot to create a pull request
shortTitle: Create a PR from chat
intro: 'You can ask {% data variables.product.prodname_copilot_short %} to create a pull request from the Agents page or from {% data variables.copilot.copilot_chat_short %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=asking+copilot+to+create+a+pull+request&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/coding-agent/asking-copilot-to-create-a-pull-request
---

> [!NOTE]
> * {% data reusables.copilot.coding-agent.preview-note-text %}
> * For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} to work on a task from the Agents page on {% data variables.product.github %}, or from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs and {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_copilot_short %} will start working on the task, raise a pull request, then request a review from you when it's finished working. For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the Agents page

1. Navigate to the Agents page at [github.com/copilot/agents](https://github.com/copilot/agents).

    You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Type a prompt describing your request.

    For example, `Implement a user friendly message for common errors.`

  ![Screenshot of asking Copilot to create a pull request from the Agents page.](/assets/images/help/copilot/coding-agent/agents-page-input.png)

1. Click the **Send now** button or press <kbd>Return</kbd>.

    {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %}

> [!NOTE]
> * You can ask {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and on {% data variables.product.prodname_dotcom_the_website %}.

1. Open {% data variables.copilot.copilot_chat %}, in your IDE or on {% data variables.product.prodname_dotcom_the_website %}.
1. Type a prompt asking {% data variables.product.prodname_copilot_short %} to create a pull request, and giving details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `@github Create a PR to put backticks around file names and variables in output.`

   > [!IMPORTANT]
   > {% data reusables.copilot.coding-agent.use-chat-participant-in-vsc %}

   > [!TIP]
   > * To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.
   > * From {% data variables.copilot.copilot_chat_short %}, you can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to use the coding agent to create a pull request.

1. Click **Allow**.

   {% data variables.product.prodname_copilot_short %} will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Monitoring progress

You can view your current and past {% data variables.product.prodname_copilot_short %} sessions from the [Agents page](https://github.com/copilot/agents). See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs).

You can see what {% data variables.product.prodname_copilot_short %} is doing while it is working on a task by viewing the session logs. You can access the session logs by clicking the **View session** button in the timeline of {% data variables.product.prodname_copilot_short %}'s pull request.

From the session logs page, you can also stop {% data variables.product.prodname_copilot_short %} from working on a task by clicking **Stop session**.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)
