---
title: Using the Copilot coding agent logs
shortTitle: Use the Copilot logs
intro: "You can use the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach"
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=using+the+copilot+coding+agent+logs&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-the-copilot-coding-agent-logs
---

{% data reusables.copilot.coding-agent.preview-note %}

## Introduction

After you assign an issue to {% data variables.product.prodname_copilot_short %}, or use {% data variables.product.prodname_copilot_chat_short %} to ask {% data variables.product.prodname_copilot_short %} to create a pull request, {% data variables.product.prodname_copilot_short %} works autonomously to complete the task. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

During or after an agent session, you can inspect the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach to your problem.

## Using the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach

To view the session logs, click **View session** in the pull request timeline.

![Screenshot of a section of a pull request with the 'View session' button highlighted.](/assets/images/help/copilot/coding-agent/log-view-session.png)

In the session logs, you can see {% data variables.product.prodname_copilot_short %}'s internal monologue and the tools it used to understand your repository, make changes and validate its work.

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} has its own development environment, including the ability to run automated tests and linters, to validate its changes before it pushes.

## Stopping a {% data variables.product.prodname_copilot_short %} session

You can stop {% data variables.product.prodname_copilot_short %} from continuing to work on a task by clicking **Stop session** in the session log viewer.

![Screenshot of the log viewer with the 'Stop session' button highlighted.](/assets/images/help/copilot/coding-agent/log-stop-session.png)

Reasons you might want to stop a session include:

* {% data variables.product.prodname_copilot_short %} appears to be going in a wrong direction, and you want to stop it and give it more clarity.
* You made a mistake in your description of the required work, and you've decided to start over.
* You've realized that the change you asked for doesn't need to be made, so you want to stop {% data variables.product.prodname_copilot_short %} from doing any more work on it.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)
