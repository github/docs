---
title: Wiki에 대한 액세스 권한 변경
intro: '리포지토리 공동 작업자만 기본적으로 {% ifversion fpt 또는 ghec 또는 ghes %}public{% endif %} 리포지토리의 wiki를 편집할 수 있지만{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 계정이 있는 모든 사용자가 위키를 편집하도록 허용할 수 있습니다.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: cc69a849a2557339af0a1baec7a2ed548fa85e3a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099349'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 기능에서 **공동 작업자로만 편집 제한** 선택을 취소합니다.
   ![Wiki 편집 제한](/assets/images/help/wiki/wiki_restrict_editing.png)

## 추가 참고 자료

- “[Wiki 사용 안 함](/communities/documenting-your-project-with-wikis/disabling-wikis)”
