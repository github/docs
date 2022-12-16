---
title: Git 대형 파일 스토리지 설치
intro: '{% data variables.large_files.product_name_short %}를 사용하려면 Git과 별개인 새 프로그램을 다운로드하여 설치해야 합니다.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: 8ac1ff43ad14e03fbbf1af0e56511aaf32535fbc
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008842'
---
{% mac %}

1. [git-lfs.github.com](https://git-lfs.github.com)으로 이동하여 **다운로드** 를 클릭합니다. 또는 패키지 관리자를 사용하여 {% data variables.large_files.product_name_short %}를 설치할 수 있습니다.
    - [Homebrew](http://brew.sh/)를 사용하려면 `brew install git-lfs`를 실행합니다.
    - [MacPorts](https://www.macports.org/)를 사용하려면 `port install git-lfs`를 실행합니다.

 Homebrew 또는 MacPorts와 함께 {% data variables.large_files.product_name_short %}를 설치하는 경우 6단계로 건너뜁니다.

2. 컴퓨터에서 다운로드한 파일을 찾아 압축을 풉니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 현재 작업 디렉터리를 다운로드하여 압축을 푼 폴더로 변경합니다.
  ```shell
  $ cd ~/Downloads/git-lfs-1.X.X
  ```
 {% note %}

 **참고:** `cd` 다음에 사용하는 파일 경로는 운영 체제, 다운로드한 Git LFS 버전 및 {% data variables.large_files.product_name_short %} 다운로드를 저장한 위치에 따라 달라집니다.

 {% endnote %}
4. 파일을 설치하려면 다음 명령을 실행합니다.
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **참고:** 파일을 설치하는 데 `sudo ./install.sh`를 사용해야 할 수 있습니다.

 {% endnote %}
5. 설치가 성공했는지 확인합니다.
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install`이 성공했음을 나타내는 메시지가 표시되지 않으면 {% data variables.contact.contact_support %}에 문의하세요. 운영 체제의 이름을 포함해야 합니다.

{% endmac %}

{% windows %}

1. [git-lfs.github.com](https://git-lfs.github.com)으로 이동하여 **다운로드** 를 클릭합니다.

  {% tip %}

  **팁:** Windows용 {% data variables.large_files.product_name_short %}를 설치하는 다른 방법에 대한 자세한 내용은 이 [시작 가이드](https://github.com/github/git-lfs#getting-started)를 참조하세요.

  {% endtip %}
2. 컴퓨터에서 다운로드한 파일을 찾습니다.
3. *git-lfs-windows-1.X.X.exe* 파일을 두 번 클릭합니다. 여기서 1.X.X는 다운로드한 Git LFS 버전으로 바뀝니다. 이 파일을 열면 Windows가 설치 마법사를 실행하여 {% data variables.large_files.product_name_short %}를 설치합니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. 설치가 성공했는지 확인합니다.
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install`이 성공했음을 나타내는 메시지가 표시되지 않으면 {% data variables.contact.contact_support %}에 문의하세요. 운영 체제의 이름을 포함해야 합니다.

{% endwindows %}

{% linux %}

1. [git-lfs.github.com](https://git-lfs.github.com)으로 이동하여 **다운로드** 를 클릭합니다.

  {% tip %}

  **팁:** Linux용 {% data variables.large_files.product_name_short %}를 설치하는 다른 방법에 대한 자세한 내용은 이 [시작 가이드](https://github.com/github/git-lfs#getting-started)를 참조하세요.

  {% endtip %}
2. 컴퓨터에서 다운로드한 파일을 찾아 압축을 풉니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 현재 작업 디렉터리를 다운로드하여 압축을 푼 폴더로 변경합니다.
  ```shell
  $ cd ~/Downloads/git-lfs-1.X.X
  ```
 {% note %}

 **참고:** `cd` 다음에 사용하는 파일 경로는 운영 체제, 다운로드한 Git LFS 버전 및 {% data variables.large_files.product_name_short %} 다운로드를 저장한 위치에 따라 달라집니다.

 {% endnote %}
4. 파일을 설치하려면 다음 명령을 실행합니다.
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **참고:** 파일을 설치하는 데 `sudo ./install.sh`를 사용해야 할 수 있습니다.

 {% endnote %}
5. 설치가 성공했는지 확인합니다.
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. `git {% data variables.large_files.command_name %} install`이 성공했음을 나타내는 메시지가 표시되지 않으면 {% data variables.contact.contact_support %}에 문의하세요. 운영 체제의 이름을 포함해야 합니다.

{% endlinux %}

## 추가 참고 자료

- "[{% data variables.large_files.product_name_long %} 구성](/articles/configuring-git-large-file-storage)"
