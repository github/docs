The dependency graph is a summary of the manifest and lock files stored in a repository{% ifversion dependency-submission-api %} and any dependencies that are submitted for the repository using the Dependency submission API (beta){% endif %}. For each repository, it shows{% ifversion fpt or ghec %}:

- Dependencies, the ecosystems and packages it depends on
- Dependents, the repositories and packages that depend on it{% else %} dependencies, that is, the ecosystems and packages it depends on. {% data variables.product.product_name %} does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}
