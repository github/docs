---
title: 토론 검색
intro: '{% data variables.product.product_name %}에 대한 토론을 검색하고 검색 한정자를 사용하여 결과의 범위를 좁힐 수 있습니다.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410453'
---
## 토론 검색 정보

모든 {% data variables.product.product_name %}에서 전역적으로 토론을 검색하거나 특정 조직 또는 리포지토리 내에서 토론을 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/github/searching-for-information-on-github/about-searching-on-github)”를 참조하세요.

{% data reusables.search.syntax_tips %}

## 제목, 본문 또는 댓글로 검색

`in` 한정자를 사용하여 토론 검색을 제목, 본문 또는 댓글로 제한할 수 있습니다. 한정자를 결합하여 제목, 본문 또는 댓글 조합을 검색할 수도 있습니다. `in` 한정자를 생략하면 {% data variables.product.product_name %}가 제목, 본문 및 댓글을 검색합니다.

| 한정자 | 예제 |
| :- | :- |
| `in:title` | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions)은 제목에 "welcome"이 있는 토론을 일치시킵니다. |
| `in:body` | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions)는 제목 또는 본문에 "onboard"가 있는 토론을 일치시킵니다. |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions)는 토론의 댓글에 "thanks"가 있는 토론을 일치시킵니다. |

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 토론을 검색하려면 `user` 또는 `org` 한정자를 사용하면 됩니다. 특정 리포지토리에서 토론을 검색하려면 `repo` 한정자를 사용하면 됩니다.

| 한정자 | 예제 |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions)은 @octocat이 소유한 리포지토리에서 "feedback"이 있는 토론을 일치시킵니다. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93)는 GitHub 조직이 소유한 리포지토리의 토론을 일치시킵니다. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions)은 2021년 1월 이전에 만든 @nodejs의 Node.js 런타임 프로젝트의 토론을 일치시킵니다. |

## 리포지토리 표시 여부별로 필터링

`is` 한정자를 사용하여 토론이 포함된 리포지토리의 표시 여부를 기준으로 필터링할 수 있습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

| 한정자  | 예제 | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions)은 퍼블릭 리포지토리의 토론과 일치시킵니다.{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions)은 내부 리포지토리의 토론과 일치시킵니다.{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions)는 액세스할 수 있는 프라이빗 리포지토리에 단어 "tiramisu"가 포함된 토론을 일치시킵니다.

## 작성자로 검색

`author` 한정자는 특정 사용자가 만든 토론을 찾습니다.

| 한정자 | 예제 |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions)은 @octocat에서 만들어진 단어 "cool"이 있는 토론을 일치시킵니다. |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions)은 본문에 단어 "bootstrap"이 포함된 @octocat에서 만들어진 토론을 일치시킵니다. |

## 댓글 작성자로 검색

`commenter` 한정자는 특정 사용자의 댓글이 포함된 토론을 찾습니다.

| 한정자 | 예제 |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions)는 GitHub가 소유한 리포지토리에서 “github”라는 단어를 포함하고 @becca가 남긴 댓글이 있는 토론을 일치시킵니다.

## 토론에 관여한 사용자를 기준으로 검색

`involves` 한정자를 사용하여 특정 사용자가 참여한 토론을 찾을 수 있습니다. 이 한정자는 특정 사용자가 만들거나, 사용자를 언급하거나, 댓글을 포함하는 토론을 반환합니다. `involves` 한정자는 단일 사용자에 대한 `author`, `mentions` 및 `commenter` 한정자 사이의 논리적 OR입니다.

| 한정자 | 예제 |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involvs:becca involvs:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** 은 @becca 또는 @octocat이 관련된 토론을 일치시킵니다.
| | [**NOT beta in:body involvs:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions)는 @becca가 관련되고 본문에 "beta"라는 단어를 포함하지 않는 토론을 일치시킵니다.

## 댓글 수로 검색

`comments` 한정자를 보다 큼, 보다 작음 및 범위 한정자와 함께 사용하여 댓글 수를 기준으로 검색할 수 있습니다. 자세한 내용은 “[검색 구문 이해](/github/searching-for-information-on-github/understanding-the-search-syntax)”를 참조하세요.

| 한정자 | 예제 |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions)은 100개 이상의 댓글이 있는 토론을 일치시킵니다.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions)은 500개에서 1,000개 사이의 댓글이 있는 토론을 일치시킵니다.

## 토론 생성 시점 또는 마지막 업데이트 시점으로 검색

만든 시간 또는 토론이 마지막으로 업데이트된 시간을 기준으로 토론을 필터링할 수 있습니다. 토론 만들기의 경우 `created` 한정자를 사용할 수 있습니다. 토론이 마지막으로 업데이트된 시기를 확인하려면 `updated` 한정자를 사용합니다.

두 한정자 모두 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자 | 예제 |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions)는 2020년 11월 15일 이후에 생성된 토론을 일치시킵니다.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions)은 2020년 12월 이후에 업데이트되었으며 본문에 “weird”라는 단어가 있는 토론을 일치시킵니다.

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
