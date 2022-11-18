---
title: 프로필 정보
intro: '프로필 페이지에서는 관심 있는 리포지토리, 기여한 내용, 대화 내용을 통해 작업에 대한 이야기를 알려줍니다.'
redirect_from:
  - /articles/viewing-your-feeds
  - /articles/profile-pages
  - /articles/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
ms.openlocfilehash: e27e14102b4f57e9eb50266c5c271a2f6bb3892c
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111625'
---
바이오에 자신에 대한 개인 정보를 추가할 수 있습니다(예: 이전 근무지, 기여한 프로젝트, 다른 사람들이 알고 싶어 할 수 있는 관심사). 자세한 내용은 “[프로필에 바이오 추가](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)”를 참조하세요.

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

![프로필에 표시되는 프로필 추가 정보 파일](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

프로필을 방문하는 사용자에게는 사용자가 연 문제 및 끌어오기 요청, 커밋, 검토한 끌어오기 요청과 같은 기여 활동의 타임라인이 표시됩니다. 퍼블릭 기여만 표시하거나 익명화된 프라이빗 기여도 포함하도록 선택할 수 있습니다. 자세한 내용은 “[프로필 페이지에서 기여 보기](/articles/viewing-contributions-on-your-profile-page)” 또는 “[프로필에 프라이빗 기여 공개 또는 숨기기](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”를 참조하세요.

프로필을 방문하는 사용자는 다음 정보도 볼 수 있습니다.

- 소유하거나 기여한 리포지토리 및 gist. {% ifversion fpt or ghes or ghec %} 프로필에 리포지토리와 gist을 고정하여 최상의 작업을 소개할 수 있습니다. 자세한 내용은 “[프로필에 항목 고정](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)”을 참조하세요.{% endif %}
- {% ifversion fpt or ghec %}에 출연하고 목록으로 구성한 리포지토리{% endif %}. 자세한 내용은 "[별을 사용하여 리포지토리 저장](/articles/saving-repositories-with-stars/)"을 참조하세요.
- 가장 많이 활동하는 조직, 리포지토리 및 팀의 활동에 대한 개요입니다. 자세한 내용은 “[프로필에서 활동 개요 표시](/articles/showing-an-overview-of-your-activity-on-your-profile)”를 참조하세요.{% ifversion fpt or ghec %}
- {% data variables.product.prodname_pro %}를 사용하거나 {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, {% data variables.product.company_short %} 개발자 프로그램과 같은 프로그램에 참여하는 경우 표시되어 여러분의 활동을 강조하는 배지 및 업적입니다. 자세한 내용은 “[프로필 개인 설정](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)”을 참조하세요.{% endif %}

프로필의 상태를 설정하여 가용성에 대한 정보를 제공할 수도 있습니다. 자세한 내용은 “[상태 설정](/articles/personalizing-your-profile/#setting-a-status)”을 참조하세요.

## 추가 참고 자료

- “[내 프로필 사진을 어떻게 설정하나요?](/articles/how-do-i-set-up-my-profile-picture)”
- “[프로필에서 프라이빗 기여 공개 또는 숨기기](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”
- “[프로필에서 기여 보기](/articles/viewing-contributions-on-your-profile)”
