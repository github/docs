---
title: 리포지토리의 종속성 탐색
intro: '종속성 그래프를 사용하여 프로젝트가 사용하는 패키지와{% ifversion fpt or ghec %} 이를 사용하는 리포지토리를{% endif %} 볼 수 있습니다. 또한 종속성에서 검색된 모든 취약성을 볼 수 있습니다.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882733'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## 종속성 그래프 보기

종속성 그래프는 리포지토리의 종속성{% ifversion fpt or ghec %} 및 종속 항목{% endif %}을 보여 줍니다. 종속성 검색 및 지원되는 에코시스템에 대한 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. 필요에 따라 “종속성 그래프”에서 **종속 항목** 을 클릭합니다.
![종속성 그래프 페이지의 종속 항목 탭](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} 엔터프라이즈 소유자는 엔터프라이즈 수준에서 종속성 그래프를 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”을 참조하세요.
{% endif %}

### 종속성 보기

{% ifversion fpt or ghec %} 종속성은 에코시스템별로 그룹화됩니다. 한 종속성을 확장하여 해당 종속성을 볼 수 있습니다.  프라이빗 리포지토리, 프라이빗 패키지 또는 인식할 수 없는 파일의 종속성은 일반 텍스트로 표시됩니다. 종속성에 대한 패키지 관리자가 퍼블릭 리포지토리에 있는 경우 {% data variables.product.product_name %}는 해당 리포지토리에 대한 링크를 표시합니다.

{% ifversion dependency-submission-api %} 종속성 제출 API(베타)를 사용하여 프로젝트에 제출된 종속성은 에코시스템별로 그룹화되지만 리포지토리의 매니페스트 또는 잠금 파일을 통해 식별된 종속성과 별도로 표시됩니다. 이러한 제출된 종속성은 종속성의 스냅샷 또는 집합으로 제출되기 때문에 종속성 그래프에 “스냅샷 종속성”으로 표시됩니다. 종속성 제출 API 사용에 대한 자세한 내용은 “[종속성 제출 API 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”을 참조하세요.
{% endif %}

리포지토리에서 취약성이 검색된 경우 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 있는 사용자의 보기 맨 위에 표시됩니다.

![의존성 그래프](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} 리포지토리의 매니페스트 또는 잠금 파일에 지정된 모든 직접 및 간접 종속성이 에코시스템별로 그룹화되어 나열됩니다. 리포지토리에서 취약성이 검색된 경우 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 있는 사용자의 보기 맨 위에 표시됩니다.

![의존성 그래프](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**참고:** {% data variables.product.product_name %}는 **종속 항목** 보기를 채우지 않습니다.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### 종속 항목 보기

퍼블릭 리포지토리의 경우 종속 항목 보기는 다른 리포지토리에서 리포지토리를 사용하는 방법을 보여 줍니다. 패키지 관리자에 라이브러리가 포함된 리포지토리만 표시하려면 종속 리포지토리 목록 바로 위에 있는 **NUMBER 패키지** 를 클릭합니다. 종속 개수는 근사치이며 나열된 종속 항목과 항상 일치하지 않을 수 있습니다.

![의존도 그래프](/assets/images/help/graphs/dependents_graph.png)

## 프라이빗 리포지토리에 대한 종속성 그래프 사용 및 사용 안 함

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## “사용 대상” 패키지 변경

일부 리포지토리에는 **코드** 탭의 사이드바에 “사용 대상” 섹션이 있을 수 있습니다. 다음과 같은 경우 리포지토리에 “사용 대상” 섹션이 있습니다.
  * 종속성 그래프가 리포지토리에 대해 사용하도록 설정되어 있습니다(자세한 내용은 위 섹션 참조).
  * 리포지토리에서 [지원되는 패키지 에코시스템](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)에 게시된 패키지가 포함되어 있습니다.
  * 에코시스템 내에서 패키지에 원본이 저장된 _퍼블릭_ 리포지토리에 대한 링크가 있습니다.

“사용 대상” 섹션에는 발견된 패키지에 대한 공개 참조 수가 표시되고 종속 프로젝트 소유자 중 일부의 아바타가 표시됩니다.

![“사용 대상” 사이드바 섹션](/assets/images/help/repository/used-by-section.png)

이 섹션에서 항목을 클릭하면 종속성 그래프의 **종속 항목** 탭으로 이동됩니다.

“사용 대상” 섹션은 리포지토리의 단일 패키지를 나타냅니다. 여러 패키지가 포함된 리포지토리에 대한 관리자 권한이 있는 경우 “사용 대상” 섹션이 나타내는 패키지를 선택할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. “코드 보안 및 분석”에서 “사용 대상 카운터” 섹션의 드롭다운 메뉴를 클릭하고 패키지를 선택합니다.
  ![“사용 대상” 패키지 선택](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 종속성 그래프 문제 해결

종속성 그래프가 비어 있으면 종속성이 포함된 파일에 문제가 있을 수 있습니다. 파일을 확인하여 파일 형식의 형식이 올바르게 지정되었는지 확인합니다.

{% ifversion fpt or ghec %} 파일의 형식이 올바르게 지정되면 크기를 확인합니다. 종속성 그래프는 {% data variables.product.prodname_enterprise %} 사용자가 아닌 한 1.5MB를 넘는 개별 매니페스트 및 잠금 파일을 무시합니다. 기본적으로 리포지토리당 최대 20개의 매니페스트 또는 잠금 파일을 처리하므로 리포지토리의 하위 디렉터리에서 종속성을 더 작은 파일로 분할할 수 있습니다.{% endif %}

매니페스트 또는 잠금 파일이 처리되지 않으면 종속성 그래프에서 종속성이 생략되며 안전하지 않은 종속성을 확인할 수 없습니다.

## 추가 참고 자료

- “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”{% ifversion ghec %}
- “[조직에 대한 인사이트 보기](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)”{% endif %}{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %}에서 데이터를 사용하고 보호하는 방법 이해](/get-started/privacy-on-github)”{% endif %}
