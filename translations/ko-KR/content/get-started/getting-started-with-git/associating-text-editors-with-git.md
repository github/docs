---
title: Git과 텍스트 편집기 연결
intro: 텍스트 편집기를 사용하여 Git으로 파일을 열고 편집합니다.
redirect_from:
  - /textmate
  - /articles/using-textmate-as-your-default-editor
  - /articles/using-sublime-text-2-as-your-default-editor
  - /articles/associating-text-editors-with-git
  - /github/using-git/associating-text-editors-with-git
  - /github/getting-started-with-github/associating-text-editors-with-git
  - /github/getting-started-with-github/getting-started-with-git/associating-text-editors-with-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Associate text editors
ms.openlocfilehash: b700d2c11771ccebf5a3888d0052892c9f7a3e51
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009225'
---
{% mac %}

## {% data variables.product.prodname_vscode %}를 편집기로 사용

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)({% data variables.product.prodname_vscode_shortname %})를 설치합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[{% data variables.product.prodname_vscode_shortname %} 설정](https://code.visualstudio.com/Docs/setup/setup-overview)”을 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text를 편집기로 사용

1. [Sublime Text](https://www.sublimetext.com/)를 설치합니다. 자세한 내용은 Sublime Text 설명서에서 “[설치](https://docs.sublimetext.io/guide/getting-started/installation.html)”를 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

## TextMate를 편집기로 사용

1. [TextMate](https://macromates.com/)를 설치합니다.
2. TextMate의 `mate` 셸 유틸리티를 설치합니다. 자세한 내용은 TextMate 설명서에서 “[`mate` 및 `rmate`](https://macromates.com/blog/2011/mate-and-rmate/)”를 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

## {% data variables.product.prodname_vscode %}를 편집기로 사용

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)({% data variables.product.prodname_vscode_shortname %})를 설치합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[{% data variables.product.prodname_vscode_shortname %} 설정](https://code.visualstudio.com/Docs/setup/setup-overview)”을 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text를 편집기로 사용

1. [Sublime Text](https://www.sublimetext.com/)를 설치합니다. 자세한 내용은 Sublime Text 설명서에서 “[설치](https://docs.sublimetext.io/guide/getting-started/installation.html)”를 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

## 메모장++를 편집기로 사용

1. https://notepad-plus-plus.org/ 에서 메모장++를 설치합니다. 자세한 내용은 메모장++ 설명서에서 “[시작](https://npp-user-manual.org/docs/getting-started/)”을 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

## {% data variables.product.prodname_vscode %}를 편집기로 사용

1. [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)({% data variables.product.prodname_vscode_shortname %})를 설치합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[{% data variables.product.prodname_vscode_shortname %} 설정](https://code.visualstudio.com/Docs/setup/setup-overview)”을 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "code --wait"
 ```

## Sublime Text를 편집기로 사용

1. [Sublime Text](https://www.sublimetext.com/)를 설치합니다. 자세한 내용은 Sublime Text 설명서에서 “[설치](https://docs.sublimetext.io/guide/getting-started/installation.html)”를 참조하세요.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 다음 명령을 입력합니다.
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
