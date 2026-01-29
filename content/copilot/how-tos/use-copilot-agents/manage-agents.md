---
title: Managing Copilot coding agents
shortTitle: Manage agents
intro: View your agent's progress and keep {% data variables.product.prodname_copilot_short %} on task.
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
---

{% data reusables.copilot.coding-agent.agent-management-intro %}

## 1. Select a repository and choose your agent

1. Start a new agent task.
    
    * Open the **{% octicon "agent" aria-label="The Agents icon" %} Agents** tab in a repository
    * Open the [Agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text)
    * Use the **Task** button or `/task` command from [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)
    * Open the Agents panel by clicking the {% octicon "agent" aria-label="The Agents icon" %} at the top of any page on {% data variables.product.github %}
1. Using the dropdown menu, select the repository you want {% data variables.product.prodname_copilot_short %} to work in if needed.
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request.
{% data reusables.copilot.optional-select-custom-agent %}
1. Optionally, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.
1. Type a prompt describing your request. For example:

    ```text
    Implement a user-friendly message for common errors.
    ```

1. Click {% octicon "paper-airplane" aria-label="Start task" %} **Start task** or press <kbd>Return</kbd>.

  {% data variables.product.prodname_copilot_short %} will start work on the task and begin pushing changes to a new pull request, where it will automatically add you as a reviewer.

For more information on ways to start new agent tasks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

## 2. Monitor agent activity

Once {% data variables.product.prodname_copilot_short %} starts working, it will continue to update the session log with its progress and thought process.

Each session displays its status. Click on a session to open the session log, where you can monitor the agent's progress, see the tools it's using, and track how long the session has been running. 

Agent sessions can also be tracked from the {% data variables.product.prodname_cli %}, {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_vscode %}, Raycast, and JetBrains IDEs. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

## 3. Redirect agents as needed

You can step in and provide **steering input** to {% data variables.product.prodname_copilot_short %} without stopping the run. Steering uses **one premium request** per message.

Reasons you might want to steer a session include:

* {% data variables.product.prodname_copilot_short %} appears to be going in a wrong direction, and you want to give it more clarity.
* You made a mistake in your description of the required work, and you've decided to start over.

In the prompt box under the agent session log, prompt {% data variables.product.prodname_copilot_short %} as it is working on a task. For example:

  ```text
  Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.
  ```

{% data variables.product.prodname_copilot_short %} will start implementing your input after it has finished its current tool call.

## 4. Open an agent session in your local development environment

You can guide {% data variables.product.prodname_copilot_short %} in your local development environment on further changes, or make any edits that require human expertise.

### {% data variables.product.prodname_vscode_shortname %}
  
At the bottom of the agent session view, click the **{% octicon "vscode" aria-label="VS Code" %} Open in {% data variables.product.prodname_vscode_shortname %}** button to launch the session directly in {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.copilot.coding-agent.use-latest-vscode %}

### {% data variables.copilot.copilot_cli %}
  1. At the bottom of the agent session view, click the dropdown list next to **{% octicon "vscode" aria-label="VS Code" %} Open in {% data variables.product.prodname_vscode_shortname %}**.
  1. Click **{% octicon "agent" aria-label="Agent" %} Continue in {% data variables.copilot.copilot_cli %}** to copy the `copilot --resume=<session ID>` command to your clipboard. 
      ![Screenshot of the session action dropdown list, "Continue in Copilot CLI" is highlighted with a dark orange outline.](/assets/images/help/copilot/coding-agent/open-agent-session-in-copilot-cli.png)
  1. In your terminal, paste and run the command to resume the agent session.

## 5. Review and merge agent code

Once {% data variables.product.prodname_copilot_short %} completes a session, you can navigate to the pull request to review the changes. From the pull request, you can scan the diff, request further improvements from {% data variables.product.prodname_copilot_short %}, or approve and merge the changes. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

## 6. Archive agent sessions

Sessions that have been stopped can be archived to remove them from the sessions list. 

1. Open the agent session you want to archive.
1. In the top right corner, click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "inbox" aria-hidden="true" aria-label="inbox" %} Archive session**.
1. In the dialog box that opens, click **Yes, archive**.
