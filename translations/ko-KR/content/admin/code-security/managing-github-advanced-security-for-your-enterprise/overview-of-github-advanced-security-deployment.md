---
title: GitHub Advanced Security 배포 개요
intro: 다음의 모범 사례, 출시 사례 및 엔터프라이즈에서 검증된 단계별 접근 방식을 검토하고 이해하여 회사가 GHAS({% data variables.product.prodname_GH_advanced_security %}) 채택을 성공적으로 준비하도록 지원합니다.
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
- /admin/advanced-security/overview-of-github-advanced-security-deployment
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
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145120855"
---
GHAS({% data variables.product.prodname_GH_advanced_security %})를 사용하면 세계에서 가장 진보된 의미 체계 코드 분석 엔진인 CodeQL과 같은 통합 도구를 사용하여 보다 안전한 코드를 더 빠르게 빌드할 수 있습니다. GHAS는 기업 내 모든 개발자들의 적극적인 참여가 필요한 도구 모음입니다. 투자 수익을 최대화하려면 코드를 완벽하게 보호하기 위해 GHAS를 사용, 적용, 유지 관리하는 방법을 배워야 합니다.

회사의 새 소프트웨어 문제를 해결하는 데 있어 가장 큰 과제 중 하나는 롤아웃 및 구현 프로세스뿐만 아니라 롤아웃에 성공하는 데 필요한 조직 차원의 적용을 위한 문화적인 변화를 주도하는 것입니다.

회사가 GHAS를 사용하여 이 프로세스를 더 잘 이해하고 준비할 수 있도록 이 개요는 다음을 목표로 합니다.
  - 회사에 GHAS가 롤아웃되면 어떤 모습일지 간략하게 설명합니다.
  - 회사가 롤아웃에 대비하는 데 도움을 줍니다.
  - 회사의 롤아웃 성공을 최대화하는 데 도움이 되는 주요 모범 사례를 공유합니다.

{% data variables.product.prodname_GH_advanced_security %}를 통해 사용할 수 있는 보안 기능을 이해하려면 “[{% data variables.product.prodname_dotcom %} 보안 기능](/code-security/getting-started/github-security-features)”을 참조하세요.

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>GHAS 롤아웃에 권장되는 단계적 접근 방식

업계 및 GitHub 모범 사례를 참고하여 GHAS 롤아웃에 대한 단계적 접근 방식을 수립했습니다. {% data variables.product.prodname_professional_services %}와 협력하여 또는 독립적으로 롤아웃에 이 접근 방식을 활용할 수 있습니다.

단계적 접근 방식을 권장하지만 회사의 요구 사항에 따라 조정할 수 있습니다. 또한 롤아웃 및 구현을 위한 타임라인을 만들고 준수하는 것이 좋습니다. 계획을 시작할 때 회사에 가장 적합한 이상적인 접근 방식과 타임라인을 파악하기 위해 함께 작업할 수 있습니다.

![0단계: 계획 및 시작, 1단계: 파일럿 프로젝트, 2단계: 얼리어답터를 위한 조직 차원의 도입 및 배포, 3단계: 전체 조직 배포 및 변경 관리 등 GitHub Advanced Security 도입 및 배포의 세 단계를 보여 주는 다이어그램](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


고객들이 {% data variables.product.prodname_GH_advanced_security %}를 성공적으로 배포할 수 있도록 지원한 경험에 따르면, 대부분의 고객은 해당 단계를 수행하기를 원합니다. 회사의 요구 사항에 따라 이 접근 방식을 수정하고 일부 단계 또는 단계를 변경하거나 제거해야 할 수 있습니다.

각 단계를 실행하는 방법에 대한 자세한 안내는 “[기업에서 {% data variables.product.prodname_GH_advanced_security %} 배포](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)”를 참조하세요. 다음 섹션에서는 각 단계에 대한 대략적인 요약 정보를 제공합니다.

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} 0단계: 계획 및 시작

이 단계에서 전체적인 목표는 출시를 계획하고 준비하여 사용자, 프로세스, 기술을 갖추고 출시를 준비하는 것입니다. 또한 여러 팀에 걸친 GHAS 도입 및 사용량을 측정하는 데 사용할 성공 기준을 고려해야 합니다.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %}  1단계: 파일럿 프로젝트

GHAS 구현을 시작하려면 초기 출시를 파일럿할 몇 개의 영향력이 큰 프로젝트/팀으로 시작하는 것이 좋습니다. 이렇게 하면 회사 내의 초기 그룹이 GHAS에 익숙해지고, GHAS를 사용하고 구성하는 방법을 학습하고, 회사의 나머지 부분에 배포하기 전에 GHAS에 대한 견고한 기반을 구축할 수 있습니다.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %}  2단계: 조직 차원의 도입 및 롤아웃 준비

2단계는 이전 단계를 마무리하고 회사의 나머지 부분 전체에서 더 큰 규모의 배포를 준비하는 것입니다. 이 단계에서 조직 차원의 도입이란 파일럿 프로젝트 또는 시간이 지남에 따라 GHAS를 사용하고 채택한 후(가장 일반적인 경우) 이를 진행하기 위한 회사의 의사결정을 의미합니다. 시간이 지남에 따라 회사에서 GHAS를 도입하기로 결정한 경우 2단계는 3단계와 그 이상으로 계속 진행될 수 있습니다.

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %}  3단계: 전체 조직 롤아웃 및 변경 관리

회사가 준비를 마치면 롤아웃 계획에 따라 GHAS를 회사의 나머지 부분에 롤아웃할 수 있습니다. 이 단계에서는 GHAS를 롤아웃하는 동안 수행해야 할 수 있는 조직 차원의 변경에 대한 계획을 수립하고 팀이 현재 워크플로에 대한 변경의 필요성, 가치, 영향을 이해하도록 하는 것이 중요합니다.

## <a name="best-practices-for-a-successful-ghas-rollout"></a>성공적인 GHAS 롤아웃에 대한 모범 사례

성공적인 GHAS 롤아웃을 완료한 회사들에는 성공하데 도움이 되는 몇 가지 유사한 특성이 있습니다. 회사가 GHAS 롤아웃에 성공할 수 있도록 모범 사례를 검토하세요.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} 회사 롤아웃에 대한 명확한 목표 설정

목표를 설정하는 것은 당연해 보일 수 있지만 명확한 목표 없이 GHAS 롤아웃을 시작하는 회사들도 있습니다. 해당 회사들에서는 롤아웃 프로세스를 완료하고 회사 내에서 GHAS의 가치를 실현하는 데 필요한 조직 차원의 도입이 더 어렵습니다.

롤아웃 및 구현 계획 수립의 초기 단계에서 회사 내부에 GHAS에 대한 목표를 소개하고 팀에 전달합니다. 시작점이 있고 조율이 이루어지기만 하면 매우 세부적인 목표를 수립할 수도 있고 간단한 목표를 수립할 수도 있습니다. 이를 통해 회사의 롤아웃 방향을 위한 기반을 구축하고 이를 위한 계획을 수립할 수 있습니다. 목표에 대한 지원이 필요한 경우 {% data variables.product.prodname_professional_services %}는 귀사와의 경험 및 다른 고객과의 이전 협력의 경험에 따른 자문을 제공할 수 있습니다.

다음은 GHAS 롤아웃에 대한 목표의 대략적인 예시입니다.
  - **취약성 감소:** 이는 일반적인 목표일 발생할 수도 있고, GHAS와 같은 도구를 통해 방지할 수 있었을 심각한 취약성으로 인한 피해가 최근 회사에 발생했기 때문일 수 있습니다.
  - **고위험 리포지토리 식별:** 일부 회사에서는 위험성이 가장 높은 리포지토리를 대상으로 취약성을 시정하고 위험을 줄이고자 합니다.
  -  **시정 속도 향상:** 개발자가 조사 결과를 받아들이도록 하고 취약성을 신속하게 시정하여 보안 부채의 누적을 방지함으로써 시정 속도를 향상할 수 있습니다.  
  - **규정 준수 요구 사항 충족:** 간단하게 새 규정 준수 요구 사항 또는 보다 구체적인 요구 사항을 만들 수 있습니다. 많은 의료 회사에서 PHI(Personal Health Information)의 노출을 방지하기 위해 GHAS를 사용하고 있습니다.
  - **비밀 유출 방지:** 소프트웨어 키, 고객 또는 금융 데이터 등과 같은 중요한 정보가 유출되었거나 이를 방지하려는 회사의 목표인 경우가 많습니다.
  - **종속성 관리:** 패치가 적용되지 않은 종속성으로 인한 해킹으로 피해를 입었거나 취약한 종속성을 업데이트하여 해당하는 유형의 공격을 방지하려는 기업의 목표인 경우가 많습니다.  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} 팀 간 명확한 커뮤니케이션 및 조율 체계 확립

명확한 커뮤니케이션 및 조율은 모든 프로젝트의 성공에 매우 중요하며 GHAS 롤아웃도 마찬가지입니다. GHAS 구매부터 롤아웃까지 보안 그룹과 개발 그룹 간을 비롯하여 경영진 스폰서(CISO 또는 VP)와 명확한 커뮤니케이션과 조율이 이루어지는 회사가 롤아웃에 성공할 가능성이 큽니다.

GHAS 롤아웃 과정 전체에 걸쳐 해당 그룹의 역할을 조율하는 것 외에도 주력해야 할 몇 가지 영역이 있습니다.

#### <a name="rollout-planning"></a>롤아웃 계획

GHAS를 회사에 어떻게 롤아웃하나요? 많은 아이디어와 의견이 있을 것입니다. 진행하기 전에 답변하고 조율해야 하는 질문은 다음과 같습니다.
  - 파일럿에 어떤 팀이 참여하나요?
  - 파일럿에서 주력하는 프로젝트는 무엇인가요?
  - 롤아웃에 대한 프로젝트의 우선 순위를 어떻게 지정해야 하나요?
  - 파일럿 및 그 이상의 성공을 어떻게 측정할 계획인가요?
  - 팀에 적용될 일상적인 변경은 어떤 수준인가요? 어떻게 커뮤니케이션할 계획인가요?
  - 롤아웃 계획을 회사 전체에 어떻게 전달해야 하나요?
  - 팀을 어떻게 교육할 계획인가요?
  - 초기에 검사 결과를 어떻게 관리할 계획인가요? (자세한 내용은 “결과 처리”에 대한 다음 섹션을 참조하세요.)

#### <a name="processing-results"></a>결과 처리

GHAS를 롤아웃하기 전에 시간이 지남에 따라 결과를 관리하는 방식에 대한 명확한 합의가 이루어져야 합니다. 처음에는 프로세스를 중단하지 않는 선에서 결과를 참고하는 것이 좋습니다. 회사에 전체적인 CI/CD 파이프라인이 있을 가능성이 높으므로 회사의 프로세스가 중단되지 않도록 해당 접근 방식을 사용하는 것이 좋습니다. 결과를 처리하는 데 익숙해지면 회사에 더 정확하다고 판단되는 지점으로 제한 수준을 점진적으로 올릴 수 있습니다.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %}  보안 그룹 및 개발 그룹과 함께 롤아웃 진행

많은 기업들이 보안 그룹과 함께 GHAS 롤아웃을 진행합니다. 개발 팀은 파일럿이 완료될 때까지 롤아웃 프로세스에 참여하지 않는 경우가 많습니다. 그러나 보안 팀과 개발 팀 모두와 함께 롤아웃을 진행하는 기업이 GHAS 롤아웃으로 더 큰 성공을 거두는 경향이 있습니다.

그 이유는 GHAS는 개발자 워크플로에 원활하게 통합함으로써 소프트웨어 보안에 대해 개발자 중심의 접근 방식을 취합니다. 프로세스 초기에 개발 그룹이 적극적으로 참여하지 않으면 롤아웃의 위험이 증가하고 조직 차원의 도입이 어려워집니다.

개발 그룹이 초기(구매 단계가 이상적)에 참여하는 경우 프로세스 초기에 보안 그룹과 개발 그룹을 조율할 수 있습니다. 이렇게 하면 두 그룹 간의 사일로를 제거하고, 업무 관계를 구축하고 강화하며, 사전 협의 없이 무조건 일을 전달하는 일반적인 사고방식에서 벗어날 수 있습니다. 이 모든 방식을 통해 기업이 GHAS를 활용하여 개발 프로세스 초기에 보안 문제를 해결하는 데 도움이 되는 전반적인 목표를 지원할 수 있습니다.

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} 롤아웃 팀에 참여해야 하는 주요 담당자

롤아웃 및 구현의 계획 및 실행 전반에 걸쳐 그룹의 의사가 잘 반영되도록 팀에 몇 명의 주요 담당자를 지정하는 것이 좋습니다.

롤아웃 팀에 참여해야 하는 담당자는 다음과 같습니다.
- **경영진 스폰서:** 보통 CISO, CIO, 보안 VP 또는 엔지니어링 VP입니다.
- **기술 보안 책임자:** 기술 보안 책임자는 구현 프로세스 전반에 걸쳐 보안 팀을 대표하여 기술 지원을 제공합니다.
- **기술 개발 책임자:** 기술 개발 책임자는 기술 지원을 제공하며 개발 팀과 함께 구현 작업을 주도합니다.  

롤아웃 팀에 다음 담당자도 참여하는 것이 좋습니다.
- **프로젝트 관리자:** 프로젝트 관리자가 롤아웃 프로세스 초기에 참여할수록 성공 가능성이 높아집니다.  
- **QA 엔지니어:** 회사의 QA 팀원이 참여하면 QA 팀에서 프로세스 변경 내용을 고려할 수 있습니다.

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} 핵심적인 GHAS 정보의 이해를 통한 일반적인 오해 방지

GHAS 구현 단계에서는 GHAS가 무엇이고 무엇을 할 수 있는지에 대한 핵심적인 기본 사항을 이해하여 GHAS 롤아웃에 대한 다양한 일반적인 오해가 생기지 않도록 하는 것이 중요합니다.

{% note %}

**참고:** 더욱 심층적인 GHAS 교육을 원하는 경우 {% data variables.product.prodname_professional_services %}에서는 GHAS를 준비하는 데 필요한 주제에 대한 추가 교육 및 훈련을 위한 다양한 옵션을 제공합니다. 교육은 워크샵, 데모, 부트캠프의 형식으로 제공됩니다. 주제는 GHAS 배포 및 기본적인 사용에서부터 팀 역량을 지속적으로 강화하기 위한 고급 주제에 이르기까지 다양합니다. {% data variables.product.prodname_professional_services_team %} 팀과의 협력에 대한 자세한 내용은 “[{% data variables.product.prodname_professional_services %}](#github-professional-services)”를 참조하세요.

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>팩트 1: GHAS는 코드를 보호하기 위한 조치가 필요한 보안 도구 모음입니다.

설치한 다음 잊어버리는 보안 소프트웨어가 아닙니다. GHAS가 있다는 것만으로는 코드가 보호되지 않습니다. GHAS는 일상적인 워크플로에서 다른 도구와 함께 구성, 유지 관리, 사용될 때 가치를 발휘하는 도구 모음입니다.

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>팩트 2: GHAS는 사용하기 전에 조정해야 합니다.

리포지토리에 GHAS를 설치한 후 회사의 요구 사항에 맞게 작동하도록 하기 위해 추가적인 단계를 수행해야 합니다. 특히 코드 검사를 수행하려면 결과를 미세 조정하기 위한 추가 구성이 필요합니다. 예를 들어 스캔에서 플래그를 지정할 항목을 사용자 지정하여 향후 검사에서 포착되는 항목을 조정해야 합니다. 많은 고객은 초기 검사에서 결과가 나오지 않거나 애플리케이션의 위협 모델에 따라 관련이 없는 결과가 나오며 회사의 요구 사항에 맞게 조정해야 한다는 사실을 알게 됩니다.

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>팩트 3: GHAS 도구들은 함께 사용할 때 가장 효과적이지만 가장 효과적인 AppSec 프로그램에는 추가적인 도구/작업을 사용해야 합니다.

GHAS는 모든 도구를 함께 사용할 때 가장 효과적입니다. 회사에서 침투 테스트 및 동적 검사와 같은 다른 도구 및 작업에 GHAS를 통합하면 AppSec 프로그램의 효과가 더욱 향상됩니다. 항상 여러 보호 계층을 활용하는 것이 좋습니다.

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>팩트 4: 모든 회사에서 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리를 사용하거나 필요로 하는 것은 아니지만 검사 결과를 사용자 지정하고 대상으로 지정하는 데 도움이 될 수 있습니다.

코드 검사는 세계에서 가장 강력한 코드 분석 엔진인 {% data variables.product.prodname_codeql %}에 의해 구동됩니다. 많은 회사들이 사용자 지정 쿼리를 작성할 수 있게 된다는 데 기대하고 있지만, 고객 중 상당수에는 일반적으로 커뮤니티에서 제공되는 기본 쿼리 집합 및 추가 쿼리로 충분합니다. 그러나 많은 회사에서는 결과에서 가양성 비율을 줄이거나 회사에 필요한 결과를 타겟팅하기 위한 새 쿼리를 만들 수 있도록 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리가 필요할 수 있습니다.

그러나 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리를 작성하고자 하는 경우 사용자 지정 쿼리를 살펴보기 전에 GHAS의 롤아웃 및 구현을 완료하는 것이 좋습니다.

{% note %}

**참고:** 더 심층적인 보안 사례에 대해 자세히 살펴보기 전에 회사에서 GHAS에 대한 견고한 기반을 갖추어야 합니다.

{% endnote %}

회사에서 준비를 갖추면 고객 성공 팀과 함께 충족해야 하는 요구 사항을 검토하고 회사에서 사용자 지정 쿼리에 대한 사용 사례를 확보할 수 있습니다.  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>팩트 5: {% data variables.product.prodname_codeql %}은 끌어오기 요청의 변경 내용뿐만 아니라 전체 코드 베이스를 검사합니다.

끌어오기 요청에서 코드 검사를 실행하는 경우 스캔에는 끌어오기 요청의 변경 내용뿐만 아니라 전체 코드베이스가 포함됩니다. 이 작업이 불필요해 보이는 경우도 있지만 코드베이스의 모든 상호 작용에 대해 변경 내용을 모두 검토하도록 하는 중요한 단계입니다.

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>성공적인 {% data variables.product.prodname_GH_advanced_security %} 롤아웃의 예

이제 성공적인 GHAS 롤아웃 및 구현을 위한 핵심 사항을 파악했으므로, 이번에는 고객들이 롤아웃을 성공적으로 수행한 방법에 대한 예시를 소개합니다. 회사의 상황이 다르더라도 {% data variables.product.prodname_dotcom %}를 통해 롤아웃 요구 사항에 적합한 사용자 지정 경로를 빌드할 수 있습니다.

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>중견 의료 기술 회사 롤아웃 사례  

샌프란시스코에 본사를 둔 중견 의료 기술 회사가 성공적인 GHAS 롤아웃 프로세스를 완료했습니다. 많은 수의 리포지토리를 사용해야 하는 것은 아니지만, 이 회사의 성공 비결은 롤아웃을 위해 효과적으로 구성되고 조율된 팀이 있고 프로세스 중 발생하는 문제를 해결하기 위해 {% data variables.product.prodname_dotcom %}와 협력할 수 있는 담당자가 명확히 지정되어 있었다는 점입니다. 이를 통해 2개월 이내에 롤아웃을 완료할 수 있었습니다.

또한 개발 팀이 참여하여 롤아웃이 완료된 후 끌어오기 요청 수준에서 코드 검사를 사용할 수 있었습니다.

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>중견 데이터 플랫폼 회사 롤아웃 사례

한 글로벌 데이터 플랫폼 회사는 지금까지 GHAS를 통해 큰 성공을 거두었습니다. 이 회사에서는 초기 구현을 완료했으며 현재 롤아웃 프로세스를 진행 중입니다. 이 회사는 보안 태세와 도구의 완성도가 높고 하나의 조직으로서 효과적인 조율이 이루어집니다. 이를 통해 매우 독립적으로 운영할 수 있으며 롤아웃 프로세스 전체를 빠르고 원활하게 진행할 수 있습니다.

이 회사의 강력한 조율, 효율적인 운영, 완성도 높은 보안 도구를 통해 GHAS를 신속하게 구현하고 {% data variables.product.prodname_codeql %}을 위한 견고한 기반을 구축할 수 있습니다. 구현 후에는 여러 리포지토리에서 {% data variables.product.prodname_codeql %}을 자동으로 사용할 수 있습니다.

보안 및 기술적 완성도 외에도 이 회사의 성공에 대한 또 다른 중요한 핵심은 프로젝트 담당자와 팀의 단일 연락 담당자를 두고 프로젝트를 진행하는 것입니다. 주요 담당자가 있는 것도 매우 중요하지만, 이들은 매우 수완이 풍부하고 숙련되어 있으며 롤아웃의 성공에 직접적으로 기여합니다.

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>GHAS를 롤아웃하기 위한 회사의 필수 조건

{% data variables.product.prodname_professional_services %}를 통해 회사가 해당 필수 조건을 분석하고 이해하며 GHAS 구현 프로세스를 준비할 수 있도록 추가 지원을 제공할 수 있습니다.

 ### <a name="cicd-systems-and-process"></a>CI/CD 시스템 및 프로세스

회사가 아직 CI/CD(연속 통합 또는 지속적인 업데이트) 시스템 및 프로세스에 투자하거나 구현하지 않은 경우 GHAS 진행하면서 동시에 이 단계를 수행하는 것이 좋습니다. 이는 회사에 커다란 변화가 될 수 있습니다. Microsoft와의 협력을 통해 CI/CD 시스템을 구현하기 위한 권장 사항 및 참고 자료를 제공하고 필요할 수 있는 모든 교육을 지원할 수 있습니다.

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>{% data variables.product.prodname_GH_advanced_security %}를 설치하기 위한 요구 사항

회사에서 사용하는 기술의 조합에 따라 GHAS 설치에 다양한 경로를 사용할 수 있습니다. 이 섹션에서는 귀사에서 사용해야 하는 다양한 경로를 간략하게 알아봅니다.

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

회사의 요구 사항을 지원하는 GHES({% data variables.product.prodname_ghe_server %}) 버전을 사용해야 합니다.

이전 버전의 GHES(3.0 이전)를 사용하고 있어 업그레이드하려는 경우 업그레이드를 진행하려면 몇 가지 요구 사항을 충족해야 합니다. 자세한 내용은 다음을 참조하세요.
  - “[{% data variables.product.prodname_ghe_server %} 업그레이드](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”
  - “[업그레이드 요구 사항](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)”

타사 CI/CD 시스템을 사용하고 있으며 {% data variables.product.prodname_code_scanning %}을 사용하려는 경우 {% data variables.product.prodname_codeql_cli %}를 다운로드해야 합니다. 자세한 내용은 “[CI 시스템의 CodeQL 코드 검사 정보](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)”를 참조하세요.

GHAS 롤아웃 위해 {% data variables.product.prodname_professional_services %}를 사용하는 경우 킥오프 미팅에서 해당 항목에 대해 세부적으로 논의하세요.

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

GHEC({% data variables.product.prodname_ghe_cloud %}) 고객인 경우 사용하려는 CI/CD에 따라 충족해야 하는 필수 조건이 있습니다.

CI/CD에 {% data variables.product.prodname_actions %} 사용:
- {% data variables.product.prodname_code_scanning %}을 올바르게 통합하고 활용하려면 설치를 진행하기 전에 {% data variables.product.prodname_actions %}에 대한 기본적인 이해가 있어야 합니다.

CI/CD에 타사 도구 사용:
- {% data variables.product.prodname_codeql_cli %}를 통합하려면 CI/CD 시스템뿐만 아니라 *nix 및 Windows, 특히 명령 실행 방식 및 성공/실패 신호 방식에 대한 기본적인 이해가 있어야 합니다. 타사 도구를 통합하는 방법에 대한 자세한 내용은 “[기존 CI 시스템을 통해 CodeQL 코드 검사 사용](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)”을 참조하세요.

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>GitHub와의 협력을 통한 롤아웃

GHAS 구현을 준비할 때 이 프로젝트를 성공적으로 진행하기 위해 회사에서 필요한 사항을 고려하는 것이 중요합니다. GHAS를 성공적으로 구현하려면 프로젝트를 담당하는 고객의 이해 관계자가 명확히 지정된 상태에서 프로세스 전반에 걸쳐 GitHub와 고객 간에 책임을 공유해야 합니다.

#### <a name="success-model-for-customer-and-github-responsibilities"></a>고객 및 GitHub 책임의 성공 모델

**고객 책임**
- 인프라 및 프로세스 필수 조건 충족
- 계획 및 실행을 포함한 롤아웃 및 구현 관리
- 내부 교육
- (선택 사항) {% data variables.product.prodname_codeql %} 쿼리를 GitHub Community에 기여

**GitHub 책임**

- {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}와 같은 기능의 유지 관리 및 개선
- {% data variables.product.prodname_dotcom %} 문서, {% data variables.product.prodname_dotcom %} 커뮤니티, {% data variables.product.prodname_dotcom %} 지원 서비스 제공, 유지 관리, 실행

{% note %}

**참고:**  {% data variables.product.prodname_professional_services %}를 통해 다양한 고객 책임을 지원할 수 있습니다. 자세한 내용은 “[GitHub 서비스 및 지원](#github-services-and-support)”을 참조하세요.

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>{% data variables.product.prodname_dotcom %} 서비스 및 지원

### <a name="-data-variablesproductprodname_dotcom--support"></a>{% data variables.product.prodname_dotcom %} 지원

구현 과정에서 문제가 발생하는 경우 심층 설명서에서 해결책을 찾거나 문제가 발생하면 지원할 수 있는 고도의 기술을 갖춘 엔지니어 팀인 {% data variables.product.prodname_dotcom %} 지원에 문의할 수 있습니다. 자세한 내용은 “[GitHub Enterprise 지원](https://enterprise.github.com/support)”을 참조하세요.

또한 [{% data variables.product.prodname_gcf %}](https://github.community/)를 사용해 볼 수도 있습니다.

Premium 지원 플랜을 구매한 경우 [Premium 지원 포털](https://enterprise.github.com/support)에서 티켓을 제출할 수 있습니다. 구매한 지원 플랜이 확실하지 않은 경우 영업 담당자에게 문의하거나 플랜 옵션을 검토할 수 있습니다.

Premium 지원 플랜 옵션에 대한 자세한 내용은 다음을 참조하세요.
  - “[Premium 지원](https://github.com/premium-support)” {% ifversion ghec %}
  - “[{% data variables.product.prodname_ghe_cloud %}에 대한 GitHub Premium 지원 정보](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)”{% endif %}{% ifversion ghes %}
  - “[{% data variables.product.prodname_ghe_server %}에 대한 GitHub Premium 지원 정보](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)”{% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

{% data variables.product.prodname_professional_services_team %} 팀은 귀사와의 협력을 통해 {% data variables.product.prodname_GH_advanced_security %}의 성공적인 롤아웃 및 구현을 지원합니다. 구현에 필요한 참고 자료 및 지원 유형에 대한 다양한 옵션이 제공됩니다. GHAS의 가치를 최적화하는 데 도움이 되는 교육 및 부트캠프도 있습니다.

{% data variables.product.prodname_professional_services_team %} 팀과 협력을 통해 구현하려는 경우 시스템 설계 및 인프라뿐만 아니라 GHAS로 설정하려는 리포지토리 수에 대해 생각한 다음 대화를 시작하는 것이 좋습니다. 또한 롤아웃을 통해 달성하고자 하는 목표를 구상해야 합니다.

구현은 GHAS를 사용하는 방법을 배울 수 있는 성공적인 보안 기반 여정의 한 단계일 뿐입니다. 구현을 완료하고 나면 인프라 및 코드베이스 전체에 걸쳐 롤아웃에 대해 더욱 자세히 알아보아야 합니다. 사용 가능한 모든 {% data variables.product.prodname_professional_services_team %} 옵션에 대한 자세한 내용은 영업 담당자에게 문의하세요.

처음에 추가 서비스를 옵트아웃했지만 구현을 시작할 때 추가 지원이 필요한 경우 영업 담당자에게 문의하여 구현을 지원하는 데 필요한 서비스 옵션을 논의하세요.
