---
title: 워크플로 아티팩트 제거
intro: '{% data variables.product.product_name %}에서 만료되기 전에 아티팩트 삭제를 통해 사용된 {% data variables.product.prodname_actions %} 스토리지를 회수할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199804'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 아티팩트 삭제

{% warning %}

**경고:** 아티팩트를 삭제하면 복원할 수 없습니다.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. **아티팩트** 아래에서 제거하려는 아티팩트 옆에 있는 {% octicon "trash" aria-label="The trash icon" %} 아이콘을 클릭합니다.
    
    ![아티팩트 삭제 드롭다운 메뉴](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## 아티팩트 보존 기간 설정

아티팩트 및 로그의 보존 기간은 리포지토리, 조직 및 엔터프라이즈 수준에서 구성할 수 있습니다. 자세한 내용은 {% ifversion fpt or ghec or ghes %}“[사용량 제한, 청구 및 관리](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”를 참조하세요.{% elsif ghae %}”[리포지토리의 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”, “[조직 내 아티팩트 및 로그의 {% data variables.product.prodname_actions %}에 대한 보존 기간 구성](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)” 또는 “[엔터프라이즈의 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).”{% endif %}

워크플로의 `actions/upload-artifact` 작업을 사용하여 개별 아티팩트의 사용자 지정 보존 기간을 정의할 수도 있습니다. 자세한 내용은 “[워크플로 데이터를 아티팩트로 저장](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)”을 참조하세요.

## 아티팩트 만료 날짜 찾기

API를 사용하여 아티팩트가 삭제되도록 예약된 날짜를 확인할 수 있습니다. 자세한 내용은 “[리포지토리의 아티팩트 나열](/rest/reference/actions#artifacts)”에서 반환되는 `expires_at` 값을 참조하세요.
