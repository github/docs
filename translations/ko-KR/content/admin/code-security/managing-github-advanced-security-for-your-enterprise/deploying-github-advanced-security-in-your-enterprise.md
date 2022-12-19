---
title: 엔터프라이즈에서 GitHub Advanced Security 배포
intro: 엔터프라이즈에서 GHAS({% data variables.product.prodname_GH_advanced_security %})를 롤아웃하기 위한 단계적 접근 방식을 계획, 준비 및 구현하는 방법을 알아봅니다.
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
- /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 7990891fd4b90127ae5f32aa262d6c096d23acab
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147060756"
---
## <a name="overview-of-the-deployment-process"></a>배포 프로세스 개요

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

이러한 다양한 단계에 대한 대략적인 요약은 “[{% data variables.product.prodname_GH_advanced_security %} 배포 개요](/admin/advanced-security/overview-of-github-advanced-security-deployment)”를 참조하세요.

배포를 시작하기 전에 “[{% data variables.product.prodname_GH_advanced_security %} 배포 개요](/admin/advanced-security/overview-of-github-advanced-security-deployment)”에 나와 있는 GHAS를 설치하기 위한 필수 조건 및 GHAS 배포 모범 사례를 검토하는 것이 좋습니다.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} 단계 0: 계획 및 킥오프

{% note %}

{% octicon "clock" aria-label="Clock" %} **예상 타이밍:** 0단계는 대략 1~4주간 지속될 것으로 추정됩니다. 이 범위는 릴리스 요구 사항 및 배포 계획에 대해 회사에 필요한 승인에 따라 달라질 수 있습니다.

{% endnote %}

계획 및 킥오프 단계의 목표는 모든 구성원, 프로세스 및 기술을 설정하고 GHAS를 구현할 준비가 되도록 하는 것입니다.

경영진 스폰서의 승인을 얻기 위해 엔터프라이즈에서 GHAS를 출시하기 전에 출시 계획 및 목표를 준비하고 조정하는 것이 좋습니다.

단계적 출시 전략의 일환으로 기업의 나머지 부분에 앞서 GHAS에 참가할 대상으로 지정해야 하는 영향력이 크고 중요한 팀 또는 애플리케이션을 식별하는 것이 좋습니다.

엔터프라이즈에서 단계적 출시가 작동하지 않는 경우 [파일럿 프로젝트 단계](#--phase-1-pilot-projects)로 건너뛸 수 있습니다.

{% data variables.product.prodname_professional_services %}를 사용하는 경우 이 단계에서는 출시 및 구현 프로세스 전반에 걸쳐 팀이 함께 작업하는 방법에 대한 계획도 수립합니다. {% data variables.product.prodname_professional_services_team %} 팀은 필요에 따라 단계적 출시 계획 및 목표 설정을 지원할 수 있습니다.

### <a name="step-1-kickoff-meeting-with--data-variablesproductprodname_professional_services--optional"></a>1단계: {% data variables.product.prodname_professional_services %}를 사용하여 킥오프 회의(선택 사항)

{% data variables.product.prodname_professional_services %}에 가입한 경우 Services 담당자와 함께 출시 및 구현 프로세스를 시작합니다.

{% data variables.product.prodname_professional_services %}에 가입하지 않은 경우 다음 단계로 건너뛸 수 있습니다.

이 모임의 목표는 두 팀이 회사에 가장 적합한 출시 및 구현 계획의 초안을 수립하는 데 필요한 정보를 조정하는 것입니다. 이 모임을 준비하면서 토론을 더 잘 준비하는 데 도움이 되는 설문 조사를 만들었습니다. Services 담당자가 이 설문 조사를 보냅니다.

이 초기 모임을 준비하는 데 도움이 되도록 다음 토픽을 검토하세요.

-  회사 및 {% data variables.product.prodname_professional_services %}가 함께 가장 잘 작동하는 방식에 맞게 조정
  - 구매한 서비스 시간/일수를 가장 잘 활용하는 방법에 대한 기대치 설정
  - 모임의 통신 계획/빈도
  - 역할 및 책임
- SDLC(소프트웨어 개발 수명 주기) 내에서 GHAS가 작동하는 방식을 검토합니다. {% data variables.product.prodname_professional_services %} 담당자가 GHAS 작동 방식을 설명합니다.
- GHAS 배포 모범 사례 검토. 이 자료는 팀이 유용하다고 판단하거나 기업에서 POC(개념 증명) 연습에 참여하지 않은 경우 리프레셔로 제공됩니다. 이 검토에는 DevSecOps 완성 모델과 같은 것에 대해 기존 애플리케이션 보안 프로그램 및 그 완성도에 대한 설명이 포함되어 있습니다.
-  GHAS 배포에 대한 다음 단계에 맞춰 조정. {% data variables.product.prodname_professional_services %} 담당자가 다음 단계와 파트너 관계에서 기대할 수 있는 지원을 간략하게 설명합니다.

출시 전략을 계획하는 데 도움이 되도록 다음 질문에 대해 논의할 수도 있습니다.
  - 얼마나 많은 팀이 사용하도록 설정되나요?
  - 팀의 리포지토리의 구조는 무엇인가요? (기술 스택, 현재 도구 등)
    - 회사가 참여한 경우 이 중 일부는 개념 증명 연습 중에 이미 다루었을 수 있습니다. 다루지 않았다면, 이번이 구조에 대해 논의하는 중요한 시간입니다.
   - 어떤 수준의 채택이 유기적, 지원 또는 무기적 채택이 될 것으로 예상하나요?
   - 지원 채택은 리소싱 및 설명서 관점에서 어떤 모습인가요?
   - 무기적 채택을 어떻게 철저하게 관리할 생각인가요? (예: 정책 적용 또는 중앙에서 관리하는 워크플로 사용)

### <a name="step-2-internal-kickoff-at-your-company"></a>2단계: 회사의 내부 킥오프

회사가 {% data variables.product.prodname_professional_services %}를 사용하도록 선택했든 선택하지 않았든 팀에 맞추기 위해 자체 킥오프 회의를 진행하는 것이 항상 좋습니다.

킥오프 회의 중에는 목표, 기대를 명확하게 이해하고 있는지 확인하고 출시 및 구현과 관련하여 앞으로 나아가는 방법이 마련되어 있는지 확인해야 합니다.

또한 GHAS의 출시 및 구현을 지원하기 위한 적절한 도구와 전문 지식을 갖도록 팀에 대한 교육 및 준비에 대해 생각해 보기에 좋은 단계입니다.

#### <a name="topics-for-your-internal-kickoff-meeting"></a>내부 킥오프 회의에 대한 토픽

{% data variables.product.prodname_professional_services %}를 사용하는 킥오프 회의에서 동일한 그룹으로 아직 다루지 않은 경우 회사의 내부 킥오프 회의에서 이러한 토픽을 다루는 것이 좋습니다.

- 비즈니스 성공 메트릭은 무엇인가요? 이러한 값을 측정하고 그 측정값을 보고하려면 어떻게 해야 할까요?
  - 정의되지 않은 경우 정의하세요. 정의된 경우 통신하고 데이터 기반 진행률 업데이트를 제공하는 방법에 대해 설명합니다.
- SDLC(소프트웨어 개발 수명 주기) 내에서 GHAS가 작동하는 방식 및 이 방식이 회사에 어떻게 작동할 것으로 예상되는지 검토
- 회사가 개념 증명 연습에 참여하지 않은 경우 모범 사례 검토(또는 팀이 이 검토에서 가치를 찾은 경우 리프레셔)
  - 이는 기존 애플리케이션 보안 프로그램과 어떻게 비교/대조되나요?
- 내부 팀이 출시 및 구현 전반에 걸쳐 어떻게 가장 잘 작동할지 논의하고 동의합니다.
  - 내부 팀을 위한 커뮤니케이션 계획 및 회의 빈도 조정
  - 출시 및 구현 완료를 위한 작업을 검토하여 역할 및 책임 정의. 이 문서에서 대부분의 작업에 대해 간략하게 설명했지만 회사에 필요하지만 여기서 다루지 않은 추가 작업이 있을 수 있습니다.
  - 확장된 지원을 위한 “챔피언 프로그램” 설정 고려
  - 작업 완료 시점 논의 시작
- 회사에 가장 적합한 이상적인 출시 접근 방식에 대한 작업을 시작합니다. 여기에는 다음 몇 가지 중요한 항목에 대한 이해가 포함됩니다.
  - 얼마나 많은 팀이 사용하도록 설정되나요? 회사가 참여한 경우 이 중 일부는 POC(개념 증명) 연습 중에 이미 다루었을 수 있습니다. 다루지 않았다면, 이번이 구조에 대해 논의하는 중요한 시간입니다.
  - 초기 출시에 대해 확인된 중요한 애플리케이션 중 GHAS에서 지원하는 기술을 기반으로 구축된 애플리케이션은 몇 개입니까?
  - 얼마나 조직적인 준비가 필요한가요? 자세한 내용은 [2단계](#--phase-2-organizational-buy-in--rollout-preparation)를 참조하세요.

### <a name="step-3-prepare-your-rollout--implementation-plan-and-goals"></a>3단계: 출시 및 구현 계획과 목표 준비

출시의 첫 번째 단계를 위한 파일럿 프로젝트를 진행하기 전에 회사의 진행 계획에 대해 마련한 출시 계획 및 비즈니스 목표가 수립되었는지 확인하는 것이 중요합니다.

{% data variables.product.prodname_professional_services %}를 사용하는 경우 이 계획을 만드는 데 중요한 역할을 할 수 있습니다.

독립적으로 작업하는 경우 이 섹션에서는 앞으로 나아갈 준비를 할 때 계획에 포함하도록 몇 가지 사항을 간략하게 설명합니다.

필요에 따라 팀 구성원을 위한 프로세스 변경(필요한 경우) 및 교육 계획:
  - 역할 및 책임에 대해 문서화된 팀 할당. 각 기능에 필요한 권한에 대한 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)”을 참조하세요.
  - 가능한 경우 작업 및 타임라인/기간의 문서화된 계획. 여기에는 인프라 변경, 프로세스 변경/학습 및 GHAS 지원의 모든 후속 단계가 포함되어야 하며, 필요에 따라 수정 및 구성 조정을 위한 기간을 허용해야 합니다. 자세한 내용은 아래의 “[1단계: 파일럿 프로젝트](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects)”를 참조하세요.
  - 먼저 어떤 프로젝트/팀에서 GHAS를 사용하도록 설정할지에 대한 우선 계획과 다음 단계에서는 어떤 프로젝트/팀이 사용하도록 설정될지에 대한 후속 계획
  - 비즈니스 목표를 기반으로 하는 성공 메트릭. 이는 파일럿 프로젝트 이후 전체 출시를 위한 승인을 얻는 중요한 기준점이 될 것입니다.

{% note %}

**참고:** 회사의 모든 그룹에서 인식, 승인 및 채택하도록 하려면 출시 시기와 회사의 인프라, 프로세스 및 일반적인 일상적인 개발 워크플로에 미치는 영향에 대해 현실적인 기대치를 설정하는 것이 중요합니다. 더 원활하고 성공적인 출시를 위해서는 보안 및 개발 팀이 GHAS의 영향을 이해하도록 하세요.

{% endnote %}

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 고객의 경우 인스턴스가 GHAS의 출시 및 구현을 지원할 수 있도록 다음을 검토합니다.

- GHES 3.0으로 업그레이드할 필요는 없지만 코드 검사 및{% data variables.product.prodname_actions %} 등과 같은 기능 조합을 활용하려면 GHES 3.0 이상으로 업그레이드해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”를 참조하세요.

- 고가용성 구성에서는 모든 주요 데이터 저장소의 복제를 통해 완전 중복 보조 {% data variables.product.prodname_ghe_server %} 어플라이언스가 주 어플라이언스와 동기화된 상태로 유지됩니다. 고가용성 설정에 대한 자세한 내용은 “[고가용성 구성](/admin/enterprise-management/configuring-high-availability)”을 참조하세요.

- 회사 설정의 잠재적 변경 내용에 대한 논의를 지원하기 위해{% data variables.product.prodname_ghe_server %} 시스템 개요를 검토할 수 있습니다. 자세한 내용은 “[시스템 개요](/admin/overview/system-overview)”를 참조하세요.

{% endif %}

### <a name="step-4-establish-a-baseline-of-organizational-insights"></a>4단계: 조직 인사이트의 기준 설정

회사에서 파일럿 프로젝트를 시작할 준비를 하면서 현재 기업이 위치한 지점에 대한 기준을 설정하고 파일럿 프로젝트 진행 상황을 측정하기 위한 명확한 성공 메트릭을 정의했는지 확인하는 것이 중요합니다.

회사에서 측정해야 하는 주요 비즈니스 목표가 있을 수 있지만 파일럿의 성공을 측정하는 데 도움이 되도록 식별할 수 있는 다른 메트릭이 있습니다.

시작점으로 이러한 메트릭 중 일부는 다음과 같습니다.
  - GHAS 취약성과 이전 도구 및 파일럿 프로젝트/팀이 활용한 사례를 해결하는 데 걸리는 평균 시간
  - 가장 중요한 애플리케이션에 대한 통합 결과를 검사하는 코드
  - SAST(정적 애플리케이션 보안 테스트)가 통합된 애플리케이션 수와 참여 이전의 애플리케이션 수

GHAS를 구매하기 전에 POC 연습에 참가한 경우 이러한 목표가 친숙하게 느껴질 수 있습니다. 이 성공 조건에는 다음과 같은 상위 수준 역할에 대한 몇 가지 목표가 포함됩니다.
  - 구현 및 관리 팀
  - 보안/CISO(최고 정보 보안 책임자) 워크숍
  - 애플리케이션 개발 팀

한 단계 더 나아가고 싶은 경우 OWASP의 DSOMM(DevSecOps 완성 모델)을 활용하여 완성도 1에 도달하는 방법을 살펴볼 수 있습니다. DSOMM에는 다음과 같은 네 가지 주요 평가 기준이 있습니다.

- **정적 깊이:** AppSec CI 파이프라인 내에서 수행하는 정적 코드 검사가 얼마나 포괄적인지를 나타내는 기준
- **동적 깊이:** AppSec CI 파이프라인 내에서 실행하는 동적 코드 검사가 얼마나 포괄적인지를 나타내는 기준
- **강도:** AppSec CI 파이프라인에서 실행 중인 보안 검사에 대한 일정 빈도
- **통합:** 결과 및 프로세스 완전성을 처리하기 위한 수정 워크플로

이러한 접근 방식 및 GHAS에서 해당 접근 방식을 구현하는 방법에 대해 자세히 알아보려면 백서 “[Achieving DevSecOps Maturity with GitHub](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/)”를 다운로드할 수 있습니다.

더 광범위한 회사의 목표와 현재 수준의 DevSecOps 완성도에 따라 파일럿의 진행 상황과 성공을 가장 잘 측정하는 방법을 결정할 수 있습니다.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %}  1단계: 파일럿 프로젝트

{% note %}

{% octicon "clock" aria-label="Clock" %} **예상 타이밍:** 1단계는 대략 2~3주 이상 지속될 것으로 추정됩니다. 이 범위는 회사의 인프라 또는 시스템 복잡성, 이러한 변경 내용을 관리/승인하기 위한 내부 프로세스 및 GHAS를 진행하기 위해 더 큰 조직 프로세스 변경이 필요한 경우에 따라 크게 달라질 수 있습니다.

{% endnote %}

회사 전체에서 GHAS를 사용하도록 설정하려면 몇 가지 영향력이 큰 프로젝트 또는 팀에서 초기 출시를 파일럿 실행하는 것이 좋습니다. 이렇게 하면 회사 내의 초기 그룹이 GHAS에 익숙해지고, 회사의 나머지 부분에 배포하기 전에 GHAS에 대한 견고한 기반을 구축할 수 있습니다.

파일럿 프로젝트를 시작하기 전에 파일럿이 완료되면 초기 회의, 중간 검토 및 마무리 세션과 같은 팀의 검사점 회의를 예약하는 것이 좋습니다. 이러한 검사점 회의를 통해 필요에 따라 조정하고 팀이 파일럿을 성공적으로 완료할 수 있도록 준비하고 지원하도록 할 수 있습니다.

이러한 단계는 엔터프라이즈에서 GHAS를 사용하도록 설정하고, 해당 기능 사용을 시작하고, 결과를 검토하는 데 도움이 됩니다.

{% data variables.product.prodname_professional_services %}를 사용하는 경우 필요에 따라 온보딩 세션, GHAS 워크샵 및 문제 해결을 통해 이 프로세스 전반에서 추가 지원을 제공할 수 있습니다.

### <a name="step-1-ghas-set-up--installation"></a>1단계: GHAS 설정 및 설치

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에 대해 GHAS를 사용하도록 아직 설정하지 않은 경우 "[엔터프라이즈에 GitHub 고급 보안 사용](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”.

{% endif %}

각 리포지토리 또는 프로젝트에 참여하는 모든 조직의 모든 리포지토리에 대해 GHAS 기능을 사용하도록 설정하여 각 파일럿 프로젝트에 GHAS를 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리의 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

대부분의 GHAS 설정 및 설치는 엔터프라이즈 및 리포지토리에서 코드 검사를 사용하도록 설정하고 구성하는 데 중점을 두고 있습니다.

코드 검사를 사용하면 {% data variables.product.prodname_dotcom %} 리포지토리의 코드를 분석하여 보안 취약성 및 코딩 오류를 찾을 수 있습니다. 코드 검사를 사용하여 코드에서 기존 문제에 대한 수정 사항을 찾고, 심사하고, 우선 순위를 지정할 수 있을 뿐만 아니라 개발자가 프로덕션에 도달할 수 있는 새로운 문제를 도입하지 못하도록 방지할 수 있습니다. 자세한 내용은 “[코드 검사 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”를 참조하세요.

### <a name="step-2-set-up--data-variablesproductprodname_code_scanning_capc-"></a>2단계: {% data variables.product.prodname_code_scanning_capc %} 설정

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에서 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정하려면 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”을 참조하세요.

{% endif %}

코드 검사를 설정하려면 [{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning)를 사용하여 코드 검사를 실행할지 또는 고유한 [타사 CI 시스템](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning)을 실행할지 결정해야 합니다.

#### <a name="using--data-variablesproductprodname_actions--for--data-variablesproductprodname_code_scanning-"></a>{% data variables.product.prodname_code_scanning %}에 {% data variables.product.prodname_actions %} 사용

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %}에 대한 {% data variables.product.prodname_actions %}을(를) 사용하여 코드 검사를 설정하려면 {% data variables.product.prodname_actions %} 실행기를 하나 이상 프로비저닝해야 합니다. 자세한 내용은 [셀프 호스트 실행기 설정](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions)을 참조하세요.

{% endif %}

{% data variables.product.prodname_ghe_cloud %}의 경우 [CodeQL 작업](https://github.com/github/codeql-action/)을 사용하여 리포지토리에서 코드 검사를 실행하는 {% data variables.product.prodname_actions %} 워크플로를 만들 수 있습니다. {% data variables.product.prodname_code_scanning_capc %}은(는) 기본적으로 [GitHub 호스트된 실행기](/actions/using-github-hosted-runners/about-github-hosted-runners)를 사용하지만 사용자 고유의 하드웨어 사양으로 실행기를 호스트하려는 경우 사용자 지정할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners)”를 참조하세요.

{% data variables.product.prodname_actions %}에 대한 자세한 내용은 다음을 참조하세요.
  - “[GitHub Actions 알아보기](/actions/learn-github-actions)”
  - “[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions)”
  - “[워크플로를 트리거하는 이벤트](/actions/learn-github-actions/events-that-trigger-workflows)”
  - “[필터 패턴 치트 시트](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”

#### <a name="using-a-third-party-ci-system-with-the-codeql-cli-for--data-variablesproductprodname_code_scanning-"></a>{% data variables.product.prodname_code_scanning %}에 CodeQL CLI와 함께 타사 CI 시스템 사용

{% data variables.product.prodname_actions %}를 사용하지 않고 고유한 연속 통합 시스템이 있는 경우 CodeQL CLI를 사용하여 타사 CI 시스템에서 CodeQL 코드 검사를 수행할 수 있습니다.

자세한 내용은 다음을 참조하세요.
  - “[CI 시스템에서 CodeQL 코드 검사 정보](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)”

### <a name="step-3-enable--data-variablesproductprodname_code_scanning_capc--in-repositories"></a>3단계: 리포지토리에서 {% data variables.product.prodname_code_scanning_capc %}를 사용하도록 설정

단계별 접근 방식을 사용하여 GHAS를 출시하는 경우 출시 계획의 일부로 리포지토리별로 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정하는 것이 좋습니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 설정](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)”을 참조하세요.

단계적 출시 접근 방식을 계획하지 않고 많은 리포지토리에 대해 코드 검사를 사용하도록 설정하려는 경우 프로세스를 스크립팅할 수 있습니다.

여러 리포지토리에 {% data variables.product.prodname_actions %} 워크플로를 추가하기 위한 끌어오기 요청을 시작하는 스크립트의 예는 PowerShell 사용 사례를 위한 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 리포지토리를 참조하고, PowerShell이 없어 대신 NodeJS를 사용하려는 팀의 경우 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)를 참조하세요.

### <a name="step-4-run-code-scans-and-review-your-results"></a>4단계: 코드 검사 실행 및 결과 검토

필요한 리포지토리에서 코드 검사를 사용하도록 설정하면 개발 팀이 코드 검사 및 보고서를 실행하고 보고서를 보고, 결과를 처리하는 방법을 이해할 수 있도록 지원할 준비가 된 것입니다.

#### <a name="-data-variablesproductprodname_code_scanning_capc-"></a>{% data variables.product.prodname_code_scanning_capc %}

코드 검사를 사용하면 GitHub에서 프로젝트 코드에 있는 취약성 및 오류를 찾을 수 있으며 관련 {% data variables.product.prodname_code_scanning %} 경고를 보고, 심사하고, 이해하고, 해결할 수 있습니다.

코드 검사에서 끌어오기 요청의 문제를 식별하는 경우 강조 표시된 코드를 검토하고 경고를 해결할 수 있습니다. 자세한 내용은 “[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)”를 참조하세요.

리포지토리에 대한 쓰기 권한이 있으면 해당 리포지토리에 대한 코드 검사를 설정하거나 구성할 수 있습니다. 리포지토리에 대한 쓰기 권한을 사용하여 리포지토리 코드의 잠재적인 취약성 또는 오류에 대한 {% ifversion delete-code-scanning-alerts %}경고를 표시, 수정, 해제 또는 삭제{% else %}경고를 표시, 수정 또는 해제{% endif %}할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 경고 관리](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)를 참조하세요.

#### <a name="generate-reports-of--data-variablesproductprodname_code_scanning--alerts"></a>{% data variables.product.prodname_code_scanning %} 경고에 대한 보고서 생성

코드 검사 경고 보고서를 만들려면 {% data variables.product.prodname_code_scanning_capc %} API를 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning_capc %} API](/rest/reference/code-scanning)”를 참조하세요.

{% data variables.product.prodname_code_scanning_capc %} API를 사용하는 방법에 대한 예제는 [`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample) 리포지토리를 참조하세요.

### <a name="step-5-configure--data-variablesproductprodname_code_scanning_capc--to-fine-tune-your-results"></a>5단계: 결과를 미세 조정하도록 {% data variables.product.prodname_code_scanning_capc %} 구성

초기 코드 검사를 실행할 때 찾은 결과가 없거나 비정상적인 수의 결과가 반환되는 경우가 있을 수 있습니다. 향후 검사에서 플래그가 지정된 항목을 조정하고 싶을 수 있습니다.

자세한 내용은 “[코드 검사 구성](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)”을 참조하세요.

회사에서 GitHub 코드 검사에 다른 타사 코드 분석 도구를 사용하려는 경우 작업을 사용하여 GitHub 내에서 해당 도구를 실행할 수 있습니다. 또는 타사 도구에서 생성된 결과를 SARIF 파일로 코드 검사에 업로드할 수 있습니다. 자세한 내용은 “[코드 검사와 통합](/code-security/code-scanning/integrating-with-code-scanning)”을 참조하세요.

### <a name="step-6-set-up-secret-scanning"></a>6단계: 비밀 검사 설정

GitHub에서는 실수로 커밋된 비밀이 사기에 사용되는 것을 방지하기 위해 리포지토리에 알려진 유형의 비밀이 있는지 검사합니다.

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 인스턴스에 대한 비밀 검사를 사용하도록 설정하려면 “[어플라이언스에 대한 비밀 검사 구성](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)”을 참조하세요.

{% endif %}

각 리포지토리 또는 프로젝트에 참여하는 모든 조직의 모든 리포지토리에 대해 비밀 검사 기능을 사용하도록 설정하여 각 파일럿 프로젝트에 이 기능을 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리의 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

리포지토리에 체크 인된 비밀에 대한 경고를 보고 닫는 방법을 알아보려면 “[비밀 검사의 경고 관리](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”를 참조하세요.

### <a name="step-7-set-up-dependency-management"></a>7단계: 종속성 관리 설정

GitHub는 알려진 취약성이 포함된 타사 소프트웨어를 사용하지 않도록 도와줍니다. 취약한 종속성을 업데이트{% ifversion GH-advisory-db-supports-malware %} 및 맬웨어를 제거{% endif %}하기 위한 다음 도구를 제공합니다.

| 종속성 관리 도구 | 설명 |
|----|----|
| Dependabot 경고 | 엔터프라이즈에서 안전하지 않은 종속성을 검색할 때 리포지토리의 종속성을 추적하고 Dependabot 경고를 받을 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)”를 참조하세요. |
| 종속성 그래프 | 종속성 그래프는 리포지토리에 저장된 매니페스트와 파일 잠금에 대한 요약입니다. 코드베이스가 종속된 에코시스템 및 패키지(해당 종속성) 및 프로젝트에 종속된 리포지토리 및 패키지(종속성)를 보여 줍니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요. |{% ifversion ghes or ghec %}
| 종속성 검토 | 끌어오기 요청에 종속성 변경 내용이 포함된 경우 변경된 내용 및 종속성에 알려진 취약성이 있는지 여부에 대한 요약을 볼 수 있습니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)” 또는 “[끌어오기 요청에서 종속성 변경 검토](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”를 참조하세요. | {% endif %} {% ifversion ghec or ghes > 3.2 %}
| Dependabot 보안 업데이트 | Dependabot은 보안 업데이트를 사용하여 끌어오기 요청을 발생시켜 취약한 종속성을 해결할 수 있습니다. 자세한 내용은 “[Dependabot 보안 업데이트 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”를 참조하세요. |
| Dependabot 버전 업데이트 | Dependabot을 사용하여 사용 중인 패키지를 최신 버전으로 업데이트할 수 있습니다. 자세한 내용은 “[Dependabot 버전 업데이트 정보](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)”를 참조하세요. | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### <a name="step-8-establish-a-remediation-process"></a>8단계: 수정 프로세스 설정

팀이 검사를 실행하고, 취약성 및 종속성을 식별하고, 각 보안 기능의 결과를 사용할 수 있게 되면 다음 단계는 정상적인 개발 프로세스 내에서 식별된 취약성을 보안 팀의 개입 없이 수정할 수 있는지 확인하는 것입니다.

즉, 개발 팀은 개발 프로세스 전반에 걸쳐 GHAS 기능을 활용하는 방법을 이해하고 있으며, 검사를 실행하고, 보고서를 읽고, 결과를 사용하고, 정상적인 개발 워크플로 내에서 취약성을 수정할 수 있거나, 개발 종료 시 별도의 보안 단계를 수행하지 않거나 보안 팀이 개입해 보고서/결과를 이해하도록 참여시킬 필요가 없습니다.

### <a name="step-9-set-up-custom-analysis-if-needed"></a>9단계: 필요한 경우 사용자 지정 분석 설정

사용자 지정 분석은 사용 가능한 기본(및 커뮤니티) 쿼리 세트를 초과하여 사용자 지정 CodeQL 쿼리가 필요할 때 코드 검사를 보다 심층적으로 사용하는 선택 사항입니다. 사용자 지정 쿼리가 필요한 경우는 드뭅니다.

사용자 지정 쿼리는 사용자 지정 보안 경고를 식별하거나 개발자가 특정 코드 패턴을 검색하여 코딩 표준을 따르도록 돕는데 사용됩니다.

회사에서 사용자 지정 CodeQL 쿼리를 작성하는 데 관심이 있는 경우 회사에서 충족해야 하는 특정한 요구 사항이 있습니다.

팀에서 CodeQL을 통해 찾고자 하는 기존 취약성의 몇 가지 예를 제공할 수 있는 경우 GitHub 팀에게 알려주세요. 여기서는 언어의 기본 사항을 살펴보고 문제 중 하나를 해결하는 방법을 논의하기 위한 소개 세션을 예약할 수 있습니다. CodeQL을 좀 더 자세히 다루려는 경우 팀에서 자체 쿼리를 빌드할 수 있도록 더 많은 토픽을 다루는 추가 참여 옵션을 제공합니다.

[CodeQL 설명서](https://codeql.github.com/docs/codeql-overview/)에서 [CodeQL 쿼리](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/)에 대해 자세히 알아보거나 {% data variables.product.prodname_professional_services %} 팀 또는 영업 담당자에게 문의할 수 있습니다.

### <a name="step-10-create--maintain-documentation"></a>10단계: 설명서 만들기 및 유지 관리

파일럿 단계 전체에서 회사 내에서 수행된 인프라 및 프로세스 변경 내용에 대한 고품질 내부 설명서를 만들고 유지 관리하는 것은 물론, 출시 및 구현 프로세스 전반에 걸쳐 팀이 진행하면서 수행된 파일럿 프로세스 및 구성 변경 내용에 대한 학습을 만들고 유지하는 것이 중요합니다.

철저하고 완전한 설명서를 마련하면 출시의 나머지 단계를 반복 가능한 프로세스로 만드는 데 도움이 됩니다.
또한 좋은 설명서를 통해 새 팀이 출시 프로세스 내내 지속적으로 온보딩되고 새 팀원이 팀에 합류할 수 있습니다.

출시 및 구현이 완료되었다고 해서 좋은 설명서 작성이 끝나는 것은 아닙니다. 가장 유용한 설명서는 팀이 GHAS를 사용하여 환경을 확장하고 요구 사항이 증가함에 따라 적극적으로 업데이트되고 발전합니다.

설명서 외에도 회사는 출시, 구현 및 그 이후의 모든 지원 및 지침을 위해 팀에 명확한 채널을 제공하는 것이 좋습니다. GHAS의 출시 및 구현을 지원하기 위해 회사에서 수행해야 하는 변경 수준에 따라 잘 지원되는 팀이 있으면 개발 팀의 일일 워크플로를 성공적으로 채택하는 데 도움이 됩니다.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %}  2단계: 조직 승인 및 출시 준비

{% note %}

{% octicon "clock" aria-label="Clock" %} **예상 타이밍:** 2단계는 대략 1주~1달 이상 지속될 것으로 추정됩니다. 이 범위는 회사의 내부 승인 프로세스에 따라 크게 달라질 수 있습니다.

{% endnote %}

이 단계의 주요 목표 중 하나는 GHAS의 전체 배포를 성공적으로 수행할 수 있도록 조직의 승인을 얻도록 하는 것입니다.

이 단계에서 회사는 파일럿 프로젝트의 결과를 검토하여 파일럿이 성공했는지, 어떤 조정이 필요한지 그리고 회사가 출시를 계속 진행할 준비가 되었는지를 확인합니다.

회사의 승인 프로세스에 따라 경영진 스폰서의 조직적 승인이 계속 진행되어야 할 수 있습니다. 대부분의 경우 회사를 위한 GHAS의 가치를 활용하기 시작하려면 팀의 조직적 승인이 필요합니다.

회사 전체에서 GHAS를 보다 광범위하게 배포하는 다음 단계로 넘어가기 전에 파일럿의 학습에 따라 원래 출시 계획을 수정하는 경우가 많습니다.

또한 계속 진행되는 출시에 대한 최신 내용을 담고 있도록 설명서에 영향을 줄 수 있는 모든 내용을 변경해야 합니다.

아직 하지 않은 경우 출시의 다음 단계에서는 팀 또는 팀원에게 GHAS에 대해 소개하는 교육을 계획하는 것이 좋습니다.

### <a name="step-1-organize-results"></a>1단계: 결과 구성

1단계가 완료되면 팀이 {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} 인스턴스에서 GHAS를 사용하도록 설정하고{% endif %} GHAS의 모든 주요 기능을 성공적으로 활용할 수 있어야 하며, 잠재적으로 일부 구성 변경으로 결과를 최적화할 수 있어야 합니다. 회사에서 0단계에서 성공 메트릭을 명확하게 정의한 경우 이러한 메트릭에 대해 측정하여 파일럿의 성공을 확인할 수 있어야 합니다.

결과를 준비할 때 기준 메트릭을 다시 검토하여 원래 비즈니스 목표에 대해 파일럿에서 수집한 메트릭을 기반으로 증분 진행을 입증할 수 있도록 하는 것이 중요합니다. 이 정보에 대한 지원이 필요한 경우 GitHub에서는 회사에 진행 상황을 측정할 수 있는 적절한 메트릭이 있는지 확인하여 도움이 될 수 있습니다. 사용 가능한 도움말에 대한 자세한 내용은 “[GitHub 서비스 및 지원](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)"을 참조하세요.

### <a name="step-2-secure-organizational-buy-in"></a>2단계: 조직적 승인 얻기

조직적 승인은 회사의 규모, 승인 프로세스 또는 GHAS를 출시하는 데 필요한 변경 수준을 포함하여 다양한 요인에 따라 달라집니다.

일부 회사에서는 승인 얻기가 일회성 회의이지만 다른 회사에서는 이러한 프로세스에 시간이 꽤 걸릴 수 있습니다(몇 주 또는 몇 달). 승인에는 경영진 스폰서의 승인이 필요하거나 팀의 일일 워크플로에 GHAS 채택이 필요할 수 있습니다.

이 단계에 걸리는 기간은 전적으로 회사에 따라 다르며 얼마나 빨리 진행하려고 하는지에 따라 다릅니다. 가능한 경우 GitHub 지원 또는 서비스를 검색하여 질문에 답변하고 이 프로세스를 지원하는 데 필요한 권장 사항을 제공하는 것이 좋습니다. 사용 가능한 도움말에 대한 자세한 내용은 “[GitHub 서비스 및 지원](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)”을 참조하세요.

### <a name="step-3-revise-and-update-documentation"></a>3단계: 설명서 수정 및 업데이트

파일럿 프로젝트의 결과와 회사 내 나머지 팀의 요구 사항을 검토합니다. 조사 결과 및 요구 사항 분석에 따라 설명서를 업데이트/수정합니다.

회사의 나머지 부분에 대해 출시를 계속 진행하기 전에 설명서가 최신 상태인지 확인하는 것이 필수적입니다.

### <a name="step-4-prepare-a-full-rollout-plan-for-your-company"></a>4단계: 회사에 대한 전체 출시 계획 준비

파일럿 프로젝트에서 배운 내용에 따라 0단계에서 설계한 출시 계획을 업데이트합니다. 회사에 출시할 준비를 하려면 GHAS 사용에 대한 교육, 변경 내용 처리 또는 엔터프라이즈가 GitHub로 마이그레이션하는 경우 마이그레이션 교육과 같이 팀에 필요한 모든 교육을 고려합니다.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %}  3단계: 전체 조직 출시 및 변경 관리

{% note %}

{% octicon "clock" aria-label="Clock" %} **예상 타이밍:** 3단계는 대략 2주~몇 달 이상 지속될 것으로 추정됩니다. 이 범위는 회사의 규모, 리포지토리/팀 수, GHAS 출시가 회사에 가져오는 변경 수준에 따라 크게 달라질 수 있습니다.

{% endnote %}

회사가 파일럿 프로젝트의 결과에 맞춰 조정되고 2단계에서 모든 출시 준비 단계를 완료한 후에는 계획에 따라 회사에 대한 전체 출시를 진행할 수 있습니다.

### <a name="step-1-evaluate-your-rollout-as-you-go"></a>1단계: 진행한 만큼 출시 평가

GHAS 출시에 단계적 접근 방식을 사용하는 경우 출시가 원활하게 진행되도록 GHAS를 회사의 다른 세그먼트에 출시한 후 잠시 일시 중지하고 짧은 평가를 완료하는 것이 좋습니다. 평가를 통해 팀이 제대로 지원 및 교육 받고, 고유한 GHAS 구성 요구 사항이 충족되고, 필요에 따라 계획 및 설명서를 조정할 수 있습니다.

### <a name="step-2-set-up-any-needed-training"></a>2단계: 필요한 교육 설정

파일럿 프로젝트 팀 이외의 모든 팀에 GHAS를 배포하는 경우 필요할 때 추가 지원을 제공하기 위한 교육을 팀이 받았는지 또는 이러한 지원을 제공하기 위해 사용할 수 있는 교육 리소스가 있는지 확인해야 합니다.

회사에 추가 지원이 필요한 영역은 다음과 같습니다.
  - GHAS에 대한 교육
  - GitHub 신규 고객을 위한 교육
  - GitHub로 마이그레이션하는 방법에 대한 교육

{% data variables.product.prodname_professional_services_team %} 팀은 출시 및 구현 프로세스 전반에 걸쳐 팀을 지원하기 위한 다양한 교육 서비스, 부트캠프 및 일반적인 조언을 제공합니다. 자세한 내용은 “[GitHub 서비스 및 지원](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)”을 참조하세요.

팀 지원을 돕기 위해 관련 GitHub 설명서의 요약은 다음과 같습니다.

GHAS를 사용하도록 설정하는 방법에 관한 설명서는 다음 내용을 참조하세요.
  - “[고급 보안 기능 사용](/get-started/learning-about-github/about-github-advanced-security)”
  - “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”
  - “[리포지토리에 대한 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”

GitHub로 마이그레이션하는 방법에 대한 설명서는 다음을 참조하세요.
  - “[GitHub로 소스 코드 가져오기](/github/importing-your-projects-to-github/importing-source-code-to-github)”

GitHub 시작에 관한 설명서는 다음을 참조하세요.
  - [시작](/get-started)”

### <a name="step-3-help-your-company-manage-change"></a>3단계: 회사의 변경 관리 지원

2단계 내의 4단계에서는 파일럿 프로젝트에서 배운 내용에 따라 초기 출시 계획을 업데이트하는 것이 좋습니다. GHAS를 회사에 성공적으로 배포하는 데 필요한 조직 변경을 구현함에 따라 계획을 계속 업데이트해야 합니다.

성공적인 GHAS 출시 및 일일 워크플로에 모범 사례 채택은 팀이 업무에 보안을 포함해야 하는 이유를 이해하는 데 달려 있습니다.

### <a name="step-4-continued-customization"></a>4단계: 지속적인 사용자 지정

GHAS의 구성 및 사용자 지정은 회사 전체에 출시되었다고 해서 끝난 것이 아닙니다. GHAS가 회사의 변화하는 요구 사항을 계속해서 지원하도록 하려면 시간의 흐름에 따라 사용자 지정 구성을 계속해서 추가로 변경해야 합니다.

시간이 흘러 팀이 GHAS에 대한 경험이 많고 숙련된 상태가 되면 추가 사용자 지정을 위한 기회가 추가로 생성됩니다.
