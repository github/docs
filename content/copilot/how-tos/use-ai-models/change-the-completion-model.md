---
title: Changing the AI model for GitHub Copilot code completion
shortTitle: Change the completion model
intro: 'Learn how to change the default LLM for {% data variables.product.prodname_copilot_short %} code completion to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion
  - /copilot/how-tos/ai-models/changing-the-ai-model-for-copilot-code-completion
  - /copilot/how-tos/ai-models/change-the-completion-model
contentType: how-tos
---

{% vscode %}

The following instructions are for {% data variables.product.prodname_vscode_shortname %}. If you are using {% data variables.product.prodname_vs %}, or a JetBrains IDE, click the appropriate tab at the start of this article.

## Prerequisites

{% data reusables.copilot.code-completion-switch-prereqs-vscode %}

{% data reusables.copilot.code-completion-available-models %}

For more information, see [AUTOTITLE](/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-code-completion).

## Changing the AI model for code completion

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type `change completions model` and select the "{% data variables.product.prodname_copilot %}: Change Completions Model" command.
1. In the dropdown menu, select the model you want to use.

## Checking which model is being used

1. Open the Settings editor by pressing <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows) / <kbd>Command</kbd>+<kbd>,</kbd> (Mac).
1. Type `copilot completion` and look for the "{% data variables.product.github %} > {% data variables.product.prodname_copilot_short %}: Selected Completion Model" section.

   The field in this section displays the currently selected model. If the field is empty, the default model is being used.

{% endvscode %}

{% visualstudio %}

The following instructions are for {% data variables.product.prodname_vs %}. If you are using {% data variables.product.prodname_vscode_shortname %}, or a JetBrains IDE, click the appropriate tab at the start of this article.

## Prerequisites

{% data reusables.copilot.code-completion-switch-prereqs-vs %}

{% data reusables.copilot.code-completion-available-models %}

For more information, see [AUTOTITLE](/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-code-completion).

## Changing the AI model for code completion

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the top right corner.
1. Click **Settings**, then click **Options**.
1. Under **{% data variables.product.prodname_copilot_short %} Completions**, use the dropdown menu to select the model you want to use.

{% endvisualstudio %}

{% jetbrains %}

The following instructions are for JetBrains IDEs. If you are using {% data variables.product.prodname_vs %}, or {% data variables.product.prodname_vscode_shortname %}, click the appropriate tab at the start of this article.

## Prerequisites

{% data reusables.copilot.code-completion-switch-prereqs-jetbrains %}

{% data reusables.copilot.code-completion-available-models %}

For more information, see [AUTOTITLE](/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-code-completion).

## Changing the AI model for code completion

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Edit Model for Completion**.
1. In the settings dialog box for "Languages & Frameworks > {% data variables.product.prodname_copilot %}," click the dropdown menu for **Model for completions** and select the model you want to use.
1. Click **OK**.

{% endjetbrains %}
