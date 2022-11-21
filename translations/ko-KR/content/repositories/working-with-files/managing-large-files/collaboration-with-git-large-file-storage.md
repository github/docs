---
title: Git Large File Storage 협업
intro: '{% data variables.large_files.product_name_short %}를 사용하도록 설정하면 Git에서 관리하는 파일을 사용할 때처럼 대용량 파일을 가져오고 수정하고 푸시할 수 있습니다. 그러나 {% data variables.large_files.product_name_short %}가 없는 사용자는 다른 워크플로를 경험하게 됩니다.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136510'
---
리포지토리의 협력자가 {% data variables.large_files.product_name_short %}을(를) 설치하지 않은 경우 원래 대용량 파일에 액세스할 수 없습니다. 리포지토리를 복제하려고 하면 포인터 파일만 가져오고 실제 데이터에 액세스할 수 없습니다.

{% tip %}

**팁:** {% data variables.large_files.product_name_short %}을(를) 사용하지 않는 사용자를 돕기 위해 대용량 파일로 작업하는 방법을 설명하는 리포지토리 기여자 지침을 설정하는 것이 좋습니다. 예를 들어 기여자에게 대용량 파일을 수정하지 않도록 요청하거나 [Dropbox](http://www.dropbox.com/) 또는 <a href="https://drive.google.com/" data-proofer-ignore>Google 드라이브</a>와 같은 파일 공유 서비스에 변경 내용을 업로드하도록 요청할 수 있습니다. 자세한 내용은 “[리포지토리 참가자에 대한 지침 설정](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)”을 참조하세요.

{% endtip %}

## 끌어오기 요청에서 대용량 파일 보기

{% data variables.product.product_name %}은(는) 끌어오기 요청에서 {% data variables.large_files.product_name_short %} 개체를 렌더링하지 않습니다. 포인터 파일만 표시됨:

![대용량 파일에 대한 샘플 PR](/assets/images/help/large_files/large_files_pr.png)

포인터 파일에 대한 자세한 내용은 “[{% data variables.large_files.product_name_long %} 정보](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)”를 참조하세요.

대용량 파일의 변경 내용을 보려면 로컬에서 끌어오기 요청을 체크 아웃하여 diff를 검토합니다. 자세한 내용은 “[로컬에서 끌어오기 요청 체크 아웃](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)”을 참조하세요.

{% ifversion fpt or ghec %}

## 포크에 대용량 파일 푸시

포크 소유자의 할당량이 아닌 부모 리포지토리의 대역폭 및 스토리지 할당량에 대해 리포지토리 수의 포크에 대용량 파일을 푸시합니다.

리포지토리 네트워크에 이미 {% data variables.large_files.product_name_short %} 개체가 있거나 리포지토리 네트워크의 루트에 대한 쓰기 액세스 권한이 있는 경우 {% data variables.large_files.product_name_short %} 개체를 퍼블릭 포크로 푸시할 수 있습니다.

{% endif %}

## 추가 참고 자료

- “[Git Large File Storage 개체를 사용하여 리포지토리 복제](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)”
