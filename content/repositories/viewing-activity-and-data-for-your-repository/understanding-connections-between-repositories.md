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
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
---

## Viewing a repository's network

The network graph displays the branch history of the entire repository network, including fork branches. This graph is a timeline of the most recent commits, and shows up to 100 of the most recently pushed-to branches. The first row references the date and the first column references the branch owner. Use arrow keys or other keyboard shortcuts to more easily navigate the graph. They are provided in the “Keyboard shortcuts available” pop up under the graph.

![Screenshot of the repository network graph.](/assets/images/help/graphs/repo-network-graph.png)

> [!TIP]
> To see older branches, click and drag within the graph.

### Accessing the network graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Network**.
![Screenshot of the left sidebar. The "Network" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/network-tab.png)

## Listing the forks of a repository

The forks page lists the forks of a repository. For each fork, you can see:

* How many times the fork has been starred
* The number of direct forks (of the fork)
* The number of open issues
* The number of open pull requests
* When the fork was last updated (that is, the last push to any branch)
* When the fork was created

You can filter the list of forks to display active, inactive, starred, or archived forks, or to only display forks that have been updated within a specified time period (up to a period of five years). To view the most useful or most active forks, you can sort the list of forks by most starred forks or most recently updated forks, or by the number of open issues or open pull requests.

If you want to preserve the filters you have selected, you can save your filter and sort selections as the default so that any forks page you view, in any repository, will be filtered the same way.

### Accessing the forks page

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Forks**.

   ![Screenshot of the left sidebar. The "Forks" tab is highlighted with a dark orange outline.](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

1. Optionally, to filter the list to display forks updated within a specified time period, click **Period**, then choose a time period from the dropdown menu. For example, to see forks that have been updated within the last two years, choose "2 years" from the dropdown menu.

   ![Screenshot of the forks page with filter and sort options shown. The dropdown menu, titled "Period", is highlighted with an orange outline.](/assets/images/help/graphs/repository-forks-page-period-dropdown.png)

1. Optionally, to filter the list to only display active, inactive, starred, or archived forks, click **Repository type**, then choose one or multiple options from the dropdown menu. To clear a filter, click **Repository type**, then click the applied filter again to remove it.

   ![Screenshot of the forks page with filter and sort options shown. The dropdown menu, "Repository type", is highlighted with an orange outline.](/assets/images/help/graphs/repository-forks-page-repository-type-dropdown.png)

1. Optionally, to sort the list by most starred forks, most recently updated forks, most open issues, or most open pull requests, click **Sort**, then choose an option from the dropdown menu.

   ![Screenshot of the forks page with filter and sort options shown. The dropdown menu, titled "Sort", is highlighted with an orange outline.](/assets/images/help/graphs/repository-forks-page-sort-dropdown.png)

1. Optionally, to preserve the filter values you have selected as the default filters for any time you view a forks page, click **Save Defaults**. If the currently selected filters are already the defaults, the button will be disabled and labeled as **Defaults Saved**.

   ![Screenshot of the forks page with filter and sort options shown. The "Defaults saved" button is disabled because the defaults are already saved.](/assets/images/help/graphs/repository-forks-page-save-defaults-button.png)

## Viewing the dependencies of a repository

You can use the dependency graph to explore the code your repository depends on.

Almost all software relies on code developed and maintained by other developers, often known as a supply chain. For example, utilities, libraries, and frameworks. These dependencies are an integral part of your code and any bugs or vulnerabilities in them may affect your code. It's important to review and maintain these dependencies.

The dependency graph provides a great way to visualize and explore the dependencies for a repository. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) and [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository).

You can also set up your repository so that {% data variables.product.company_short %} alerts you automatically whenever a security vulnerability is found in one of your dependencies. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
