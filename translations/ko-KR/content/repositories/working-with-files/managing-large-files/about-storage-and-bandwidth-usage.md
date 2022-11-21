---
title: 스토리지 및 대역폭 사용량 정보
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Storage & bandwidth
ms.openlocfilehash: 8a6dd01c62b5b1c69afe29536e3d4ba206e988e7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883029'
---
{% data variables.large_files.product_name_short %}은(는) 계정 또는 조직에 유료 구독이 있는지 여부에 관계없이 {% data variables.product.product_name %}의 모든 리포지토리에 사용할 수 있습니다.

## 스토리지 및 대역폭 사용 추적

{% data variables.large_files.product_name_short %}을(를) 사용하여 추적된 파일로 변경 내용을 커밋하고 푸시하면 전체 파일의 새 버전이 푸시되고 총 파일 크기가 리포지토리 소유자의 스토리지 제한에 대해 계산됩니다. {% data variables.large_files.product_name_short %}(으)로 추적된 파일을 다운로드하면 총 파일 크기가 리포지토리 소유자의 대역폭 제한에 대해 계산됩니다. {% data variables.large_files.product_name_short %} 업로드는 대역폭 제한에 포함되지 않습니다.

예를 들면 다음과 같습니다.
- {% data variables.large_files.product_name_short %}에 500MB 파일을 푸시하는 경우 할당된 스토리지의 500MB를 사용하고 대역폭은 사용하지 않습니다. 1바이트 변경을 수행하고 파일을 다시 푸시하는 경우 또 다른 500MB의 스토리지를 사용하고 대역폭은 사용하지 않으므로 이 두 푸시에 대한 총 사용량은 스토리지 1GB와 대역폭 0이 됩니다.
- LFS로 추적된 500MB 파일을 다운로드하는 경우 리포지토리 소유자의 할당된 대역폭 500MB를 사용합니다. 협력자가 파일 변경을 푸시하고 새 버전을 로컬 리포지토리로 끌어오면 500MB의 대역폭을 추가로 사용하여 이 두 다운로드의 총 사용량은 1GB의 대역폭이 됩니다.
- {% data variables.product.prodname_actions %}이(가) LFS로 추적되는 500MB 파일을 다운로드하는 경우 리포지토리 소유자의 할당된 대역폭 500MB를 사용합니다.

{% ifversion fpt or ghec %} {% data variables.large_files.product_name_long %}({% data variables.large_files.product_name_short %}) 개체가 리포지토리의 소스 코드 보관 파일에 포함된 경우 해당 보관 파일의 다운로드는 리포지토리의 대역폭 사용량에 포함됩니다. 자세한 내용은 “[리포지토리의 보관 파일로 {% data variables.large_files.product_name_short %} 개체 관리](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”를 참조하세요.
{% endif %}

{% tip %}

**팁**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

## 스토리지 할당량

데이터 팩을 구입하지 않고 {% data variables.large_files.initial_storage_quota %} 이상의 스토리지를 사용하는 경우 큰 자산으로 리포지토리를 복제할 수 있지만 포인터 파일만 검색하므로 새 파일을 다시 푸시할 수 없습니다. 포인터 파일에 대한 자세한 내용은 “[{% data variables.large_files.product_name_long %} 정보](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)”를 참조하세요.

## 대역폭 할당량

데이터 팩을 구입하지 않고 매월 {% data variables.large_files.initial_bandwidth_quota %} 이상의 대역폭을 사용하는 경우 다음 달까지 계정에서 {% data variables.large_files.product_name_short %} 지원이 비활성화됩니다.

## 추가 참고 자료

- “[{% data variables.large_files.product_name_long %} 사용량 보기](/articles/viewing-your-git-large-file-storage-usage)”
- “[{% data variables.large_files.product_name_long %} 요금 청구 관리](/articles/managing-billing-for-git-large-file-storage)”
