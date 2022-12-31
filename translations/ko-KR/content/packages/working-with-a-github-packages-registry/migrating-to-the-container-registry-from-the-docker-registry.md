---
title: Docker 레지스트리에서 컨테이너 레지스트리로 마이그레이션
intro: '{% ifversion docker-ghcr-enterprise-migration %} 엔터프라이즈 소유자는 {% else %}{% data variables.product.company_short %}에서 {% endif %}이(가) {% data variables.location.product_location %}의 Docker 레지스트리에 이전에 저장된 Docker 이미지를 {% data variables.product.prodname_container_registry %}로 마이그레이션할 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107351'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} 정보

{% data reusables.package_registry.container-registry-benefits %} 자세한 내용은 “[{% data variables.product.prodname_container_registry %}로 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”을 참조하세요.

## Docker 레지스트리에서의 마이그레이션 정보

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Docker 레지스트리에 Docker 이미지를 저장한 경우 {% ifversion docker-ghcr-enterprise-migration %}엔터프라이즈 소유자{% else %}{% data variables.product.company_short %}{% endif %}가 이미지를 {% data variables.product.prodname_container_registry %}로 점진적으로 마이그레이션합니다. 사용자가 수행할 작업은 없습니다.

{% ifversion docker-ghcr-enterprise-migration %}

{% note %}

**참고**: {% data reusables.package_registry.container-registry-ghes-migration-availability %} 사용 중인 {% data variables.product.product_name %}의 버전을 확인하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_docs %}의 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)”를 참조하세요.

{% endnote %}

{% endif %}

Docker 이미지가 {% data variables.product.prodname_container_registry %}로 마이그레이션되면 패키지의 세부 정보에 다음과 같은 변경 내용이 표시됩니다.

- 아이콘은 Docker 로고 대신 {% data variables.product.prodname_container_registry %} 로고가 됩니다.
- 끌어오기 URL의 도메인은 {% data variables.product.prodname_docker_registry_namespace %} 대신 {% data variables.product.prodname_container_registry_namespace %}가 됩니다.

{% ifversion fpt or ghec %}

![{% data variables.product.prodname_container_registry %}로 마이그레이션된 Docker 이미지의 스크린샷](/assets/images/help/package-registry/container-registry-details-page.png)

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}

{% ifversion fpt or ghec %}

마이그레이션 후에는 더 이상 GraphQL API를 사용하여 `PackageType` “DOCKER” 패키지를 쿼리할 수 없습니다. 대신 REST API를 사용하여 `package_type` “컨테이너”가 있는 패키지를 쿼리할 수 있습니다. 자세한 내용은 REST API 설명서의 “[패키지](/rest/reference/packages)”를 참조하세요.

## {% data variables.product.prodname_container_registry %} 요금 청구 정보

{% data variables.product.prodname_container_registry %}의 청구 정보에 대한 자세한 내용은 “[{% data variables.product.prodname_registry %} 요금 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.

{% endif %}

{% ifversion docker-ghcr-enterprise-migration %}

## 추가 참고 자료

- “[Docker 레지스트리에서 {% data variables.product.prodname_container_registry %}로 엔터프라이즈 마이그레이션](/admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry)”

{% endif %}
