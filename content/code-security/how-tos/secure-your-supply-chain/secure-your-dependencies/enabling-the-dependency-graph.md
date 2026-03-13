---
title: Enabling the dependency graph
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
permissions: '{% data reusables.permissions.dependency-graph %}'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph
  - /code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Enable dependency graph
contentType: how-tos
---

The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the {% data variables.dependency-submission-api.name %}. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}.

{% ifversion ghes %}

## Enabling the dependency graph for a {% data variables.product.prodname_ghe_server %} instance

{% data reusables.dependabot.ghes-enabling-dependency-graph %}

{% else %}

## Enabling the dependency graph for a repository

Enabling the dependency graph gives {% data variables.product.github %} read-only access to the dependency manifest and lock files for a repository.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo-public-fork %}

## Enabling the dependency graph for multiple repositories

You can enable or disable the dependency graph for all repositories owned by your user account, regardless of their visibility. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-security-and-analysis-settings-for-your-personal-account).

You can also enable the dependency graph for multiple repositories in an organization at the same time. For more information, see {% ifversion security-configurations %}[AUTOTITLE](/code-security/securing-your-organization).{% else %}[AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-organization).{% endif %}

{% endif %}

## Next steps

{% data reusables.dependency-submission.dependency-submission-link %}

For more information on viewing the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository).

## Further reading

{%- ifversion maven-transitive-dependencies %}
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository){%- endif %}
{%- ifversion fpt or ghec %}
* [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization){%- endif %}
* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
* [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
