---
title: Git 다시 지정 정보
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: '`git rebase` 명령을 사용하면 일련의 커밋을 쉽게 변경하여 리포지토리의 기록을 수정할 수 있습니다. 함께 커밋의 순서를 변경하고 편집하거나 스쿼시할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 83518644864623c452f7fa1e8bd4cbd42f80a7cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094371'
---
일반적으로 `git rebase`를 사용하여 다음을 수행합니다.

* 이전 커밋 메시지 편집
* 여러 커밋을 하나로 결합
* 더 이상 필요하지 않은 커밋 삭제 또는 되돌리기

{% warning %}

**경고**: 커밋 기록을 변경하면 리포지토리를 사용하는 다른 모든 사용자에게 문제가 발생할 수 있으므로 이미 리포지토리에 푸시한 경우 커밋을 다시 지정하는 것은 부적절한 사례로 간주됩니다. {% 데이터 variables.location.product_location %}을(를) 안전하게 다시 기반으로 하는 방법을 알아보려면 "[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"를 참조하세요.

{% endwarning %}

## 분기에 대한 커밋 다시 지정

다른 분기와 현재 분기 상태 간의 모든 커밋을 다시 지정하려면 셸(Windows 명령 프롬프트 또는 Mac 및 Linux용 터미널)에서 다음 명령을 입력하면 됩니다.

```shell
$ git rebase --interactive OTHER-BRANCH-NAME
```

## 특정 시점에 대한 커밋 다시 지정

현재 분기에서 마지막 몇 개의 커밋을 다시 지정하려면 셸에 다음 명령을 입력하면 됩니다.

```shell
$ git rebase --interactive HEAD~7
```

## 다시 지정하는 동안 사용할 수 있는 명령

다시 지정하는 동안 사용할 수 있는 6가지 명령은 다음과 같습니다.

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code>는 단순히 커밋이 포함됨을 의미합니다. <code>pick</code> 명령 순서를 다시 정렬하면 다시 지정 중일 때 커밋 순서가 변경됩니다. 커밋을 포함하지 않도록 선택한 경우 전체 줄을 삭제해야 합니다. </dd>

<dt><code>reword</code></dt>
<dd><code>reword</code> 명령은 <code>pick</code>와 유사하지만 사용한 후에는 다시 지정 프로세스가 일시 중지되므로 커밋 메시지를 변경할 수 있습니다. 커밋에 의해 변경된 내용은 영향을 받지 않습니다. </dd>

<dt><code>edit</code></dt>
<dd><code>edit</code>를 커밋으로 선택하면 커밋을 수정할 수 있습니다. 즉, 커밋을 완전히 추가하거나 변경할 수 있습니다. 다시 지정을 계속하기 전에 더 많은 커밋을 수행할 수도 있습니다. 이렇게 하면 큰 커밋을 더 작은 커밋으로 분할하거나 커밋에서 잘못된 변경 내용을 제거할 수 있습니다. </dd>

<dt><code>squash</code></dt>
<dd>이 명령을 사용하면 두 개 이상의 커밋을 단일 커밋으로 결합할 수 있습니다. 커밋은 위의 커밋에 밀어 넣어집니다. Git을 사용하면 두 변경 내용을 모두 설명하는 새 커밋 메시지를 작성할 수 있습니다.</dd>

<dt><code>fixup</code></dt>
<dd>이는 <code>squash</code>와 유사하지만 병합할 커밋에서는 해당 메시지가 삭제됩니다. 커밋은 단순히 위의 커밋에 병합되며, 이전 커밋의 메시지는 두 변경 내용을 모두 설명하는 데 사용됩니다.</dd>

<dt><code>exec</code></dt>
<dd>이렇게 하면 커밋에 대해 임의의 셸 명령을 실행할 수 있습니다.</dd>
</dl>

## `git rebase`를 사용하는 예제

어떤 명령을 사용하든 Git은 [기본 텍스트 편집기](/github/getting-started-with-github/associating-text-editors-with-git)를 시작하고 선택한 범위의 커밋을 자세히 표시하는 파일을 엽니다. 이 파일은 다음과 같습니다.

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

이 정보를 위에서 아래로 나누면 다음이 표시됩니다.

- 시작점과 현재 분기 상태 사이에 7개의 변경 내용이 있음을 나타내는 7개의 커밋이 나열됩니다.
- 다시 지정하도록 선택한 커밋은 가장 오래된 변경 내용(맨 위)부터 최신 변경 내용(아래쪽)의 순서대로 정렬됩니다.
- 각 줄에는 명령(기본적으로 `pick`), 커밋 SHA 및 커밋 메시지가 나열됩니다. 전체 `git rebase` 프로시저는 세 열의 조작을 중심으로 합니다. 변경한 내용은 리포지토리에 다시 지정됩니다.
- 커밋 후에 Git은 작업 중인 커밋 범위를 알려 줍니다(`41a72e6..7b36971`).
- 마지막으로 Git은 커밋을 다시 지정할 때 사용할 수 있는 명령을 알려 줍니다.

## 추가 참고 자료

- “[Git 다시 지정 사용](/articles/using-git-rebase)”
- [_Pro Git_ 북의 “Git 분기” 장](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [_Pro Git_ 북의 “대화형 다시 지정”](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- “[다시 지정으로 커밋 Squash하기](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)”
- {% data variables.product.prodname_desktop %} 설명서의 “[분기 동기화](/desktop/contributing-to-projects/syncing-your-branch)”
