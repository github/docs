---
title: Exploring the structure of your source code
shortTitle: Explore code structure
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
intro: Visualize how your code maps to {% data variables.product.prodname_codeql %} classes in {% data variables.product.prodname_vscode_shortname %}.
redirect_from:
  - /code-security/codeql-for-vs-code/exploring-the-structure-of-your-source-code
  - /code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/exploring-the-structure-of-your-source-code
contentType: how-tos
category:
  - Customize vulnerability detection with CodeQL
---

## Prerequisites

To view the abstract syntax tree (AST) of a source file, you need to have an appropriate {% data variables.product.prodname_codeql %} query (usually `printAST.ql`) in your workspace. If you do not have an appropriate query, you can update your copy of the [`github/codeql`](https://github.com/github/codeql) repository from the `main` branch.

> [!NOTE] Updating your repository may discard your query caches, making your next query runs slower.

## Viewing the abstract syntax tree of a source file

1. Open the "Databases" view in the extension, and right-click the database that you want to explore. Click **Add Database Source to Workspace**.
1. Navigate to a {% data variables.product.prodname_codeql %} database's source file in the File Explorer.
1. Run **{% data variables.product.prodname_codeql %}: View AST** from the {% data variables.product.prodname_vscode_command_palette_shortname %}. This runs a {% data variables.product.prodname_codeql %} query over the active file, which may take a few seconds. Once the query is complete, the AST viewer will display the structure of the source file.
1. To see the nested structure of the source file, click the arrows and expand the nodes. These nodes represent different elements of your code, such as statements and expressions.
1. To see the source code corresponding to a particular node, click the node in the AST viewer. Similarly, you can click a section of the source code to display the corresponding node.
