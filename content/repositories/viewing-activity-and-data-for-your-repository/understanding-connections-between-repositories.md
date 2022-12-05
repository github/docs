---
title: Understanding connections between repositories
intro: Use the network graph and forks list to understand fork networks.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
---

## Viewing a repository's network

The network graph displays the branch history of the entire repository network, including fork branches. This graph is a timeline of the most recent commits, and shows up to 100 of the most recently pushed-to branches. The first row references the date and the first column references the branch owner. Use arrow keys or other keyboard shortcuts to more easily navigate the graph. They are provided in the “Keyboard shortcuts available” pop up under the graph.


![Repository network graph](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Tip:** To see older branches, click and drag within the graph.

{% endtip %}

## Accessing the network graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Network**.
![Network tab](/assets/images/help/graphs/network_tab.png)

## Listing the forks of a repository

The Members graph displays all the forks of a repository.

Forks are listed alphabetically by the organization or username of the person who forked the repository. You can click on the organization or username to be redirected to the organization or user's {% data variables.product.product_name %} profile page or click on the fork name to be redirected to the specific fork of the repository.

{% ifversion fpt or ghec %}

![Repository members graph](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Repository members graph](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Accessing the Members graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Forks**.
![Forks tab](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Viewing the dependencies of a repository

You can use the dependency graph to explore the code your repository depends on.

Almost all software relies on code developed and maintained by other developers, often known as a supply chain. For example, utilities, libraries, and frameworks. These dependencies are an integral part of your code and any bugs or vulnerabilities in them may affect your code. It's important to review and maintain these dependencies.

The dependency graph provides a great way to visualize and explore the dependencies for a repository. For more information, see "[About the dependency graph](/code-security/supply-chain-security/about-the-dependency-graph)" and "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)."

You can also set up your repository so that {% data variables.product.company_short %} alerts you automatically whenever a security vulnerability is found in one of your dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
