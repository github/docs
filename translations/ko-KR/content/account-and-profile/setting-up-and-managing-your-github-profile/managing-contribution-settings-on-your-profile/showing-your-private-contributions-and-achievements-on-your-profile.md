---
title: 프로필에 개인 기여 및 업적 표시
intro: '{% data variables.product.product_name %} 프로필에는 지난 1년 동안의 리포지토리 기여도 그래프가 표시됩니다. {% ifversion fpt or ghes or ghec %}퍼블릭 리포지토리에서의 활동 외에도{% endif %} {% ifversion fpt or ghes or ghec %}프라이빗 및 내부{% else %}프라이빗{% endif %} 리포지토리에서의 익명화된 활동을 표시하도록 선택할 수 있습니다.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: e7c6997ec3dc816624e687f1bf74024380fb0dd5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094627'
---
프라이빗 기여를 공개하는 경우 작업하는 프라이빗 리포지토리에 대한 액세스 권한이 없는 사람은 프라이빗 기여의 세부 정보를 볼 수 없습니다. 대신 특정 날짜에 사용자가 수행한 프라이빗 기여의 수를 볼 수 있습니다. 퍼블릭 기여에는 세부 정보가 포함되어 있습니다. 자세한 내용은 “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)”를 참조하세요.

{% note %}

**참고:** {% ifversion fpt 또는 ghec %}On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, 프로필의 공개 기여는 {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}에 액세스할 수 있는 전 세계 모든 사용자에게 {% ifversion fpt 또는 ghec %}을(를) {% data variables.location.product_location%}{% endif %}의 다른 사용자에게만 볼 수 있습니다. {% elsif ghae %} {% 데이터 variables.product.prodname_ghe_managed %}에서 기업의 다른 구성원만 프로필의 기여를 볼 수 있습니다. {% endif %}

{% endnote %}

## 프라이빗 기여의 표시 여부 변경

{% data reusables.profile.access_profile %}
1. 프로필에서 프라이빗 기여 공개 또는 숨기기:
    - 프라이빗 기여를 공개하려면 기여 그래프 위에 **기여 설정** 드롭다운 메뉴를 사용하고 **프라이빗 기여** 를 선택합니다. 방문자는 추가 세부 정보 없이 프라이빗 기여 수를 볼 수 있습니다.
  ![방문자가 기여 설정 드롭다운 메뉴에서 프라이빗 기여를 볼 수 있도록 설정](/assets/images/help/profile/private-contributions-on.png)
    - 프라이빗 기여를 숨기려면 기여 그래프 위에 **기여 설정** 드롭다운 메뉴를 사용하고 **프라이빗 기여** 를 선택 취소합니다. 방문자는 퍼블릭 기여만 볼 수 있습니다.
   ![방문자가 기여 설정 드롭다운 메뉴에서 프라이빗 기여를 볼 수 있도록 설정](/assets/images/help/profile/private-contributions-off.png)

## 업적 표시 유형 변경

{% data reusables.user-settings.access_settings %}
1. 프로필에서 업적을 표시하거나 숨깁니다.
    - 프로필에 업적을 표시하려면 **프로필 설정** 으로 이동하고 **내 프로필에 업적 표시** 옆에 있는 확인란을 선택합니다.
  ![방문자가 프로필 설정에서 업적을 볼 수 있도록 설정](/assets/images/help/profile/achievements-profile-settings-off.png)
    - 프로필에서 도전 과제를 숨기려면 **프로필 설정** 으로 이동하고 **내 프로필에 도전 과제 표시 옆에 있는** 확인란의 선택을 취소합니다.
  ![ 프로필 설정](/assets/images/help/profile/achievements-profile-settings-on.png) {% ifversion hide-individual-achievements %}에서 방문자로부터 도전 과제 숨기기
1. 필요에 따라 프로필에서 개별 도전 과제를 숨기려면 {% 데이터 reusables.profile.access_profile %}
     1. 프로필의 왼쪽 사이드바에 있는 도전 과제 섹션으로 이동하고 도전 과제 헤더를 선택합니다. ![프로필 사이드바의 도전 과제](/assets/images/help/profile/achievements-on-profile.png)
     2. 도전 과제를 클릭하여 숨기려는 도전 과제의 세부 정보 보기를 엽니다.
     3. 세부 정보 보기에서 {% 옥티콘 "눈" aria-label="눈 아이콘" %} 아이콘을 클릭하여 도전 과제를 숨깁니다. ![도전 과제 세부 정보 보기](/assets/images/help/profile/achievements-detail-view.png) 숨겨지면 배지는 {% 옥티콘 "눈을 감은" aria-label="눈 닫힌 아이콘" %} 아이콘으로 표시되며 사용자에게만 표시됩니다. ![숨겨진 도전 과제](/assets/images/help/profile/achievements-hidden.png)

{% endif %}
## 추가 참고 자료

- “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)”
- “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
