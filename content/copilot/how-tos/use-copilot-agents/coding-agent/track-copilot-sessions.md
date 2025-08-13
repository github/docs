---
title: Tracking GitHub Copilot's sessions
shortTitle: Track Copilot sessions
intro: 'You can use the Agents page, {% data variables.product.prodname_vscode %} and session logs to track {% data variables.product.prodname_copilot_short %}''s progress and understand its approach.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=using+the+copilot+coding+agent+logs&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-the-copilot-coding-agent-logs
  - /copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs
  - /copilot/how-tos/agents/copilot-coding-agent/using-the-copilot-coding-agent-logs
  - /copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions
  - /copilot/how-tos/agents/copilot-coding-agent/track-copilot-sessions
  - /copilot/how-tos/agents/coding-agent/track-copilot-sessions
contentType: how-tos
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}

## Introduction

After you give {% data variables.product.prodname_copilot_short %} a task, it works autonomously in the background to complete it. See [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

The [Agents page](https://github.com/copilot/agents) provides an overview of your agent sessions across repositories. From this page, you can kick off new tasks and track {% data variables.product.prodname_copilot_short %}'s progress.

You can also track {% data variables.product.prodname_copilot_short %}'s sessions in a specific repository from {% data variables.product.prodname_vscode %}.

During or after an agent session, you can inspect the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach to your problem.

## Tracking agent sessions from the Agents page

You can see a list of your running and past agent sessions on the Agents page at [github.com/copilot/agents](https://github.com/copilot/agents).

You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

For each session listed below the prompt field, you can see its status at a glance, or click on it to navigate to the linked pull request.

To view the session logs, click through to the pull request in the list, then find the "{% data variables.product.prodname_copilot_short %} started work..." event in the timeline, and then click **View session**.

![Screenshot of a section of a pull request with the 'View session' button highlighted.](/assets/images/help/copilot/coding-agent/log-view-session.png)

You can also start new agent sessions from this page. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request).

## Tracking sessions from {% data variables.product.prodname_vscode %}

You can see a list of your running and past agent sessions for a specific repository in {% data variables.product.prodname_vscode %} with the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github).

Once you've installed the extension, you can see {% data variables.product.prodname_copilot_short %}'s sessions by clicking the **{% data variables.product.github %}** button in the sidebar.

For each session listed, you can see its status at a glance, or click on it to navigate to the pull request within {% data variables.product.prodname_vscode %}.

To view the session logs, click on the pull request in the list, then click **View Session**.

You can also start new agent sessions from {% data variables.product.prodname_vscode %}. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-code).

## Using the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach

You can dive into {% data variables.product.prodname_copilot_short %}'s session logs in {% data variables.product.github %} or {% data variables.product.prodname_vscode %} to understand how it approached your task.

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

* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)
