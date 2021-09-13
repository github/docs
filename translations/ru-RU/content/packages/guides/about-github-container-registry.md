---
title: About GitHub Container Registry
intro: 'You can use {% data variables.product.prodname_github_container_registry %} to seamlessly host and manage Docker container images in your organization or personal user account on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_github_container_registry %} allows you to configure who can manage and access packages using fine-grained permissions.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** {% data variables.product.prodname_github_container_registry %} is currently in public beta and subject to change. During the beta, storage and bandwidth are free. To use {% data variables.product.prodname_github_container_registry %}, you must enable the feature for your account. For more information, see "[Enabling improved container support](/packages/guides/enabling-improved-container-support)."

{% endnote %}

### About {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-feature-highlights %}

To share context about your package's use, you can link a repository to your container image on {% data variables.product.prodname_dotcom %}. For more information, see "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

{% data variables.product.prodname_github_container_registry %} has different hosting locations, permission, and visibility than other package registries.

|                   | Package registries                                                                                                                                                                                                                                                                             | {% data variables.product.prodname_github_container_registry %}
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                              | You can host multiple container images in one organization or user account.                                                                                                            |
| Permissions       | Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | For each container image, you can choose the access level that others have. The permissions for container image access are separate from your organization and repository permissions. |
 Visibility | {% data reusables.package_registry.public-or-private-packages %} | You can set the visibility of each of your container images. A private container image is only visible to people and teams who are given access within your organization. A public container image is visible to anyone. | Anonymous access | N/A | You can access public container images anonymously.

For more information, see "[About scopes and permissions for {% data variables.product.prodname_github_container_registry %}](#about-scopes-and-permissions-for-github-container-registry)."

### Supported formats

The {% data variables.product.prodname_container_registry %} currently supports the following container image formats:

* [Docker Image Manifest V2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) Specifications](https://github.com/opencontainers/image-spec)

The {% data variables.product.prodname_github_container_registry %} hosts containers at `ghcr.io/OWNER/IMAGE-NAME`.

| Package client | Language | Package format    | Description               |
| -------------- | -------- | ----------------- | ------------------------- |
| Docker CLI     | Нет      | `Файл Dockerfile` | Docker container support. |


#### Manifest Lists/Image Indexes

{% data variables.product.prodname_github_container_registry %} also supports [Docker Manifest List](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list)/[OCI Image Index](https://github.com/opencontainers/image-spec/blob/79b036d80240ae530a8de15e1d21c7ab9292c693/image-index.md) formats which are defined in the Docker V2, Schema 2 and OCI image specifications.

### Visibility and access permissions for container images

If you have admin permissions to a container image, you can set the container image to private or public. Public images allow anonymous access and can be pulled without authentication or signing in via the CLI.

As an admin, you can also grant access permissions for a container image that are separate from the permissions you've set at the organization and repository levels.

For container images published and owned by a user account, you can give any person an access role. For container images published and owned by an organization, you can give any person or team in the organization an access role.

| Permission role | Access description                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Read            | Can download package. <br> Can read package metadata.                                                                                      |
| Write           | Can upload and download this package. <br> Can read and write package metadata.                                                            |
| Admin           | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions. |

For more information, see "[Configuring access control and visibility for container images](/packages/guides/configuring-access-control-and-visibility-for-container-images)."

### About scopes and permissions for {% data variables.product.prodname_github_container_registry %}

To use or manage a package hosted by a package registry, you must use a token with the appropriate scope, and your user account must have appropriate permissions for that repository.

| Scope             | Description                                                                                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | Download and install container images from {% data variables.product.prodname_github_container_registry %}
| `write:packages`  | Upload and publish container images to {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | Delete specified versions of private or public container images from {% data variables.product.prodname_github_container_registry %}. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |

To learn about available scopes and permissions for container images, see "[Configuring access control and visibility for container images](/packages/guides/configuring-access-control-and-visibility-for-container-images)."

For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token/)" and "[Available scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)."

### About billing for {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}

### Contacting support

If you have feedback or feature requests for {% data variables.product.prodname_github_container_registry %}, use the [feedback form](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Contact {% data variables.contact.github_support %} about {% data variables.product.prodname_github_container_registry %} using [our contact form](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) if:

* You experience anything that contradicts the documentation.
* You encounter vague or unclear errors.
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally-identifying information.
