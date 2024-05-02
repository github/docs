---
title: About CodeQL for VS Code
shortTitle: About the extension
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can write, run, and test {% data variables.product.prodname_codeql %} queries inside {% data variables.product.prodname_vscode %} with the {% data variables.product.prodname_codeql %} extension.'
redirect_from:
  - /code-security/codeql-for-vs-code/about-codeql-for-visual-studio-code
---

## About {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %}

You can run {% data variables.product.prodname_codeql %} queries on databases generated from source code, in order to find errors and security vulnerabilities in a codebase. For more information about {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)."

With the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension, you can:

- Write custom {% data variables.product.prodname_codeql %} queries and supporting libraries.
- Directly view and use the {% data variables.product.prodname_codeql %} security queries from the large, open-source [`github/codeql`](https://github.com/github/codeql) repository.
- Run queries over one or more {% data variables.product.prodname_codeql %} databases.
- Track the flow of data through a program, highlighting areas that are potential security vulnerabilities.
- View, create, and edit all types of {% data variables.product.prodname_codeql %} packs of queries or libraries that you can use or publish to share with others.
- Run unit tests for {% data variables.product.prodname_codeql %} queries.
- Use a dedicated editor for viewing, creating, and editing {% data variables.product.prodname_codeql %} model packs, which are used to extend standard {% data variables.product.prodname_codeql %} analysis.

The {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension also adds a {% data variables.product.prodname_codeql %} sidebar view to {% data variables.product.prodname_vscode_shortname %}. This contains a list of local {% data variables.product.prodname_codeql %} databases, an overview of the queries that you have run in the current session, and a variant analysis view for large-scale analysis.

### IntelliSense

The extension provides standard IntelliSense features for query files (extension `.ql`) and library files (extension `.qll`) that you open in the {% data variables.product.prodname_vscode_shortname %} editor. These include:

- Syntax highlighting
- Right-click options (such as **Go To Definition**)
- Autocomplete suggestions
- Hover information

For more information about Intellisense in {% data variables.product.prodname_vscode_shortname %}, see [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) in the {% data variables.product.prodname_vscode %} documentation.

You can also use the {% data variables.product.prodname_vscode_shortname %} **Format Document** command to format your code according to the [{% data variables.product.prodname_codeql %} style guide](https://github.com/github/codeql/blob/main/docs/ql-style-guide.md).

### The {% data variables.product.prodname_vscode_command_palette_shortname %}

You can run commands for the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension from the {% data variables.product.prodname_vscode_command_palette_shortname %}. For more information about the {% data variables.product.prodname_vscode_command_palette_shortname %}, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Data and telemetry

If you specifically opt in to permit {% data variables.product.prodname_dotcom %} to do so, {% data variables.product.prodname_dotcom %} will collect usage data and metrics for the purposes of helping the core developers to improve the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/telemetry-in-codeql-for-visual-studio-code)."

{% data reusables.code-scanning.codeql-license %}

## Next steps

To learn about how to install the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/installing-codeql-for-vs-code)."
