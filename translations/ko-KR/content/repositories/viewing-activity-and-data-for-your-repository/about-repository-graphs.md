---
title: 리포지토리 그래프 정보
intro: 리포지토리 그래프는 리포지토리에 대한 데이터를 보고 분석하는 데 도움이 됩니다.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136630'
---
리포지토리의 그래프는 {% ifversion fpt or ghec %} 트래픽, 리포지토리에 종속된 프로젝트, {% endif %} 기여자 및 리포지토리에 대한 커밋, 리포지토리의 포크 및 네트워크에 대한 정보를 제공합니다. 리포지토리를 유지 관리하는 경우 이 데이터를 사용하여 리포지토리를 사용하는 사용자와 리포지토리를 사용하는 이유를 더 잘 이해할 수 있습니다.

{% ifversion fpt or ghec %}

일부 리포지토리 그래프는 {% data variables.product.prodname_free_user %}이(가) 있는 퍼블릭 리포지토리에서만 사용할 수 있습니다.
- 펄스
- 참가자
- 트래픽
- 커밋
- 코드 주기
- 네트워크

다른 모든 리포지토리 그래프는 모든 리포지토리에서 사용할 수 있습니다. 모든 리포지토리 그래프는 {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}이(가) 있는 퍼블릭 및 프라이빗 리포지토리에서 사용할 수 있습니다. {% data reusables.gated-features.more-info %}

{% endif %}
