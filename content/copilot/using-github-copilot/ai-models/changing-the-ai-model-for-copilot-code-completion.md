---
title: Changing the AI model for Copilot code completion
shortTitle: 'Change the completion model'
intro: 'Learn how to change the default LLM for {% data variables.product.prodname_copilot_short %} code completion to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
---

## Overview

By default, {% data variables.product.prodname_copilot_short %} code completion uses the GPT 3.5 Turbo large language model (LLM). As an alternative, if you use {% data variables.product.prodname_vscode_shortname %}, you can choose to use a model based on GPT 4o-mini. This model has been trained on a wide range of high quality public {% data variables.product.github %} repositories, providing coverage of over 30 programming languages. Its knowledge base is more current than the default model and you may find that it generates completion suggestions more quickly.

> [!NOTE]
> * Multiple model support for {% data variables.product.prodname_copilot_short %} code completion is in {% data variables.release-phases.public_preview %} and is subject to change.
> * Currently the ability to switch AI model is available in the latest releases of {% data variables.product.prodname_vscode_shortname %} and JetBrains IDEs, with the latest version of the {% data variables.product.prodname_copilot %} extension.

## Effects of switching the AI model

Changing the model that's used for {% data variables.product.prodname_copilot_short %} code completion does not affect the model that's used by {% data variables.product.prodname_copilot_chat_short %}. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).

There are no changes to the data collection and usage policy if you change the AI model.

If you are on a {% data variables.product.prodname_copilot_free_short %} subscription, all completions count against your completions quota regardless of the model used. See [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-subscriptions).

The setting to enable or disable suggestions that match public code are applied irrespective of which model you choose. See [AUTOTITLE](/enterprise-cloud@latest/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

## Enabling the model switcher

{% ifversion fpt %}

If you have a {% data variables.product.prodname_copilot_free_short %} or {% data variables.product.prodname_copilot_pro_short %} subscription, the model switcher for {% data variables.product.prodname_copilot_short %} code completion is automatically enabled.

{% endif %}

{% data reusables.copilot.editor-preview-settings %}

{% vscode %}

## Changing the AI model for code completion

The following instructions are for {% data variables.product.prodname_vscode_shortname %}. If you are using a JetBrains IDE, click the appropriate tab at the start of this article.

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type `change completions model` and select the "{% data variables.product.prodname_copilot %}: Change Completions Model" command.
1. In the dropdown menu, select the model you want to use.

Alternatively, if Command Center is enabled, you can click {% octicon "chevron-down" aria-label="The downward-pointing arrowhead" %} beside the **{% octicon "copilot" aria-hidden="true" %}** icon at the top of the {% data variables.product.prodname_vscode_shortname %} window, then click **Configure Code Completions** in the dropdown menu. Then choose **Change Completions Model** in the dropdown menu and select the model you want to use.

## Checking which model is being used

1. Open the Settings editor by pressing <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows) / <kbd>Command</kbd>+<kbd>,</kbd> (Mac).
1. Type `copilot completion` and look for the "{% data variables.product.github %} > {% data variables.product.prodname_copilot_short %}: Selected Completion Model" section.

   The field in this section displays the currently selected model. If the field is empty, the default model is being used.

{% endvscode %}

{% jetbrains %}

## Changing the AI model for code completion

The following instructions are for JetBrains IDEs. If you are using {% data variables.product.prodname_vscode_shortname %}, click the appropriate tab at the start of this article.

1. Click the **{% octicon "copilot" aria-hidden="true" %}** icon in the status bar.
1. In the popup menu, click **Edit Model for Completion**.
1. In the settings dialog box for "Languages & Frameworks > {% data variables.product.prodname_copilot %}," click the dropdown menu for **Model for completions** and select the model you want to use.
1. Click **OK**.

{% endjetbrains %}
