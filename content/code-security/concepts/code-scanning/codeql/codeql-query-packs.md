---
title: CodeQL query packs
intro: You can choose from different built-in {% data variables.product.prodname_codeql %} query suites to use in your {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} setup.
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code scanning
  - CodeQL
contentType: concepts
---

{% data reusables.code-scanning.codeql-cli-version-ghes %}

## About {% data variables.product.prodname_codeql %} packs

{% data variables.product.prodname_codeql %} packs are used to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries. {% data variables.product.prodname_codeql %} packs contain queries, library files, query suites, and metadata. You can customize your {% data variables.product.prodname_codeql %} analysis by downloading packs created by others and running them on your codebase.

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries, while model packs ({% data variables.release-phases.public_preview %}) can be used to expand {% data variables.product.prodname_code_scanning %} analysis to recognize libraries and frameworks that are not supported by default.

## Types of {% data variables.product.prodname_codeql %} packs

There are three types of {% data variables.product.prodname_codeql %} packs: query packs, library packs, and model packs.

* Query packs contain a set of pre-compiled queries that can be evaluated on a {% data variables.product.prodname_codeql %} database. Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and pre-compiled representations of each query, in addition to the query sources. This ensures consistent and efficient execution of the queries in the pack.

* Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled separately.

* Model packs can be used to expand {% data variables.product.prodname_code_scanning %} analysis to recognize libraries and frameworks that are not supported by default. Model packs are currently in {% data variables.release-phases.public_preview %} and subject to change. During the {% data variables.release-phases.public_preview %}, model packs are available for {% data variables.code-scanning.codeql_model_packs_support %} analysis. For more information about creating your own model packs, see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-codeql-model-pack).

## Where to find query packs

The standard {% data variables.product.prodname_codeql %} packs for all supported languages are published in the [{% data variables.product.prodname_container_registry %}](https://github.com/orgs/codeql/packages). If you installed the {% data variables.product.prodname_codeql_cli %} in the standard way, using the {% data variables.product.prodname_codeql_cli %} bundle, the core query packs are already downloaded and available to you. They are:

  * `codeql/cpp-queries`
  * `codeql/csharp-queries`
  * `codeql/go-queries`
  * `codeql/java-queries`
  * `codeql/javascript-queries`
  * `codeql/python-queries`
  * `codeql/ruby-queries`
  * `codeql/swift-queries`

You can also use the {% data variables.product.prodname_codeql_cli %} to create your own {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies.

You can publish {% data variables.product.prodname_codeql %} packs that you have created, using the {% data variables.product.prodname_codeql_cli %}. For more information on publishing and downloading {% data variables.product.prodname_codeql %} packs, see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs).
