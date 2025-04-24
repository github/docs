The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the {% data variables.dependency-submission-api.name %}. For each repository, it shows{% ifversion fpt or ghec %}:

* Dependencies, the ecosystems and packages it depends on
* Dependents, the repositories and packages that depend on it{% else %} dependencies, the ecosystems and packages it depends on.{% endif %}

{% data reusables.dependency-graph.repository-view-update %}

{% ifversion ghes %}
{% data variables.product.github %} does not retrieve license information for dependencies, and does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}
