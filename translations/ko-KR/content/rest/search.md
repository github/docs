---
title: 검색
intro: '검색 API를 사용하면 {% data variables.product.product_name %}에서 특정 항목을 검색할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110363'
---
## 검색 API 정보

Search API를 사용하면 찾으려는 특정 항목을 검색할 수 있습니다. 예를 들어 리포지토리에서 사용자 또는 특정 파일을 찾을 수 있습니다. Google에서 검색을 수행하는 방법을 생각해 보세요. 원하는 결과(또는 찾고 있는 몇 가지 결과)를 찾을 수 있도록 설계되었습니다. Google에서 검색하는 것과 마찬가지로 요구 사항에 가장 적합한 항목을 찾을 수 있도록 검색 결과의 몇 페이지를 표시하려는 경우가 있습니다. 요구를 충족하기 위해 {% data variables.product.product_name %} 검색 API는 **각 검색에 대해 최대 1,000개의 결과** 를 제공합니다.

쿼리를 사용하여 검색 범위를 좁힐 수 있습니다. 검색 쿼리 구문에 대한 자세한 내용은 “[검색 쿼리 생성](/rest/reference/search#constructing-a-search-query)”을 참조하세요.

### 검색 결과 순위 지정

다른 정렬 옵션이 쿼리 매개 변수로 제공되지 않는 한 결과는 내림차순으로 가장 일치하는 항목별로 정렬됩니다. 여러 요소가 결합되어 가장 관련성이 높은 항목을 결과 목록의 맨 위로 끌어올립니다.

### 속도 제한

{% data reusables.enterprise.rate_limit %}

Search API에는 사용자 지정 속도 제한이 있습니다. [기본 인증](/rest#authentication), [OAuth](/rest#authentication) 또는 [클라이언트 ID 및 비밀](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications)을 사용하는 요청의 경우 분당 최대 30개의 요청을 만들 수 있습니다. 인증되지 않은 요청의 경우 속도 제한을 사용하면 분당 최대 10개의 요청을 만들 수 있습니다.

현재 속도 제한 상태 확인에 대한 자세한 내용은 [속도 제한 설명서](/rest/reference/rate-limit)를 참조하세요.

### 검색 쿼리 생성

Search API의 각 엔드포인트는 [쿼리 매개 변수](https://en.wikipedia.org/wiki/Query_string)를 사용하여 {% data variables.product.product_name %}에 대한 검색을 수행합니다. 엔드포인트 및 쿼리 매개 변수를 포함하는 예제는 Search API의 개별 엔드포인트를 참조하세요.

쿼리는 {% data variables.product.product_name %}에서 지원되는 검색 한정자의 조합을 포함할 수 있습니다. 검색 쿼리의 형식은 다음과 같습니다.

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

예를 들어 README 파일에서 `GitHub` 및 `Octocat`이라는 단어가 포함된 `defunkt`가 소유한 모든 _리포지토리_ 를 검색하려는 경우 _검색 리포지토리_ 엔드포인트와 함께 다음 쿼리를 사용합니다.

```
GitHub Octocat in:readme user:defunkt
```

**참고:** 언어의 기본 HTML 인코더를 사용하여 쿼리 문자열을 구성해야 합니다. 예를 들면 다음과 같습니다.
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

사용 가능한 한정자, 해당 형식 및 사용 방법의 전체 목록은 “[GitHub에서 검색](/search-github/searching-on-github)”을 참조하세요. 연산자를 사용하여 특정 수량, 날짜 또는 결과를 제외하는 방법에 대한 자세한 내용은 “[검색 구문 이해](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/)”를 참조하세요.

### 쿼리 길이 제한 사항

Search API는 다음과 같은 쿼리를 지원하지 않습니다.
- 256자보다 긴 쿼리(연산자 또는 한정자 포함 안 함)
- 5개 이상의 `AND``OR` 또는 `NOT` 연산자가 있는 쿼리

검색 쿼리는 “유효성 검사 실패” 오류 메시지를 반환합니다.

### 시간 제한 및 불완전한 결과

모든 사용자가 검색 API를 계속해서 빠르게 수행할 수 있도록 개별 쿼리를 실행할 수 있는 시간을 제한합니다. [시간 제한을 초과하는](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/) 쿼리의 경우 API는 제한 시간 이전에 이미 발견된 일치 항목을 반환하고 응답에는 `incomplete_results` 속성이 `true`로 설정됩니다.

시간 제한에 도달한다고 해서 검색 결과가 불완전하다는 의미는 아닙니다.
더 많은 결과가 발견되었을 수도 있지만 그렇지 않을 수도 있습니다.

### 액세스 오류 또는 누락된 검색 결과

성공적으로 인증하고 검색 쿼리의 리포지토리에 액세스할 수 있어야 합니다. 그렇지 않으면 “유효성 검사 실패” 메시지와 함께 `422 Unprocessable Entry` 오류가 표시됩니다. 예를 들어 {% data variables.product.prodname_dotcom %}에 로그인할 때 액세스할 수 없는 리소스를 요청하는 `repo:`, `user:` 또는 `org:` 한정자가 쿼리에 포함된 경우 검색이 실패합니다.

검색 쿼리가 여러 리소스를 요청하는 경우 응답에는 액세스 권한이 있는 리소스만 포함되며 반환되지 않은 리소스를 나열하는 오류 메시지가 표시되지 **않습니다**.

예를 들어 검색 쿼리가 `octocat/test` 및 `codertocat/test` 리포지토리를 검색하지만 `octocat/test` 액세스 권한만 있는 경우 응답에 `octocat/test`에 대한 검색 결과가 표시되고 `codertocat/test`에 대한 검색 결과는 표시되지 않습니다. 이 동작은 {% data variables.product.prodname_dotcom %}에서 검색이 작동하는 방식을 모방합니다.

### 텍스트 일치 메타데이터

GitHub에서 코드 조각 및 강조 표시에서 제공하는 컨텍스트를 검색 결과에 사용할 수 있습니다. Search API는 검색 결과를 표시할 때 일치하는 검색어를 강조 표시할 수 있는 추가 메타데이터를 제공합니다.

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

요청은 응답에서 해당 텍스트 조각을 수신하도록 선택할 수 있으며, 모든 조각에는 일치하는 각 검색 용어의 정확한 위치를 식별하는 숫자 오프셋이 함께 제공됩니다.

검색 결과에서 이 메타데이터를 얻으려면 `Accept` 헤더에 `text-match` 미디어 형식을 지정합니다.

```shell
application/vnd.github.text-match+json
```

`text-match` 미디어 형식을 지정하면 텍스트 내의 검색어 위치 및 검색어를 포함하는 `text_matches`에 대한 정보를 제공하는 추가 키가 `property`라는 JSON 페이로드에 수신됩니다. `text_matches` 배열 내에서 각 개체에는 다음 특성이 포함됩니다.

Name | 설명
-----|-----------|
`object_url` | 검색어 중 하나와 일치하는 문자열 속성이 포함된 리소스의 URL입니다.
`object_type` | 지정된 `object_url`에 있는 리소스 형식의 이름입니다.
`property` | `object_url`에 있는 리소스 속성의 이름입니다. 해당 속성은 검색어 중 하나와 일치하는 문자열입니다. (`object_url`에서 반환된 JSON에 `fragment`의 전체 콘텐츠는 이 이름의 속성에 있습니다.)
`fragment` | `property` 값의 하위 집합입니다. 하나 이상의 검색어와 일치하는 텍스트 조각입니다.
`matches` | `fragment`에 있는 하나 이상의 검색어의 배열입니다. 인덱스(즉, “오프셋”)는 조각을 기준으로 합니다. (`property`의 _전체_ 콘텐츠를 기준으로 하지 않습니다.)

#### 예제

cURL 및 위의 [예제 문제 검색](#search-issues-and-pull-requests)을 사용하여 API 요청은 다음과 같습니다.

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

응답에는 각 검색 결과에 대한 `text_matches` 배열이 포함됩니다. 아래 JSON에는 `text_matches` 배열에 두 개의 개체가 있습니다.

문제의 `body` 속성에서 첫 번째 텍스트 일치가 발생했습니다. 문제 본문에서 텍스트 조각이 표시됩니다. 검색어(`windows`)는 해당 조각 내에 두 번 나타나며 각 항목에 대한 인덱스가 있습니다.

문제의 주석 중 하나의 `body` 속성에서 두 번째 텍스트 일치가 발생했습니다. 문제 주석에 대한 URL이 있습니다. 물론 주석 본문에서 텍스트 조각이 표시됩니다. 검색어(`windows`)는 해당 조각 내에 한 번 나타납니다.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
