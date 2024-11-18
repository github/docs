---
title: About permissions for GitHub Packages
intro: Learn about how to manage permissions for your packages.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: About permissions
---

The permissions for packages can be scoped either to a user or an organization or to a repository.

## Granular permissions for user/organization-scoped packages

Packages with granular permissions are scoped to a personal account or organization. You can change the access control and visibility of the package separately from a repository that is connected (or linked) to a package.

The following {% data variables.product.prodname_registry %} registries support granular permissions.

* {% data variables.product.prodname_container_registry %}
{% ifversion packages-npm-v2 %}- npm registry{% endif %}
{% ifversion packages-nuget-v2 %}- NuGet registry{% endif %}
{% ifversion packages-rubygems-v2 %}- RubyGems registry{% endif %}

## Permissions for repository-scoped packages

A repository-scoped package inherits the permissions and visibility of the repository in which the package is published. You can find a package scoped to a repository by going to the main page of the repository and clicking the **Packages** link to the right of the page. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."{% endif %}

The following {% data variables.product.prodname_registry %} registries **only** support repository-scoped permissions.

{% ifversion not fpt or ghec %}- Docker registry (`docker.pkg.github.com`){% endif %}
{% ifversion packages-npm-v2 %}{% else %}- npm registry{% endif %}
* Apache Maven registry
* Gradle registry
{% ifversion packages-nuget-v2 %}{% else %}- NuGet registry{% endif %}
{% ifversion packages-rubygems-v2 %}{% else %}- RubyGems registry{% endif %}

For {% ifversion ghes %}the {% data variables.product.prodname_container_registry %}{% else %}other registries{% endif %}, you can choose to allow packages to be scoped to a user or an organization, or linked to a repository. {% ifversion docker-ghcr-enterprise-migration %}For information about migration to the {% data variables.product.prodname_container_registry %}, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)."{% endif %}

## Visibility and access permissions for packages

{% data reusables.package_registry.visibility-and-access-permissions %}

For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

## About scopes and permissions for package registries

{% data reusables.package_registry.packages-classic-pat-only %}

To use or manage a package hosted by a package registry, you must use a {% data variables.product.pat_v1 %} with the appropriate scope, and your personal account must have appropriate permissions.

For example:
* To download and install packages from a repository, your {% data variables.product.pat_v1 %} must have the `read:packages` scope, and your user account must have read permission.
* To delete a package on {% data variables.product.product_name %}, your {% data variables.product.pat_v1 %} must at least have the `delete:packages` and `read:packages` scope. The `repo` scope is also required for repo-scoped packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."

| Scope | Description | Required permission |
| --- | --- | --- |
|`read:packages`| Download and install packages from {% data variables.product.prodname_registry %} | read |
|`write:packages`| Upload and publish packages to {% data variables.product.prodname_registry %} | write |
| `delete:packages` | Delete packages from {% data variables.product.prodname_registry %} | admin |
| `repo` | Upload and delete packages (along with `write:packages`, or `delete:packages`) | write or admin |

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}

When you create a {% data variables.product.prodname_actions %} workflow, you can use the `GITHUB_TOKEN` to publish, install, delete, and restore packages in {% data variables.product.prodname_registry %} without needing to store and manage a {% data variables.product.pat_generic %}.

For more information, see:{% ifversion fpt or ghec %}
* "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
* "[AUTOTITLE](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
* "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"
* "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)"

## About repository transfers

You can transfer a repository to another personal account or organization. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

When you transfer a repository, {% data variables.product.prodname_dotcom %} may transfer the packages associated with the repository, depending on the registry the packages belong to.

* For registries that support granular permissions, packages are scoped to a personal account or organization, and the account associated with the package does not change when you transfer a repository. If you have linked a package to a repository, the link is removed when you transfer the repository to another user. Any {% ifversion fpt or ghec %}codespaces or {% endif %}{% data variables.product.prodname_actions %} workflows associated with the repository will lose access to the package. If the package inherited its access permissions from the linked repository, users will lose access to the package. For the list of these registries, see "[Granular permissions for user/organization-scoped packages](#granular-permissions-for-userorganization-scoped-packages)" above.
* For registries that only support repository-scoped permissions, packages are published directly to repositories, and {% data variables.product.prodname_dotcom %} transfers the packages associated with a repository as part of the repository transfer. All billable usage associated with the packages will subsequently be billed to the new owner of the repository. If the previous repository owner is removed as a collaborator on the repository, they may no longer be able to access the packages associated with the repository. For the list of these registries, see "[Permissions for repository-scoped packages](#permissions-for-repository-scoped-packages)" above.

## Maintaining access to packages in {% data variables.product.prodname_actions %} workflows

To ensure your workflows will maintain access to your packages, ensure that you're using the right access token in your workflow and that you've enabled {% data variables.product.prodname_actions %} access to your package.

For more conceptual background on {% data variables.product.prodname_actions %} or examples of using packages in workflows, see "[AUTOTITLE](/packages/managing-github-packages-using-github-actions-workflows)."

### Access tokens

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}

* To publish, install, delete, and restore packages associated with the workflow repository, use `GITHUB_TOKEN`.
* To install packages associated with other private repositories that `GITHUB_TOKEN` can't access, use a {% data variables.product.pat_v1 %}

For more information about `GITHUB_TOKEN` used in {% data variables.product.prodname_actions %} workflows, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_actions %} access for packages with granular permissions

To ensure your workflows have access to packages stored in registries that support granular permissions, you must give {% data variables.product.prodname_actions %} access to the repositories where your workflow is run. You can find this setting on your package's settings page. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."

{% endif %}
