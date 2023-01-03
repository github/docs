---
title: GitHub Enterprise Server와 GitHub Enterprise Cloud 간의 라이선스 사용량 동기화
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_ghe_cloud %}로 라이선스 사용량을 동기화하여 엔터프라이즈 전체의 모든 라이선스 사용량을 한 곳에서 보고 두 환경 모두에 계정이 있는 사용자가 하나의 사용자 라이선스만 사용하도록 할 수 있습니다.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572594'
---
## 라이선스 사용 현황 동기화 정보

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

{% data variables.product.prodname_dotcom_the_website %}에 대한 최신 라이선스 세부 정보가 표시되도록 하려면 {% data variables.product.prodname_github_connect %}를 사용하여 환경 간에 라이선스 사용량을 자동으로 동기화할 수 있습니다. {% data variables.product.prodname_github_connect %}에 대한 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 "[{% data variables.product.prodname_github_connect %} 정보]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}"를 참조하세요.{% elsif ghes %}."{% endif %}

{% data variables.product.prodname_github_connect %}를 사용하지 않으려면 {% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_dotcom_the_website %}로 파일을 업로드하여 라이선스 사용량을 수동으로 동기화할 수 있습니다.

라이선스 사용량을 동기화하는 경우 {% data variables.product.prodname_ghe_server %}의 각 사용자 계정에 대한 사용자 ID 및 메일 주소만 {% data variables.product.prodname_ghe_cloud %}로 전송됩니다.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## 라이선스 사용량 자동 동기화

{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간의 사용자 라이선스 수와 사용량을 매주 자동으로 동기화할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 "[엔터프라이즈에 대한 자동 사용자 라이선스 동기화 사용]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}"을 참조하세요.{% elsif ghes %}."{% endif %}

{% ifversion ghec or ghes > 3.4 %} {% data variables.product.prodname_github_connect %}를 사용하도록 설정하면 라이선스 데이터가 매주 자동으로 동기화됩니다. 라이선스 동기화 작업을 트리거하여 언제든지 라이선스 데이터를 수동으로 동기화할 수도 있습니다.

### 라이선스 동기화 작업 트리거

1. {% data variables.product.prodname_ghe_server %} 인스턴스에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. "라이선스 동기화"에서 {% octicon "sync" aria-label="The Sync icon" %} **지금 동기화** 를 클릭합니다.
  ![라이선스 동기화 섹션의 "지금 동기화" 단추 스크린샷](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## GitHub Enterprise Server 라이선스 사용량 수동 업로드

{% data variables.product.prodname_ghe_server %}에서 JSON 파일을 다운로드하고 {% data variables.product.prodname_ghe_cloud %}에 파일을 업로드하여 두 배포 간에 사용자 라이선스 사용량을 수동으로 동기화할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. "빠른 링크"에서 {% data variables.product.prodname_ghe_server %}에서 현재 라이선스 사용량이 포함된 파일을 다운로드하려면 **라이선스 사용량 내보내기** 를 클릭합니다.
  ![라이선스 사용 링크 내보내기](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. "Enterprise 서버 인스턴스"에서 **서버 사용량 추가** 를 클릭합니다.
  ![GitHub Enterprise 서버 사용 링크 업로드](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {% data variables.product.prodname_ghe_server %}에서 다운로드한 JSON 파일을 업로드합니다.
  ![업로드할 파일 끌어서 놓기 또는 선택](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
