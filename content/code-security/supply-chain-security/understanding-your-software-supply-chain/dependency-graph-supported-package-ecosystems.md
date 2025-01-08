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

In this article, you can see what the supported ecosystems are.

## Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for insecure dependencies.{% endif %}

{% data reusables.dependency-graph.supported-package-ecosystems %}

{% ifversion maven-transitive-dependencies %}

For ecosystems that resolve transitive dependencies at build-time, we recommend configuring dependency submission to automatically submit these dependencies to the dependency graph. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository).

{% endif %}

## Package ecosystems supported via dependency submission actions

You can use the {% data variables.dependency-submission-api.name %} to add build-time dependencies to the dependency graph, or to add dependencies from package managers and ecosystems of your choice to the dependency graph, even if the ecosystem is not in the supported ecosystem list above. Dependency information from these submitted dependencies will, in turn, flow into {% data variables.product.prodname_dependabot_updates %} and {% data variables.product.prodname_dependabot_alerts %}.

{% data reusables.dependency-graph.dependency-submission-API-short %} For more information on the {% data variables.dependency-submission-api.name %}, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

You typically use the {% data variables.dependency-submission-api.name %} in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built. {% data reusables.dependency-submission.api-premade-actions %} You can find links to the currently available actions in the table below.

{% data reusables.dependency-submission.premade-action-table %}

You can also create your own action. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api#creating-your-own-action).
