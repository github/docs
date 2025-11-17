---
title: Tracking GitHub Copilot's sessions
shortTitle: Track Copilot sessions
intro: 'You can use the agents panel or page, {% data variables.product.prodname_vscode %}, JetBrains IDEs, the {% data variables.product.prodname_cli %}, Raycast and session logs to track {% data variables.product.prodname_copilot_short %}''s progress and understand its approach.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
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
category: 
  - Author and optimize with Copilot
---

## Introduction

After you give {% data variables.product.prodname_copilot_short %} a task, it works autonomously in the background to complete it. See [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

The agents panel, [agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text), the {% data variables.product.prodname_cli %}, and {% data variables.product.prodname_copilot %} extension for Raycast provide an overview of your agent sessions across repositories. You can use them to kick off new tasks and track {% data variables.product.prodname_copilot_short %}'s progress.

You can also track {% data variables.product.prodname_copilot_short %}'s sessions in a specific repository from {% data variables.product.prodname_vscode %}.

During or after an agent session, you can inspect the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach to your problem.

## Tracking agent sessions from the agents tab

You can see a list of your running and past agent sessions in the agents panel, available from every page on {% data variables.product.github %}, or on the dedicated agents tab. Agent sessions appear in your sessions list if you started the session or prompted {% data variables.product.prodname_copilot_short %} to work on another user's session.

To open the [agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text), click {% octicon "agent" aria-label="The Agents icon" %} to open the agents panel in the navigation bar on any page, then click **View all**.

Each session displays its status. Click on a session to open the session log and overview, where you can monitor the agent's progress, token usage, session count, and session length.

You can start new agent sessions from the tab. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request).

## Tracking agent sessions from the {% data variables.product.prodname_cli %}

> [!NOTE]
> The `agent-task` command set is only available in v2.80.0 or later of the {% data variables.product.prodname_cli %}. This command set is a {% data variables.release-phases.public_preview %} and is subject to change.

You can see a list of your running and past agent sessions from the {% data variables.product.prodname_cli %} with the `gh agent-task list` command. The output will show a list of your recent sessions.

To see more information on a specific session, use the `gh agent-task view` command. For example, to view information about the session associated with pull request #123 in the `monalisa/bookstore` repository, run `gh agent-task view --repo monalisa/bookstore 123`.

To view the session logs, add the `--log` option. Optionally, use the `--follow` option to stream live logs as the agent works.

To see all of the available options, run `gh agent-task list --help` or `gh agent-task view --help`.

## Tracking agent sessions from Raycast

{% data reusables.copilot.coding-agent.raycast-intro %}

{% data reusables.copilot.coding-agent.raycast-setup %}
1. Open Raycast, search for "{% data variables.product.prodname_copilot_short %}," find the **View Tasks** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with {% data variables.product.github %}**, then complete the authentication flow. Raycast will re-open.
1. You'll see a list of your tasks. To navigate to the linked pull request, press <kbd>Enter</kbd>. To view the session logs, press <kbd>Command</kbd>+<kbd>L</kbd>.

> [!NOTE]
> If you are unable to see some tasks in Raycast, the organization that owns the repository may have enabled {% data variables.product.prodname_oauth_app %} access restrictions. To learn how to request approval for the "{% data variables.product.prodname_copilot %} for Raycast" {% data variables.product.prodname_oauth_app %}, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps).

You can also start new agent sessions from Raycast. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#asking-copilot-to-create-a-pull-request-from-raycast).

## Tracking sessions from {% data variables.product.prodname_vscode %}

You can see a list of your running and past agent sessions for a specific repository in {% data variables.product.prodname_vscode %} with the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github).

Once you've installed the extension, you can see {% data variables.product.prodname_copilot_short %}'s sessions by clicking the **{% data variables.product.github %}** button in the sidebar.

For each session listed, you can see its status at a glance, or click on it to navigate to the pull request within {% data variables.product.prodname_vscode %}.

To view the session logs, click on the pull request in the list, then click **View Session**.

You can also start new agent sessions from {% data variables.product.prodname_vscode %}. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-code).

To directly open agent sessions in {% data variables.product.prodname_vscode_shortname %}, click the **Open in {% data variables.product.prodname_vscode_shortname %}** option on the agents tab.

> [!NOTE]
> Opening a session in {% data variables.product.prodname_vscode_shortname %} is currently only available in {% data variables.product.prodname_vscode_shortname %} Insiders.

## Tracking sessions from JetBrains IDEs

> [!NOTE]
> {% data variables.copilot.copilot_coding_agent %} in JetBrains IDEs is in {% data variables.release-phases.public_preview %}, and subject to change.

You can see a list of your running and past agent sessions for a project in JetBrains IDEs with the {% data variables.copilot.copilot_chat %} extension. See [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension?tool=jetbrains).

You can see all of {% data variables.product.prodname_copilot_short %}'s sessions by clicking the **GitHub Coding Agent Jobs** button in the sidebar or by clicking the **Open Job List** button after delegating a task to {% data variables.product.prodname_copilot_short %} from {% data variables.copilot.copilot_chat %}.

For each session listed, you can see its status at a glance. Click **Open in Browser** to open the pull request in your browser, or right-click on a running job then click **Cancel Job** to cancel.

{% data variables.product.prodname_copilot_short %} will also notify you when an agent job has started and finished.

## Tracking sessions from {% data variables.product.prodname_mobile %}

You can see a list of your running and past pull requests generated by agents in {% data variables.product.prodname_mobile %}.

1. In the "Agents" section on the {% data variables.product.prodname_mobile %} Home page, tap **Agent Tasks**.

   A list of the currently open pull requests, that you asked {% data variables.product.prodname_copilot_short %} to generate, is displayed.

1. Use the buttons at the top of the list to filter the list of pull requests.

   For example, to show only merged tasks, tap **Open** and then, in the dropdown, tap **Merged**.

   <img width=350rem src="/assets/images/help/copilot/coding-agent/mobile-status-dropdown.png" alt="Screenshot of the status dropdown list with a check mark against 'Open'." />

## Using the session logs to understand {% data variables.product.prodname_copilot_short %}'s approach

You can dive into {% data variables.product.prodname_copilot_short %}'s session logs in {% data variables.product.github %} or {% data variables.product.prodname_vscode %} to understand how it approached your task.

In the session logs, you can see {% data variables.product.prodname_copilot_short %}'s internal monologue and the tools it used to understand your repository, make changes and validate its work.

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} has its own development environment, including the ability to run automated tests and linters, to validate its changes before it pushes.

## Steering a {% data variables.product.prodname_copilot_short %} session from the agents tab

You can steer {% data variables.product.prodname_copilot_short %} while it is working to complete a task. Reasons you might want to steer a session include:

* {% data variables.product.prodname_copilot_short %} appears to be going in a wrong direction, and you want to give it more clarity.
* You made a mistake in your description of the required work, and you've decided to start over.

Follow these steps to steer {% data variables.product.prodname_copilot_short %}:

1. Open the [agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-web-copilot-agents&utm_medium=docs&utm_campaign=universe25post).
1. In the **Agent sessions** list, select the task that you want to provide further input for.
1. In the prompt box, prompt {% data variables.product.prodname_copilot_short %} as it is working on a task.

  For example, `Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.`

{% data variables.product.prodname_copilot_short %} will start implementing your input after it has finished its current tool call.

> [!NOTE]
> Steering uses **one premium request** per message.

## Stopping a {% data variables.product.prodname_copilot_short %} session

You can stop {% data variables.product.prodname_copilot_short %} from continuing to work on a task by clicking **Stop session** in the session log viewer.

![Screenshot of the log viewer with the 'Stop session' button highlighted.](/assets/images/help/copilot/coding-agent/log-stop-session.png)

Reasons you might want to stop a session include:

* You made a mistake in your description of the required work, and you've decided to start over.
* You've realized that the change you asked for doesn't need to be made, so you want to stop {% data variables.product.prodname_copilot_short %} from doing any more work on it.

## Further reading

* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)
