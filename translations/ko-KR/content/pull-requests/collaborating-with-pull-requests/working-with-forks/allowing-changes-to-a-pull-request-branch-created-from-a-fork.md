---
title: 포크에서 만든 끌어오기 요청 분기에 대한 변경 허용
intro: 협업 개선을 위해 개인 계정이 소유한 포크에서 만든 분기에서 커밋을 허용할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139176'
---
끌어오기 요청 작성자만이 업스트림 리포지토리 유지 관리자 또는 업스트림 리포지토리에 대한 푸시 액세스 권한이 있는 사용자에게 사용자 소유 포크에서 끌어오기 요청의 비교 분기에 커밋 권한을 부여할 수 있습니다. 업스트림 리포지토리에 대한 자세한 내용은 “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”를 참조하세요.

끌어오기 요청 작성자는 처음에 사용자 소유 포크에서 끌어오기 요청을 만들 때 또는 끌어오기 요청을 만든 후에 이러한 권한을 부여할 수 있습니다. 자세한 내용은 “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”를 참조하세요.

포크에서 끌어오기 요청을 처음 만들 때 커밋 권한을 설정할 수 있습니다. 자세한 내용은 “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”를 참조하세요. 또한 리포지토리 유지 관리자가 분기에 커밋할 수 있도록 기존 끌어오기 요청을 수정할 수 있습니다.

## 기존 끌어오기 요청에 대해 리포지토리 유지 관리자 권한 사용

1. {% data variables.product.product_name %}에서 끌어오기 요청의 업스트림 리포지토리의 기본 페이지로 이동합니다.
2. 업스트림 리포지토리 이름에서 {% octicon "git-pull-request" aria-label="The pull request icon" %} **끌어오기 요청** 을 클릭합니다.
![이슈 및 끌어오기 요청 탭 선택](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. 끌어오기 요청 목록에서, 커밋을 허용하려는 끌어오기 요청으로 이동합니다.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## 추가 참고 자료

- “[포크에서 만든 끌어오기 요청 분기에 변경 내용 커밋](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)”
