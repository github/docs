---
title: 엔터프라이즈에서 사용자 라이선스 자동 동기화 사용
intro: '사용자 라이선스를 {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_ghe_cloud %}로 자동으로 동기화하여 {% 데이터 variables.product.prodname_enterprise %} 환경에서 라이선스 사용량을 관리할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: 38bac4b212045482b497b741bff583a2245a753b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099029'
---
## 자동 라이선스 동기화 정보

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)”를 참조하세요.

엔터프라이즈에 자동 사용자 라이선스 동기화를 사용하도록 설정하면 {% data variables.product.prodname_github_connect %}가 매주 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량을 자동으로 동기화합니다.{% ifversion ghes > 3.4 %} 라이선스 동기화 작업을 수동으로 트리거하여 자동 주간 동기화와 상관없이 언제든지 라이선스 데이터를 동기화할 수도 있습니다. 자세한 내용은 "[라이선스 동기화 작업 트리거](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)"를 참조하세요.{% endif %}

여러 {% data variables.product.prodname_ghe_server %} 인스턴스를 사용하는 경우 {% data variables.product.prodname_ghe_cloud %}에서 각 인스턴스와 동일한 조직 또는 엔터프라이즈 계정 간에 라이선스 자동 동기화를 사용하도록 설정할 수 있습니다.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data variables.product.prodname_ghe_server %} 사용자 라이선스 정보를 {% data variables.product.prodname_ghe_cloud %}에 수동으로 업로드할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”를 참조하세요.

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## 라이선스 동기화 사용

{% 데이터 variables.location.product_location %}에서 라이선스 동기화를 사용하도록 설정하기 전에 {% 데이터 variables.product.prodname_github_connect %}을(를) 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 관리](/admin/configuration/configuring-github-connect/managing-github-connect)”를 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. “서버에서 사용자 라이선스 수와 사용량을 동기화할 수 있음”에서 드롭다운 메뉴를 사용하여 **사용** 을 선택합니다.
  ![사용자 라이선스 자동 동기화 사용 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
