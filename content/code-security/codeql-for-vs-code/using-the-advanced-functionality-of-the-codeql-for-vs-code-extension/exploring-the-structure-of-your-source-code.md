---
title: Exploring the structure of your source code
shortTitle: Explore code structure
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can use the AST viewer to display the abstract syntax tree of a {% data variables.product.prodname_codeql %} database.'
redirect_from:
  - /code-security/codeql-for-vs-code/exploring-the-structure-of-your-source-code
---

## About the abstract syntax tree

The abstract syntax tree (AST) of a program represents the program's syntactic structure. Nodes on the AST represent elements such as statements and expressions. A {% data variables.product.prodname_codeql %} database encodes these program elements and the relationships between them through a database schema. For more information about database schemas, see [{% data variables.product.prodname_codeql %} glossary](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#ql-database-schema) in the {% data variables.product.prodname_codeql %} documentation.

{% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} contains an AST viewer. The viewer consists of a graph visualization view that lets you explore the AST of a file in a {% data variables.product.prodname_codeql %} database. This helps you see which {% data variables.product.prodname_codeql %} classes correspond to which parts of your source files.

## Viewing the abstract syntax tree of a source file

{% note %}

**Note:** If you don't have an appropriate query (usually `printAST.ql`) in your workspace, the **{% data variables.product.prodname_codeql %}: View AST** command in the following steps won't work. To fix this, you can update your copy of the [`github/codeql`](https://github.com/github/codeql) repository from the `main` branch. If you do this, query caches may be discarded, so your next query runs may be slower.

{% endnote %}

1. Open the "Databases" view in the extension, and right-click the database that you want to explore. Click **Add Database Source to Workspace**.

1. Navigate to a {% data variables.product.prodname_codeql %} database's source file in the File Explorer.

1. Run **{% data variables.product.prodname_codeql %}: View AST** from the {% data variables.product.prodname_vscode_command_palette_shortname %}. This runs a {% data variables.product.prodname_codeql %} query (usually called `printAST.ql`) over the active file, which may take a few seconds. Once the query is complete, the AST viewer will display the structure of the source file.

1. To see the nested structure of the source file, click the arrows and expand the nodes.

You can click a node in the AST viewer to jump to it in the source code. Conversely, if you click a section of the source code, the AST viewer displays the corresponding node.
