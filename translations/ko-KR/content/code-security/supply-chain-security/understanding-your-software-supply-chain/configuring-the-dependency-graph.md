---
title: 종속성 그래프 구성
intro: 종속성 그래프를 사용하도록 설정하여 사용자가 프로젝트의 종속성을 식별하도록 허용할 수 있습니다.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
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
shortTitle: Configure dependency graph
ms.openlocfilehash: 79185d819691dfbc577f259de2377252bc5bd604
ms.sourcegitcommit: 605b619588c51336f3ffe9d13c68503ae45cbfc6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148013874'
---
## 종속성 그래프 정보

{% data reusables.dependabot.about-the-dependency-graph %}  

자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요.

{% ifversion fpt or ghec %}
## 종속성 그래프 구성 정보 
종속성 그래프를 생성하려면 {% data variables.product.product_name %}는 리포지토리에 대한 종속성 매니페스트 및 잠금 파일에 대한 읽기 전용 액세스 권한이 필요합니다. 종속성 그래프는 모든 퍼블릭 리포지토리에 대해 자동으로 생성되며 프라이빗 리포지토리에 대해 사용하도록 선택할 수 있습니다. 종속성 그래프를 보는 방법에 대한 자세한 내용은 "[리포지토리의 종속성 탐색](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"을 참조하세요.

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## 종속성 그래프 {% data reusables.code-scanning.enterprise-enable-dependency-graph %} {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### 프라이빗 리포지토리에 대한 종속성 그래프 사용 및 사용 안 함

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

{% data reusables.code-scanning.enterprise-enable-dependency-graph %} {% endif %}

종속성 그래프를 처음 활성화하면 지원되는 에코시스템에 대한 매니페스트 및 잠금 파일이 즉시 구문 분석됩니다. 그래프는 일반적으로 몇 분 내에 채워지지만 종속성이 많은 리포지토리의 경우 더 오래 걸릴 수 있습니다. 사용하도록 설정하면 그래프는 리포지토리{% ifversion fpt or ghec %}에 대한 모든 푸시와 그래프{% endif %}의 다른 리포지토리에 대한 모든 푸시로 자동으로 업데이트됩니다.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## 추가 참고 자료

{% ifversion ghec %}- “[조직에 대한 인사이트 보기](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)”{% endif %}
- "[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- “[취약한 종속성 검색 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)”
