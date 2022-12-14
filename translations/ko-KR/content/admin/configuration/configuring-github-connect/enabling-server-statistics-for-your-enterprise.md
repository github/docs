---
title: 엔터프라이즈에 서버 통계 사용
intro: '{% data variables.product.prodname_server_statistics %}를 사용하도록 설정하여 {% data variables.product.prodname_ghe_server %}에서 자체 집계 데이터를 분석하고 {% data variables.product.company_short %} 제품을 개선하는 데 도움을 줄 수 있습니다.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191872'
---
## {% data variables.product.prodname_server_statistics %} 정보

{% data variables.product.prodname_server_statistics %}은 {% data variables.location.product_location %}에서 집계 사용 현황 데이터를 수집합니다. 이 데이터를 사용하여 조직의 요구 사항을 더 잘 예측하고, 팀의 작동 방식을 이해하고, {% data variables.product.prodname_ghe_server %}에서 얻을 수 있는 값을 표시할 수 있습니다. 

{% data variables.product.prodname_server_statistics %}은 리포지토리, 문제, 끌어오기 요청 및 기타 기능에 대한 특정 집계 메트릭만 수집합니다. 코드, 문제, 주석 또는 끌어오기 요청 콘텐츠와 같은 {% 데이터 variables.product.prodname_dotcom %} 콘텐츠는 수집되지 않습니다. 자세한 내용은 "[{% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)"를 참조하세요.

{% data variables.product.prodname_server_statistics %}를 사용하도록 설정하면 {% data variables.product.company_short %}를 개선할 수 있습니다. 사용자가 제공할 집계 데이터를 통해 고객이 {% data variables.product.prodname_dotcom %}를 사용하는 방식을 이해하고 더 나은 정보를 제공하는 제품 결정을 내릴 수 있으며 궁극적으로 도움이 됩니다.

## {% data variables.product.prodname_server_statistics %} 사용

{% data variables.product.prodname_server_statistics %}를 사용하도록 설정하려면 먼저 {% data variables.product.prodname_github_connect %}를 통해 {% data variables.product.prodname_ghe_server %} 인스턴스를 {% data variables.product.prodname_dotcom_the_website %}에 연결해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %}에 {% data variables.product.prodname_ghe_server %} 연결](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)”을 참조하세요.

언제든지 {% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_server_statistics %}를 사용하지 않도록 설정할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. "GitHub.com에서 서버 통계 공유"에서 드롭다운 메뉴를 선택하고 **사용** 또는 **사용 안 함** 을 클릭합니다.
  ![사용 안 함 또는 사용 옵션이 있는 {% data variables.product.prodname_server_statistics %} 드롭다운 메뉴의 스크린샷](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
