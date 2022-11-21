---
title: 항목 검색
intro: '{% data variables.product.product_name %}의 리포지토리와 연결된 토픽을 검색할 수 있습니다.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118860'
---
## 항목에 대한 {% data variables.product.product_name %} 검색

{% data variables.product.product_name %}에서 항목을 검색하고, 관련 항목을 탐색하고, 특정 항목과 연결된 리포지토리 수를 확인할 수 있습니다.

1. https://github.com/search로 이동합니다.
2. 토픽 키워드를 입력합니다.
  ![검색 필드](/assets/images/help/search/search-field.png)
3. 왼쪽 사이드바에서 항목으로 검색 범위를 좁히려면 **토픽** 을 클릭합니다.
{% ifversion fpt or ghec %} ![토픽 측면 메뉴 옵션이 강조 표시된 Jekyll 리포지토리 검색 결과 페이지](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![토픽 측면 메뉴 옵션이 강조 표시된 Dotcom의 Jekyll 리포지토리 검색 결과 페이지](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## 검색 한정자를 사용하여 검색 범위 좁히기

특정 토픽에 대한 리포지토리를 탐색하거나, 기여할 프로젝트를 찾거나, {% data variables.product.product_name %}에서 가장 인기 있는 토픽을 알아보려면 `is:featured`, `is:curated`, `repositories:n` 및 `created:YYYY-MM-DD` 검색 한정자를 사용하여 항목을 검색할 수 있습니다.

`is:featured` 검색 한정자는 {% data variables.product.product_name %}에서 가장 많은 리포지토리를 사용하여 검색 결과를 토픽으로 좁힐 수 있습니다. 해당 항목은 https://github.com/topics/ 에서도 제공됩니다.

`is:curated` 검색 한정자는 커뮤니티 구성원이 추가 정보를 추가한 항목으로 검색 결과를 좁힐 수 있습니다. 자세한 내용은 [리포지토리 탐색](https://github.com/github/explore)을 참조하세요.

날짜 매개 변수를 사용하여 만든 시기 및 `created:` 또는 `repositories:n`을 사용하여 연결된 리포지토리 수를 기준으로 토픽을 필터링할 수 있습니다. 한정자는 모두 [범위 한정자 초과 및 미만](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)을 사용할 수 있습니다.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자  | 예제 |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics)는 큐레이팅되고 “javascript”라는 단어가 포함된 토픽과 일치합니다.
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics)는 https://github.com/topics/ 에 추천되고 “javascript”라는 단어가 포함된 토픽과 일치합니다.
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics)는 설명 또는 로고와 같은 추가 정보가 없고 단어 “javascript”를 포함하는 토픽과 일치합니다.
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics)는 https://github.com/topics/ 에 추천되지 않고 “javascript”라는 단어가 포함된 토픽과 일치합니다.
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000)은 리포지토리가 5000개를 초과하는 토픽과 일치합니다.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics)은 2018년 이후에 만들어진 “serverless”라는 단어가 있는 토픽과 일치합니다.

## 토픽별 리포지토리 검색

`topic:` 한정자를 사용하여 특정 토픽에 연결된 모든 리포지토리를 찾을 수 있습니다. 자세한 내용은 “[리포지토리 검색](/search-github/searching-on-github/searching-for-repositories/#search-by-topic)”을 참조하세요.

## 추가 참고 자료
- “[토픽을 사용하여 리포지토리 분류](/articles/classifying-your-repository-with-topics)”
