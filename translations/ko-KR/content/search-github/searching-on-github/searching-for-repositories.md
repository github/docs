---
title: 리포지토리 검색
intro: '{% data variables.product.product_name %}에서 리포지토리를 검색하고 이러한 리포지토리 검색 한정자를 조합하여 사용하여 결과를 좁힐 수 있습니다.'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: da0ba88187dc4a8f8be5a8050644aab8321f420f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098637'
---
모든 {% 데이터 variables.location.product_location %}에서 전역적으로 리포지토리를 검색하거나 특정 조직 내에서 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

검색 결과에 포크를 포함하려면 쿼리에 `fork:true` 또는 `fork:only`를 추가해야 합니다. 자세한 내용은 “[포크에서 검색](/search-github/searching-on-github/searching-in-forks)”을 참조하세요.

{% data reusables.search.syntax_tips %}

## README 파일의 리포지토리 이름, 설명 또는 콘텐츠로 검색

`in` 한정자를 사용하면 README 파일의 리포지토리 이름, 리포지토리 설명, 리포지토리 토픽, 콘텐츠 또는 이들의 조합으로 검색을 제한할 수 있습니다. 이 한정자를 생략하면 리포지토리 이름, 설명, 토픽만 검색됩니다.

| 한정자  | 예제
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories)은 리포지토리 이름에 “jquery”가 있는 리포지토리를 찾습니다.
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories)은 리포지토리 이름 또는 설명에 “jquery”가 있는 리포지토리를 찾습니다.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories)는 “jquery”로 레이블이 지정된 리포지토리를 토픽으로 일치시킵니다.
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories)는 리포지토리의 README 파일에 “jquery”가 언급된 리포지토리를 찾습니다.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world)는 특정 리포지토리 이름을 찾습니다.

## 리포지토리 콘텐츠로 검색

`in:readme` 한정자를 사용하여 리포지토리의 README 파일의 콘텐츠를 검색하여 리포지토리를 찾을 수 있습니다. 자세한 내용은 “[README 정보](/github/creating-cloning-and-archiving-repositories/about-readmes)”를 참조하세요.

`in:readme`를 사용하지 않으면 리포지토리 내에서 특정 콘텐츠를 검색하여 리포지토리를 찾을 수 없습니다. 리포지토리 내에서 특정 파일 또는 콘텐츠를 검색하려면 파일 찾기 또는 코드 관련 검색 한정자를 사용하면 됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 파일 찾기](/search-github/searching-on-github/finding-files-on-github)” 및 “[코드 검색](/search-github/searching-on-github/searching-code)”을 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories)는 리포지토리의 README 파일에 “octocat”이 언급된 리포지토리를 찾습니다.

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 검색하려면 `user` 또는 `org` 한정자를 사용하면 됩니다.

| 한정자  | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories)은 포크가 100개가 넘는 @defunkt에서 리포지토리를 찾습니다.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories)는 GitHub에서 리포지토리를 찾습니다.

## 리포지토리 크기로 검색

`size` 한정자는 보다 큼, 보다 작음 및 범위 한정자를 사용하여 특정 크기(킬로바이트 단위)와 일치하는 리포지토리를 찾습니다. 자세한 내용은 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories)은 정확히 1MB인 리포지토리를 찾습니다.
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories)은 30MB 이상인 리포지토리를 찾습니다.
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories)은 50KB 미만인 리포지토리를 찾습니다.
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories)은 50KB와 120KB 사이의 리포지토리를 찾습니다.

## 팔로워 수로 검색

보다 큼, 보다 작음 및 범위 한정자와 함께 `followers` 한정자를 사용하여 리포지토리를 팔로우하는 사용자 수를 기준으로 리포지토리를 필터링할 수 있습니다. 자세한 내용은 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자        | 예제
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000)은 팔로워가 10,000명 이상이며 “node”라는 단어가 언급된 리포지토리를 찾습니다.
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories)은 팔로워가 1명에서 10명 사이이며 “styleguide linter”라는 단어가 언급된 리포지토리를 찾습니다.

## 포크 수로 검색

`forks` 한정자는 보다 큼, 보다 작음 및 범위 한정자를 사용하여 리포지토리에 있어야 하는 포크 수를 지정합니다. 자세한 내용은 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories)는 5개의 포크만 있는 리포지토리를 찾습니다.
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories)는 포크가 205개 이상인 리포지토리를 찾습니다.
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories)은 포크가 90개 미만인 리포지토리를 찾습니다.
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories)은 포크가 10개에서 20개 사이인 리포지토리를 찾습니다.

## 별 수로 검색

보다 큼, 보다 작음 및 범위 한정자를 사용하여 리포지토리에 있는 별 수를 기준으로 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[별을 사용하여 리포지토리 저장](/github/getting-started-with-github/saving-repositories-with-stars)” 및 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories)은 정확히 별이 500개인 리포지토리를 찾습니다.
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories)은 별이 10개에서 20개 사이이며 1,000KB 미만인 리포지토리를 찾습니다.
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories)는 별이 500개 이상이며, 포크된 리포지토리를 포함하고, PHP로 작성된 리포지토리를 찾습니다.

## 리포지토리 생성 시점 또는 마지막 업데이트 시점으로 검색

생성 시간 또는 마지막 업데이트 시간을 기준으로 리포지토리를 필터링할 수 있습니다. 리포지토리 생성의 경우 `created` 한정자를 사용할 수 있습니다. 리포지토리가 마지막으로 업데이트된 시점을 확인하려면 `pushed` 한정자를 사용해야 합니다. `pushed` 한정자는 리포지토리의 모든 분기에서 최근 커밋을 기준으로 정렬된 리포지토리 목록을 반환합니다.

둘 다 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자  | 예제
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories)은 “webos”라는 단어가 있으며 2011년 전에 생성된 리포지토리를 찾습니다.
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories)은 “css”라는 단어가 있으며 2013년 1월 후에 푸시된 리포지토리를 찾습니다.
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories)는 “case”라는 단어가 있으며, 2013년 3월 6일 이후에 푸시되었고, 포크인 리포지토리를 찾습니다.

## 언어로 검색

리포지토리의 코드 언어를 기준으로 리포지토리를 검색할 수 있습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories)는 “rails”라는 단어가 있으며 JavaScript로 작성된 리포지토리를 찾습니다.

## 토픽으로 검색

특정 토픽으로 분류된 모든 리포지토리를 찾을 수 있습니다. 자세한 내용은 “[토픽을 사용하여 리포지토리 분류](/github/administering-a-repository/classifying-your-repository-with-topics)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults)은 “Jekyll” 토픽으로 분류된 리포지토리를 찾습니다.

## 토픽 수로 검색

보다 큼, 보다 작음 및 범위 한정자와 함께 `topics` 한정자를 사용하여 리포지토리에 적용된 토픽 수로 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[토픽을 사용하여 리포지토리 분류](/github/administering-a-repository/classifying-your-repository-with-topics)” 및 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults)는 토픽이 5개인 리포지토리를 찾습니다.
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults)은 토픽이 3개를 초과하는 리포지토리를 찾습니다.

{% ifversion fpt or ghes or ghec %}

## 라이선스로 검색

리포지토리의 라이선스 유형으로 리포지토리를 검색할 수 있습니다. 특정 라이선스 또는 라이선스 제품군으로 리포지토리를 필터링하려면 라이선스 키워드를 사용해야 합니다. 자세한 내용은 “[리포지토리 라이선스](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults)은 Apache License 2.0이 부여된 리포지토리를 찾습니다.

{% endif %}

## 리포지토리 표시 여부로 검색

리포지토리의 표시 여부를 기준으로 검색을 필터링할 수 있습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

| 한정자  | 예제 | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories)는 {% data variables.product.company_short %}에서 소유한 퍼블릭 리포지토리를 찾습니다.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories)는 사용자가 액세스할 수 있으며 “test”라는 단어가 포함된 내부 리포지토리를 찾습니다.{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories)는 사용자가 액세스할 수 있으며 “pages”라는 단어가 포함된 프라이빗 리포지토리를 찾습니다.

{% ifversion fpt or ghec %}

## 리포지토리가 미러인지 여부를 기준으로 검색

리포지토리가 미러이며 다른 곳에서 호스트되는지 여부를 기준으로 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 오픈 소스에 기여하는 방법 찾기](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=)은 미러이며 “GNOME”이라는 단어가 포함된 리포지토리를 찾습니다.
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=)은 미러가 아니며 “GNOME”이라는 단어가 포함된 리포지토리를 찾습니다.

{% endif %}

## 리포지토리가 보관되는지 여부를 기준으로 검색

리포지토리가 보관되는지 여부를 기준으로 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[리포지토리 보관](/repositories/archiving-a-github-repository/archiving-repositories)”을 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=)은 보관되며 “GNOME”이라는 단어가 포함된 리포지토리를 찾습니다.
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=)은 보관되지 않으며 “GNOME”이라는 단어가 포함된 리포지토리를 찾습니다.

{% ifversion fpt or ghec %}

## `good first issue` 또는 `help wanted` 레이블을 사용하여 문제 수를 기준으로 검색

`help-wanted-issues:>n` 및 `good-first-issues:>n` 한정자를 사용하여 `help-wanted` 또는 `good-first-issue` 레이블이 지정된 최소 문제 수가 있는 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[레이블을 사용하여 프로젝트에 유용한 기여 장려](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=)는 `good-first-issue` 레이블이 지정된 문제가 2개를 초과하며 “javascript”라는 단어가 있는 리포지토리를 찾습니다.
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=)는 `help-wanted` 레이블이 지정된 문제가 4개를 초과하며 “React”라는 단어가 있는 리포지토리를 찾습니다.

## 후원 가능 여부를 기준으로 검색

`is:sponsorable` 한정자를 사용하여 {% data variables.product.prodname_sponsors %}에서 소유자를 후원할 수 있는 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_sponsors %} 정보](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”를 참조하세요.

`has:funding-file` 한정자를 사용하여 자금 조달 파일이 있는 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[자금 조달 파일 정보](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories)은 소유자에게 {% data variables.product.prodname_sponsors %} 프로필이 있는 리포지토리를 찾습니다.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories)은 FUNDING.yml 파일이 있는 리포지토리를 찾습니다.

{% endif %}

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
- “[포크에서 검색](/search-github/searching-on-github/searching-in-forks)”
