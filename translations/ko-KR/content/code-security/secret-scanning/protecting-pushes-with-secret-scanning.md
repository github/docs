---
title: 비밀 검사를 사용하여 푸시 보호
intro: '{% data variables.product.prodname_secret_scanning %}를 사용하여 지원되는 비밀이 {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} 조직{% ifversion secret-scanning-enterprise-level %},{% endif %} 또는 리포지토리로 푸시되는 것을 방지할 수 있습니다.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184498'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## 비밀에 대한 푸시 보호 정보

지금까지 {% data variables.product.prodname_secret_scanning_GHAS %}은(는) 푸시 후 비밀을 검사하고 사용자에게 노출된 비밀에 대해 경고합니다. {% data reusables.secret-scanning.push-protection-overview %}

참가자가 비밀에 대한 푸시 보호 블록을 바이패스하는 경우 {% data variables.product.prodname_dotcom %}는 다음을 수행합니다.
- 는 아래 표에 설명된 상태로 리포지토리의 "보안" 탭에 경고를 만듭니다.
- 감사 로그에 바이패스 이벤트를 추가합니다.{% ifversion secret-scanning-push-protection-email %}
- 비밀에 대한 링크와 허용된 이유와 함께 리포지토리를 시청하는 조직 소유자, 보안 관리자 및 리포지토리 관리자에게 이메일 경고를 보냅니다. {% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

푸시 보호가 지원되는 보안 비밀 및 서비스 제공업체에 대한 정보는 "[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)"을 참조하세요.

## 푸시 보호로 {% data variables.product.prodname_secret_scanning %} 사용

{% data variables.product.prodname_secret_scanning %}을(를) 푸시 보호로 사용하려면 {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} 조직{% ifversion secret-scanning-enterprise-level %},{% endif %} 또는 리포지토리에 {% data variables.product.prodname_GH_advanced_security %} 및 {% data variables.product.prodname_secret_scanning %}을(를) 모두 사용하도록 설정해야 합니다. 자세한 내용은 {% ifversion secret-scanning-enterprise-level %}"[엔터프라이즈의 보안 및 분석 설정 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)",{% endif %} "[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)", "[리포지토리에 대한 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" 및 "[{% data variables.product.prodname_GH_advanced_security %} 정보"를](/get-started/learning-about-github/about-github-advanced-security) 참조하세요.

조직 소유자, 보안 관리자, 리포지토리 관리자는 UI 및 API를 통해 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[리포지토리](/rest/reference/repos#update-a-repository)”를 참조하고 REST API 설명서에서 “`security_and_analysis` 개체의 속성” 섹션을 확장하세요.

{% ifversion secret-scanning-enterprise-level %}
### 엔터프라이즈에 대한 푸시 보호로 {% data variables.product.prodname_secret_scanning %} 사용
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **코드 보안 및 분석을** 클릭합니다. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### 조직에 대한 푸시 보호로 {% data variables.product.prodname_secret_scanning %} 사용

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### 리포지토리에 대한 푸시 보호로 {% data variables.product.prodname_secret_scanning %} 사용

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## 명령줄에서 푸시 보호로 비밀 검색 사용

{% data reusables.secret-scanning.push-protection-command-line-choice %}

검색된 비밀은 명령줄에 한 번에 최대 5개까지 표시됩니다. 리포지토리에서 특정 비밀이 이미 검색되고 경고가 이미 있는 경우 {% data variables.product.prodname_dotcom %}은(는) 해당 비밀을 차단하지 않습니다. 

{% ifversion push-protection-custom-link-orgs %} 

조직 관리자는 푸시가 차단될 때 표시되는 사용자 지정 링크를 제공할 수 있습니다. 이 사용자 지정 링크에는 권장되는 비밀 자격 증명 모음 사용에 대한 지침 또는 차단된 비밀과 관련하여 궁금한 점이 있을 때 연락할 연락처와 같은 조직별 리소스 및 조언이 포함될 수 있습니다.

![사용자가 리포지토리에 비밀을 푸시하려고 할 때 푸시가 차단됨을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![사용자가 리포지토리에 비밀을 푸시하려고 할 때 푸시가 차단됨을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} 차단된 비밀을 수정하는 방법에 대한 자세한 내용은 "[푸시 보호로 차단된 분기 푸시](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)"를 참조하세요.

비밀이 진짜임을 확인하고 나중에 수정하려는 경우 가능한 한 빨리 비밀을 수정하는 것을 목표로 해야 합니다. 예를 들어 비밀을 해지하고 리포지토리의 커밋 기록에서 비밀을 제거할 수 있습니다. 무단 액세스를 방지하려면 노출된 실제 비밀을 해지해야 합니다. 비밀을 해지하기 전에 먼저 비밀을 교체하는 것을 고려할 수 있습니다. 자세한 내용은 “[리포지토리에서 중요한 데이터 제거](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”를 참조하세요.

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**팁:** {% data variables.product.product_name %} 버전 3.6 이상에서 웹 UI 및 명령줄에서 {% data variables.product.prodname_secret_scanning %}을(를) 푸시 보호로 사용할 수 있습니다.

{% endtip %}

{% endif %}

### 차단된 비밀을 푸시할 수 있도록 허용

{% data variables.product.prodname_dotcom %}이(가) 푸시해도 안전하다고 생각되는 비밀을 차단하는 경우 비밀을 허용하고 이를 허용해야 하는 이유를 지정할 수 있습니다.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. 푸시가 차단되었을 때 {% data variables.product.prodname_dotcom %}에서 반환된 URL을 방문합니다.
  ![비밀 푸시 차단 해제 옵션이 있는 양식을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. **이 비밀을 푸시하도록 허용** 을 클릭합니다.
2. 3시간 이내에 명령줄에서 푸시를 다시 시도합니다. 3시간 이내에 푸시하지 않은 경우 이 프로세스를 반복해야 합니다.

{% ifversion secret-scanning-push-protection-web-ui %}
## 웹 UI에서 푸시 보호로 비밀 검색 사용

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %}은(는) 웹 UI에서 검색된 비밀을 한 번에 하나씩만 표시합니다. 리포지토리에서 특정 비밀이 이미 검색되고 경고가 이미 있는 경우 {% data variables.product.prodname_dotcom %}은(는) 해당 비밀을 차단하지 않습니다.

{% ifversion push-protection-custom-link-orgs %} 

조직 관리자는 푸시가 차단될 때 표시되는 사용자 지정 링크를 제공할 수 있습니다. 이 사용자 지정 링크에는 조직과 관련된 리소스 및 조언이 포함될 수 있습니다. 예를 들어 사용자 지정 링크는 조직의 비밀 자격 증명 모음에 대한 정보, 질문을 에스컬레이션할 팀과 개인 또는 비밀 사용 및 커밋 기록을 다시 쓰기에 대해 승인된 조직 정책이 들어 있는 추가 정보 파일을 가리킬 수 있습니다.
{% endif %}

웹 UI를 사용하여 파일에서 비밀을 제거할 수 있습니다. 비밀을 제거하면 페이지 상단의 배너가 변경되고 이제 변경 사항을 커밋할 수 있음을 알려줍니다.

  ![비밀이 수정된 후 허용되는 웹 UI의 커밋을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### 비밀에 대한 푸시 보호 무시

{% data reusables.secret-scanning.push-protection-remove-secret %} 차단된 비밀을 수정하는 방법에 대한 자세한 내용은 "[푸시 보호로 차단된 분기 푸시](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)"를 참조하세요. 

비밀이 진짜임을 확인하고 나중에 수정하려는 경우 가능한 한 빨리 비밀을 수정하는 것을 목표로 해야 합니다. 자세한 내용은 “[리포지토리에서 중요한 데이터 제거](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”를 참조하세요.

{% data variables.product.prodname_dotcom %}이(가) 푸시해도 안전하다고 생각되는 비밀을 차단하는 경우 비밀을 허용하고 이를 허용해야 하는 이유를 지정할 수 있습니다.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

비밀이 진짜임을 확인하고 나중에 수정하려는 경우 가능한 한 빨리 비밀을 수정하는 것을 목표로 해야 합니다.

1. {% data variables.product.prodname_dotcom %}이(가) 커밋을 차단했을 때 페이지 상단에 표시된 배너에서 **보호 무시** 를 클릭합니다.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![비밀 푸시 차단 해제 옵션이 있는 양식을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. **비밀 허용** 을 클릭합니다.


{% endif %}
