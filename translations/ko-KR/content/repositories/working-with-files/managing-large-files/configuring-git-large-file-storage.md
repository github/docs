---
title: Git Large File Storage 구성
intro: '[{% data variables.large_files.product_name_short %}가 설치](/articles/installing-git-large-file-storage/)되면 리포지토리의 큰 파일과 연결해야 합니다.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331762'
---
{% data variables.product.product_name %}을(를) 사용하려는 기존 파일이 리포지토리에 있는 경우 먼저 리포지토리에서 이를 제거한 다음, 로컬로 {% data variables.large_files.product_name_short %}에 추가해야 합니다. 자세한 내용은 “[리포지토리의 파일을 {% data variables.large_files.product_name_short %}(으)로 이동](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)”을 참조하세요.

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**참고:** 큰 파일을 {% data variables.product.product_name %}에 푸시하기 전에 엔터프라이즈에서 {% data variables.large_files.product_name_short %}을(를) 사용하도록 설정했는지 확인합니다. 자세한 내용은 “[GitHub Enterprise Server에서 Git Large File Storage 구성](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)”을 참조하세요.

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 현재 작업 디렉터리를 {% data variables.large_files.product_name_short %}에서 사용하려는 기존 리포지토리로 변경합니다.
3. 리포지토리의 파일 형식을 {% data variables.large_files.product_name_short %}와(과) 연결하려면 `git {% data variables.large_files.command_name %} track` 다음에 {% data variables.large_files.product_name_short %}에 자동으로 업로드할 파일 확장명 이름을 입력합니다.

  예를 들어 _.psd_ 파일을 연결하려면 다음 명령을 입력합니다.
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  {% data variables.large_files.product_name_short %}와(과) 연결하려는 모든 파일 유형은 `git {% data variables.large_files.command_name %} track`으로 추가해야 합니다. 이 명령은 리포지토리의 *.gitattributes* 파일을 수정하고 대용량 파일을 {% data variables.large_files.product_name_short %}에 연결합니다.

  {% note %}

  **참고:** 로컬 *.gitattributes* 파일을 리포지토리에 커밋하는 것이 좋습니다.

    - {% data variables.large_files.product_name_short %}와(과) 연결된 전역 *.gitattributes* 파일을 사용하면 다른 Git 프로젝트에 기여할 때 충돌이 발생할 수 있습니다.
    - 리포지토리에 *.gitattributes* 파일을 포함하면 포크 또는 새 클론을 만드는 사용자가 {% data variables.large_files.product_name_short %}을(를) 사용하여 보다 쉽게 공동 작업할 수 있습니다.
    - 리포지토리에 *.gitattributes* 파일을 포함하면 {% data variables.large_files.product_name_short %} 개체를 ZIP 파일 및 tarball 보관 파일에 선택적으로 포함할 수 있습니다.

  {% endnote %}

4. 연결한 확장과 일치하는 파일을 리포지토리에 추가합니다.
  ```shell
  $ git add path/to/file.psd
  ```
5. 파일을 커밋하고 {% data variables.product.product_name %}에 푸시합니다.
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  파일 업로드에 대한 몇 가지 진단 정보가 표시됩니다.
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## 추가 참고 자료

- “[{% data variables.large_files.product_name_long %}와(과) 협업](/articles/collaboration-with-git-large-file-storage/)”{% ifversion fpt or ghec %}
- “[리포지토리의 보관 파일로 {% data variables.large_files.product_name_short %} 개체 관리](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”{% endif %}
