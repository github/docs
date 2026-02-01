---
title: GitHub Actions queries for CodeQL analysis
shortTitle: Actions queries
intro: Explore the queries that {% data variables.product.prodname_codeql %} uses to analyze code written in {% data variables.product.prodname_actions %} workflow files when you select the `default` or the `security-extended` query suite.
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '>3.17'
  ghec: '*'
topics:
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/code-scanning/managing-your-code-scanning-configuration/actions-built-in-queries
  - /code-security/code-scanning/managing-your-code-scanning-configuration/github-actions-built-in-queries
  - /code-security/code-scanning/reference/code-ql-built-in-queries/actions-built-in-queries
contentType: reference
---

{% data variables.product.prodname_codeql %} includes many queries for analyzing {% data variables.product.prodname_actions %} workflows. {% data reusables.code-scanning.codeql-query-tables.query-suite-behavior %}

## Built-in queries for {% data variables.product.prodname_actions %} analysis

{% data reusables.code-scanning.codeql-query-tables.codeql-version-info %}

{% data reusables.code-scanning.codeql-query-tables.actions %}
