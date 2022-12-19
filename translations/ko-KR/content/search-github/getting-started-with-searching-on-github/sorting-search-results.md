---
title: 검색 결과 정렬
intro: '정렬 메뉴를 사용하거나 쿼리에 `sort` 한정자를 추가하여 [{% data variables.product.product_name %} 검색](/articles/searching-on-github) 결과를 정렬할 수 있습니다.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118967'
---
정렬 메뉴를 사용하여 관련성, 별 수, 포크 수 및 항목 업데이트 시간을 기준으로 결과를 정렬합니다.

  ![검색 결과 정렬 옵션이 있는 메뉴](/assets/images/help/search/repo-search-sort.png)

상호 작용, 응답, 작성자 날짜, 커밋한 사람 날짜 또는 항목이 업데이트 날짜를 기준으로 정렬하려면 검색 쿼리에 `sort` 한정자를 추가하면 됩니다.

## 상호 작용별 정렬

`sort:interactions` 한정자는 가장 많은 반응 및 댓글 수 결합을 기준으로 정렬합니다.

| 한정자  | 예제
| ------------- | -------------
| `sort:interactions` 또는 `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues)는 가장 많은 응답 및 댓글 결합 수를 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues)는 가장 적은 응답 및 댓글 결합 수를 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.

## 응답별로 정렬

`sort:reactions` 한정자는 응답의 수 또는 유형을 기준으로 정렬합니다.

| 한정자  | 예제
| ------------- | -------------
| `sort:reactions` 또는 `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues)는 가장 많은 응답 수를 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues)는 응답 오름차순(가장 적은 수에서 가장 많은 수까지)으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues)은 가장 많은 좋아요(:+1:) 응답을 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues)은 가장 많은 싫어요(:+1:) 응답을 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues)은 가장 많은 웃음(:smile:) 응답을 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues)는 가장 많은 만세(:tada:) 응답을 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues)는 가장 많은 하트(:heart:) 응답을 기준으로 정렬된, {% data variables.product.product_name %}이 소유한 리포지토리의 문제를 일치시킵니다.

## 작성자 날짜별 정렬

`sort:author-date` 한정자는 내림차순 또는 오름차순 작성자 날짜를 기준으로 정렬합니다.

| 한정자  | 예제
| ------------- | -------------
| `sort:author-date` 또는 `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits)는 {% data variables.product.product_name %} 에서 소유한 리포지토리에서 "feature"라는 단어가 포함된 커밋과 일치시킵니다(내림차순 작성자 날짜 기준으로 정렬).
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits)는 {% data variables.product.product_name %} 에서 소유한 리포지토리에서 "feature"라는 단어가 포함된 커밋과 일치시킵니다(오름차순 작성자 날짜 기준으로 정렬).

## 커밋한 사람 날짜별 정렬

`sort:committer-date` 한정자는 내림차순 또는 오름차순 커밋한 사람 날짜를 기준으로 정렬합니다.

| 한정자  | 예제
| ------------- | -------------
| `sort:committer-date` 또는 `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits)는 {% data variables.product.product_name %} 에서 소유한 리포지토리에서 "feature"라는 단어가 포함된 커밋과 일치시킵니다(내림차순 커밋한 사람 날짜 기준으로 정렬).
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits)는 {% data variables.product.product_name %} 에서 소유한 리포지토리에서 "feature"라는 단어가 포함된 커밋과 일치시킵니다(오름차순 커밋한 사람 날짜 기준으로 정렬).

## 업데이트된 날짜별 정렬

`sort:updated` 한정자는 항목의 업데이트 시점을 기준으로 정렬합니다.

| 한정자  | 예제
| ------------- | -------------
| `sort:updated` 또는 `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories)는 "feature"라는 단어가 포함된 리포지토리와 일치시킵니다(가장 최근 업데이트 날짜 기준으로 정렬).
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories)는 "feature"라는 단어가 포함된 리포지토리와 일치시킵니다(가장 늦은 업데이트 날짜 기준으로 정렬).

## 추가 참고 자료

- "[{% data variables.product.prodname_dotcom %}에서의 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
- "[문제 및 끌어오기 요청 필터링 및 검색](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
