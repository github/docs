---
title: Exploring the dependencies of a repository
intro: You can use the dependency graph to see the packages your project depends on{% ifversion fpt or ghec %} and the repositories that depend on it{% endif %}. In addition, you can see any vulnerabilities detected in its dependencies.
permissions: '{% data reusables.permissions.dependency-graph-view-dependencies %}'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
contentType: how-tos
---

## Viewing the dependency graph

The dependency graph shows the dependencies{% ifversion fpt or ghec %} and dependents{% endif %} of your repository.  {% data reusables.dependency-graph.repository-view-update %} For information about the detection of dependencies and which ecosystems are supported, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. Optionally, use the search bar to find a specific dependency or set of dependencies. You can use the keywords `ecosystem:` to show only packages of a certain type, or `relationship:` to show only direct or transitive dependencies (if the ecosystem supports transitivity). Plain words in search bar will only match package names.

{% ifversion fpt or ghec %}

1. Optionally, to view the repositories and packages that depend on your repository, under "Dependency graph", click **Dependents**.

   ![Screenshot of the "Dependency graph" page. The "Dependents" tab is highlighted with an orange outline.](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

   >[!NOTE] {% data variables.product.prodname_dotcom %} currently only determines dependents for public repositories.

{% endif %}

{% ifversion ghes %}
Enterprise owners can configure the dependency graph at an enterprise level. For more information, see [AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).
{% endif %}

### Dependencies view

{% ifversion fpt or ghec %}
For each dependency, you can see its ecosystem, the manifest file in which it was found, and its license (where detected).

* Dependencies for private repositories, private packages, or unrecognized files are shown in plain text.
* If the package manager for the dependency is in a public repository, you can hover on the dependency name to display a pop-up with the associated repository information.
* You can sort and filter dependencies by typing filters as `key:value` pairs into the search bar.

    * Use `ecosystem: <ecosystem-name>` to display dependencies for the selected ecosystem.{% ifversion transitive-dependency-labeling-npm %}
    * Use `relationship:` to filter the list by relationship status. Possible values are `direct`, `transitive`, and `inconclusive`. Alternatively, you can click the relationship label adjacent to a dependency name to only show dependencies of the same relationship status. This filter is only available for ecosystems with transitive dependency support. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems) for more information.{% endif %}

{% endif %}

{% ifversion ghes %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed.
{% endif %}

Dependencies submitted to a project using the {% data variables.dependency-submission-api.name %} will show which detector was used for their submission and when they were submitted. For more information on using the {% data variables.dependency-submission-api.name %}, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

{% ifversion ghes %}

> [!NOTE]
> {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endif %}

{% ifversion fpt or ghec %}

### Dependents view

For public repositories, the dependents view shows how the repository is used by other repositories. To show only the repositories that contain a library in a package manager, click **NUMBER Packages** immediately above the list of dependent repositories. The dependent counts are approximate and may not always match the dependents listed.

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)
* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts){% ifversion ghec %}
* [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization){% endif %}{% ifversion fpt or ghec %}
* [AUTOTITLE](/get-started/privacy-on-github)
{% endif %}
