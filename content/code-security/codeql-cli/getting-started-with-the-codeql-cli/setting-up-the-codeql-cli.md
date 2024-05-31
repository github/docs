---
title: Setting up the CodeQL CLI
intro: 'To get started with the {% data variables.product.prodname_codeql_cli %}, you need to download and set up the CLI so that it can access the tools and libraries required to create and analyze databases.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/using-the-codeql-cli/getting-started-with-the-codeql-cli
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
  - /code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system

---

## Setting up the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.codeql-cli-version-ghes %}

To run {% data variables.product.prodname_codeql %} commands, you need to set up the CLI so that it can access
the tools, queries, and libraries required to create and analyze databases.

The {% data variables.product.prodname_codeql_cli %} can be set up to support many different use cases and directory structures. To get started quickly, we recommend adopting a relatively simple setup, as outlined in the steps below.

If you plan to use the {% data variables.product.prodname_codeql_cli %} for security research or to test or contribute queries, you may want a more advanced setup of {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/advanced-setup-of-the-codeql-cli)."

If you are setting up the {% data variables.product.prodname_codeql_cli %} in your CI system, you need to make the full contents of the {% data variables.product.prodname_codeql_cli %} bundle available to every CI server that you want to run {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} analysis on. For example, you might configure each server to copy the bundle from a central, internal location and extract it. Alternatively, you could use the REST API to get the bundle directly from {% data variables.product.prodname_dotcom %}, ensuring that you benefit from the latest improvements to queries. For more information, see "[AUTOTITLE](/rest/releases)" in the REST API documentation.

If you are using macOS on Apple Silicon (for example, Apple M1), ensure that the [Xcode command-line developer
tools](https://developer.apple.com/downloads/index.action) and [Rosetta 2](https://support.apple.com/en-us/HT211861) are installed.

{% note %}

**Note:** The {% data variables.product.prodname_codeql_cli %} is currently not compatible with non-glibc Linux distributions such as (muslc-based) Alpine Linux.

{% endnote %}

### 1. Download the {% data variables.product.prodname_codeql_cli %} zip package

{% data reusables.codeql-cli.download-codeql-cli-zip %}

You should always use the {% data variables.product.prodname_codeql %} bundle as this ensures compatibility and also gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.gz` file. Alternatively, you can download `codeql-bundle.tar.gz`, which contains the CLI for all supported platforms.

#### Download information for macOS "Catalina" (or newer) users

{% data reusables.codeql-cli.download-info-macos-catalina-or-newer %}

### 2. Extract the zip archive

For Linux, Windows, and macOS users (version 10.14 "Mojave", and earlier) simply extract the zip archive.

#### Extraction information for macOS "Catalina" (or newer) users

{% data reusables.codeql-cli.extraction-info-macos-catalina-or-newer %}

### 3. Launch `codeql`

{% data reusables.codeql-cli.launch-codeql %}

{% note %}

**Note:** If you add `codeql` to your `PATH`, it can be accessed by {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} to compile and run queries.
 For more information about configuring {% data variables.product.prodname_vscode_shortname %} to access the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/configuring-access-to-the-codeql-cli)."

 {% endnote %}

## Testing the {% data variables.product.prodname_codeql_cli %} configuration

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the following command to verify that the CLI is correctly configured to create and analyze databases:

- `codeql resolve qlpacks` if `/<extraction-root>/codeql` is on the `PATH`.
- `/<extraction-root>/codeql/codeql resolve qlpacks` otherwise.

You should see output similar to the extract below, if successful:

```shell
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

You should check that the output contains the expected languages and also that the directory location for the qlpack files is correct. The location should be within the extracted {% data variables.product.prodname_codeql_cli %} bundle, shown in the earlier example as `<extraction root>`. If the {% data variables.product.prodname_codeql_cli %} is unable to locate the qlpacks for the expected languages, check that you downloaded the {% data variables.product.prodname_codeql %} bundle and not a standalone copy of the {% data variables.product.prodname_codeql_cli %}.

You can also run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your {% data variables.product.prodname_codeql_cli %} package.

{% ifversion codeql-packs %}
Optionally, you can download some CodeQL packs containing pre-compiled queries you would like to run. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."

{% endif %}

## Next steps

To learn how to prepare your code to be analyzed by the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/preparing-your-code-for-codeql-analysis)."
