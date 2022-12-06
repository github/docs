---
title: 사용자 검색
intro: '{% data variables.product.product_name %}에서 사용자를 검색하고 이러한 사용자 검색 한정자를 임의로 조합하여 결과의 범위를 좁힐 수 있습니다.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139488'
---
모든 {% data variables.product.product_name %}에서 전역적으로 사용자를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

{% data reusables.search.syntax_tips %}

## 사용자 또는 조직만 검색

기본적으로 사용자 검색은 개인 및 조직을 모두 반환합니다. 그러나 `type` 한정자를 사용하여 검색 결과를 개인 계정 또는 조직으로만 제한할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) 는 2011년 이전에 만든 “mike”라는 개인 계정과 일치합니다.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users)는 메일에 “data”라는 단어가 있는 조직과 일치합니다.

## 계정 이름, 성명 또는 퍼블릭 메일로 검색

검색을 개인 사용자 또는 `user`가 있는 조직 계정 이름 또는 `org` 한정자를 사용하여 필터링할 수 있습니다.

`in` 한정자를 사용하면 검색을 사용자 이름(`login`), 성명, 퍼블릭 메일 또는 이들의 조합으로 제한할 수 있습니다. 이 한정자를 생략하면 사용자 이름 및 메일 주소만 검색됩니다. 개인 정보 보호를 위해 메일 도메인 이름으로 검색할 수 없습니다.

| 한정자        | 예제
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users)은 사용자 이름이 “octocat”인 사용자와 일치합니다.
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users)는 Electron 조직의 계정 이름과 일치합니다.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users)은 사용자 이름에 “kenya”라는 단어를 사용하는 사용자와 일치합니다.
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users)은 실명에 “bolton”이라는 단어가 포함된 사용자와 일치합니다.
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users)은 성명이 “Nat Friedman”인 사용자와 일치합니다. 참고: 이 검색 한정자는 간격에 민감합니다.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93)은 메일에 “data”라는 단어가 있는 사용자와 일치합니다.

## 사용자가 소유한 리포지토리 수로 검색

`repos` 한정자 및 [ 보다 큼, 보다 작음 및 범위 한정자](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)를 사용하여 사용자가 소유한 리포지토리 수에 따라 사용자를 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users)은 리포지토리 수가 9,000명이 넘는 사용자와 일치합니다.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users)은 사용자 이름 또는 실명에 “bert”라는 단어가 들어가고 10~30개의 리포지토리를 소유한 사용자와 일치합니다.

## 위치별 검색

프로필에 표시된 위치로 사용자를 검색할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**rrepos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users)는 아이슬란드에 살고 리포지토리가 정확히 하나 있는 사용자와 일치합니다.

## 리포지토리 언어로 검색

`language` 한정자를 사용하여 사용자가 소유한 리포지토리의 언어에 따라 사용자를 검색할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users)는 대부분의 리포지토리가 JavaScript로 작성된 러시아의 사용자와 일치합니다.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users)은 성명에 “jenny”라는 단어가 포함되고 JavaScript 리포지토리가 있는 사용자와 일치합니다.

## 개인 계정을 만든 시점별 검색

`created` 한정자를 사용하여 사용자가 {% data variables.product.product_name %}에 가입한 시기에 따라 필터링할 수 있습니다. 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자        | 예제
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users)은 2011년 이전에 가입한 사용자와 일치합니다.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users)은 2013년 5월 11일 이후에 가입한 사용자와 일치합니다.
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users)은 2013년 3월 6일에 가입하고 위치를 런던으로 입력한 사용자와 일치합니다.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users)은 2010년과 2011년 사이에 가입하고 사용자 이름에 “john”이라는 단어가 있는 사용자와 일치합니다.

## 팔로워 수별로 검색

`followers` 한정자 및 [범위 한정자 초과 및 미만](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)을 사용하여 팔로워 수에 따라 사용자를 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users)은 팔로워가 1,000명 이상인 사용자와 일치합니다.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users)은 1~10명의 팔로워를 가지고 이름에 “sparkle”이라는 단어가 있는 사용자와 일치합니다.

{% ifversion fpt or ghec %}

## 후원 가능 여부를 기준으로 검색

`is:sponsorable` 한정자를 사용하여 {% data variables.product.prodname_sponsors %}에서 후원할 수 있는 사용자 및 조직을 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_sponsors %} 정보](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users)은 {% data variables.product.prodname_sponsors %} 프로필이 있는 사용자 및 조직과 일치합니다.

{% endif %}

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
