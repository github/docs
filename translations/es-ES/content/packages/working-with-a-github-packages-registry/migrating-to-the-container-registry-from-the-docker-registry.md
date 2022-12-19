---
title: Migrarse al registro del contenedor desde el registro de Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %}El propietario de una empresa puede migrar{% else %}{% data variables.product.company_short %} migrará{% endif %} las imágenes de Docker almacenadas previamente en el registro de Docker en {% data variables.location.product_location %} al {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
  feature: docker-ghcr-enterprise-migration
shortTitle: Migration to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: d596a9bf61d8fbd49c3ae6a32d52fda4e327f9f3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107353'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Acerca del {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obtener más información, consulta "[Trabajar con el {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

## Acerca de la migración desde el registro de Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Si has almacenado imágenes de Docker en el registro de Docker, {% ifversion docker-ghcr-enterprise-migration %}el propietario de una empresa{% else %}{% data variables.product.company_short %}{% endif %} migrará gradualmente las imágenes al {% data variables.product.prodname_container_registry %}. No es necesario que realice ninguna acción.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Nota**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} Para obtener más información sobre cómo encontrar la versión de {% data variables.product.product_name %} utilizada, consulta "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

{% endnote %}

{% endif %}

Después de migrar las imágenes al {% data variables.product.prodname_container_registry %}, verás los siguientes cambios en la página de detalles de un paquete.

- El icono será el logotipo del {% data variables.product.prodname_container_registry %}, en lugar del logotipo de Docker.
- El dominio de la dirección URL de extracción será {% data variables.product.prodname_container_registry_namespace %}, en lugar de {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Captura de pantalla de una imagen de Docker migrada al {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Después de la migración, ya no podrás usar GraphQL API para consultar paquetes con un `PackageType` de "DOCKER". Alternativamente, puedes usar la API REST para consultar paquetes con un `package_type` de "contenedor". Para obtener más información, consulta "[Paquetes](/rest/reference/packages)" en la documentación de la API REST.

## Acerca de la facturación para el {% data variables.product.prodname_container_registry %}

Para obtener más información sobre la facturación del {% data variables.product.prodname_container_registry %}, consulta "[Acerca de la facturación del {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Información adicional

- "[Migración de la empresa al {% data variables.product.prodname_container_registry %} desde el registro de Docker](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)"

{% endif %}
