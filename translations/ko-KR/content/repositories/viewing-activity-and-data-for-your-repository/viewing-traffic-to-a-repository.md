---
title: 리포지토리에 대한 트래픽 보기
intro: '리포지토리에 대한 푸시 액세스 권한이 있는 사용자는 트래픽 그래프에서 전체 클론(페치 아님), 지난 14일의 방문자, 참조 사이트 및 인기 있는 콘텐츠를 포함한 트래픽을 볼 수 있습니다.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-traffic-to-a-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository traffic
ms.openlocfilehash: 75b4900893a0874e42b076962d25babcb4c09233
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136587'
---
특정 경로가 참조된 링크에서 검색 엔진 및 {% data variables.product.product_name %} 자체를 제외한 참조 사이트로 이동할 수 있습니다. 인기 콘텐츠는 트래픽을 생성한 특정 콘텐츠에 연결됩니다.

추천 사이트와 인기 콘텐츠는 조회수 및 고유 방문자 수를 기준으로 정렬됩니다. 전체 클론 및 방문자 정보는 매시간 업데이트되고 참조 사이트 및 인기 콘텐츠 섹션은 매일 업데이트됩니다. 트래픽 그래프의 모든 데이터는 위치에 관계없이 UTC+0 표준 시간대를 사용합니다.

{% tip %}

**팁:** 트래픽 그래프의 특정 날짜 위로 마우스를 가져가서 해당 날짜의 정확한 데이터를 볼 수 있습니다.

{% endtip %}

![도구 설명이 있는 리포지토리 트래픽 그래프](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## 트래픽 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **트래픽** 을 클릭합니다.
![트래픽 탭](/assets/images/help/graphs/traffic_tab.png)
