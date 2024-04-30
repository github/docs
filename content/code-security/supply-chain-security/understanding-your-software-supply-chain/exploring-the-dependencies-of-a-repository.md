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
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
---

## Viewing the dependency graph

The dependency graph shows the dependencies{% ifversion fpt or ghec %} and dependents{% endif %} of your repository. {% ifversion dependency-graph-repository-view-update %} {% data reusables.dependency-graph.repository-view-update %}{% endif %} For information about the detection of dependencies and which ecosystems are supported, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% ifversion dependency-graph-repository-view-update %}
1. Optionally, use the search bar to find a specific dependency or set of dependencies.
   {% note %}

   **Note:** The search bar only searches based on the package name.

   {% endnote %}{% endif %}
{% ifversion fpt or ghec %}
1. Optionally, to view the repositories and packages that depend on your repository, under "Dependency graph", click **Dependents**.

   ![Screenshot of the "Dependency graph" page. The "Dependents" tab is highlighted with an orange outline.](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %}
Enterprise owners can configure the dependency graph at an enterprise level. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."
{% endif %}

### Dependencies view

{% ifversion fpt or ghec %}
For each dependency, you can see its ecosystem, the manifest file in which it was found, and the license (where detected). Dependencies on private repositories, private packages, or unrecognized files are shown in plain text. If the package manager for the dependency is in a public repository, you can hover on the dependency name to display a pop-up with the associated repository information.
{% endif %}

{% ifversion ghes %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed{% ifversion ghes > 3.9 %}.{% else %}, grouped by ecosystem.{% endif %}
{% endif %}

{% ifversion dependency-graph-repository-view-update %}
Dependencies submitted to a project using the {% data variables.dependency-submission-api.name %} (beta) will show which detector was used for their submission and when they were submitted.{% elsif ghes %}Dependencies submitted to a project using the {% data variables.dependency-submission-api.name %} (beta), although also grouped by ecosystem, are shown separately from dependencies identified through manifest or lock files in the repository. These submitted dependencies appear in the dependency graph as "Snapshot dependencies" because they are submitted as a snapshot, or set, of dependencies.{% else %}{% endif %} For more information on using the {% data variables.dependency-submission-api.name %}, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

{% ifversion ghes %}
{% note %}

**Note:** {% data variables.product.product_name %} does not populate the **Dependents** view.

{% endnote %}
{% endif %}

{% ifversion fpt or ghec %}

### Dependents view

For public repositories, the dependents view shows how the repository is used by other repositories. To show only the repositories that contain a library in a package manager, click **NUMBER Packages** immediately above the list of dependent repositories. The dependent counts are approximate and may not always match the dependents listed.

## Enabling and disabling the dependency graph for a private repository

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Changing the "Used by" package

You may notice some repositories have a "Used by" section in the sidebar of the **Code** tab. Your repository will have a "Used by" section if:
- The dependency graph is enabled for the repository (see the above section for more details).
- Your repository contains a package that is published on a [supported package ecosystem](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems).
- Within the ecosystem, your package has a link to a _public_ repository where the source is stored.
- More than 100 repositories depend on your package.

The "Used by" section shows the number of public references to the package that were found, and displays the avatars of some of the owners of the dependent projects.

![Screenshot of the "Used by" section for a repository. To the right of the "Used by" header is "13.4m." Under the header are 8 avatars and "+13,435,819."](/assets/images/help/repository/used-by-section.png)

Clicking any item in this section takes you to the **Dependents** tab of the dependency graph.

The "Used by" section represents a single package from the repository. If you have admin permissions to a repository that contains multiple packages, you can choose which package the "Used by" section represents.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", click the drop-down menu in the "Used by counter" section and choose a package.

{% endif %}

## Troubleshooting the dependency graph

If your dependency graph is empty, there may be a problem with the file containing your dependencies. Check the file to ensure that it's correctly formatted for the file type.

{% ifversion fpt or ghec %}
If the file is correctly formatted, then check its size. The dependency graph ignores individual manifest and lock files that are over 1.5 Mb, unless you are a {% data variables.product.prodname_enterprise %} user. It processes up to 150 manifest or lock files per repository by default, so you can split dependencies into smaller files in subdirectories of the repository.{% endif %}

If a manifest or lock file is not processed, its dependencies are omitted from the dependency graph and they can't be checked for insecure dependencies.

## Further reading

- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% ifversion ghec %}
- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[AUTOTITLE](/get-started/privacy-on-github)"
{% endif %}
