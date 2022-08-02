---
title: Migrarse al registro del contenedor desde el registro de Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %}Un propietario de empresa puede{% else %}{% data variables.product.company_short %}{% endif %} migrará las imágenes de Docker que se hayan almacenado previamente en el registro de Docker en {% data variables.product.product_location %} hacia el {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: docker-ghcr-enterprise-migration
shortTitle: Migración al registro de contenedores
topics:
  - Containers
  - Docker
  - Migration
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## Acerca de {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obtener más información, consulta la sección "[Trabajar con el {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

## Acerca de la migración desde el registro de Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Si almacenaste imágenes de Docker en el registro de Docker, {% ifversion docker-ghcr-enterprise-migration %}un propietario de una empresa{% else %}{% data variables.product.company_short %}{% endif %} migrará las imágenes gradualmente hacia el {% data variables.product.prodname_container_registry %}. No se requiere que realices ninguna acción.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Nota**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} Para obtener más información sobre cómo encontrar la versión de {% data variables.product.product_name %} que utilizas, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

{% endnote %}

{% endif %}

Después de que una imagen de Docker se migra al {% data variables.product.prodname_container_registry %}, verás los siguientes cambios a los detalles del paquete.

- El icono será el logo del {% data variables.product.prodname_container_registry %} en vez del logo de Docker.
- El dominio en la URL de extracción será {% data variables.product.prodname_container_registry_namespace %} en vez de {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Captura de pantalla de una imagen de Docker que se migró al {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Después de la migración, ya no podrás utilizar la API de GraphQL para consultar paquetes con un `PackageType` de "DOCKER". En su lugar, puedes utilizar la API de REST para consultar paquetes con un `package_type` de "container". Para obtener más información, consulta la sección "[Paquetes](/rest/reference/packages)" en la documentación de la API de REST.

## Acerca de la facturación para {% data variables.product.prodname_container_registry %}

For more information about billing for the {% data variables.product.prodname_container_registry %}, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Leer más

- "[Migrating your enterprise to the {% data variables.product.prodname_container_registry %} from the Docker registry](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
