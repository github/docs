---
title: 리포지토리 작업 요약 보기
intro: '리포지토리의 끌어오기 요청, 문제 및 커밋 작업의 개요를 볼 수 있습니다.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882305'
---
## Pulse 정보

Pulse를 통해 리포지토리의 활동에 대한 개요를 볼 수 있습니다. Pulse에는 열려 있고 병합된 끌어오기 요청 목록, 열기 및 닫힌 문제, 선택한 [기간 동안](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) 프로젝트의 기본 분기에 커밋한 상위 15명의 사용자에 대한 커밋 활동을 보여 주는 그래프가 포함되어 있습니다.

커밋 공동 작성자는 커밋이 리포지토리의 기본 분기에 병합되고 가장 많은 커밋에 기여한 상위 15명의 사용자에 있는 경우 커밋 작업 요약에 포함됩니다.

## Pulse 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## 시간별 필터링

기본적으로 Pulse는 리포지토리 작업의 마지막 7일을 표시합니다. 다른 기간을 선택하려면 Pulse 개요의 오른쪽 위 모서리에 있는 **기간** 드롭다운을 클릭합니다.

![시간별 Pulse 작업 필터링](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
