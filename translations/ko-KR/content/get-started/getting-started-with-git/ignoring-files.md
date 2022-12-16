---
title: Ignoring files(파일 무시)
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: '{% data variables.product.product_name %}에 체크 인하지 않으려는 파일을 무시하도록 Git을 구성할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5029723554732356f5d5ef83e4b598bbb309cb38
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019528'
---
## 단일 리포지토리에 대해 무시된 파일 구성

리포지토리의 루트 디렉터리에 *.gitignore* 파일을 만들어 커밋할 때 무시할 파일 및 디렉터리를 Git에 지시할 수 있습니다.
리포지토리를 복제하는 다른 사용자와 무시 규칙을 공유하려면 *.gitignore* 파일을 리포지토리에 커밋합니다.

GitHub는 `github/gitignore` 퍼블릭 리포지토리의 많은 인기 있는 운영 체제, 환경, 언어에 권장되는 *.gitignore* 파일의 공식 목록을 유지 관리합니다. gitignore.io를 사용하여 운영 체제, 프로그래밍 언어 또는 IDE에 대한 *.gitignore* 파일을 만들 수도 있습니다. 자세한 내용은 “[github/gitignore](https://github.com/github/gitignore)” 및 “[gitignore.io](https://www.gitignore.io/)” 사이트를 참조하세요.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Git 리포지토리의 위치로 이동합니다.
3. 리포지토리에 대한 *.gitignore* 파일을 만듭니다.
   ```shell
   $ touch .gitignore
  ```

   명령이 성공하면 아무것도 출력되지 않습니다.
   
예제 *.gitignore* 파일은 Octocat 리포지토리의 “[몇 가지 일반적인 .gitignore 구성](https://gist.github.com/octocat/9257657)”을 참조하세요.

이미 체크 인된 파일을 무시하려면 무시 규칙을 추가하기 전에 파일 추적을 해제해야 합니다. 터미널에서 파일 추적을 해제합니다.

```shell
$ git rm --cached FILENAME
```

## 컴퓨터의 모든 리포지토리에 대해 무시된 파일 구성

전역 *.gitignore* 파일을 만들어 컴퓨터의 모든 Git 리포지토리에 있는 파일을 무시하기 위한 규칙 목록을 정의할 수도 있습니다. 예를 들어 *~/.gitignore_global* 에서 파일을 만들고 몇 가지 규칙을 파일에 추가할 수 있습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 모든 Git 리포지토리에 대해 제외 파일 *~/.gitignore_global* 을 사용하도록 Git을 구성합니다.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## *.gitignore* 파일을 만들지 않고 로컬 파일 제외

다른 사용자와 공유할 *.gitignore* 파일을 만들지 않으려면 리포지토리와 함께 커밋되지 않는 규칙을 만들 수 있습니다. 편집기에서 만든 파일과 같이 다른 사용자가 생성할 것 같지 않는, 로컬로 생성된 파일에 이 기술을 사용할 수 있습니다.

즐겨 찾는 텍스트 편집기를 사용하여 Git 리포지토리의 루트 내에서 *.git/info/exclude* 파일을 엽니다. 여기에 추가하는 규칙은 체크 인되지 않으며 로컬 리포지토리에 대한 파일만 무시합니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Git 리포지토리의 위치로 이동합니다.
3. 즐겨 찾는 텍스트 편집기를 사용하여 *.git/info/exclude* 파일을 엽니다.

## 추가 정보

* Git 설명서에서 [파일 무시](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
* Git 설명서의 [.gitignore](https://git-scm.com/docs/gitignore)
* github/gitignore 리포지토리의 [유용한 *.gitignore* 템플릿 컬렉션](https://github.com/github/gitignore)
* [gitignore.io](https://www.gitignore.io/) 사이트
