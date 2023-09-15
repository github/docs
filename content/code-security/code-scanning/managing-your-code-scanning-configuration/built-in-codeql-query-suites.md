---
title: Built-in CodeQL query suites
shortTitle: Built-in CodeQL query suites
intro: 'You can choose from different built-in {% data variables.product.prodname_codeql %} query suites to use in your {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} setup.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-without-workflow
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/built-in-codeql-query-suites
type: reference
topics:
  - Code scanning
  - CodeQL
---

## About {% data variables.product.prodname_codeql %} query suites

With {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you can select a specific group of {% data variables.product.prodname_codeql %} queries, called a {% data variables.product.prodname_codeql %} query suite, to run against your code. The following built-in query suites are available through {% data variables.product.prodname_dotcom %}:

- the `default` query suite.
- the `security-extended` query suite. This suite is referred to as the "Extended" query suite on {% data variables.product.prodname_dotcom %}.

Currently, both the `default` query suite and the `security-extended` query suite are available for default setup for {% data variables.product.prodname_code_scanning %}. {% ifversion bulk-code-scanning-query-suite %}Additionally, organization owners and security managers can recommend a query suite for use with default setup throughout their organization. For more information on configuring default setup for individual repositories, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)." For more information on configuring default setup at scale and recommending a query suite, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."{% else %}For more information on default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."{% endif %}

To use a custom query suite, you must configure advanced setup for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information on advanced setups and creating a query suite, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)" and "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)."

## Built-in {% data variables.product.prodname_codeql %} query suites

The built-in {% data variables.product.prodname_codeql %} query suites, `default` and `security-extended`, are created and maintained by {% data variables.product.prodname_dotcom %}. Both of these query suites are available for every {% data variables.product.prodname_codeql %}-supported language. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

### `default` query suite

- The `default` query suite is the group of queries run by default in {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_dotcom %}.
- The queries in the `default` query suite are highly precise and return few false positive {% data variables.product.prodname_code_scanning %} results. Relative to the `security-extended` query suite, the `default` suite returns fewer low-confidence {% data variables.product.prodname_code_scanning %} results.
- This query suite is available for use with default setup for {% data variables.product.prodname_code_scanning %}.

### `security-extended` query suite

- The `security-extended` query suite consists of all the queries in the `default` query suite, plus additional queries with slightly lower precision and severity.
- Relative to the `default` query suite, the `security-extended` suite may return a greater number of false positive {% data variables.product.prodname_code_scanning %} results.
- This query suite is available for use with default setup for {% data variables.product.prodname_code_scanning %}, and is referred to as the "Extended" query suite on {% data variables.product.prodname_dotcom %}.

## Further reading

- "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-codeql-query-suites)"
