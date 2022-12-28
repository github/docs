---
title: 커밋이 GitHub에는 있지만 로컬 복제본에는 없음
intro: '{% data variables.product.product_name %}에서는 커밋을 볼 수 있지만 리포지토리의 로컬 복제본에는 존재하지 않는 경우가 있습니다.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 09b1fc05f21eedc4cefb60c1d876ba000758290d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094507'
---
명령줄에서 특정 커밋을 보는 데 `git show`를 사용하면 심각한 오류가 발생할 수 있습니다.

예를 들어 로컬에서 `bad object` 오류가 나타날 수 있습니다.

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

그러나 {% 데이터 variables.location.product_location %}에서 커밋을 보면 아무 문제 없이 볼 수 있습니다.

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

다음과 같은 몇 가지 가능한 설명이 있습니다.

* 로컬 리포지토리가 최신 상태가 아닙니다.
* 커밋이 포함된 분기가 삭제되었으므로 커밋이 더 이상 참조되지 않습니다.
* 누군가가 강제로 커밋을 푸시했습니다.

## 로컬 리포지토리가 최신 상태가 아님

로컬 리포지토리에 아직 커밋이 없을 수 있습니다. 원격 리포지토리에서 로컬 복제본으로 정보를 얻으려면 `git fetch`를 사용합니다.

```shell
$ git fetch REMOTE
```

이렇게 하면 체크 아웃한 파일을 변경하지 않고 원격 리포지토리에서 로컬 복제본으로 정보가 안전하게 복사됩니다. 포크한 리포지토리에서 정보를 가져오려면 `git fetch upstream`을 사용할 수 있고, 복제만 한 리포지토리에서 정보를 가져오려면 `git fetch origin`을 사용할 수 있습니다.

{% tip %}

**팁**: 자세한 내용은 [Pro Git](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) 설명서에서 [원격 관리 및 데이터 페치](https://git-scm.com/book)에 대해 읽어보세요.

{% endtip %}

## 커밋이 포함된 분기가 삭제됨

리포지토리의 공동 작업자가 커밋이 포함된 분기를 삭제했거나 분기를 강제로 푸시한 경우 누락된 커밋이 분리되었을 수 있습니다(즉, 참조에서 연결할 수 없음). 따라서 로컬 복제본으로 페치되지 않습니다.

다행히 협력자가 누락된 커밋이 있는 리포지토리의 로컬 복제본을 가지고 있는 경우 {% data variables.product.product_name %}로 다시 푸시할 수 있습니다.  로컬 분기에서 커밋을 참조하는지 확인한 다음 {% data variables.product.product_name %}에 새 분기로 푸시해야 합니다.

그 사용자가 커밋이 포함된 로컬 분기(`B`라고 부름)를 여전히 가지고 있다고 가정해 보겠습니다.  이것은 강제로 푸시되었거나 삭제된 분기를 추적 중일 수 있으며, 사용자가 아직 업데이트하지 않았습니다.  사용자는 커밋을 유지하기 위해 {% data variables.product.product_name %}에서 해당 로컬 분기를 새 분기(`recover-B`라고 부름)로 푸시할 수 있습니다.  이 예제에서는 `github.com/$account/$repository`에 대한 푸시 액세스 권한이 있는 `upstream`이라는 이름의 원격이 있다고 가정합니다.

다른 사용자가 다음을 실행합니다.

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

이제 ‘나’는 다음을 실행할 수 있습니다.

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## 강제 푸시 방지

반드시 필요한 경우가 아니면 리포지토리에 강제로 푸시하지 마세요. 두 명 이상의 사용자가 리포지토리에 푸시할 수 있는 경우 특히 그렇습니다. 누군가가 강제로 리포지토리에 푸시하는 경우 강제 푸시는 다른 사람이 자신의 작업을 기반으로 하는 커밋을 덮어쓸 수 있습니다. 강제 푸시는 리포지토리 기록을 변경하고 끌어오기 요청을 손상시킬 수 있습니다.

## 추가 참고 자료

- [_Pro Git_ 설명서의 “원격 작업”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [_Pro Git_ 설명서의 “데이터 복구”](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
