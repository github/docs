---
title: Managing the CodeQL CLI in the VS Code extension
shortTitle: CodeQL CLI access
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
intro: The {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension uses the {% data variables.product.prodname_codeql_cli %} to compile and run queries.
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/configuring-access-to-the-codeql-cli
contentType: how-tos
---

The {% data variables.product.prodname_codeql %} extension automatically installs a compatible version of the {% data variables.product.prodname_codeql_cli %}. This instance of the {% data variables.product.prodname_codeql_cli %} is not accessible from the terminal.

If you already have the {% data variables.product.prodname_codeql_cli %} installed and added to your `PATH`, the extension will use that version.

## Installing version updates

The extension checks for updates to the {% data variables.product.prodname_codeql_cli %} automatically and prompts you to accept the updated version.

You can check for updates manually with the **{% data variables.product.prodname_codeql %}: Check for CLI Updates** command from the {% data variables.product.prodname_vscode_command_palette_shortname %}.

## Using a different {% data variables.product.prodname_codeql_cli %} installation

To override the default behavior and use a specific version of the {% data variables.product.prodname_codeql_cli %}, you can specify the {% data variables.product.prodname_codeql_cli %} **Executable Path** in the extension settings. See [AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings).

## Troubleshooting

You can check the {% data variables.product.prodname_codeql %} Extension log for error messages or to see the location of the {% data variables.product.prodname_codeql_cli %} being used. See [AUTOTITLE](/code-security/codeql-for-vs-code/troubleshooting-codeql-for-vs-code/accessing-logs).
