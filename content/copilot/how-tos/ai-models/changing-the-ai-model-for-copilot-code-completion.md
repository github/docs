---
title: Changing the AI model for Copilot code completion
shortTitle: Change the completion model
intro: 'Learn how to change the default LLM for {% data variables.product.prodname_copilot_short %} code completion to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion
---

## Overview

By default, {% data variables.product.prodname_copilot_short %} code completion uses the {% data variables.copilot.copilot_gpt_4o %} {% data variables.product.prodname_copilot_short %} model. This is a fine-tuned version of the GPT-4o mini model. The {% data variables.copilot.copilot_gpt_4o %} {% data variables.product.prodname_copilot_short %} model was trained on a wide range of high quality public {% data variables.product.github %} repositories, providing coverage of over 30 programming languages.

<details>
  <summary>View the list of programming languages and technologies included in the training data.</summary>

  * C
  * C#
  * C++
  * Clojure
  * CSS
  * Dart
  * Dockerfile
  * Elixir
  * Emacs Lisp
  * Go
  * Haskell
  * HTML
  * Java
  * JavaScript
  * Julia
  * Jupyter Notebook
  * Kotlin
  * Lua
  * MATLAB
  * Objective-C
  * Perl
  * PHP
  * PowerShell
  * Python
  * R
  * Ruby
  * Rust
  * Scala
  * Shell
  * Swift
  * TeX
  * TypeScript
  * Vue

</details>

{% vscode %} You can switch AI models in the latest releases of {% data variables.product.prodname_vscode_shortname %} with the latest version of the {% data variables.product.prodname_copilot %} extension. {% endvscode %}

{% visualstudio %} You can switch AI models in {% data variables.product.prodname_vs %} 17.14 Preview 2 and later. {% endvisualstudio %}

{% jetbrains %} You can switch AI models in the latest releases of JetBrains IDEs with the latest version of the {% data variables.product.prodname_copilot %} extension. {% endjetbrains %}

> [!NOTE]
> The list of available models will change over time. When only one code completion model is available, the model picker will only show that model. Preview models and additional code completion models will be added to the picker as they become available.

## Effects of switching the AI model

Changing the model that's used for {% data variables.product.prodname_copilot_short %} code completion does not affect the model that's used by {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).

There are no changes to the data collection and usage policy if you change the AI model.

If you are on a {% data variables.copilot.copilot_free_short %} plan, all completions count against your completions quota regardless of the model used. See [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-subscriptions).

The setting to enable or disable suggestions that match public code are applied irrespective of which model you choose. See [AUTOTITLE](/enterprise-cloud@latest/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

## Enabling the model switcher

{% ifversion fpt %}

If you have a {% data variables.copilot.copilot_free_short %} or {% data variables.copilot.copilot_pro_short %} plan, the model switcher for {% data variables.product.prodname_copilot_short %} code completion is automatically enabled.

{% endif %}

{% data reusables.copilot.editor-preview-settings %}

{% vscode %}

## Changing the AI model for code completion

The following instructions are for {% data variables.product.prodname_vscode_shortname %}. If you are using {% data variables.product.prodname_vs %}, or a JetBrains IDE, click the appropriate tab at the start of this article.

1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type `change completions model` and select the "{% data variables.product.prodname_copilot %}: Change Completions Model" command.
1. In the dropdown menu, select the model you want to use.

Alternatively, if Command Center is enabled, you can click {% octicon "chevron-down" aria-label="The downward-pointing arrowhead" %} beside the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon at the top of the {% data variables.product.prodname_vscode_shortname %} window, then click **Configure Code Completions** in the dropdown menu. Then choose **Change Completions Model** in the dropdown menu and select the model you want to use.

## Checking which model is being used

1. Open the Settings editor by pressing <kbd>Ctrl</kbd>+<kbd>,</kbd> (Linux/Windows) / <kbd>Command</kbd>+<kbd>,</kbd> (Mac).
1. Type `copilot completion` and look for the "{% data variables.product.github %} > {% data variables.product.prodname_copilot_short %}: Selected Completion Model" section.

   The field in this section displays the currently selected model. If the field is empty, the default model is being used.

{% endvscode %}

{% visualstudio %}

## Changing the AI model for code completion

The following instructions are for {% data variables.product.prodname_vs %}. If you are using {% data variables.product.prodname_vscode_shortname %}, or a JetBrains IDE, click the appropriate tab at the start of this article.

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the top right corner.
1. Click **Settings**, then click **Options**.
1. Under **{% data variables.product.prodname_copilot_short %} Completions**, use the dropdown menu to select the model you want to use.

{% endvisualstudio %}

{% jetbrains %}

## Changing the AI model for code completion

The following instructions are for JetBrains IDEs. If you are using {% data variables.product.prodname_vs %}, or {% data variables.product.prodname_vscode_shortname %}, click the appropriate tab at the start of this article.

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Edit Model for Completion**.
1. In the settings dialog box for "Languages & Frameworks > {% data variables.product.prodname_copilot %}," click the dropdown menu for **Model for completions** and select the model you want to use.
1. Click **OK**.

{% endjetbrains %}
