---
title: C# CodeQL queries for Code Quality
shortTitle: C# queries
allowTitleToDifferFromFilename: true
intro: Explore the queries that {% data variables.product.prodname_codeql %} uses to analyze code quality for code written in C#.
versions:
  feature: code-quality
topics:
  - Code Quality
contentType: reference
redirect_from:
  - /code-security/code-quality/reference/codeql-queries/csharp-queries
---

{% data variables.product.prodname_code_quality_short %} uses the following {% data variables.product.prodname_codeql %} queries to analyze C# code and detect code quality issues on:

* Your **default branch**, with results shown on the repository's "{% data variables.code-quality.all_findings %}" dashboard
* **Pull requests**, with findings shown as comments made by `{% data variables.code-quality.pr_commenter %}`

{% data variables.copilot.copilot_autofix_short %} suggestions are provided for findings where possible.

{% data reusables.code-quality.codeql-query-tables.csharp %}
