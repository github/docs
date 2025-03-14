{% data reusables.package_registry.packages-classic-pat-only %}

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a {% data variables.product.pat_v1 %} to authenticate to {% data variables.product.prodname_registry %} or the {% data variables.product.github %} API. When you create a {% data variables.product.pat_v1 %}, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a {% data variables.product.pat_v1 %}, see [AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate to a {% data variables.product.prodname_registry %} registry within a {% data variables.product.prodname_actions %} workflow, you can use:
* `GITHUB_TOKEN` to publish packages associated with the workflow repository.
* A {% data variables.product.pat_v1 %} with at least `read:packages` scope to install packages associated with other private repositories (`GITHUB_TOKEN` can be used if the repository is granted read access to the package. See [AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).
