---
title: 리포지토리의 보관 계층에 있는 Git LFS 개체 관리
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: '{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 개체가 {% data variables.product.product_name %}에서 리포지토리에 대해 만드는 소스 코드 보관 파일(예: ZIP 파일 및 tarball)에 포함되는지 여부를 선택할 수 있습니다.'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
ms.openlocfilehash: 64bad4c056a29ceffc465065c84a7424c870049f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881774'
---
## 보관 계층에 있는 {% data variables.large_files.product_name_short %} 개체 정보

{% data variables.product.product_name %}은 ZIP 파일 및 tarball 형식으로 리포지토리의 소스 코드 보관 계층을 만듭니다. 사용자는 리포지토리의 기본 페이지에서 이러한 보관 계층을 다운로드하거나 릴리스 자산으로 다운로드할 수 있습니다. 기본적으로 {% data variables.large_files.product_name_short %} 개체는 이러한 보관 계층에 포함되지 않으며, 이러한 개체에 대한 포인터 파일만 포함됩니다. 리포지토리 보관 계층의 사용성을 높이고 싶다면 {% data variables.large_files.product_name_short %} 개체를 대신 포함할 수 있습니다. 포함되려면 리포지토리에 커밋된 *.gitattributes* 파일에 있는 추적 규칙을 {% data variables.large_files.product_name_short %} 개체에 적용해야 합니다.

리포지토리의 보관 계층에 {% data variables.large_files.product_name_short %} 개체를 포함하도록 선택하는 경우, 이러한 보관 계층의 모든 다운로드는 계정의 대역폭 사용량에 포함됩니다. 각 계정은 매월 대역폭 {% data variables.large_files.initial_bandwidth_quota %}를 무료로 받으며, 추가 사용량에 대한 비용을 지불할 수 있습니다. 자세한 내용은 "[스토리지 및 대역폭 사용량 정보](/github/managing-large-files/about-storage-and-bandwidth-usage)" 및 "[{% data variables.large_files.product_name_long %} 청구 관리](/billing/managing-billing-for-git-large-file-storage)"를 참조하세요.

( *.lfsconfig* 에 구성된) 외부 LFS 서버를 사용하는 경우 이러한 LFS 파일은 리포지토리의 보관 계층에 포함되지 않습니다. 보관 계층에는 {% data variables.product.product_name %}에 커밋된 파일만 포함됩니다.

## 보관 계층에 있는 {% data variables.large_files.product_name_short %} 개체 관리

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. "보관 계층"에서 보관 계층에 **{% data variables.large_files.product_name_short %} 개체 포함** 을 선택하거나 선택 취소합니다.
  ![보관 계층에 {% data variables.large_files.product_name_short %} 개체를 포함하는 확인란](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
