---
title: 줄 끝을 처리하도록 Git 구성
intro: diff에서의 문제를 방지하기 위해 줄 끝을 제대로 처리하도록 Git을 구성할 수 있습니다.
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884207'
---
## 줄 끝 정보
키보드에서 <kbd>return</kbd> 키를 누를 때마다 줄 끝이라는 보이지 않는 문자가 삽입됩니다. 운영 체제마다 줄 끝을 다르게 처리합니다.

Git 및 {% data variables.product.product_name %}를 사용하여 프로젝트를 협업할 때, 예를 들어 Windows 머신에서 작업 중이고 협력자가 macOS에서 변경한 경우 Git에서 예기치 않은 결과가 발생할 수 있습니다.

줄 끝을 자동으로 처리하도록 Git을 구성하면 다른 운영 체제를 사용하는 사람과 효과적으로 협업할 수 있습니다.

## 줄 끝의 전역 설정

`git config core.autocrlf` 명령은 Git에서 줄 끝을 처리하는 방법을 변경하는 데 사용됩니다. 단일 인수를 사용합니다.

{% mac %}

macOS에서는 구성에 `input`을 전달하기만 하면 됩니다. 예를 들면 다음과 같습니다.

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

Windows에서는 구성에 `true`를 전달하기만 하면 됩니다. 예를 들면 다음과 같습니다.

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

Linux에서는 구성에 `input`을 전달하기만 하면 됩니다. 예를 들면 다음과 같습니다.

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## 리포지토리별 설정

필요에 따라 *.gitattributes* 파일을 구성하여 Git이 특정 리포지토리에서 줄 끝을 읽는 방법을 관리할 수 있습니다. 이 파일을 리포지토리에 커밋하면 모든 리포지토리 기여자의 `core.autocrlf` 설정이 재정의됩니다. 이렇게 하면 Git 설정 및 환경에 관계없이 모든 사용자에게 일관된 동작이 보장됩니다.

리포지토리의 루트에 *.gitattributes* 파일을 만들고 다른 파일처럼 커밋해야 합니다.

*.gitattributes* 파일은 두 개의 열이 있는 테이블처럼 보입니다.

* 왼쪽에는 Git에서 일치시킬 파일 이름이 있습니다.
* 오른쪽에는 Git에서 해당 파일에 사용해야 하는 줄 끝 구성이 있습니다.

### 예제

다음은 예제 *.gitattributes* 파일입니다. 리포지토리 템플릿으로 사용할 수 있습니다.

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

파일이 공백으로 구분되어 일치된 다음(`*.c`, `*.sln`, `*.png`), 설정이 지정됩니다(`text`, `text eol=crlf`, `binary`). 아래에서 몇 가지 가능한 설정을 살펴보겠습니다.

- `text=auto` Git은 가장 좋다고 생각하는 방식으로 파일을 처리합니다. 좋은 기본 옵션입니다.

- `text eol=crlf` Git은 체크 아웃 시 항상 줄 끝을 `CRLF`로 변환합니다. OSX 또는 Linux에서도 `CRLF` 끝을 유지해야 하는 파일에 사용해야 합니다.

- `text eol=lf` Git은 체크 아웃 시 항상 줄 끝을 `LF`로 변환합니다. Windows에서도 LF 끝을 유지해야 하는 파일에 사용해야 합니다.

- `binary` Git은 지정된 파일이 텍스트가 아니라는 것을 인식하므로 변경하려고 하면 안 됩니다. `binary` 설정은 `-text -diff`의 별칭이기도 합니다.

## 줄 끝을 변경한 후 리포지토리 새로 고침

`core.autocrlf` 옵션을 설정하거나 *.gitattributes* 파일을 커밋할 때 Git에서 수정하지 않은 파일의 변경 내용을 보고할 수 있습니다. Git에서 새 구성과 일치하도록 줄 끝을 변경한 것입니다.

리포지토리의 모든 줄 끝이 새 구성과 일치하도록 하려면 Git을 사용하여 파일을 백업하고 리포지토리의 모든 파일(`.git` 디렉터리 제외)을 삭제한 다음, 파일을 한 번에 복원합니다.

1. 작업이 손실되지 않도록 Git에 현재 파일을 저장합니다.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. 변경된 모든 파일을 다시 추가하고 줄 끝을 정규화합니다.
  ```shell
  $ git add --renormalize .
  ```
3. 다시 작성된 정규화된 파일을 표시합니다.
  ```shell
  $ git status
  ```
4. 변경 내용을 리포지토리에 푸시합니다.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## 추가 참고 자료

- Pro Git 설명서의 [Git 사용자 지정 - Git 특성](https://git-scm.com/book/en/Customizing-Git-Git-Attributes)
- Git 기본 페이지의 [git-config](https://git-scm.com/docs/git-config)
- Pro Git 설명서의 [시작 - 첫 번째 Git 설정](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)
- [줄 끝에 유의](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)([Tim Clem](https://github.com/tclem))
