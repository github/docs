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
## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}  

For more information, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% ifversion fpt or ghec %} ## About configuring the dependency graph {% endif %}
{% ifversion fpt or ghec %}To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. The dependency graph is automatically generated for all public repositories and you can choose to enable it for private repositories. For more information on viewing the dependency graph, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %} ## Enabling the dependency graph
If the dependency graph is not available in your system, your enterprise owner can enable the dependency graph. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}{% ifversion fpt or ghec %}

### Enabling and disabling the dependency graph for a private repository

Repository administrators can enable or disable the dependency graph for private repositories.

You can also enable or disable the dependency graph for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Read the message about granting {% data variables.product.product_name %} read-only access to the repository data to enable the dependency graph, then next to "Dependency Graph", click **Enable**.
   !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png)

You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the Security & analysis tab.
{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}.

## Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia{% ifversion fpt or ghec %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
