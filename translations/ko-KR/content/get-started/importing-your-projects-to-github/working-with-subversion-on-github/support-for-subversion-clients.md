---
title: Subversion 클라이언트 지원
intro: GitHub 리포지토리는 Git 및 SVN(Subversion) 클라이언트 모두에서 액세스할 수 있습니다. 이 문서에서는 GitHub에서 Subversion 클라이언트 사용하기와 발생할 수 있는 몇 가지 일반적인 문제에 대해 설명합니다.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: af8a43c8fb57b324b315977acd1912e0eb34f094
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009353'
---
GitHub는 HTTPS 프로토콜을 통해 Subversion 클라이언트를 지원합니다. Subversion 브리지를 사용하여 svn 명령을 GitHub에 전달합니다.

## GitHub에서 지원되는 Subversion 기능

### 체크 아웃

가장 먼저 할 일은 Subversion 체크 아웃입니다.  Git 복제본은 작업 디렉터리(파일을 편집하는 위치)를 리포지토리 데이터와 별도로 유지하므로 작업 디렉터리에는 한 번에 하나의 분기만 있습니다.

Subversion 체크 아웃은 다릅니다. 작업 디렉터리에서 리포지토리 데이터를 함께 사용하므로 체크 아웃한 각 분기와 태그에 대한 작업 디렉터리가 있습니다. 분기 및 태그가 많은 리포지토리의 경우 모든 항목을 체크 아웃하려면 대역폭 부담이 클 수 있으므로 부분 체크 아웃으로 시작해야 합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. 리포지토리의 빈 체크 아웃을 만듭니다.
  ```shell
  $ svn co --depth empty https://github.com/USER/REPO
  > Checked out revision 1.
  $ cd REPO
  ```

4. `trunk` 분기를 가져옵니다. Subversion 브리지는 트렁크를 Git HEAD 분기에 매핑합니다.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. `branches` 디렉터리의 빈 체크 아웃을 가져옵니다.  `HEAD` 이외의 모든 분기가 여기에 있으며, 기능 분기를 만들 위치입니다.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### 분기 만들기

GitHub에 대한 Subversion 브리지를 사용하여 분기를 만들 수도 있습니다.

svn 클라이언트에서 `trunk`를 업데이트하여 기본 분기가 최신 상태인지 확인합니다.
```shell
$ svn up trunk
> At revision 1.
```

다음으로, `svn copy`를 사용하여 새 분기를 만들 수 있습니다.
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

리포지토리의 분기 드롭다운에 새 분기가 있는지 확인할 수 있습니다.

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

명령줄을 통해 새 분기를 확인할 수도 있습니다.

```shell
$ git fetch
> From https://github.com/USER/REPO/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Subversion에 커밋

몇 가지 기능을 추가하고 일부 버그를 수정한 후에는 변경 내용을 GitHub에 커밋하는 것이 좋습니다. 익숙한 Subversion처럼 동작합니다. 파일을 편집하고 `svn commit`을 사용하여 변경 내용을 기록합니다.

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### 분기 간 전환

분기 간에 전환하려면 `trunk` 체크 아웃으로 시작하는 것이 좋습니다.

```shell
$ svn co --depth empty https://github.com/USER/REPO/trunk
```

그런 다음, 다른 분기로 전환할 수 있습니다.

```shell
$ svn switch https://github.com/USER/REPO/branches/more_awesome
```

## Subversion 커밋에 대한 Git 커밋 SHA 찾기

GitHub의 Subversion 서버는 각 Subversion 커밋에 대한 Git 커밋 SHA를 공개합니다.

커밋 SHA를 보려면 버전이 지정되지 않은 `git-commit` 원격 속성을 요청해야 합니다.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/USER/REPO
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

예를 들어 이 커밋 SHA를 사용하여 GitHub에서 해당 Git 커밋을 조회할 수 있습니다.

## 추가 참고 자료

* “[GitHub에서 지원되는 Subversion 속성](/articles/subversion-properties-supported-by-github)”
