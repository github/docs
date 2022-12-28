---
title: 조직에 대한 인사이트 보기
intro: '조직 인사이트는 조직의 활동, 기여 및 종속성에 대한 데이터를 제공합니다.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135226'
---
## 조직 인사이트 정보

조직 활동 인사이트를 사용하여 조직 구성원이 {% data variables.product.product_name %}을(를) 사용하여 공동 작업하고 코드 작업을 하는 방법을 더 잘 이해할 수 있습니다. 종속성 인사이트를 통해 조직의 오픈 소스 사용을 추적, 보고 및 조치를 수행할 수 있습니다.

{% note %}

**참고:** 조직 인사이트를 보려면 조직에서 {% data variables.product.prodname_ghe_cloud %}을(를) 사용해야 합니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## 조직 활동 인사이트 보기

{% note %}

**참고:** 조직 활동 인사이트는 현재 공개 베타로 제공되며 변경될 수 있습니다.

{% endnote %}

조직 활동 인사이트를 사용하면 문제 및 끌어오기 요청 활동, 사용되는 상위 언어 및 조직 구성원이 시간을 보내는 위치에 대한 누적 정보를 포함하여 전체 조직 또는 특정 리포지토리의 매주, 매월 및 연간 데이터 시각화를 볼 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 조직 이름 아래에서 {% octicon "graph" aria-label="The bar graph icon" %} **인사이트** 를 클릭합니다.
  ![조직 인사이트 탭 클릭](/assets/images/help/organizations/org-nav-insights-tab.png)
4. 필요에 따라 페이지의 오른쪽 위 모서리에서 지난 **1주**, **1개월** 또는 **1년** 동안의 데이터를 보도록 선택합니다.
  ![조직 인사이트를 볼 기간 선택](/assets/images/help/organizations/org-insights-time-period.png)
5. 필요에 따라 페이지의 오른쪽 위 모서리에서 최대 3개의 리포지토리에 대한 데이터를 보려면 선택하고 **적용** 을 클릭합니다.
  ![조직 인사이트를 볼 리포지토리 선택](/assets/images/help/organizations/org-insights-repos.png)

## 조직 종속성 인사이트 보기

{% note %}

**참고:** [종속성 그래프](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)를 사용하도록 설정했는지 확인하세요. 

{% endnote %}

종속성 인사이트를 사용하면 조직이 의존하는 오픈 소스 프로젝트에 대한 취약성, 라이선스 및 기타 중요한 정보를 볼 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 조직 이름 아래에서 {% octicon "graph" aria-label="The bar graph icon" %} **인사이트** 를 클릭합니다.
  ![주 조직 탐색 모음의 인사이트 탭](/assets/images/help/organizations/org-nav-insights-tab.png)
4. 이 조직에 대한 종속성을 보려면 **종속성** 을 클릭합니다.
  ![기본 조직 탐색 모음 아래의 종속성 탭](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. 모든 {% data variables.product.prodname_ghe_cloud %} 조직에 대한 종속성 인사이트를 보려면 **내 조직** 을 클릭합니다.
  ![종속성 탭 아래의 조직 단추](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. **보안 권고 열기** 및 **라이선스** 그래프의 결과를 클릭하여 취약성 상태, 라이선스 또는 둘의 조합을 기준으로 필터링할 수 있습니다.
  ![조직의 취약성 및 라이선스 그래프](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. 각 취약성 옆에 있는 {% octicon "package" aria-label="The package icon" %} **종속** 을 클릭하여 조직에서 각 라이브러리를 사용하는 종속성을 확인할 수 있습니다.
  ![내 조직 취약 종속성](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## 추가 참고 자료
 - “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”
 - “[리포지토리의 종속성 탐색](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”
 - “[조직의 종속성 인사이트 표시 여부 변경](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)”{% ifversion ghec %}
- “[엔터프라이즈에서 종속성 인사이트에 대한 정책 적용”](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise){% endif %}
