---
title: 프로필에서 프라이빗 기여 공개 또는 숨기기
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068942"
---
프라이빗 기여를 공개하는 경우 작업하는 프라이빗 리포지토리에 대한 액세스 권한이 없는 사람은 프라이빗 기여의 세부 정보를 볼 수 없습니다. 대신 특정 날짜에 사용자가 수행한 프라이빗 기여의 수를 볼 수 있습니다. 퍼블릭 기여에는 세부 정보가 포함되어 있습니다. 자세한 내용은 “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)”를 참조하세요.

{% note %}

**참고:** {% ifversion fpt or ghes or ghec %}{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}에서 프로필의 퍼블릭 기여는 {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}에 액세스할 수 있는 {% data variables.product.product_location%}{% endif %}의 다른 사용자에게만 표시됩니다{% ifversion fpt or ghec %}. {% elsif ghae %}{% data variables.product.prodname_ghe_managed %}의 경우 엔터프라이즈의 다른 멤버만이 프로필의 기여를 볼 수 있습니다.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>프라이빗 기여의 표시 여부 변경

{% data reusables.profile.access_profile %}
1. 프로필에서 프라이빗 기여 공개 또는 숨기기:
    - 프라이빗 기여를 공개하려면 기여 그래프 위에 **기여 설정** 드롭다운 메뉴를 사용하고 **프라이빗 기여** 를 선택합니다. 방문자는 추가 세부 정보 없이 프라이빗 기여 수를 볼 수 있습니다.
  ![방문자가 기여 설정 드롭다운 메뉴에서 프라이빗 기여를 볼 수 있도록 설정](/assets/images/help/profile/private-contributions-on.png)
    - 프라이빗 기여를 숨기려면 기여 그래프 위에 **기여 설정** 드롭다운 메뉴를 사용하고 **프라이빗 기여** 를 선택 취소합니다. 방문자는 퍼블릭 기여만 볼 수 있습니다.
   ![방문자가 기여 설정 드롭다운 메뉴에서 프라이빗 기여를 볼 수 있도록 설정](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>추가 참고 자료

- “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)”
- “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
