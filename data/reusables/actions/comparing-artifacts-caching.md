## Comparing artifacts and dependency caching

Artifacts and caching are similar because they provide the ability to store files on {% data variables.product.prodname_dotcom %}, but each feature offers different use cases and cannot be used interchangeably.

- Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs.
