---
title: 글로벌 보안 권고 정보
intro: '글로벌 보안 데이터베이스는 {% data variables.product.prodname_advisory_database %}에 있습니다. 여기에는 오픈 소스 세계에 영향을 주는 CVE 및 {% 데이터 variables.product.company_short %}에서 시작된 보안 권고가 포함되어 있습니다. 전역 권고 개선에 기여할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114091'
---
## 글로벌 보안 권고 정보

{% ifversion fpt or ghec %} 권고에는 전역 보안 권고 및 리포지토리 보안 권고의 두 가지 유형이 있습니다. 리포지토리 보안 권고에 대한 자세한 내용은 "[리포지토리 보안 권고 정보](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)"를 참조하세요. {% endif %}

전역 보안 권고는 {% data variables.product.company_short %}에서 검토한 권고 및 검토되지 않은 권고의 두 가지 범주로 그룹화됩니다.
- {% data variables.product.company_short %}에서 검토한 권고는 지원하는 에코시스템의 패키지에 매핑된 보안 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}입니다.
- 검토되지 않은 권고는 국가별 취약성 데이터베이스 피드에서 직접 {% data variables.product.prodname_advisory_database %}에 자동으로 게시하는 보안 취약성입니다. 

{% data variables.product.prodname_advisory_database %}에 대한 자세한 내용은 "[{% data variables.product.prodname_advisory_database %} 정보"를 참조하세요](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database).

{% data reusables.security-advisory.global-advisories %}

모든 리포지토리 권고는 {% data variables.product.prodname_security %} 큐레이션 팀에서 검토하여 전역 권고로 고려합니다. 종속성 그래프에서 지원하는 에코시스템에 대한 보안 공지를 [github.com/advisories](https://github.com/advisories) {% data variables.product.prodname_advisory_database %}에 게시합니다.

{% data variables.product.prodname_advisory_database %}의 권고에 액세스할 수 있습니다. 자세한 내용은 "[GitHub Advisory Database에서 보안 권고 검색"을 참조하세요](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database).

{% data variables.product.prodname_advisory_database %}의 권고에 대한 개선 사항을 제안할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 공지 편집](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”을 참조하세요.
