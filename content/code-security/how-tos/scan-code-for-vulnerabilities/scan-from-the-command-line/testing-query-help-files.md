---
title: Testing query help files
shortTitle: Test query help files
intro: Ensure your {% data variables.product.prodname_codeql %} query help files are valid by previewing them as Markdown.
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/codeql-cli/testing-query-help-files
  - /code-security/codeql-cli/using-the-codeql-cli/testing-query-help-files
  - /code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/testing-query-help-files
contentType: how-tos
category:
  - Customize vulnerability detection with CodeQL
---

## Prerequisites

* The query help (`.qhelp`) files must have accompanying query (`.ql`) files with identical base names.
* The query help files should follow the standard structure and style for query help documentation. For more information, see the [Query help style guide](https://github.com/github/codeql/blob/main/docs/query-help-style-guide.md) in the {% data variables.product.prodname_codeql %} repository.

## Previewing your query help files

1. To render your query help files as Markdown, run the following command:

    ```shell copy
    codeql generate query-help <qhelp|query|dir|suite> --format=markdown [--output=<dir|file>]
    ```

    For information on the options available for this command, see [AUTOTITLE](/code-security/reference/code-scanning/codeql/codeql-cli-manual/generate-query-help).

1. If you receive any warning messages, review and fix them, then rerun the command. By default, the {% data variables.product.prodname_codeql_cli %} will print a warning message if:
    * Any of the query help is invalid
    * Any `.qhelp` files specified in the command don’t have the same base name as an accompanying `.ql` file
    * Any `.ql` files specified in the command don’t have the same base name as an accompanying `.qhelp` file
1. Review the rendered Markdown in your output directory, file, or terminal to check that your files appear as expected.

## Further reading

* [Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files)
* [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/generate-query-help)
