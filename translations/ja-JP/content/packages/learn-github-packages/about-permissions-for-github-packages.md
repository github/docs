---
title: About permissions for GitHub Packages
intro: Learn about how to manage permissions for your packages.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
---

{% ifversion fpt or ghec %}
The permissions for packages are either repository-scoped or user/organization-scoped.
{% endif %}

## Permissions for repository-scoped packages

A repository-scoped package inherits the permissions and visibility of the repository that owns the package. You can find a package scoped to a repository by going to the main page of the repository and clicking the **Packages** link to the right of the page. {% ifversion fpt or ghec %}For more information, see "[Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package)."{% endif %}

The {% data variables.product.prodname_registry %} registries below **only** use repository-scoped permissions:

  {% ifversion not fpt or ghec %}- Docker registry (`docker.pkg.github.com`){% endif %}
  {% ifversion packages-npm-v2 %}{% else %}- npm registry{% endif %}
  - RubyGems registry
  - Apache Maven registry
  - NuGet registry

{% ifversion packages-npm-v2 %}For {% data variables.packages.prodname_ghcr_and_npm_registry %}, you can choose to allow packages to be scoped to a user, an organization, or linked to a repository.{% endif %}

{% ifversion fpt or ghec %}
## Granular permissions for user/organization-scoped packages

Packages with granular permissions are scoped to a personal user or organization account. You can change the access control and visibility of the package separately from a repository that is connected (or linked) to a package.

Currently, the {% data variables.packages.prodname_ghcr_and_npm_registry %} offer granular permissions for your container image packages.

## Visibility and access permissions for container images

{% data reusables.package_registry.visibility-and-access-permissions %}

For more information, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% endif %}

## About scopes and permissions for package registries

To use or manage a package hosted by a package registry, you must use a token with the appropriate scope, and your personal account must have appropriate permissions.

For example:
-  To download and install packages from a repository, your token must have the `read:packages` scope, and your user account must have read permission.
- {% ifversion fpt or ghes or ghec %}To delete a package on {% data variables.product.product_name %}, your token must at least have the `delete:packages` and `read:packages` scope. The `repo` scope is also required for repo-scoped packages. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% elsif ghae %}To delete a specified version of a package on {% data variables.product.product_name %}, your token must have the `delete:packages` and `repo` scope. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}

| Scope | Description | Required permission |
| --- | --- | --- |
|`read:packages`| Download and install packages from {% data variables.product.prodname_registry %} | read |
|`write:packages`| Upload and publish packages to {% data variables.product.prodname_registry %} | write |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Delete packages from {% data variables.product.prodname_registry %} {% elsif ghae %} Delete specified versions of packages from {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Upload and delete packages (along with `write:packages`, or `delete:packages`) | write or admin |

When you create a {% data variables.product.prodname_actions %} workflow, you can use the `GITHUB_TOKEN` to publish and install packages in {% data variables.product.prodname_registry %} without needing to store and manage a personal access token.

For more information, see:{% ifversion fpt or ghec %}
- "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Publishing and installing a package with {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Available scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

## Maintaining access to packages in {% data variables.product.prodname_actions %} workflows

To ensure your workflows will maintain access to your packages, ensure that you're using the right access token in your workflow and that you've enabled {% data variables.product.prodname_actions %} access to your package.

For more conceptual background on {% data variables.product.prodname_actions %} or examples of using packages in workflows, see "[Managing GitHub Packages using GitHub Actions workflows](/packages/managing-github-packages-using-github-actions-workflows)."

### Access tokens  

- To publish packages associated with the workflow repository, use `GITHUB_TOKEN`.
- To install packages associated with other private repositories that `GITHUB_TOKEN` can't access, use a personal access token

For more information about `GITHUB_TOKEN` used in {% data variables.product.prodname_actions %} workflows, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_actions %} access for container images

To ensure your workflows have access to your container image, you must enable {% data variables.product.prodname_actions %} access to the repositories where your workflow is run. You can find this setting on your package's settings page. For more information, see "[Ensuring workflow access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."

{% endif %}
