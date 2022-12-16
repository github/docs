---
title: 검색 구문 이해
intro: '{% data variables.product.product_name %}을(를) 검색할 때 특정 숫자 및 단어와 일치하는 쿼리를 생성할 수 있습니다.'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118927'
---
## 다른 값보다 크거나 작은 값 쿼리

`>`, `>=`, `<`, `<=` 기호를 사용하여 다른 값보다 크고, 보다 크거나 같고, 보다 작고, 보다 작거나 같은 값을 검색할 수 있습니다.

쿼리  | 예제
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** 은 1,000개가 넘는 별을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** 는 5개 이상의 토픽을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** 은 10KB보다 작은 파일에서 “cats”라는 단어가 있는 코드와 일치합니다.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** 은 50개 이하의 별을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.

[범위 쿼리](#query-for-values-between-a-range)를 사용하여 다른 값보다 크거나 같은, 또는 작거나 같은 값을 검색할 수도 있습니다.

쿼리  | 예제
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** 는 `stars:>=10`과 동일하며 10개 이상의 별을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.
<code>*..<em>n</em></code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** 는 `stars:<=10`과 동일하며 10개 이하의 별을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.

## 범위 사이의 값 쿼리

범위 구문 <code><em>n</em>..<em>n</em></code>을 사용하여 범위 내에서 값을 검색할 수 있습니다. 여기서 첫 번째 숫자 _n_ 은 가장 낮은 값이고 두 번째 숫자는 가장 높은 값입니다.

쿼리  | 예제
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** 은 10~50개 사이의 별을 가진 “cats”라는 단어가 있는 리포지토리와 일치합니다.

## 날짜 쿼리

`>`, `>=`, `<`, `<=` 및 [범위 쿼리](#query-for-values-between-a-range)를 사용하여 다른 날짜보다 이전 또는 이후이거나 날짜 범위 내에 속하는 날짜를 검색할 수 있습니다. {% data reusables.time_date.date_format %}

쿼리  | 예제
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** 는 2016년 4월 29일 이후에 만들어진 “cats”라는 단어가 있는 문제와 일치합니다.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** 은 2017년 4월 1일 또는 그 이후에 만들어진 “cats”라는 단어가 있는 문제와 일치합니다.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** 는 2012년 7월 5일 이전에 푸시된 리포지토리에서 “cats”라는 단어가 있는 코드와 일치합니다.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** 는 2012년 7월 4일 또는 그 이전에 만들어진 “cats”라는 단어가 있는 문제와 일치합니다.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** 는 2016년 4월 말에서 7월 사이에 푸시된 “cats”라는 단어가 있는 리포지토리와 일치합니다.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** 는 2012년 4월 30일 이후에 만들어진 “cats”라는 단어를 포함하는 문제와 일치합니다.
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** 는 2012년 7월 4일 이전에 만들어진 “cats”라는 단어를 포함하는 문제와 일치합니다.

{% data reusables.time_date.time_format %}

쿼리  | 예제
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** 은 UTC 오프셋이 `07:00`인 2017년 1월 1일 오전 1시와 UTC 오프셋이 `07:00`인 2017년 3월 1일 오후 3시 사이에 만들어진 문제와 일치합니다.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** 는 2016년 3월 21일 오후 2시 11분부터 2016년 4월 7일 오후 8시 45분 사이에 만들어진 문제와 일치합니다.

## 특정 결과 제외

`NOT` 구문을 사용하여 특정 단어가 포함된 결과를 제외할 수 있습니다. `NOT` 연산자는 문자열 키워드에만 사용할 수 있습니다. 숫자 또는 날짜에는 작동하지 않습니다.

쿼리  | 예제
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** 는 “hello”라는 단어를 가지지만 “world”라는 단어를 가지지 않는 리포지토리와 일치합니다.

검색 결과의 범위를 좁힐 수 있는 또 다른 방법은 특정 하위 집합을 제외하는 것입니다. 검색 한정자 앞에 `-`을 추가하여 해당 한정자로 일치하는 모든 결과를 제외할 수 있습니다.

쿼리  | 예제
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** 는 10개를 초과하는 별을 가지지만 JavaScript로 작성되지 않은 “cats”라는 단어가 있는 리포지토리와 일치합니다.
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** 는 GitHub 조직의 리포지토리에 없는 @defunkt를 언급하는 문제와 일치합니다.

## 공백이 있는 쿼리에 따옴표 사용

검색 쿼리에 공백이 포함된 경우 따옴표로 묶어야 합니다. 예를 들면 다음과 같습니다.

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories)는 “cats”라는 단어가 있지만 “hello world”라는 단어가 없는 리포지토리와 일치합니다.
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues)는 “bug fix”라는 레이블을 가진 “build”라는 단어가 있는 문제와 일치합니다.

공백과 같은 일부 영숫자가 아닌 기호는 따옴표 내의 코드 검색 쿼리에서 삭제되므로 결과가 예상과 다를 수 있습니다.

## 사용자 이름을 사용하는 쿼리

검색 쿼리에 `user`, `actor` 또는 `assignee`와 같이 사용자 이름이 필요한 한정자가 포함된 경우 {% data variables.product.product_name %} 사용자 이름을 사용하여 특정 사용자를 지정하거나 `@me`를 사용하여 현재 사용자를 지정할 수 있습니다.

쿼리  | 예제
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits)은 @nat이 작성한 커밋과 일치합니다.
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues)는 결과를 보는 사람에게 할당된 문제와 일치합니다.

`@me`를 한정자와 함께만 사용할 수 있으며 `@me main.workflow`와 같이 검색어로는 사용할 수 없습니다.
