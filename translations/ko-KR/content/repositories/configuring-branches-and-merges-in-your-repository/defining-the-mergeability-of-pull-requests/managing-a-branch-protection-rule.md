---
title: 분기 보호 규칙 관리
intro: 승인 검토를 요구하거나 보호된 분기에 병합된 모든 끌어오기 요청의 상태 검사를 전달하는 등 하나 이상의 분기에 특정 워크플로를 적용하는 분기 보호 규칙을 만들 수 있습니다.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: 31539b135754d92086aefbe82858b59b6bb56d7b
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101309'
---
## 분기 보호 규칙 정보

{% data reusables.repositories.branch-rules-example %}

리포지토리의 모든 현재 및 이후 분기에 대한 규칙은 `*` 와일드카드 구문을 사용하여 만들 수 있습니다. {% data variables.product.company_short %}에서 `File::FNM_PATHNAME` 플래그를 `File.fnmatch` 구문에 사용하므로 와일드카드는 디렉터리 구분 기호(`/`)와 일치하지 않습니다. 예를 들어 `qa/*`는 `qa/`로 시작하고 단일 슬래시를 포함하는 모든 분기와 일치합니다. `qa/**/*`를 사용하여 여러 슬래시를 포함할 수 있고, 규칙을 더 포괄적으로 만들기 위해 `qa**/**/*`를 사용하여 `qa` 문자열을 확장할 수 있습니다. 분기 규칙의 구문 옵션에 대한 자세한 내용은 [fnmatch 설명서](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)를 참조하세요.

동일한 분기에 영향을 주는 보호된 여러 개의 분기 규칙이 리포지토리에 있는 경우 특정 분기 이름을 포함하는 규칙의 우선 순위가 가장 높습니다. 동일한 특정 분기 이름을 참조하는 둘 이상의 보호된 분기 규칙이 있는 경우 먼저 만든 분기 규칙의 우선 순위가 더 높습니다.

특수 문자(예: `*`, `?` 또는 `]`)를 언급하는 보호 분기 규칙은 만든 순서대로 적용되므로 이러한 문자가 있는 이전 규칙의 우선 순위가 더 높습니다.

기존 분기 규칙에 대한 예외를 만들려면 특정 분기 이름에 대한 분기 규칙과 같이 우선 순위가 더 높은 새 분기 보호 규칙을 만들 수 있습니다.

사용 가능한 각 분기 보호 설정에 대한 자세한 내용은 "[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)"를 참조하세요.

## 분기 보호 규칙 만들기

분기 규칙을 만드는 경우 지정한 분기가 아직 리포지토리에 있지 않아도 됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %}
1. 필요에 따라 필요한 끌어오기 요청을 사용하도록 설정합니다.
   - "일치하는 분기 보호" 아래에서 **병합하기 전에 끌어오기 요청 필요** 를 선택합니다.
     ![끌어오기 요청 검토 제한 확인란](/assets/images/help/repository/PR-reviews-required-updated.png)
   - 필요에 따라 끌어오기 요청을 병합하기 전에 승인을 요구하려면 **승인 필요** 를 선택하고, **병합하기 전에 필요한 승인 수** 드롭다운 메뉴를 클릭한 다음, 분기에 필요한 검토 승인 수를 선택합니다.
     ![필요한 검토 승인 수를 선택할 수 있는 드롭다운 메뉴](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. 필요에 따라 필요한 끌어오기 요청 검토를 사용하도록 설정합니다.
   - "일치하는 분기 보호" 아래에서 **병합하기 전에 끌어오기 요청 검토 필요** 를 선택합니다.
     ![끌어오기 요청 검토 제한 확인란](/assets/images/help/repository/PR-reviews-required.png)
   - **필요한 검토 승인** 드롭다운 메뉴를 클릭한 다음, 분기에 필요한 검토 승인 수를 선택합니다. 
     ![필요한 검토 승인 수를 선택할 수 있는 드롭다운 메뉴](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - 필요에 따라 코드 수정 커밋이 분기로 푸시될 때 끌어오기 요청 승인 검토를 해제하려면 **새 커밋이 푸시될 때 부실 끌어오기 요청 승인 해제** 를 선택합니다.
     ![새 커밋이 푸시될 때 부실 끌어오기 요청 승인 해제 확인란](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - 필요에 따라 끌어오기 요청이 지정된 소유자가 있는 코드에 영향을 줄 때 코드 소유자의 검토를 요구하려면 **코드 소유자의 검토 필요** 를 선택합니다. 자세한 내용은 “[코드 사용자 정보](/github/creating-cloning-and-archiving-repositories/about-code-owners)”를 참조하세요.
     ![코드 소유자](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %}의 검토 필요
   - 필요에 따라 특정 행위자가 필요할 때 끌어오기 요청을 만들지 않고 코드를 분기에 푸시할 수 있도록 하려면 **지정된 행위자가 필요한 끌어오기 요청을 무시하도록 허용** 을 선택합니다. 그런 다음, 끌어오기 요청 만들기를 건너뛸 수 있는 행위자를 검색하여 선택합니다.
     ![특정 행위자가 끌어오기 요청 요구 사항을 무시하도록 허용 확인란]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - 필요에 따라 리포지토리가 조직의 일부인 경우 **끌어오기 요청 검토를 해제할 수 있는 사용자 제한** 을 선택합니다. 그런 다음, 끌어오기 요청 검토를 해제할 수 있는 행위자를 검색하여 선택합니다. 자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.
     ! [끌어오기 요청 검토를 해제할 수 있는 사용자 제한 확인란] {% ifversion integration-branch-protection-exceptions %} (/assets/images/help/repository/PR-review-required-dismissals-with-apps.png) {% else %} (/assets/images/help/repository/PR-review-required-dismissals.png) {% endif %} {% ifversion last-pusher-require-approval %}
   - 필요에 따라 병합하기 전에 마지막 사용자가 아닌 다른 사용자가 분기로 푸시하여 끌어오기 요청을 승인하도록 요구하려면 **마지막 푸셔가 아닌 다른 사용자의 승인 필요를** 선택합니다. 자세한 내용은 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-pull-request-reviews-before-merging)”를 참조하세요.
     ![마지막 푸셔](/assets/images/help/repository/last-pusher-review-required.png) {% endif %} 이외의 다른 사용자의 검토 필요
1. 필요에 따라 필요한 상태 확인을 사용하도록 설정합니다. 자세한 내용은 “[상태 검사 정보](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”를 참조하세요.
   - **병합하기 전에 상태 확인 통과 필요** 를 선택합니다.
     ![필요한 상태 확인 옵션](/assets/images/help/repository/required-status-checks.png)
   - 필요에 따라 끌어오기 요청이 보호된 분기에서 최신 코드를 사용하여 테스트되도록 하려면 **병합하기 전에 분기를 최신 상태로 유지 필요** 를 선택합니다.
     ![느슨하거나 엄격한 필요한 상태 확인란](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 상태 확인을 검색하고, 필요한 확인을 선택합니다.
     ![인터페이스에서 필요한 확인 목록을 사용하여 사용 가능한 상태 확인 검색](/assets/images/help/repository/required-statuses-list.png)
1. 필요에 따라 **병합하기 전에 대화 확인 필요** 를 선택합니다.
  ![병합하기 전에 대화 확인 필요 옵션](/assets/images/help/repository/require-conversation-resolution.png)
1. 필요에 따라 **서명된 커밋 필요** 를 선택합니다.
  ![서명된 커밋 필요 옵션](/assets/images/help/repository/require-signed-commits.png)
1. 필요에 따라 **선형 기록 필요** 를 선택합니다.
  ![필요한 선형 기록 옵션](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. 필요에 따라 병합 큐를 사용하여 끌어오기 요청을 병합하려면 **병합 큐 필요** 를 선택합니다. {% data reusables.pull_requests.merge-queue-references %} ![병합 큐 필요 옵션](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **팁:** 끌어오기 요청 병합 큐 기능은 현재 제한된 퍼블릭 베타 버전이며 변경될 수 있습니다. 조직 소유자는 [대기 목록](https://github.com/features/merge-queue/signup)에 참가하여 베타에 대한 초기 액세스 권한을 요청할 수 있습니다.

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. 필요에 따라 병합하기 전에 변경 내용을 성공적으로 배포해야 하는 환경을 선택하려면 **병합하기 전에 성공적인 배포 필요** 를 선택한 다음, 환경을 선택합니다.
   ![성공적인 배포 옵션](/assets/images/help/repository/require-successful-deployment.png) {%- endif %} {% ifversion lock-branch %} 필요
1. 필요에 따라 **분기 잠금** 을 선택하여 분기를 읽기 전용으로 만듭니다.
![분기를 잠그는 확인란의 스크린샷](/assets/images/help/repository/lock-branch.png) 
   -  필요에 따라 포크 동기화를 허용하려면 **포크 동기화 허용을** 선택합니다.
![포크 동기화](/assets/images/help/repository/lock-branch-forksync.png) 를 허용하는 확인란의 스크린샷 {%- endif %}
1. 필요에 따라, {% ifversion bypass-branch-protections %}**위의 설정을 무시하는 것을 허용하지 않음** 을 선택합니다.
![위의 설정을 무시하는 것을 허용하지 않음 확인란](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**관리자에게 위의 규칙 적용**.
![관리자에게 위의 규칙 적용 확인란](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. 필요에 따라 {% ifversion fpt or ghec %} {% data variables.product.prodname_team %} 또는 {% data variables.product.prodname_ghe_cloud %}를 사용하여 조직에서 리포지토리를 소유하고 있는 경우{% endif %} 분기 제한을 사용하도록 설정합니다.
   - **일치하는 분기에 푸시할 수 있는 사용자 제한** 을 선택합니다.
     ![분기 제한 확인란](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - 필요에 따라 일치하는 분기 만들기도 제한하려면 **일치하는 분기를 만드는 푸시 제한** 을 선택합니다.
     ![분기 만들기 제한 확인란](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - 보호된 분기로 푸시하거나 일치하는 분기를 만들 수 있는 권한이 있는 사용자, 팀 또는 앱을 검색하여 선택합니다.
     ![분기 제한 검색]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. 필요에 따라 "관리자를 포함한 모든 사용자에게 적용되는 규칙" 아래에서 **강제 푸시 허용** 을 선택합니다.
  ![강제 푸시 옵션](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %} 허용 그런 다음 분기로 강제 푸시할 수 있는 사용자를 선택합니다.
    - 관리자 권한이 있는 사용자를 포함하여 리포지토리에 대한 쓰기 권한이 있는 모든 사용자가 강제로 분기로 푸시할 수 있도록 허용하려면 **모두** 를 선택합니다.
    - 특정 행위자만 강제로 분기로 푸시할 수 있도록 허용하려면 **강제로 푸시할 수 있는 사용자 지정** 을 선택합니다. 그런 다음, 해당 행위자를 검색하여 선택합니다.
      ![강제로 푸시할 수 있는 사용자를 지정할 수 있는 옵션의 스크린샷]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    강제 푸시에 대한 자세한 내용은 "[강제 푸시 허용](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)"을 참조하세요.
1. 필요에 따라 **삭제 허용** 을 선택합니다.
  ![분기 삭제 허용 옵션](/assets/images/help/repository/allow-branch-deletions.png)
1. **만들기** 를 클릭합니다.

## 분기 보호 규칙 편집

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 편집하려는 분기 보호 규칙의 오른쪽에서 **편집** 을 클릭합니다.
  ![편집 단추](/assets/images/help/repository/edit-branch-protection-rule.png)
1. 분기 보호 규칙을 원하는 대로 변경합니다.
1. **변경 내용 저장** 을 클릭합니다.
  ![Save changes(변경 내용 저장) 단추](/assets/images/help/repository/save-branch-protection-rule.png)

## 분기 보호 규칙 삭제

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 삭제하려는 분기 보호 규칙의 오른쪽에서 **삭제** 를 클릭합니다.
    ![삭제 단추](/assets/images/help/repository/delete-branch-protection-rule.png)
