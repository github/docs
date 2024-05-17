---
title: Exploring data flow with path queries
shortTitle: Explore data flow
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can run {% data variables.product.prodname_codeql %} queries in {% data variables.product.prodname_vscode %} to help you track the flow of data through a program, highlighting areas that are potential security vulnerabilities.'
redirect_from:
  - /code-security/codeql-for-vs-code/exploring-data-flow-with-path-queries
---

## About path queries

A path query is a {% data variables.product.prodname_codeql %} query with the property `@kind path-problem`. You can find a number of these in the standard {% data variables.product.prodname_codeql %} libraries.

You can run the standard {% data variables.product.prodname_codeql %} path queries to identify security vulnerabilities and manually look through the results. For more information about how {% data variables.product.prodname_codeql %} tracks data flow, see "[About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)" in the {% data variables.product.prodname_codeql %} documentation.

Once you're familiar with data flow analysis and existing queries, you can write your own path queries in {% data variables.product.prodname_codeql %}. For more information, see "[Next steps](#next-steps)."

## Running path queries in {% data variables.product.prodname_vscode_shortname %} locally

1. Open a path query in {% data variables.product.prodname_vscode_shortname %}.
1. Right-click in the window with the query open, and select **{% data variables.product.prodname_codeql %}: Run Query on Selected Database**. Alternatively, you can also run this from the {% data variables.product.prodname_vscode_command_palette_shortname %}.
1. Once the query has finished running, you can see the results in the "Results" view (under `alerts` in the dropdown menu). Each query result describes the flow of information between a source and a sink.
1. Expand the result to see the individual steps that the data follows.
1. Click each step to jump to it in the source code and investigate the problem further.

## Next steps

{% ifversion codeql-vs-code-mrva %}

When you are ready to run a path query at scale, you can use the "Variant Analysis Repositories" view to run the query against up to 1,000 repositories on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis)."

{% endif %}

For information about how to use the correct format and metadata for your own path queries, see "[Creating path queries](https://codeql.github.com/docs/writing-codeql-queries/creating-path-queries/#creating-path-queries)" in the {% data variables.product.prodname_codeql %} documentation. The {% data variables.product.prodname_codeql %} documentation also contains detailed information about how to define new sources and sinks, as well as templates and examples of how to extend the standard {% data variables.product.prodname_codeql %} libraries to suit your analysis.
