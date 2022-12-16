---
title: GitHub Connect 정보
intro: '{% data variables.product.prodname_github_connect %}는 {% data variables.product.prodname_dotcom_the_website %}의 기능을 사용하는 추가 기능 및 워크플로에 대한 액세스를 제공하여 {% data variables.product.product_name %}을 향상시킵니다.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160818'
---
## {% data variables.product.prodname_github_connect %} 정보

{% data variables.product.prodname_github_connect %}는 {% data variables.location.product_location %}이(가) 제한된 방법으로 {% data variables.product.prodname_dotcom_the_website %}의 기능을 활용할 수 있도록 하여 {% data variables.product.product_name %}을(를) 향상시킵니다. {% data variables.product.prodname_github_connect %}를 사용하도록 설정한 후 {% data variables.product.prodname_advisory_database %}에서 추적되는 보안 취약성에 대해 {% data variables.product.prodname_dependabot_alerts %}와 같이 {% data variables.product.prodname_dotcom_the_website %}를 사용하는 추가 기능 및 워크플로를 사용하도록 설정할 수 있습니다.

{% data variables.product.prodname_github_connect %}은(는) 공용 인터넷에 대한 {% data variables.location.product_location %}을(를) 열지 않습니다. 엔터프라이즈의 프라이빗 데이터가 {% data variables.product.prodname_dotcom_the_website %} 사용자에게 노출되지 않습니다. 대신 {% data variables.product.prodname_github_connect %}는 사용하도록 선택한 개별 기능에 필요한 제한된 데이터만 전송합니다. 라이선스 동기화를 사용하도록 설정하지 않으면 {% data variables.product.prodname_github_connect %}가 개인 데이터를 전송하지 않습니다. {% data variables.product.prodname_github_connect %}에서 전송되는 데이터에 대한 자세한 내용은 “[{% data variables.product.prodname_github_connect %}에 대한 데이터 전송](#data-transmission-for-github-connect)”을 참조하세요.

{% data variables.product.prodname_github_connect %}를 사용하도록 설정하면 {% data variables.product.prodname_dotcom_the_website %} 사용자가 {% data variables.product.product_name %}를 변경할 수 없습니다.

{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하려면 {% data variables.location.product_location %}과 {% data variables.product.prodname_dotcom_the_website %}을(를) 사용하는 {% data variables.product.prodname_ghe_cloud variables.product.prodname_dotcom_the_website %}의 조직 또는 엔터프라이즈 계정 간에 연결을 구성합니다. {% data reusables.github-connect.connection-port-protocol %} 자세한 내용은 "[{% data variables.product.prodname_github_connect %} 관리"를 참조하세요](/admin/configuration/configuring-github-connect/managing-github-connect).

{% data variables.product.prodname_github_connect %}를 사용하도록 설정한 후에는 {% ifversion ghes %}자동 사용자 라이선스 동기화 및 {% endif %}{% data variables.product.prodname_dependabot_alerts %}와 같은 기능을 사용하도록 설정할 수 있습니다. 사용 가능한 모든 기능에 대한 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 기능](#github-connect-features)”을 참조하세요.

## {% data variables.product.prodname_github_connect %} 기능

{% data variables.location.product_location %}와 {% data variables.product.prodname_ghe_cloud %} 간의 연결을 구성한 후 엔터프라이즈에 대해 {% data variables.product.prodname_github_connect %}의 개별 기능을 사용하도록 설정할 수 있습니다.

기능 | 설명 | 자세한 정보 | ------- | ----------- | ---------------- | {% ifversion ghes %} 자동 사용자 라이선스 동기화 | {% data variables.location.product_location %}에서 {% data variables.product.prodname_ghe_cloud %}로 사용자 라이선스를 자동으로 동기화하여 {% data variables.product.prodname_enterprise %} 배포에서 라이선스 사용량을 관리합니다. | “[엔터프라이즈에 자동 사용자 라이선스 동기화 사용](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)”{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | 사용자가 코드 종속성에서 취약성을 찾아 수정할 수 있도록 허용합니다. | “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”{% endif %} {% data variables.product.prodname_dotcom_the_website %} 작업 | 사용자가 워크플로 파일에서 {% data variables.product.prodname_dotcom_the_website %}의 작업을 사용할 수 있도록 허용합니다. | “[{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)”{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | GitHub Enterprise Server에서 고유한 집계 데이터를 분석하고, GitHub 제품을 개선하도록 지원합니다. | "[엔터프라이즈에 {% 데이터 variables.product.prodname_server_statistics %}을(를) 사용하도록 설정](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)"{% endif %} 통합 검색 | 사용자가 {% data variables.location.product_location %}에서 검색할 때 검색 결과에 {% data variables.product.prodname_dotcom_the_website %}의 리포지토리를 포함하도록 허용합니다. | "[엔터프라이즈에 {% 데이터 variables.enterprise.prodname_unified_search %}을(를) 사용하도록 설정](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" 통합 기여 | 사용자가 {% data variables.location.product_location %}에 대한 작업에 대한 익명화된 기여 횟수를 {% data variables.product.prodname_dotcom_the_website %}의 기여 그래프에 포함할 수 있도록 허용합니다. | "[엔터프라이즈에 {% 데이터 variables.enterprise.prodname_unified_contributions %} 사용](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)"

## {% data variables.product.prodname_github_connect %}에 대한 데이터 전송 

{% data variables.product.prodname_github_connect %}를 사용하는 경우 {% data variables.product.prodname_ghe_cloud %}의 레코드에 연결에 대한 정보가 저장됩니다. {% data variables.product.prodname_github_connect %}의 개별 기능을 사용하도록 설정하면 추가 데이터가 전송됩니다.

{% note %}

**참고:** {% data variables.product.prodname_github_connect %}는 {% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %}으로 리포지토리, 이슈 또는 끌어오기 요청을 전송하지 않습니다.

{% endnote %}

### {% data variables.product.prodname_github_connect %}를 사용할 때 전송되는 데이터

{% data variables.product.prodname_github_connect %} 또는 특정 {% data variables.product.prodname_github_connect %} 기능을 사용하도록 설정하면 {% data variables.product.prodname_ghe_cloud %}에 대한 레코드는 연결에 대한 다음 정보를 저장합니다.
{% ifversion ghes %}
- {% data variables.product.prodname_ghe_server %} 라이선스의 퍼블릭 키 부분
- {% data variables.product.prodname_ghe_server %} 라이선스의 해시
- {% data variables.product.prodname_ghe_server %} 라이선스의 고객 이름
- {% data variables.location.product_location_enterprise %}{% endif %} 버전
- {% data variables.location.product_location %}의 호스트 이름
- {% data variables.product.prodname_ghe_cloud %}에 연결된 {% data variables.location.product_location %}의 조직 또는 엔터프라이즈 계정
- {% data variables.location.product_location %}가 {% data variables.product.prodname_ghe_cloud %}에 요청하는 데 사용하는 인증 토큰
- {% data variables.location.product_location %}{% ifversion ghes %}에서 TLS(전송 계층 보안)를 사용하도록 설정하고 구성한 경우
- {% data variables.product.prodname_github_connect %}에서 사용하도록 설정된 {% data variables.location.product_location %} 기능과 사용 날짜 및 시간{% endif %}
- 엔터프라이즈의 휴면 임계값
- 엔터프라이즈의 휴면 사용자 수
- 라이선스 사용 사용자 수(일시 중단된 사용자 미포함)

{% data variables.product.prodname_github_connect %}은 {% data variables.location.product_location %}과 {% data variables.product.prodname_ghe_cloud %} 사이의 위의 연결 데이터를 {% data variables.product.prodname_github_connect %}이(가) 활성화된 날짜와 근사 시간부터 매주 동기화합니다.

### {% data variables.product.prodname_github_connect %}의 개별 기능으로 전송되는 데이터

{% data variables.product.prodname_github_connect %}의 개별 기능을 사용하도록 설정하면 추가 데이터가 전송됩니다.

기능 | 데이터 | 데이터 흐름은 어떤 방식으로 진행되나요? | 데이터가 사용되는 위치는 어디인가요? | ------- | ---- | --------- | ------ | {% ifversion ghes %} 자동 사용자 라이선스 동기화 | 각 {% data variables.product.product_name %} 사용자의 사용자 ID 및 메일 주소 | {% data variables.product.product_name %}에서 {% data variables.product.prodname_ghe_cloud %}로 | {% data variables.product.prodname_ghe_cloud %} | {% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | 취약성 경고 | {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.product_name %}으로 | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | 각 종속성의 리포지토리에 대한 종속성 및 메타데이터<br><br>종속성이 {% data variables.product.prodname_dotcom_the_website %}의 개인 리포지토리에 저장된 경우 {% data variables.product.prodname_dependabot %}이 구성되고 해당 리포지토리에 액세스할 권한이 있는 경우에만 데이터가 전송됩니다. | {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.product_name %}로 | {% data variables.product.product_name %} {% endif %} {% data variables.product.prodname_dotcom_the_website %} 작업 | 작업 이름, 작업({% data variables.product.prodname_marketplace %}의 YAML 파일) | {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.product_name %}로<br><br>{% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %}로 | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | {% data variables.product.prodname_ghe_server %} 사용 현황 메트릭 집계 메트릭의 전체 목록은 “[{% data variables.product.prodname_server_statistics %} 정보](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)”를 참조하세요. | {% data variables.product.product_name %}에서 {% data variables.product.prodname_ghe_cloud %}로 | {% data variables.product.prodname_ghe_cloud %}{% endif %} 통합 검색 | 검색 조건, 검색 결과 | {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.product_name %}로<br><br>{% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %}으로 | {% data variables.product.product_name %} | 통합 기여 | 기여 횟수 | {% data variables.product.product_name %}에서 {% data variables.product.prodname_dotcom_the_website %}으로 | {% data variables.product.prodname_dotcom_the_website %} |

## 추가 참고 자료

- GraphQL API 설명서의 “[엔터프라이즈 계정](/graphql/guides/managing-enterprise-accounts)”
