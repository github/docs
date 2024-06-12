The dependency graph is a summary of the manifest and lock files stored in a repository and any dependencies that are submitted for the repository using the {% data variables.dependency-submission-api.name %} (beta). For each repository, it shows{% ifversion fpt or ghec %}:

- Dependencies, the ecosystems and packages it depends on
- Dependents, the repositories and packages that depend on it{% else %} dependencies, the ecosystems and packages it depends on.{% endif %}

{% ifversion dependency-graph-repository-view-update %}
{% data reusables.dependency-graph.repository-view-update %}
{% endif %}

{% ifversion ghes %}
{% data variables.product.product_name %} does not retrieve license information for dependencies, and does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}
