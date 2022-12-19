---
title: 분기 이름 바꾸기
intro: 리포지토리에서 분기의 이름을 변경할 수 있습니다.
permissions: 'People with write permissions to a repository can rename a branch in the repository unless it is the [default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch){% ifversion fpt or ghec or ghes > 3.3 %} or a [protected branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% endif %}. People with admin permissions can rename the default branch{% ifversion fpt or ghec or ghes > 3.3 %} and protected branches{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/renaming-a-branch
ms.openlocfilehash: 114f6c52cd30d82349c834549fd6ffa6eb3dc978
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093659'
---
## 분기 이름 바꾸기 정보

{% 데이터 variables.location.product_location %}의 리포지토리에서 분기 이름을 바꿀 수 있습니다. 분기에 대한 자세한 내용은 “[분기 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”를 참조하세요.

{% 데이터 variables.location.product_location %}에서 분기의 이름을 바꾸면 이전 분기 이름이 포함된 모든 URL이 이름이 바뀐 분기에 해당하는 URL로 자동으로 리디렉션됩니다. 분기 보호 정책도 업데이트되며 끌어오기 요청 열기(포크 포함) 및 초안 릴리스에 대한 기본 분기도 업데이트됩니다. 이름 바꾸기가 완료되면 {% data variables.product.prodname_dotcom %}에서 리포지토리의 홈페이지에 기여자에게 로컬 Git 환경을 업데이트하도록 지시하는 지침을 제공합니다.

파일 URL은 자동으로 리디렉션되지만 원시 파일 URL은 리디렉션되지 않습니다. 또한 {% data variables.product.prodname_dotcom %}은(는) 사용자가 이전 분기 이름에 대해 `git pull`을(를) 수행하는 경우 리디렉션을 수행하지 않습니다.

{% data variables.product.prodname_actions %} 워크플로는 이름 바꾸기를 따르지 않으므로 리포지토리에서 작업을 게시하면 `@{old-branch-name}`을(를) 통해 해당 작업을 사용하는 모든 사용자가 중단됩니다. 원래 콘텐츠가 포함된 새 분기를 추가하고 분기 이름이 더 이상 사용되지 않는다고 보고하고 사용자가 새 분기 이름으로 마이그레이션하도록 제안하는 다른 커밋을 추가하는 것이 좋습니다.

## 분기 이름 바꾸기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. 분기 목록의 이름을 바꿀 분기의 오른쪽에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다.
    ![이름을 바꾸려는 분기 오른쪽에 있는 연필 아이콘](/assets/images/help/branch/branch-rename-edit.png)
1. 분기의 새 이름을 입력합니다.
    ![새 분기 이름을 입력하기 위한 텍스트 필드](/assets/images/help/branch/branch-rename-type.png)
1. 로컬 환경에 대한 정보를 검토한 다음 **분기 이름 바꾸기** 를 클릭합니다.
    ![로컬 환경 정보 및 “분기 이름 바꾸기” 단추](/assets/images/help/branch/branch-rename-rename.png)

## 분기 이름이 변경된 후 로컬 복제본 업데이트

{% data variables.product.product_name %}의 리포지토리에서 분기의 이름을 바꾼 후에는 리포지토리의 로컬 복제본이 있는 모든 공동 작업자가 복제본을 업데이트해야 합니다.

컴퓨터의 리포지토리 로컬 복제본에서 다음 명령을 실행하여 기본 분기의 이름을 업데이트합니다.

```shell
$ git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
$ git fetch origin
$ git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
$ git remote set-head origin -a
```

필요에 따라 다음 명령을 실행하여 이전 분기 이름에 대한 추적 참조를 제거합니다.
```
$ git remote prune origin
```
