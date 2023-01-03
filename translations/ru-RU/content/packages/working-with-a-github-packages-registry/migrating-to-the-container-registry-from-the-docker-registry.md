---
title: Миграция в реестр контейнеров из реестра Docker
intro: '{% ifversion docker-ghcr-enterprise-migration %} Владелец предприятия может{% else %}{% data variables.product.company_short %} перенести образы Docker, ранее хранящиеся в реестре Docker на {% data variables.location.product_location %} в {% data variables.product.prodname_container_registry %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107352'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Сведения о {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Дополнительные сведения см. в разделе "[Работа с {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

## Сведения о миграции из реестра Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Если вы сохранили образы Docker в реестре Docker, {% ifversion docker-ghcr-enterprise-migration %}владелец предприятия{% else %}{% data variables.product.company_short %}{% endif %} будет постепенно переносить образы в {% data variables.product.prodname_container_registry %}. Никаких действий выполнять не требуется.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**Примечание.** {% data reusables.package_registry.container-registry-ghes-migration-availability %} Дополнительные сведения о поиске используемой версии {% data variables.product.product_name %} см. в разделе "[Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

{% endnote %}

{% endif %}

После переноса образа Docker в {% data variables.product.prodname_container_registry %} вы увидите следующие изменения в разделе сведений для пакета:

- Значок будет представлять логотип {% data variables.product.prodname_container_registry %} вместо логотипа Docker.
- Домен в URL-адресе вытягивания будет {% data variables.product.prodname_container_registry_namespace %} вместо {% data variables.product.prodname_docker_registry_namespace %}.

{% ifversion fpt or ghec %}

![Снимок экрана: образ Docker, перенесенный в {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

После миграции вы больше не сможете использовать API GraphQL для запроса пакетов с `PackageType` DOCKER. Вместо этого можно использовать REST API для запроса пакетов с `package_type` "контейнер". Дополнительные сведения см. в разделе [Пакеты](/rest/reference/packages) в документации по REST API.

## Сведения о выставлении счетов за {% data variables.product.prodname_container_registry %}

Дополнительную информацию о выставлении счетов за {% data variables.product.prodname_container_registry %} см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## Дополнительные материалы

- [Перенос предприятия в {% data variables.product.prodname_container_registry %} из реестра Docker](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)

{% endif %}
