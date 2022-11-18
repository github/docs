---
title: '5단계: 코드 검사 롤아웃 및 크기 조정'
intro: '사용 가능한 API를 활용하고 이전에 수집한 리포지토리 데이터를 사용하여 엔터프라이즈 전체의 팀과 언어별로 프로그래밍 방식으로 {% data variables.product.prodname_code_scanning %}를 롤아웃할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109104'
---
{% note %}

이 문서는 대규모 {% data variables.product.prodname_GH_advanced_security %}를 채택하는 시리즈의 일부입니다. 이 시리즈의 이전 문서는 “[4단계: 내부 설명서 만들기](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)”를 참조하세요.

{% endnote %}

### 코드 검색 사용

[2단계](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)에서 수집한 데이터를 사용하여 GHAS를 사용하도록 설정한 다음 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 한 번에 하나의 언어로 설정할 수 있습니다. GHAS를 사용하도록 설정하는 단계별 프로세스는 다음과 같습니다.

1. 리포지토리에서 GHAS를 사용하도록 설정합니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.
1. 해당 언어에 대해 CodeQL을 실행하는 방법에 대한 예제를 포함하는 `codeql-analysis.yml` 파일을 사용하여 리포지토리의 기본 분기에 대한 끌어오기 요청을 만듭니다. 자세한 내용은 “[끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”를 참조하세요.
1. 리포지토리에서 문제를 만들어 끌어오기 요청이 발생한 이유를 설명합니다. 만든 문제에는 모든 사용자에게 전송된 이전 통신 링크가 포함될 수 있지만 끌어오기 요청에 적용되는 변경 내용, 팀이 수행해야 하는 다음 단계, 팀의 책임, 팀이 {% data variables.product.prodname_code_scanning %}를 어떻게 사용해야 하는지를 설명할 수도 있습니다. 자세한 내용은 “[어셈블리 만들기](/issues/tracking-your-work-with-issues/creating-an-issue)”를 참조하세요.

[ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)이라는 처음 두 단계를 완료하는 공개적으로 사용할 수 있는 도구가 있습니다. ghas-enablement tool을 의미 있는 언어 일괄 처리로 다시 실행할 수 있습니다. 예를 들어 JavaScript, TypeScript, Python 및 Go는 빌드 프로세스가 유사하므로 유사한 CodeQL 분석 파일을 사용할 수 있습니다. ghas-enablement tool은 Java, C 및 C++와 같은 언어에도 사용할 수 있지만 이러한 언어를 빌드하고 컴파일하는 방법의 다양한 특성으로 인해 더 많은 대상 CodeQL 분석 파일을 만들어야 할 수 있습니다.

{% note %}

**참고:** {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_code_scanning %}를 제어하려고 하고 [ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)을 사용하지 않는 경우 `.github/workflow` 디렉터리에 대한 API 액세스 권한이 없음에 유의하세요. 즉, 자동화를 기본으로 하는 git 클라이언트가 없으면 스크립트를 만들 수 없습니다. 해결 방법은 git 클라이언트가 있는 컴퓨터 또는 컨테이너에서 bash 스크립팅을 활용하는 것입니다. git 클라이언트는 `codeql-analysis.yml` 파일이 있는 `.github/workflows` 디렉터리로 파일을 푸시하고 끌어올 수 있습니다.

{% endnote %}

리포지토리의 기본 분기로 `codeql-analysis.yml` 파일을 푸시하는 것만이 아니라 이 부분도 중요합니다. 끌어오기 요청을 사용하면 개발 팀의 소유권이 검토 및 병합되므로 개발 팀이 {% data variables.product.prodname_code_scanning %}에 대해 알아보고 프로세스에 팀을 참여시키는 방법을 배울 수 있습니다. 

자동화에서 만든 끌어오기 요청 URL을 캡처하고 매주 모든 활동을 확인한 후 닫힌 작업을 확인해야 합니다. 몇 주 후에 끌어오기 요청이 남아 있는 경우 다른 문제를 만들거나 내부 메일을 보내는 것이 좋습니다.

### 실무 전문가 만들기

그런 다음 내부 실무 전문가(또는 SME)를 만들고 회사 회의를 준비하는 다음 지원 단계로 진행할 수 있습니다. 리포지토리에서 끌어오기 요청 및 문제를 열면 채택의 상당 부분을 해결할 수 있지만 특정 빌드 프로세스, 프레임워크 또는 라이브러리에 특정 기능 플래그를 사용하도록 설정해야 하는 일회성 사용 사례는 다루지 않습니다. 특히 Java, C 및 C++의 경우 더 많이 채택하도록 하려면 보다 개인화된 실습 접근 방식이 필요합니다.

특정 주제에 대해 정기적으로 회사 회의를 열여 더 큰 그룹과 롤아웃에 대해 교육하고 논의하는 것이 좋습니다. 이는 한 번에 한 팀으로 작업하는 것에 비해 수천 개의 리포지토리가 있는 기업에게 있어 시간적으로 훨씬 더 효율적입니다. 팀은 해당 세션과 관련된 세션에 참가할 수 있습니다. 이전에 실행된 몇 가지 예제 세션은 다음과 같습니다.

- 컨테이너의 {% data variables.product.prodname_code_scanning_capc %}
- {% data variables.product.prodname_code_scanning_capc %} 및 Java Struts
- {% data variables.product.prodname_code_scanning_capc %} 및 JSP

리포지토리 간에 다양한 언어 배포에 대해 수집한 데이터를 사용하여 대상 회의를 만들 수 있습니다.

{% note %}

이 시리즈의 다음 문서는 “[6단계: 비밀 검사 롤아웃 및 크기 조정](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)”을 참조하세요.

{% endnote %}
