---
title: Dockeerレジストリからコンテナレジストリへの移行
intro: '{% ifversion docker-ghcr-enterprise-migration %}エンタープライズ所有者は、{% else %}{% data variables.product.company_short %} は、{% endif %}以前に {% data variables.location.product_location %}上の Docker レジストリに格納されていた Docker イメージを {% data variables.product.prodname_container_registry %} に移行します。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107350'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} について

{% data reusables.package_registry.container-registry-benefits %}詳しくは、「[{% data variables.product.prodname_container_registry %}の操作](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。

## Docker レジストリからの移行について

{% data reusables.package_registry.container-registry-replaces-docker-registry %}Docker レジストリに Docker イメージが格納されている場合は、{% ifversion docker-ghcr-enterprise-migration %}Enterprise 所有者{% else %}{% data variables.product.company_short %}{% endif %}が、そのイメージを {% data variables.product.prodname_container_registry %} に段階的に移行します。 お客様側では何もする必要はありません。

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**注**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}使用する {% data variables.product.product_name %} のバージョンの検索について詳しくは、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)」を参照してください。

{% endnote %}

{% endif %}

Docker イメージが {% data variables.product.prodname_container_registry %} に移行された後、そのパッケージの詳細に以下の変更が示されます。

- アイコンは、Docker ロゴではなく {% data variables.product.prodname_container_registry %} ロゴになります。
- プル URL のドメインは、{% data variables.product.prodname_docker_registry_namespace %} ではなく {% data variables.product.prodname_container_registry_namespace %} になります。

{% ifversion fpt or ghec %}

![{% data variables.product.prodname_container_registry %} に移行された Docker イメージのスクリーンショット](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

移行後は、GraphQL API を使用して `PackageType` が "DOCKER" のパッケージに対するクエリを実行できなくなります。 代わりに、REST API を使用して `package_type` が "container" のパッケージに対するクエリを実行できます。 詳しくは、REST API のドキュメントの「[パッケージ](/rest/reference/packages)」を参照してください。

## {% data variables.product.prodname_container_registry %} の課金について

{% data variables.product.prodname_container_registry %} の課金について詳しくは、「[{% data variables.product.prodname_registry %} の課金について](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## 参考資料

- [Docker レジストリから {% data variables.product.prodname_container_registry %} への Enterprise の移行](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)

{% endif %}
