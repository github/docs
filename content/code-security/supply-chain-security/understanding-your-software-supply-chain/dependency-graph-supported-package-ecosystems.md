---
title: Dependency graph supported package ecosystems
shortTitle: Dependency graph ecosystem support # Max 31 characters
intro: 'Dependency graph supports a variety of ecosystems.'
allowTitleToDifferFromFilename: true
type: reference
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
---

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

## Supported package ecosystems

If dependency graph is enabled, it will scan your repository for manifest files used by many commonly-used programming language package ecosystems. When it finds one of the supported manifest files, it will parse the file's contents and build a representation of its contents, including each package's name and version.

Some files explicitly define which versions are used for all direct and all indirect dependencies. They lock the package versions to those included in the build and enable Dependabot to find vulnerable versions in both direct and indirect dependencies. If you use these formats, your dependency graph is more accurate, so they're listed under the "Recommended files" column in this table.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for insecure dependencies.{% endif %}

{% data reusables.dependency-graph.supported-package-ecosystems %}

{% ifversion maven-transitive-dependencies %}

For ecosystems that resolve transitive dependencies at build-time, we recommend configuring dependency submission to automatically submit these dependencies to the dependency graph. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository).

{% endif %}

## Package ecosystems supported via dependency submission actions

In addition to dependency graph's static analysis and auto-submission, you can use the {% data variables.dependency-submission-api.name %} to add build-time dependencies to the dependency graph, or to add dependencies from package managers and ecosystems of your choice to the dependency graph, even if the ecosystem is not in the supported ecosystem list above. Dependency information from these submitted dependencies will, in turn, flow into {% data variables.product.prodname_dependabot_updates %} and {% data variables.product.prodname_dependabot_alerts %}.

{% data reusables.dependency-graph.dependency-submission-API-short %} For more information on the {% data variables.dependency-submission-api.name %}, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

You typically use the {% data variables.dependency-submission-api.name %} in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built. {% data reusables.dependency-submission.api-premade-actions %} You can find links to the currently available actions in the table below.

{% data reusables.dependency-submission.premade-action-table %}

You can also create your own action. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api#creating-your-own-action).

## Deduplication of manifests

{% data reusables.dependency-graph.deduplication %}
