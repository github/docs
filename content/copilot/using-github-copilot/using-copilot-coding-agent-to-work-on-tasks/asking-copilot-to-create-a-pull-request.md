---
title: Asking Copilot to create a pull request
shortTitle: Creating a PR from chat
intro: 'You can use a {% data variables.product.prodname_copilot_chat_short %} prompt to ask {% data variables.product.prodname_copilot_short %} to create a pull request.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=asking+copilot+to+create+a+pull+request&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/asking-copilot-to-create-a-pull-request
---

> [!NOTE]
> * If you have access to {% data variables.copilot.copilot_coding_agent %}, you can create a pull request from {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and on {% data variables.product.prodname_dotcom_the_website %}.
> * {% data reusables.copilot.coding-agent.preview-note-text %}

## Introduction

Often, when you are working on a project, you might notice a change you want to make, but the change doesn't directly relate to your current task. You might raise a {% data variables.product.github %} issue to record that a change needs to be made—or perhaps, forget the change and move on.

Instead—if {% data variables.copilot.copilot_coding_agent %} is available—you can ask {% data variables.product.prodname_copilot_short %} to make the change for you. {% data variables.product.prodname_copilot_short %} will start working on the change in the background and, when it's done, request you to review the pull request it raises.

For information on making {% data variables.copilot.copilot_coding_agent %} available, see [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent).

## Creating a pull request from {% data variables.product.prodname_copilot_chat_short %}

1. Open {% data variables.product.prodname_copilot_chat %}, in your IDE, or while viewing a file on {% data variables.product.prodname_dotcom_the_website %}.
1. Type a prompt asking {% data variables.product.prodname_copilot_short %} to create a pull request, and giving details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `@github Create a PR to put backticks around file names and variables in output.`

   > [!IMPORTANT]
   > {% data reusables.copilot.coding-agent.use-chat-participant-in-vsc %}

   > [!TIP]
   > To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} will respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Monitoring progress

You can see what {% data variables.product.prodname_copilot_short %} is doing while it is working on a task by viewing the session logs. See [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-the-copilot-coding-agent-logs).

You can also stop {% data variables.product.prodname_copilot_short %} from working on a task by clicking **Stop session** in the session logs.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/about-assigning-tasks-to-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/best-practices-for-using-copilot-to-work-on-tasks)
* [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)
