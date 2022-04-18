---
title: Migrating to the Container registry from the Docker registry
intro: 'Docker images previously stored in the Docker registry are being automatically migrated to the {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Migrate to Container registry
---

{% data variables.product.prodname_dotcom %}'s Docker registry has been replaced by the {% data variables.product.prodname_container_registry %}. If you've stored Docker images in the Docker registry, they will be automatically moved to the {% data variables.product.prodname_container_registry %}. You don't need to do anything. Any scripts or {% data variables.product.prodname_actions %} workflows that use the namespace for the Docker registry (`docker.pkg.github.com`) will continue to work after the migration to the {% data variables.product.prodname_container_registry %} (`ghcr.io`).

Migration is being done gradually, rather than all at once. If your images haven't yet been moved over, hold tight, we'll get to them sometime soon.

## How can you tell if your images have been migrated?

After your Docker images have been migrated to the {% data variables.product.prodname_container_registry %} you will see the following changes on the details page for a package:

* The icon is now the {% data variables.product.prodname_container_registry %} logo, previously it was a Docker logo.
* The domain in the pull URL is now `ghcr.io`, previously it was `docker.pkg.github.com`.

![{% data variables.product.prodname_container_registry %} details page](/assets/images/help/package-registry/container-registry-details-page.png)

## Key differences between the {% data variables.product.prodname_container_registry %} and the Docker registry

The {% data variables.product.prodname_container_registry %} is optimized to support some of the unique needs of containers.

With the {% data variables.product.prodname_container_registry %} you can:
- Store container images within your organization and personal account, or connect them to a repository.
- Choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.
- Access public container images anonymously.

### API queries for details of Docker images

After migration you'll no longer be able to use the GraphQL API to query for packages of `PackageType` "DOCKER". Instead, you can use the REST API to query for packages with the `package_type` "container". For more information, see the REST API article "[Packages](/rest/reference/packages)."

## Billing

For more information about billing for the {% data variables.product.prodname_container_registry %}, see "[About  billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."
