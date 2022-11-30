---
title: 토픽을 사용하여 리포지토리 분류
intro: '다른 사용자가 프로젝트를 찾고 참여할 수 있도록 리포지토리에 프로젝트가 의도한 목적, 주제 영역, 선호도 그룹 또는 기타 중요한 특성과 관련된 토픽을 추가할 수 있습니다.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108888'
---
## 토픽 정보

토픽을 사용하면 특정 주제 영역의 리포지토리를 살펴보고, 기여할 프로젝트를 찾고, 특정 문제에 대한 새로운 해결책을 발견할 수 있습니다. 토픽은 리포지토리의 기본 페이지에 표시됩니다. 토픽 이름을 클릭하여 {% ifversion fpt or ghec %}관련 토픽 및 해당 토픽으로 분류된 다른 리포지토리 목록을 볼 수 있습니다{% else %}해당 토픽으로 다른 리포지토리를 검색할 수 있습니다{% endif %}.

![토픽을 표시하는 테스트 리포지토리의 기본 페이지](/assets/images/help/repository/os-repo-with-topics.png)

가장 많이 사용되는 토픽을 찾으려면 https://github.com/topics/ 로 이동합니다.

{% ifversion fpt or ghec %}[github/explore](https://github.com/github/explore) 리포지토리에서 {% data variables.product.product_name %}의 추천 토픽 집합에 기여할 수 있습니다. {% endif %}

리포지토리 관리자는 리포지토리에 원하는 모든 토픽을 추가할 수 있습니다. 리포지토리를 분류하는 데 유용한 토픽에는 리포지토리의 용도, 주제 영역, 커뮤니티 또는 언어가 포함됩니다.{% ifversion fpt or ghec %} 또한 {% data variables.product.product_name %}는 퍼블릭 리포지토리 콘텐츠를 분석하고 리포지토리 관리자가 수락하거나 거부할 수 있는 제안된 토픽을 생성합니다. 프라이빗 리포지토리 콘텐츠는 분석되지 않으며 토픽 제안을 받지 않습니다.{% endif %}

{% ifversion fpt %}퍼블릭 및 프라이빗{% elsif ghec or ghes %}퍼블릭, 프라이빗, 내부{% elsif ghae %}프라이빗 및 내부{% endif %} 리포지토리에 토픽이 포함될 수 있지만 액세스 권한이 있는 프라이빗 리포지토리만 토픽 검색 결과에 표시됩니다.

특정 토픽과 연결된 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[리포지토리 검색](/search-github/searching-on-github/searching-for-repositories#search-by-topic)”을 참조하세요. {% data variables.product.product_name %}에서 토픽 목록을 검색할 수도 있습니다. 자세한 내용은 “[토픽 검색](/search-github/searching-on-github/searching-topics)”을 참조하세요.

## 리포지토리에 토픽 추가

{% note %}

**참고:** 토픽 이름은 프라이빗 리포지토리 내에서 토픽을 만드는 경우에도 항상 공개됩니다.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. “정보” 오른쪽에 있는 {% octicon "gear" aria-label="The Gear icon" %}을 클릭합니다.
  ![리포지토리 기본 페이지의 톱니 모양 아이콘](/assets/images/help/repository/edit-repository-details-gear.png)
3. “토픽”에서 리포지토리에 추가할 토픽을 입력한 다음, 공백을 입력합니다.
  ![토픽 입력 양식](/assets/images/help/repository/add-topic-form.png)
4. 토픽 추가를 완료한 후 **변경 내용 저장** 을 클릭합니다.
  ![“리포지토리 세부 정보 편집”의 “변경 내용 저장” 단추](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
