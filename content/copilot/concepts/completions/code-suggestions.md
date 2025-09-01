---
title: GitHub Copilot code suggestions in your IDE
shortTitle: Code suggestions
allowTitleToDifferFromFilename: true
intro: 'Learn about {% data variables.product.prodname_copilot_short %} code suggestions in different IDEs.'
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
contentType: concepts
---

{% vscode %}

## About code suggestions in {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %} provides two kinds of code suggestions:

* **Code completion**
   * {% data variables.product.prodname_copilot_short %} offers coding suggestions as you type. You can also describe something you want to do using natural language within a comment, and {% data variables.product.prodname_copilot_short %} will suggest the code to accomplish your goal.
* **{% data variables.copilot.next_edit_suggestions_caps %} ({% data variables.release-phases.public_preview %})**
   * Based on the edits you are making, {% data variables.product.prodname_copilot_short %} will predict the location of the next edit you are likely to make and suggest a completion for it. Suggestions may span a single symbol, an entire line, or multiple lines, depending on the scope of the potential change. To enable {% data variables.copilot.next_edit_suggestions %}, see [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment#enabling-next-edit-suggestions).

{% data reusables.copilot.supported-languages %}

{% endvscode %}

{% jetbrains %}

## About code suggestions in JetBrains IDEs

{% data variables.product.prodname_copilot_short %} offers code completion suggestions as you type.

{% data reusables.copilot.supported-languages %}

{% endjetbrains %}

{% visualstudio %}

## About code suggestions in {% data variables.product.prodname_vs %}

{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vs %} provides two kinds of code suggestions:

* **Code completion**
   * {% data variables.product.prodname_copilot_short %} offers coding suggestions as you type.
* **{% data variables.copilot.next_edit_suggestions_caps %} ({% data variables.release-phases.public_preview %})**
   * Based on the edits you are making, {% data variables.product.prodname_copilot_short %} will predict the location of the next edit you are likely to make and suggest a completion for it. Suggestions may span a single symbol, an entire line, or multiple lines, depending on the scope of the potential change. To enable {% data variables.copilot.next_edit_suggestions %}, see [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment#enabling-next-edit-suggestions).

{% data reusables.copilot.supported-languages %}

{% endvisualstudio %}

{% vimneovim %}

## About code suggestions in Vim/Neovim

{% data variables.product.prodname_copilot %} provides code completion suggestions inline as you type in Vim/Neovim.

{% endvimneovim %}

{% azure_data_studio %}

## About code suggestions in Azure Data Studio

{% data variables.product.prodname_copilot %} provides you with inline suggestions as you create SQL databases in Azure Data Studio.

{% endazure_data_studio %}

{% xcode %}

## About code suggestions in Xcode

{% data variables.product.prodname_copilot %} offers code completion suggestions as you type.

{% endxcode %}

{% eclipse %}

## About code suggestions in Eclipse

{% data variables.product.prodname_copilot %} offers code completion suggestions as you type.

{% endeclipse %}

## Code suggestions that match public code

{% data variables.product.prodname_copilot %} checks each suggestion for matches with publicly available code. Any matches are discarded or suggested with a code reference, based on the setting of the "Suggestions matching public code" policy for your account or organization. See [AUTOTITLE](/copilot/concepts/completions/code-referencing).

## About the AI model used for {% data variables.product.prodname_copilot_short %} code completion

{% data variables.product.prodname_copilot_short %} code completion uses the {% data variables.copilot.copilot_gpt_4o %} {% data variables.product.prodname_copilot_short %} model. The {% data variables.copilot.copilot_gpt_4o %} {% data variables.product.prodname_copilot_short %} model was trained on a wide range of high quality public {% data variables.product.github %} repositories, providing coverage of over 30 programming languages. See [Programming languages included in the default model](#programming-languages-included-in-the-default-model) below.

{% vscode %}

## Changing the model used for code completion

{% data reusables.copilot.code-completion-switch-prereqs-vscode %}

Changing the model only affects {% data variables.product.prodname_copilot_short %} code completion. It does not affect {% data variables.product.prodname_copilot_short %} next edit suggestions.

{% data reusables.copilot.code-completion-switch-model-affects %}

{% endvscode %}

{% visualstudio %}

## Changing the model used for code completion

{% data reusables.copilot.code-completion-switch-prereqs-vs %}

{% data reusables.copilot.code-completion-switch-model-affects %}

{% endvisualstudio %}

{% jetbrains %}

## Changing the model used for code completion

{% data reusables.copilot.code-completion-switch-prereqs-jetbrains %}

{% data reusables.copilot.code-completion-switch-model-affects %}

{% endjetbrains %}

## Programming languages included in the default model

The following programming languages and technologies are included in the training data for the default LLM used for {% data variables.product.prodname_copilot_short %} code completion:

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

## Next steps

* [AUTOTITLE](/copilot/how-tos/completions/getting-code-suggestions-in-your-ide-with-github-copilot)
