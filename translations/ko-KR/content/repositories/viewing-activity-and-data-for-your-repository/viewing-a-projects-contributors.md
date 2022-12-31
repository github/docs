---
title: 프로젝트의 기여자 보기
intro: '리포지토리{% ifversion fpt or ghec %} 및 해당 종속성{% endif %}에 커밋을 기여한 사용자를 확인할 수 있습니다.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369163'
---
## 기여자 정보

기여자 그래프에서 커밋 공동 작성자{% endif %}를 포함하여 리포지토리{% ifversion ghes or ghae %}에 대한 상위 100명의 기여자를 볼 수 있습니다. 병합 커밋 및 빈 커밋은 이 그래프에 대한 기여로 계산되지 않습니다.

{% ifversion fpt or ghec %} 프로젝트의 Python 종속성에 기여한 사용자 목록을 볼 수도 있습니다. 이 커뮤니티 기여자 목록에 액세스하려면 `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`를 방문하세요.
{% endif %}

## 기여자 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **기여자** 를 클릭합니다.
  ![기여자 탭](/assets/images/help/graphs/contributors_tab.png)
4. 필요에 따라 특정 기간 동안의 기여자를 보려면 해당 기간이 선택될 때까지 클릭한 다음, 끕니다. 기여자 그래프는 매주 일요일에 주간 커밋 번호를 합산하므로 기간에는 일요일이 포함되어야 합니다.
  ![기여자 그래프에서 선택한 시간 범위](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## 기여자 문제 해결

리포지토리의 기여자 그래프에 표시되지 않는 경우 다음과 같은 이유일 수 있습니다.
- 상위 100명의 기여자 중 한 명이 아닙니다.
- 커밋이 기본 분기에 병합되지 않았습니다.
- 커밋을 작성하는 데 사용한 이메일 주소가 {% data variables.product.product_name %}의 계정에 연결되어 있지 않습니다.

{% tip %}

**팁:** 리포지토리의 모든 커밋 기여자를 나열하려면 “[리포지토리 기여자 나열](/rest/repos/repos#list-repository-contributors)”을 참조하세요.

{% endtip %}

리포지토리의 모든 커밋이 기본 분기가 아닌 분기에 있는 경우 기여자 그래프에 표시되지 않습니다. 예를 들어 `gh-pages`가 리포지토리의 기본 분기가 아닌 한 `gh-pages` 분기의 커밋은 그래프에 포함되지 않습니다. 커밋을 기본 분기에 병합하려면 끌어오기 요청을 생성하면 됩니다. 자세한 내용은 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.

커밋을 작성하는 데 사용한 이메일 주소가 {% data variables.product.product_name %}의 계정에 연결되어 있지 않으면 커밋이 계정에 연결되지 않고 기여자 그래프에 표시되지 않습니다. 자세한 내용은 "[커밋 이메일 주소 설정](/articles/setting-your-commit-email-address){% ifversion not ghae %}" 및 "[{% data variables.product.prodname_dotcom %} 계정에 이메일 주소 추가](/articles/adding-an-email-address-to-your-github-account){% endif %}"를 참조하세요.
