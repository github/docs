---
title: 위키 검색
intro: '{% data variables.product.product_name %}에서 wikis를 검색하고 이러한 wiki 검색 한정자를 임의로 조합하여 결과의 범위를 좁힐 수 있습니다.'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: da73bcaa13c718be9840483e2a34c4b90ba96e63
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118855'
---
모든 {% data variables.product.product_name %}에서 전역적으로 위키를 검색하거나 특정 리포지토리 또는 조직 내에서 위키를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

{% data reusables.search.syntax_tips %}

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 위키 페이지를 찾으려면 `user` 또는 `org` 한정자를 사용합니다. 특정 리포지토리에서 위키 페이지를 찾으려면 `repo` 한정자를 사용합니다.

| 한정자        | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis)는 @defunkt 소유의 리포지토리에서 위키 페이지와 일치합니다.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93)는 GitHub 조직이 소유한 리포지토리의 위키와 일치합니다.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis)는 @defunkt “gibberish” 리포지토리의 위키 페이지와 일치합니다.

## 위키 페이지 제목 또는 본문 텍스트 내에서 검색

`in` 한정자는 위키 페이지 제목 또는 본문 텍스트로 검색을 제한합니다. 한정자가 없으면 제목과 본문 텍스트가 모두 검색됩니다.

| 한정자        | 예제
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis)는 위키 페이지 제목과 “usage”라는 단어를 일치시킵니다.
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis)는 위키 페이지와 본문 텍스트의 “installation”이라는 단어를 일치시킵니다.

## 마지막 업데이트 날짜로 검색

`updated` 한정자는 지정된 날짜 범위 내에서 마지막으로 업데이트된 위키 페이지를 일치시킵니다.

{% data reusables.search.date_gt_lt %}

| 한정자        | 예제
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis)은 2016년 1월 1일 이후 마지막으로 업데이트된 위키 페이지와 “usage”라는 단어를 일치시킵니다.

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
