---
title: 서버 통계 내보내기
shortTitle: Export Server Statistics
intro: '사용자 고유의 도구를 사용하여 CSV 또는 JSON 파일에서 {% data variables.product.prodname_server_statistics %} 메트릭을 다운로드하여 시간별 {% data variables.product.prodname_ghe_server %} 사용량을 분석할 수 있습니다.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 9c949a52389e913a1af2908db279b5eff1879cff
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098381'
---
CSV 또는 JSON 파일에서 최근 365일까지의 {% data variables.product.prodname_server_statistics %} 데이터를 다운로드할 수 있습니다. 리포지토리, 문제 및 끌어오기 요청에 대한 집계 메트릭을 포함하는 이 데이터는 조직의 요구 사항을 예측하고, 팀의 작동 방식을 이해하고, {% data variables.product.prodname_ghe_server %}에서 가져온 값을 표시하는 데 도움이 될 수 있습니다. 

이 데이터를 다운로드하려면 먼저 {% data variables.product.prodname_server_statistics %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_server_statistics %} 사용](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”을 참조하세요. 

다운로드할 수 있는 메트릭을 미리 보려면 "[{% data variables.product.prodname_server_statistics %} 정보](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)"를 참조하세요.

이러한 메트릭을 다운로드하려면 {% data variables.product.prodname_ghe_cloud %}의 엔터프라이즈 소유자 또는 조직 소유자여야 합니다.
  - {% 데이터 variables.location.product_location %}이(가) {% 데이터 variables.product.prodname_ghe_cloud %}의 엔터프라이즈 계정에 연결된 경우 "[엔터프라이즈 계정에서 메트릭 다운로드](#downloading-metrics-from-your-enterprise-account)"를 참조하세요.
  - {% 데이터 variables.location.product_location %}이(가) {% 데이터 variables.product.prodname_ghe_cloud %}에서 조직에 연결된 경우 "[조직에서 메트릭 다운로드"를 참조하세요](#downloading-metrics-from-your-organization).

{% data variables.product.prodname_github_connect %}에 대한 자세한 내용은 "[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)"를 참조하세요.

## 엔터프라이즈 계정에서 메트릭 다운로드

1. {% data variables.product.prodname_ghe_cloud %}의 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음, **Your enterprises**(내 엔터프라이즈)를 클릭합니다.
  !["내 엔터프라이즈" 옵션이 있는 드롭다운 메뉴](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. 원하는 엔터프라이즈 계정 옆에 있는 **설정** 을 클릭합니다.
  ![엔터프라이즈 관리자 계정 옆에 있는 설정 단추](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. 왼쪽에서 **GitHub Connect** 를 클릭합니다.
  ![엔터프라이즈 관리자 계정의 GitHub Connect 옵션](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## 조직에서 메트릭 다운로드

1. {% data variables.product.prodname_ghe_cloud %}의 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음, **내 조직** 을 클릭합니다.
  !["내 조직" 옵션이 있는 드롭다운 메뉴](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. 조직 목록에서 {% 데이터 variables.location.product_location %}에 연결된 조직 옆에 있는 **설정을** 클릭합니다.
  ![{% data variables.product.prodname_ghe_cloud %} 조직 옆에 있는 설정 단추](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. 왼쪽에서 **GitHub Connect** 를 클릭합니다.
  ![조직 계정 설정 왼쪽 사이드바의 GitHub Connect 옵션](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
