---
title: Managing Copilot coding agents
shortTitle: Manage agents
intro: View your agent's progress and keep {% data variables.product.prodname_copilot_short %} on task.
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-signup-copilot-coding-agent&utm_medium=docs&utm_campaign=universe25post" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
---

{% data reusables.copilot.coding-agent.agent-management-intro %}

## 1. Select a repository and choose your agent

1. Start a new agent task.

    * Open the [Agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-web-copilot-coding-agent&utm_medium=docs&utm_campaign=universe25post).
    * Use the **Task** button or `/task` command from [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-web-copilot-chat&utm_medium=docs&utm_campaign=universe25post).
    * Open the Agents panel by clicking the {% octicon "agent" aria-label="The Agents icon" %} at the top of any page on {% data variables.product.github %}
1. Using the dropdown menu, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request.
{% data reusables.copilot.optional-select-custom-agent %}
1. Type a prompt describing your request. For example:

    ```text
    Implement a user-friendly message for common errors.
    ```

1. Click {% octicon "paper-airplane" aria-label="Start task" %} **Start task** or press <kbd>Return</kbd>.

  {% data variables.product.prodname_copilot_short %} will start work on the task and begin pushing changes to a new pull request, where it will automatically add you as a reviewer.

For more information on ways to start new agent tasks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

## 2. Monitor agent activity

Once {% data variables.product.prodname_copilot_short %} starts working, it will continue to update the session log and overview with its progress and thought process.

Each session displays its status. Click on a session to open the session log, where you can monitor the agent's progress and the session length. You can view the overview, file diff, premium request usage, and session count by clicking the **Open workbench** button.

![Screenshot of the top-right corner of the agents tab on {% data variables.product.github %}. The "Open workbench button is highlighted in a dark orange outline.](/assets/images/help/copilot/coding-agent/open-workbench.png)

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

Click the **Code** button in the top-right of the agent session view and select "Open in {% data variables.product.prodname_vscode_shortname %} Insiders" to launch the session directly in {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.copilot.coding-agent.use-latest-vscode %}

## 5. Review and merge agent code

Once {% data variables.product.prodname_copilot_short %} completes a session, you can click **Open workbench** and click the **Overview** tab to read through the summary of changes {% data variables.product.prodname_copilot_short %} has made. Select the **Files changed** tab to scan the diff of the pull request. If the changes look ready for a final review, navigate to the pull request to approve and merge the changes. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).
