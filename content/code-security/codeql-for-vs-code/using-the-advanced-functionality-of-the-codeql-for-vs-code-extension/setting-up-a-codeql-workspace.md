---
title: Setting up a CodeQL workspace
shortTitle: CodeQL workspace setup
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'When you''re working with {% data variables.product.prodname_codeql %}, you need access to the standard libraries and queries.'
allowTitleToDifferFromFilename: true
---

## Setting up a {% data variables.product.prodname_codeql %} workspace

There are several different ways to give the extension access to the standard libraries and queries from the [`github/codeql`](https://github.com/github/codeql) repository:

- Use the {% data variables.product.prodname_codeql %} starter workspace, which contains a series of directories named in the format `codeql-custom-queries-LANGUAGE`. These are ready for you to start developing your own custom queries for each language, using the standard libraries. There are also some example queries to get you started. This is the recommended method.

- Update an existing workspace for {% data variables.product.prodname_codeql %}. This is recommended for advanced users.

- {% data variables.product.prodname_codeql_cli %} users can open the directory containing their extracted {% data variables.product.prodname_codeql_cli %} archive.

### Option 1: Using the starter workspace (recommended)

{% note %}

**Note:** The {% data variables.product.prodname_codeql %} repository is included as a submodule in the starter workspace. You should use `git submodule update --remote` regularly to keep the submodules up to date, and ensure that they remain compatible with newer versions of the {% data variables.product.prodname_vscode_shortname %} extension and the {% data variables.product.prodname_codeql_cli %}.

{% endnote %}

1. Clone the [vscode-codeql-starter repository](https://github.com/github/vscode-codeql-starter/) to your computer. Make sure you include the submodules, either by using `git clone --recursive`, or by using `git submodule update --init --remote` after cloning.

1. In {% data variables.product.prodname_vscode_shortname %}, click **File** then **Open Workspace from File...** to open the `vscode-codeql-starter.code-workspace` file from your checkout of the workspace repository.

### Option 2: Updating an existing workspace for {% data variables.product.prodname_codeql %} (advanced)

1. In {% data variables.product.prodname_vscode_shortname %}, select **File** then **Add Folder to Workspace...**, and find your local checkout of the [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql).

1. Create one new directory per target language to hold custom queries and libraries, using either the **New Folder** or **Add Folder to Workspace...** options.

1. Create a `qlpack.yml` file in each target language directory (the `main` branch of `github/codeql` already has these files). This tells the {% data variables.product.prodname_codeql_cli %} the target language for that directory and what its dependencies are. {% data variables.product.prodname_codeql %} will look for the dependencies in all the open workspace directories, or on the user's search path.

    For example, to make a custom {% data variables.product.prodname_codeql %} directory called `my-custom-cpp-pack` depend on the {% data variables.product.prodname_codeql %} standard library for C++, create a `qlpack.yml` file with the following contents:

    ```yaml
    name: my-custom-cpp-pack
    version: 0.0.0
    libraryPathDependencies: codeql/cpp-all
    ```

    For more information about why you need to add a `qlpack.yml` file, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-reference/about-codeql-packs)."

### Option 3: Open the directory containing the extracted {% data variables.product.prodname_codeql_cli %} archive

{% note %}

**Note:** For this option, you need to set up the  {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

{% endnote %}

In {% data variables.product.prodname_vscode_shortname %}, open the directory where you extracted the {% data variables.product.prodname_codeql_cli %} .zip archive to create a {% data variables.product.prodname_codeql %} directory (for example `codeql-home`).
