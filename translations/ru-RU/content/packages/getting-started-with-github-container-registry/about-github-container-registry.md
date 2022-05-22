---
title: About GitHub Container Registry
intro: 'The {% data variables.product.prodname_github_container_registry %} allows you to seamlessly host and manage Docker container images in your organization or personal user account on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_github_container_registry %} allows you to configure who can manage and access packages using fine-grained permissions.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** {% data variables.product.prodname_github_container_registry %} is currently in public beta and subject to change. During the beta, storage and bandwidth are free. To use {% data variables.product.prodname_github_container_registry %}, you must enable the feature for your account. For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% endnote %}

{% data reusables.package_registry.container-registry-feature-highlights %}

To share context about your package's use, you can link a repository to your container image on {% data variables.product.prodname_dotcom %}. For more information, see "[Connecting a repository to a container image](/packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image)."

### Supported formats

The {% data variables.product.prodname_container_registry %} currently supports the following container image formats:

* [Docker Image Manifest V2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) Specifications](https://github.com/opencontainers/image-spec)

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

For more information, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

### About billing for {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}

### Contacting support

If you have feedback or feature requests for {% data variables.product.prodname_github_container_registry %}, use the [feedback form](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Contact {% data variables.contact.github_support %} about {% data variables.product.prodname_github_container_registry %} using [our contact form](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) if:

* You experience anything that contradicts the documentation.
* You encounter vague or unclear errors.
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally-identifying information.
