---
title: GitHub security features(GitHub 보안 기능)
intro: '{% data variables.product.prodname_dotcom %} 보안 기능에 대한 개요입니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: ccd17816c0e5f62666520a677862c2a9f108c742
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158735'
---
## {% data variables.product.prodname_dotcom %}의 보안 기능 정보

{% data variables.product.prodname_dotcom %}에는 리포지토리 및 조직 전체에서 코드와 비밀을 안전하게 유지하는 데 도움이 되는 보안 기능이 있습니다. {% data reusables.advanced-security.security-feature-availability %}

{% data variables.product.prodname_advisory_database %}에는 보고, 검색하고, 필터링할 수 있는 보안 취약성의 큐레이팅된 목록이 포함되어 있습니다. {% data reusables.security-advisory.link-browsing-advisory-db %}

## 모든 리포지토리에 사용 가능
### 보안 정책

사용자가 리포지토리에 있는 보안 취약성을 기밀로 쉽게 보고할 수 있도록 합니다. 자세한 내용은 “[리포지토리에 보안 정책 추가](/code-security/getting-started/adding-a-security-policy-to-your-repository)”를 참조하세요.

{% ifversion fpt or ghec %}
### 보안 공지

리포지토리 코드에서 보안 취약성을 비공개로 논의하고 해결합니다. 그런 다음 보안 공지를 게시하여 커뮤니티에 취약성을 알리고 커뮤니티 멤버가 업그레이드하도록 장려할 수 있습니다. 자세한 내용은 "[리포지토리 보안 권고 정보"를 참조하세요](/github/managing-security-vulnerabilities/about-github-security-advisories).

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} 및 보안 업데이트

보안 취약성이 포함된 것으로 알려진 종속성에 대한 경고를 보고 이러한 종속성을 업데이트하기 위해 끌어오기 요청을 자동으로 생성할지 여부를 선택합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)” 및 “[{% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) 정보”를 참조하세요.
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

보안 취약성을 포함하는 것으로 알려진 종속성에 대한 경고를 보고 이러한 경고를 관리합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes %}
### {% data variables.product.prodname_dependabot %} 버전 업데이트

{% data variables.product.prodname_dependabot %}를 사용하여 자동으로 끌어오기 요청을 발생시켜 종속성을 최신 상태로 유지하세요. 이렇게 하면 이전 버전의 종속성에 대한 노출을 줄이는 데 도움이 됩니다. 최신 버전을 사용하면 보안 취약성이 발견될 경우 패치를 더 쉽게 적용할 수 있으며 {% data variables.product.prodname_dependabot_security_updates %}에서 취약한 종속성을 업그레이드하기 위한 끌어오기 요청을 성공적으로 발생시킬 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_version_updates %} 정보](/github/administering-a-repository/about-dependabot-version-updates)”를 참조하세요.
{% endif %}

### 종속성 그래프
종속성 그래프를 사용하면 리포지토리가 의존하는 에코시스템 및 패키지와 리포지토리에 종속된 리포지토리 및 패키지를 탐색할 수 있습니다.

리포지토리의 **인사이트** 탭에서 종속성 그래프를 찾을 수 있습니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.

{% ifversion security-overview-displayed-alerts %}
### 보안 개요

보안 개요를 사용하면 보안 구성 및 경고를 검토하여 위험이 가장 큰 리포지토리 및 조직을 쉽게 식별할 수 있습니다. 자세한 내용은 "[보안 개요 정보"를 참조하세요.](/code-security/security-overview/about-the-security-overview)

{% else %}
### 리포지토리에 대한 보안 개요
보안 개요는 리포지토리에 대해 사용하는 보안 기능을 보여주고 아직 사용하지 않는 사용 가능한 보안 기능을 구성하는 옵션을 제공합니다.
{% endif %}

## {% data variables.product.prodname_GH_advanced_security %}에서 사용 가능

{% ifversion fpt %} 다음 {% data variables.product.prodname_GH_advanced_security %} 기능은 {% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리에서 무료로 사용할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}에 대한 라이선스가 있는 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 조직은 해당 리포지토리의 전체 기능 집합을 사용할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}에서 사용할 수 있는 기능 목록은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security)를 참조하세요.

{% elsif ghec %} 많은 {% data variables.product.prodname_GH_advanced_security %} 기능을 {% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리에서 무료로 사용할 수 있습니다. {% data variables.product.prodname_GH_advanced_security %} 라이선스가 있는 엔터프라이즈 내의 조직은 리포지토리에서 다음 기능을 모두 사용할 수 있습니다. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} {% data variables.product.prodname_GH_advanced_security %} 기능은 {% data variables.product.prodname_GH_advanced_security %} 라이선스가 있는 엔터프라이즈에서 사용할 수 있습니다. 기능은 조직이 소유한 리포지토리로 제한됩니다. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} {% data variables.product.prodname_GH_advanced_security %} 기능은 조직이 소유한 리포지토리에 사용할 수 있습니다. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

새 코드 또는 수정된 코드에서 보안 취약성 및 코딩 오류를 자동으로 검색합니다. 잠재적인 문제가 세부 정보와 함께 강조 표시되어 기본 분기에 병합되기 전에 코드를 수정할 수 있습니다. 자세한 내용은 “[코드 검사 정보](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”를 참조하세요.

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

모든 퍼블릭 리포지토리에서 유출된 비밀을 자동으로 검색합니다. {% data variables.product.company_short %}는 관련 서비스 공급자에게 비밀이 손상되었을 수 있음을 알립니다. 지원되는 비밀 및 서비스 공급자에 대한 자세한 내용은 “[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns)”을 참조하세요.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있어야만 사용할 수 있습니다.
{% endif %}

리포지토리에 체크 인된 토큰 또는 자격 증명을 자동으로 검색합니다. {% data variables.product.company_short %}가 코드에서 찾은 모든 비밀에 대한 경고를 볼 수 있으므로 손상된 것으로 처리할 토큰 또는 자격 증명을 알 수 있습니다. 자세한 내용은 “[비밀 검사 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)”를 참조하세요.
{% endif %}

### 종속성 검토

종속성에 대한 변경 내용의 전체 영향을 표시하고 끌어오기 요청을 병합하기 전에 취약한 버전의 세부 정보를 확인합니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/about-dependency-review)”를 참조하세요.

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### 조직의 보안 개요{% ifversion ghes > 3.4 또는 ghae > 3.4 %}, 기업,{% endif %} 및 팀

조직에 대한 보안 구성 및 경고를 검토하고 가장 큰 위험에 처한 리포지토리를 식별합니다. 자세한 내용은 "[보안 개요 정보"를 참조하세요.](/code-security/security-overview/about-the-security-overview)
{% endif %}

## 추가 참고 자료
- “[{% data variables.product.prodname_dotcom %} 제품](/github/getting-started-with-github/githubs-products)”
- “[{% data variables.product.prodname_dotcom %} 언어 지원](/github/getting-started-with-github/github-language-support)”
