---
title: About code scanning with CodeQL
shortTitle: Code scanning with CodeQL
intro: 'You can use {% data variables.product.prodname_codeql %} to identify vulnerabilities and errors in your code. The results are shown as {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.product.prodname_code_scanning %} 与 {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

There are two main ways to use {% data variables.product.prodname_codeql %} analysis for {% data variables.product.prodname_code_scanning %}:

- Add the {% data variables.product.prodname_codeql %} workflow to your repository. This uses the [github/codeql-action](https://github.com/github/codeql-action/) to run the {% data variables.product.prodname_codeql_cli %}. 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”。
- Run the {% data variables.product.prodname_codeql %} {% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}CLI directly {% elsif ghes = 3.0 %}CLI or runner {% else %}runner {% endif %} in an external CI system and upload the results to {% data variables.product.prodname_dotcom %}. For more information, see "[About {% data variables.product.prodname_codeql %} code scanning in your CI system ](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

## 关于 {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} treats code like data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers.

1. You generate a {% data variables.product.prodname_codeql %} database to represent your codebase.
2. Then you run {% data variables.product.prodname_codeql %} queries on that database to identify problems in the codebase.
3. The query results are shown as {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} when you use {% data variables.product.prodname_codeql %} with {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} 支持已编译和解译的语言，并且可在以支持的语言编写的代码中找到漏洞和错误。

{% data reusables.code-scanning.codeql-languages-bullets %}

## About {% data variables.product.prodname_codeql %} queries

{% data variables.product.company_short %} experts, security researchers, and community contributors write and maintain the default {% data variables.product.prodname_codeql %} queries used for {% data variables.product.prodname_code_scanning %}. The queries are regularly updated to improve analysis and reduce any false positive results. The queries are open source, so you can view and contribute to the queries in the [`github/codeql`](https://github.com/github/codeql) repository. 更多信息请参阅 GitHub Security Lab 网站上的 [{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql)。 You can also write your own queries. For more information, see "[About {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" in the {% data variables.product.prodname_codeql %} documentation.

You can run additional queries as part of your code scanning analysis.

{%- if codeql-packs %}
These queries must belong to a published {% data variables.product.prodname_codeql %} query pack (beta) or a QL pack in a repository. {% data variables.product.prodname_codeql %} packs (beta) provide the following benefits over traditional QL packs:

- When a {% data variables.product.prodname_codeql %} query pack (beta) is published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, all the transitive dependencies required by the queries and a compilation cache are included in the package. This improves performance and ensures that running the queries in the pack gives identical results every time until you upgrade to a new version of the pack or the CLI.
- QL packs do not include transitive dependencies, so queries in the pack can depend only on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same QL pack as the query.

For more information, see "[About {% data variables.product.prodname_codeql %} packs](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)" and "[About {% data variables.product.prodname_ql %} packs](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)" in the {% data variables.product.prodname_codeql %} documentation.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %}
The queries you want to run must belong to a QL pack in a repository. Queries must only depend on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same QL pack as the query. 更多信息请参阅“[关于 {% data variables.product.prodname_ql %} 包](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)”。
{% endif %}
