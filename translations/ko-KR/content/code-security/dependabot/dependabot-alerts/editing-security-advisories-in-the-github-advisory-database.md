---
title: GitHub Advisory Database에서 보안 권고 편집
intro: '{% data variables.product.prodname_advisory_database %}에 게시된 권고 사항에 대해 개선을 제출할 수 있습니다.'
redirect_from:
- /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 053ef8d087cc3a34a9a975399f5f95115b373cc5
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111547"
---
## {% data variables.product.prodname_advisory_database %}의 권고 편집 정보
[github.com/advisories](https://github.com/advisories)의 {% data variables.product.prodname_advisory_database %}에서 보안 권고는 전역 권고로 간주됩니다. 누구나 {% data variables.product.prodname_advisory_database %}의 전역 보안 권고에 대한 개선 사항을 제안할 수 있습니다. 영향을 받는 에코시스템, 심각도 수준 또는 영향을 받는 사람에 대한 설명을 포함하여 세부 정보를 편집하거나 추가할 수 있습니다. {% data variables.product.prodname_security %} 큐레이션 팀은 제출된 개선 사항을 검토하고 수락되면 {% data variables.product.prodname_advisory_database %}에 게시합니다.
{% ifversion fpt or ghec %} 리포지토리 소유자와 관리자만 리포지토리 수준 보안 권고를 편집할 수 있습니다. 자세한 내용은 “[리포지토리 보안 공지 편집](/code-security/security-advisories/editing-a-security-advisory)”을 참조하세요.{% endif %}

## GitHub Advisory Database에서 권고 편집

1. https://github.com/advisories로 이동합니다.
1. 기여하려는 보안 권고를 선택합니다.
1. 페이지의 오른쪽에서 **이 취약성에 대한 개선 사항 제안** 링크를 클릭합니다.
   
   ![개선 제안 링크의 스크린샷](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. "보안 공지 개선" 양식에서 원하는 개선 사항을 만듭니다. 세부 정보를 편집하거나 추가할 수 있습니다. {% ifversion fpt or ghec %} 영향을 받는 버전을 포함하여 양식에 대한 정보를 올바르게 지정하는 방법에 대한 자세한 내용은 "[리포지토리 보안 권고 작성 모범 사례](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories)"를 참조하세요. {% endif %} {% ifversion security-advisories-reason-for-change %}
1. **변경 이유** 에서 이러한 개선을 원하는 이유를 설명합니다. 지원 자료에 대한 링크를 포함하는 경우 검토자에게 도움이 됩니다.
   
   ![변경 이유 필드의 스크린샷](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. 권고 편집을 마치면 **개선 사항 제출** 을 클릭합니다.
1. 개선 사항을 제출하면 {% data variables.product.prodname_security %} 큐레이션 팀이 [github/advisory-database](https://github.com/github/advisory-database)에서 검토할 수 있도록 변경 내용을 포함하는 끌어오기 요청이 만들어집니다. 권고가 {% data variables.product.prodname_dotcom %} 리포지토리에서 시작된 경우 선택적 설명을 위해 원래 게시자에 태그를 지정합니다. 끌어오기 요청을 보고 업데이트되거나 닫혔을 때 알림을 받을 수 있습니다.

[github/advisory-database](https://github.com/github/advisory-database) 리포지토리의 자문 파일에서 직접 끌어오기 요청을 열 수도 있습니다. 자세한 내용은 [기여 지침](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md)을 참조하세요. 

{% ifversion security-advisories-ghes-ghae %}
## {% data variables.location.product_location %}에서 권고 편집

{% data variables.location.product_location %}에 대해 {% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정한 경우 인스턴스 URL에 를 추가하여 `/advisories` 권고를 볼 수 있습니다. 

1. `https://HOSTNAME/advisories`로 이동합니다.
2. 기여하려는 보안 권고를 선택합니다.
3. 페이지의 오른쪽에서 **{% data variables.product.prodname_dotcom_the_website %}에서 이 취약성에 대한 개선 사항 제안** 을 클릭합니다. 링크를 사용하여 비용 없이 계정을 만들 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}에 동일한 보안 권고가 있는 새 탭이 열립니다.
![개선 사항 제안 링크](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. 위의 “[GitHub Advisory Database에서 권고 편집](#editing-advisories-in-the-github-advisory-database)”에서 4~6단계를 수행하여 권고를 편집합니다.
{% endif %}
