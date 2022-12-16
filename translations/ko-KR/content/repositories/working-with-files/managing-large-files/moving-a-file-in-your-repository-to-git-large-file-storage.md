---
title: 리포지토리의 파일을 Git Large File Storage로 이동
intro: '{% data variables.large_files.product_name_short %}를 설정했고 {% data variables.large_files.product_name_short %}에서 추적해야 하는 기존 파일이 리포지토리에 있는 경우 먼저 리포지토리에서 제거해야 합니다.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136498'
---
{% data variables.large_files.product_name_short %}을(를) 설치하고 {% data variables.large_files.product_name_short %} 추적을 구성한 후 Git의 일반 추적에서 {% data variables.large_files.product_name_short %}(으)로 파일을 이동할 수 있습니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 설치](/github/managing-large-files/installing-git-large-file-storage)” 및 “[{% data variables.large_files.product_name_long %} 구성](/github/managing-large-files/configuring-git-large-file-storage)”을 참조하세요.

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**팁:** Git에 파일을 푸시하려고 할 때 “{% data variables.large_files.product_name_short %}의 파일 크기 제한인 {% data variables.large_files.max_github_size %}”을(를) 초과한다는 오류가 발생하면 `filter branch` 또는 BFG 리포지토리 클리너 대신 `git lfs migrate`을(를) 사용하여 대용량 파일을 {% data variables.large_files.product_name_long %}(으)로 이동할 수 있습니다. `git lfs migrate` 명령에 대한 자세한 내용은 [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) 릴리스 공지 사항을 참조하세요.

{% endtip %}

1.  `filter-branch` 명령 또는 BFG 리포지토리 클리너를 사용하여 리포지토리의 Git 기록에서 파일을 제거합니다. 이러한 데이터를 사용하는 방법에 대한 자세한 내용은 “[리포지토리에서 중요한 데이터 제거](/articles/removing-sensitive-data-from-a-repository)”를 참조하세요.
2. 파일에 대한 추적을 구성하고 {% data variables.large_files.product_name_short %}에 푸시합니다. 이 절차에 대한 자세한 내용은 “[{% data variables.large_files.product_name_long %} 구성](/articles/configuring-git-large-file-storage)”을 참조하세요.

## 추가 참고 자료

- “[{% data variables.large_files.product_name_long %} 정보](/articles/about-git-large-file-storage)”
- "[{% data variables.large_files.product_name_long %}와(과) 협업](/articles/collaboration-with-git-large-file-storage/)"
- “[{% data variables.large_files.product_name_long %} 설치](/articles/installing-git-large-file-storage)”
