---
title: 문제 및 끌어오기 요청 검색
intro: '{% data variables.product.product_name %}에서 문제를 검색하고 요청을 끌어오고 모든 조합에서 이러한 검색 한정자를 사용하여 결과의 범위를 좁힐 수 있습니다.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106463'
---
모든 {% data variables.product.product_name %}에서 전역적으로 문제 및 끌어오기 요청을 검색하거나 특정 조직 내에서 문제 및 끌어오기 요청을 검색할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

{% tip %}

**팁:** {% ifversion ghes or ghae %}
  - 이 문서에는 {% data variables.product.prodname_dotcom %}.com 웹 사이트에 대한 예제 검색이 포함되어 있지만 {% data variables.location.product_location %}에서 동일한 검색 필터를 사용할 수 있습니다. {% endif %}
  - 결과를 더 개선하기 위해 검색 한정자에 추가할 수 있는 검색 구문 목록은 “[검색 구문 이해](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”를 참조하세요.
  - 여러 단어로 된 검색어를 따옴표로 묶으세요. 예를 들어 “진행 중”이라는 레이블이 있는 문제를 검색하려면 `label:"in progress"`를 검색합니다. 검색은 대/소문자를 구분하지 않습니다.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## 문제 또는 끌어오기 요청만 검색

기본적으로 {% data variables.product.product_name %} 검색은 문제와 끌어오기 요청을 모두 반환합니다. 그러나 `type` 또는 `is` 한정자를 사용하여 검색 결과를 문제 또는 끌어오기 요청으로만 제한할 수 있습니다.

| 한정자  | 예제
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues)은 “cat”이라는 단어가 있는 끌어오기 요청과 일치합니다.
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues)는 “github”라는 단어를 포함하고 @defunkt가 남긴 댓글이 있는 문제와 일치합니다.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=)은 “event”라는 단어가 있는 끌어오기 요청과 일치합니다.
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=)는 “bug” 레이블이 있는 닫힌 문제와 일치합니다.

## 제목, 본문 또는 댓글로 검색

`in` 한정자를 사용하면 제목, 본문, 댓글 또는 항목의 조합으로 검색을 제한할 수 있습니다. 이 한정자를 생략하면 제목, 본문 및 댓글이 모두 검색됩니다.

| 한정자     | 예제
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues)은 제목에 “warning”이 있는 문제와 일치합니다.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues)는 제목 또는 본문에 “error”가 있는 문제와 일치합니다.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues)는 댓글에서 “shipit”을 언급하는 문제와 일치합니다.

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 문제 및 끌어오기 요청을 검색하려면 `user` 또는 `org` 한정자를 사용하면 됩니다. 특정 리포지토리에서 문제 및 끌어오기 요청을 검색하려면 `repo` 한정자를 사용할 수 있습니다.

{% data reusables.pull_requests.large-search-workaround %}

| 한정자        | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues)는 @defunkt가 소유한 리포지토리의 “ubuntu”라는 단어가 있는 문제와 일치합니다.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93)는 GitHub 조직이 소유한 리포지토리의 문제와 일치합니다.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues)은 2012년 3월 이전에 만들어진 @mozilla의 shumway 프로젝트의 문제와 일치합니다.

## 열린 상태 또는 닫힌 상태로 검색

`state` 또는 `is` 한정자를 사용하여 열려 있는지 닫혔는지 여부에 따라 문제 및 끌어오기 요청을 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues)는 “libraries”라는 단어가 있는 @vmg를 언급하는 열린 문제와 일치합니다.
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues)는 본문에 “design”이라는 단어가 있는 닫힌 문제와 일치합니다.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues)는 “performance”라는 단어가 있는 열린 문제와 일치합니다.
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=)는 “android”라는 단어가 있는 닫힌 문제 및 끌어오기 요청과 일치합니다.

{% ifversion issue-close-reasons %}
## 문제가 닫힌 이유로 검색

`reason` 한정자를 사용하여 문제가 닫혔을 때 지정된 이유에 따라 문제를 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed는 "completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) "로 닫힌 단어 "libraries"의 문제와 일치합니다.
| `reason:"not planned"` | [**libraries is:closed reason:“not planned”**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues)는 “not planned”로 닫힌 “libraries”라는 단어와 관련된 문제와 일치합니다.
 
{% endif %}

## 리포지토리 표시 여부별로 필터링

`is` 한정자를 사용하여 문제 및 끌어오기 요청이 포함된 리포지토리의 표시 여부로 필터링할 수 있습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

| 한정자  | 예제 | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues)은 퍼블릭 리포지토리의 문제 및 끌어오기 요청과 일치합니다.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues)은 내부 리포지토리의 문제 및 끌어오기 요청과 일치합니다.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues)은 사용자가 액세스할 수 있는 “cupcake”이라는 단어가 포함된 문제 및 끌어오기 요청과 일치합니다.

## 작성자로 검색

`author` 한정자는 특정 사용자 또는 통합 계정에서 만든 문제 및 끌어오기 요청을 찾습니다.

| 한정자     | 예제
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues)은 @gjtorikian에 의해 만들어진 “cool”이라는 단어가 있는 문제 및 끌어오기 요청과 일치합니다.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues)는 본문에 “bootstrap”이라는 단어가 포함된 @mdo가 작성한 문제와 일치합니다.
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues)은 “robot”이라는 통합 계정에서 만든 문제와 일치합니다.

## 담당자로 검색

`assignee` 한정자는 특정 사용자에게 할당된 문제 및 끌어오기 요청을 찾습니다. 담당자가 _있는_ 문제 및 끌어오기 요청을 검색할 수는 없지만 [담당자가 없는 문제 및 끌어오기 요청](#search-by-missing-metadata)을 검색할 수 있습니다.

| 한정자     | 예제
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues)는 @vmg에 할당된 libgit2의 프로젝트 libgit2에 있는 문제 및 끌어오기 요청과 일치합니다.

## 언급으로 검색

`mentions` 한정자는 특정 사용자를 언급하는 문제를 찾습니다. 자세한 내용은 “[사용자 및 팀 언급](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)”을 참조하세요.

| 한정자     | 예제
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues)는 @defunkt를 언급하는 “resque”라는 단어가 있는 문제와 일치합니다.

## 팀 언급으로 검색

자신이 소속된 조직 및 팀의 경우 `team` 한정자를 사용하여 해당 조직 내의 특정 팀을 언급(@mention)하는 문제 또는 끌어오기 요청을 찾을 수 있습니다. 샘플 이름을 조직 및 팀 이름으로 바꾸어 검색을 수행합니다.

| 한정자        | 예제
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** 는 `@jekyll/owners` 팀이 언급된 문제와 일치합니다.
| | **team:myorg/ops is:open is:pr** 은 `@myorg/ops` 팀이 언급된 열린 끌어오기 요청과 일치합니다.

## 댓글 작성자로 검색

`commenter` 한정자는 특정 사용자의 댓글이 포함된 문제를 찾습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues)는 GitHub가 소유한 리포지토리에서 “github”라는 단어를 포함하고 @defunkt가 남긴 댓글이 있는 문제와 일치합니다.

## 문제 또는 끌어오기 요청에 관여한 사용자로 검색

`involves` 한정자를 사용하여 어떤 식으로든 특정 사용자가 관여하는 문제를 찾을 수 있습니다. `involves` 한정자는 단일 사용자에 대한 `author`, `assignee`, `mentions`, `commenter` 한정자 사이의 논리적 OR입니다. 즉, 이 한정자는 특정 사용자가 만들었거나, 해당 사용자에게 할당되었거나, 해당 사용자를 언급하거나, 해당 사용자가 댓글을 단 문제 및 끌어오기 요청을 찾습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** 는 @defunkt 또는 @jlord가 관여한 문제와 일치합니다.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues)는 본문에 “bootstrap”이라는 단어를 포함하지 않는 @mdo가 관여한 문제와 일치합니다.

## 연결된 문제 및 끌어오기 요청 검색
닫는 참조로 끌어오기 요청에 연결된 문제 또는 끌어오기 요청이 닫을 수 있는 문제에 연결된 끌어오기 요청만 포함하도록 결과의 범위를 좁힐 수 있습니다.

| 한정자 | 예제 |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr)은 닫는 참조로 끌어오기 요청에 연결된 `desktop/desktop` 리포지토리의 열린 문제와 일치합니다. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue)는 끌어오기 요청이 닫았을 수 있는 문제에 연결된 `desktop/desktop` 리포지토리의 닫힌 끌어오기 요청과 일치합니다. |
| `-linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr)은 닫는 참조로 끌어오기 요청에 연결되지 않은 `desktop/desktop` 리포지토리의 열린 문제와 일치합니다. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue)는 끌어오기 요청이 닫을 수 있는 문제에 연결되지 않은 `desktop/desktop` 리포지토리의 열린 끌어오기 요청과 일치합니다. |

## 레이블로 검색

`label` 한정자를 사용하여 레이블별로 결과의 범위를 좁힐 수 있습니다. 문제에는 여러 레이블이 있을 수 있으므로 각 문제에 대해 별도의 한정자를 나열할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues)는 Ruby 리포지토리에 있는 레이블 “help wanted”가 있는 문제와 일치합니다.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues)는 본문에 “broken”이라는 단어가 있으며 “bug” 레이블은 없고 “priority” 레이블은 *있는* 문제와 일치합니다.
| | [**label:bug label:resolved는 "bug**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) " 및 "resolved" 레이블의 문제와 일치합니다.
| | [**label:bug,resolved는**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) 레이블 "bug" 또는 "resolved" 레이블의 문제와 일치합니다.

## 마일스톤으로 검색

`milestone` 한정자는 리포지토리 내에서 [마일스톤](/articles/about-milestones)의 일부인 문제 또는 끌어오기 요청을 찾습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues)은 “overhaul”이라는 마일스톤에 있는 문제와 일치합니다.
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues)는 “bug fix”라는 마일스톤에 있는 문제와 일치합니다.

## 프로젝트 보드로 검색

`project` 한정자를 사용하여 리포지토리 또는 조직의 특정 [프로젝트 보드](/articles/about-project-boards/)와 연결된 문제를 찾을 수 있습니다. 프로젝트 보드 번호로 프로젝트 보드를 검색해야 합니다. 프로젝트 보드의 URL 끝에 있는 프로젝트 보드 번호를 찾을 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** 은 조직의 프로젝트 보드 57과 연결된 GitHub가 소유한 문제와 일치합니다.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** 은 @github의 linguist 리포지토리의 프로젝트 보드 1과 연결된 문제와 일치합니다.

## 커밋 상태로 검색

커밋 상태에 따라 끌어오기 요청을 필터링할 수 있습니다. 이는 [상태 API](/rest/reference/commits#commit-statuses) 또는 CI 서비스를 사용하는 경우에 특히 유용합니다.

| 한정자        | 예제
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending)은 상태가 보류 중인 Go 리포지토리에 열린 끌어오기 요청과 일치합니다.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues)는 상태가 성공적이며 본문에 “finally”라는 단어가 있는 열린 끌어오기 요청과 일치합니다.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues)는 상태가 실패이며 2015년 5월에 열린 끌어오기 요청과 일치합니다.

## 커밋 SHA로 검색

커밋의 특정 SHA 해시를 알고 있는 경우 이를 사용하여 해당 SHA가 포함된 끌어오기 요청을 검색할 수 있습니다. SHA 구문은 7자 이상이어야 합니다.

| 한정자        | 예제
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues)는 `e1109ab`로 시작하는 커밋 SHA가 있는 끌어오기 요청과 일치합니다.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues)는 `0eff326d6213c`로 시작하는 커밋 SHA가 있는 병합된 끌어오기 요청과 일치합니다.

## 분기 이름으로 검색

끌어오기 요청의 출처인 분기(“헤드” 분기) 또는 병합 대상 분기(“기본” 분기)를 기반으로 끌어오기 요청을 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged)는 닫힌 “change”라는 단어로 시작하는 분기 이름에서 열린 끌어오기 요청과 일치합니다.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages)는 `gh-pages` 분기에 병합되는 끌어오기 요청과 일치합니다.

## 언어로 검색

`language` 한정자를 사용하면 특정 언어로 작성된 리포지토리 내에서 문제 및 끌어오기 요청을 검색할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues)은 Ruby 리포지토리에 있는 열린 문제와 일치합니다.

## 댓글 수로 검색

`comments` 한정자를 [보다 큼, 보다 작음 및 범위 한정자](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)와 함께 사용하여 댓글 수를 기준으로 검색할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues)은 100개가 넘는 댓글이 있는 닫힌 문제와 일치합니다.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues)은 500개에서 1,000개 사이의 댓글이 있는 문제와 일치합니다.

## 상호 작용 수로 검색

`interactions` 한정자와 함께 [보다 큼, 보다 작음 및 범위 한정자](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)를 사용하여 문제 및 끌어오기 요청을 상호 작용의 수로 필터링할 수 있습니다. 상호 작용 수는 문제 또는 끌어오기 요청에 대한 반응 및 댓글의 수입니다.

| 한정자        | 예제
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000)는 2000개가 넘는 상호 작용이 있는 끌어오기 요청 또는 문제와 일치합니다.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000)은 500개에서 1,000개 사이의 상호 작용이 있는 끌어오기 요청 또는 문제와 일치합니다.

## 반응 수로 검색

`reactions` 한정자와 함께 [보다 큼, 보다 작음 및 범위 한정자](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)를 사용하여 문제 및 끌어오기 요청을 반응의 수로 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues)는 1000개가 넘는 반응이 있는 문제와 일치합니다.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000)은 500개에서 1,000개 사이의 반응이 있는 문제와 일치합니다.

## 초안 끌어오기 요청 검색
초안 끌어오기 요청을 필터링할 수 있습니다. 자세한 내용은 “[끌어오기 요청 정보](/articles/about-pull-requests#draft-pull-requests)”를 참조하세요.

| 한정자        | 예제
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue)는 초안 끌어오기 요청과 일치합니다.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse)는 검토할 준비가 된 끌어오기 요청과 일치합니다.

## 끌어오기 요청 검토 상태 및 검토자로 검색

[검토 상태](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)(_없음_, _필수_, _승인됨_ 또는 _변경 요청됨_), 검토자 및 요청된 검토자를 기준으로 끌어오기 요청을 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues)은 검토되지 않은 끌어오기 요청과 일치합니다.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues)는 병합하기 전에 검토가 필요한 끌어오기 요청과 일치합니다.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues)는 검토자가 승인한 끌어오기 요청과 일치합니다.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues)는 검토자가 변경을 요청한 끌어오기 요청과 일치합니다.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues)은 특정 사용자가 검토한 끌어오기 요청과 일치합니다.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues)는 특정 사용자에게 검토를 요청한 끌어오기 요청과 일치합니다. 요청된 검토자는 끌어오기 요청을 검토한 후 검색 결과에 더 이상 나열되지 않습니다. 요청된 사람이 검토를 요청한 팀에 있는 경우 해당 팀에 대한 검토 요청도 검색 결과에 표시됩니다.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me**](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) 는 직접 검토하라는 요청을 받은 끌어오기 요청과 일치합니다.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) 는 팀의 `github/docs`검토 요청이 있는 끌어오기 요청과 일치합니다. 요청된 검토자는 끌어오기 요청을 검토한 후 검색 결과에 더 이상 나열되지 않습니다.

## 문제 또는 끌어오기 요청이 생성되거나 마지막으로 업데이트된 시점으로 검색

생성 시간 또는 마지막으로 업데이트된 시간을 기준으로 문제를 필터링할 수 있습니다. 문제 생성의 경우 `created` 한정자를 사용할 수 있습니다. 문제가 마지막으로 업데이트된 시점을 확인하려면 `updated` 한정자를 사용해야 합니다.

둘 다 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자        | 예제
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues)은 C#으로 작성된 리포지토리에서 2011년 이전에 만들어진 열린 문제와 일치합니다.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues)은 2013년 2월 이후에 업데이트된 본문에 “weird”라는 단어가 있는 문제와 일치합니다.

## 문제 또는 끌어오기 요청이 닫힌 시점으로 검색

`closed` 한정자를 사용하여 요청을 닫은 시점에 따라 문제 및 끌어오기 요청을 필터링할 수 있습니다.

이 한정자는 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자        | 예제
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues)은 2014년 6월 11일 이후에 종료된 Swift의 문제 및 끌어오기 요청과 일치합니다.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues)은 2012년 10월 이전에 닫힌 본문에 “data”라는 단어가 있는 문제 및 끌어오기 요청과 일치합니다.

## 끌어오기 요청이 병합된 시점으로 검색

`merged` 한정자를 사용하여 병합 시점에 따라 끌어오기 요청을 필터링할 수 있습니다.

이 한정자는 날짜를 매개 변수로 사용합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자        | 예제
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues)은 2011년 이전에 병합된 JavaScript 리포지토리의 끌어오기 요청과 일치합니다.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues)은 2014년 5월 이후에 병합된 제목에 “fast”라는 단어가 있는 Ruby의 끌어오기 요청과 일치합니다.

## 끌어오기 요청의 병합 여부를 기준으로 검색

`is` 한정자를 사용하여 병합되었거나 병합되지 않았는지 여부에 따라 끌어오기 요청을 필터링할 수 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=)는 “bug”라는 단어가 있는 병합된 끌어오기 요청과 일치합니다.
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=)가 열려 있거나 병합되지 않고 닫힌 “error”라는 단어가 있는 끌어오기 요청과 일치합니다.

## 리포지토리가 보관되는지 여부를 기준으로 검색

`archived` 한정자는 문제 또는 끌어오기 요청이 보관된 리포지토리에 있는지 여부에 따라 결과를 필터링합니다.

| 한정자     | 예제
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=)은 액세스 권한이 있는 보관된 리포지토리에 “GNOME”이라는 단어가 포함된 문제 및 끌어오기 요청과 일치합니다.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=)은 액세스 권한이 있는 보관되지 않은 리포지토리에 “GNOME”이라는 단어가 포함된 문제 및 끌어오기 요청과 일치합니다.

## 대화가 잠겨 있는지 여부를 기준으로 검색

`is` 한정자를 사용하여 잠긴 대화가 있는 문제 또는 끌어오기 요청을 검색할 수 있습니다. 자세한 내용은 “[대화 잠금](/communities/moderating-comments-and-conversations/locking-conversations)”을 참조하세요.

| 한정자        | 예제
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse)는 보관되지 않은 리포지토리에 잠긴 대화를 가진 “code of conduct”라는 단어가 있는 문제 또는 끌어오기 요청과 일치합니다.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse)는 보관되지 않은 리포지토리에 잠금 해제된 대화를 가진 “code of conduct”라는 단어가 있는 문제 또는 끌어오기 요청과 일치합니다.

## 누락된 메타데이터로 검색

`no` 한정자를 사용하여 특정 메타데이터가 누락된 문제 및 끌어오기 요청으로 검색 범위를 좁힐 수 있습니다. 해당 메타데이터에는 다음이 포함됩니다.

* 레이블
* 마일스톤
* 담당자
* 프로젝트

| 한정자        | 예제
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues)은 레이블이 없는 “priority”라는 단어가 있는 문제 및 끌어오기 요청과 일치합니다.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues)는 “sprint”라는 단어가 포함된 마일스톤과 연결되지 않은 문제와 일치합니다.
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues)는 “important”라는 단어가 포함되고 Java 리포지토리에 있는 담당자와 연결되지 않은 문제와 일치합니다.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues)는 “build”라는 단어가 포함된 프로젝트 보드와 연결되지 않은 문제와 일치합니다.

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
