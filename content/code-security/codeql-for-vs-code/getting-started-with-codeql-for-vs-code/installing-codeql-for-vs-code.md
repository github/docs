---
title: Installing CodeQL for Visual Studio Code
shortTitle: Extension installation
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'To get started with {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %}, you need to install and set up the extension.'
allowTitleToDifferFromFilename: true
---

## Prerequisites

The {% data variables.product.prodname_codeql %} extension requires a minimum of {% data variables.product.prodname_vscode %} 1.82.0. Older versions are not supported.

## Installing the extension

You can install the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension using one of several different methods:

- Using the {% data variables.product.prodname_vscode %} Marketplace in a browser.

- Searching in the "Extensions" view in {% data variables.product.prodname_vscode %}.

- Using a VSIX file.

### Using the {% data variables.product.prodname_vscode %} Marketplace

1. In your browser, go to the ["{% data variables.product.prodname_codeql %}" page](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-codeql) in the {% data variables.product.prodname_vscode %} Marketplace.

1. Click **Install**, then follow the on-screen prompts.

### Searching in the "Extensions" view

1. In {% data variables.product.prodname_vscode_shortname %}, open the "Extensions" view.

1. Search for "{% data variables.product.prodname_codeql %}", then click **Install**.

### Using the {% data variables.product.prodname_codeql %} VSIX file

1. Download the [{% data variables.product.prodname_codeql %} VSIX file](https://github.com/github/vscode-codeql/releases) from the `github/vscode-codeql` repository on {% data variables.product.prodname_dotcom %}.

1. In {% data variables.product.prodname_vscode_shortname %}, open the "Extensions" view.

1. At the top right of the sidebar, click the ellipsis then click **Install from VSIX...**.

1. Select the {% data variables.product.prodname_codeql %} VSIX file downloaded in step 1.

1. Follow the on-screen prompts to complete the installation.

## Next steps

To learn how to work with {% data variables.product.prodname_codeql %} databases in the extension, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/managing-codeql-databases)."

If you have already found, downloaded, or created a {% data variables.product.prodname_codeql %} database, you can learn how to use the extension to run queries on {% data variables.product.prodname_codeql %} databases and view the results. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries)."

{% ifversion codeql-model-packs %}

To learn how to model additional dependencies of a codebase and improve your {% data variables.product.prodname_code_scanning %} results, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/using-the-codeql-model-editor)."

{% endif %}

To learn how to configure access to a different version of the {% data variables.product.prodname_codeql_cli %} than the one installed with the extension, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/configuring-access-to-the-codeql-cli)."

To learn how to set up a {% data variables.product.prodname_codeql %} workspace, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/setting-up-a-codeql-workspace)."
