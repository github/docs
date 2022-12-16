---
title: 전달된 포트의 표시 유형 제한
shortTitle: Restrict port visibility
intro: 사용자가 조직의 codespace에서 포트를 전달할 때 선택할 수 있는 표시 유형 옵션에 대한 제약 조건을 설정할 수 있습니다.
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158975'
---
## 개요

일반적으로 codespace 내에서 비공개로(자신에게만), 조직의 멤버에게 또는 공개적으로(URL을 가진 모든 사람에게) 포트를 전달할 수 있습니다. 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

조직 소유자는 포트를 전달할 때 사용자가 설정할 수 있는 표시 유형 옵션에 대한 제약 조건을 구성할 수 있습니다. 예를 들어 보안상의 이유로 퍼블릭 포트 전달을 허용하지 않을 수 있습니다. 조직의 {% data variables.product.prodname_github_codespaces %} 설정에서 하나 이상의 정책을 정의하여 이 작업을 수행합니다.

### 포트 표시 유형 제약 조건을 설정할 때의 동작

정의한 정책을 더 이상 준수하지 않는 기존 codespace가 있는 경우 이러한 codespace는 중지되거나 시간이 초과될 때까지 계속 작동합니다. 사용자가 codespace를 다시 시작하면 정책 제약 조건이 적용됩니다.

{% note %}

**참고**: {% data variables.product.prodname_github_codespaces %}에서 프라이빗 포트 전달이 필요한 경우(예: 포트 22에서 SSH를 전달하기 위해) 설계대로 계속 작동하기 때문에 프라이빗 포트 전달을 사용하지 않도록 설정할 수 없습니다.

{% endnote %}

### 조직 전체 및 리포지토리별 정책 설정

정책을 만들 때 조직의 모든 리포지토리에 적용할지 또는 지정된 리포지토리에만 적용할지 선택합니다. 조직 전체 정책을 설정하는 경우 개별 리포지토리에 대해 설정한 정책은 조직 수준에서 설정된 제한에 속해야 합니다. 정책을 추가하면 표시 유형 옵션이 늘어나거나, 줄어들거나, 제한될 수 있습니다.

예를 들어 표시 유형 옵션을 조직으로만 제한하는 조직 전체 정책을 만들 수 있습니다. 그런 다음, 리포지토리 A에 대해 퍼블릭 및 조직 표시 유형을 모두 허용하지 않는 정책을 설정할 수 있습니다. 그러면 이 리포지토리에 프라이빗 포트 전달만 사용할 수 있습니다. 리포지토리 A에 대해 퍼블릭 및 조직 표시 유형을 모두 허용하는 정책을 설정하면 조직 전체 정책이 퍼블릭 표시 유형을 허용하지 않기 때문에 조직 표시 유형만 적용됩니다.

조직 전체 정책을 추가하는 경우 조직의 모든 리포지토리에 사용할 수 있는 가장 관대한 표시 유형 옵션으로 설정해야 합니다. 그런 다음, 리포지토리별 정책을 추가하여 선택을 추가로 제한할 수 있습니다.

{% data reusables.codespaces.codespaces-org-policies-note %}

## 포트 표시 유형 옵션을 제한하는 정책 추가

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **제약 조건 추가** 를 클릭하고 **포트 표시 유형** 을 선택합니다.

   !['제약 조건 추가' 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 제약 조건을 편집합니다.

   ![제약 조건을 편집하기 위한 연필 아이콘의 스크린샷](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. 사용할 수 없도록 지정하려는 포트 표시 유형 옵션(**조직** 또는 **퍼블릭**)을 선택 취소합니다.

   ![포트 표시 유형 옵션 지우기 스크린샷](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 정책에 다른 제약 조건을 추가하려면 **제약 조건 추가** 를 클릭하고 다른 제약 조건을 선택합니다. 다른 제약 조건에 대한 자세한 내용은 다음을 참조하세요.
   * “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * "[codespaces에 대한 기본 이미지 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[codespaces에 대한 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. 정책에 제약 조건 추가를 완료한 후 **저장** 을 클릭합니다.

정책은 조직에 청구할 수 있는 모든 새 codespace에 적용됩니다. 포트 표시 유형 제약 조건은 다음에 시작할 때 기존 codespace에도 적용됩니다.

## 정책 편집

기존 정책을 편집할 수 있습니다. 예를 들어 정책에서 제약 조건을 추가하거나 제거할 수 있습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 "[포트 표시 유형 옵션을 제한하는 정책 추가](#adding-a-policy-to-limit-the-port-visibility-options)"를 참조하세요.
1. 편집할 정책의 이름을 클릭합니다.
1. "포트 표시 유형" 제약 조건 옆에 있는 연필 아이콘({% octicon "pencil" aria-label="The edit icon" %})을 클릭합니다.
1. 필요에 따라 변경한 다음 **저장** 을 클릭합니다.

## 정책 삭제 

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 "[포트 표시 유형 옵션을 제한하는 정책 추가](#adding-a-policy-to-limit-the-port-visibility-options)"를 참조하세요.
1. 삭제하려는 정책 오른쪽에 있는 삭제 단추를 클릭합니다.

   ![정책에 대한 삭제 단추의 스크린샷](/assets/images/help/codespaces/policy-delete.png)
