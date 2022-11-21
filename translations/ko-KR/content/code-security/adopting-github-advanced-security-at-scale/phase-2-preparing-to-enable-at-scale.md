---
title: '2단계: 대규모로 사용하도록 준비'
intro: '이 단계에서는 개발자를 준비하고 리포지토리에 대한 데이터를 수집하여 팀이 준비되고 파일럿 프로그램에 필요한 모든 것을 갖출 수 있도록 하고 {% data variables.product.prodname_code_scanning %} 및 {% data variables.product.prodname_secret_scanning %}를 배포합니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109714'
---
{% note %}

이 문서는 대규모 {% data variables.product.prodname_GH_advanced_security %}를 채택하는 시리즈의 일부입니다. 이 시리즈의 이전 문서는 “[1단계: 롤아웃 전략 및 목표 조정](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)”을 참조하세요.

{% endnote %}

## {% data variables.product.prodname_code_scanning %} 사용 준비
 
{% data reusables.code-scanning.about-code-scanning %}에 대한 자세한 내용은 “[코드 검사 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”를 참조하세요.

수백 개의 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 롤아웃하는 것은 어려울 수 있습니다. 특히 비효율적인 경우 그렇습니다. 다음 단계를 수행하면 효율적이고 성공적으로 롤아웃할 수 있습니다. 준비의 일환으로 팀과 협력하고, 자동화를 사용하여 리포지토리에 대한 데이터를 수집하고, {% data variables.product.prodname_code_scanning %}를 사용하도록 설정합니다. 

### 팀에서 {% data variables.product.prodname_code_scanning %} 준비

먼저 팀은 {% data variables.product.prodname_code_scanning %} 사용을 준비합니다. {% data variables.product.prodname_code_scanning %}를 사용하는 팀이 많을수록 더 많은 데이터에 대해 수정 계획을 세우고 롤아웃 진행 상황을 모니터링해야 합니다. 이 단계에서는 API를 활용 및 내부 사용 이벤트 실행에 집중합니다.

핵심 초점은 많은 팀이 {% data variables.product.prodname_code_scanning %}를 사용할 수 있도록 준비하는 것입니다. 팀이 적절하게 수정하도록 할 수도 있지만 이 단계에서는 문제 해결보다 {% data variables.product.prodname_code_scanning %}의 사용 및 사용 우선 순위를 지정하는 것이 좋습니다.
  
### 리포지토리에 대한 정보 수집

리포지토리에 사용되는 다양한 프로그래밍 언어에 대한 정보를 프로그래밍 방식으로 수집하고 해당 데이터를 사용하여 동일한 언어를 사용하는 모든 리포지토리에서 {% data variables.product.product_name %}의 GraphQL API를 사용하여 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정할 수 있습니다.

{% note %}

**참고:** 이 문서에 설명된 GraphQL 쿼리를 수동으로 실행하지 않고 이 데이터를 수집하려면 공개적으로 사용할 수 있는 도구를 사용할 수 있습니다. 자세한 내용은 “[ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)” 리포지토리를 참조하세요.

{% endnote %}

엔터프라이즈의 여러 조직에 속한 리포지토리에서 정보를 수집하려는 경우 아래 쿼리를 사용하여 조직의 이름을 가져온 다음 리포지토리 쿼리로 제공할 수 있습니다. OCTO-ENTERPRISE를 사용자의 엔터프라이즈 이름으로 바꿉니다.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

조직 수준에서 언어별로 리포지토리를 정렬하여 어떤 언어를 사용하는 리포지토리인지 식별할 수 있습니다. 아래에서 샘플 GraphQL 쿼리를 수정하여 OCTO-ORG를 조직 이름으로 바꿀 수 있습니다.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

쿼리 수행에 대한 자세한 내용은 “[GraphQL을 사용하여 호출 형성](/graphql/guides/forming-calls-with-graphql)”을 참조하세요.

그런 다음 GraphQL 쿼리의 데이터를 테이블과 같은 읽기 가능한 형식으로 변환합니다.

| 언어                | 리포지토리 수 | 리포지토리 이름                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript(TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

이 표에서 현재 {% data variables.product.prodname_GH_advanced_security %}에서 지원되지 않는 언어를 필터링할 수 있습니다.

여러 언어의 리포지토리가 있는 경우 아래 표와 같이 GraphQL 결과의 서식을 지정할 수 있습니다. 지원되지 않는 언어를 필터링하지만 지원되는 언어가 하나 이상 있는 모든 리포지토리는 유지합니다. 이러한 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정할 수 있으며 지원되는 모든 언어가 검사됩니다.

| 언어            | 리포지토리 수 | 리포지토리 이름                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

어떤 리포지토리가 어떤 언어를 사용하는지 이해하면 3단계에서 파일럿 프로그램의 후보 리포지토리를 식별하는 데 도움이 되며, 5단계에서 한 번에 하나의 언어인 모든 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 사용하도록 준비합니다.

{% ifversion ghes %}

### “어플라이언스에 대해 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정”

파일럿 프로그램을 진행하고 엔터프라이즈 전체에서 {% data variables.product.prodname_code_scanning %}를 롤아웃하려면 먼저 어플라이언스에 대해 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[어플라이언스 코드 검사 구성](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)”을 참조하세요.

{% endif %}

## {% data variables.product.prodname_secret_scanning %}를 사용하도록 준비

프로젝트에서 외부 서비스와 통신하는 경우 토큰 또는 프라이빗 키를 인증에 사용할 수 있습니다. 비밀을 리포지토리에 체크 인하면 리포지토리에 대한 읽기 액세스 권한이 있는 모든 사용자가 비밀을 사용하여 해당 권한으로 외부 서비스에 액세스할 수 있습니다. {% data variables.product.prodname_secret_scanning_caps %}는 {% data variables.product.prodname_dotcom %} 리포지토리에 있는 모든 분기에서 전체 Git 기록을 검색하여 비밀을 확인하고 {% ifversion secret-scanning-push-protection %}경고하거나 비밀이 포함된 푸시를 차단합니다{% endif %}. 자세한 내용은 “[비밀 검사 정보](/code-security/secret-scanning/about-secret-scanning)”를 참조하세요.

### {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정할 때 고려 사항

{% data variables.product.product_name %}의 {% data variables.product.prodname_secret_scanning %} 기능은 프로그래밍 언어 또는 리포지토리에 대한 특정 구성이 필요하지 않으므로 {% data variables.product.prodname_code_scanning %}와 약간 다르며, 전반적으로 시작하기 위한 구성이 적습니다. 즉, 조직 수준에서 {% data variables.product.prodname_secret_scanning %}를 쉽게 사용할 수 있지만 조직 수준에서 **모두 사용** 을 클릭하고 **모든 새 리포지토리에 대해 자동으로 {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정** 하는 옵션을 선택하면 주의해야 할 몇 가지 다운스트림 효과가 있습니다.

- **라이선스 사용량**  
  모든 리포지토리에 {% data variables.product.prodname_secret_scanning %}를(를) 사용하도록 설정하면 아무도 코드 검사를 사용하지 않더라도 모든 라이선스가 사용됩니다. 조직에서 활성 개발자 수를 늘리려는 경우가 아니면 문제 없습니다. 앞으로 몇 달 동안 활성 개발자 수가 증가할 가능성이 있는 경우 라이선스 제한을 초과하면 새로 만든 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %}를 사용할 수 없습니다.
- **검색된 비밀의 초기 대용량**  
  대규모 조직에서 {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정하는 경우 많은 수의 비밀을 찾을 수 있도록 준비해야 합니다. 때때로 이것은 조직에 충격으로 다가와서 경종을 울립니다. 모든 리포지토리에서 {% data variables.product.prodname_secret_scanning %}를 한 번에 켜려면 조직 전체에서 여러 경고에 응답하는 방법을 계획합니다.

개별 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_caps %}을 사용하도록 설정할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_secret_scanning %} 구성](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)"을 참조하세요. 위에서 설명한 대로 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_caps %}을 사용하도록 설정할 수도 있습니다. 모든 리포지토리에 대해 사용하도록 설정하는 것에 대한 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

### {% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴

{% ifversion ghae %} {% note %}

**참고:** {% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴은 현재 베타 버전이며 변경될 수 있습니다.

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %}는 많은 수의 기본 패턴을 검색하지만 인프라에 고유한 비밀 형식과 같은 사용자 지정 패턴을 검색하도록 구성하거나 {% data variables.product.product_name %}의 {% data variables.product.prodname_secret_scanning %}가 현재 검색하지 않는 통합자에서 사용할 수 있습니다. 파트너 패턴에 지원되는 비밀에 대한 자세한 내용은 “[비밀 검사 패턴](/code-security/secret-scanning/secret-scanning-patterns)”을 참조하세요. 

리포지토리를 감사하고 보안 및 개발자 팀에 말할 때 나중에 {% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴을 구성하는 데 사용할 비밀 유형 목록을 작성합니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요.


{% note %}

이 시리즈의 다음 문서는 “[3단계: 파일럿 프로그램](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)”을 참조하세요.

{% endnote %}
