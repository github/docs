---
title: 분기 정보
intro: 분기를 사용하여 리포지토리의 다른 분기에 영향을 주지 않고 개발 작업을 격리합니다. 각 리포지토리에는 하나의 기본 분기가 있으며 다른 여러 분기가 있을 수 있습니다. 끌어오기 요청을 사용하여 분기를 다른 분기에 병합할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139656'
---
## 분기 정보

분기를 사용하면 리포지토리의 포함된 영역에서 기능을 개발하거나 버그를 수정하거나 새 아이디어를 안전하게 실험할 수 있습니다.

항상 기존 분기에서 분기를 만듭니다. 일반적으로 리포지토리의 기본 분기에서 새 분기를 만들 수 있습니다. 그런 다음 다른 사용자가 리포지토리에 적용하는 변경 내용과 격리된 상태로 이 새 분기에서 작업할 수 있습니다. 기능을 빌드하기 위해 만드는 분기를 일반적으로 기능 분기 또는 토픽 분기라고 합니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository/)”를 참조하세요.

분기를 사용하여 {% data variables.product.prodname_pages %} 사이트에 게시할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/articles/what-is-github-pages)”를 참조하세요.

분기를 만들거나, 끌어오기 요청을 열거나, 끌어오기 요청에서 분기를 삭제하고 복원하려면 리포지토리에 대한 쓰기 권한이 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 액세스 권한](/github/getting-started-with-github/access-permissions-on-github)”을 참조하세요.

## 기본 분기 정보

{% data reusables.branches.new-repo-default-branch %} 기본 분기는 누군가가 리포지토리를 방문할 때 {% data variables.product.prodname_dotcom %}에 표시되는 분기입니다. 또한 기본 분기는 누군가가 리포지토리를 복제할 때 Git에서 로컬로 체크 아웃하는 초기 분기이기도 합니다. {% data reusables.branches.default-branch-automatically-base-branch %}

기본적으로 {% data variables.product.product_name %}는 새 리포지토리의 기본 분기 `main`의 이름을 지정합니다.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## 분기 작업

작업에 만족하면 끌어오기 요청을 열어 현재 분기(헤드 분기)의 변경 내용을 다른 분기(베이스 분기)로 병합할 수 있습니다.  자세한 내용은 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.

끌어오기 요청이 병합되거나 닫힌 후에는 더 이상 필요하지 않으므로 헤드 분기를 삭제할 수 있습니다. 분기를 삭제하려면 리포지토리에 대한 쓰기 권한이 있어야 합니다. 열려 있는 끌어오기 요청과 직접 연결된 분기는 삭제할 수 없습니다. 자세한 내용은 “[끌어오기 요청에서 분기 삭제 및 복원](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)”을 참조하세요.

{% data reusables.pull_requests.retargeted-on-branch-deletion %} 다음 다이어그램에서 이를 보여 줍니다.

 여기서 누군가가 `main` 분기에서 `feature1`이라는 분기를 만들었고 사용자는 `feature1`에서 `feature2`라는 분기를 만들었습니다. 두 분기 모두에 대해 열려 있는 끌어오기 요청이 있습니다. 화살표는 각 끌어오기 요청에 대한 현재 베이스 분기를 나타냅니다. 이때 `feature1`은 `feature2`에 대한 베이스 분기입니다. `feature2`에 대한 끌어오기 요청이 지금 병합되면 `feature2` 분기가 `feature1`에 병합됩니다.

 ![병합-끌어오기-요청-버튼](/assets/images/help/branches/pr-retargeting-diagram1.png)

다음 다이어그램에서 누군가가 `feature1`에 대한 끌어오기 요청을 `main` 분기에 병합했으며 `feature1` 분기를 삭제했습니다. 결과적으로 {% data variables.product.prodname_dotcom %}는 `feature2`에 대한 끌어오기 요청의 대상을 자동으로 변경하여 베이스 분기가 이제 `main`이 되도록 했습니다.

 ![병합-끌어오기-요청-버튼](/assets/images/help/branches/pr-retargeting-diagram2.png)

이제 `feature2` 끌어오기 요청을 병합하면 `main` 분기에 병합됩니다.

## 보호된 분기 작업

리포지토리 관리자는 분기에서 보호를 사용하도록 설정할 수 있습니다. 보호되는 분기에서 작업하는 경우 분기를 삭제하거나 강제로 푸시할 수 없습니다. 리포지토리 관리자는 분기를 병합하기 전에 다른 여러 보호된 분기 설정을 사용하도록 설정하여 다양한 워크플로를 적용할 수 있습니다.

{% note %}

**참고:** 리포지토리 관리자인 경우 분기 보호가 “관리자 포함”으로 설정되지 않은 한 끌어오기 요청이 요구 사항을 충족하지 않더라도 분기 보호가 설정된 분기의 끌어오기 요청을 병합할 수 있습니다.

{% endnote %}

끌어오기 요청을 병합할 수 있는지 확인하려면 끌어오기 요청의 **대화** 탭 아래쪽에 있는 병합 상자를 확인합니다. 자세한 내용은 “[보호된 분기 정보](/articles/about-protected-branches)”를 참조하세요.

분기가 보호되는 경우:

- 분기를 삭제하거나 분기에 푸시를 강제 적용할 수 없습니다.
- 분기에서 필요한 상태 검사를 사용하도록 설정한 경우 필요한 모든 CI 테스트에 통과할 때까지 변경 내용을 분기에 병합할 수 없습니다. 자세한 내용은 “[상태 검사 정보](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”를 참조하세요.
- 분기에서 필요한 끌어오기 요청 검토를 사용하도록 설정한 경우 끌어오기 요청 검토 정책의 모든 요구 사항이 충족될 때까지 변경 내용을 분기에 병합할 수 없습니다. 자세한 내용은 “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”을 참조하세요.
- 코드 소유자의 필수 검토를 분기에서 사용하도록 설정했고 끌어오기 요청이 소유자가 있는 코드를 수정하는 경우 코드 소유자는 끌어오기 요청을 병합하기 전에 승인해야 합니다. 자세한 내용은 “[코드 사용자 정보](/articles/about-code-owners)”를 참조하세요.
- 분기에서 필수 커밋 서명을 사용하는 경우 서명되지 않았거나 확인되지 않은 분기에 커밋을 푸시할 수 없습니다. 자세한 내용은 “[커밋 서명 확인 정보](/articles/about-commit-signature-verification)” 및 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-signed-commits)”를 참조하세요.
- {% data variables.product.prodname_dotcom %}의 충돌 편집기를 사용하여 보호된 분기에서 만든 끌어오기 요청에 대한 충돌을 해결하는 경우 {% data variables.product.prodname_dotcom %}를 사용하면 끌어오기 요청에 대한 대체 분기를 만들어 충돌 해결을 병합할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 병합 충돌 해결](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)”을 참조하세요.

## 추가 참고 자료

- “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
- {% data variables.product.prodname_dotcom %} 용어집의 “[분기](/articles/github-glossary/#branch)”
- Git 설명서의 “[분기에 대한 설명 요약](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
