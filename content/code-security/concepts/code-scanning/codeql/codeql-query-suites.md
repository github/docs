---
title: CodeQL query suites
shortTitle: CodeQL query suites
intro: You can choose from different built-in {% data variables.product.prodname_codeql %} query suites to use in your {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} setup.
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/built-in-codeql-query-suites
  - /code-security/code-scanning/managing-your-code-scanning-configuration/built-in-codeql-query-suites
  - /code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites
topics:
  - Code scanning
  - CodeQL
contentType: concepts
---

## What are query suites?

Query suites allow you to pass multiple queries to {% data variables.product.prodname_codeql %} without having to specify the path to each query file individually. They provide a way of selecting queries based on their filename, metadata properties, or location on disk or in a {% data variables.product.prodname_codeql %} pack.

You should use query suites for the queries that you want to frequently use in your {% data variables.product.prodname_codeql %} analyses. You can use a built-in query suite available through {% data variables.product.github %}, or you can create your own.

## Built-in {% data variables.product.prodname_codeql %} query suites

The built-in {% data variables.product.prodname_codeql %} query suites, `default` and `security-extended`, are created and maintained by {% data variables.product.prodname_dotcom %}. Both of these query suites are available with default setup for every {% data variables.product.prodname_codeql %}-supported language.

Organization owners and security managers can recommend a query suite for use with default setup throughout their organization. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale).

For a complete list of queries included in each query suite for every language, see [AUTOTITLE](/code-security/code-scanning/reference/code-ql-built-in-queries).

### `default` query suite

* The `default` query suite is the group of queries run by default in {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_dotcom %}.
* The queries in the `default` query suite are highly precise and return few false positive {% data variables.product.prodname_code_scanning %} results. Relative to the `security-extended` query suite, the `default` suite returns fewer low-confidence {% data variables.product.prodname_code_scanning %} results.
* This query suite is available for use with default setup for {% data variables.product.prodname_code_scanning %}.

### `security-extended` query suite

* The `security-extended` query suite consists of all the queries in the `default` query suite, plus additional queries with slightly lower precision and severity.
* Relative to the `default` query suite, the `security-extended` suite may return a greater number of false positive {% data variables.product.prodname_code_scanning %} results.
* This query suite is available for use with default setup for {% data variables.product.prodname_code_scanning %}, and is referred to as the "Extended" query suite on {% data variables.product.prodname_dotcom %}.

## Custom query suites

To use a custom query suite, you must configure advanced setup for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning).

Query suite definitions are stored in YAML files with the extension `.qls`. A suite definition is a sequence of instructions, where each instruction is a YAML mapping with (usually) a single key. The instructions are executed in the order they appear in the query suite definition. After all the instructions in the suite definition have been executed, the result is a set of selected queries. For more information, see [AUTOTITLE](/code-security/tutorials/customize-code-scanning/creating-codeql-query-suites).

## Further reading

* [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)
