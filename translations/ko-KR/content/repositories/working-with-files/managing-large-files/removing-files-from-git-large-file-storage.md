---
title: Git 대형 파일 스토리지에서 파일 제거
intro: '리포지토리에 대해 {% data variables.large_files.product_name_short %}를 설정한 경우 {% data variables.large_files.product_name_short %}에서 모든 파일 또는 파일 하위 집합을 제거할 수 있습니다.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136497'
---
## 단일 파일 제거

1.  `filter-branch` 명령 또는 BFG 리포지토리 클리너를 사용하여 리포지토리의 Git 기록에서 파일을 제거합니다. 이러한 명령/도구를 사용하는 방법에 대한 자세한 내용은 "[리포지토리에서 중요한 데이터 제거](/articles/removing-sensitive-data-from-a-repository)"를 참조하세요.
2. *.gitattributes* 파일로 이동합니다.

  {% note %}

  **참고:** *.gitattributes* 파일은 일반적으로 로컬 리포지토리 내에 저장됩니다. 경우에 따라 모든 {% data variables.large_files.product_name_short %} 연결이 포함된 전역 *.gitattributes* 파일을 만들었을 수도 있습니다.

  {% endnote %}
3. *.gitattributes* 파일 내에서 연결된 {% data variables.large_files.product_name_short %} 추적 규칙을 찾아 제거합니다.
4. *.gitattributes* 파일을 저장하고 종료합니다.

## {% data variables.large_files.product_name_short %} 리포지토리 내의 모든 파일 제거

1. `filter-branch` 명령 또는 BFG 리포지토리 클리너를 사용하여 리포지토리의 Git 기록에서 파일을 제거합니다. 이러한 명령/도구를 사용하는 방법에 대한 자세한 내용은 "[리포지토리에서 중요한 데이터 제거](/articles/removing-sensitive-data-from-a-repository)"를 참조하세요.
2. 필요에 따라 리포지토리에서 {% data variables.large_files.product_name_short %}를 제거하려면 다음을 실행합니다.
  ```shell
  $ git lfs uninstall
  ```
  {% data variables.large_files.product_name_short %} 버전 1.1.0 미만인 경우 다음을 실행합니다.
  ```shell
  $ git lfs uninit
  ```

## 리포지토리에 있는 {% data variables.large_files.product_name_short %} 개체

{% data variables.large_files.product_name_short %}에서 파일을 제거한 후에도 {% data variables.large_files.product_name_short %} 개체는 원격 스토리지{% ifversion fpt or ghec %}에 계속 존재하며 {% data variables.large_files.product_name_short %} 스토리지 할당량{% endif %}에 계속 계산됩니다.

리포지토리에서 {% data variables.large_files.product_name_short %} 개체를 제거하려면 {% ifversion fpt or ghec %}리포지토리를 삭제했다가 다시 만듭니다. 리포지토리를 삭제하면 관련된 문제, 별 및 포크도 삭제됩니다. 자세한 내용은 "[리포지토리 삭제](/github/administering-a-repository/deleting-a-repository)"를 참조하세요. 삭제된 개체를 제거해야 하고 리포지토리를 삭제할 수 없는 경우 [지원팀에 문의](/github/working-with-github-support)하여 도움을 받으세요.{% else %}{% data variables.product.prodname_enterprise %} 관리자에게 문의하여 개체를 보관합니다. 보관된 개체는 3개월 후에 제거됩니다.{% endif %}

{% note %}

**참고:** 단일 파일을 제거하고 리포지토리에 유지하려는 다른 {% data variables.large_files.product_name_short %} 개체가 있는 경우, 리포지토리를 삭제했다가 다시 만든 후 {% data variables.large_files.product_name_short %}와 연결된 파일을 다시 구성합니다. 자세한 내용은 "[단일 파일 제거](#removing-a-single-file)" 및 "[{% data variables.large_files.product_name_long %} 구성](/github/managing-large-files/configuring-git-large-file-storage)"을 참조하세요.

{% endnote %}

## 추가 참고 자료

- “[{% data variables.large_files.product_name_long %} 정보](/articles/about-git-large-file-storage)”
- "[{% data variables.large_files.product_name_long %}와(과) 협업](/articles/collaboration-with-git-large-file-storage/)"
- “[{% data variables.large_files.product_name_long %} 설치](/articles/installing-git-large-file-storage)”
