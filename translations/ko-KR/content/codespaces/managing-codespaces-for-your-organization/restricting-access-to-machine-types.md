---
title: 컴퓨터 유형에 대한 액세스 제한
shortTitle: Restrict machine types
intro: 사용자가 조직에서 Codespace를 만들 때 선택할 수 있는 컴퓨터 유형에 대한 제약 조건을 설정할 수 있습니다.
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159159'
---
## 개요

일반적으로 codespace를 만들 때 codespace를 실행할 컴퓨터에 대한 사양을 선택할 수 있습니다. 자신의 요구에 가장 적합한 컴퓨터 유형을 선택할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). 

{% data variables.product.prodname_github_codespaces %}을(를) 사용하는 경우 선택한 컴퓨터 유형이 청구되는 금액에 영향을 줍니다. codespace의 컴퓨팅 비용은 선택한 컴퓨터 유형의 프로세서 코어 수에 비례합니다. 예를 들어 16코어 컴퓨터에서 1시간 동안 codespace를 사용하는 컴퓨팅 비용은 2코어 컴퓨터보다 8배 더 큽니다. 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”를 참조하세요.

조직 소유자는 사용 가능한 컴퓨터 유형에 대한 제약 조건을 구성할 수 있습니다. 예를 들어 조직의 작업에 컴퓨팅 성능 또는 스토리지 공간이 많이 필요하지 않은 경우 사용자가 선택할 수 있는 옵션 목록에서 리소스가 많은 컴퓨터를 제거할 수 있습니다. 이렇게 하려면 조직의 {% data variables.product.prodname_github_codespaces %} 설정에서 하나 이상의 정책을 정의합니다.

### 컴퓨터 유형 제약 조건을 설정할 때의 동작

정의한 정책을 더 이상 준수하지 않는 기존 codespace가 있는 경우 이러한 codespace는 중지되거나 시간이 초과될 때까지 계속 작동합니다. 사용자가 codespace를 다시 시작하려고 하면 이 조직에 대해 더 이상 선택한 컴퓨터 유형이 허용되지 않으며 대체 컴퓨터 유형을 선택하라는 메시지가 표시됩니다.

조직의 개별 리포지토리에 대한 {% data variables.product.prodname_github_codespaces %} 구성에 필요한 더 높은 사양의 컴퓨터 유형을 제거하면 해당 리포지토리에 대한 codespace를 만들 수 없습니다. 누군가가 codespace를 만들려고 하면 리포지토리의 {% data variables.product.prodname_github_codespaces %} 구성의 요구 사항을 충족하는 유효한 컴퓨터 유형이 없다는 메시지가 표시됩니다.

{% note %}

**참고**: 리포지토리에서 `devcontainer.json` 구성 파일을 편집할 수 있는 사용자는 해당 리포지토리의 codespace에 사용할 수 있는 컴퓨터에 대한 최소 사양을 설정할 수 있습니다. 자세한 내용은 “[codespace 컴퓨터에 대한 최소 사양 설정](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)”을 참조하세요.

{% endnote %}

컴퓨터 유형에 대한 정책을 설정하면 사용자가 특정 리포지토리에 대해 {% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 없는 경우 두 가지 옵션이 있습니다.

* 정책을 조정하여 영향을 받는 리포지토리에서 제한 사항을 구체적으로 제거할 수 있습니다.
* 새 정책으로 인해 더 이상 액세스할 수 없는 codespace가 있는 사용자는 codespace를 분기로 내보낼 수 있습니다. 이 분기에는 codespace의 모든 변경 내용이 포함됩니다. 그런 다음 호환되는 컴퓨터 유형을 사용하여 이 분기에서 새 codespace를 열거나 이 분기에서 로컬로 작업할 수 있습니다. 자세한 내용은 “[분기로 변경 내용 내보내기](/codespaces/troubleshooting/exporting-changes-to-a-branch)”를 참조하세요.

### 조직 전체 및 리포지토리별 정책 설정

정책을 만들 때 조직의 모든 리포지토리에 적용할지 또는 지정된 리포지토리에만 적용할지 선택합니다. 조직 전체 정책을 설정하는 경우 개별 리포지토리에 대해 설정한 정책은 조직 수준에서 설정된 제한에 속해야 합니다. 정책을 추가하면 컴퓨터를 더 많이 선택할 수 있습니다.

예를 들어 컴퓨터 유형을 2개 또는 4개 코어로 제한하는 조직 전체 정책을 만들 수 있습니다. 그런 다음 리포지토리 A에 대한 정책을 설정하여 2코어 컴퓨터로만 제한할 수 있습니다. 리포지토리 A에 대한 정책을 설정하여 2, 4 또는 8코어의 컴퓨터로 제한하면 조직 전체 정책이 8코어 컴퓨터에 대한 액세스를 차단하기 때문에 2코어 및 4코어 컴퓨터만 선택할 수 있습니다.

조직 전체 정책을 추가하는 경우 조직의 모든 리포지토리에 사용할 수 있는 가장 큰 컴퓨터 유형으로 설정해야 합니다. 그런 다음, 리포지토리별 정책을 추가하여 선택을 추가로 제한할 수 있습니다.

{% data reusables.codespaces.codespaces-org-policies-note %}

## 사용 가능한 컴퓨터 유형을 제한하는 정책 추가

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **제약 조건 추가** 를 클릭하고 **컴퓨터 유형** 을 선택합니다.

   !['제약 조건 추가' 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. {% octicon "pencil" aria-label="The edit icon" %}을(를) 클릭하여 제약 조건을 편집한 다음 사용할 수 없는 컴퓨터 유형의 선택을 취소합니다.

   ![제약 조건을 편집하기 위한 연필 아이콘의 스크린샷](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 정책에 다른 제약 조건을 추가하려면 **제약 조건 추가** 를 클릭하고 다른 제약 조건을 선택합니다. 다른 제약 조건에 대한 자세한 내용은 다음을 참조하세요.
   * "[codespaces에 대한 기본 이미지 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[전달된 포트의 표시 유형 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[codespace에 대한 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. 정책에 제약 조건 추가를 완료한 후 **저장** 을 클릭합니다.

정책은 조직에 청구할 수 있는 모든 새 codespace에 적용됩니다. 컴퓨터 유형 제약 조건은 누군가가 중지된 codespace를 다시 시작하거나 활성 codespace에 다시 연결하려고 할 때 기존 codespace에도 적용됩니다.

## 정책 편집

기존 정책을 편집할 수 있습니다. 예를 들어 정책에서 제약 조건을 추가하거나 제거할 수 있습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[사용 가능한 컴퓨터 유형을 제한하는 정책 추가](#adding-a-policy-to-limit-the-available-machine-types)”를 참조하세요.
1. 편집할 정책의 이름을 클릭합니다.
1. "컴퓨터 유형" 제약 조건 옆에 있는 연필 아이콘({% octicon "pencil" aria-label="The edit icon" %})을 클릭합니다.
1. 필요에 따라 변경한 다음 **저장** 을 클릭합니다.

## 정책 삭제 

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[사용 가능한 컴퓨터 유형을 제한하는 정책 추가](#adding-a-policy-to-limit-the-available-machine-types)”를 참조하세요.
1. 삭제하려는 정책 오른쪽에 있는 삭제 단추를 클릭합니다.

   ![정책에 대한 삭제 단추의 스크린샷](/assets/images/help/codespaces/policy-delete.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”
