---
title: 'Using {% data variables.copilot.subagents_short %} in your IDE'
shortTitle: Use subagents
intro: 'Delegate a self-contained subtask to a separate agent that works in its own context and reports back to your main chat session.'
defaultTool: vscode
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

{% data reusables.copilot.subagent-intro %}

{% data variables.copilot.subagents_caps_short %} are available in {% data variables.product.prodname_vscode %}, JetBrains IDEs, Xcode, and Eclipse. They are not currently available in {% data variables.product.prodname_vs %}. The steps to enable and invoke them differ by editor, so click the tabs above for instructions for your IDE.

For the agent session that {% data variables.copilot.subagents_short %} are delegated from, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).

<!-- --------------------- -->
<!-- VS Code -->
<!-- --------------------- -->

{% vscode %}

## Enabling {% data variables.copilot.subagents_short %}

1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon.
1. Enable the `runSubagent` tool.

If you use custom prompt files or {% data variables.copilot.custom_agents_short %}, ensure you specify the `runSubagent` tool in the `tools` frontmatter property. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents#configuring-an-agent-profile), and [Use prompt files in VS Code](https://code.visualstudio.com/docs/copilot/customization/prompt-files) in the {% data variables.product.prodname_vscode %} documentation.

## Invoking {% data variables.copilot.subagents_short %}

{% data reusables.copilot.using-subagents %}
* **Calling the #runSubagent tool.**

   ```text
   Evaluate the #file:databaseSchema using #runSubagent and generate an optimized data-migration plan.
   ```

When the {% data variables.copilot.subagent_short %} completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)

{% endvscode %}

<!-- --------------------- -->
<!-- JetBrains -->
<!-- --------------------- -->

{% jetbrains %}

To use {% data variables.copilot.subagents_short %}, you **must have {% data variables.copilot.custom_agents_short %} configured in your environment**. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling {% data variables.copilot.subagents_short %}

1. Click **Tools** in the menu bar, then click **{% data variables.product.prodname_copilot %}**, then **Edit Settings**.
1. In the popup menu, click **Chat**, then click the **Enable {% data variables.copilot.subagent_caps_short %}** checkbox.

## Invoking {% data variables.copilot.subagents_short %}

{% data reusables.copilot.using-subagents %}

When the {% data variables.copilot.subagent_short %} completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)

{% endjetbrains %}

<!-- --------------------- -->
<!-- Xcode -->
<!-- --------------------- -->

{% xcode %}

To use {% data variables.copilot.subagents_short %}, you **must have {% data variables.copilot.custom_agents_short %} configured in your environment**. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling {% data variables.copilot.subagents_short %}

1. Click **Editor** in the menu bar, then click **{% data variables.product.prodname_copilot %}** then **Open GitHub Copilot for Xcode Settings**.
1. Click **Advanced** in the chat panel, then under **Chat Settings** click the **Enable {% data variables.copilot.subagents_caps_short %}** toggle.

## Invoking {% data variables.copilot.subagents_short %}

{% data reusables.copilot.using-subagents %}

When the {% data variables.copilot.subagent_short %} completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)

{% endxcode %}

<!-- --------------------- -->
<!-- Eclipse -->
<!-- --------------------- -->

{% eclipse %}

To use {% data variables.copilot.subagents_short %}, you **must have {% data variables.copilot.custom_agents_short %} configured in your environment**. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

## Enabling {% data variables.copilot.subagents_short %}

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Edit Preferences**.
1. Under **Chat**, click the **Enable sub-agent** check box.

## Invoking {% data variables.copilot.subagents_short %}

{% data reusables.copilot.using-subagents %}

When the {% data variables.copilot.subagent_short %} completes its task, its results appear back in the main chat session, ready for follow-up questions or next steps.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode)
* [AUTOTITLE](/copilot/reference/customization-cheat-sheet)

{% endeclipse %}
