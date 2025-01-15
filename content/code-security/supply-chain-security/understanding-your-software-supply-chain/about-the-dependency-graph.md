---
title: About the dependency graph
intro: You can use the dependency graph to identify all your project's dependencies. The dependency graph supports a range of popular package ecosystems.
product: '{% data reusables.gated-features.dependency-graph %}'
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
---
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}

When you push a commit to {% data variables.product.github %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% ifversion fpt or ghec %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %}

For information on the supported ecosystems and manifest files, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

{% data reusables.dependency-submission.dependency-submission-link %}

When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

{% data reusables.dependency-graph.sbom-export %}

## Dependency graph availability

{% ifversion fpt or ghec %}
{% data reusables.dependency-graph.feature-availability %} For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

Repository administrators can also set up the dependency graph for private repositories. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

{% ifversion ghes %}
For more information about configuration of the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).{% endif %}

## Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems, as well as any dependencies that are submitted using the {% data variables.dependency-submission-api.name %}. This includes:

* Direct dependencies, that are explicitly defined in a manifest or lock file or have been submitted using the {% data variables.dependency-submission-api.name %}
* Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies{% ifversion fpt or ghec %} only if they are defined in a lock file or have been submitted using the {% data variables.dependency-submission-api.name %}. For the most reliable graph, you should use lock files (or their equivalent) because they define exactly which versions of the direct and indirect dependencies you currently use. If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}. If your ecosystem does not have lock files, you can use pre-made actions that resolve transitive dependencies for many ecosystems. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api#using-pre-made-actions).

For more information on how {% data variables.product.github %} helps you understand the dependencies in your environment, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion fpt or ghec %}

## Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

## Using the dependency graph

You can use the dependency graph to:

* Explore the repositories your code depends on{% ifversion fpt or ghec %}, and those that depend on it{% endif %}. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository). {% ifversion ghec %}
* View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization#viewing-organization-dependency-insights).{% endif %}
* View and update vulnerable dependencies for your repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
* See information about vulnerable dependencies in pull requests. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

## Further reading

* [Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph) on Wikipedia
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)
* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
* [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
