## Artifacts versus dependency caching

Artifacts and caching are similar because they provide the ability to store files on {% data variables.product.prodname_dotcom %}, but each feature offers different use cases and cannot be used interchangeably.

* Use caching when you want to reuse files that don't change often between workflow runs, such as dependencies downloaded by a package management system, intermediate build outputs, or other files that are expensive to regenerate. Caching these files can speed up your workflow runs, though a job should always be able to re-download or regenerate these files if a cache isn't available.
* Use artifacts when you want to save files produced by a job to use or view after a workflow run has ended, such as built binaries or build logs, or when you want to pass files between jobs in a workflow.
