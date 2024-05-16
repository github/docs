---
title: Configuring the dependency graph
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
---
## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}

For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% ifversion fpt or ghec %}

## Configuring the dependency graph

To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. The dependency graph is automatically generated for all public repositories and you can choose to enable it for private {% ifversion ghec %}and internal {% endif %}repositories. For more information on viewing the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)."

{% data reusables.dependency-submission.dependency-submission-link %}

{% endif %}

{% ifversion ghes %}

## Enabling the dependency graph

{% data reusables.dependabot.ghes-enabling-dependency-graph %}{% endif %}

{% ifversion ghec %}

### Enabling and disabling the dependency graph for a private or internal repository

{% endif %}{% ifversion fpt %}

### Enabling and disabling the dependency graph for a private repository

{% endif %}{% ifversion fpt or ghec %}
{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}.

{% ifversion ghes %}
{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

## Further reading

{% ifversion ghec %}- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization)"{% endif %}
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
