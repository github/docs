---
title: '3단계: 파일럿 프로그램'
intro: '초기 롤아웃을 파일럿할 몇 개의 영향력이 큰 프로젝트와 팀으로 시작하는 것이 좋습니다. 이렇게 하면 회사 내의 초기 그룹이 GHAS에 익숙해지고, GHAS를 사용하고 구성하는 방법을 학습하고, 회사의 나머지 부분에 배포하기 전에 GHAS에 대한 견고한 기반을 구축할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109110'
---
{% note %}

이 문서는 대규모 {% data variables.product.prodname_GH_advanced_security %}를 채택하는 시리즈의 일부입니다. 이 시리즈의 이전 문서는 “[2단계: 대규모로 사용하도록 준비](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)”를 참조하세요.

{% endnote %}

## 파일럿 프로그램 정보

GHAS의 파일럿 롤아웃에 사용할 몇 가지 영향력이 높은 프로젝트 또는 팀을 식별하는 것이 좋습니다. 이렇게 하면 회사 내의 초기 그룹이 GHAS에 익숙해지고, 회사의 나머지 부분에 배포하기 전에 GHAS에 대한 견고한 기반을 구축할 수 있습니다.

이러한 단계는 엔터프라이즈에서 GHAS를 사용하도록 설정하고, 해당 기능 사용을 시작하고, 결과를 검토하는 데 도움이 됩니다. {% data variables.product.prodname_professional_services %}를 사용하는 경우 필요에 따라 온보딩 세션, GHAS 워크샵 및 문제 해결을 통해 이 프로세스 전반에서 추가 지원을 제공할 수 있습니다.

파일럿 프로젝트를 시작하기 전에 파일럿이 완료되면 초기 회의, 중간 검토 및 마무리 세션과 같은 팀 회의를 예약하는 것이 좋습니다. 이러한 회의를 통해 필요에 따라 조정하고 팀이 파일럿을 성공적으로 완료할 수 있도록 준비하고 지원하도록 할 수 있습니다.

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에 대해 GHAS를 사용하도록 아직 설정하지 않은 경우 "[엔터프라이즈에 GitHub 고급 보안 사용](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”.

{% endif %}

각 리포지토리 또는 파일럿에 참여하는 모든 조직의 모든 리포지토리에 대해 GHAS 기능을 사용하도록 설정하여 각 파일럿 프로젝트에 GHAS를 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리의 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

## {% data variables.product.prodname_code_scanning %} 파일럿

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에서 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정하려면 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”을 참조하세요.

{% elsif ghae %}

{% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정하려면 {% data variables.product.prodname_ghe_managed %}에서 워크플로를 실행할 수 있도록 해야 합니다. “[{% data variables.product.prodname_ghe_managed %}에 대한 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”을 참조하세요.

{% endif %}

{% data variables.product.prodname_actions %} 워크플로를 만들고 [CodeQL 작업](https://github.com/github/codeql-action/)을 실행하여 리포지토리에서 코드 검사를 실행할 수 있습니다. {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %}는 기본적으로 [GitHub 호스트된 실행기](/actions/using-github-hosted-runners/about-github-hosted-runners)를 사용하지만 사용자 고유의 하드웨어 사양으로 실행기를 호스트하려는 경우 사용자 지정할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners)”를 참조하세요.{% endif %}

{% data variables.product.prodname_actions %}에 대한 자세한 내용은 다음을 참조하세요.
  - “[GitHub Actions 알아보기](/actions/learn-github-actions)”
  - “[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions)”
  - “[워크플로를 트리거하는 이벤트](/actions/learn-github-actions/events-that-trigger-workflows)”
  - “[필터 패턴 치트 시트](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”

파일럿 프로그램의 일부로 리포지토리별로 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정하는 것이 좋습니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 설정](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)”을 참조하세요.

많은 리포지토리에 대해 코드 검사를 사용하도록 설정하려는 경우 프로세스를 스크립팅할 수 있습니다.

여러 리포지토리에 {% data variables.product.prodname_actions %} 워크플로를 추가하기 위한 끌어오기 요청을 시작하는 스크립트의 예는 PowerShell 사용 사례를 위한 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 리포지토리를 참조하고, PowerShell이 없어 대신 NodeJS를 사용하려는 팀의 경우 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)를 참조하세요.

초기 코드 검사를 실행할 때 찾은 결과가 없거나 비정상적인 수의 결과가 반환되는 경우가 있을 수 있습니다. 향후 검사에서 플래그가 지정된 항목을 조정하고 싶을 수 있습니다. 자세한 내용은 “[코드 검사 구성](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)”을 참조하세요.

회사에서 GitHub 코드 검사에 다른 타사 코드 분석 도구를 사용하려는 경우 작업을 사용하여 GitHub 내에서 해당 도구를 실행할 수 있습니다. 또는 타사 도구에서 생성된 결과를 SARIF 파일로 코드 검사에 업로드할 수 있습니다. 자세한 내용은 “[코드 검사와 통합](/code-security/code-scanning/integrating-with-code-scanning)”을 참조하세요.

## {% data variables.product.prodname_secret_scanning %} 파일럿

GitHub에서는 실수로 커밋된 비밀이 사기에 사용되는 것을 방지하기 위해 리포지토리에 알려진 유형의 비밀이 있는지 검사합니다.

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에 대한 비밀 검사를 사용하도록 설정하려면 “[어플라이언스에 대한 비밀 검사 구성](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)”을 참조하세요.

{% endif %}

각 리포지토리 또는 프로젝트에 참여하는 모든 조직의 모든 리포지토리에 대해 비밀 검사 기능을 사용하도록 설정하여 각 파일럿 프로젝트에 이 기능을 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리의 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

엔터프라이즈 관련 사용자 지정 패턴, 특히 {% data variables.product.prodname_secret_scanning %}를 파일럿하는 프로젝트와 관련된 모든 사용자 지정 패턴을 수집한 경우 구성할 수 있습니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요.

리포지토리에 체크 인된 비밀에 대한 경고를 보고 닫는 방법을 알아보려면 “[비밀 검사의 경고 관리](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”를 참조하세요.

{% note %}

이 시리즈의 다음 문서는 “[4단계: 내부 설명서 만들기](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)”를 참조하세요.

{% endnote %}
