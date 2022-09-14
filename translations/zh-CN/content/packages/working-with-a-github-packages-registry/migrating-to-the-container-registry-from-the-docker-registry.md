---
title: 从 Docker 注册表迁移到容器注册表
intro: '{% ifversion docker-ghcr-enterprise-migration %}企业所有者可以{% else %}{% data variables.product.company_short %}将{% endif %}之前存储在 {% data variables.product.product_location %} 上的 Docker 注册表中的 Docker 映像迁移到 {% data variables.product.prodname_container_registry %}。'
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
ms.openlocfilehash: eb940881f59c9c935695c6fd7e3a62c9c3f387c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409489'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## 关于 {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}有关详细信息，请参阅“[使用 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”。

## 关于从 Docker 注册表迁移

{% data reusables.package_registry.container-registry-replaces-docker-registry %}如果已将 Docker 映像存储在 Docker 注册表中，则{% ifversion docker-ghcr-enterprise-migration %}企业所有者{% else %}{% data variables.product.company_short %}{% endif %}会逐步将映像迁移到 {% data variables.product.prodname_container_registry %}。 你无需执行任何操作。

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

注意：{% data reusables.package_registry.container-registry-ghes-migration-availability %}有关查找所使用的 {% data variables.product.product_name %} 版本的详细信息，请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)”。

{% endnote %}

{% endif %}

在将 Docker 映像迁移到 {% data variables.product.prodname_container_registry %} 后，你将看到对包详细信息所做的以下更改。

- 该图标将是 {% data variables.product.prodname_container_registry %} 徽标，而不是 Docker 徽标。
- 拉取 URL 中的域将是 {% data variables.product.prodname_container_registry_namespace %} 而不是 {% data variables.product.prodname_docker_registry_namespace %}。

{% ifversion fpt or ghec %}

![迁移到 {% data variables.product.prodname_container_registry %} 的 Docker 映像的屏幕截图](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

迁移后，便无法再使用 GraphQL API 来查询 `PackageType` 为“DOCKER”的包。 可以改为使用 REST API 查询 `package_type` 为“容器”的包。 有关详细信息，请参阅 REST API 文档中的“[包](/rest/reference/packages)”。

## 关于 {% data variables.product.prodname_container_registry %} 的计费

有关 {% data variables.product.prodname_container_registry %} 计费的详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## 延伸阅读

- [将企业从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)

{% endif %}
