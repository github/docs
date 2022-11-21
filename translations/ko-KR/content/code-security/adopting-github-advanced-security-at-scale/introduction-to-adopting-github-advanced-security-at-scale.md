---
title: 대규모 GitHub Advanced Security 채택 소개
intro: '업계 및 GitHub 모범 사례에 따라 회사에서 대규모로 {% data variables.product.prodname_GH_advanced_security %}를 채택할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109717'
---
## 이러한 문서 정보

GHAS({% data variables.product.prodname_GH_advanced_security %})를 사용하면 CodeQL을 사용하는 비밀 검사 및 코드 검사와 같은 통합 도구를 사용하여 보다 안전한 코드를 더 빠르게 빌드할 수 있습니다. {% data variables.product.prodname_GH_advanced_security %}를 통해 사용할 수 있는 보안 기능을 이해하려면 “[ GitHub Advanced Security 정보](/get-started/learning-about-github/about-github-advanced-security)”를 참조하세요.

GHAS는 기업 내 모든 개발자들의 적극적인 참여가 필요한 도구 모음입니다. 투자 수익을 최대화하려면 GHAS를 사용, 적용 및 유지 관리하는 방법을 배워야 합니다.


업계 및 GitHub 모범 사례를 참고하여 GHAS 롤아웃에 대한 단계적 접근 방식을 수립했습니다. 대부분의 고객은 {% data variables.product.prodname_GH_advanced_security %}를 배포하는 데 도움이 되는 환경을 기반으로 이러한 단계를 따르기를 원하지만 회사의 요구 사항에 맞게 이 접근 방식을 수정해야 할 수 있습니다. 

대규모 조직에서 GHAS를 사용하도록 설정하는 것은 6가지 핵심 단계로 세분화될 수 있습니다.

1. [**롤아웃 전략 및 목표 조정**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): 성공에 대해 생각하고 회사에서 GHAS를 구현하는 방법을 조정합니다. 이 단계는 며칠 또는 일주일이 걸릴 수 있지만 나머지 롤아웃을 위한 견고한 기반을 마련합니다.
  
2. [**대규모로 사용하도록 준비**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): 개발자를 준비하고, 리포지토리에 대한 데이터를 수집하고, 다음 단계를 수행할 준비가 되었는지 확인합니다.
  
3. [**파일럿 프로그램**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): 필요에 따라 몇 가지 영향력이 높은 프로젝트 및 팀에 초기 롤아웃을 파일럿합니다. 이렇게 하면 회사의 나머지 부분에 배포하기 전에 회사 내의 초기 그룹이 GHAS에 익숙해질 수 있습니다. 
  
4. [**내부 설명서 만들기**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): GHAS 소비자를 위한 내부 설명서를 만들고 전달합니다. GHAS를 사용할 개발자, 보안 엔지니어 및 기타 사용자에게 적절한 설명서를 제공하지 않으면 롤아웃 시 값이 손실됩니다.
  
5. [ **{% data variables.product.prodname_code_scanning %}의 롤아웃 및 크기 조정**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): 사용 가능한 API를 활용하여 이전에 수집한 리포지토리 데이터를 사용하여 팀 및 언어별로 {% data variables.product.prodname_code_scanning %}를 자동으로 롤아웃합니다.
  
6. [ **{% data variables.product.prodname_secret_scanning %}의 롤아웃 및 크기 조정**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): {% data variables.product.prodname_secret_scanning %}를 롤아웃합니다. 이 롤아웃은 구성이 적으므로 {% data variables.product.prodname_code_scanning %}보다 더 간단하게 채택할 수 있습니다. 그러나 새 결과와 이전 결과를 처리하기 위한 전략을 갖는 것이 중요합니다.

## {% data variables.contact.github_support %} 및 {% data variables.product.prodname_professional_services_team %}

구현하는 동안 문제가 발생하거나 질문이 있는 경우 설명서에서 솔루션을 검색하거나 {% data variables.contact.github_support %}에 문의할 수 있습니다. 자세한 내용은 “[GitHub 지원 정보](/support/learning-about-github-support/about-github-support)”를 참조하세요.

롤아웃 프로세스 전반에서 지침을 원하는 경우 {% data variables.product.prodname_professional_services %}는 귀사와의 협력을 통해 {% data variables.product.prodname_GH_advanced_security %}의 성공적인 롤아웃 및 구현을 지원합니다. 지침 및 지원을 위한 다양한 옵션을 제공합니다. {% data variables.product.prodname_GH_advanced_security %}의 가치를 최적화하는 데 도움이 되는 교육 및 부트캠프도 있습니다.

사용 가능한 모든 전문 서비스 옵션에 대한 자세한 내용은 영업 담당자에게 문의하세요. 자세한 내용은 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

{% note %}

이 시리즈의 첫 번째 문서는 “[1단계: 롤아웃 전략 및 목표 조정](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)”을 참조하세요.

{% endnote %}
