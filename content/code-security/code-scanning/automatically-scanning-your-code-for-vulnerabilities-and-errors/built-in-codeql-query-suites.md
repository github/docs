---
title: Built-in CodeQL query suites
shortTitle: Built-in CodeQL query suites
intro: 'You can choose from different built-in {% data variables.product.prodname_codeql %} query suites to use in your {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} setup.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-without-workflow
type: reference
topics:
  - Code scanning
  - CodeQL
---

## About {% data variables.product.prodname_codeql %} query suites

With {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you can select a specific group of {% data variables.product.prodname_codeql %} queries, called a {% data variables.product.prodname_codeql %} query suite, to run against your code. The following built-in query suites are available through {% data variables.product.prodname_dotcom %}:

- the `code-scanning` query suite.
- the `security-extended` query suite.

Currently, both the `code-scanning` query suite and the `security-extended` query suite are available for the default setup for {% data variables.product.prodname_code_scanning %}. For more information on the default setup, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically)."

To use a custom query suite, you must create an advanced setup for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information on advanced setups and creating a query suite, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)" and "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-query-suites)."

## Built-in {% data variables.product.prodname_codeql %} query suites

The built-in {% data variables.product.prodname_codeql %} query suites, `code-scanning` and `security-extended`, are created and maintained by {% data variables.product.prodname_dotcom %}. Both of these query suites are available for every {% data variables.product.prodname_codeql %}-supported language. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)."

### `code-scanning` query suite

- The `code-scanning` query suite is the group of queries run by default in {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_dotcom %}.
- The queries in the `code-scanning` query suite are highly precise and return few false positive {% data variables.product.prodname_code_scanning %} results. Relative to the `security-extended` query suite, the `code-scanning` suite returns fewer low-confidence {% data variables.product.prodname_code_scanning %} results.
- This query suite is available for use with the default setup for {% data variables.product.prodname_code_scanning %}.

### `security-extended` query suite

- The `security-extended` query suite consists of all the queries in the `code-scanning` query suite, plus additional queries with slightly lower precision and severity.
- Relative to the `code-scanning` query suite, the `security-extended` suite may return a greater number of false positive {% data variables.product.prodname_code_scanning %} results.
- This query suite is available for use with the default setup for {% data variables.product.prodname_code_scanning %}.

## Further reading

- "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-query-suites)"
