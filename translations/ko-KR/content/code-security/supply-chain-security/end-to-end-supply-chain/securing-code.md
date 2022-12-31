---
title: 공급망 코드 보안의 모범 사례
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: 공급망의 중심(작성하는 코드 및 사용하는 코드)을 보호하는 방법에 대한 지침입니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184006'
---
## 이 가이드의 내용

이 가이드에서는 코드의 보안을 개선하기 위해 수행할 수 있는 가장 큰 변경 사항을 설명합니다. 각 섹션에서는 보안을 개선하기 위해 프로세스를 변경할 수 있는 사항을 간략하게 설명합니다. 가장 큰 변경 내용이 먼저 나열됩니다.

## 어떤 위험이 있나요?

개발 프로세스의 주요 위험은 다음과 같습니다.

- 공격자가 악용할 수 있는 보안 취약성이 있는 종속성 사용
- 공격자가 리소스에 액세스하는 데 사용할 수 있는 인증 자격 증명 또는 토큰
- 공격자가 악용할 수 있는 사용자 고유의 코드에 취약성을 도입

위험은 리소스 및 프로젝트를 공격에 노출시키고 해당 위험은 사용자가 만든 패키지를 사용하는 모든 사람에게 직접 공유됩니다. 다음 섹션에서는 위험으로부터 자신과 사용자를 보호하는 방법을 설명합니다.

## 종속성에 대한 취약성 관리 프로그램 만들기

종속성에 대한 취약성 관리 프로그램을 만들어 종속된 코드를 보호할 수 있습니다. 높은 수준에서 다음을 보장하는 프로세스를 포함해야 합니다.

1. 종속성의 인벤토리를 만듭니다.

1. 종속성에 보안 취약성이 있는 경우를 알 수 있습니다.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. 끌어오기 요청에 종속성 검토를 적용합니다. {% endif %}

1. 해당 취약성이 코드에 미치는 영향을 평가하고 수행할 작업을 결정합니다.

### 자동 인벤토리 생성

첫 번째 단계로 종속성의 전체 인벤토리를 만들려고 합니다. 리포지토리의 종속성 그래프는 지원되는 에코시스템에 대한 종속성을 보여 줍니다. 종속성을 체크 인하거나 다른 에코시스템을 사용하는 경우 이를 타사 도구의 데이터로 보완하거나 종속성을 수동으로 나열해야 합니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요.

### 종속성에서 취약성 자동 검색

{% data variables.product.prodname_dependabot %}은 종속성을 모니터링하고 알려진 취약성이 있는 경우 이를 알림으로써 도움이 될 수 있습니다. {% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot %}을(를) 사용하도록 설정하여 종속성을 보안 버전으로 업데이트하는 끌어오기 요청을 자동으로 발생하도록 설정할 수도 있습니다. {% endif %} 자세한 내용은 "[{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)정보"{% ifversion fpt or ghec or ghes %} 및 "[Dependabot 보안 업데이트 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}를 참조하세요.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### 끌어오기 요청의 취약성 자동 검색

{% data variables.product.prodname_dependency_review_action %}은 끌어오기 요청에 대한 종속성 검토를 적용하므로 끌어오기 요청이 리포지토리에 취약한 버전의 종속성을 도입하는지 쉽게 확인할 수 있습니다. 취약성이 감지되면 {% data variables.product.prodname_dependency_review_action %}에서 끌어오기 요청의 병합을 차단할 수 있습니다. 자세한 내용은 "[종속성 검토 적용"을](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement) 참조하세요. {% endif %} 
    

### 취약한 종속성으로 인한 위험에 대한 노출 평가

취약한 종속성(예: 라이브러리 또는 프레임워크)을 사용하고 있는 경우 프로젝트의 노출 수준을 평가하고 수행할 작업을 결정해야 합니다. 취약성은 일반적으로 심각도 점수로 보고되어 그 영향이 얼마나 심각한지 보여 줍니다. 심각도 점수는 유용한 가이드이지만 취약성이 코드에 미치는 전체 영향을 알려주지는 못합니다.

코드에 대한 취약성의 영향을 평가하려면 라이브러리를 사용하는 방법도 고려하고 실제로 시스템에 미치는 위험을 결정해야 합니다. 이 취약성은 사용하지 않는 기능의 일부일 수 있으며 영향을 받는 라이브러리를 업데이트하고 일반적인 릴리스 주기를 계속할 수 있습니다. 또는 코드가 위험에 심하게 노출되어 영향을 받는 라이브러리를 업데이트하고 업데이트된 빌드를 즉시 제공해야 할 수도 있습니다. 이 결정은 시스템에서 라이브러리를 사용하는 방법에 따라 달라지며, 사용자만 내릴 수 있는 결정입니다.

## 통신 토큰 보호

코드는 종종 네트워크를 통해 다른 시스템과 통신해야 하며 인증하려면 비밀(예: 암호 또는 API 키)이 필요합니다. 시스템에서 실행하려면 해당 비밀에 액세스해야 하지만 소스 코드에 포함하지 않는 것이 가장 좋습니다. 이는 많은 사람들이 액세스할 수 있는 리포지토리에 특히 중요하고{% ifversion not ghae %} 공용 리포지토리에도 중요합니다{% endif %}.

### 리포지토리에 커밋된 비밀 자동 검색

{% note %}

**참고:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} 파트너는 비밀이 퍼블릭 리포지토리에 커밋되거나 저장되는 시기를 자동으로 감지할 수 있도록 많은 공급자와 협력하며, 계정을 안전하게 유지하기 위한 적절한 조치를 취할 수 있도록 공급자에게 알립니다. 자세한 내용은 “[파트너 패턴을 위한 {% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”를 참조하세요.
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} 조직에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 조직 소유의 모든 리포지토리에서 {% data variables.product.prodname_secret_scanning_GHAS %}를 사용하도록 설정할 수 있습니다. 사용자 지정 패턴을 정의하여 리포지토리, 조직 또는 엔터프라이즈 수준에서 추가 비밀을 검색할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning_GHAS %} 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)”를 참조하세요.
{% else %} {% data variables.product.prodname_secret_scanning %}을 구성하여 많은 서비스 공급자가 발급한 비밀을 확인하고 비밀이 검색된 경우 이를 알릴 수 있습니다. 사용자 지정 패턴을 정의하여 리포지토리, 조직 또는 엔터프라이즈 수준에서 추가 비밀을 검색할 수도 있습니다. 자세한 내용은 “[비밀 검사 정보](/code-security/secret-scanning/about-secret-scanning)” 및 “[비밀 검사 패턴](/code-security/secret-scanning/secret-scanning-patterns)”을 참조하세요.
{% endif %}

### {% data variables.product.product_name %}에서 사용하는 비밀의 보안 스토리지

{% ifversion fpt or ghec %} 코드 외에도 다른 위치에서 비밀을 사용해야 할 수 있습니다. 예를 들어 {% data variables.product.prodname_actions %} 워크플로, {% data variables.product.prodname_dependabot %} 또는 {% data variables.product.prodname_github_codespaces %} 개발 환경에서 다른 시스템과 통신할 수 있도록 허용합니다. 비밀을 안전하게 저장하고 사용하는 방법에 대한 자세한 내용은 “[작업의 암호화된 비밀](/actions/security-guides/encrypted-secrets)”, “[Dependabot의 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”, “[코드스페이스에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”를 참조하세요.
{% endif %}

{% ifversion ghes or ghae %} 코드 외에도 다른 위치에서 비밀을 사용해야 할 수 있습니다. 예를 들어 {% data variables.product.prodname_actions %} 워크플로{% ifversion ghes %} 또는 {% data variables.product.prodname_dependabot %}{% endif %}이 다른 시스템과 통신할 수 있도록 허용합니다. 비밀을 안전하게 저장하고 사용하는 방법에 대한 자세한 내용은 “[작업의 암호화된 비밀](/actions/security-guides/encrypted-secrets){% ifversion ghes %}”, “[Dependabot의 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot){% else %}”를 참조하세요.{% endif %} {% endif %}

## 리포지토리에서 취약한 코딩 패턴 제외

{% note %}

**참고:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 끌어오기 요청 검토 프로세스 만들기

모든 끌어오기 요청이 병합되기 전에 검토되고 테스트되도록 하여 코드의 품질과 보안을 향상시킬 수 있습니다. {% data variables.product.prodname_dotcom %}에는 검토 및 병합 프로세스를 제어하는 데 사용할 수 있는 많은 기능이 있습니다. 시작하려면 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”를 참조하세요.

### 코드에서 취약한 패턴 검사

안전하지 않은 코드 패턴은 검토자가 도움 없이 찾기 어려운 경우가 많습니다. 코드에서 비밀을 검사하는 것 외에도 보안 취약성과 관련된 패턴을 확인할 수 있습니다. 예를 들어 메모리에 안전하지 않거나 삽입 취약성으로 이어질 수 있는 사용자 입력을 이스케이프하지 못하는 기능입니다. {% data variables.product.prodname_dotcom %}는 코드를 스캔하는 방법과 시기에 접근하는 여러 가지 방법을 제공합니다. 시작하려면 “[코드 검사 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”를 참조하세요.

## 다음 단계

- “[엔드투엔드 공급망 보안](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”

- “[계정 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)”

- “[빌드 시스템 보안의 모범 사례](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)”
