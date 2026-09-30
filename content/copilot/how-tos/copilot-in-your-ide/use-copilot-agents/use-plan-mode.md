---
title: Using plan mode in your IDE
shortTitle: Use plan mode
intro: 'Have {% data variables.product.prodname_copilot_short %} research a task and draft an implementation plan for your review before any code is changed.'
defaultTool: vscode
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

{% data reusables.copilot.plan-agent-intro %}

Plan mode is available in {% data variables.product.prodname_vscode %}, JetBrains IDEs, Xcode, and Eclipse. It is not currently available in {% data variables.product.prodname_vs %}. Click the tabs above for instructions for your editor.

To run a task without planning it first, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).

<!-- --------------------- -->
<!-- VS Code -->
<!-- --------------------- -->

{% vscode %}

## Using the plan agent

1. If the chat view is not already displayed, select **Open Chat** from the {% data variables.copilot.copilot_chat_short %} menu.
1. At the bottom of the chat view, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do web app with HTML, CSS, and JS files.`

   After a few moments, the plan agent outputs a plan in the chat view. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

{% data reusables.copilot.plan-agent-steps %}

For more information, see [Planning with agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/planning) in the {% data variables.product.prodname_vscode %} documentation.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endvscode %}

<!-- --------------------- -->
<!-- JetBrains -->
<!-- --------------------- -->

{% jetbrains %}

## Using plan mode

1. If it is not already displayed, open the {% data variables.copilot.copilot_chat_short %} panel by clicking the **{% data variables.copilot.copilot_chat %}** icon at the right side of the JetBrains IDE window.
1. At the bottom of the {% data variables.copilot.copilot_chat_short %} panel, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do web app with HTML, CSS, and JS files.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

{% data reusables.copilot.plan-agent-steps %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endjetbrains %}

<!-- --------------------- -->
<!-- Xcode -->
<!-- --------------------- -->

{% xcode %}

> [!NOTE]
> Plan mode is currently in {% data variables.release-phases.public_preview %} and subject to change.

## Using plan mode

1. If it is not already displayed, open the {% data variables.copilot.copilot_chat_short %} window by clicking **Editor** in the menu bar, then clicking **{% data variables.product.prodname_copilot %}** then **Open Chat**.
1. At the bottom of the {% data variables.copilot.copilot_chat_short %} window, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do app with Swift files.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

{% data reusables.copilot.plan-agent-steps %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endxcode %}

<!-- --------------------- -->
<!-- Eclipse -->
<!-- --------------------- -->

{% eclipse %}

> [!NOTE]
> Plan mode is currently in {% data variables.release-phases.public_preview %} and subject to change.

## Using plan mode

1. If it is not already displayed, open the {% data variables.copilot.copilot_chat_short %} panel by clicking the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then clicking **Open Chat**.
1. At the bottom of the chat panel, select **Plan** from the agents dropdown.
1. Type a prompt that describes a task, such as adding a feature to an existing application, refactoring code, fixing a bug, or creating an initial version of a new application.

   For example: `Create a simple to-do app using JavaFX.`

1. Submit the prompt.

   After a few moments, the plan agent outputs a plan in the chat panel. The plan provides a high-level summary and a breakdown of steps, including any open questions for clarification.

{% data reusables.copilot.plan-agent-steps %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-in-ide)

{% endeclipse %}
