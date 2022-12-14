---
title: 리포지토리에서 중요한 데이터 제거
intro: 암호 또는 SSH 키와 같은 중요한 데이터를 Git 리포지토리에 커밋하는 경우 기록에서 제거할 수 있습니다. 리포지토리의 기록에서 원치 않는 파일을 완전히 제거하려면 `git filter-repo` 도구 또는 BFG Repo-Cleaner 오픈 소스 도구를 사용할 수 있습니다.
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
ms.openlocfilehash: ab8d5cd8f5c1b61666cc43a6071114ef4eda51de
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093763'
---
`git filter-repo` 도구와 BFG Repo-Cleaner는 리포지토리의 기록을 다시 씁니다. 이로 인해 사용자가 변경하는 기존 커밋과 거기에 종속된 커밋의 SHA가 변경됩니다. 변경된 커밋 SHA는 리포지토리에서 열려 있는 끌어오기 요청에 영향을 줄 수 있습니다. 리포지토리에서 파일을 제거하기 전에 모든 열려 있는 끌어오기 요청을 병합하거나 닫는 것이 좋습니다.

`git rm`을 사용하면 마지막 커밋에서 파일을 제거할 수 있습니다. 최신 커밋으로 추가된 파일을 제거하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 대용량 파일 정보](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)”를 참조하세요.

{% warning %}

**경고**: 이 문서에서는 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 리포지토리에 있는 모든 분기 또는 태그에서 중요한 데이터로 커밋을 연결할 수 없게 만드는 방법을 설명합니다. 그러나 해당 커밋은 {% data variables.product.product_name %}의 캐시된 뷰에서 SHA-1 해시를 통해 직접 또는 이를 참조하는 끌어오기 요청을 통해 리포지토리의 모든 클론 또는 포크에 계속 액세스할 수 있습니다. 리포지토리의 다른 사용자의 클론에서 중요한 데이터를 제거할 수는 없지만 {% 데이터 variables.product.product_name %}에서 {% 데이터 variables.contact.contact_support %}에 문의하여 캐시된 뷰 및 중요한 데이터에 대한 참조를 영구적으로 제거할 수 있습니다. 

중요한 데이터를 도입한 커밋이 리포지토리의 모든 포크에 있는 경우 포크 소유자가 포크에서 중요한 데이터를 제거하거나 포크를 완전히 삭제하지 않는 한 계속 액세스할 수 있습니다. 

{% data variables.product.product_name %}에 커밋을 푸시했으면 중요한 커밋 데이터의 손상을 고려해야 합니다. 암호를 커밋한 경우 암호를 변경해야 합니다. 키를 커밋한 경우 새 키를 생성합니다. 손상된 데이터를 제거해도 초기 노출은 특히 리포지토리의 기존 클론 또는 포크에서 해결되지 않습니다. 

리포지토리의 기록을 다시 작성하기로 결정할 때 제한 사항을 고려하세요.

{% endwarning %}

## 리포지토리의 기록에서 파일 제거

`git filter-repo` 도구 또는 BFG Repo-Cleaner 오픈 소스 도구를 사용하여 리포지토리의 기록에서 파일을 제거할 수 있습니다.

### BFG 사용

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)는 오픈 소스 커뮤니티에서 빌드하고 유지 관리하는 도구입니다. 원치 않는 데이터를 더 빠르고 간단하게 제거하기 위해 `git filter-branch`에 대한 대안을 제공합니다. 

예를 들어, 중요한 데이터를 포함하는 파일을 제거하고 최근 커밋을 그대로 두려면 다음을 실행합니다.

```shell
$ bfg --delete-files YOUR-FILE-WITH-SENSITIVE-DATA
```

리포지토리의 기록에서 `passwords.txt`에 나열된 모든 텍스트를 바꾸려면 다음을 실행합니다.

```shell
$ bfg --replace-text passwords.txt
```

중요한 데이터가 제거된 후에는 변경 내용을 {% data variables.product.product_name %}로 강제 푸시해야 합니다. 강제 푸시하면 리포지토리 기록이 다시 작성되어 커밋 기록에서 중요한 데이터가 제거됩니다. 강제 푸시하는 경우 다른 사용자가 작업을 기반으로 한 커밋을 덮어쓸 수 있습니다.

```shell
$ git push --force
```

자세한 사용법과 다운로드 지침은 [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 설명서를 참조하세요.

### git filter-repo 사용

{% warning %}

**경고:** 변경 내용을 스태시한 후에 `git filter-repo`를 실행할 경우 다른 스태시 명령을 사용하여 변경 내용을 가져올 수 없습니다. `git filter-repo`를 실행하기 전에, 적용한 모든 변경 내용을 스태시 해제하는 것이 좋습니다. 스태시한 마지막 변경 내용 세트를 스태시 해제하려면 `git stash show -p | git apply -R`을 실행합니다. 자세한 내용은 [Git 도구 - 스태시 및 정리](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)를 참조하세요.

{% endwarning %}

`git filter-repo`가 작동하는 방식을 설명하기 위해, 리포지토리 기록에서 중요한 데이터를 포함하는 파일을 제거한 다음 실수로 다시 커밋되지 않도록 `.gitignore`에 추가하는 방법을 보여 드리겠습니다.

1. [git filter-repo](https://github.com/newren/git-filter-repo) 도구의 최신 릴리스를 설치합니다. `git-filter-repo`는 수동으로 설치하거나 패키지 관리자를 사용하여 설치할 수도 있습니다. 예를 들어, HomeBrew를 사용하여 도구를 설치하려면 `brew install` 명령을 사용하세요.
  ```
  brew install git-filter-repo
  ```
  자세한 내용은 `newren/git-filter-repo` 리포지토리의 [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)를 참조하세요.

2. 기록에 중요한 데이터가 포함된 리포지토리의 로컬 복사본이 아직 없다면 로컬 컴퓨터에 [리포지토리를 복제](/articles/cloning-a-repository/)합니다.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/YOUR-REPOSITORY
  > Initialized empty Git repository in /Users/YOUR-FILE-PATH/YOUR-REPOSITORY/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. 리포지토리의 작업 디렉터리로 이동합니다.
  ```shell
  $ cd YOUR-REPOSITORY
  ```
4. 아래의 명령에서 `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA`를 **(파일 이름이 아닌) 제거할 파일의 경로로** 바꾸어서 실행합니다. 이 인수를 사용하면 다음과 같은 작업이 수행됩니다.
    - Git이 모든 분기와 태그의 전체 기록을 강제로 처리합니다(체크아웃하지 않음).
    - 지정된 파일과 그 결과로 생성된 빈 커밋을 제거합니다.
    - *.git/config* 파일에 저장된 일부 구성(예: 원격 URL)을 제거합니다. 이 파일은 나중에 복원할 수 있도록 미리 백업해두는 것이 좋습니다.
    - **기존 태그를 덮어씁니다.**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **참고:** 중요한 데이터를 포함하는 파일이 이동되었거나 이름이 바뀌어서 다른 경로에 있다면 변경된 경로에 대해서도 이 명령을 실행해야 합니다.

  {% endnote %}

5. 중요한 데이터를 포함하는 파일을 실수로 다시 커밋하지 않도록 `.gitignore`에 추가합니다.

  ```shell
  $ echo "YOUR-FILE-WITH-SENSITIVE-DATA" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore"
  > [main 051452f] Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. 리포지토리의 기록에서 제거하려는 모든 항목을 제거했고 모든 분기가 체크아웃되었는지 재차 확인합니다.
7. 리포지토리 상태에 만족하면 로컬 변경 내용을 강제로 푸시하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}, 푸시한 모든 분기에서 리포지토리를 덮어씁니다. 커밋 기록에서 중요한 데이터를 제거하려면 강제 푸시가 필요합니다.
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/YOUR-USERNAME.YOUR-REPOSITORY.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. [태그된 릴리스](/articles/about-releases)에서 중요한 파일을 제거하려면 Git 태그에 대해서도 강제로 푸시해야 합니다.
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/YOUR-REPOSITORY.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## {% data variables.product.prodname_dotcom %}에서 데이터 완전히 제거

BFG 도구를 사용하거나 `git filter-repo`를 사용하여 중요한 데이터를 제거하고 변경 내용을 {% data variables.product.product_name %}에 푸시한 후에는 {% data variables.product.product_name %}에서 데이터를 완전히 제거하려면 몇 가지 단계를 더 수행해야 합니다.

1. {% data variables.contact.contact_support %}에 문의하여 {% data variables.product.product_name %}에 대한 끌어오기 요청에서 캐시된 뷰 및 중요한 데이터에 대한 참조를 제거하도록 요청합니다. 리포지토리의 이름 및/또는 제거해야 하는 커밋에 대한 링크를 제공하세요.{% ifversion ghes %} 사이트 관리자가 연결할 수 없는 Git 개체를 제거하는 방법에 대한 자세한 내용은 "[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)"를 참조하세요.{% endif %}

2. 협력자에게 이전(오염된) 리포지토리 기록에서 만든 분기를 병합하지 ‘않고’ [다시 지정](https://git-scm.com/book/en/Git-Branching-Rebasing)하도록 지시합니다. 하나의 병합 커밋은 방금 제거했던 오염된 기록의 일부 또는 전부를 다시 도입할 수 있습니다.

3. 시간이 지났고 BFG 도구 / `git filter-repo`에 의도하지 않은 부작용이 없다고 확신하면 로컬 리포지토리의 모든 개체를 역참조하고 다음 명령(Git 1.8.5 이상 사용)을 사용하여 가비지 수집하도록 강제할 수 있습니다.
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **참고:** 필터링된 기록을 새 리포지토리 또는 빈 리포지토리로 푸시한 다음 {% data variables.product.product_name %}에서 새로 복제하여 이를 수행할 수도 있습니다.

  {% endnote %}

## 향후 실수로 인한 커밋 방지

커밋하지 않으려는 항목을 커밋하지 않도록 하는 몇 가지 간단한 트릭이 있습니다.

- [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 또는 [gitk](https://git-scm.com/docs/gitk)와 같은 시각적 프로그램을 사용하여 변경 내용을 커밋합니다. 시각적 프로그램을 사용하면 일반적으로 각 커밋을 통해 추가, 삭제 및 수정할 파일을 정확하고 쉽게 확인할 수 있습니다.
- 대신 catch-all 명령 `git add .`와 명령줄의 `git commit -a`을 사용하지 말고 `git add filename`과 `git rm filename`을 사용하여 파일을 개별적으로 스테이징하세요.
- 각 파일 내에서 변경 내용을 개별적으로 검토하고 스테이징하는 데 `git add --interactive`를 사용합니다.
- 커밋을 위해 스테이징한 변경 내용을 검토하는 데 `git diff --cached`를 사용합니다. `-a` 플래그를 사용하지 않는 한 `git commit`에서 생성되는 정확한 차이입니다.

## 추가 참고 자료

- [`git filter-repo` 기본 페이지](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git 도구 - 기록 다시 쓰기](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- “[비밀 검사 정보](/code-security/secret-security/about-secret-scanning)”
