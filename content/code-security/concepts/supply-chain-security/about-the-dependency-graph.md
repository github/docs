---
title: About the dependency graph
intro: You can use the dependency graph to identify all your project's dependencies. The dependency graph supports a range of popular package ecosystems.
product: '{% data reusables.gated-features.dependency-graph %}'
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
contentType: concepts
---
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}

For information on the supported ecosystems and manifest files, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

## How the dependency graph is built

The dependency graph automatically parses dependencies by analyzing manifests and lock files in your repository. You can also submit data yourself. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/dependency-graph-data).

## Dependency graph availability

{% ifversion fpt or ghec %}
{% data reusables.dependency-graph.feature-availability %} For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

{% data reusables.dependency-graph.feature-availability %} See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

{% ifversion ghes %}
For more information about configuration of the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).{% endif %}

{% ifversion fpt or ghec %}

## Dependents and "used by" data

For public repositories, the dependency graph lists dependents. These are other public repositories that depend on the repository or on packages that it publishes. This information is not reported for private repositories.

{% data reusables.dependency-graph.used-by %} Clicking any item in this section takes you to the **Dependents** tab of the dependency graph.

Your repository will have a "Used by" section if:
* The dependency graph is enabled for the repository.
* Your repository contains a package that is published on a supported package ecosystem. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).
* Within the ecosystem, your package has a link to a _public_ repository where the source is stored.
* More than 100 repositories depend on your package.

![Screenshot of the "Used by" section for a repository showing the summary of "13.4m" with details of 8 avatars and "+13,435,819."](/assets/images/help/repository/used-by-section.png)

The "Used by" section represents a single package from the repository. If you have admin permissions to a repository that contains multiple packages, you can choose which package the "Used by" section represents. See [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/change-used-by-data).

{% endif %}

## What you can do with the dependency graph

You can use the dependency graph to:

* Explore the repositories your code depends on{% ifversion fpt or ghec %}, and those that depend on it{% endif %}. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository). {% ifversion fpt or ghec %}
* View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization#viewing-organization-dependency-insights).{% endif %}
* View and update vulnerable dependencies for your repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
* See information about vulnerable dependencies in pull requests. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).
* Export a software bill of materials (SBOM) for audit or compliance purposes. This is a formal, machine-readable inventory of a project's dependencies. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/exporting-a-software-bill-of-materials-for-your-repository).

## Further reading

* [Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph) on Wikipedia
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)
* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
* [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
