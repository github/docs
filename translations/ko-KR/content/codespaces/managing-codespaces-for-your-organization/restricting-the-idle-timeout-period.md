---
title: 유휴 시간 제한 기간 제한
shortTitle: Restrict timeout periods
intro: 조직에서 소유한 모든 Codespace에 대해 최대 시간 제한 기간을 설정할 수 있습니다.
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158991'
---
## 개요

기본적으로 codespace는 비활성화되고 30분 후에 시간 초과됩니다. codespace는 시간 초과되면 중지되고 더 이상 컴퓨팅 사용에 대한 요금이 발생하지 않습니다. 

{% data variables.product.prodname_dotcom %} 사용자의 개인 설정을 통해 사용자가 만든 codespace에 대한 자체 시간 제한 기간을 정의할 수 있습니다. 이는 기본 30분 기간보다 길 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”을 참조하세요.

조직 소유자는 조직이 소유한 리포지토리에 맞춰 만든 Codespace에 대해 최대 유휴 시간 제한 기간과 관련된 제약 조건을 구성할 수 있습니다. 이렇게 하면 장기간 비활성화된 후 시간 초과 상태로 남아 있는 Codespace와 연결된 비용을 제한할 수 있습니다. 조직이 소유한 모든 리포지토리의 Codespace나 특정 리포지토리의 Codespace에 대해 최대 시간 제한을 설정할 수 있습니다. 

{% note %}

**참고**: 최대 유휴 시간 제한 제약 조건은 조직이 소유한 codespace에만 적용됩니다.

{% endnote %}

{% data variables.product.prodname_github_codespaces %} 컴퓨팅 사용량의 가격에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 요금 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”를 참조하세요.

### 최대 유휴 시간 제한 제약 조건을 설정할 경우 동작

개인 설정에서 기본 유휴 시간 제한을 90분으로 설정한 다음, 최대 유휴 시간 제한 제약 조건이 60분인 리포지토리에 대한 codespace를 시작하면 codespace는 비활성화되고 60분 후에 시간이 초과됩니다. codespace 만들기가 완료되면 이를 설명하는 메시지가 표시됩니다.

> 이 codespace의 유휴 시간 제한은 조직의 정책에 따라 60분으로 설정됩니다.

### 조직 전체 및 리포지토리별 정책 설정

정책을 만들 때 조직의 모든 리포지토리에 적용할지 아니면 지정된 리포지토리에만 적용할지 선택합니다. 시간 제한 제약 조건을 사용하여 조직 전체 정책을 만드는 경우 특정 리포지토리를 대상으로 하는 정책의 시간 제한 제약 조건은 전체 조직에 대해 구성된 제한 내에 있어야 합니다. 지정된 리포지토리를 대상으로 하는 정책인 조직 전체 정책에서 또는 누군가의 개인 설정에서 가장 짧은 시간 제한 기간이 적용됩니다.

시간 제한 제약 조건이 있는 조직 전체 정책을 추가하는 경우 시간 제한을 허용되는 가장 긴 기간으로 설정해야 합니다. 그런 다음, 조직의 특정 리포지토리에 대한 최대 시간 제한을 더 짧은 기간으로 설정하는 별도의 정책을 추가할 수 있습니다.

{% data reusables.codespaces.codespaces-org-policies-note %}

## 최대 유휴 시간 제한 기간을 설정하는 정책 추가

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **제약 조건 추가** 를 클릭하고 **최대 유휴 시간 제한** 을 선택합니다.

   !['제약 조건 추가' 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 제약 조건을 편집합니다.

   ![제약 조건을 편집하기 위한 연필 아이콘의 스크린샷](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 시간이 초과되기 전에 codespace가 비활성 상태로 유지될 수 있는 최대 시간(분)을 입력한 다음, **저장** 을 클릭합니다.

   ![최대 시간 제한(분)을 설정하는 스크린샷](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. 정책에 다른 제약 조건을 추가하려면 **제약 조건 추가** 를 클릭하고 다른 제약 조건을 선택합니다. 다른 제약 조건에 대한 자세한 내용은 다음을 참조하세요.
   * “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * "[codespaces에 대한 기본 이미지 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[전달된 포트의 표시 유형 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[codespace에 대한 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. 정책에 제약 조건 추가를 완료한 후 **저장** 을 클릭합니다.

정책은 조직에 청구할 수 있는 모든 새 codespace에 적용됩니다. 시간 제한 제약 조건은 다음에 시작할 때 기존 codespace에도 적용됩니다.

## 정책 편집

기존 정책을 편집할 수 있습니다. 예를 들어 정책에서 제약 조건을 추가하거나 제거할 수 있습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[최대 유휴 시간 제한 기간을 설정하는 정책 추가](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”를 참조하세요.
1. 편집할 정책의 이름을 클릭합니다.
1. "최대 유휴 시간 제한" 제약 조건 옆에 있는 연필 아이콘({% octicon "pencil" aria-label="The edit icon" %})을 클릭합니다.
1. 필요에 따라 변경한 다음 **저장** 을 클릭합니다.

## 정책 삭제 

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[최대 유휴 시간 제한 기간을 설정하는 정책 추가](#adding-a-policy-to-set-a-maximum-idle-timeout-period)”를 참조하세요.
1. 삭제하려는 정책 오른쪽에 있는 삭제 단추를 클릭합니다.

   ![정책에 대한 삭제 단추의 스크린샷](/assets/images/help/codespaces/policy-delete.png)
