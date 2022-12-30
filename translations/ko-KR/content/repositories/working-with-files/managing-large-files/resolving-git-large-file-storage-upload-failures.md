---
title: Git 대용량 File Storage 업로드 실패 해결
intro: '{% data variables.large_files.product_name_short %} 파일이 제대로 업로드되지 않은 경우 업로드 오류를 해결하기 위해 몇 가지 단계를 수행할 수 있습니다.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/versioning-large-files/resolving-git-large-file-storage-upload-failures
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve upload failures
ms.openlocfilehash: d2f776561f08132e1ca05d0864368943098c5ddc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136486'
---
{% data variables.large_files.product_name_short %} 무결성 검사는 푸시에서 참조된 모든 {% data variables.large_files.product_name_short %} 파일이 제대로 업로드되었는지 확인합니다. 검사에서 업로드되지 않은 참조된 파일을 검색하면 오류 메시지가 표시되고 푸시가 차단됩니다.

오류 메시지를 해결하려면 로컬 {% data variables.large_files.product_name_short %} 클라이언트를 다시 설치하여 참조된 {% data variables.large_files.product_name_short %} 파일을 나중에 제대로 업로드할 수 있도록 해야 합니다.

1. 터미널을 엽니다.
2. {% data variables.large_files.product_name_short %}를 다시 설치합니다.
  ```shell
  $ git lfs install
  ```
3. 참조된 모든 {% data variables.large_files.product_name_short %} 파일을 푸시합니다.
  ```shell
  $ git lfs push --all origin
  ```
