---
title: Git에서 사용자 이름 설정
intro: 'Git은 사용자 이름을 사용하여 커밋을 ID와 연결합니다. Git 사용자 이름은 {% data variables.product.product_name %} 사용자 이름과 다릅니다.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
ms.openlocfilehash: d70f9bd6c58b362ca3007fbda45e6dbb0c68c69a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009116'
---
## Git 사용자 이름 정보
`git config` 명령을 사용하여 Git 커밋과 연결된 이름을 변경할 수 있습니다. 설정한 새 이름은 명령줄에서 {% data variables.product.product_name %}로 푸시하는 이후 커밋에 표시됩니다. 실명을 프라이빗으로 유지하려는 경우 임의 텍스트를 Git 사용자 이름으로 사용할 수 있습니다.

`git config`를 사용하여 Git 커밋과 연결된 이름을 변경하는 경우 이후 커밋에만 영향을 미치며 이전 커밋에 사용된 이름은 변경되지 않습니다.

## 컴퓨터의 모든 리포지토리에 대해 Git 사용자 이름 설정

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "Mona Lisa"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## 단일 리포지토리에 대해 Git 사용자 이름 설정

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 현재 작업 디렉터리를 Git 커밋과 연결된 이름을 구성하려는 로컬 리포지토리로 변경합니다.

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "Mona Lisa"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## 추가 참고 자료

- “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”
- [_Pro Git_ 설명서의 “Git 구성”](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
