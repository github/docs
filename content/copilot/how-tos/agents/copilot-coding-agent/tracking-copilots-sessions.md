---
title: Tracking Copilot's sessions
shortTitle: Track Copilot sessions
intro: "You can use the Agents page and session logs to track {% data variables.product.prodname_copilot_short %}'s progress and understand its approach."
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=using+the+copilot+coding+agent+logs&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-the-copilot-coding-agent-logs
  - /copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs
  - /copilot/how-tos/agents/copilot-coding-agent/using-the-copilot-coding-agent-logs
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

After you give {% data variables.product.prodname_copilot_short %} a task, it works autonomously in the background to complete it. See [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

The [Agents page](https://github.com/copilot/agents) provides an overview of your agent sessions across repositories. From this page, you can kick off new tasks and track {% data variables.product.prodname_copilot_short %}'s progress.

During or after an agent session, you can inspect the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach to your problem.

## Tracking agent sessions from the Agents page

You can see a list of your running and past agent sessions on the Agents page at [github.com/copilot/agents](https://github.com/copilot/agents).

You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

![Screenshot of the Agents page with several sessions, including one currently in progress.](/assets/images/help/copilot/coding-agent/agents-page.png)

For each session listed below the prompt field, you can see its status at a glance, or click on it to navigate to the linked pull request.

You can also start new agent sessions from this page. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request).

## Using the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach

You can dive into {% data variables.product.prodname_copilot_short %}'s session logs to understand how it approached your task.

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
