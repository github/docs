---
title: Writing and sharing custom queries for the CodeQL CLI
shortTitle:  Write and share queries
intro: You can write your own {% data variables.product.prodname_codeql %} queries to find specific vulnerabilities and errors.
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/using-custom-queries-with-the-codeql-cli
  - /code-security/codeql-cli/using-the-codeql-cli/using-custom-queries-with-the-codeql-cli
  - /code-security/how-tos/scan-code-for-vulnerabilities/scan-from-the-command-line/using-custom-queries-with-the-codeql-cli
contentType: how-tos
---

This article is specifically about writing queries to use with the [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-analyze) command to produce [interpreted results](https://codeql.github.com/docs/codeql-overview/about-codeql/#interpret-query-results). For conceptual information about custom queries, see [AUTOTITLE](/code-security/concepts/code-scanning/codeql/custom-codeql-queries).

## Writing a valid query

Before running a custom analysis you need to write a valid query, and save it in a file with a `.ql` extension. There is extensive documentation available to help you write queries. For more information, see [{% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/#codeql-queries).

## Including query metadata

When running queries with the `database analyze` command, you must include the following two properties to ensure that the results are interpreted correctly:

* Query identifier (`@id`): a sequence of words composed of lowercase letters or digits, delimited by `/` or `-`, identifying and classifying the query.

* Query type (`@kind`): identifies the query as a simple alert (`@kind problem`), an alert documented by a sequence of code locations (`@kind path-problem`), for extractor troubleshooting (`@kind diagnostic`), or a summary metric (`@kind metric` and `@tags summary`).

For more information about these metadata properties, see [Metadata for {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/#metadata-for-codeql-queries) and the [Query metadata style guide](https://github.com/github/codeql/blob/main/docs/query-metadata-style-guide.md).

## Packaging custom queries

When you write queries to share with others, save them in a custom {% data variables.product.prodname_codeql %} pack.

To package your custom queries:

1. Create a {% data variables.product.prodname_codeql %} pack with a `qlpack.yml` file in the root directory.
1. Save your custom queries (`.ql` files) in the pack root or its subdirectories.
1. Configure the `qlpack.yml` file to specify:
   * How to compile the queries
   * Dependencies on other {% data variables.product.prodname_codeql %} packs and libraries
   * Query suite definitions
   For more information about `qlpack.yml` properties, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#codeqlpack-yml-properties).
1. Publish your pack to {% data variables.product.prodname_registry %} - the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}. For more information, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs).

## Including query help for custom {% data variables.product.prodname_codeql %} queries in SARIF files

For information about query help and documentation formats, see [AUTOTITLE](/code-security/concepts/code-scanning/codeql/custom-codeql-queries#query-documentation).

To include query help in SARIF files when running code scanning analyses:

1. Write your query help in one of the following formats:
   * **Markdown file**: Save a Markdown file alongside your query with the same name (for example, `my-query.md` for `my-query.ql`)
   * **`.qhelp` file**: Write query help in `.qhelp` format, then convert it to Markdown before running the analysis. For more information, see [Query help files](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files) and [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/testing-query-help-files).
1. Run `codeql database analyze` with the `--sarif-add-query-help` option:

   ```shell
   codeql database analyze <database> --format=sarif-latest --output=results.sarif --sarif-add-query-help
   ```

   > [!NOTE]
	 > The `--sarif-add-query-help` option is available from {% data variables.product.prodname_codeql_cli %} v2.7.1 onwards.
1. Upload the SARIF file to {% data variables.product.github %}.

## Further reading

* [{% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/#codeql-queries)
