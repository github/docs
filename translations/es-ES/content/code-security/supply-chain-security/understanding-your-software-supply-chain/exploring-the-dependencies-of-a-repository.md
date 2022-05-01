---
title: Exploring the dependencies of a repository
intro: 'You can use the dependency graph to see the packages your project depends on{% ifversion fpt or ghec %} and the repositories that depend on it{% endif %}. In addition, you can see any vulnerabilities detected in its dependencies.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Viewing the dependency graph

The dependency graph shows the dependencies{% ifversion fpt or ghec %} and dependents{% endif %} of your repository. For information about the detection of dependencies and which ecosystems are supported, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. Optionally, under "Dependency graph", click **Dependents**.
![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %}
Enterprise owners can configure the dependency graph at an enterprise level. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."
{% endif %}

### Dependencies view

{% ifversion fpt or ghec %}
Dependencies are grouped by ecosystem. You can expand a dependency to view its dependencies.  Dependencies on private repositories, private packages, or unrecognized files are shown in plain text. If the package manager for the dependency is in a public repository, {% data variables.product.product_name %} will display a link to that repository.

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

![Dependencies graph](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

![Dependencies graph](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.product_name %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Dependents view

For public repositories, the dependents view shows how the repository is used by other repositories. To show only the repositories that contain a library in a package manager, click **NUMBER Packages** immediately above the list of dependent repositories. The dependent counts are approximate and may not always match the dependents listed.

![Dependents graph](/assets/images/help/graphs/dependents_graph.png)

## Enabling and disabling the dependency graph for a private repository

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Changing the "Used by" package

You may notice some repositories have a "Used by" section in the sidebar of the **Code** tab. Your repository will have a "Used by" section if:
  * The dependency graph is enabled for the repository (see the above section for more details).
  * Your repository contains a package that is published on a [supported package ecosystem](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Within the ecosystem, your package has a link to a _public_ repository where the source is stored.

The "Used by" section shows the number of public references to the package that were found, and displays the avatars of some of the owners of the dependent projects.

!["Used by" sidebar section](/assets/images/help/repository/used-by-section.png)

Clicking any item in this section takes you to the **Dependents** tab of the dependency graph.

The "Used by" section represents a single package from the repository. If you have admin permissions to a repository that contains multiple packages, you can choose which package the "Used by" section represents.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Under "Code security and analysis", click the drop-down menu in the "Used by counter" section and choose a package.
  ![Choose a "Used by" package](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Troubleshooting the dependency graph

If your dependency graph is empty, there may be a problem with the file containing your dependencies. Check the file to ensure that it's correctly formatted for the file type.

{% ifversion fpt or ghec %}
If the file is correctly formatted, then check its size. The dependency graph ignores individual manifest and lock files that are over 1.5 Mb, unless you are a {% data variables.product.prodname_enterprise %} user. It processes up to 20 manifest or lock files per repository by default, so you can split dependencies into smaller files in subdirectories of the repository.{% endif %}

If a manifest or lock file is not processed, its dependencies are omitted from the dependency graph and they can't be checked for vulnerable dependencies.

## Further reading

- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% ifversion ghec %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Understanding how {% data variables.product.prodname_dotcom %} uses and protects your data](/get-started/privacy-on-github)"
{% endif %}
