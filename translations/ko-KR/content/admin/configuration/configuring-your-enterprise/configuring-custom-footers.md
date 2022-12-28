---
title: 사용자 지정 바닥글 구성
intro: '{% data variables.product.product_name %}에 사용자 지정 바닥글을 추가하여 사용자에게 엔터프라이즈별 링크에 대한 쉬운 액세스를 제공할 수 있습니다.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120703'
---
엔터프라이즈 담당자는 최대 5개의 추가 링크가 있는 사용자 지정 바닥글을 표시하도록 {% data variables.product.product_name %}를 구성할 수 있습니다.

![사용자 지정 바닥글](/assets/images/enterprise/custom-footer/octodemo-footer.png)

사용자 지정 바닥글은 엔터프라이즈{% endif %}에 속하는 리포지토리 및 조직의 모든 리포지토리 및 조직 페이지에서 모든 엔터프라이즈 구성원과 협업자에게{% data variables.product.product_name %}{% elsif ghec %}의 모든 페이지에서 모든 사용자에게 {% data variables.product.prodname_dotcom %} 바닥글 {% ifversion ghes or ghae %} 위에 표시됩니다.

## 엔터프라이즈에 대한 사용자 지정 바닥글 구성

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. “설정”에서 **프로필** 을 클릭합니다.
{%- ifversion ghec %} ![Enterprise 프로필 설정](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![Enterprise 프로필 설정](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. 프로필 섹션 상단에서 **사용자 지정 바닥글** 을 클릭합니다.
![사용자 지정 바닥글 섹션](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. 표시된 필드에 최대 5개의 링크를 추가합니다.
![바닥글 링크 추가](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. **사용자 지정 바닥글 업데이트** 를 클릭하여 콘텐츠를 저장하고 사용자 지정 바닥글을 표시합니다.
![사용자 지정 바닥글 업데이트](/assets/images/enterprise/custom-footer/update-custom-footer.png)
