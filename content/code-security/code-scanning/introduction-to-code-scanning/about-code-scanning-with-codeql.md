---
title: About code scanning with CodeQL
shortTitle: About CodeQL code scanning
intro: 'You can use {% data variables.product.prodname_codeql %} to identify vulnerabilities and errors in your code. The results are shown as {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
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

## About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

{% ifversion code-scanning-without-workflow %}

There are three main ways to use {% data variables.product.prodname_codeql %} analysis for {% data variables.product.prodname_code_scanning %}:

- Use default setup to quickly configure {% data variables.product.prodname_codeql %} analysis for {% data variables.product.prodname_code_scanning %} on your repository. Default setup automatically chooses the languages to analyze, query suite to run, and events that trigger scans. If you prefer, you can manually select the query suite to run{% ifversion code-scanning-without-workflow-310 %} and languages to analyze{% endif %}. After you enable {% data variables.product.prodname_codeql %}, {% data variables.product.prodname_actions %} will execute workflow runs to scan your code. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."
- Use advanced setup to add the {% data variables.product.prodname_codeql %} workflow to your repository. This generates a customizable workflow file which uses the [github/codeql-action](https://github.com/github/codeql-action/) to run the {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."

{% else %}

There are two main ways to use {% data variables.product.prodname_codeql %} analysis for {% data variables.product.prodname_code_scanning %}:

- Add the {% data variables.product.prodname_codeql %} workflow to your repository. This uses the [github/codeql-action](https://github.com/github/codeql-action/) to run the {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-the-codeql-action)."

{% endif -%}

- Run the {% data variables.product.prodname_codeql_cli %} directly in an external CI system and upload the results to {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

{% ifversion ghes or ghae %}

{% note %}
On {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %} the {% data variables.product.prodname_codeql %} action uses {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %} by default. We recommend that you use the same version of the {% data variables.product.prodname_codeql_cli %} if you run analysis in an external CI system.
{% endnote %}

{% endif %}

For information about {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

## About {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} treats code like data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers.

1. You generate a {% data variables.product.prodname_codeql %} database to represent your codebase.
1. Then you run {% data variables.product.prodname_codeql %} queries on that database to identify problems in the codebase.
1. The query results are shown as {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} when you use {% data variables.product.prodname_codeql %} with {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} supports both compiled and interpreted languages, and can find vulnerabilities and errors in code that's written in the supported languages.

{% data reusables.code-scanning.codeql-languages-bullets %}

## About {% data variables.product.prodname_codeql %} queries

{% data variables.product.company_short %} experts, security researchers, and community contributors write and maintain the default {% data variables.product.prodname_codeql %} queries used for {% data variables.product.prodname_code_scanning %}. The queries are regularly updated to improve analysis and reduce any false positive results. The queries are open source, so you can view and contribute to the queries in the [`github/codeql`](https://github.com/github/codeql) repository. For more information, see [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) on the {% data variables.product.prodname_codeql %} website. You can also write your own queries. For more information, see "[About {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" in the {% data variables.product.prodname_codeql %} documentation.

If you are scanning your code with advanced setup or an external CI system, you can run additional queries as part of your analysis.

{%- ifversion codeql-packs %}
These queries must belong to a published {% data variables.product.prodname_codeql %} query pack (beta) or a {% data variables.product.prodname_codeql %} pack in a repository. {% data variables.product.prodname_codeql %} packs (beta) provide the following benefits over traditional {% data variables.product.prodname_ql %} packs:

- When a {% data variables.product.prodname_codeql %} query pack (beta) is published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, all the transitive dependencies required by the queries and a compilation cache are included in the package. This improves performance and ensures that running the queries in the pack gives identical results every time until you upgrade to a new version of the pack or the CLI.
- {% data variables.product.prodname_ql %} packs do not include transitive dependencies, so queries in the pack can depend only on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same {% data variables.product.prodname_ql %} pack as the query.
- {% data variables.product.prodname_codeql %} query packs (beta) can be downloaded from multiple GitHub container registries. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#downloading-codeql-packs-from-github-enterprise-server)."

For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %}
The queries you want to run must belong to a {% data variables.product.prodname_ql %} pack in a repository. Queries must only depend on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same {% data variables.product.prodname_ql %} pack as the query.
{% endif %}
