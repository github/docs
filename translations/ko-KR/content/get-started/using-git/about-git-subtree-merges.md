---
title: Git 하위 트리 병합 정보
redirect_from:
  - /articles/working-with-subtree-merge
  - /subtree-merge
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
  - /github/getting-started-with-github/using-git/about-git-subtree-merges
intro: 단일 리포지토리 내에서 여러 프로젝트를 관리해야 하는 경우 하위 트리 병합을 사용하여 모든 참조를 처리할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: eb50228a4e256b1511ff65d21ce855a2d765ad86
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008839'
---
## 하위 트리 병합 정보

일반적으로 하위 트리 병합은 리포지토리 내에 리포지토리를 포함하는 데 사용됩니다. “하위 리포지토리”는 주 리포지토리의 폴더에 저장됩니다.

하위 트리 병합을 설명하는 가장 좋은 방법은 예를 들어 보여 주는 것입니다. 다음을 수행합니다.

- 프로젝트를 나타내는 `test`라는 이름의 빈 리포지토리를 호출합니다.
- 다른 리포지토리를 `Spoon-Knife`라는 하위 트리로 병합합니다.
- `test` 프로젝트는 동일한 리포지토리의 일부인 것처럼 하위 프로젝트를 사용합니다.
- 업데이트를 `Spoon-Knife`에서 `test` 프로젝트로 페치합니다.

## 하위 트리 병합에 대한 빈 리포지토리 설정

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 새 디렉터리를 만들고 해당 디렉터리로 이동합니다.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. 새 Git 리포지토리를 초기화합니다.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. 새 파일을 만들고 커밋합니다.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

## 하위 트리로 새 리포지토리 추가

1. 관심 있는 별도의 프로젝트를 가리키는 새 원격 URL을 추가합니다.
  ```shell
  $ git remote add -f spoon-knife https://github.com/octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From https://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. `Spoon-Knife` 프로젝트를 로컬 Git 프로젝트에 병합합니다. 이렇게 하면 파일이 로컬에서 변경되지는 않지만 Git은 다음 단계를 준비합니다.

  Git 2.9 이상을 사용하는 경우:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Git 2.8 이하를 사용하는 경우:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. **spoon-knife** 라는 새 디렉터리를 만들고 프로젝트의 Git 기록을 `Spoon-Knife` 프로젝트에 복사합니다.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. 변경 내용을 커밋하여 안전하게 유지합니다.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

하위 프로젝트를 하나만 추가했더라도 여러 하위 프로젝트를 Git 리포지토리에 통합할 수 있습니다.

{% tip %}

**팁**: 나중에 리포지토리의 새 복제본을 만드는 경우 추가한 원격이 생성되지는 않습니다. [`git remote add` 명령](/github/getting-started-with-github/managing-remote-repositories)을 사용하여 다시 추가해야 합니다.

{% endtip %}

## 업데이트 및 변경 내용과 동기화

하위 프로젝트가 추가되면 업스트림 변경 내용과 자동으로 동기화되지 않습니다. 다음 명령을 사용하여 하위 프로젝트를 업데이트해야 합니다.

```shell
$ git pull -s subtree REMOTE-NAME BRANCH-NAME
```

위의 예에서는 다음과 같습니다.

```shell
$ git pull -s subtree spoon-knife main
```

## 추가 참고 자료

- [_Pro Git_ 북의 “고급 병합” 장](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- “[하위 트리 병합 전략을 사용하는 방법](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)”
