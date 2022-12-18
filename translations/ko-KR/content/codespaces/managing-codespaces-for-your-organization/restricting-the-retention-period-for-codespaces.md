---
title: Codespace에 대한 보존 기간 제한
shortTitle: Restrict the retention period
intro: 조직에서 소유한 모든 Codespace에 대해 최대 보존 기간을 설정할 수 있습니다.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158983'
---
## 개요

{% data variables.product.prodname_github_codespaces %}은(는) 중지되고 정의된 일 수 동안 비활성 상태로 유지된 후 자동으로 삭제됩니다. 각 Codespace에 대한 보존 기간은 Codespace가 만들어져 변경되지 않을 때 설정됩니다. 

{% data variables.product.prodname_github_codespaces %}에 액세스할 수 있는 모든 사용자는 자신이 만든 Codespace에 대한 보존 기간을 구성할 수 있습니다. 이 기본 보존 기간에 대한 초기 설정은 30일입니다. 개별 사용자는 0~30일 범위 내에서 이 기간을 설정할 수 있습니다. 자세한 내용은 “[내 Codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”을 참조하세요. 

조직 소유자는 조직이 소유한 리포지토리에 맞춰 만들어진 Codespace에 대한 최대 보존 기간에 대한 제약 조건을 구성할 수 있습니다. 이렇게 하면 중지된 채로 자동으로 삭제될 때까지 사용되지 않은 상태로 두는 Codespace와 관련된 스토리지 비용을 제한할 수 있습니다. 스토리지 요금에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”를 참조하세요. 조직 소유의 모든 리포지토리 또는 특정 리포지토리에 대해 최대 보존 기간을 설정할 수 있습니다. 

### 조직 전체 및 리포지토리별 정책 설정

정책을 만들 때 조직의 모든 리포지토리에 적용할지 아니면 지정된 리포지토리에만 적용할지 선택합니다. Codespace 보존 제약 조건을 사용하여 조직 전체 정책을 만드는 경우 특정 리포지토리를 대상으로 하는 정책의 보존 제약 조건은 전체 조직에 대해 구성된 제한보다 짧아야 하며 그렇지 않으면 아무 효과도 없습니다. 조직 전체 정책 내 보존 기간, 지정된 리포지토리를 대상으로 하는 정책 내 보존 기간, 또는 누군가의 개인 설정 내 기본 보존 기간 가운데 가장 짧은 보존 기간이 적용됩니다.

시간 제한 제약 조건이 있는 조직 전체 정책을 추가하는 경우 시간 제한을 허용되는 최장 기간으로 설정해야 합니다. 그런 다음, 조직의 특정 리포지토리에 대한 최대 보존을 더 짧은 기간으로 설정하는 별도의 정책을 추가할 수 있습니다.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Codespace 최대 보존 기간을 설정하기 위해 정책 추가하기

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **제약 조건 추가** 를 클릭해 **보존 기간** 을 선택합니다.

   !['제약 조건 추가' 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 제약 조건을 편집합니다.

   ![제약 조건을 편집하기 위한 연필 아이콘의 스크린샷](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Codespace가 자동으로 삭제되기 전에 중지된 상태로 유지될 최대 일 수를 입력한 다음 **저장** 을 클릭합니다.

   ![보존 기간을 일 단위로 설정하는 스크린샷](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **참고**: 
   * 이 컨텍스트에서 하루는 24시간이며 Codespace가 중지된 시점에서 하루가 시작됩니다.
   * 유효한 범위는 0~30일입니다.
   * 기간을 `0`으로 설정하면 Codespace가 중지되거나 비활성으로 인해 시간 초과될 때 즉시 삭제됩니다.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. 정책에 다른 제약 조건을 추가하려면 **제약 조건 추가** 를 클릭하고 다른 제약 조건을 선택합니다. 다른 제약 조건에 대한 자세한 내용은 다음을 참조하세요.
   * “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * "[codespaces에 대한 기본 이미지 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[전달된 포트의 표시 유형 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
1. 정책에 제약 조건 추가를 완료한 후 **저장** 을 클릭합니다.

정책은 조직에 청구할 수 있는 모든 새 codespace에 적용됩니다. 보존 기간 제약 조건은 codespace 만들기에만 적용됩니다.

## 정책 편집

기존 정책을 편집할 수 있습니다. 예를 들어 정책에서 제약 조건을 추가하거나 제거할 수 있습니다.

보존 기간 제약 조건은 Codespace를 만들 때만 적용됩니다. 정책 편집은 기존 Codespace에는 영향을 주지 않습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[Codespace 최대 보존 기간을 설정하기 위한 정책 추가](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”를 참조하세요.
1. 편집할 정책의 이름을 클릭합니다.
1. "보존 기간" 제약 조건 옆에 있는 연필 아이콘({% octicon "pencil" aria-label="The edit icon" %})을 클릭합니다.
1. 필요에 따라 변경한 다음 **저장** 을 클릭합니다.

## 정책 삭제 

언제든지 정책을 삭제할 수 있습니다. 정책을 삭제해도 기존 Codespace에는 영향을 주지 않습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 “[Codespace 최대 보존 기간을 설정하기 위한 정책 추가](#adding-a-policy-to-set-a-maximum-codespace-retention-period)”를 참조하세요.
1. 삭제하려는 정책 오른쪽에 있는 삭제 단추를 클릭합니다.

   ![정책에 대한 삭제 단추의 스크린샷](/assets/images/help/codespaces/policy-delete.png)
