---
title: Configuring the dependency graph
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
redirect_from:
   - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
---

## About configuring the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows dependencies, that is, the ecosystems and packages it depends on. For more information, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% ifversion fpt or ghec %}To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. The dependency graph is automatically generated for all public repositories and you can choose to enable it for private repositories. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %}If the dependency graph is not available in your system, your enterprise owner can enable the dependency graph. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}. 

## Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% ifversion fpt or ghec %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
