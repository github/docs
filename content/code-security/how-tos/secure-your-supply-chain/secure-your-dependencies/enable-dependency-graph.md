---
title: Enabling the dependency graph
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
permissions: '{% data reusables.permissions.dependency-graph %}'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph
  - /code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-the-dependency-graph
  - /code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Enable dependency graph
contentType: how-tos
category:
  - Secure your dependencies
---

The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the {% data variables.dependency-submission-api.name %}. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/dependency-graph).

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}.

{% ifversion ghes %}

## Enabling the dependency graph for a {% data variables.product.prodname_ghe_server %} instance

{% data reusables.dependabot.ghes-enabling-dependency-graph %}

{% else %}

## Enabling the dependency graph for a repository

Enabling the dependency graph gives {% data variables.product.github %} read-only access to the dependency manifest and lock files for a repository.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo-public-fork %}

## Enabling the dependency graph for multiple repositories

You can enable or disable the dependency graph for all repositories owned by your user account, regardless of their visibility. See [AUTOTITLE](/account-and-profile/how-tos/account-settings/managing-security-and-analysis-features).

You can also enable the dependency graph for multiple repositories in an organization at the same time. For more information, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security).

{% endif %}

## Next steps

{% data reusables.dependency-submission.dependency-submission-link %}

For more information on viewing the dependency graph, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/explore-dependencies).

## Further reading

{%- ifversion maven-transitive-dependencies %}
* [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/submit-dependencies-automatically){%- endif %}
{%- ifversion fpt or ghec %}
* [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization){%- endif %}
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts)
* [AUTOTITLE](/code-security/reference/supply-chain-security/troubleshoot-dependabot/vulnerability-detection)
