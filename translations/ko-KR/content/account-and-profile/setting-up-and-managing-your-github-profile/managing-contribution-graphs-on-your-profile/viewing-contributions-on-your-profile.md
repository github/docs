---
title: 프로필에서 기여 보기
intro: Your {% data variables.product.product_name %} profile shows off {% ifversion fpt or ghes or ghec %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.
redirect_from:
- /articles/viewing-contributions
- /articles/viewing-contributions-on-your-profile-page
- /articles/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: View contributions
ms.openlocfilehash: fccf691bc2fa865dd6ebcdebd112cbe6da02e0b5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145115276"
---
{% ifversion fpt or ghes or ghec %}기여 그래프는 공용 리포지토리의 작업을 보여줍니다. {% endif %}익명화된 프라이빗 리포지토리의 작업에 대한 특정 세부 정보와 함께 {% ifversion fpt or ghes or ghec %}퍼블릭 및 {% endif %}프라이빗 리포지토리 둘 다의 작업을 표시하도록 선택할 수 있습니다. 자세한 내용은 “[프로필에서 개인 기여 공개 또는 숨기기](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)”를 참조하세요.

{% note %}

**참고:** 커밋을 작성하는 데 사용한 메일 주소가 {% data variables.product.product_name %}의 계정에 연결된 경우에만 커밋이 기여 그래프에 표시됩니다. 자세한 내용은 “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”를 참조하세요.

{% endnote %}

## <a name="what-counts-as-a-contribution"></a>기여로 간주되는 항목

프로필 페이지에서 특정 작업은 기여로 간주됩니다.

- 리포지토리의 기본 분기 또는 `gh-pages` 분기로 커밋
- 문제 열기
- 토론 열기
- 토론에 답변
- 끌어오기 요청 제안
- 끌어오기 요청 검토 제출{% ifversion ghes or ghae %}
- 리포지토리의 기본 분기 또는 `gh-pages` 분기{% endif %}에서 커밋 공동 작성

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## <a name="popular-repositories"></a>인기 있는 리포지토리

이 섹션에는 가장 많은 감시자가 있는 리포지토리가 표시됩니다. {% ifversion fpt or ghes or ghec %}[프로필에 리포지토리를 고정](/articles/pinning-repositories-to-your-profile)하면 이 섹션이 “고정된 리포지토리”로 변경됩니다. {% endif %}

![인기 있는 리포지토리](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## <a name="pinned-repositories"></a>고정 리포지토리

이 섹션에는 퍼블릭 리포지토리가 최대 6개까지 표시되며 기여한 리포지토리 이외에 내 리포지토리도 포함할 수 있습니다. 추천하도록 선택한 리포지토리에 대한 중요한 세부 정보를 쉽게 볼 수 있도록 이 섹션에는 각 리포지토리에는 수행 중인 작업의 요약, 리포지토리에서 받은 [별](/articles/saving-repositories-with-stars/)의 개수와 리포지토리에 사용되는 기본 프로그래밍 언어가 포함됩니다. 자세한 내용은 “[프로필에 리포지토리 고정](/articles/pinning-repositories-to-your-profile)”을 참조하세요.

![고정 리포지토리](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## <a name="contributions-calendar"></a>기여 일정

기여 일정에는 기여 활동이 표시됩니다.

### <a name="viewing-contributions-from-specific-times"></a>특정 시간의 기여 보기

- 하루에 해당하는 사각형을 클릭하면 해당 24시간 동안 기여한 내용이 표시됩니다.
- *Shift* 키를 누른 상태에서 다른 날에 해당하는 사각형을 클릭하면 해당 기간에 기여한 내용이 표시됩니다.

{% note %}

**참고:** 기여 일정에서는 날짜 범위를 최대 1개월까지 선택할 수 있습니다. 더 큰 시간 기간을 선택하면 1개월의 기여만 표시됩니다.

{% endnote %}

![기여 그래프](/assets/images/help/profile/contributions_graph.png)

### <a name="how-contribution-event-times-are-calculated"></a>기여 이벤트 시간을 계산하는 방법

타임스탬프는 커밋 및 끌어오기 요청에 대해 다르게 계산됩니다.
- **커밋** 은 커밋 타임스탬프에서 표준 시간대 정보를 사용합니다. 자세한 내용은 “[타임라인에서 커밋 문제 해결](/articles/troubleshooting-commits-on-your-timeline)”을 참조하세요.
- {% data variables.product.product_name %}에서 열린 **끌어오기 요청** 및 **문제** 는 브라우저의 표준 시간대를 사용합니다. API를 통해 열린 요청은 [API 호출에 지정된](https://developer.github.com/changes/2014-03-04-timezone-handling-changes) 타임스탬프 또는 표준 시간대를 사용합니다.

## <a name="activity-overview"></a>활동 개요

{% data reusables.profile.activity-overview-summary %} 자세한 내용은 “[프로필에서 활동 개요 표시](/articles/showing-an-overview-of-your-activity-on-your-profile)”를 참조하세요.

![프로필의 활동 개요 섹션](/assets/images/help/profile/activity-overview-section.png)

활동 개요의 추천 조직은 조직에서 얼마나 적극적인지에 따라 우선 순위가 지정됩니다. 프로필 정보에서 한 조직을 @mention하고 해당 조직의 구성원인 경우 활동 개요에서 이 조직의 우선 순위는 가장 높게 지정됩니다. 자세한 내용은 “[사람 및 팀 멘션](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)” 또는 “[프로필에 정보 추가](/articles/adding-a-bio-to-your-profile/)”를 참조하세요.

## <a name="contribution-activity"></a>기여 활동

기여 활동 섹션에는 사용자가 만들거나 공동 작성한 커밋, 제안한 끌어오기 요청 및 시작한 이슈를 포함하여 작업의 자세한 타임라인이 포함되어 있습니다. 기여 활동의 맨 아래에서 **추가 활동 표시** 를 클릭하거나 페이지의 오른쪽에서 보려고 하는 연도를 클릭하면 시간의 흐름에 따른 기여를 볼 수 있습니다. 조직에 참가하거나, 첫 번째 끌어오기 요청을 제안하거나, 중요한 이슈를 시작한 날짜와 같은 중요한 순간이 기여 활동에서 강조 표시됩니다. 타임라인에서 특정 이벤트가 표시되지 않는 경우 해당 이벤트가 발생한 조직 또는 리포지토리에 대한 액세스 권한을 아직도 가지고 있는지 확인해 보세요.

![기여 활동 시간 필터](/assets/images/help/profile/contributions_activity_time_filter.png)

## <a name="viewing-contributions-from--data-variablesproductprodname_enterprise--on--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_enterprise %}의 기여 보기

{% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} 또는 {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %}을(를) 사용하고 엔터프라이즈 소유자가 {% data variables.product.prodname_unified_contributions %}를 사용하는 경우 {% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 횟수를 보낼 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %} 프로필에 엔터프라이즈 기여 보내기](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”를 참조하세요.

