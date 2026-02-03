---
title: Dependency graph supported package ecosystems
shortTitle: Dependency graph ecosystems
intro: Dependency graph supports a variety of ecosystems.
allowTitleToDifferFromFilename: true
topics:
  - Dependency graph
  - Dependencies
  - Alerts
  - Vulnerabilities
  - Repositories
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems
contentType: reference
---

## About the dependency graph

For an introduction to the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

## Building the dependency graph

If dependency graph is enabled, it will scan your repository for manifest files used by programming language package ecosystems. When it finds one of the supported manifest files, it will parse the file and build a representation of its contents, including each package's name and version. This is called "static analysis".

Some files explicitly define which versions are used for all direct and all indirect dependencies. They lock the package versions to those included in the build and enable {% data variables.product.prodname_dependabot %} to find vulnerable versions in both direct and indirect dependencies. If you use these formats, your dependency graph is more accurate, so they're listed under the "Recommended files" column in the "Supported package ecosystems" table. See [Supported package ecosystems](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems). {% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from {% data variables.product.prodname_dependabot %}'s checks for insecure dependencies.{% endif %}

{% ifversion maven-transitive-dependencies %}
For ecosystems that resolve transitive dependencies at build-time, static analysis does not provide a comprehensive view of the dependency tree. For these ecosystems, there are two approaches that use {% data variables.product.prodname_actions %}: automatic and manual dependency submission. In both cases, an external action will generate a full dependency tree and upload it to the dependency submission API. You can enable automatic submission for supported ecosystems in your repository's settings page. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository).
{% endif %}

## Package ecosystems supported via dependency submission actions

In addition to dependency graph's static analysis and auto-submission, you can use the {% data variables.dependency-submission-api.name %} to add build-time dependencies to the dependency graph, or to add dependencies from package managers and ecosystems of your choice to the dependency graph, even if the ecosystem is not in the "Supported package ecosystems" table. Dependency information from these submitted dependencies will, in turn, flow into {% data variables.product.prodname_dependabot_updates %} and {% data variables.product.prodname_dependabot_alerts %}.

{% data reusables.dependency-graph.dependency-submission-API-short %} For more information on the {% data variables.dependency-submission-api.name %}, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

## Supported package ecosystems

{% data reusables.dependency-graph.supported-package-ecosystems %}

## Deduplication of manifests

{% data reusables.dependency-graph.deduplication %}
