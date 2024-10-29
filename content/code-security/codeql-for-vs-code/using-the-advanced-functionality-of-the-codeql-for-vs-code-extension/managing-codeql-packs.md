---
title: Managing CodeQL query packs and library packs
shortTitle: Manage CodeQL packs
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can view, write, and edit {% data variables.product.prodname_codeql %} query and library packs in {% data variables.product.prodname_vscode %} using the {% data variables.product.prodname_codeql %} extension.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/codeql-for-vs-code/working-with-codeql-packs-in-visual-studio-code
---

## Benefits of using the {% data variables.product.prodname_codeql %} extension for {% data variables.product.prodname_vscode %} to work with packs

With the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension, you can:

* Write {% data variables.product.prodname_codeql %} query packs without needing to check out the standard libraries in your workspace.

* Install dependencies for {% data variables.product.prodname_codeql %} query packs inside your {% data variables.product.prodname_vscode_shortname %} workspace.

* Download {% data variables.product.prodname_codeql %} query packs.

* View a {% data variables.product.prodname_codeql %} query pack and all of its dependencies.

For more information about creating and editing {% data variables.product.prodname_codeql %} query and library packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs)."

## Installing dependencies for {% data variables.product.prodname_codeql %} query packs

1. In {% data variables.product.prodname_vscode_shortname %}, open the {% data variables.product.prodname_vscode_command_palette_shortname %} and run **{% data variables.product.prodname_codeql %}: Install Pack Dependencies**.

1. Select the packs that you want to install dependencies for.

## Downloading {% data variables.product.prodname_codeql %} query packs

1. In {% data variables.product.prodname_vscode_shortname %}, open the {% data variables.product.prodname_vscode_command_palette_shortname %} and run **{% data variables.product.prodname_codeql %}: Download Packs**.

1. You can download all the core query packs, or enter the full name of a specific pack to download. You can download query packs created by other users.

## Viewing a {% data variables.product.prodname_codeql %} query pack and its dependencies

1. In {% data variables.product.prodname_vscode_shortname %}, open the `qlpack.yml` file in the root of any {% data variables.product.prodname_codeql %} pack directory.

1. In the `dependencies` section of the `qlpack.yml` file, you'll see what libraries the pack depends on.

1. Optionally, you can use {% data variables.product.prodname_vscode_shortname %}'s Intellisense features. For example, if you hover over an element from a library depended on by the pack, {% data variables.product.prodname_vscode %} will resolve it so you can see documentation about the element.

1. To view the full definition of an element of a query, you can right-click and select **Go to Definition**.

   * If the library pack is present within the same {% data variables.product.prodname_vscode %} workspace, this will take you to the definition within the workspace.

   * Otherwise, you will see the definition stored in your package cache, where downloaded dependencies are saved. The package cache is a shared location that is stored in your home directory by default.

{% ifversion codeql-model-packs %}

## Working with {% data variables.product.prodname_codeql %} model packs

{% data reusables.code-scanning.beta-model-packs %}

{% data variables.product.prodname_codeql %} model packs can be used to expand {% data variables.product.prodname_code_scanning %} analysis to include dependencies that are not supported by default. The {% data variables.product.prodname_codeql %} extension for {% data variables.product.prodname_vscode %} includes a dedicated editor for creating and editing model packs. For information on using the model editor, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/using-the-codeql-model-editor)."

{% endif %}
