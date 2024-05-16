---
title: Configuring access to the CodeQL CLI
shortTitle: CodeQL CLI access
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'The {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension uses the {% data variables.product.prodname_codeql_cli %} to compile and run queries.'
allowTitleToDifferFromFilename: true
---

## Configuring access to the {% data variables.product.prodname_codeql_cli %}

If you already have the {% data variables.product.prodname_codeql_cli %} installed and added to your `PATH`, the extension will use that version. This might be the case if you create your own {% data variables.product.prodname_codeql %} databases instead of downloading them from {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)."

Otherwise, the extension automatically manages access to the executable of the {% data variables.product.prodname_codeql_cli %} for you. This ensures that the {% data variables.product.prodname_codeql_cli %} is compatible with the {% data variables.product.prodname_codeql %} extension. You can also check for updates with the **{% data variables.product.prodname_codeql %}: Check for CLI Updates** command from the {% data variables.product.prodname_vscode_command_palette_shortname %}.

{% note %}

**Notes:**

- The extension-managed {% data variables.product.prodname_codeql_cli %} is not accessible from the terminal. If you intend to use the CLI outside of the extension (for example to create databases), we recommend that you install your own copy of the {% data variables.product.prodname_codeql_cli %}."

- To override the default behavior and use a specific version of the {% data variables.product.prodname_codeql_cli %}, you can specify the {% data variables.product.prodname_codeql_cli %} **Executable Path** in the extension settings. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings)."

{% endnote %}

## Troubleshooting

If you have any difficulty setting up access to the {% data variables.product.prodname_codeql_cli %}, check the {% data variables.product.prodname_codeql %} Extension log for error messages or to see the location of the {% data variables.product.prodname_codeql_cli %} being used. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/troubleshooting-codeql-for-vs-code/accessing-logs)." In particular, in the Extension log you can see the location of the {% data variables.product.prodname_codeql_cli %} that is being used. This is useful if you want to see whether this is an extension-managed CLI or an external one.

If you use the extension-managed {% data variables.product.prodname_codeql_cli %}, the extension checks for updates automatically (or with the **{% data variables.product.prodname_codeql %}: Check for CLI Updates** command) and prompts you to accept the updated version. If you use an external CLI, you need to update it manually (when updates are necessary).
