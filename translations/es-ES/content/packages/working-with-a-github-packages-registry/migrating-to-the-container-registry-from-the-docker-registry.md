---
title: Migrating to the Container registry from the Docker registry
intro: '{% ifversion docker-ghcr-enterprise-migration %}An enterprise owner can{% else %}{% data variables.product.company_short %} will{% endif %} migrate Docker images previously stored in the Docker registry on {% data variables.location.product_location %} to the {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: 'docker-ghcr-enterprise-migration'
shortTitle: Migration to Container registry
topics:
  - Containers
  - Docker
  - Migration
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## About the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} For more information, see "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

## About migration from the Docker registry

{% data reusables.package_registry.container-registry-replaces-docker-registry %} If you've stored Docker images in the Docker registry, {% ifversion docker-ghcr-enterprise-migration %}an enterprise owner{% else %}{% data variables.product.company_short %}{% endif %} will gradually migrate the images to the {% data variables.product.prodname_container_registry %}. No action is required on your part.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Note**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} For more information about finding the version of {% data variables.product.product_name %} that you use, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

{% endnote %}

{% endif %}

After a Docker image has been migrated to the {% data variables.product.prodname_container_registry %}, you'll see the following changes to the details for the package.

- The icon will be the {% data variables.product.prodname_container_registry %} logo instead of the Docker logo.
- The domain in the pull URL will be {% data variables.product.prodname_container_registry_namespace %} instead of {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Screenshot of a Docker image migrated to the {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

After migration, you'll no longer be able to use the GraphQL API to query for packages with a `PackageType` of "DOCKER". Instead, you can use the REST API to query for packages with a `package_type` of "container". For more information, see "[Packages](/rest/reference/packages)" in the REST API documentation.

## About billing for {% data variables.product.prodname_container_registry %}

For more information about billing for the {% data variables.product.prodname_container_registry %}, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Further reading

- "[Migrating your enterprise to the {% data variables.product.prodname_container_registry %} from the Docker registry](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
