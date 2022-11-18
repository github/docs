---
title: Git LFS
intro: '리포지토리에 대해 {% data variables.large_files.product_name_long %}(LFS)을 사용하거나 사용하지 않도록 설정할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109768'
---
## {% data variables.large_files.product_name_short %} API 정보

{% data variables.large_files.product_name_short %}를 사용하여 Git 리포지토리에 대용량 파일을 저장할 수 있습니다. {% data variables.large_files.product_name_short %} API를 사용하면 개별 리포지토리에 대한 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다. {% data variables.large_files.product_name_short %}에 대한 자세한 내용은 "[{% data variables.large_files.product_name_short %}정보](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)"를 참조하세요.

리포지토리에 대한 관리자 액세스 권한이 있는 사람 {% data variables.large_files.product_name_short %} API를 사용할 수 있습니다.

{% ifversion fpt or ghec %}

{% data variables.large_files.product_name_short %}의 사용량은 청구될 수 있습니다. 자세한 내용은 “[{% data variables.large_files.product_name_long %} 요금 청구 정보](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)”를 참조하세요.

조직에 속한 리포지토리에 대해 {% data variables.large_files.product_name_short %} API를 사용하려면 역할에서 조직의 {% ifversion ghec %} 또는 엔터프라이즈의 {% endif %} 청구에 대한 액세스 권한을 제공해야 합니다. {% ifversion fpt %} 자세한 내용은 "[조직의 역할"을 참조하세요](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners). {% endif %}

{% ifversion ghec %}

| 리포지토리 소유권 | 필요한 리포지토리 액세스 | 필수 역할 | 추가 정보 |
| :- | :- | :- | :- |
| 개인 계정 | Admin | 해당 없음 | 해당 없음 |
| <ul><li>{% data variables.product.prodname_team %}의 조직</li><li>엔터프라이즈가 아닌 {% data variables.product.product_name %}에 대한 조직</li></ul> | 관리. 조직 소유자인 경우 상속됩니다. | 조직 소유자 또는 청구 관리자 | “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)” |
| 엔터프라이즈의 조직 | 관리. 조직 소유자인 경우 상속할 수 있습니다. | 엔터프라이즈 소유자 또는 청구 관리자 | “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)” |

{% endif %}

{% endif %}
