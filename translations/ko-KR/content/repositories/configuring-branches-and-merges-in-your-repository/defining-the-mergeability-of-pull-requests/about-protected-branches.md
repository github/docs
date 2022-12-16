---
title: 보호된 분기 정보
intro: 공동 작업자가 푸시를 삭제하거나 분기로 강제 적용할 수 있는지 여부를 정의하는 분기 보호 규칙을 설정하여 중요한 분기를 보호할 수 있으며 상태 검사 또는 선형 커밋 기록 전달과 같은 분기에 대한 푸시 요구 사항을 설정할 수 있습니다.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 8ec8ac1b43eacc64f44cf785f66a370466bbae8b
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111571'
---
## 분기 보호 규칙 정보

분기 보호 규칙을 만들면 협력자가 분기에 끌어오기 요청 병합을 포함하여 리포지토리의 분기에 대한 변경 내용을 푸시하기 전에 특정 워크플로 또는 요구 사항을 적용할 수 있습니다.

기본적으로 각 분기 보호 규칙은 일치하는 분기에 대한 강제 푸시를 사용하지 않도록 설정하고 일치하는 분기가 삭제되지 않도록 합니다. 필요에 따라 이 제한을 사용하지 않도록 설정하고 추가 분기 보호 설정을 사용하도록 설정할 수 있습니다.

{% ifversion bypass-branch-protections %} 기본적으로 분기 보호 규칙의 제한 사항은 리포지토리에 대한 관리자 권한이 있는 사람이나 “분기 보호 무시” 권한이 있는 사용자 지정 역할에 적용되지 않습니다. 필요에 따라 “분기 보호 무시” 권한이 있는 관리자 및 역할에 제한을 적용할 수도 있습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
{% else %} 기본적으로 리포지토리에 대한 관리자 권한이 있는 사용자에게는 분기 보호 규칙의 제한이 적용되지 않습니다. 필요에 따라 관리자도 포함하도록 선택할 수 있습니다.{% endif %}

{% data reusables.repositories.branch-rules-example %} 분기 이름 패턴에 대한 자세한 내용은 "[분기 보호 규칙 관리](/github/administering-a-repository/managing-a-branch-protection-rule)"를 참조하세요.

{% data reusables.pull_requests.you-can-auto-merge %}

## 분기 보호 설정 정보

각 분기 보호 규칙에 대해 다음 설정을 사용하거나 사용하지 않도록 지정할 수 있습니다.
- [병합 전 끌어오기 요청 검토 필요](#require-pull-request-reviews-before-merging)
- [병합 전 상태 검사 필요](#require-status-checks-before-merging)
- [병합 전 대화 확인 필요](#require-conversation-resolution-before-merging)
- [서명된 커밋 필요](#require-signed-commits)
- [선형 기록 필요](#require-linear-history) {% ifversion fpt or ghec %}
- [병합 큐 필요](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- {%- endif %} {%- ifversion lock-branch %}를 [병합하기 전에 배포가 성공하도록 요구](#require-deployments-to-succeed-before-merging)
- [분기 잠금](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [위의 설정 무시를 허용하지 않음](#do-not-allow-bypassing-the-above-settings){% else %}- [관리자 포함](#include-administrators){% endif %}
- [일치하는 분기에 푸시할 수 있는 사용자 제한](#restrict-who-can-push-to-matching-branches)
- [강제 푸시 허용](#allow-force-pushes)
- [삭제 허용](#allow-deletions)

분기 보호를 설정하는 방법에 대한 자세한 내용은 "[분기 보호 규칙 관리](/github/administering-a-repository/managing-a-branch-protection-rule)"를 참조하세요.

### 병합 전 끌어오기 요청 검토 필요

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

필요한 검토를 사용하도록 설정하면 협력자는 쓰기 권한이 있는 검토자가 필요한 인원수만큼 승인한 끌어오기 요청을 통해서만 보호된 분기에 대한 변경 내용을 푸시할 수 있습니다.

관리자 권한이 있는 사용자가 검토에서 **변경 요청** 옵션을 선택하는 경우 끌어오기 요청을 먼저 승인해야 병합할 수 있습니다. 끌어오기 요청의 변경을 요청하는 검토자를 사용할 수 없는 경우 리포지토리에 대한 쓰기 권한이 있는 모든 사용자가 차단하는 검토를 해제할 수 있습니다.

{% data reusables.repositories.review-policy-overlapping-commits %}

검토가 보류 중이거나 거부된 끌어오기 요청을 보호된 분기에 병합하려고 하는 협력자는 오류 메시지를 받게 됩니다.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

필요에 따라 커밋이 푸시될 때 부실 끌어오기 요청 승인을 해제하도록 선택할 수 있습니다. 코드를 수정하는 커밋을 승인된 끌어오기 요청에 푸시하면 승인이 해제되고 끌어오기 요청을 병합할 수 없습니다. 협력자가 기본 분기를 끌어오기 요청의 분기에 병합하는 경우와 같이 코드를 수정하지 않는 커밋을 푸시하는 경우에는 적용되지 않습니다. 기본 분기에 대한 자세한 내용은 "[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"를 참조하세요.

필요에 따라 끌어오기 요청 검토를 해제하는 기능을 특정 사용자 또는 팀으로 제한할 수 있습니다. 자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.

필요에 따라 코드 소유자의 검토를 요구할 수 있습니다. 이렇게 하면 코드 소유자가 있는 코드에 영향을 주는 끌어오기 요청은 해당 코드 소유자가 먼저 승인해야 보호된 분기에 병합할 수 있습니다.

{% ifversion last-pusher-require-approval %} 필요에 따라 끌어오기 요청을 병합하기 전에 마지막 사람이 아닌 다른 사람의 승인이 분기에 푸시되도록 요구할 수 있습니다. 이렇게 하면 둘 이상의 사용자가 보호된 분기에 병합되기 전에 끌어오기 요청을 최종 상태로 볼 수 있습니다. 이 기능을 사용하도록 설정하면 변경 내용을 푸시하는 최신 사용자는 필요한 승인 분기 보호에 관계없이 승인이 필요합니다. 끌어오기 요청을 이미 검토한 사용자는 이 요구 사항을 충족하기 위해 가장 최근의 푸시 후에 다시 프로비전할 수 있습니다.
{% endif %}

### 병합 전 상태 검사 필요

필수 상태 검사는 협력자가 보호된 분기를 변경하기 전에 필요한 모든 CI 테스트가 통과되었는지 확인합니다. 필수 상태 검사는 검사 또는 상태일 수 있습니다. 자세한 내용은 “[상태 검사 정보](/github/collaborating-with-issues-and-pull-requests/about-status-checks)”를 참조하세요.

필요한 상태 검사를 사용하도록 설정하려면 커밋 상태 API를 사용하도록 리포지토리를 구성해야 합니다. 자세한 내용은 REST API 설명서의 "[커밋 상태](/rest/commits/statuses)"를 참조하세요.

필수 상태 검사를 사용하도록 설정한 후에는 협력자가 변경 내용을 보호된 분기에 병합하기 전에 모든 필수 상태 검사를 통과해야 합니다. 모든 필수 상태 검사가 통과되면 커밋을 다른 분기로 푸시한 다음 병합하거나 보호된 분기에 직접 푸시해야 합니다.

리포지토리에 대한 쓰기 권한과 모든 사용자 또는 통합은 리포지토리에서 상태 확인의 상태를 설정할 수 있습니다{% ifversion fpt or ghes > 3.3 또는 ghae > 3.3 or ghec %}, 그러나 경우에 따라 특정 {% 데이터 variables.product.prodname_github_app %}에서 상태 검사를 수락할 수 있습니다. 필수 상태 검사를 추가할 때 최근에 이 검사를 예상 상태 업데이트 원본으로 설정한 앱을 선택할 수 있습니다. {% endif %} 상태가 다른 사용자 또는 통합에 의해 설정된 경우 병합이 허용되지 않습니다. "모든 원본"을 선택하면 병합 상자에 나열된 각 상태의 작성자를 수동으로 확인할 수 있습니다.

필수 상태 검사를 "loose" 또는 "strict"로 설정할 수 있습니다. 선택한 필수 상태 검사의 유형은 분기를 병합하기 전에 기본 분기의 최신 상태로 업데이트해야 하는지 여부를 결정합니다.

| 필수 상태 검사 유형 | 설정 | 병합 요구 사항 | 고려 사항 |
| --- | --- | --- | --- |
| **Strict** | **병합 전 분기 업데이트 필요** 확인란을 선택합니다. | 분기를 병합하기 전에 **반드시** 기본 분기의 최신 상태로 업데이트해야 합니다. | 이는 필수 상태 검사의 기본 동작입니다. 다른 협력자가 끌어오기 요청을 보호된 기본 분기에 병합한 후 헤드 분기를 최신 상태로 만들어야 하므로 더 많은 빌드가 필요할 수 있습니다.|
| **Loose** | **병합 전 분기 업데이트 필요** 확인란을 선택하지 **않습니다**. | 분기를 병합하기 전에 기본 분기의 최신 상태로 업데이트할 필요가 **없습니다**. | 다른 협력자가 끌어오기 요청을 병합한 후 헤드 분기를 최신 상태로 만들 필요가 없으므로 필요한 빌드 수가 줄어듭니다. 기본 분기와 호환되지 않는 변경 내용이 있는 경우 분기를 병합한 후 상태 검사가 실패할 수 있습니다. |
| **사용 안 함** | **병합 전 상태 확인 통과 필요** 확인란을 선택하지 **않습니다**. | 분기에 병합 제한이 없습니다. | 필수 상태 검사를 사용하도록 설정하지 않은 경우 협력자는 기본 분기의 최신 상태인지 관계없이 언제든지 분기를 병합할 수 있습니다. 이렇게 하면 호환되지 않는 변경이 발생할 가능성이 증가합니다.

문제 해결 정보는 "[필수 상태 검사 문제 해결](/github/administering-a-repository/troubleshooting-required-status-checks)"을 참조하세요.

### 병합 전 대화 확인 필요

끌어오기 요청을 보호된 분기에 병합하기 전에 댓글을 모두 확인해야 합니다. 이렇게 하면 병합하기 전에 모든 댓글이 처리 또는 확인됩니다.

### 서명된 커밋 필요

분기에서 필수 커밋 서명을 사용하도록 설정하면 기여자 {% ifversion fpt or ghec %}와 봇{% endif %}은 서명되고 확인된 커밋만 분기에 푸시할 수 있습니다. 자세한 내용은 “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)”를 참조하세요.

{% note %}

{% ifversion fpt or ghec %} **참고:** 

* 커밋이 항상 서명됨을 나타내는 경계 모드를 사용하도록 설정한 경우 {% data variables.product.prodname_dotcom %}가 "부분적으로 확인됨"으로 식별하는 모든 커밋은 서명된 커밋이 필요한 분기에서 허용됩니다. 경계 모드에 대한 자세한 내용은 "[모든 커밋에 대한 확인 상태 표시](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)"를 참조하세요.
* 협력자가 커밋 서명이 필요한 분기에 서명되지 않은 커밋을 푸시하는 경우 협력자는 확인된 서명을 포함하도록 커밋을 다시 지정한 다음 다시 작성된 커밋을 분기로 강제 푸시해야 합니다.

{% else %} **참고:** 협력자가 커밋 서명이 필요한 분기에 서명되지 않은 커밋을 푸시하는 경우 협력자는 확인된 서명을 포함하도록 커밋을 다시 지정한 다음 다시 작성된 커밋을 분기로 강제 푸시해야 합니다.
{% endif %}

{% endnote %}

커밋이 서명되고 확인된 경우 항상 로컬 커밋을 분기에 푸시할 수 있습니다. {% ifversion fpt or ghec %}{% data variables.product.product_name %}에 대한 끌어오기 요청을 사용하여 서명되고 확인된 커밋을 분기에 병합할 수도 있습니다. 그러나 끌어오기 요청의 작성자가 아니면 끌어오기 요청을 {% data variables.product.product_name %}의 분기로 Squash 및 병합할 수 없습니다.{% else %} 그러나 끌어오기 요청을 {% data variables.product.product_name %}의 분기에 병합할 수는 없습니다.{% endif %} 끌어오기 요청을 로컬로 {% ifversion fpt or ghec %}Squash 및 {% endif %}병합할 수 있습니다. 자세한 내용은 "[로컬에서 끌어오기 요청 체크 아웃](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)"을 참조하세요.

{% ifversion fpt or ghec %} 병합 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_dotcom %}의 병합 방법 정보](/github/administering-a-repository/about-merge-methods-on-github)"를 참조하세요.{% endif %}

### 선형 기록 필요

선형 커밋 기록을 적용하면 협력자가 병합 커밋을 분기에 푸시할 수 없습니다. 즉, 보호된 분기에 병합된 끌어오기 요청은 Squash 병합 또는 다시 지정 병합을 사용해야 합니다. 엄격한 선형 커밋 기록을 사용하면 팀이 변경 내용을 보다 쉽게 되돌릴 수 있습니다. 병합 방법에 대한 자세한 내용은 "[끌어오기 요청 병합 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)"를 참조하세요.

선형 커밋 기록을 요구하려면 먼저 리포지토리에서 Squash 병합 또는 다시 지정 병합을 허용해야 합니다. 자세한 내용은 “[끌어오기 요청 병합 구성](/github/administering-a-repository/configuring-pull-request-merges)”을 참조하세요.

{% ifversion fpt or ghec %}
### 병합 큐 필요

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### 병합 전 배포 성공 필요

분기를 병합하기 전에 변경 내용을 특정 환경에 성공적으로 배포하도록 요구할 수 있습니다. 예를 들어 이 규칙을 사용하여 변경 내용을 기본 분기에 병합하기 전에 변경 내용이 스테이징 환경에 성공적으로 배포되도록 할 수 있습니다.

{% ifversion lock-branch %}
### 분기 잠금

분기를 잠그면 분기에 커밋할 수 없습니다. 기본적으로 포크된 리포지토리는 업스트림 리포지토리에서 동기화를 지원하지 않습니다. **포크 분기** 의 다른 기여를 방지하면서 업스트림 리포지토리에서 변경 내용을 끌어오도록 포크 동기화 허용을 사용하도록 설정할 수 있습니다.
{% endif %}

{% ifversion bypass-branch-protections %}### 위의 설정을 무시하는 것을 허용하지 않음{% else %}
### 관리자 포함{% endif %}

{% ifversion bypass-branch-protections %} 기본적으로 분기 보호 규칙의 제한 사항은 리포지토리에 대한 관리자 권한이 있는 사람이나 리포지토리의 “분기 보호 무시” 권한이 있는 사용자 지정 역할에 적용되지 않습니다. 

이 설정을 사용하면 “분기 보호 무시” 권한이 있는 관리자 및 역할에도 제한을 적용할 수도 있습니다.  자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
{% else %} 기본적으로 보호된 분기 규칙은 리포지토리에 대한 관리자 권한이 있는 사용자에게는 적용되지 않습니다. 이 설정을 사용하도록 설정하여 보호된 분기 규칙에 관리자를 포함할 수 있습니다.{% endif %}

### 일치하는 분기에 푸시할 수 있는 사용자 제한

{% ifversion fpt or ghec %} 조직에서 {% data variables.product.prodname_team %} 또는 {% data variables.product.prodname_ghe_cloud %}를 사용하여 리포지토리를 소유하고 있는 경우 분기 제한을 사용하도록 설정할 수 잇습니다.
{% endif %}

분기 제한을 사용하도록 설정하면 권한이 부여된 사용자, 팀 또는 앱만 보호된 분기로 푸시할 수 있습니다. 보호된 분기의 설정에서 보호된 분기에 대한 푸시 액세스 권한이 있는 사용자, 팀 또는 앱을 보고 편집할 수 있습니다. 상태 검사가 필요한 경우 필수 검사가 실패하면 보호된 분기에 푸시할 수 있는 권한이 있는 사용자, 팀 및 앱도 분기에 병합되지 않습니다. 보호된 분기에 푸시할 수 있는 권한이 있는 사용자, 팀 및 앱도 끌어오기 요청이 필요하면 끌어오기 요청을 만들어야 합니다.

{% ifversion restrict-pushes-create-branch %} 필요에 따라 규칙과 일치하는 분기 만들기에 동일한 제한을 적용할 수 있습니다. 예를 들어 특정 팀이 단어 `release`가 포함된 모든 분기로 푸시할 수 있도록 허용하는 규칙을 만드는 경우 해당 팀의 구성원만 단어 `release`가 포함된 새 분기를 만들 수 있습니다.
{% endif %}

보호된 분기에 대한 푸시 액세스 권한만 부여하거나 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자, 팀 또는 설치된 {% data variables.product.prodname_github_apps %}에 일치하는 분기를 만들 수 있는 권한을 부여할 수 있습니다. 리포지토리에 대한 관리자 권한이 있는 사람 및 앱은 항상 보호된 분기{% ifversion restrict-pushes-create-branch %}에 푸시하거나 일치하는 분기{% endif %}를 만들 수 있습니다.

### 강제 푸시 허용

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} 기본적으로 {% data variables.product.product_name %}은(는) 보호된 모든 분기에 강제 푸시를 차단합니다. 보호된 분기에 강제 푸시를 사용하도록 설정하면 강제 푸시할 수 있는 두 그룹 중 하나를 선택할 수 있습니다.

1. 관리자 권한이 있는 사용자를 포함하여 리포지토리에 대한 쓰기 권한이 있는 모든 사용자가 분기로 강제 푸시할 수 있도록 허용합니다.
1. 특정 사용자 또는 팀만 분기로 강제 푸시할 수 있도록 허용합니다.

누군가가 분기로 강제 푸시하는 경우 강제 푸시는 다른 협력자가 자신의 작업을 기반으로 하는 커밋을 덮어쓸 수 있습니다. 병합 충돌 또는 손상된 끌어오기 요청이 발생할 수 있습니다.

{% else %} 기본적으로 {% data variables.product.product_name %}는 모든 보호된 분기에서 강제 푸시를 차단합니다. 보호된 분기에 강제 푸시를 사용하도록 설정하면 관리자 권한이 있는 사용자를 포함하여 적어도 리포지토리에 대한 쓰기 권한이 있는 사용자는 분기로 강제 푸시할 수 있습니다. 누군가가 분기로 강제 푸시하는 경우 강제 푸시는 다른 협력자가 자신의 작업을 기반으로 하는 커밋을 덮어쓸 수 있습니다. 병합 충돌 또는 손상된 끌어오기 요청이 발생할 수 있습니다.
{% endif %}

강제 푸시를 사용하도록 설정해도 다른 분기 보호 규칙은 재정의되지 않습니다. 예를 들어 분기에 선형 커밋 기록이 필요한 경우 해당 분기에 병합 커밋을 강제 푸시할 수 없습니다.

{% ifversion ghes or ghae %}사이트 관리자가 리포지토리의 모든 분기에서 강제 푸시를 차단한 경우 보호된 분기에 강제 푸시를 사용하도록 설정할 수 없습니다. 자세한 내용은 "[개인 계정 또는 조직이 소유한 리포지토리에서 강제 푸시 차단](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)"을 참조하세요.

사이트 관리자가 기본 분기에만 강제 푸시를 차단한 경우에도 다른 보호된 분기에 대해 강제 푸시를 사용하도록 설정할 수 있습니다.{% endif %}

### 삭제 허용

기본적으로 보호된 분기는 삭제할 수 없습니다. 보호된 분기 삭제를 사용하도록 설정하면 리포지토리에 대한 쓰기 권한이 있는 모든 사용자가 분기를 삭제할 수 있습니다.
