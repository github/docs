---
title: 리포지토리의 콘텐츠에 대한 변경 내용 분석
intro: '리포지토리의 커밋, 커밋 빈도 및 콘텐츠 추가 및 삭제를 분석하여 리포지토리의 콘텐츠에 대한 변경 내용을 볼 수 있습니다.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
ms.openlocfilehash: 7b6c9918b5d3de0fbae3b94fb8e90ece694a4076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136629'
---
## 리포지토리의 커밋 시각화

커밋 그래프에서 지난 1년 동안의 리포지토리에 대한 모든 커밋(병합 커밋 제외)을 볼 수 있습니다.

위쪽 그래프는 전체 연도에 대한 주별 커밋을 보여 줍니다.

![리포지토리 커밋 년 그래프](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

아래쪽 그래프는 선택한 주의 요일별 평균 커밋 수를 보여 줍니다.

![리포지토리 커밋 주 그래프](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### 커밋 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **커밋** 을 클릭합니다.
![커밋 탭](/assets/images/help/graphs/commits_tab.png)

## 리포지토리의 콘텐츠에 대한 추가 및 삭제 시각화

코드 주기 그래프에는 리포지토리 기록의 매주 콘텐츠에 대한 추가 및 삭제가 표시됩니다.

{% ifversion fpt or ghec %}

![코드 주파수 그래프](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### 코드 주기 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **코드 주기** 를 클릭합니다.
![코드 주기 탭](/assets/images/help/graphs/code_frequency_tab.png)
