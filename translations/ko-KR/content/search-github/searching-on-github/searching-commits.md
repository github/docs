---
title: 커밋 검색
intro: '{% data variables.product.product_name %}에서 커밋을 검색하고 이러한 커밋 검색 한정자를 임의로 조합하여 결과의 범위를 좁힐 수 있습니다.'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118903'
---
모든 {% data variables.product.product_name %}에서 전역적으로 커밋을 검색하거나 특정 리포지토리 또는 조직 내에서 커밋을 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

커밋을 검색하는 경우 리포지토리의 [기본 분기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)만 검색됩니다.

{% data reusables.search.syntax_tips %}

## 커밋 메시지 내 검색

메시지 내에 특정 단어가 포함된 커밋을 찾을 수 있습니다. 예를 들어 [**fix typo**](https://github.com/search?q=fix+typo&type=Commits)는 “fix”와 “typo”라는 단어가 포함된 커밋을 찾습니다.

## 작성자 또는 커밋자로 검색

`author` 또는 `committer` 한정자를 사용하여 특정 사용자로 커밋을 검색할 수 있습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits)는 @defunkt가 작성한 커밋을 찾습니다.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits)는 @defunkt가 커밋한 커밋을 찾습니다.

`author-name` 및 `committer-name` 한정자는 작성자 또는 커밋자의 이름으로 커밋을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits)는 작성자 이름에 “wanstrath”가 있는 커밋을 찾습니다.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits)는 커밋자 이름에 “wanstrath”가 있는 커밋을 찾습니다.

`author-email` 및 `committer-email` 한정자는 작성자 또는 커밋자의 전체 메일 주소로 커밋을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits)은 chris@github.com으로 작성한 커밋을 찾습니다.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits)은 chris@github.com으로 커밋한 커밋을 찾습니다.

## 작성 날짜 또는 커밋 날짜로 검색

`author-date` 및 `committer-date` 한정자를 사용하여 지정된 날짜 범위 내에 작성되거나 커밋된 커밋을 찾을 수 있습니다.

{% data reusables.search.date_gt_lt %}

| 한정자  | 예제
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits)은 2016년 1월 1일 전에 작성된 커밋을 찾습니다.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits)은 2016년 1월 1일 후에 커밋된 커밋을 찾습니다.

## 병합 커밋 필터링

`merge` 한정자는 병합 커밋을 필터링합니다.

| 한정자  | 예제
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits)는 병합 커밋을 찾습니다.
| `merge:false` | [**merge:true**](https://github.com/search?q=merge%3Afalse&type=Commits)는 병합 커밋을 찾습니다.

## 해시로 검색

`hash` 한정자는 지정된 SHA-1 해시가 있는 커밋을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits)는 `124a9a0ee1d8f1e15e833aff432fbb3b02632105` 해시가 있는 커밋을 찾습니다.

## 부모로 검색

`parent` 한정자는 부모에 지정된 SHA-1 해시가 있는 커밋을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93)는 `124a9a0ee1d8f1e15e833aff432fbb3b02632105` 해시가 있는 커밋의 자식을 찾습니다.

## 트리로 검색

`tree` 한정자는 지정된 SHA-1 git 트리 해시가 있는 커밋을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits)은 `99ca967` 트리 해시를 참조하는 커밋을 찾습니다.

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 커밋을 검색하려면 `user` 또는 `org` 한정자를 사용합니다. 특정 리포지토리에서 커밋을 검색하려면 `repo` 한정자를 사용합니다.

| 한정자  | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93)는 @defunkt가 소유한 리포지토리에서 “gibberish”라는 단어가 있는 커밋 메시지를 찾습니다.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits)는 @github가 소유한 리포지토리에서 “test”라는 단어가 있는 커밋 메시지를 찾습니다.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits)는 @defunkt의 “gibberish” 리포지토리에서 “language”라는 단어가 있는 커밋 메시지를 찾습니다.

## 리포지토리 표시 여부로 필터링

`is` 한정자는 지정된 표시 여부를 사용하는 리포지토리에서 커밋을 찾습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

| 한정자  | 예제
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits)은 퍼블릭 리포지토리에 대한 커밋을 찾습니다.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits)은 내부 리포지토리에 대한 커밋을 찾습니다.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits)은 프라이빗 리포지토리에 대한 커밋을 찾습니다.

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
