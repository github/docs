---
title: Migration vers le registre de conteneurs à partir du registre Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %}Un propriétaire d’entreprise peut migrer{% else %}{% data variables.product.company_short %} migrera{% endif %} des images Docker précédemment stockées dans le registre Docker sur {% data variables.location.product_location %} vers le {% data variables.product.prodname_container_registry %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107348'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## À propos du {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Pour plus d’informations, consultez « [Utilisation du {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) ».

## À propos de la migration à partir du registre Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Si vous avez stocké des images Docker dans le registre Docker, {% ifversion docker-ghcr-enterprise-migration %}un propriétaire d’entreprise{% else %}{% data variables.product.company_short %}{% endif %} migrera progressivement les images vers le {% data variables.product.prodname_container_registry %}. Aucune autre action n’est requise de votre part.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Remarque** : {% data reusables.package_registry.container-registry-ghes-migration-availability %} Pour plus d’informations sur la version de {% data variables.product.product_name %} que vous utilisez, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server) ».

{% endnote %}

{% endif %}

Une fois qu’une image Docker a été migrée vers le {% data variables.product.prodname_container_registry %}, vous noterez les modifications suivantes apportées aux détails du package.

- L’icône sera le logo du {% data variables.product.prodname_container_registry %} au lieu du logo Docker.
- Le domaine de l’URL d’extraction sera {% data variables.product.prodname_container_registry_namespace %} au lieu de {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Capture d’écran d’une image Docker migrée vers le {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Au terme de la migration, vous ne pourrez plus utiliser l’API GraphQL pour interroger les packages avec « DOCKER » comme `PackageType`. Cela étant, vous pouvez utiliser l’API REST pour interroger des packages avec « conteneur » comme `package_type`. Pour plus d’informations, consultez « [Packages](/rest/reference/packages) » dans la documentation de l’API REST.

## À propos de la facturation pour le {% data variables.product.prodname_container_registry %}

Pour plus d’informations sur la facturation du {% data variables.product.prodname_container_registry %}, consultez « [À propos de la facturation pour le {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages) ».

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Pour aller plus loin

- « [Migration de votre entreprise vers le {% data variables.product.prodname_container_registry %} à partir du registre Docker](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry) ».

{% endif %}
