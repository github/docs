---
title: 사용자 지정 리포지토리 역할 정보
intro: 사용자 지정 리포지토리 역할을 사용하여 조직의 리포지토리에 대한 액세스를 보다 세부적으로 제어할 수 있습니다.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: About custom roles
ms.openlocfilehash: c4e7f791b9402b45160b31aab2653bf80150ddee
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160690'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## 사용자 지정 리포지토리 역할 정보

{% data variables.product.product_name %}에 대해 리포지토리에서 끌어오기 요청을 만들거나 조직의 청구 설정을 변경하는 등의 작업을 수행하려면 사용자는 관련 계정 또는 리소스에 대한 충분히 액세스 권한이 있어야 합니다. 이러한 액세스는 권한으로 제어됩니다. 권한은 특정 작업을 수행할 수 있는 기능입니다. 예를 들어 이슈를 삭제하는 기능이 권한입니다. 역할은 개인 또는 팀에 할당할 수 있는 권한 집합입니다.

조직 내의 조직, 팀 및 리포지토리 수준에서 역할을 할당할 수 있습니다. 다양한 역할 수준에 대한 자세한 내용은 "[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"을 참조하세요.

최대 3개의 사용자 지정 리포지토리 역할을 만들어 리포지토리 수준에서 부여한 권한을 보다 세부적으로 제어할 수 있습니다. {% data reusables.organizations.about-custom-repo-roles %} 자세한 내용은 "[조직의 사용자 지정 리포지토리 역할 관리"를 참조하세요](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).

사용자 지정 역할을 만든 후에는 리포지토리에 대한 관리자 액세스 권한이 있는 모든 사용자가 개인 또는 팀에 역할을 할당할 수 있습니다. 자세한 내용은 “[조직 리포지토리에 대한 개인 액세스 관리](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)” 및 “[조직 리포지토리에 대한 팀 액세스 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”를 참조하세요.

{% ifversion custom-repo-role-api %}

REST API를 사용하여 사용자 지정 리포지토리 역할을 만들고 관리할 수도 있습니다. 자세한 내용은 “[사용자 지정 리포지토리 역할](/rest/orgs/custom-roles)”을 참조하세요.

{% else %}

REST API를 사용하여 조직에서 사용할 수 있는 사용자 지정 리포지토리 역할을 나열할 수도 있습니다. 자세한 내용은 “[사용자 지정 리포지토리 역할 API](/rest/orgs/custom-roles)”를 참조하세요.

{% endif %}

## 상속된 역할 정보

사용자 지정 리포지토리 역할을 만들 때는 먼저 미리 정의된 옵션 집합에서 상속된 역할을 선택합니다. 상속된 역할은 사용자 지정 역할에 포함된 초기 사용 권한 집합을 결정합니다. 그런 다음, 역할을 부여할 추가 권한을 선택하여 역할을 추가로 사용자 지정할 수 있습니다. 사용 가능한 사용 권한의 전체 목록은 "[사용자 지정 역할에 대한 추가 권한](#additional-permissions-for-custom-roles)"을 참조하세요.

상속된 역할에 대한 옵션은 리포지토리의 다양한 기여자 유형에 대해 표준화됩니다.

| 상속된 역할 | 설계 대상 |
|----|----|
| **읽기** | 프로젝트를 보거나 논의하려는 비코드 기여자 |
| **심사** | 쓰기 액세스 없이 문제 및 끌어오기 요청을 사전에 관리해야 하는 기여자 |
| **쓰기** | 프로젝트에 적극적으로 푸시하는 조직 구성원 및 협력자 |
| **유지 관리** | 중요하거나 파괴적인 작업에 액세스하지 않고 리포지토리를 관리해야 하는 프로젝트 관리자 |

## 사용자 지정 역할 예제

다음은 구성할 수 있는 사용자 지정 리포지토리 역할의 몇 가지 예입니다.

| 사용자 지정 리포지토리 역할 | 요약 | 상속된 역할 | 추가 권한 |
|----|----|----|----|
| 보안 엔지니어 | 코드에 기여하고 보안 파이프라인을 유지 관리할 수 있습니다. | **유지 관리** | 코드 검색 결과를 삭제합니다. |
| 계약자 | webhook 통합을 개발할 수 있습니다. | **쓰기** | webhook를 관리합니다. |
| 커뮤니티 관리자 | 코드에 기여하지 않고도 모든 커뮤니티 상호 작용을 처리할 수 있습니다. | **읽기** | - 문제를 중복 항목으로 표시 <br> - GitHub Page 설정 관리 <br> - wiki 설정 관리 <br> - 소셜 미리 보기 설정 <br> - 리포지토리 메타데이터 편집 <br> - 토론 심사 |

## 사용자 지정 역할에 대한 추가 권한

상속된 역할을 선택한 후 사용자 지정 역할에 대한 추가 권한을 선택할 수 있습니다.

상속된 역할에 아직 포함되지 않은 경우에만 추가 권한을 선택할 수 있습니다. 예를 들어 상속된 역할이 리포지토리에 대한 **쓰기** 권한을 제공하는 경우 "끌어오기 요청 닫기" 권한은 상속된 역할에 이미 포함된 상태입니다.

{% ifversion discussions %}
### 토론

- 토론 범주 만들기
- 토론 범주 편집
- 토론 범주 삭제 
- 토론 답변 표시 또는 표시 취소 
- 토론 주석 숨기기 또는 숨기기 취소 
- 문제를 토론으로 변환 

자세한 내용은 "[{% data variables.product.prodname_discussions %}](/discussions)"를 참조하세요.
{% endif %}

### 문제 및 끌어오기 요청

- 사용자 할당 또는 제거 
- 레이블 추가 또는 제거 

### 문제

- 문제 선택
- 닫힌 문제 다시 열기
- 문제 삭제
- 문제를 중복 항목으로 표시

### 끌어오기 요청

- 끌어오기 요청 닫기
- 닫힌 끌어오기 요청 다시 열기
- 끌어오기 요청 검토 요청

### 리포지토리

- 마일스톤 설정
- 위키 설정 관리 
- 프로젝트 설정 관리
- 끌어오기 요청 병합 설정 관리 
- {% data variables.product.prodname_pages %} 설정 관리("[{% data variables.product.prodname_pages %} 사이트에 대한 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)" 참조)
- webhook를 관리합니다. 
- 배포 키 관리 
- 리포지토리 메타데이터 편집 {%- ifversion ghec %}
- 상호 작용 제한 설정 {%- endif %}
- 소셜 미리 보기 설정 
- 보호된 분기에 커밋 푸시(분기 보호 규칙이 계속 적용됨)
- 보호된 태그 만들기
- 보호된 태그 삭제 {%- ifversion bypass-branch-protections %}
- 분기 보호 무시 {%- endif %}

### 보안

- {% data variables.product.prodname_code_scanning %} 결과 보기 
- {% data variables.product.prodname_code_scanning %} 결과 해제 또는 다시 열기
- {% data variables.product.prodname_code_scanning %} 결과 삭제 
- {% data variables.product.prodname_dependabot_alerts %} 보기 
- {% data variables.product.prodname_dependabot_alerts %} 해제 또는 다시 열기 
- {% data variables.product.prodname_secret_scanning %} 결과 보기 
- {% data variables.product.prodname_secret_scanning %} 결과 해제 또는 다시 열기 

## 다양한 액세스 수준의 우선 순위

팀 멤버 자격 및 조직의 기본 권한과 같은 다양한 방법을 통해 사용자에게 다른 수준의 액세스 권한이 부여되면 가장 높은 액세스 권한에 따라 다른 사용자의 액세스 권한이 재정의됩니다. 예를 들어 조직 소유자가 조직 멤버에게 "읽기" 상속된 역할을 사용하는 사용자 지정 역할을 제공한 다음, 조직 소유자가 조직의 기본 권한을 "쓰기"로 설정하는 경우 이 사용자 지정 역할에는 사용자 지정 역할에 포함된 추가 권한과 함께 쓰기 액세스 권한이 부여됩니다.

{% data reusables.organizations.mixed-roles-warning %}

액세스 권한 충돌을 해결하려면 조직의 기본 권한 또는 팀의 액세스를 조정하거나 사용자 지정 역할을 편집할 수 있습니다. 자세한 내용은 다음을 참조하세요.
  - "[조직에 대한 기본 권한 설정](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - “[조직 리포지토리에 대한 팀 액세스 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”
  - "[리포지토리 역할 편집](#editing-a-repository-role)"
