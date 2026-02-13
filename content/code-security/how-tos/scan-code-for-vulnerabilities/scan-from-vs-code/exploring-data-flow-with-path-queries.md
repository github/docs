---
title: Exploring data flow with path queries
shortTitle: Explore data flow
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
intro: Detect potential vulnerabilities by running path queries and analyzing your data flow.
redirect_from:
  - /code-security/codeql-for-vs-code/exploring-data-flow-with-path-queries
  - /code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/exploring-data-flow-with-path-queries
contentType: how-tos
---

## Prerequisites

Before you can effectively use path queries, you should understand the basics of data flow analysis. See [About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/) in the {% data variables.product.prodname_codeql %} documentation.

## Running path queries in {% data variables.product.prodname_vscode_shortname %} locally

1. Open a path query in {% data variables.product.prodname_vscode_shortname %}. A path query is a {% data variables.product.prodname_codeql %} query with the property `@kind path-problem`.
1. Right-click in the window with the query open, then select **{% data variables.product.prodname_codeql %}: Run Query on Selected Database**. Alternatively, you can also run this from the {% data variables.product.prodname_vscode_command_palette_shortname %}.
1. Once the query has finished running, you can see the results in the "Results" view (under `alerts` in the dropdown menu). Each query result describes the flow of information between a source and a sink.
1. Expand the result to see the individual steps that the data follows.
1. Click each step to jump to it in the source code and investigate the problem further.

## Next steps

{% ifversion codeql-vs-code-mrva %}

You can use the "Variant Analysis Repositories" view to run a query against up to 1,000 repositories on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis).

{% endif %}

To start writing your own path queries, see [Creating path queries](https://codeql.github.com/docs/writing-codeql-queries/creating-path-queries/#creating-path-queries) in the {% data variables.product.prodname_codeql %} documentation.
