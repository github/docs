---
title: Exploring the dependencies and dependents of a repository
intro: 'Using the dependency graph, you can see the packages your project depends on and the repositories that depend on it. In addition, you can see any vulnerabilities detected in its dependencies.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Viewing the dependency graph

{% data reusables.repositories.enable-security-alerts %}

The dependency graph has tabs that show the dependencies and dependents of your repository. For information about how these views are populated and which ecosystems are supported, see "[About the dependency graph](about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Optionally, under "Dependency graph", click **Dependents**. ![依赖项图中的依赖项选项卡](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

#### Dependencies view

Dependencies are grouped by ecosystem. You can expand a dependency to view its dependencies. For dependencies hosted on {% data variables.product.product_name %}, you can also click a dependency to view the repository. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}.

![依赖关系图](/assets/images/help/graphs/dependencies_graph.png)

#### Dependents view

For public repositories, the dependents view shows how the repository is used by other repositories. To show only the repositories that contain a library in a package manager, click **NUMBER Packages** immediately above the list of dependent repositories. The dependent counts are approximate and may not always match the dependents listed.

![从属者图](/assets/images/help/graphs/dependents_graph.png)

{% if currentVersion == "free-pro-team@latest" %}
### Enabling and disabling the dependency graph for a private repository

Repository administrators can enable or disable the dependency graph for private repositories.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Read the message about granting {% data variables.product.product_name %} read-only access to the repository data to enable the dependency graph, then next to "Dependency Graph", click **Enable**. !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png)

You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the Security & analysis tab.
{% endif %}

### 依赖项图疑难排解

If your dependency graph is empty, there may be a problem with the file containing your dependencies. Check the file to ensure that it's correctly formatted for the file type.

{% if currentVersion == "free-pro-team@latest" %}
If the file is correctly formatted, then check its size. The dependency graph ignores individual manifest and lock files that are over 0.5 Mb, unless you are a {% data variables.product.prodname_enterprise %} user. It processes up to 20 manifest or lock files per repository by default, so you can split dependencies into smaller files in subdirectories of the repository.{% endif %}

If a manifest or lock file is not processed, its dependencies are omitted from the dependency graph and they can't be checked for vulnerable dependencies.

### 延伸阅读

- "[About the dependency graph](about-the-dependency-graph)"{% if currentVersion == "free-pro-team@latest" %}
- "[查看用于组织的洞见](/github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization)"
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[了解 {% data variables.product.product_name %} 如何使用和保护数据](/github/understanding-how-github-uses-and-protects-your-data)"
{% endif %}
