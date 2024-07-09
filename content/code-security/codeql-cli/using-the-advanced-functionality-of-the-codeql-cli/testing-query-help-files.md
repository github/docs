---
title: Testing query help files
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to preview your query help files as Markdown and ensure they are valid.'
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
  - /code-security/codeql-cli/testing-query-help-files
  - /code-security/codeql-cli/using-the-codeql-cli/testing-query-help-files
---

## About testing query help files

Test query help files by rendering them as Markdown to ensure they are valid before uploading them to the {% data variables.product.prodname_codeql %} repository or using them in code scanning.

<!-- capitalized Markdown -->

Query help is documentation that accompanies a query to explain how the query works, as well as providing information about the potential problem that the query identifies. It is good practice to write query help for all new queries. For more information, see [Contributing to {% data variables.product.prodname_codeql %}](https://github.com/github/codeql/blob/main/CONTRIBUTING.md) in the {% data variables.product.prodname_codeql %} repository.

The {% data variables.product.prodname_codeql_cli %} includes a command to test query help and render the content as markdown, so that you can easily preview the content in your IDE. Use the command to validate query help files before uploading them to the {% data variables.product.prodname_codeql %} repository or sharing them with other users. From {% data variables.product.prodname_codeql_cli %} 2.7.1 onwards, you can also include the markdown-rendered query help in SARIF files
generated during {% data variables.product.prodname_codeql %} analyses so that the query help can be displayed in the code scanning UI. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)."

## Prerequisites

* The query help (`.qhelp`) file must have an accompanying query (`.ql`) file with an identical base name.
* The query help file should follow the standard structure and style for query help documentation. For more information, see the [Query help style guide](https://github.com/github/codeql/blob/main/docs/query-help-style-guide.md) in the {% data variables.product.prodname_codeql %} repository.

## Running `codeql generate query-help`

You can test query help files by running the following command:

```shell
codeql generate query-help <qhelp|query|dir|suite> --format=<format> [--output=<dir|file>]
```

For this command `<qhelp|query|dir|suite>` must be the path to a `.qhelp` file, the path to a `.ql` file, the path to a directory containing queries and query help files, or the path to a query suite.

You must specify a `--format` option, which defines how the query help is rendered. Currently, you must specify `markdown` to render the query help as markdown.

The `--output` option defines a file path where the rendered query help will be saved.

* For directories containing `.qhelp` files or a query suites defining one or more `.qhelp` files, you must specify an `--output` directory. Filenames within the output directory will be derived from the `.qhelp` file names.
* For single `.qhelp` or `.ql` files, you may specify an `--output` option. If you don’t specify an output path, the rendered query help is written to `stdout`.

For full details of all the options you can use when testing query help files, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/generate-query-help)."

## Results

When you run the command, {% data variables.product.prodname_codeql %} attempts to render each `.qhelp` file that has an accompanying `.ql` file. For single files, the rendered content will be printed to `stdout` if you don’t specify an `--output` option. For all other use cases, the rendered content is saved to the specified output path.

By default, the {% data variables.product.prodname_codeql_cli %} will print a warning message if:

* Any of the query help is invalid, along with a description of the invalid query help elements
* Any `.qhelp` files specified in the command don’t have the same base name as an accompanying `.ql` file
* Any `.ql` files specified in the command don’t have the same base name as an accompanying `.qhelp` file

You can tell the {% data variables.product.prodname_codeql_cli %} how to handle these warnings by including a `--warnings` option in your command. For more information, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/generate-query-help#--warningsmode)."

## Further reading

* "[Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files)"
