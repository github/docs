---
title: Using agent mode in your IDE
shortTitle: Use agent mode
intro: 'Give {% data variables.product.prodname_copilot_short %} a task and let it work autonomously in your editor, editing files across your project and running commands until the task is complete.'
defaultTool: vscode
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

In agent mode, {% data variables.product.prodname_copilot_short %} takes a high-level task, decides which files to change, makes the edits, and runs commands as needed, iterating until the task is done. You stay in control: you review the changes, and by default you approve commands before they run. Your administrator, or your own editor settings, may allow some commands to run automatically.

Agent mode is available in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Xcode, and Eclipse. The steps differ by editor, so click the tabs above for instructions for your IDE.

For how to open {% data variables.copilot.copilot_chat_short %} and choose between the available modes, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide).

<!-- --------------------- -->
<!-- VS Code -->
<!-- --------------------- -->

{% vscode %}

{% data reusables.copilot.copilot-edits.agent-mode-description %}

## Using agents

1. If the chat view is not already displayed, select **Open Chat** from the {% data variables.copilot.copilot_chat_short %} menu.
1. At the bottom of the chat view, ensure **Agent** is selected from the agents dropdown.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_short %} streams the edits in the editor, updates the working set, and runs terminal commands if necessary.
1. Review and iterate on changes or run a code review.

You can also [click this link](vscode://GitHub.Copilot-Chat/chat?mode=agent&ref_product=copilot&ref_type=engagement&ref_style=text) to go directly to agent mode in {% data variables.product.prodname_vscode_shortname %}. <!-- markdownlint-disable-line GHD003 -->

> [!NOTE]
> If you don’t see the **Agent** option in the mode selector, your enterprise or organization administrator may have disabled agent mode for your IDE.

For more information, see [Chat overview](https://aka.ms/vscode-copilot-agent) in the {% data variables.product.prodname_vscode %} documentation.

{% data reusables.copilot.copilot-edits.agent-mode-requests %}

## Steering an agent while it works

Agent mode is interactive. While {% data variables.product.prodname_copilot_short %} is working, you can:

* Submit a follow-up prompt to redirect the agent before it finishes.
* Confirm or reject each terminal command the agent proposes, unless it has been configured to run automatically.
* Review streamed edits as they appear and undo any you do not want.

If a task is large or ambiguous, consider drafting an implementation plan first. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model or a custom agent

Before you submit a task, you can change which AI model the agent uses, or select a {% data variables.copilot.copilot_custom_agent_short %} tailored to a specific kind of work.

* To change the model, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).
* To select a {% data variables.copilot.copilot_custom_agent_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Extending agent mode with tools

Much of agent mode's capability comes from the tools it can call. You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with {% data variables.product.github %} itself.

* To set up MCP servers in your IDE, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with {% data variables.product.github %} from your editor, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).
* For a worked example, see [AUTOTITLE](/copilot/tutorials/enhance-agent-mode-with-mcp).

To hand a self-contained subtask to a separate agent with its own context, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/concepts/chat)

{% endvscode %}

<!-- --------------------- -->
<!-- Visual Studio -->
<!-- --------------------- -->

{% visualstudio %}

Use agent mode when you have a specific task in mind and want to enable {% data variables.product.prodname_copilot_short %} to autonomously edit your code. In agent mode, {% data variables.product.prodname_copilot_short %} determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete.

Agent mode is available in {% data variables.product.prodname_vs %} 17.14 and later.

## Using agent mode

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_short %} streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If {% data variables.product.prodname_copilot_short %} suggested terminal commands, confirm whether or not {% data variables.product.prodname_copilot_short %} can run them. In response, {% data variables.product.prodname_copilot_short %} iterates and performs additional actions to complete the task in your original prompt.

When you use {% data variables.copilot.copilot_agent_short %} mode, each prompt you enter consumes {% data variables.product.prodname_ai_credits %}.

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

## Extending agent mode with tools

You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with {% data variables.product.github %} itself.

* To set up MCP servers in your IDE, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with {% data variables.product.github %} from your editor, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/concepts/chat)

{% endvisualstudio %}

<!-- --------------------- -->
<!-- JetBrains -->
<!-- --------------------- -->

{% jetbrains %}

{% data reusables.copilot.copilot-edits.agent-mode-description %}

## Using agent mode

1. To start an edit session using agent mode, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** in the menu bar, then select **Open {% data variables.copilot.copilot_chat %}**.
1. At the top of the chat panel, click the **Agent** tab.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_short %} streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If {% data variables.product.prodname_copilot_short %} suggested terminal commands, confirm whether or not {% data variables.product.prodname_copilot_short %} can run them. In response, {% data variables.product.prodname_copilot_short %} iterates and performs additional actions to complete the task in your original prompt.

{% data reusables.copilot.copilot-edits.agent-mode-requests %}

## Steering an agent while it works

Agent mode is interactive. While {% data variables.product.prodname_copilot_short %} is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model or a custom agent

Before you submit a task, you can change which AI model the agent uses, or select a {% data variables.copilot.copilot_custom_agent_short %} tailored to a specific kind of work.

* To change the model, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).
* To select a {% data variables.copilot.copilot_custom_agent_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Extending agent mode with tools

You can extend the agent with Model Context Protocol (MCP) servers, which add tools for working with external systems and with {% data variables.product.github %} itself.

* To set up MCP servers in your IDE, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).
* To work with {% data variables.product.github %} from your editor, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

To hand a self-contained subtask to a separate agent with its own context, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/concepts/chat)

{% endjetbrains %}

<!-- --------------------- -->
<!-- Xcode -->
<!-- --------------------- -->

{% xcode %}

{% data reusables.copilot.copilot-edits.agent-mode-description %}

## Using agent mode

1. If it is not already displayed, open the {% data variables.copilot.copilot_chat_short %} window by clicking **Editor** in the menu bar, then clicking **{% data variables.product.prodname_copilot %}** then **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Optionally, add relevant files to the _working set_ view to indicate to {% data variables.product.prodname_copilot_short %} which files you want to work on.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_short %} streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If {% data variables.product.prodname_copilot_short %} suggested terminal commands, confirm whether or not {% data variables.product.prodname_copilot_short %} can run them. In response, {% data variables.product.prodname_copilot_short %} iterates and performs additional actions to complete the task in your original prompt.

{% data reusables.copilot.copilot-edits.agent-mode-requests %}

## Steering an agent while it works

Agent mode is interactive. While {% data variables.product.prodname_copilot_short %} is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

To hand a self-contained subtask to a separate agent with its own context, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/concepts/chat)

{% endxcode %}

<!-- --------------------- -->
<!-- Eclipse -->
<!-- --------------------- -->

{% eclipse %}

{% data reusables.copilot.copilot-edits.agent-mode-description %}

## Using agent mode

1. Open the {% data variables.copilot.copilot_chat_short %} panel by clicking the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then clicking **Open Chat**.
1. At the bottom of the chat panel, select **Agent** from the agents dropdown.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_short %} streams the edits in the editor, updates the working set, and if necessary, suggests terminal commands to run.
1. Review the changes. If {% data variables.product.prodname_copilot_short %} suggested terminal commands, confirm whether or not {% data variables.product.prodname_copilot_short %} can run them. In response, {% data variables.product.prodname_copilot_short %} iterates and performs additional actions to complete the task in your original prompt.

{% data reusables.copilot.copilot-edits.agent-mode-requests %}

## Steering an agent while it works

Agent mode is interactive. While {% data variables.product.prodname_copilot_short %} is working, you can submit a follow-up prompt to redirect the agent, and confirm or reject each terminal command it proposes.

If a task is large or ambiguous, consider drafting an implementation plan first. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Choosing a model

Before you submit a task, you can change which AI model the agent uses. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model).

To hand a self-contained subtask to a separate agent with its own context, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-subagents).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/concepts/chat)

{% endeclipse %}
