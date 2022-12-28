---
title: 명령줄에서 GitHub Desktop 시작
shortTitle: Launching from the command line
intro: 명령줄에서 GitHub Desktop을 시작할 수 있습니다.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: 5d9851cc8596299b9d3c4f6ec4d2c72e7d4a2b49
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009060'
---
{% mac %}

1. 메뉴 바에서 **{% data variables.product.prodname_desktop %}** 메뉴를 선택한 다음 **Install Command Line Tool**(명령줄 도구 설치)을 클릭합니다.
![{% data variables.product.prodname_desktop %} 드롭다운 메뉴에서 명령줄 도구 설치 옵션](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. 터미널을 엽니다.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github /PATH/TO/REPO
  ```

  리포지토리 경로로 변경한 다음 `github .`를 입력하여 해당 리포지토리를 열 수도 있습니다.

  ```shell
  $ cd /PATH/TO/REPO
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. 명령 프롬프트를 엽니다.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github PATH\TO\REPO
  ```

 리포지토리 경로로 변경한 다음 `github .`를 입력하여 해당 리포지토리를 열 수도 있습니다.

  ```shell
  C:\Users\octocat> cd REPO\MY-REPO
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
