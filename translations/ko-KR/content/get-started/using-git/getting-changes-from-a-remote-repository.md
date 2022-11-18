---
title: 원격 리포지토리에서 변경 내용 가져오기
intro: 일반적인 Git 명령을 사용하여 원격 리포지토리에 액세스할 수 있습니다.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: a2206fa40d70f17d225bd0cf00d8ecced9fd1c09
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009269'
---
## 변경 내용을 가져오기 위한 옵션

다음 명령은 [원격 리포지토리](/github/getting-started-with-github/about-remote-repositories)와 상호 작용할 때 매우 유용합니다. `clone`과 `fetch`는 리포지토리의 원격 URL에서 로컬 컴퓨터로 원격 코드를 다운로드하고, `merge`는 다른 사람의 작업을 자신의 작업과 병합하는 데 사용되며, `pull`은 `fetch`와 `merge`의 조합입니다.

## 리포지토리 복제

다른 사용자 리포지토리의 전체 복사본을 가져오려면 `git clone`을 다음과 같이 사용합니다.

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
# Clones a repository to your computer
```

리포지토리를 복제할 때 [서로 다른 여러 URL](/github/getting-started-with-github/about-remote-repositories) 중에서 선택할 수 있습니다. {% data variables.product.prodname_dotcom %}에 로그인하는 동안 리포지토리 세부 정보 아래에서 이러한 URL을 사용할 수 있습니다.

![원격 URL 목록](/assets/images/help/repository/remotes-url.png)

`git clone`을 실행할 때 다음과 같은 동작이 발생합니다.
- `repo`라는 새 폴더가 만들어짐
- Git 리포지토리로 초기화됨
- 복제한 URL을 가리키는 원격 이름 `origin`이 만들어짐
- 리포지토리의 모든 파일 및 커밋이 다운로드됨
- 기본 분기가 체크 아웃됨

원격 리포지토리의 모든 분기 `foo`에 대해 해당 원격 추적 분기 `refs/remotes/origin/foo`가 로컬 리포지토리에 만들어집니다. 일반적으로 이러한 원격 추적 분기 이름을 `origin/foo`로 축약할 수 있습니다.

## 원격 리포지토리에서 변경 내용 페치

다른 사용자가 수행한 새 작업을 검색하려면 `git fetch`를 사용합니다. 리포지토리에서 페치하면 변경 내용이 자신의 분기에 병합되지 *않은 채* 모든 새 원격 추적 분기 및 태그를 가져오게 됩니다.

원하는 프로젝트에 대해 원격 URL이 설정된 로컬 리포지토리가 이미 있는 경우 터미널에서 `git fetch *remotename*`을 사용하여 모든 새 정보를 가져올 수 있습니다.

```shell
$ git fetch REMOTE-NAME
# Fetches updates made to a remote repository
```

아니면 항상 새 원격을 추가한 다음 페치할 수 있습니다. 자세한 내용은 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.

## 변경 내용을 로컬 분기에 병합

병합은 로컬 변경 내용을 다른 사용자가 변경한 내용과 결합합니다.

일반적으로 원격 추적 분기(즉, 원격 리포지토리에서 페치한 분기)를 로컬 분기와 병합합니다.

```shell
$ git merge REMOTE-NAME/BRANCH-NAME
# Merges updates made online with your local work
```

## 원격 리포지토리에서 변경 내용 끌어오기

`git pull`은 동일한 명령에서 `git fetch`와 `git merge `를 완료하기 위한 편리한 방법입니다.

```shell
$ git pull REMOTE-NAME BRANCH-NAME
# Grabs online updates and merges them with your local work
```

`pull`은 검색된 변경 내용에 대한 병합을 수행하므로, `pull` 명령을 실행하기 전에 로컬 작업이 커밋되었는지 확인해야 합니다. 해결할 수 없는 [병합 충돌](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)이 발생하거나 병합을 종료하기로 결정한 경우, 분기를 끌어오기 전의 위치로 되돌리는 데 `git merge --abort`를 사용할 수 있습니다.

## 추가 참고 자료

- [_Pro Git_ 설명서의 “원격으로 작업”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% ifversion fpt or ghec %}
- “[연결 문제 해결](/articles/troubleshooting-connectivity-problems)”{% endif %}
