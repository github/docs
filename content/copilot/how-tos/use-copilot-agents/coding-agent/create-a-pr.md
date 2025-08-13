---
title: Asking GitHub Copilot to create a pull request
shortTitle: Create a PR
intro: 'You can ask {% data variables.product.prodname_copilot_short %} to create a pull request from the Agents page, {% data variables.copilot.copilot_chat_short %}, or agentic coding tools and IDEs with Model Context Protocol (MCP) support.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=asking+copilot+to+create+a+pull+request&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/asking-copilot-to-create-a-pull-request
  - /copilot/using-github-copilot/coding-agent/asking-copilot-to-create-a-pull-request
  - /copilot/how-tos/agents/copilot-coding-agent/asking-copilot-to-create-a-pull-request
  - /copilot/how-tos/agents/copilot-coding-agent/create-a-pr
  - /copilot/how-tos/agents/coding-agent/create-a-pr
contentType: how-tos
---

> [!NOTE]
> * {% data reusables.copilot.coding-agent.preview-note-text %}
> * For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

You can ask {% data variables.product.prodname_copilot_short %} to work on a task from:

* The Agents page on {% data variables.product.github %}
* {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs and {% data variables.product.prodname_dotcom_the_website %}
* Your preferred IDE or agentic coding tool with Model Context Protocol (MCP) support

{% data variables.product.prodname_copilot_short %} will start working on the task, raise a pull request, then request a review from you when it's finished working. For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the Agents page

1. Navigate to the Agents page at [github.com/copilot/agents](https://github.com/copilot/agents).

    You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.

1. Type a prompt describing your request.

    For example, `Implement a user friendly message for common errors.`

  ![Screenshot of asking Copilot to create a pull request from the Agents page.](/assets/images/help/copilot/coding-agent/agents-page-input.png)

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push its changes to a pull request targeting that branch.

1. Click the **Send now** button or press <kbd>Return</kbd>.

    {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}

1. Install the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) for {% data variables.product.prodname_vscode %}.
1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vscode %}.
1. Type a prompt explaining what you want {% data variables.product.prodname_copilot_short %} to do, and add `#copilotCodingAgent` to the prompt.

   For example, `Put backticks around file names and variables in output #copilotCodingAgent`

   > [!TIP]
   > * To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} will typically do some research and context-gathering in {% data variables.product.prodname_vscode %}, and then will ask you to confirm that you want to use the coding agent to create a pull request.

1. Click **Continue**.

   {% data variables.product.prodname_copilot_short %} will push up any local changes, start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in other IDEs

1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vs %} or JetBrains IDEs.
1. Type a prompt, starting with `@github`, asking {% data variables.product.prodname_copilot_short %} to create a pull request, and giving details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `@github Create a PR to put backticks around file names and variables in output.`

   > [!TIP]
   > * To help {% data variables.product.prodname_copilot_short %}, you can select the relevant line(s) of code before submitting your prompt.
   > * From {% data variables.copilot.copilot_chat_short %}, you can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to use the coding agent to create a pull request.

1. Click **Allow**.

   {% data variables.product.prodname_copilot_short %} will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %}

1. Open {% data variables.copilot.copilot_chat %} on {% data variables.product.prodname_dotcom_the_website %}.
1. Type a prompt asking {% data variables.product.prodname_copilot_short %} to create a pull request, and giving details of what you want {% data variables.product.prodname_copilot_short %} to change.

   For example, `Create a PR in monalisa/bookstore to put backticks around file names and variables in output.`

   > [!TIP]
   > * You can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} asks you to confirm that you want to use the coding agent to create a pull request.

1. Click **Allow**.

   {% data variables.product.prodname_copilot_short %} will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.

## Asking {% data variables.product.prodname_copilot_short %} to create a pull request from the {% data variables.product.github %} MCP server

As an alternative to using {% data variables.copilot.copilot_chat_short %}, you can use the remote {% data variables.product.github %} MCP server to trigger {% data variables.copilot.copilot_coding_agent %} from any MCP host.

> [!NOTE]
> * This capability is only available on the remote {% data variables.product.github %} MCP server and host applications where remote MCP servers are supported.

1. Install the {% data variables.product.github %} MCP server in your preferred IDE or agentic coding tool. See [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server).

1. Ensure the `create_pull_request_with_copilot` tool is enabled.

1. Open chat.

1. Type a prompt asking {% data variables.product.prodname_copilot_short %} to create a pull request, with the details of what you want to change.

   For example, `Open a PR in my repository to expand unit test coverage.`

   > [!TIP]
   > * You can ask {% data variables.product.prodname_copilot_short %} to open a pull request using a specific branch as the base branch by including it in your prompt.

1. Submit your prompt.

   {% data variables.product.prodname_copilot_short %} will start a new session, open a draft pull request and work on the task in the background. As it works, it will push changes to the pull request, and once it has finished, it will add you as a reviewer. In most cases, the MCP host will show you the URL of the created pull request.

## Monitoring progress

You can view your current and past {% data variables.product.prodname_copilot_short %} sessions from the [Agents page](https://github.com/copilot/agents) and {% data variables.product.prodname_vscode %}. See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions).

## Further reading

* [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent)
* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)
