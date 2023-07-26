---
title: Using custom queries with the CodeQL CLI
intro: 'You can write your own {% data variables.product.prodname_codeql %} queries to find specific vulnerabilities and errors.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/using-custom-queries-with-the-codeql-cli
  - /code-security/codeql-cli/using-the-codeql-cli/using-custom-queries-with-the-codeql-cli
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

## About custom queries and the {% data variables.product.prodname_codeql_cli %}

<!-- tweaked title to fit "About" styling of conceptual intro section -->

You can customize your {% data variables.product.prodname_codeql %} analyses by writing your own queries to highlight specific vulnerabilities or errors.

This topic is specifically about writing queries to use with the [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-analyze) command to produce [interpreted results](https://codeql.github.com/docs/codeql-overview/about-codeql/#interpret-query-results).

{% data reusables.codeql-cli.advanced-query-execution %}

<!-- created a reusable since it's a reusable on the microsite -->

## Writing a valid query

Before running a custom analysis you need to write a valid query, and save it in a file with a `.ql` extension. There is extensive documentation available to help you write queries. For more information, see "[{% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/#codeql-queries)."

## Including query metadata

Query metadata is included at the top of each query file. It provides users with information about the query, and tells the {% data variables.product.prodname_codeql_cli %} how to process the query results.

When running queries with the `database analyze` command, you must include the following two properties to ensure that the results are interpreted correctly:

- Query identifier (`@id`): a sequence of words composed of lowercase letters or digits, delimited by `/` or `-`, identifying and classifying the query.

- Query type (`@kind`): identifies the query as a simple alert (`@kind problem`), an alert documented by a sequence of code locations (`@kind path-problem`), for extractor troubleshooting (`@kind diagnostic`), or a summary metric (`@kind metric` and `@tags summary`).

For more information about these metadata properties, see "[Metadata for {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/#metadata-for-codeql-queries)" and the [Query metadata style guide](https://github.com/github/codeql/blob/main/docs/query-metadata-style-guide.md).

{% note %}

**Note:** Metadata requirements may differ if you want to use your query with other applications. For more information, see "[Metadata for {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/#metadata-for-codeql-queries)."

{% endnote %}

{% ifversion codeql-packs %}

## Packaging custom QL queries

{% data reusables.codeql-cli.beta-note-package-management %}

<!-- using reusable re-created by Felicity -->

When you write your own queries with the intention to share them with others, you should save them in a custom {% data variables.product.prodname_codeql %} pack. You can publish the pack as a {% data variables.product.prodname_codeql %} pack to {% data variables.product.prodname_registry %} - the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."

<!-- tweaked to "For more information, see X" to match our style guide -->

{% data variables.product.prodname_codeql %} packs organize the files used in {% data variables.product.prodname_codeql %} analysis and can store queries, library files, query suites, and important metadata. Their root directory must contain a file named `qlpack.yml`. Your custom queries should be saved in the {% data variables.product.prodname_codeql %} pack root, or its subdirectories.

For each {% data variables.product.prodname_codeql %} pack, the `qlpack.yml` file includes information that tells the {% data variables.product.prodname_codeql_cli %} how to compile the queries, which other {% data variables.product.prodname_codeql %} packs and libraries the pack depends on, and where to find query suite definitions. For more information about what to include in this file, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#codeqlpack-yml-properties)."

{% endif %}

## Contributing to the {% data variables.product.prodname_codeql %} repository

If you would like to share your query with other {% data variables.product.prodname_codeql %} users, you can open a pull request in the [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql). For more information, see [Contributing to {% data variables.product.prodname_codeql %}](https://github.com/github/codeql/blob/main/CONTRIBUTING.md).

<!-- tweaked to "For more information, see X" to match our style guide -->

## Further reading

- "[{% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/#codeql-queries)"
