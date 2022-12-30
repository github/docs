---
title: 원격 리포지토리에 커밋 푸시
intro: '`git push`를 사용하여 로컬 분기에서 만든 커밋을 원격 리포지토리로 푸시합니다.'
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: eddfa45f64e7caacfce0c59fe14002cbb4b5e318
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009212'
---
## `git push` 정보
`git push` 명령은 두 개의 인수를 사용합니다.

* 원격 이름(예: `origin`)
* 분기 이름(예: `main`)

예를 들면 다음과 같습니다.

```shell
git push REMOTE-NAME BRANCH-NAME
```

예를 들어 로컬 변경 내용을 온라인 리포지토리에 푸시하려면 일반적으로 `git push origin main`을 실행합니다.

## 분기 이름 바꾸기

분기의 이름을 바꾸려면 동일한 `git push` 명령을 사용하지만 새 분기의 이름이라는 인수를 하나 더 추가합니다. 예를 들면 다음과 같습니다.

```shell
git push REMOTE-NAME LOCAL-BRANCH-NAME:REMOTE-BRANCH-NAME
```

이렇게 하면 `LOCAL-BRANCH-NAME`이 `REMOTE-NAME`으로 푸시되지만 이름이 `REMOTE-BRANCH-NAME`으로 변경됩니다.

## “non-fast-forward” 오류 처리

리포지토리의 로컬 복사본이 사용자가 푸시하려는 업스트림 리포지토리와 동기화되지 않거나 “뒤에” 있는 경우 `non-fast-forward updates were rejected`라는 메시지가 표시됩니다.
즉, 로컬 변경 내용을 푸시하기 전에 업스트림 변경 내용을 검색하거나 “페치”해야 합니다.

이 오류에 대한 자세한 내용은 “[non-fast-forward 오류 처리](/github/getting-started-with-github/dealing-with-non-fast-forward-errors)”를 참조하세요.

## 태그 푸시

`git push`는 기본적으로 추가 매개 변수 없이, 원격 분기와 이름이 같은 모든 일치하는 분기를 보냅니다.

단일 태그를 푸시하려면 분기 푸시와 동일한 명령을 실행할 수 있습니다.

```shell
git push REMOTE-NAME TAG-NAME
```

모든 태그를 푸시하려면 다음 명령을 입력할 수 있습니다.

```shell
git push REMOTE-NAME --tags
```

## 원격 분기 또는 태그 삭제

분기를 삭제하는 구문은 언뜻 보기에 약간 모호합니다.

```shell
git push REMOTE-NAME:BRANCH-NAME
```

콜론 앞에 공백이 있습니다. 이 명령은 분기 이름을 바꾸기 위해 수행하는 단계와 유사합니다. 그러나 여기서는 `REMOTE-NAME`의 `BRANCH-NAME`에 _아무것도_ 푸시하지 않도록 Git에 지시합니다. 이 때문에 `git push`는 원격 리포지토리에서 분기를 삭제합니다.

## 원격 및 포크

GitHub에서 [리포지토리를 “포크”할 수 있음](https://guides.github.com/overviews/forking/)을 이미 알고 있을 수 있습니다.

소유한 리포지토리를 복제할 때 Git에 업데이트를 가져오고 푸시할 위치를 알려주는 원격 URL을 제공하세요. 원래 리포지토리로 협업하려면 전에는 일반적으로 `upstream`이라고 하는 새 원격 URL을 로컬 Git 클론에 추가했습니다.

```shell
git remote add upstream THEIR_REMOTE_URL
```

이제 해당 포크에서 업데이트 및 분기를 가져올 수 있습니다.

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/OCTOCAT/REPO
>  * [new branch]      main     -> upstream/main
```

로컬 변경이 완료되면 로컬 분기를 푸시하여 GitHub [끌어오기 요청을 시작](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)할 수 있습니다.

포크 작업에 대한 자세한 내용은 “[포크 동기화](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)”를 참조하세요.

## 추가 참고 자료

- [“Pro Git” 설명서의 “원격” 장](https://git-scm.com/book/ch5-2.html)
- [`git remote` 기본 페이지](https://git-scm.com/docs/git-remote.html)
- “[Git 참고 자료](/articles/git-cheatsheet)”
- “[Git 워크플로](/github/getting-started-with-github/git-workflows)”
- “[Git 핸드북](https://guides.github.com/introduction/git-handbook/)”
