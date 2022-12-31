---
title: Migrieren zur Containerregistrierung aus der Docker-Registrierung
intro: '{% ifversion docker-ghcr-enterprise-migration %}Ein Unternehmensinhaber kann{% else %}{% data variables.product.company_short %} wird{% endif %} Docker-Images, die zuvor in der Docker-Registrierung auf {% data variables.location.product_location %} gespeichert wurden, in die {% data variables.product.prodname_container_registry %} migrieren.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107349'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Informationen zur {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Weitere Informationen findest du unter [Arbeiten mit der {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

## Informationen zur Migration aus der Docker-Registrierung

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Wenn du Docker-Images in der Docker-Registrierung gespeichert hast, {% ifversion docker-ghcr-enterprise-migration %}wird ein*e Unternehmensinhaber*in{% else %}{% data variables.product.company_short %}{% endif %} diese schrittweise zur {% data variables.product.prodname_container_registry %} migrieren. Du musst nichts weiter tun.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Hinweis**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} Weitere Informationen zum Suchen {% data variables.product.product_name %}-Version, die du verwendest, findest du unter [Informationen zu {% data variables.product.prodname_docs %}-Versionen](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server).

{% endnote %}

{% endif %}

Nachdem ein Docker-Image zur {% data variables.product.prodname_container_registry %} migriert wurde, werden die folgenden Änderungen auf der Detailseite des Pakets angezeigt.

- Als Symbol wird das {% data variables.product.prodname_container_registry %}-Logo anstelle des Docker-Logos angezeigt.
- Die Domäne in der Pull-URL lautet {% data variables.product.prodname_container_registry_namespace %} und nicht {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Screenshot eines Docker-Image, das zur {% data variables.product.prodname_container_registry %} migriert wurde](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

Nach der Migration kannst du mit der GraphQL-API keine Pakete mit dem `PackageType`-Wert "DOCKER" mehr abfragen. Stattdessen kannst du Pakete mit dem `package_type`-Wert "container" mit der REST-API abfragen. Weitere Informationen findest du unter [Pakete](/rest/reference/packages) in der REST-API-Dokumentation.

## Informationen zur Abrechnung für die {% data variables.product.prodname_container_registry %}

Weitere Informationen zur Abrechnung für die {% data variables.product.prodname_container_registry %} findest du unter [Informationen zur Abrechnung für die {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Weitere Informationsquellen

- [Migrieren deines Unternehmens von der Docker-Registrierung zur {% data variables.product.prodname_container_registry %}](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)

{% endif %}
