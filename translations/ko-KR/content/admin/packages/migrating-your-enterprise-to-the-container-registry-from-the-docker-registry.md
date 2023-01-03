---
title: Docker 레지스트리에서 컨테이너 레지스트리로 엔터프라이즈 마이그레이션
intro: '{% data variables.location.product_location %}의 Docker 레지스트리에 이전에 저장된 Docker 이미지를 {% data variables.product.prodname_container_registry %}로 마이그레이션할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106383'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} 정보

{% data reusables.package_registry.container-registry-benefits %} 자세한 내용은 “[{% data variables.product.prodname_container_registry %}로 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”을 참조하세요.

{% data variables.location.product_location %}에 대한 {% data variables.product.prodname_registry %}를 구성하는 방법에 대한 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_registry %} 시작](/admin/packages/getting-started-with-github-packages-for-your-enterprise)"을 참조하세요.

## Docker 레지스트리에서의 마이그레이션 정보

{% data reusables.package_registry.container-registry-replaces-docker-registry %} {% data variables.location.product_location %}의 Docker 레지스트리에 이미지가 포함된 경우 이미지를 {% data variables.product.prodname_container_registry %}로 수동으로 마이그레이션해야 합니다.

{% ifversion ghes %}

{% note %}

**참고**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} {% data variables.product.prodname_container_registry %}로 마이그레이션할 때 미치는 영향에 대한 자세한 내용은 “[Docker 레지스트리에서 {% data variables.product.prodname_container_registry %}로 마이그레이션](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)”을 참조하세요.

## {% data variables.product.prodname_container_registry %}로 조직 마이그레이션

조직의 모든 Docker 이미지를 {% data variables.product.prodname_container_registry %}로 마이그레이션할 수 있습니다. 마이그레이션 작업 기간은 마이그레이션할 총 이미지 수와 {% ifversion ghes %}인스턴스{% elsif ghae %}{% data variables.product.product_name %}{% endif %}의 전체 부하에 따라 달라집니다. 마이그레이션이 성공하면 {% data variables.product.product_name %}에 요약이 표시되고, 이후 Docker 이미지의 모든 업로드는 {% data variables.product.prodname_container_registry %}를 사용합니다.

{% ifversion ghes %}사이트 관리자{% elsif ghae %}엔터프라이즈 소유자{% endif %}가 {% data variables.location.product_location %}에 대한 전자 메일 알림을 구성한 경우 마이그레이션이 완료된 후 전자 메일을 받게 됩니다. 자세한 내용은 “[알림에 사용할 메일 구성](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”을 참조하세요.

{% note %}

**{% ifversion ghes %}참고{% elsif ghae %}참고{% endif %}** :

{%- ifversion ghes %}
- 마이그레이션하는 동안 인스턴스의 CPU 및 메모리 사용량이 증가합니다. 사용자에 대한 인스턴스 성능을 보장하기 위해 {% data variables.product.company_short %}는 활동 감소 기간 동안 마이그레이션을 시작하는 것이 좋습니다.
{%- endif %} {% ifversion ghes %}- {% endif %}마이그레이션 중에 엔터프라이즈에 대한 설정을 수정{% ifversion ghes %}하거나 관리 SSH 세션에서 `ghe-config-apply`를 실행{% endif %}하지 마세요. {% ifversion ghes %}이러한 작업은 구성 실행을 트리거하며 이 경우 서비스가 다시 시작될 수 있으며 {% elsif ghae %}이러한 설정을 수정하면 {% endif %} 마이그레이션이 중단될 수 있습니다.
{%- ifversion ghes %}
- 마이그레이션 후에는 Docker 레지스트리의 이미지 파일과 {% data variables.product.prodname_container_registry %}의 중복으로 인해 인스턴스에 대한 스토리지 부담이 증가합니다. {% data variables.product.product_name %}의 향후 릴리스에서는 모든 마이그레이션이 완료되면 중복된 파일이 제거됩니다.

{% data variables.location.product_location %}의 성능 및 스토리지를 모니터링하는 방법에 대한 자세한 내용은 "[모니터 대시보드 액세스"를 참조하세요](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard).
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **Packages**(패키지)를 클릭합니다.
1. 마이그레이션할 패키지 수의 오른쪽에서 **마이그레이션 시작** 을 클릭합니다. 마이그레이션하는 동안 {% data variables.product.product_name %}는 이 페이지에 진행률을 표시합니다.

마이그레이션이 완료되면 페이지에 결과가 표시됩니다. 마이그레이션에 실패하면 실패를 일으킨 패키지를 소유한 조직이 페이지에 표시됩니다.

## 실패한 조직 마이그레이션 다시 실행

마이그레이션 전에 사용자가 Docker 레지스트리의 기존 패키지와 동일한 이름을 가진 패키지를 {% data variables.product.prodname_container_registry %}에 만든 경우 마이그레이션이 실패합니다.

1. {% data variables.product.prodname_container_registry %}에서 영향을 받은 컨테이너를 삭제합니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)”을 참조하세요.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. 마이그레이션할 패키지 수의 오른쪽에서 **마이그레이션 다시 실행** 을 클릭합니다. 마이그레이션하는 동안 {% data variables.product.product_name %}는 이 페이지에 진행률을 표시합니다.
1. 마이그레이션이 다시 실패하면 1단계부터 시작하여 마이그레이션을 다시 실행합니다.
